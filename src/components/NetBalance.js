import styled from "styled-components";

export default function NetBalance(props) {
  const { operations } = props;

  let total = 0;
  let color = "#000000";

  operations.forEach((operation) => {
    if (operation.type === "inflow") {
      total += Number(operation.value);
    } else if (operation.type === "outflow") {
      total -= Number(operation.value);
    }
  });

  if (total > 0) {
    color = "#03AC00";
  } else if (total < 0) {
    color = "#C70000";
  }

  return (
    <Container color={color}>
      <h1>Saldo</h1>
      <h2>{total.toFixed(2)}</h2>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  font-size: 17px;
  background-color: #ffffff;

  h1 {
    font-weight: 700;
    color: #000000;
  }

  h2 {
    font-weigth: 400;
    color: ${(props) => props.color};
  }
`;
