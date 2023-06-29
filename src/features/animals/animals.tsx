import Container from "../../components/container";
import { useEffect, useState } from "react";
import Devider from "../../components/devider";
import AnimalCard from "./animalCard";
import Loader from "../loader/loader";
import Pagination from "../../components/pagination";
import Select from "../select/select";
import { OptionType } from "../select/select-page";
import FloatingButton from "../../components/floatingButton";
import { Link, useNavigate } from "react-router-dom";

export const dataHeaders = {
  "Content-Type": "application/json",
};

export type AnimalType = {
  id: string;
  name: string;
  species: string;
  animalClass: string;
  diet: string;
  habitat: string;
};

//Rows per page (limit koliko itema vidimo od jednom)

const rppOptions: OptionType[] = [
  {
    label: "4",
    value: "4",
  },
  {
    label: "8",
    value: "8",
  },
  {
    label: "12",
    value: "12",
  },
];

const Animals = () => {
  const [animals, setAnimals] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [rpp, setRpp] = useState<number>(8);
  const [noOfItems, setNoOfItems] = useState<number>(0);

  const navigate = useNavigate();

  const fetchAnimalsData = () => {
    setLoading(true);
    fetch(`http://localhost:3000/animals?_page=${page}&_limit=${rpp}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          setAnimals(data);
          setLoading(false);
        }, 2000);
      });
  };

  const fetchAnimalsCount = () => {
    fetch(`http://localhost:3000/animals`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNoOfItems(data.length);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id: string) => {
    fetch(`http://localhost:3000/animals/${id}`, {
      method: "DELETE",
      headers: dataHeaders,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("obrisan");
        fetchAnimalsData;
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAnimalsCount();
  }, []);

  useEffect(() => {
    if (noOfItems > 0) {
      const numberOfPages = Math.ceil(noOfItems / rpp);
      if (page > numberOfPages) {
        setPage(numberOfPages);
      } else {
        fetchAnimalsData();
      }
    }
  }, [page, rpp, noOfItems]);

  return (
    <Container>
      <Loader isActive={loading} />
      <div className="animals__header">
        <h1 className="animals__title">Animals</h1>
        <Select
          defaultValue={rppOptions[1]}
          options={rppOptions}
          onChange={(activeRpp) => setRpp(Number(activeRpp.value))}
        />
      </div>
      <Devider />
      <div className="grid grid--primary">
        {animals.map((animal) => (
          <AnimalCard
            animal={animal}
            onDelete={(id: string) => handleDelete(id)}
          />
        ))}
      </div>
      <Pagination
        activePage={page}
        onPaginate={(activePage) => {
          setPage(activePage);
        }}
        numberOfPages={Math.ceil(noOfItems / rpp)}
      />
      <FloatingButton onClick={() => navigate("/animals/new")} />
    </Container>
  );
};
export default Animals;
