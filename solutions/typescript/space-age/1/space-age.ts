const EARTH_YEAR_SECONDS = 31557600;

const ORBITAL_PERIODS: Record<string, number> = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

export function age(planet: string, seconds: number): number {
  const earthYears = seconds / EARTH_YEAR_SECONDS;
  const planetYears = earthYears / ORBITAL_PERIODS[planet.toLowerCase()];
  return parseFloat(planetYears.toFixed(2));
}