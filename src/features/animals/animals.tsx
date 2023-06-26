import Container from "../../components/container";
import React, { useEffect, useState } from "react";
import Devider from "../../components/devider";
import AnimalCard from "./animalCard";
import Loader from "../loader/loader";
import Pagination from "../../components/pagination";

export type AnimalType = {
  name: string;
  species: string;
  animalClass: string;
  diet: string;
  habitat: string;
};

//Rows per page (limit koliko itema vidimo od jednom)
const rpp = 8;
const noOfItems = 20;
const numberOfPages = Math.ceil(20 / 8);

const Animals = () => {
  const [animals, setAnimals] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const fetchAnimalsData = () => {
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
    fetchAnimalsData();
  }, [page]);

  return (
    <Container>
      <Loader isActive={loading} />
      <Devider />
      Animals
      <Devider />
      <div className="grid grid--primary">
        {animals.map((animal) => (
          <AnimalCard animal={animal} />
        ))}
      </div>
      <div>
        <Pagination
          onPaginate={(activePage) => {
            console.log(activePage);
          }}
        />
      </div>
    </Container>
  );
};
export default Animals;
