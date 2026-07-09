import { expect, test, beforeAll } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Hero from './Hero.astro';

let container;

beforeAll(async () => {
  container = await AstroContainer.create();
});

test('Hero component renders name and metrics', async () => {
  const result = await container.renderToString(Hero);
  expect(result).toContain('class="hero-name"');
  expect(result).toContain('Md. Sohel Rana');
  expect(result).toContain('class="metrics-strip');
});
