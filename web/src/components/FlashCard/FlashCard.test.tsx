import { render } from '@redwoodjs/testing/web'
import FlashCard from './FlashCard'

describe('FlashCard', () => {
  it('renders successfully', () => {
    expect(() => {
      expect(render(<FlashCard />)).toMatchSnapshot()
    }).not.toThrow()
  })
})
