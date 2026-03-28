import {useState} from "react";
import {Scrollbars} from "react-custom-scrollbars-2";
import {
  Route,
  Routes,
  useLocation,
  useNavigate
} from "react-router-dom";

import styled from "@emotion/styled";

import Footer from "@/components/footer";
import Contact from "@/pages/contact";
import Delivery from "@/pages/delivery";
import Employment from "@/pages/employment";
import Home from "@/pages/home";
import Locations from "@/pages/locations";
import News from "@/pages/news";
import OurStory from "@/pages/our-story";
import Products from "@/pages/products";

const LEFT_NAV_ITEMS = [
  {label: "ПОЧЕТНА", path: "/"},
  {label: "ДОСТАВА", path: "/delivery"},
  {label: "ПРОИЗВОДИ", path: "/products"},
  {label: "ОБЈЕКТИ", path: "/locations"}
];

const RIGHT_NAV_ITEMS = [
  {label: "НАША ПРИЧА", path: "/our-story"},
  {label: "ЗАПОСЛЕЊЕ", path: "/employment"},
  {hasDropdown: true, label: "ВЕСТИ", path: "/news"},
  {label: "КОНТАКТ", path: "/contact"}
];

const ALL_NAV_ITEMS = [...LEFT_NAV_ITEMS, ...RIGHT_NAV_ITEMS];

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const NavBar = styled.nav`
  align-items: center;
  background-color: #FFFFFF;
  border-bottom: 1px solid #E8E4E1;
  display: flex;
  flex-shrink: 0;
  height: 90px;
  padding: 0 40px;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const NavGroup = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  gap: 28px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightNavGroup = styled(NavGroup)`
  justify-content: flex-end;
`;

const NavItem = styled.div`
  color: ${({selected}) => selected ? "#C0392B" : "#1C1C1C"};
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.5px;
  transition: color ease-in-out 200ms;
  user-select: none;

  &:hover {
    color: #C0392B;
  }
`;

const DropdownChevron = styled.span`
  font-size: 10px;
  margin-left: 3px;
`;

const LogoWrapper = styled.div`
  cursor: pointer;
  flex-shrink: 0;
  padding: 0 30px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const LogoText = styled.div`
  color: #C0392B;
  font-family: "Cormorant Garamond", serif;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 3px;
  line-height: 1;
  text-transform: uppercase;
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  flex-direction: column;
  gap: 5px;
  margin-left: auto;
  padding: 8px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const HamburgerLine = styled.span`
  background-color: #1C1C1C;
  display: block;
  height: 2px;
  transition: background-color ease-in-out 200ms;
  width: 24px;
`;

const MobileMenu = styled.div`
  background-color: #FFFFFF;
  border-bottom: 1px solid #E8E4E1;
  display: ${({open}) => open ? "flex" : "none"};
  flex-direction: column;
  left: 0;
  position: absolute;
  right: 0;
  top: 90px;
  z-index: 999;
`;

const MobileNavItem = styled.div`
  border-top: 1px solid #E8E4E1;
  color: ${({selected}) => selected ? "#C0392B" : "#1C1C1C"};
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.5px;
  padding: 16px 20px;
  transition: color ease-in-out 200ms;
  user-select: none;

  &:hover {
    color: #C0392B;
  }
`;

const App = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <PageContainer>
      <NavBar>
        <NavGroup>
          {LEFT_NAV_ITEMS.map(({label, path}) =>
            <NavItem
              key={path}
              selected={pathname === path}
              onClick={() => handleNavigation(path)}
            >
              {label}
            </NavItem>
          )}
        </NavGroup>
        <LogoWrapper onClick={() => handleNavigation("/")}>
          <LogoText>Pekara sara-s</LogoText>
        </LogoWrapper>
        <RightNavGroup>
          {RIGHT_NAV_ITEMS.map(({hasDropdown, label, path}) =>
            <NavItem
              key={path}
              selected={pathname === path}
              onClick={() => handleNavigation(path)}
            >
              {label}
              {hasDropdown && <DropdownChevron>∨</DropdownChevron>}
            </NavItem>
          )}
        </RightNavGroup>
        <HamburgerButton
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </HamburgerButton>
        <MobileMenu open={menuOpen}>
          {ALL_NAV_ITEMS.map(({label, path}) =>
            <MobileNavItem
              key={path}
              selected={pathname === path}
              onClick={() => handleNavigation(path)}
            >
              {label}
            </MobileNavItem>
          )}
        </MobileMenu>
      </NavBar>
      <Scrollbars style={{flex: 1}}>
        <Routes>
          <Route
            element={<Home />}
            path="/"
          />
          <Route
            element={<Delivery />}
            path="/delivery"
          />
          <Route
            element={<Products />}
            path="/products"
          />
          <Route
            element={<Locations />}
            path="/locations"
          />
          <Route
            element={<OurStory />}
            path="/our-story"
          />
          <Route
            element={<Employment />}
            path="/employment"
          />
          <Route
            element={<News />}
            path="/news"
          />
          <Route
            element={<Contact />}
            path="/contact"
          />
        </Routes>
        <Footer />
      </Scrollbars>
    </PageContainer>
  );
};

export default App;
