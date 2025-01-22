import { useState } from "react";
import { styled } from "styled-components";
import logo from "/logo-name.svg";
import "./Header.css";

const HeaderContainer = styled.header`
  height: 50px;
  padding: 0 2rem;
  padding-top: 0.8rem;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;
export default function Header() {
  const [now, setNow] = useState(new Date());
  setInterval(() => setNow(new Date()), 1000);
  return (
    <HeaderContainer>
      <div className="headerChildren">
        <img src={logo}></img>

        <h3 className="timer">Время: {now.toLocaleTimeString()}</h3>
      </div>
    </HeaderContainer>
  );
}
