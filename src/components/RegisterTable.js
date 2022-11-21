import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import styled from "styled-components";
import axios from "axios";
import NetBalance from "./NetBalance";
import Operation from "./Operation";

export default function RegisterTable() {
  const [operations, setOperations] = useState([]);
  const { bearer } = useUserContext();

  useEffect(() => {
    const headers = {
      authorization: bearer,
    };

    const URL = "http://localhost:5000/finances";
    axios
      .get(URL, { headers })
      .then((ans) => {
        setOperations(ans.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  function RenderRegister() {
    if (operations.length === 0) {
      return <Message>Não há registros de entrada ou saída</Message>;
    } else {
      return (
        <>
          <OperationsLog>{operations?.map(Operation)}</OperationsLog>
          <NetBalance operations={operations} />
        </>
      );
    }
  }

  return (
    <Container>
      <RenderRegister />
    </Container>
  );
}

const Container = styled.div`
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  margin-top: 22px;
  margin-bottom: 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border: 0;
  border-radius: 5px;
  background-color: #ffffff;
`;

const Message = styled.div`
  width: 180px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #868686;
`;

const OperationsLog = styled.div`
  width: 100%;
  heigth: 400px;
  overflow-y: scroll;
  color: #000000;
`;
