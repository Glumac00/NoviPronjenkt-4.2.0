import Container from "../../components/container";
import { useEffect, useState } from "react";
import Devider from "../../components/devider";
import AnimalCard from "./animalCard";
import Loader from "../loader/loader";
import Pagination from "../../components/pagination";
import Select from "../select/select";
import { OptionType } from "../select/select-page";
import FloatingButton from "../../components/floatingButton";

export type AnimalType = {
  name: string;
  species: string;
  animalClass: string;
  diet: string;
  habitat: string;
};

//Rows per page (limit koliko itema vidimo od jednom)

const noOfItems = 20;
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
  useEffect(() => {
    const numberOfPages = Math.ceil(noOfItems / rpp);
    if (page > numberOfPages) {
      setPage(numberOfPages);
    } else {
      fetchAnimalsData();
    }
  }, [page, rpp]);

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
          <AnimalCard animal={animal} />
        ))}
      </div>
      <Pagination
        activePage={page}
        onPaginate={(activePage) => {
          setPage(activePage);
        }}
        numberOfPages={Math.ceil(noOfItems / rpp)}
      />
      <FloatingButton />
    </Container>
  );
};
export default Animals;
