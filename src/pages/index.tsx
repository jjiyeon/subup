import type { NextPage } from "next";
import Container from "../components/HomeStyle";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Paging from "@components/Paging";
import useSWR from "swr";
import axios from "axios";

const Home: NextPage = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR("/api/projects", fetcher);
  return (
    <>
      <Container>
        <Nav />
        <Main projectData={data}>
          <Paging />
        </Main>
      </Container>
    </>
  );
};

export default Home;
