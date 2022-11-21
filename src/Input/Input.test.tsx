import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Input from './Input';

describe('Running Test for Input', () => {
  test('Check Input Variants', async () => {
    const { findByRole } = render(<Input value="Hej" warning />);

    const buttonElement = await findByRole('textbox');

    expect(buttonElement.classList.contains('text-primary-default')).toBe(true);
  });
});
