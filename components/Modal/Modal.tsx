import "./styles.css";

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div id="modal" className="modal">
      <div className="modal-box">
        <div className="modal-text">{children}</div>
      </div>
    </div>
  );
}
