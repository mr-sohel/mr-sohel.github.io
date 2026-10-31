import { describe, expect, test } from 'vitest';
import { links, ratings, results, sellwise } from './profile';

const urls = [
  ...Object.values(links),
  ...ratings.map((r) => r.href),
  ...results.flatMap((r) => (r.proof ? [r.proof.href] : [])),
  sellwise.repo,
];

describe('profile data', () => {
  test('has no placeholder links', () => {
    for (const url of urls) {
      expect(url).toMatch(/^https:\/\//);
      expect(url).not.toMatch(/example\.com|vercel\.app|8801700000000/);
    }
  });

  test('every balloon has a level for its color', () => {
    for (const row of results) {
      if (row.balloons > 0) expect(row.level).toBeDefined();
    }
  });

  test('awards six balloons, matching the hero caption', () => {
    expect(results.reduce((sum, row) => sum + row.balloons, 0)).toBe(6);
  });
});
