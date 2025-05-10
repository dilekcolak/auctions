const FormNavigation = ({ onNext, onPrev, nextLabel = "", prevLabel = "" }) => {
  return (
    <div className="form-navigation">
      {onPrev && (
        <button type="button" className="nav-btn prev-tab" onClick={onPrev}>
          <i className="fa-solid fa-arrow-left"></i>
          <span>{prevLabel}</span>
        </button>
      )}

      {onNext && (
        <button type="button" className="nav-btn next-tab" onClick={onNext}>
          <i className="fa-solid fa-arrow-right"></i>
          <span>{nextLabel}</span>
        </button>
      )}
    </div>
  );
};
export default FormNavigation;
