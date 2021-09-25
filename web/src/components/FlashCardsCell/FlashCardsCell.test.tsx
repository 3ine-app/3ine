import { render } from '@redwoodjs/testing/web'
import { Empty, Failure, Loading, Success } from './FlashCardsCell'
import { standard } from './FlashCardsCell.mock'

describe('FlashCardsCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      expect(render(<Loading />)).toMatchSnapshot()
    }).not.toThrow()
  })

  it('renders Empty successfully', async () => {
    expect(() => {
      expect(render(<Empty />)).toMatchSnapshot()
    }).not.toThrow()
  })

  it('renders Failure successfully', async () => {
    expect(() => {
      expect(
        render(<Failure error={new Error('500 Internal Server Error')} />)
      ).toMatchSnapshot()
    }).not.toThrow()
  })

  // When you're ready to test the actual output of your component render
  // you could test that, for example, certain text is present:
  //
  // 1. import { screen } from '@redwoodjs/testing/web'
  // 2. Add test: expect(screen.getByText('Hello, world')).toBeInTheDocument()

  it('renders Success successfully', async () => {
    expect(() => {
      expect(
        render(<Success flashCards={standard().flashCards} />)
      ).toMatchSnapshot()
    }).not.toThrow()
  })
})
