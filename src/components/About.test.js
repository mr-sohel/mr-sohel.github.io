import { expect, test, beforeAll } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import About from './About.astro';

let container;

beforeAll(async () => {
  container = await AstroContainer.create();
});

test('About component renders stats and content', async () => {
  const result = await container.renderToString(About);
  expect(result).toContain('About');
  expect(result).toContain('class="about-stat');
});
