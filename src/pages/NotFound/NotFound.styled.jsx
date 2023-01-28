import styled from '@emotion/styled';

export const NotFoundSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background-color: black;
  h1 {
    color: red;
    font-size: 100px;
  }
  h2 {
    color: white;
    font-size: 50px;
  }
  h1,
  h2,
  h3 {
    margin-bottom: 40px;
  }
  h3 {
    color: white;
    margin-bottom: 40px;
  }
`;
export const NotFoundText = styled.div`
  height: 50vh;
  margin-left: 50px;
  a {
    color: white;
    text-decoration: none;
    margin-right: 20px;
  }
  a:hover {
    color: red;
    text-decoration: underline;
  }
`;
