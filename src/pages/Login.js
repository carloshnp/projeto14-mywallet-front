import styled from "styled-components";
import logo from '../img/MyWallet.png'

export default function Login() {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Form>
        <input />
        <input />
        <button>Entrar</button>
      </Form>
      <Link to={`/Register`}>Primeira vez? Cadastre-se!</Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #8c11be;
`;

const Logo = styled.img`
  width: 147px;
  margin-bottom: 24px;
`

const Form = styled.form`
  width: 326px;
  display: flex;
  flex-direction: column;

  input {
    width: 326px;
    height: 58px;
    margin-bottom: 13px;
    box-sizing: border-box;
    border: 0;
    border-radius: 5px;
  }

  button {
    width: 326px;
    height: 46px;
    background-color: #a328d6;
    border: 0;
    border-radius: 5px;
  }
`;

const Link = styled.h1`
  margin-top: 36px;
`;
