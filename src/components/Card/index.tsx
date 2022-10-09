import * as Styled from './styled';

function Card() {
  return (
    <Styled.Container>
      <Styled.HeaderArea>
        <Styled.TextHeader>Grupo A</Styled.TextHeader>
      </Styled.HeaderArea>

      <Styled.TeamArea>
        <Styled.SquareForm />
        <Styled.SquareForm />
        <Styled.SquareForm />
        <Styled.SquareForm />
      </Styled.TeamArea>
    </Styled.Container>
  )
}

export default Card;