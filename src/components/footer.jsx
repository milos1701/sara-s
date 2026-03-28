import styled from "@emotion/styled";

const FooterWrapper = styled.footer`
  background-color: #1A1210;
  padding: 60px 80px 40px;

  @media (max-width: 768px) {
    padding: 40px 20px 28px;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: 2fr 1fr 1fr;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const LogoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LogoText = styled.div`
  color: #C0392B;
  font-family: "Cormorant Garamond", serif;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const Tagline = styled.p`
  color: #8A8280;
  font-size: 13px;
  line-height: 1.7;
  margin: 0;
  max-width: 280px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ColumnTitle = styled.h4`
  color: #C0392B;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 0 0 4px;
  text-transform: uppercase;
`;

const ColumnItem = styled.span`
  color: #C8C0BB;
  font-size: 13px;
  line-height: 1.5;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #2E1E1A;
  margin: 0 0 24px;
`;

const BottomRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
`;

const Copyright = styled.span`
  color: #5A5050;
  font-size: 12px;
`;

const Footer = () =>
  <FooterWrapper>
    <Grid>
      <LogoBlock>
        <LogoText>Pekara sara-s</LogoText>
        <Tagline>
          Скроз добра пекара — свеж хлеб, домаћи укуси и топла атмосфера сваки дан од раног јутра.
        </Tagline>
      </LogoBlock>
      <Column>
        <ColumnTitle>Навигација</ColumnTitle>
        <ColumnItem>Почетна</ColumnItem>
        <ColumnItem>Производи</ColumnItem>
        <ColumnItem>Достава</ColumnItem>
        <ColumnItem>Објекти</ColumnItem>
        <ColumnItem>Контакт</ColumnItem>
      </Column>
      <Column>
        <ColumnTitle>Контакт</ColumnTitle>
        <ColumnItem>+381 11 000 0000</ColumnItem>
        <ColumnItem>info@skrozdobra.rs</ColumnItem>
        <ColumnItem>Београд, Србија</ColumnItem>
        <ColumnTitle style={{marginTop: "8px"}}>Радно време</ColumnTitle>
        <ColumnItem>Пон — Пет: 06:00 — 21:00</ColumnItem>
        <ColumnItem>Суб — Нед: 07:00 — 20:00</ColumnItem>
      </Column>
    </Grid>
    <Divider />
    <BottomRow>
      <Copyright>© {new Date().getFullYear()} Скроз Добра Пекара. Сва права задржана.</Copyright>
      <Copyright>Направљено са љубављу у Београду.</Copyright>
    </BottomRow>
  </FooterWrapper>;

export default Footer;
