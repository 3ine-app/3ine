import { render } from '@redwoodjs/testing/web'

import MediumEditor from './MediumEditor'

describe('MediumEditor', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MediumEditor />)
    }).not.toThrow()
  })
})
