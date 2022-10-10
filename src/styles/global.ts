
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  main{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: rgb(33,8,14);
    background: linear-gradient(174deg, rgba(33,8,14,1) 0%, rgba(33,8,14,0.9) 100%);
  }
`;
