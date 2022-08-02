import "./App.css";
import { graphql } from "@octokit/graphql";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const handler = async () => {
    const { repository } = await graphql(
      `
        {
          repository(owner: "codestates-seb", name: "agora-states-fe") {
            name
            discussions(first: 10) {
              edges {
                node {
                  title
                }
              }
            }
          }
        }
      `,
      {
        headers: {
          authorization: `token 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`,
        },
      }
    );
    setName(repository.name);
  };
  handler();
  return <div>{name}</div>;
}

export default App;
