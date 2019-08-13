import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import Tag from '../Tag'

test('testing test library', () => {
    const { getByText } = render(
        <Tag name='test' isSelected={false} />
    )
    expect(getByText('test')).toBeTruthy();

})