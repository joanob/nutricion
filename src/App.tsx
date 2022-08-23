import React from "react";
import { GameRoute, RoundResultsRoute, ScorelistRoute } from "./domain/Routes";
import Landing from "./pages/Landing";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const route = useAppSelector((state) => state.route.route);

  switch (route) {
    case GameRoute:
      return <div>Game</div>;
    case ScorelistRoute:
      return <div>Scorelist</div>;
    case RoundResultsRoute:
      return <div>Results</div>;
    default:
      return <Landing />;
  }
};

/* const App = () => {
  const [showScorelist, setShowScorelist] = useState(false);

  const { state, dispatch } = useContext(Context);

  if (showScorelist) {
    return (
      <ScoreList
        close={() => {
          setShowScorelist(false);
        }}
      />
    );
  }

  if (state.rounds === 0 && state.maxScore > 0) {
    
    return (
      <ScoreList
        close={() => {
          // TODO: fix to reset store
          window.location.reload();
        }}
      />
    );
  }

  // Print welcome page if name is not set
  if (state.name == "" || state.rounds === 0) {
    return (
      <Welcome
        showScorelist={() => {
          setShowScorelist(true);
        }}
      />
    );
  }

  if (state.name !== "" && state.rounds > 0) {
    return <Nutrients />;
  }

  return <div></div>;
}; */

export default App;
