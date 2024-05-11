import { render } from '@testing-library/react';

import Locales from './locales';

describe('Locales', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Locales />);
    expect(baseElement).toBeTruthy();
  });
});
