import { expect, test, beforeAll } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Experience from './Experience.astro';

let container;

beforeAll(async () => {
  container = await AstroContainer.create();
});

test('Experience renders the instructor role with its end date', async () => {
  const result = await container.renderToString(Experience);
  expect(result).toContain('id="experience"');
  expect(result).toContain('Competitive Programming Instructor');
  expect(result).toContain('April 2026');
  expect(result).not.toContain('Present');
});
