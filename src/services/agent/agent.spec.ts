import { getIsolatedAgents, mostIsolatedCountry } from ".";
import { Agent } from "../../types/Agent";

describe("agent service", () => {
  it("should find the most isolated country #1", () => {
    const data: Agent[] = [
      { agent: "007", country: "Yemen", address: "", date: "" },
      { agent: "007", country: "Poland", address: "", date: "" },
      { agent: "007", country: "Brazil", address: "", date: "" },
      { agent: "007", country: "Morocco", address: "", date: "" },
      { agent: "006", country: "Morocco", address: "", date: "" },
    ];

    expect(mostIsolatedCountry(data)).toEqual(["Morocco"]);
  });

  it("should find the most isolated country #2", () => {
    const data: Agent[] = [
      { agent: "002", country: "Yemen", address: "", date: "" },
      { agent: "007", country: "Poland", address: "", date: "" },
      { agent: "007", country: "Brazil", address: "", date: "" },
      { agent: "001", country: "Morocco", address: "", date: "" },
      { agent: "006", country: "Morocco", address: "", date: "" },
    ];

    expect(mostIsolatedCountry(data)).toEqual(["Morocco"]);
  });
  it("should find the most isolated country #3", () => {
    const data: Agent[] = [
      { agent: "001", country: "Yemen", address: "", date: "" },
      { agent: "002", country: "Poland", address: "", date: "" },
      { agent: "003", country: "Brazil", address: "", date: "" },
      { agent: "004", country: "Morocco", address: "", date: "" },
      { agent: "005", country: "Morocco", address: "", date: "" },
    ];

    expect(mostIsolatedCountry(data)).toEqual(["Morocco"]);
  });
  it("should find the most isolated country - 2 countries with equal isolation", () => {
    const data: Agent[] = [
      { agent: "001", country: "Yemen", address: "", date: "" },
      { agent: "002", country: "Brazil", address: "", date: "" },
      { agent: "003", country: "Brazil", address: "", date: "" },
      { agent: "004", country: "Morocco", address: "", date: "" },
      { agent: "005", country: "Morocco", address: "", date: "" },
    ];

    expect(mostIsolatedCountry(data)).toEqual(["Brazil", "Morocco"]);
  });
  it("should find the most isolated country - no isolated agents", () => {
    const data: Agent[] = [
      { agent: "007", country: "Yemen", address: "", date: "" },
      { agent: "007", country: "Poland", address: "", date: "" },
      { agent: "007", country: "Morocco", address: "", date: "" },
      { agent: "006", country: "Brazil", address: "", date: "" },
      { agent: "006", country: "Morocco", address: "", date: "" },
    ];

    expect(mostIsolatedCountry(data)).toEqual([]);
  });
});

describe("getIsolatedAgents", () => {
  it("should return empty array if no isolated agents", () => {
    const data: Agent[] = [
      { agent: "007", country: "Yemen", address: "", date: "" },
      { agent: "007", country: "Poland", address: "", date: "" },
      { agent: "007", country: "Morocco", address: "", date: "" },
      { agent: "006", country: "Brazil", address: "", date: "" },
      { agent: "006", country: "Morocco", address: "", date: "" },
    ];

    expect(getIsolatedAgents(data)).toEqual([]);
  });
  it("should return an array with one isolated agent", () => {
    const data: Agent[] = [
      { agent: "001", country: "Yemen", address: "", date: "" },
      { agent: "002", country: "Poland", address: "", date: "" },
      { agent: "002", country: "Morocco", address: "", date: "" },
      { agent: "003", country: "Brazil", address: "", date: "" },
      { agent: "003", country: "Morocco", address: "", date: "" },
    ];

    expect(getIsolatedAgents(data)).toEqual(["001"]);
  });
  it("should array with two isolated agents", () => {
    const data: Agent[] = [
      { agent: "007", country: "Yemen", address: "", date: "" },
      { agent: "007", country: "Poland", address: "", date: "" },
      { agent: "007", country: "Morocco", address: "", date: "" },
      { agent: "003", country: "Brazil", address: "", date: "" },
      { agent: "004", country: "Morocco", address: "", date: "" },
    ];

    expect(getIsolatedAgents(data)).toEqual(["003", "004"]);
  });
});
