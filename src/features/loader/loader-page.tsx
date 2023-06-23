import Container from "../../components/container";
import Devider from "../../components/devider";
import Loader from "./loader";

const LoaderPage = () => {
  return (
    <div>
      <h1>Loader</h1>
      <Container>
        <Devider />
        <Loader />
        <Devider />
      </Container>
    </div>
  );
};
export default LoaderPage;
