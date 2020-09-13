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
      <Logo src="/favicon.ico" />
      <AgentsTable agents={sortedAgents} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 950px;
  margin: 60px auto;
`;

const Logo = styled.img`
  width: 120px;
  display: block;
  margin: auto;
  padding-bottom: 30px;
`;
