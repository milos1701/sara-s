import styled from "@emotion/styled";

import {Typography} from "@mui/material";

import Logo from "@/assets/logo.png";

const NavBar = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #B11F31;
  opacity: 0.9;
  color: #FFFFFF;
`;

const NavBarButton = styled.div`
  border-right: 1px solid #FFFFFF;
  padding: 20px 10px;
`;

const App = () => {
  return (
    <NavBar>
      <img
        src={Logo}
        style={{height: "50px", width: "50px"}}
      />
      <NavBarButton>
        <Typography>
          Hello World
        </Typography>
      </NavBarButton>
    </NavBar>
  );
};

export default App;
