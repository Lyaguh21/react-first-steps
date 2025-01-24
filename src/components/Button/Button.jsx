import "./Button.scss";
export default function Button({ children, isActive, ...props }) {
  return (
    <button
      {...props}
      className={isActive ? "button active" : "button"}
      type="button"
    >
      {children}
    </button>
  );
}
