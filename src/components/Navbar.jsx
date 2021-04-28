import React from "react"

function Navbar({ titles, category, setCategory }) {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="list-group list-group-flush">
        {titles.map((title, index) =>
          title.rname ? (
            <button
              href="#"
              key={index}
              className={`list-group-item list-group-item-action ${
                index === category ? "activeCategory" : ""
              }`}
              onClick={() => setCategory(index)}
            >
              {title.rname}
            </button>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  )
}

export default Navbar
