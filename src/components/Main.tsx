import UI from "./MainStyle";
import { Search, Noti, Avatar, Add } from "./icon/IconIndex";
const Main = () => {
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
            <UI.Tr>
              <UI.Td>
                <span>4일 23시간 30분</span>
                <p>In Progress(홍길동)</p>
              </UI.Td>
              <UI.Td>
                <p>홍길동</p>
              </UI.Td>
              <UI.Td>
                <p>
                  <span>1:45:00</span>
                </p>
                <p>[Playlist] 침착하게 완성하는 오늘은 좋은날</p>
              </UI.Td>
              <UI.Td>0</UI.Td>
              <UI.Td>3,000원</UI.Td>
              <UI.Td>
                <button>Korean</button>
                <button>English</button>
              </UI.Td>
              <UI.Td>...</UI.Td>
            </UI.Tr>

            <UI.Tr>
              <UI.Td>
                <span>4일 23시간 30분</span>
                <p>In Progress(홍길동)</p>
              </UI.Td>
              <UI.Td>
                <p>홍길동</p>
              </UI.Td>
              <UI.Td>
                <p>
                  <span>1:45:00</span>
                </p>
                <p>[Playlist] 침착하게 완성하는 오늘은 좋은날</p>
              </UI.Td>
              <UI.Td>0</UI.Td>
              <UI.Td>3,000원</UI.Td>
              <UI.Td>
                <button>Korean</button>
                <button>English</button>
              </UI.Td>
              <UI.Td>...</UI.Td>
            </UI.Tr>
          </UI.Tbody>
        </UI.Table>
      </UI.MainContent>
    </UI.MainContainer>
  );
};

export default Main;
