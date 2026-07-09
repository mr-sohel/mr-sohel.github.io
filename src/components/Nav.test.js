import { expect, test, beforeAll } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Nav from './Nav.astro';

let container;

beforeAll(async () => {
  container = await AstroContainer.create();
});

test('Nav component renders structure', async () => {
  const result = await container.renderToString(Nav);
  expect(result).toContain('nav class="nav"');
  expect(result).toContain('href="#about"');
  expect(result).toContain('id="theme-toggle"');
});
