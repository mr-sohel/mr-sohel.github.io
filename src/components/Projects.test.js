import { expect, test, beforeAll } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Projects from './Projects.astro';
import { projects } from '../data/profile';

let container;

beforeAll(async () => {
  container = await AstroContainer.create();
});

test('Projects renders one card per project in the data file', async () => {
  const result = await container.renderToString(Projects);
  expect(result).toContain('id="projects"');
  const cards = result.match(/class="project card/g) ?? [];
  expect(cards).toHaveLength(projects.length);
});

test('Placeholder projects are marked in progress and carry no links or stack', async () => {
  const result = await container.renderToString(Projects);
  for (const project of projects.filter((p) => p.placeholder)) {
    expect(project.repo).toBeUndefined();
    expect(project.demo).toBeUndefined();
    expect(project.stack).toHaveLength(0);
  }
  expect(result).toContain('In progress');
});

test('SellWise is no longer shown', async () => {
  const result = await container.renderToString(Projects);
  expect(result).not.toMatch(/sellwise/i);
});
