import { useEffect, useState } from "react";
import { styled } from "styled-components";
import logo from "/logo-name.svg";
import "./Header.scss";

const HeaderContainer = styled.header`
  height: 50px;
  padding: 0 2rem;
  padding-top: 0.4rem;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;
export default function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <HeaderContainer>
      <div className="headerChildren">
        <h1>NAME OF COMPANY</h1>

        <h3 className="timer">Время: {now.toLocaleTimeString()}</h3>
      </div>
    </HeaderContainer>
  );
}
