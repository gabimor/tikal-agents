import React from "react";
import { Agent } from "../types/Agent";
import { TR } from "./AgentsTable";

type Props = {
  agent: Agent;
  color?: string;
};

export const AgentsTableRow = ({ agent, color }: Props) => (
  <TR style={{ color }}>
    <td>{agent.agent}</td>
    <td>{agent.country}</td>
    <td>{agent.address}</td>
    <td>{agent.date}</td>
  </TR>
);
