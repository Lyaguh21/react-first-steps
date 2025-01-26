import "../Header/Header.scss";
export default function SwitchThemeButton({ switchTheme }) {
  return (
    <button type="button" className="switchbutton" onClick={switchTheme}>
      Switch
    </button>
  );
}
