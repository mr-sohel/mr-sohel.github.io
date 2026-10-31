import { describe, expect, test } from 'vitest';
import { links, ratings, results, projects } from './profile';

const urls = [
  ...Object.values(links),
  ...ratings.map((r) => r.href),
  ...results.flatMap((r) => (r.proof ? [r.proof.href] : [])),
  ...projects.flatMap((p) => [p.repo, p.demo].filter((u): u is string => Boolean(u))),
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

  test('awards six balloons, one per contest result in the standings table', () => {
    expect(results.reduce((sum, row) => sum + row.balloons, 0)).toBe(6);
  });
});
