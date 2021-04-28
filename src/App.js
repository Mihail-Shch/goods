import React from "react";
import "./App.css";

import TableMain from "./components/TableMain";
import Navbar from "./components/Navbar";

import { fetchData } from "./fetch/fetching";

function App() {
  const [goods, setGoods] = React.useState([]);
  const [activeCategory, setActiveCategory] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const getData = async () => {
      setGoods(await fetchData());
      setActiveCategory(4);
      setIsLoaded(true);
    };

    getData();
  }, []);

  const setCategory = (index) => {
    setActiveCategory(index);
  };

  return (
    <div>
      {isLoaded ? (
        <div className="container-xl content_wrapper">
          <Navbar
            titles={goods}
            category={activeCategory}
            setCategory={setCategory}
          />
          <TableMain items={goods} category={activeCategory} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
