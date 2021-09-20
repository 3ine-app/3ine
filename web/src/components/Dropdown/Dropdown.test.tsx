import { render } from '@redwoodjs/testing/web'
import Dropdown from './Dropdown'

describe('Dropdown', () => {
  it('renders successfully', () => {
    expect(() => {
      expect(
        render(<Dropdown label="Dropdown Test" tabIndex={0} />)
      ).toMatchSnapshot()
    }).not.toThrow()
  })
})
