import UI from "./MainStyle";
import { Search, Noti, Avatar, Add, True, Arrow, Etc } from "../icon/IconIndex";
import { ProjectData, Size } from "interfaces/Project";
import Image from "next/image";
import {
  AddPriceComma,
  SplitLanguageData,
  TransSecond,
} from "../../utils/ProjectUtilsFn";
interface Props {
  projectData?: ProjectData[];
  children: React.ReactNode;
  deviceSize?: Size;
}
type ProgressType = {
  [key: number]: string;
};
const Main = ({ projectData, children }: Props) => {
  const ProgressStatus: ProgressType = {
    0: "Unclaimed",
    1: "In Progress",
    2: "In Progress",
    3: "Done",
    4: "Review",
  };
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
            {projectData ? (
              projectData.map((item, index) => (
                <UI.Tr key={index}>
                  <UI.Td>
                    <UI.ProgressStatus code={item.status}>
                      {item.status != null
                        ? ProgressStatus[item.status]
                        : "미정"}
                    </UI.ProgressStatus>
                    {item.status ? (
                      item.status === 0 || item.status === 3 ? (
                        ""
                      ) : (
                        <UI.ProgressBar code={item.status}>
                          progress bar..
                        </UI.ProgressBar>
                      )
                    ) : (
                      ""
                    )}
                  </UI.Td>
                  <UI.Td>
                    <p>{item.incharge ? item.incharge : "담당미정"}</p>
                  </UI.Td>
                  <UI.Td>
                    <a href={item.url} target="_blank" rel="noreferrer">
                      <p>
                        <Image
                          layout="fill"
                          src={`${item.thumbnail}`}
                          unoptimized={true}
                          alt="thumbnail image"
                        />
                        <span>{TransSecond(item.duration)}</span>
                      </p>
                      <p>{item.title}</p>
                    </a>
                  </UI.Td>
                  <UI.Td>
                    <True />
                  </UI.Td>
                  <UI.Td>{AddPriceComma(item.price)}원</UI.Td>
                  <UI.Td>
                    <UI.LangButton>
                      {SplitLanguageData(item.language)[0]}
                    </UI.LangButton>
                    <Arrow />
                    <UI.LangButton>
                      {SplitLanguageData(item.language)[1]}
                    </UI.LangButton>
                  </UI.Td>
                  <UI.Td className="_last">
                    <Etc />
                  </UI.Td>
                </UI.Tr>
              ))
            ) : (
              <>
                <UI.Tr className="_error">
                  <UI.Td colSpan={7}>다시 시도해 주세요!</UI.Td>
                </UI.Tr>
              </>
            )}
          </UI.Tbody>
        </UI.Table>
        {children}
      </UI.MainContent>
    </UI.MainContainer>
  );
};

export default Main;
