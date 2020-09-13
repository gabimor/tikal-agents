import styled from "@emotion/styled";
import React from "react";
import { agents } from "../data";
import { AgentsTable } from "./AgentsTable";

function App() {
  const sortedAgents = agents.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return (
    <Container>
      <AgentsTable agents={sortedAgents} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 950px;
  margin: 30px auto;
`;
