import { render } from '@redwoodjs/testing/web'
import FlashcardsPage from './FlashcardsPage'

describe('FlashcardsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      expect(render(<FlashcardsPage />)).toMatchSnapshot()
    }).not.toThrow()
  })
})
