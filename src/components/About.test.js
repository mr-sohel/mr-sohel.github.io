import { expect, test, beforeAll } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import About from './About.astro';

let container;

beforeAll(async () => {
  container = await AstroContainer.create();
});

test('About states current study, learning and job search', async () => {
  const result = await container.renderToString(About);
  expect(result).toContain('id="about"');
  expect(result).toContain('DevSkill');
  expect(result).toContain('December 2026');
  expect(result).toContain('class="now-item');
});
