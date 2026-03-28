import styled from "@emotion/styled";

const FEATURED_PRODUCTS = [
  {name: "ЧИЗ КЕЈК"},
  {name: "ДОМАЋА КРEMPИТА"},
  {name: "ДОМАЋИ ХЛЕБ"},
  {name: "МРЕЖИЦА ПЕЧЕНИЦА ЗДЕНКА"},
  {name: "ШТРУДЛА СА СИРОМ"},
  {name: "ИНТЕГРАЛНИ КИФЛИЋ"},
  {name: "ПИТА СА СПАНАЋЕМ"},
  {name: "МРЕЖИЦА СА КАЈМАКОМ"}
];

const CARDS = [
  {
    description: "У понуди имамо различите врсте хлебова, пита по којима смо познати, мрежица као и других пекарских производа и пецива.",
    icon: "🍞",
    title: "ПЕКАРСКИ ПРОИЗВОДИ"
  },
  {
    description: "У понуди су каприћоза, гурманска и његуша за оне најзахтевније љубитеље овог италијанског специјалитета.",
    icon: "🍕",
    title: "ПИЦЕ"
  },
  {
    description: "Изаберите неки од различитих врста сокова и пића која смо припремили за вас — лимунада или цеђена поморанца.",
    icon: "🥤",
    title: "СВЕЖИ СОКОВИ"
  },
  {
    description: "Топли оброци, салате и дневна понуда за оне који желе да уживају у правом ручку без напуштања пекаре.",
    icon: "🍽️",
    title: "РЕСТОРАН"
  },
  {
    description: "Богата понуда сендвича, бурека и осталих производа спремних за понети у сваком тренутку.",
    icon: "🥪",
    title: "БИФЕ"
  },
  {
    description: "Торте и колачи по мери за све прилике — рођендани, свадбе или само жеља за нечим слатким.",
    icon: "🎂",
    title: "ТОРТЕ И СЛАТКИШИ"
  }
];

const Page = styled.div`
  background-color: #F8F6F4;
  min-height: calc(100vh - 90px);
  padding: 60px 40px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const SectionTitle = styled.h2`
  color: #1C1C1C;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 3px;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`;

const SectionSubtitle = styled.p`
  color: #888888;
  font-size: 14px;
  margin: 10px 0 0;
  text-align: center;
`;

const Grid = styled.div`
  background-color: #E8E4E1;
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(3, 1fr);
  margin: 40px auto 0;
  max-width: 1100px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  align-items: center;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  padding: 40px 28px;
  text-align: center;
`;

const IconCircle = styled.div`
  align-items: center;
  border: 1.5px solid #C0392B;
  border-radius: 50%;
  display: flex;
  font-size: 26px;
  height: 80px;
  justify-content: center;
  width: 80px;
`;

const CardTitle = styled.h3`
  color: #C0392B;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  margin: 24px 0 0;
`;

const CardDescription = styled.p`
  color: #1C1C1C;
  font-size: 14px;
  line-height: 1.75;
  margin: 12px 0 0;
`;

const FeaturedSection = styled.div`
  background-color: #FFFFFF;
  padding: 60px 40px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(4, 1fr);
  margin: 40px auto 0;
  max-width: 1100px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductImage = styled.div`
  aspect-ratio: 1;
  background-color: #E8E4E1;
  overflow: hidden;
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

const ProductName = styled.h4`
  color: #1C1C1C;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 16px 0 0;
  text-align: center;
  text-transform: uppercase;
`;

const Home = () =>
  <Page>
    <SectionTitle>ОБЛАСТИ ДЕЛОВАЊА</SectionTitle>
    <SectionSubtitle>Где смо све умешали прсте</SectionSubtitle>
    <Grid>
      {CARDS.map(({description, icon, title}) =>
        <Card key={title}>
          <IconCircle>{icon}</IconCircle>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </Card>
      )}
    </Grid>
    <FeaturedSection>
      <SectionTitle>ПОНОСНО ИЗДВАЈАМО</SectionTitle>
      <SectionSubtitle>Неки од наших производа које вам препоручујемо</SectionSubtitle>
      <ProductGrid>
        {FEATURED_PRODUCTS.map(({name}) =>
          <ProductCard key={name}>
            <ProductImage />
            <ProductName>{name}</ProductName>
          </ProductCard>
        )}
      </ProductGrid>
    </FeaturedSection>
  </Page>;

export default Home;
