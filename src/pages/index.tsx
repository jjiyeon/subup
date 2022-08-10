import type { NextPage } from "next";
import Nav from "../components/Nav";
import Container from "../components/HomeStyle";
import Main from "../components/Main";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
     
    body {
        margin: 0;
        padding: 0;
    }
    
`;
const Home: NextPage = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Nav />
        <Main></Main>
      </Container>
    </>
  );
};

export default Home;
