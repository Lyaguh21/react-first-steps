import "./SetColor.scss";
export default function SetColorButton({ children, onClick }) {
  return (
    <div style={{ textAlign: "center" }}>
      <button className="button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
