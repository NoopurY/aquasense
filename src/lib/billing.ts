export type BillingBreakdown = {
  first8: number;
  next12: number;
  above20: number;
  total: number;
  usageKL: number;
};

const RATE_FIRST_8_KL = 5;
const RATE_NEXT_12_KL = 10;
const RATE_ABOVE_20_KL = 20;

export const litersToKL = (liters: number): number => liters / 1000;

export function computeBillFromLiters(liters: number): BillingBreakdown {
  const usageKL = litersToKL(Math.max(liters, 0));
  const first8KL = Math.min(usageKL, 8);
  const next12KL = Math.max(Math.min(usageKL - 8, 12), 0);
  const above20KL = Math.max(usageKL - 20, 0);

  const first8 = first8KL * RATE_FIRST_8_KL;
  const next12 = next12KL * RATE_NEXT_12_KL;
  const above20 = above20KL * RATE_ABOVE_20_KL;

  return {
    first8,
    next12,
    above20,
    total: first8 + next12 + above20,
    usageKL
  };
}
