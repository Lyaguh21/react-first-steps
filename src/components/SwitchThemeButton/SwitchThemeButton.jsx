import "../Header/Header.scss";
export default function SwitchThemeButton({ onClick, ...props }) {
  return (
    <button {...props} type="button" className="switchbutton" onClick={onClick}>
      Switch
    </button>
  );
}
