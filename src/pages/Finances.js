import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RegisterTable from "../components/RegisterTable";
import { useUserContext } from "../context/UserContext";

export default function Finances() {
  const { user, bearer } = useUserContext();
  const navigate = useNavigate();

  if (!user && !bearer) {
    return navigate("/");
  }

  return (
    <Container>
      <HeaderContainer>
        <h1>Olá, {user}</h1>
        <Logout></Logout>
      </HeaderContainer>
      <RegisterTable />
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


const NewInflow = styled.button`
  width: 155px;
  height: 114px;
  border: 0;
  border-radius: 5px;
  background-color: #a328d6;
`;

const NewOutflow = styled.button`
  width: 155px;
  height: 114px;
  border: 0;
  border-radius: 5px;
  background-color: #a328d6;
`;
