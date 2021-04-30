import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import "./App.css";
import { Layout } from "./components";
import { Home, TableMainCategory } from "./pages";
import { fetchData } from "./fetch/fetching";

function App() {
  const [goods, setGoods] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState(null);

  const history = useHistory();

  React.useEffect(() => {
    const getData = async () => {
      setGoods(await fetchData());
      setIsLoaded(true);
      history.push("/");
    };

    getData();
  }, []);

  const setCategory = (index) => {
    setActiveCategory(index);
  };

  return (
    <Layout setCategory={setCategory} titles={goods} category={activeCategory}>
      {isLoaded ? (
        <Switch>
          <Route
            path={`/`}
            render={() => <Home items={goods} category={activeCategory} />}
            exact
          />
          <Route
            path={`/category/:id`}
            render={() => (
              <TableMainCategory items={goods} category={activeCategory} />
            )}
            exact
          />
        </Switch>
      ) : (
        ""
      )}
    </Layout>
  );
}

export default App;
