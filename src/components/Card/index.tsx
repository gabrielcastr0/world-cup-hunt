import * as Styled from './styled';

type Props = {
  groupName: string;
  teamName: [];
}

function Card({groupName, teamName}: Props) {

  return (
    <Styled.Container>
      <Styled.HeaderArea>
          <Styled.TextHeader>{groupName}</Styled.TextHeader>
      </Styled.HeaderArea>

      <Styled.TeamArea>
        {teamName.map((data) => (
          <Styled.SquareForm>
            <Styled.TeamName>{data}</Styled.TeamName>
          </Styled.SquareForm>
        ))}
      </Styled.TeamArea>
    </Styled.Container>
  )
}

export default Card;