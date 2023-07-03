import { AnimalType } from "./animals";
import PawIcon from "./../../assets/images/paw.png";
import HabitatIcon from "./../../assets/images/habitat.png";
import DietIcon from "./../../assets/images/diet.png";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";

type AnimalProps = {
  animal: AnimalType;
  onDelete: (id: string) => void;
};

const AnimalCard = ({ animal, onDelete }: AnimalProps) => {
  const { name, species, animalClass, diet, habitat, id } = animal;
  const navigate = useNavigate();

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
        <img
          src={`https://icons-for-free.com/iconfiles/png/512/svg+create+edit+edit+file+office+pencil+writing+creativ+icon-1320185158722776676.png`}
          width={70}
          height={70}
          className="card__title__image__edit"
          onClick={() => navigate(`/animals/${id}`)}
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
      <div className="card__button__wrapper">
        <Button
          text="Delete"
          color="red"
          onClick={() => onDelete(id)}
          size="sm"
        />
      </div>
    </div>
  );
};
export default AnimalCard;
