import Container from "../../components/container";
import Devider from "../../components/devider";
import Select from "./select";
export type OptionType = {
  label: string;
  value: string;
};
const selectOptions: OptionType[] = [
  {
    label: "Option 1",
    value: "Option-1",
  },
  {
    label: "Option 2",
    value: "Option-2",
  },
  {
    label: "Option 3",
    value: "Option-3",
  },
  {
    label: "Option 4",
    value: "Option-4",
  },
  {
    label: "Option 5",
    value: "Option-5",
  },
  {
    label: "Option 6",
    value: "Option-6",
  },
];

const SelectPage = () => {
  return (
    <Container>
      <h1>Select</h1>
      <Devider />
      <p>
        Select komponenta prima "options" prop koji je zapravo lista objekata
        tipa "OptionsType". Osim optiona moze primiti i placeholder prop koji ce
        nam se ispisati kao defaultni label unuitra dropdowna
      </p>
      <p>
        Komponenta također prima onChange callback koji nam daje dogadaj na
        svaku promjenu vrijdnosti unutar naseg dropdowna
      </p>
      <Select
        options={selectOptions}
        placeholder="Select"
        onChange={(option) => console.log(option)}
      />
    </Container>
  );
};
export default SelectPage;
