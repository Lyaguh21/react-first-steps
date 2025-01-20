import { useState } from "react";
import logo from "/logo-name.svg";

export default function Header() {
  const [now, setNow] = useState(new Date());
  setInterval(() => setNow(new Date()), 1000);
  return (
    <header>
      <div className="headerChildren">
        <img src={logo}></img>

        <h3 className="timer">Время: {now.toLocaleTimeString()}</h3>
      </div>
    </header>
  );
}
