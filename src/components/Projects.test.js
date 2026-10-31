import { expect, test, beforeAll } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Projects from './Projects.astro';

let container;

beforeAll(async () => {
  container = await AstroContainer.create();
});

test('Projects shows SellWise with its real repo and interactive map', async () => {
  const result = await container.renderToString(Projects);
  expect(result).toContain('SellWise');
  expect(result).toContain('https://github.com/mr-sohel/SellWise');
  expect(result).toContain('data-sysmap-toggle');
});

test('Projects describes the code, not the outdated resume wording', async () => {
  const result = await container.renderToString(Projects);
  expect(result).not.toMatch(/redis|ewma/i);
  expect(result).toContain('24-hour forecast cache');
});
