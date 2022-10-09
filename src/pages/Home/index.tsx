import * as Styled from './styled';

import Card from "../../components/Card";
import Header from "../../components/Header";

function Home() {
  return (
    <main>
      <Header />
      <Styled.CardWrapper>
        <Styled.CardArea>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Styled.CardArea>
      </Styled.CardWrapper>
    </main>
  )
}

export default Home;