import { expect, test, beforeAll } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Experience from './Experience.astro';

let container;

beforeAll(async () => {
  container = await AstroContainer.create();
});

test('Experience component renders timeline', async () => {
  const result = await container.renderToString(Experience);
  expect(result).toContain('Experience');
  expect(result).toContain('class="exp-card');
});
