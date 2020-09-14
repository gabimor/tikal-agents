import { getCoordForAddress, getHaversineDistance } from ".";
import { HEADQUARTERS_COORDS } from "../../consts";

describe("geo service", () => {
  it("should get the distance between two coords", () => {
    const coords = { lat: -22.9865897, lng: -43.1990855 };
    const distance = getHaversineDistance(coords, HEADQUARTERS_COORDS);

    expect(Math.round(distance)).toEqual(9266);
  });

  it("should return coordinations for an address", async () => {
    const coord = await getCoordForAddress(
      "Avenida Vieira Souto 168 Ipanema, Rio de Janeiro"
    );

    expect(coord).toBeDefined();
  }, 10000);
});
