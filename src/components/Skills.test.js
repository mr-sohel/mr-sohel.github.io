import { expect, test, beforeAll } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Skills from './Skills.astro';

let container;

beforeAll(async () => {
  container = await AstroContainer.create();
});

test('Skills renders categories and items', async () => {
  const result = await container.renderToString(Skills);
  expect(result).toContain('Skills');
  expect(result).toContain('Languages');
  expect(result).toContain('class="skill-row');
});
