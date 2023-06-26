import { AnimalType } from "./animals";
import PawIcon from "./../../../public/paw.png";
import HabitatIcon from "./../../../public/habitat.png";
import DietIcon from "./../../../public/diet.png";

type AnimalProps = {
  animal: AnimalType;
};

const AnimalCard = ({ animal }: AnimalProps) => {
  const { name, species, animalClass, diet, habitat } = animal;

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
    </div>
  );
};
export default AnimalCard;
