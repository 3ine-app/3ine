/* eslint-disable jsx-a11y/anchor-is-valid */
import SubMenu from './SubMenu'

export const base = () => {
  return (
    <ul className="p-6 menu w-80 shadow-lg rounded-box">
      <li>
        <a>Parent item 1</a>
      </li>
      <SubMenu parent={<a>Parent item with SubMenu</a>}>
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
    </ul>
  )
}

export default { title: 'Components/SubMenu' }
