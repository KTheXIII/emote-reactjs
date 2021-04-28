import { render, screen } from '@testing-library/react'
import { AppName } from '../components/AppName'

test('render app name', () => {
  render(<AppName title='emote' />)
  const titleElement = screen.getByText(/emote/i)
  expect(titleElement).toBeInTheDocument()
})
