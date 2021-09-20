import { render } from '@redwoodjs/testing/web'
import MediumEditor from './MediumEditor'

describe('MediumEditor', () => {
  it('renders successfully', () => {
    expect(() => {
      expect(render(<MediumEditor />)).toMatchSnapshot()
    }).not.toThrow()
  })
})
