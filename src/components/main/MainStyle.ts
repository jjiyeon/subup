import styled from "styled-components";
import { HD_Width } from "const/Viewport";
interface StatusCode {
  code: number;
}

const MainContainer = styled.main`
  font-family: "Noto Sans KR", sans-serif;
  background-color: #f4f7fe;
  width: calc(100% - 290px);
  position: relative;
  overflow: hidden;
  @media screen and (max-width: ${HD_Width}px) {
    width: calc(100% - 75px);
  }
  button {
    cursor: pointer;
  }
`;
const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 49px 29px 31px 30px;
`;
const PageTitle = styled.div`
  display: inline-block;
  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: #707eae;
  }
  h2 {
    font-size: 34px;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: -0em;
    color: #2b3674;
  }
`;
const SearchBar = styled.div`
  width: 422px;
  height: 61px;
  background: #fff;
  border-radius: 30px;
  display: inline-block;
  position: relative;
  svg {
  }
  svg.icon-search {
    position: absolute;
    top: 25px;
    left: 30px;
  }
  svg.icon-noti {
  }
  svg.icon-koori {
  }
`;
const SearchInput = styled.input`
  width: 315px;
  height: 41px;
  border: 0;
  background: #f4f7fe;
  border-radius: 49px;
  margin: 10px;
  padding: 0 0 0 42px;
  box-sizing: border-box;
`;
const SearchSide = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  top: 0;
  right: 10px;
  gap: 13px;
  align-items: center;
`;
const MainContent = styled.div`
  width: 1080px;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 17px;
`;
const Addbutton = styled.button`
  width: 170px;
  height: 40px;
  border: 0;
  background: #fff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13.81px;
  color: #2368ff;
  font-size: 14px;
  font-weight: 700;
`;
const Table = styled.table`
  width: 100%;
`;
const Thead = styled.thead`
  border-radius: 8px;
  height: 40px;
  background: #2b3674;
  color: #fff;
  display: block;
  font-size: 14px;
  font-weight: 700;
`;
const Tbody = styled.tbody`
  background: #fff;
  border-radius: 16px;
  display: block;
  margin-top: 6px;
  box-sizing: border-box;
  tr {
    height: 61px;
    border-bottom: 1px solid #efefef;
  }
`;
const Tr = styled.tr`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 19px;

  th:nth-child(1),
  td:nth-child(1) {
    width: 170px;
    flex-direction: column;
  }
  th:nth-child(2) {
    width: 91px;
  }
  td:nth-child(2) {
    width: 91px;
    font-weight: 500;
    color: #4b4e51;
    font-size: 14px;
  }
  th:nth-child(3) {
    width: 285px;
  }
  td:nth-child(3) {
    a {
      width: 285px;
      height: 100%;
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 9px;
      font-size: 12px;
      line-height: 16px;
      color: #4b4e51;
      font-weight: 700;
      padding: 0 0 0 4px;
      p:nth-child(1) {
        width: 90px;
        height: 51px;
        position: relative;
        background-color: tomato;
      }
      span {
        width: 100%;
        height: 25px;
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: end;
        align-items: center;
        padding-right: 9px;
        color: #fff;
        font-weight: 700;
        background: rgba(0, 0, 0, 0.7);
      }
    }
  }
  th:nth-child(4),
  td:nth-child(4) {
    width: 91px;
  }
  th:nth-child(5) {
    width: 170px;
  }
  td:nth-child(5) {
    width: 170px;
    color: #43a047;
    font-size: 14px;
    font-weight: 700;
  }
  th:nth-child(6),
  td:nth-child(6) {
    width: 194px;
    gap: 4.8px;
  }
  th:nth-child(7),
  td:nth-child(7) {
    width: 79px;
  }
`;
const Th = styled.th``;
const Td = styled.td`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #efefef;
  box-sizing: border-box;
  &._last {
    border-right: 0;
  }
`;
const ProgressBar = styled.span<StatusCode>`
  width: 142px;
  height: 6px;
  background: #c9cccd;
  border-radius: 8px;
  text-indent: -99999px;
  position: relative;

  &::after {
    content: "";
    height: 6px;
    position: absolute;
    top: 0;
    left: 0;
    background: #ffc107;
    ${(props: StatusCode) =>
      props.code === 1 &&
      `
        width: calc(142px / 3);
      `}
    ${(props: StatusCode) =>
      props.code === 2 &&
      `
        width: calc(142px - (142px / 3));
        
      `}
  }
`;

const ProgressStatus = styled.p<StatusCode>`
  font-weight: 700;
  ${(props: StatusCode) =>
    props.code === 0 &&
    `color : #9CA3B4;
    `}
  ${(props: StatusCode) =>
    props.code === 1 &&
    `color : #FFC107;
    `}
  ${(props: StatusCode) =>
    props.code === 2 &&
    `color : #FFC107;
    `}
    ${(props: StatusCode) =>
    props.code === 3 &&
    `color : #2368FF;
    `}
`;
const LangButton = styled.button`
  width: 67px;
  height: 32px;
  border: 0;
  background: #2b3674;
  color: #fff;
  border-radius: 18px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
`;

const UI = {
  MainContainer,
  MainHeader,
  PageTitle,
  SearchBar,
  SearchInput,
  SearchSide,
  MainContent,
  Addbutton,
  Table,
  Tbody,
  Tr,
  Thead,
  Th,
  Td,
  LangButton,
  ProgressBar,
  ProgressStatus,
};

export default UI;
