import styled from "styled-components";

export default function Inflow() {
  return (
    <Container>
      <HeaderContainer>
        <h1>Nova entrada</h1>
      </HeaderContainer>
      <Operation>
        <input placeholder="Valor" />
        <input placeholder="Descrição" />
        <button>Salvar entrada</button>
      </Operation>
    </Container>
  );
}

const Container = styled.div`
  padding: 25px 25px;
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  background-color: #8c11be;

  h1 {
    margin-bottom: 40px;
    color: #ffffff;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
`;

const Operation = styled.form`
  input {
    width: 100%;
    height: 58px;
    margin-bottom: 13px;
    box-sizing: border-box;
    border: 0;
    border-radius: 5px;
  }

  button {
    width: 100%;
    height: 46px;
    border: 0;
    border-radius: 5px;
    background-color: #a328d6;
    color: #ffffff;
  }
`;
