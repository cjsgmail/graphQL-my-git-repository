import React from "react";

function Repositories({ repositories }) {
  return (
    <section className="repositories--wrapper">
      <ul className="repositoriees--container">
        {repositories.edges.map((el) => {
          return (
            <li className="repositories--li" key={el.node.id}>
              <div className="repositories--name">
                <a href={el.node.url}>{el.node.name}</a>
              </div>
              <div className="repositories--info">
                cjsgmail / {new Date(el.node.createdAt).toLocaleTimeString()}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Repositories;
