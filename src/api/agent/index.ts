import { Agent } from "../../types/Agent";
import { agents } from "../../data";
import { getCoordForAddress, getHaversineDistance } from "../geo";
import { HEADQUARTERS_COORDS } from "../../consts";

export async function getAllAgents(): Promise<Agent[]> {
  for (const agent of agents) {
    const coords = await getCoordForAddress(agent.address);

    if (coords) {
      agent.distanceToHeadquarters = getHaversineDistance(
        coords,
        HEADQUARTERS_COORDS
      );
    }
  }
  return agents;
}

export function getIsolatedAgents(agents: Agent[]): string[] {
  const reducer = (acc: any, currentAgent: Agent) => {
    acc[currentAgent.agent] = acc[currentAgent.agent] || 0;
    acc[currentAgent.agent] += 1;
    return acc;
  };

  // returns an object with each agent and number of countries he's been in: { "007": 2, "005": 5 , ... }
  const agentsInCounties = agents.reduce(reducer, {});

  return Object.entries(agentsInCounties)
    .filter((entry) => entry[1] === 1)
    .map((agent) => agent[0]);
}

export function mostIsolatedCountry(agents: Agent[]): string[] {
  const isolatedAgents = getIsolatedAgents(agents);
  const isolatedCountries = new Map<string, number>();

  for (const currentAgent of agents) {
    if (isolatedAgents.includes(currentAgent.agent)) {
      const isolatedAgents = isolatedCountries.get(currentAgent.country);

      if (isolatedAgents) {
        isolatedCountries.set(currentAgent.country, isolatedAgents + 1);
      } else {
        isolatedCountries.set(currentAgent.country, 1);
      }
    }
  }

  const sorted = Array.from(isolatedCountries).sort((a, b) => b[1] - a[1]);

  const isolatedMax = sorted?.[0]?.[1];
  // filter all countries with less than max number of isolated agents (to support edge case where 2 countries have equal isolation)
  const filtered = sorted.filter((item) => item[1] >= isolatedMax);

  return filtered.map((item) => item[0]);
}
