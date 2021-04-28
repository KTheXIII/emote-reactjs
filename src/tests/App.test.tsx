import { render, screen } from '@testing-library/react'
import { App } from '../App'

test('renders app header', () => {
  render(<App />)
  const copyrightElement = screen.getByText(/2021 © KTheXIII/i)
  expect(copyrightElement).toBeInTheDocument()
})
