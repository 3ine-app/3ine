import { render } from '@redwoodjs/testing/web'

import LoginModal from './LoginModal'

describe('LoginModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoginModal />)
    }).not.toThrow()
  })
})
