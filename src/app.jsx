import {useState} from "react";

import styled from "@emotion/styled";

import Logo from "@/assets/logo.png";

const Container = styled.div`
  background-color: #E6D4B5;
  inset: 0;
  position: absolute;
`;

const NavBar = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  background-color: #B11F31;
  color: #FFFFFF;
  gap: 20px;
  padding: 0 20px;
  z-index: 1000;
  position: relative;
  box-shadow: 0px 5px 10px rgba(177, 31, 49, 0.4);
`;

const NavBarButton = styled.div`
  padding: 0 2px;
  cursor: pointer;
  user-select: none;
  scale: ${({selected}) => selected ? 1.3 : 1};
  font-weight: ${({selected}) => selected ? 600 : 400};
  margin-left: ${({selected}) => selected ? 5 : 0}px;

  transition: border-bottom ease-in-out 200ms, scale ease-in-out 200ms, font-weight ease-in-out 200ms;
`;

const App = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <>
      <NavBar>
        <img
          src={Logo}
          style={{height: "50px", width: "50px", marginRight: "10px"}}
        />
        <NavBarButton
          selected={selectedTabIndex === 1}
          onClick={() => setSelectedTabIndex(1)}
        >
          Pocetna
        </NavBarButton>
        <NavBarButton
          selected={selectedTabIndex === 2}
          onClick={() => setSelectedTabIndex(2)}
        >
          Ketering
        </NavBarButton>
        <NavBarButton
          selected={selectedTabIndex === 3}
          onClick={() => setSelectedTabIndex(3)}
        >
          Sobe
        </NavBarButton>
        <NavBarButton
          selected={selectedTabIndex === 4}
          onClick={() => setSelectedTabIndex(4)}
        >
          Specijal dana
        </NavBarButton>

        <div style={{flexGrow: 1}} />

        <NavBarButton
          selected={selectedTabIndex === 5}
          onClick={() => setSelectedTabIndex(5)}
        >
          Galerija
        </NavBarButton>

        <NavBarButton
          selected={selectedTabIndex === 6}
          onClick={() => setSelectedTabIndex(6)}
        >
          O Nama
        </NavBarButton>
      </NavBar>
      <Container>
        Content
      </Container>
    </>
  );
};

export default App;
