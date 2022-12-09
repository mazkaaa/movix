import InteractButtonHandler from "./index.handler";
import { InteractButtonInterface } from "./index.interface";

const InteractButton = (props: InteractButtonInterface) => {
  const handler = InteractButtonHandler();
  const { category } = props.query;

  return (
    <>
      {!handler.isListed(props.id, category) ? (
        <button
          className="btn btn-primary"
          onClick={() => handler.addItem(props.id, props.query.category)}
        >
          add to watchlist
        </button>
      ) : (
        <button
          className="btn btn-error"
          onClick={() => handler.removeItem(props.id, props.query.category)}
        >
          remove from watchlist
        </button>
      )}
    </>
  );
};

export default InteractButton;
