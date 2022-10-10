import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  background: #661f41;
  border-radius: 5px;
`;

export const HeaderArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5d1e2f;
  height: 70px;
  width: 100%;
  border-bottom: 2px solid #cdaa44;
`;

export const TextHeader = styled.span`
  font-size: 25px;
  color: #cdaa44;
`;

export const TeamArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex: 1;
`;

export const SquareForm = styled.div`
  width: 130px;
  height: 30px;
  background: #88324b;
  box-shadow: 0px 0px 0px 5px #57182b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TeamName = styled.span`
  color: #fff;
`;