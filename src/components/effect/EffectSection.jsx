import { useState } from "react";
import Button from "../Button/Button";
import ModalWindow from "../Modal/ModalWindow";

export default function EffectSection() {
  const [modal, setModal] = useState(false);
  function openModal() {
    setModal(true);
  }
  return (
    <section>
      <Button onClick={openModal}>Открыть Информацию</Button>

      <ModalWindow open={modal}>
        <h1>Это модалка</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          repudiandae ratione quam magnam blanditiis necessitatibus suscipit
          quos, adipisci dolorum? Repudiandae debitis exercitationem harum
          commodi nesciunt maiores laborum impedit ea rem?
        </p>
        <Button onClick={() => setModal(false)}>Закрыть</Button>
      </ModalWindow>
    </section>
  );
}
