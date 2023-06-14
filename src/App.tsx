import { useState } from "react";
import ChartIcon from "./assets_icons/charticon";
import StarIcon from "./assets_icons/staricon";
import Button from "./components/button";
import Container from "./components/container";
import Devider from "./components/devider";
import Input from "./components/input";
import Modal from "./components/modal";
import "./styles/styles.scss";
type ObjType = {
  [key: string]: string;
};
const obj: ObjType = {
  firstName: "",
  lastName: "",
};

function App() {
  const [inputsValue, setInputsValue] = useState<ObjType>(obj);
  const handleInputsValue = (value: string, id: string) => {
    const newState: ObjType = { ...inputsValue };
    inputsValue[id] = value;
    setInputsValue(newState);
  };
  const [brandNewState, setBrandNewState] = useState<string>("");

  return (
    <>
      <h1> Small yellow rubber duck </h1>
      <Devider marginTop="md" marginBottom="md" />
      <Button text="Moj novi gumbitč" color="red" />
      <Devider marginTop="md" marginBottom="md" />

      <Container>
        <h2>neki drugi naslov tipa podnaslov</h2>
        <div>peepeepoopoo</div>
        <Devider marginTop="md" marginBottom="md" />
        <Input
          value={inputsValue.firstName}
          placeholder="First Name..."
          icon={<StarIcon />}
          onChange={(value: string) => {
            handleInputsValue(value, "firstName");
          }}
        />
        <Devider marginTop="md" marginBottom="md" />
        <Input
          value={inputsValue.lastName}
          placeholder="Last name..."
          icon={<ChartIcon />}
          onChange={(value: string) => {
            handleInputsValue(value, "lastName");
          }}
        />
        <Devider marginTop="md" marginBottom="md" />
        <Input
          disable={true}
          value={brandNewState}
          onChange={(value: string) => {
            setBrandNewState(value);
          }}
        />
        <Devider marginTop="md" marginBottom="md" />
        <Modal content="My name is walter hartwell white" />
      </Container>
    </>
  );
}

export default App;
