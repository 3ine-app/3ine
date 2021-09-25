import Dropdown from './Dropdown'

export const base = () => {
  return (
    <Dropdown label="Dropdown" tabIndex={0} menuClass="p-2 w-52 rounded-box">
      <button className="btn btn-ghost">Menu item 1</button>
      <button className="btn btn-ghost">Menu item 2</button>
      <button className="btn btn-ghost">Menu item 3</button>
    </Dropdown>
  )
}

export default { title: 'Components/Dropdown' }
