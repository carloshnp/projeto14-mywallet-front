import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../img/MyWallet.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();

    const URL = "http://localhost:5000/register";
    const body = {
      username,
      email,
      password,
      checkPassword,
    };

    const request = axios.post(URL, body);

    request
      .then((ans) => {
        console.log(ans.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Nome"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirme sua senha"
          value={checkPassword}
          onChange={(e) => setCheckPassword(e.target.value)}
          required
        />
        <button>Cadastrar</button>
      </Form>
      <Link to={`/`}>
        <LinkTo>Já tem uma conta? Entre agora!</LinkTo>
      </Link>
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
`;

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

const LinkTo = styled.h1`
  margin-top: 36px;
`;
