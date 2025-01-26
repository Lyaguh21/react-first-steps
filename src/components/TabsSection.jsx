import Button from "./Button/Button";
import SwitchThemeButton from "./SwitchThemeButton/SwitchThemeButton";
export default function TabsSection({ active, onChange }) {
  return (
    <section style={{ marginBottom: "5px" }}>
      <div style={{ textAlign: "center" }}>
        <Button isActive={active == "main"} onClick={() => onChange("main")}>
          Главная
        </Button>
        <Button
          isActive={active == "feedback"}
          onClick={() => onChange("feedback")}
        >
          Обратная связь
        </Button>

        <Button
          isActive={active == "effect"}
          onClick={() => onChange("effect")}
        >
          Эффект
        </Button>

        <Button
          isActive={active == "dashboard"}
          onClick={() => onChange("dashboard")}
        >
          Напоминания
        </Button>
        <SwitchThemeButton switchTheme={{}} />
      </div>
    </section>
  );
}
