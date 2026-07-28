type StartBeam = {
  x: number;
  y: number;
  angle: number;
};

type PrismCrystal = {
  id: number;
  x: number;
  y: number;
  angle: number;
};

export function findSequence(start: unknown, prisms: unknown): number[] {
  const beam = start as StartBeam;
  const crystalArray = prisms as PrismCrystal[];

  const sequence: number[] = [];
  let currentX = beam.x;
  let currentY = beam.y;
  let currentAngle = beam.angle;

  while (true) {
    // Convert angle to radians and calculate the unit direction vector
    const rad = (currentAngle * Math.PI) / 180;
    const dirX = Math.cos(rad);
    const dirY = Math.sin(rad);

    let nearestPrism: PrismCrystal | null = null;
    let minDistance = Infinity;

    for (const prism of crystalArray) {
      // Vector from the current laser position to the prism
      const dx = prism.x - currentX;
      const dy = prism.y - currentY;

      // Project the prism's relative position onto the laser's direction vector
      const distanceAlongRay = dx * dirX + dy * dirY;

      // Ignore prisms that are behind or at the exact current position of the laser
      if (distanceAlongRay <= 1e-6) {
        continue;
      }

      // Calculate the perpendicular cross-distance squared to see if the ray hits the prism
      const crossX = dx - distanceAlongRay * dirX;
      const crossY = dy - distanceAlongRay * dirY;
      const crossDistanceSq = crossX * crossX + crossY * crossY;

      // Set a floating-point tolerance scaling factor based on the distance
      const distanceSq = distanceAlongRay * distanceAlongRay;
      const toleranceScale = distanceSq > 1.0 ? distanceSq : 1.0;

      // Check if the ray effectively intersects with the prism coordinate
      if (crossDistanceSq < 1e-6 * toleranceScale) {
        if (distanceAlongRay < minDistance) {
          minDistance = distanceAlongRay;
          nearestPrism = prism;
        }
      }
    }

    // If no more prisms are intersected by the ray, the tracking sequence ends
    if (!nearestPrism) {
      break;
    }

    // Record the hit, move the laser origin, and deflect the angle
    sequence.push(nearestPrism.id);
    currentX = nearestPrism.x;
    currentY = nearestPrism.y;
    currentAngle = (currentAngle + nearestPrism.angle) % 360;
  }

  return sequence;
}