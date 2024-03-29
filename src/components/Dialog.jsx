import css from "./dialog.module.css";

export default function Dialog({
  title,
  mesage,
  question,
  handleCloseModale,
  confirmLink,
  confirmLabelButton,
  cancelLabelButton,
}) {
  return (
    <div className={css.overlayModal}>
      <div className={css.modal}>
        <div>
          {title && <h1 className={css.modal_title}>{title}</h1>}
          <span className={css.modal_close} onClick={handleCloseModale}>
            x
          </span>
        </div>
        <div className={css.modal_content}>
          <div>
            <p>{mesage}</p>
            {question && <p>{question}</p>}
          </div>
          {confirmLink && (
            <div>
              <a href={confirmLink} className={css.modal_button}>
                {confirmLabelButton}
              </a>
              <button onClick={handleCloseModale} className={css.modal_button}>
                {cancelLabelButton}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
