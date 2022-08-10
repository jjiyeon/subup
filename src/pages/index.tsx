import type { NextPage } from "next";
import Nav from "../components/Nav";
import Container from "../components/HomeStyle";
import Main from "../components/Main";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import useSWR from "swr";
import axios from "axios";

const GlobalStyles = createGlobalStyle`
    ${reset}
     
    body {
        margin: 0;
        padding: 0;
    }
    
`;
const Home: NextPage = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR("/api/projects", fetcher);
  return (
    <>
      <GlobalStyles />
      <Container>
        <Nav />
        <Main projectData={data}></Main>
      </Container>
    </>
  );
};

export default Home;
