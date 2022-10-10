import * as Styled from './styled';

import Card from "../../components/Card";
import Header from "../../components/Header";

import {teams} from '../../data/teams';

function Home() {
  return (
    <main>
      <Header />
      <Styled.CardWrapper>
        <Styled.CardArea>
          {teams.map((data) => {
            return (
              <Card groupName={data.title} teamName={data.teams} />
            )
          })}
        </Styled.CardArea>
      </Styled.CardWrapper>
    </main>
  )
}

export default Home;