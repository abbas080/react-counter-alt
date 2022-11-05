import { useReducer } from "react";
import { Helmet } from "react-helmet-async";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  SETVALUE: "setValue",
  RESET: "reset",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 5 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 5 };
    case ACTIONS.SETVALUE:
      return { count: 20 };
    case ACTIONS.RESET:
      return { count: 0 };
    default:
      return state;
  }
}

const CounterTwo = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }
  function setValue() {
    dispatch({ type: ACTIONS.SETVALUE });
  }
  function reset() {
    dispatch({ type: ACTIONS.RESET });
  }
  return (
    <div>
      <Helmet>
        <title>CounterTwo</title>
        <meta name="description" content="A counter created using useReducer" />
        <link rel="canonical" href="/CounterTwo" />
      </Helmet>
      <h1 className="header">CounterTwo</h1>
      <div className="App">
        <h2 className="count">Count = {state.count}</h2>
        <div className="buttons">
          <button onClick={increment} className="increment">
            INCREMENT
          </button>
          <button onClick={decrement} className="decrement">
            DECREMENT{" "}
          </button>
          <button onClick={setValue} className="setValue">
            SETVALUE
          </button>
          <button onClick={reset} className="reset">
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterTwo;
