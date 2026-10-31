import { expect, test, beforeAll } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Hero from './Hero.astro';

let container;

beforeAll(async () => {
  container = await AstroContainer.create();
});

test('Hero renders the name and a working resume download', async () => {
  const result = await container.renderToString(Hero);
  expect(result).toContain('class="hero-name"');
  expect(result).toContain('Md. Sohel Rana');
  expect(result).toContain('href="/Md_Sohel_Rana_Resume.pdf"');
  expect(result).not.toContain('alert(');
});

test('Hero shows one balloon per contest result', async () => {
  const result = await container.renderToString(Hero);
  const balloons = result.match(/class="drift/g) ?? [];
  expect(balloons).toHaveLength(6);
});
