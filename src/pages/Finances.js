import styled from "styled-components";

export default function Finances() {
  return (
    <Container>
      <HeaderContainer>
        <h1>Olá, Fulano</h1>
        <Logout></Logout>
      </HeaderContainer>
      <Register>Não há registros de entrada ou saída</Register>
      <CashierContainer>
        <NewInflow>Inflow</NewInflow>
        <NewOutflow>Outflow</NewOutflow>
      </CashierContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 25px;
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  background-color: #8c11be;
`;

const HeaderContainer = styled.div`
  display: flex;
`;

const CashierContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logout = styled.div``;

const Register = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 22px;
  margin-bottom: 13px;
  border: 0;
  border-radius: 5px;
  background-color: #FFFFFF;
`;

const NewInflow = styled.button`
  width: 155px;
  height: 114px;
  border: 0;
  border-radius: 5px;
  background-color: #A328D6;
`;

const NewOutflow = styled.button`
  width: 155px;
  height: 114px;
  border: 0;
  border-radius: 5px;
  background-color: #A328D6;
`;
