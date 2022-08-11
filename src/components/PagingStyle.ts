import styled from "styled-components";

const Paging = styled.div`
  position: absolute;
  width: 100%;
  bottom: 14%;
  left: 0;
`;
const PagingUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 5px;
`;
const PagingLi = styled.li`
  &._curr {
    background: #a3aed0;
    color: #fff;
  }
  width: 42px;
  height: 42px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #a3aed0;
  color: #a3aed0;
  box-sizing: border-box;
  &._etc {
    border: 0;
  }
  &._next {
    width: 69px;
    height: 43px;
  }
  svg {
    transform: rotate(-90deg);
  }
`;

const UI = {
  Paging,
  PagingUl,
  PagingLi,
};

export default UI;
