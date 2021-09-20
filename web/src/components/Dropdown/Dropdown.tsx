import { Children, FC, MouseEvent, ReactNode } from 'react'
import { mergeClassName } from 'src/utils'

interface Props {
  label: ReactNode
  tabIndex?: number
  menuClass?: string
  labelClass?: string
  dropdownClass?: string
}

const Dropdown: FC<Props> = ({
  label,
  tabIndex = 0,
  children,
  menuClass,
  labelClass,
  dropdownClass,
}) => {
  // A workaround of click and focus behavior not working on Safari
  // https://gist.github.com/cvrebert/68659d0333a578d75372
  const handleClickFocus = (e: MouseEvent<HTMLButtonElement>) => {
    // Set button focus onClick since button can NOT be focused by clicking (even with tabindex)
    e.currentTarget.focus()
  }

  return (
    <div className={mergeClassName('dropdown', dropdownClass)}>
      <button
        tabIndex={tabIndex}
        onClick={handleClickFocus}
        className={mergeClassName('btn', labelClass)}
      >
        {label}
      </button>
      <ul
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={tabIndex}
        className={mergeClassName('shadow menu dropdown-content', menuClass)}
      >
        {Children.map(children, (childNode) => (
          <li>{childNode}</li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
