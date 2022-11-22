import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Input from './Input';

describe('Running Test for Input', () => {
  test('Check Input Variants', async () => {
    const { getByDisplayValue } = render(<Input value="Hej" warning />);

    const inputElement = getByDisplayValue('Hej');

    expect(inputElement.classList.contains('ring-accent-default')).toBe(true);
  });
});
