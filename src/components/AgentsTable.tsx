import React from "react";
import styled from "@emotion/styled";
import { Agent } from "../types/Agent";
import { failure, gray1, gray2, gray3, success } from "../consts/colors";
import { AgentsTableRow } from "./AgentsTableRow";

type Props = {
  agents: Agent[];
};

export const AgentsTable = ({ agents }: Props) => {
  const agentsDistances = agents.map((a) => a.distanceToHeadquarters || 0);
  const furthestAgentDistance = Math.max(...agentsDistances);
  const closestAgentDistance = Math.min(...agentsDistances);

  const getRowColor = (agent: Agent) => {
    if (agent.distanceToHeadquarters === furthestAgentDistance) {
      return failure;
    } else if (agent.distanceToHeadquarters === closestAgentDistance) {
      return success;
    } else {
      return gray3;
    }
  };  

  return (
    <Table cellSpacing="0">
      <thead>
        <TrHead>
          <th style={{ width: "13%" }}>
            <div>Agent ID</div>
          </th>
          <th style={{ width: "13%" }}>
            <div>Country</div>
          </th>
          <th>
            <div>Address</div>
          </th>
          <th style={{ width: "28%" }}>
            <div>Dates</div>
          </th>
        </TrHead>
      </thead>
      <tbody>
        {agents.map((agent) => (
          <AgentsTableRow
            key={agent.id}
            agent={agent}
            color={getRowColor(agent)}
          />
        ))}
      </tbody>
      <TFoot>
        <TR>
          <td colSpan={4}>{agents.length} missions</td>
        </TR>
      </TFoot>
    </Table>
  );
};

const Table = styled.table`
  font-weight: 400;
  font-size: 14px;
  text-align: left;
  width: 100%;
  color: ${gray3};
  border: solid 1px ${gray2};
`;

const TFoot = styled.tfoot`
  text-align: right;
  background: ${gray1};
  font-weight: 600;
  td {
    border-top: solid 2px ${gray2};
  }
`;

const TrHead = styled.tr`
  th {
    font-weight: 600;
    background: ${gray1};
    border-bottom: solid 2px ${gray2};
  }
  th:first-of-type {
    padding: 0 15px;
  }

  th div {
    padding: 4px 0;
  }

  th:not(:first-of-type) div {
    border-left: solid 1px ${gray2};
    margin: 5px 0;
    padding-left: 15px;
  }
`;

export const TR = styled.tr`
  td {
    padding: 10px 15px;
    border-bottom: solid 1px ${gray2};
  }
`;
