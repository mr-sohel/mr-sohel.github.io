import { expect, test } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Button from './Button.astro';

test('Button renders with default props', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Button);

  expect(result).toContain('class="btn btn-primary"');
  expect(result).toContain('type="button"');
});

test('Button renders with secondary variant', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Button, {
    props: { variant: 'secondary' }
  });

  expect(result).toContain('class="btn btn-secondary"');
});

test('Button renders as an anchor link when href is provided', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Button, {
    props: { href: 'https://example.com' }
  });

  expect(result).toContain('<a href="https://example.com"');
  expect(result).not.toContain('<button');
});

test('Button accepts custom className', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Button, {
    props: { className: 'custom-class' }
  });

  expect(result).toContain('custom-class');
});
