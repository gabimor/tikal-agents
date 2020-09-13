export const haversineDistance = (mk1: any, mk2: any): number => {
  const R = 3958.8; // Radius of the Earth in miles
  const rlat1 = mk1.position.lat() * (Math.PI / 180); // Convert degrees to radians
  const rlat2 = mk2.position.lat() * (Math.PI / 180); // Convert degrees to radians
  const difflat = rlat2 - rlat1; // Radian difference (latitudes)
  const difflon = (mk2.position.lng() - mk1.position.lng()) * (Math.PI / 180); // Radian difference (longitudes)

  const d =
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
  return d;
};
