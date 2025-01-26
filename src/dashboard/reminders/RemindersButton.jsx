import "./RemindersSection.scss";
export default function RemindersButton({ changeVisible, ...props }) {
  return (
    <button
      {...props}
      type="button"
      className="deleteReminders"
      onClick={changeVisible}
    >
      Удалить
    </button>
  );
}
