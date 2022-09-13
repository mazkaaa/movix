import InteractButtonHandler from "./index.handler";

const InteractButton = ({ data }) => {
  const handler = InteractButtonHandler();

  return (
    <>
      {!handler.isListed(data.id, data.query.category) ? (
        <button
          className="btn btn-primary"
          onClick={() => handler.addItem(data.id, data.query.category)}
        >
          add to watchlist
        </button>
      ) : (
        <button
          className="btn btn-error"
          onClick={() => handler.removeItem(data.id, data.query.category)}
        >
          remove from watchlist
        </button>
      )}
    </>
  );
};

export default InteractButton;
