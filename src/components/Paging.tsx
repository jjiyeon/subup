import { Etc } from "./icon/IconIndex";
import UI from "./PagingStyle";
const Paging = () => {
  return (
    <UI.Paging>
      <UI.PagingUl>
        <UI.PagingLi className="_curr">1</UI.PagingLi>
        <UI.PagingLi>2</UI.PagingLi>
        <UI.PagingLi>3</UI.PagingLi>
        <UI.PagingLi className="_etc">
          <Etc />
        </UI.PagingLi>
        <UI.PagingLi>10</UI.PagingLi>
        <UI.PagingLi className="_next">Next</UI.PagingLi>
      </UI.PagingUl>
    </UI.Paging>
  );
};

export default Paging;
