import React from "react";
import { Link } from "react-router-dom";

function Navbar({ titles, category, setCategory }) {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="list-group list-group-flush">
        <Link to={`/`}>
          <button
            className={`list-group-item list-group-item-action ${
              null === category ? "activeCategory" : ""
            }`}
            onClick={() => setCategory(null)}
          >
            Все категории
          </button>
        </Link>
        {titles.map((title, index) =>
          title.rname ? (
            <Link to={`/category/${titles[index].rid}`} key={index}>
              <button
                className={`list-group-item list-group-item-action ${
                  index === category ? "activeCategory" : ""
                }`}
                onClick={() => setCategory(index)}
              >
                {title.rname}
              </button>
            </Link>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;
