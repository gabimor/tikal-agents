import { google } from "google-maps";
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_API_URL } from "../../consts";

export const getHaversineDistance = (
  point1: google.maps.LatLngLiteral,
  point2: google.maps.LatLngLiteral
): number => {
  const R = 6357; // Radius of the Earth in miles
  const rlat1 = point1.lat * (Math.PI / 180); // Convert degrees to radians
  const rlat2 = point2.lat * (Math.PI / 180); // Convert degrees to radians
  const difflat = rlat2 - rlat1; // Radian difference (latitudes)
  const difflon = (point2.lng - point1.lng) * (Math.PI / 180); // Radian difference (longitudes)

  const distance =
    2 *
    R *
    Math.asin(
      Math.sqrt(
        Math.sin(difflat / 2) * Math.sin(difflat / 2) +
          Math.cos(rlat1) *
            Math.cos(rlat2) *
            Math.sin(difflon / 2) *
            Math.sin(difflon / 2)
      )
    );
  return distance;
};

export async function getCoordForAddress(
  address: string
): Promise<google.maps.LatLngLiteral> {
  const url = `${GOOGLE_MAPS_API_URL}?address=${encodeURI(
    address
  )}&key=${GOOGLE_MAPS_API_KEY}`;

  const result = await (await fetch(url)).json();

  return result?.results?.[0]?.geometry?.location;
}
