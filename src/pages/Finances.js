import { useEffect, useState } from "react";
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

  function signOut() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <Container>
      <HeaderContainer>
        <h1>Olá, {user}</h1>
        <ion-icon name="exit-outline" onClick={signOut}></ion-icon>
      </HeaderContainer>
      <RegisterTable />
      <CashierContainer>
        <OperationButton
          onClick={() => navigate("/operation", { state: { type: "inflow" } })}
        >
          <ion-icon name="add-circle-outline"></ion-icon>
          <h2>Nova entrada</h2>
        </OperationButton>
        <OperationButton
          onClick={() => navigate("/operation", { state: { type: "outflow" } })}
        >
          <ion-icon name="remove-circle-outline"></ion-icon>
          <h2>Nova saída</h2>
        </OperationButton>
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
  font-family: "Raleway", sans-serif;
  color: #ffffff;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;

  h1 {
    font-size: 26px;
  }

  ion-icon {
    font-size: 24px;
  }
`;

const CashierContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OperationButton = styled.button`
  width: 155px;
  height: 114px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border: 0;
  border-radius: 5px;
  background-color: #a328d6;
  color: #ffffff;

  ion-icon {
    font-size: 25px;
  }

  h2 {
    font-weight: 700;
    font-size: 17px;
    width: 64px;
  }
`;
