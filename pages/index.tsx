import type { NextPage } from "next";
import Nav from "../components/Nav";
import Container from "../components/HomeStyle";

const Home: NextPage = () => {
  return (
    <Container>
      <Nav />
    </Container>
  );
};

export default Home;
