/* eslint-disable jsx-a11y/anchor-is-valid */
import { render } from '@redwoodjs/testing/web'
import SubMenu from './SubMenu'

describe('SubMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      expect(
        render(
          <SubMenu parent="Parent item with SubMenu">
            <li>
              <a>Sub item 1</a>
            </li>
            <li>
              <a>Sub item 2</a>
            </li>
            <li>
              <a>Sub item 3</a>
            </li>
            <li>
              <a>Sub item 4</a>
            </li>
          </SubMenu>
        )
      ).toMatchSnapshot()
    }).not.toThrow()
  })
})
