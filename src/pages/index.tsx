import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Container from "../components/HomeStyle";
import Nav from "../components/nav/Nav";
import Main from "../components/main/Main";
import Paging from "@components/paging/Paging";
import useSWR from "swr";
import axios from "axios";
import { Size, ProjectData } from "interfaces/Project";

const Home: NextPage = () => {
  const [size, setSize] = useState<Size>();
  const fetcher = (url: string) =>
    axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => {
        error.response;
      });
  const { data } = useSWR("/api/projects", fetcher);

  const resizeHanlder = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setSize({
      width: width,
      height: height,
    });
  };

  useEffect(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);
  useEffect(() => {
    window.onresize = resizeHanlder;
  }, []);
  return (
    <>
      <Container>
        <Nav deviceSize={size} />
        <Main projectData={data} deviceSize={size}>
          <Paging />
        </Main>
      </Container>
    </>
  );
};

export default Home;
