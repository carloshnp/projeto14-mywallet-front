import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/MyWallet.png";
import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { setBearer, setUser, refresh, setRefresh } = useUserContext();

  const userStorage = localStorage.getItem("user");
  if (userStorage) {
    setRefresh(!refresh)
    navigate("/finances");
  }

  function handleSignIn(e) {
    e.preventDefault();

    const URL = "http://localhost:5000/";
    const body = {
      email,
      password,
    };

    const request = axios.post(URL, body);

    request
      .then((ans) => {
        console.log(ans.data);
        const newBearer = `Bearer ${ans.data.token}`;
        const newUser = ans.data.username

        setBearer(newBearer);
        localStorage.setItem("token", JSON.stringify(newBearer));

        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(ans.data.user));

        setRefresh(!refresh)

        navigate("/finances");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Form onSubmit={handleSignIn}>
        <input
          type="email"
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
        <button type="submit">Entrar</button>
      </Form>
      <Link to={`/register`}>
        <LinkTo>Primeira vez? Cadastre-se!</LinkTo>
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
