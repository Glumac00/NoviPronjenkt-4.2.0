import { useState } from "react";
import Container from "../../components/container";
import Devider from "../../components/devider";
import Field from "../../components/field";
import { AnimalType } from "./animals";
import Button from "../../components/button";
import { ValuesType } from "../../assets/types";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export const dataHeaders = {
  "Content-Type": "application/json",
};

type InputsType = {
  id: string;
  label: string;
};

export const initialData: Omit<AnimalType, "id"> = {
  name: "",
  species: "",
  diet: "",
  habitat: "",
  animalClass: "",
};

export const baseInputs: InputsType[] = [
  {
    id: "name",
    label: "name of an animal",
  },
  {
    id: "species",
    label: "species of an animal",
  },
  {
    id: "diet",
    label: "diet of an animal",
  },
  {
    id: "habitat",
    label: "habitat of an animal",
  },
  {
    id: "animalClass",
    label: "class of an animal",
  },
];

//ZADACA - spojit create i edit animal

const NewAnimal = () => {
  const [inputsValue, setInputsValue] = useState<ValuesType>(initialData);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const handleInputsValue = (value: string, id: string) => {
    const newState: ValuesType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };

  const onSubmit = (inputsValue: ValuesType) => {
    //varijabla koja oznacava jel se dogodio error
    let getOut = false;

    //string u kojem drzimo popis inputa u kojima se dogodio error
    let errorInputs = "";

    //const keys = Object.keys(inputsValue);
    //for (let i = 0; i < keys.length; i++) {
    //  if (inputsValue[keys[i]] === "") {
    //    getOut = true;
    //    break;
    //  }
    //}

    //mapiramo sve keyeve i provjeravamo koji su prazni
    Object.keys(inputsValue).forEach((key) => {
      if (inputsValue[key] === "") {
        getOut = true;
        errorInputs = errorInputs + key + ", ";
      }
    });
    if (getOut) {
      setError(
        "moraju svi inputi biti popunjeni kako bih se stvorila nova kartica sa životinjom! Inputi koji se trebaju popuniti su: " +
          errorInputs.substring(0, errorInputs.length - 2)
      );
      return;
    } else {
      setError("");
    }
    const obj = inputsValue;
    obj.id = uuidv4();
    //logika za request
    fetch("http://localhost:3000/animals", {
      method: "POST",
      headers: dataHeaders,
      body: JSON.stringify(inputsValue),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        navigate("/animals");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <h1>Create a new animal</h1>
      <Devider />
      {error && <div className="message message--error">{error}</div>}
      <div>
        {baseInputs.map((field) => {
          return (
            <Field
              key={field.id}
              id={field.id}
              label={field.label}
              value={inputsValue[field.id]}
              onChange={(newValue) => handleInputsValue(newValue, field.id)}
            />
          );
        })}
      </div>
      <Button text="Add animal" onClick={() => onSubmit(inputsValue)} />
    </Container>
  );
};
export default NewAnimal;
