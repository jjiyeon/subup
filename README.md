# 서브업 사전과제

서브업 사전과제 설명 리드미입니다.

## 요청사항

<aside>
💡 projects.ts에 있는 data를 이용하여 피그마와 같이 user interface 만드는 작업입니다.
Figma: [https://www.figma.com/file/gy44UJpiAJliNgLdY1xbAN/sample-editor]
Next.js with TypeScript
("projects.ts" goes into "/pages/api/")
Please put the projects.ts inside "pages/api/"
Make the project page
(you don't have to follow Figma at 100%)
You can use pure css or any other framework you like
fetch the data from the api link (hint: useSWR) and display it

</aside>

## 구현상세

👉  구현 상세 미리보기 [https://subup.netlify.app/] 👈

- [x] FHD / HD 화면 컴포넌트 작업
- [x] 프로젝트 기술 스택 및 사용한 라이브러리
  - [x] Nextjs with Typescript
  - [x] styled-component
  - [x] SWR, Axios
- [x] projects.ts API 데이터 화면 구현 예시

  ```
  interface ProjectData {
    thumbnail: string;
    title: string;
    url: string;
    duration: number;
    status: number;
    incharge: string;
    price: number;
    language: string;
  }

  const ProgressStatus: ProgressType = {
      0: "Unclaimed",
      1: "In Progress",
      2: "In Progress",
      3: "Done",
      4: "Review",
    };
  ```

  1. status 코드에 따라 Status 상태를 표시
  2. incharge 값은 Translator로 담당자 표시
  3. thumbnail, url, title 값을 화면 Video 영역에 구현
  4. Timecoded는 어떤값을 사용하는게 좋을지 몰라, O로 동일하게 표시했습니다.
  5. price 가격은 Price/Min 컬럼에 표시
  6. language 데이터는 ‘KREN’ 이렇게 들어오는 값을 KR , EN으로 분리해서 Language 버튼으로 그렸습니다.
