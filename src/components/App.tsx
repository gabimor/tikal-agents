import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { getAllAgents, mostIsolatedCountry } from "../api/agent";
import { Agent } from "../types/Agent";
import { AgentsTable } from "./AgentsTable";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const isolatedCountry = mostIsolatedCountry(agents).join();

  useEffect(() => {
    async function getAgents() {
      setAgents(await getAllAgents());
      setIsLoading(false);
    }
    getAgents();
  }, []);

  return (
    <Container>
      <Logo src="/favicon.ico" />
      {isLoading ? (
        <ClipLoader />
      ) : (
        <>
          <AgentsTable agents={agents} />
          <IsolatedContainer>
            The most isolated country is: <b>{isolatedCountry}</b>
          </IsolatedContainer>
        </>
      )}
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 950px;
  margin: 60px auto;
  text-align: center;
`;

const IsolatedContainer = styled.div`
  padding: 30px;
`;

const Logo = styled.img`
  width: 120px;
  display: block;
  margin: auto;
  padding-bottom: 30px;
`;
