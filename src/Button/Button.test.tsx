import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Running Test for Button', () => {
  test('Check Button Variants', async () => {
    const { findByRole, rerender } = render(
      <Button variant={'primary'} outline size={'medium'} text="Button" />
    );

    const buttonElement = await findByRole('button');

    expect(buttonElement.classList.contains('text-primary-default')).toBe(true);

    rerender(
      <Button variant={'secondary'} outline size={'medium'} text="Button" />
    );

    expect(buttonElement.classList.contains('text-secondary-default')).toBe(
      true
    );
  });
});
