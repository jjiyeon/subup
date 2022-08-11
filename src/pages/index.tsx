import type { NextPage } from "next";
import Container from "../components/HomeStyle";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Paging from "@components/Paging";
import useSWR from "swr";
import axios from "axios";
import { useEffect, useState } from "react";
import { Size } from "interfaces/Project";

const Home: NextPage = () => {
  const [size, setSize] = useState<Size>();
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR("/api/projects", fetcher);

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
    console.log("index resize useEffect");
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
