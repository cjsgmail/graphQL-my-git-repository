import "./App.css";
import { graphql } from "@octokit/graphql";
import { useState, useEffect } from "react";
import Repositories from "./Repositories";

const handler = async () => {
  const { repositoryOwner } = await graphql(
    `
      {
        repositoryOwner(login: "cjsgmail") {
          id
          repositories(last: 40) {
            edges {
              node {
                id
                createdAt
                url
                name
              }
            }
          }
        }
      }
    `,
    {
      headers: {
        authorization: `token ${process.env.REACT_APP_SECRET}`,
      },
    }
  );
  return repositoryOwner;
};

function App() {
  const [repository, setRepository] = useState({});
  const { repositories } = repository;

  useEffect(() => {
    handler()
      .then((data) => {
        setRepository(data);
      })
      .catch((err) => {
        console.log(Error, err);
      });
  }, []);

  return (
    <div className="main">
      <header>
        <h1>My Git Repository</h1>
      </header>
      <div className="main-wrapper">
        {repositories ? (
          <Repositories repositories={repositories} />
        ) : (
          <div>loding...</div>
        )}
      </div>
    </div>
  );
}

export default App;
