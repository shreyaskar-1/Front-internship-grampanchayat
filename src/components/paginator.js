import "./paginator.css";
const Paginator = () => {
  return (
    <div className="pagination">
      <div className="details">1 - 8 of 40 items</div>
      <div className="actions">
        <div className="button3">
          <div className="button-base20">
            <div className="details">Previous</div>
          </div>
        </div>
        <div className="button3">
          <div className="button-base20">
            <div className="details">Next</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paginator;
