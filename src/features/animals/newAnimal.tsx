import { useState } from "react";
import Container from "../../components/container";
import Devider from "../../components/devider";
import Field from "../../components/field";
import { AnimalType } from "./animals";
import Button from "../../components/button";

const initialData: AnimalType = {
  animalClass: "",
  diet: "",
  habitat: "",
  name: "",
  species: "",
};

const NewAnimal = () => {
  const [inputsValue, setInputsValue] = useState<AnimalType>(initialData);

  const handleInputsValue = (id: string, value: string) => {
    const newState: AnimalType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };
  return (
    <Container>
      <h1>Create a new animal</h1>
      <Devider />
      <div>
        <Field
          id="name"
          label="Name of animal"
          value={inputsValue.name}
          onChange={(newValue) => handleInputsValue(newValue, "name")}
        />
        <Field
          id="species"
          label="Name of species"
          value={inputsValue.species}
          onChange={(newValue) => handleInputsValue(newValue, "species")}
        />
        <Field
          id="diet"
          label="Name of diet"
          value={inputsValue.diet}
          onChange={(newValue) => handleInputsValue(newValue, "diet")}
        />
        <Field
          id="habitat"
          label="Name of habitat"
          value={inputsValue.habitat}
          onChange={(newValue) => handleInputsValue(newValue, "habitat")}
        />
        <Field
          id="animalClass"
          label="Name of animal Class"
          value={inputsValue.animalClass}
          onChange={(newValue) => handleInputsValue(newValue, "animal Class")}
        />
      </div>
      <Button text="Add animal" onClick={() => console.log(inputsValue)} />
    </Container>
  );
};
export default NewAnimal;
