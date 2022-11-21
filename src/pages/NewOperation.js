import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUserContext } from "../context/UserContext";

export default function NewOperation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const [description, setDescription] = useState();
  const { bearer } = useUserContext();
  const { type } = location.state;

  let operationName = "";
  if (type === "inflow") {
    operationName = "entrada";
  } else if (type === "outflow") {
    operationName = "saída";
  }

  function handleSubmit(e) {
    e.preventDefault();

    const operation = {
      value,
      description,
      type,
    };

    const URL = "http://localhost:5000/operation";
    const headers = { authorization: bearer };

    axios
      .post(URL, operation, { headers })
      .then((ans) => {
        console.log(ans.data);
        navigate("/finances");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  return (
    <Container>
      <HeaderContainer>
        <h1>Nova {operationName}</h1>
      </HeaderContainer>
      <Operation onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Salvar {operationName}</button>
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
  font-family: "Raleway", sans-serif;
  color: #ffffff;

  h1 {
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 26px;
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
    color: #000000;
  }

  button {
    width: 100%;
    height: 46px;
    border: 0;
    border-radius: 5px;
    background-color: #a328d6;
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
  }
`;
