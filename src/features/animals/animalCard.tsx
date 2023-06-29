import { AnimalType } from "./animals";
import PawIcon from "./../../assets/images/paw.png";
import HabitatIcon from "./../../assets/images/habitat.png";
import DietIcon from "./../../assets/images/diet.png";
import Button from "../../components/button";

type AnimalProps = {
  animal: AnimalType;
  onDelete: (id: string) => void;
};

const AnimalCard = ({ animal, onDelete }: AnimalProps) => {
  const { name, species, animalClass, diet, habitat, id } = animal;

  return (
    <div className="card">
      <div className="card__title">
        <img
          className="card__title__image"
          width={100}
          src={`https://source.unsplash.com/random/500×500/?${animal.name.replace(
            " ",
            "-"
          )}`}
        />
        <div>
          <div>{name}</div>
          <div className="card__title__subtitle">{species}</div>
        </div>
      </div>
      <div className="card__item">
        <span>
          <img src={PawIcon} />
        </span>
        <span>{animalClass}</span>
      </div>
      <div className="card__item">
        {" "}
        <span>
          <img src={DietIcon} />
        </span>
        <span>{diet}</span>
      </div>
      <div className="card__item">
        {" "}
        <span>
          <img src={HabitatIcon} />
        </span>
        <span>{habitat}</span>
      </div>
      <div>
        <Button text="Delete" color="red" onClick={() => onDelete(id)} />
      </div>
    </div>
  );
};
export default AnimalCard;
