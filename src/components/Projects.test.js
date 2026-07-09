import { expect, test, beforeAll } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Projects from './Projects.astro';

let container;

beforeAll(async () => {
  container = await AstroContainer.create();
});

test('Projects component renders correctly', async () => {
  const result = await container.renderToString(Projects);
  expect(result).toContain('Projects');
  expect(result).toContain('class="project-card');
});
