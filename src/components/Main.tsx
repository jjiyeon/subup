import UI from "./MainStyle";
import { Search, Noti, Avatar, Add, True, Arrow, Etc } from "./icon/IconIndex";
import { ProjectData } from "interfaces/Project";
import Image from "next/image";
import { AddPriceComma } from "../utils/ProjectUtilsFn";
interface Props {
  projectData: ProjectData[];
  children: React.ReactNode;
}
const Main = ({ projectData, children }: Props) => {
  return (
    <UI.MainContainer>
      <UI.MainHeader>
        <UI.PageTitle>
          <p>Pages / Projects</p>
          <h2>Projects</h2>
        </UI.PageTitle>
        <UI.SearchBar>
          <Search className="icon-search" />
          <UI.SearchInput placeholder="Search Query"></UI.SearchInput>
          <UI.SearchSide>
            <Noti className="icon-noti" />
            <Avatar className="icon-kodori" />
          </UI.SearchSide>
        </UI.SearchBar>
      </UI.MainHeader>

      <UI.MainContent>
        <UI.Addbutton>
          <Add />
          Add a Project
        </UI.Addbutton>
        <UI.Table>
          <UI.Thead>
            <UI.Tr>
              <UI.Th>Status</UI.Th>
              <UI.Th>Translator</UI.Th>
              <UI.Th>Video</UI.Th>
              <UI.Th>Time coded</UI.Th>
              <UI.Th>Price / Min</UI.Th>
              <UI.Th>Language</UI.Th>
              <UI.Th>etc.</UI.Th>
            </UI.Tr>
          </UI.Thead>
          <UI.Tbody>
            {projectData
              ? projectData.map((item, index) => (
                  <>
                    <UI.Tr key={index}>
                      <UI.Td>
                        <span>4일 23시간 30분</span>
                        <p>In Progress(홍길동)</p>
                      </UI.Td>
                      <UI.Td>
                        <p>{item.incharge ? item.incharge : "담당미정"}</p>
                      </UI.Td>
                      <UI.Td>
                        <p>
                          <Image
                            width={90}
                            height={51}
                            layout="fill"
                            src={`${item.thumbnail}`}
                            alt="thumbnail image"
                          />
                          <span>1:45:00</span>
                        </p>
                        <p>{item.title}</p>
                      </UI.Td>
                      <UI.Td>
                        <True />
                      </UI.Td>
                      <UI.Td>{AddPriceComma(item.price)}원</UI.Td>
                      <UI.Td>
                        <UI.LangButton>Korean</UI.LangButton>
                        <Arrow />
                        <UI.LangButton>English</UI.LangButton>
                      </UI.Td>
                      <UI.Td>
                        <Etc />
                      </UI.Td>
                    </UI.Tr>
                  </>
                ))
              : ""}
          </UI.Tbody>
        </UI.Table>
        {children}
      </UI.MainContent>
    </UI.MainContainer>
  );
};

export default Main;
