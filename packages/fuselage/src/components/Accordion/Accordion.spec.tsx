import { composeStories } from '@storybook/react';
import { axe } from 'jest-axe';

import { render } from '../../testing';
import * as stories from './Accordion.stories';

const { Default } = composeStories(stories);

describe('[Accordion Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });

  it('should have no a11y violations', async () => {
    const { container } = render(<Default />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
