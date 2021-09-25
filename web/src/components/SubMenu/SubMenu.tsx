import {
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  isValidElement,
  MouseEvent,
  ReactNode,
  useEffect,
  useState,
} from 'react'
import { mergeClassName } from 'src/utils'

interface Props extends HTMLAttributes<HTMLLIElement> {
  parent: ReactNode
  menuClass?: string
  isOpen?: boolean
}

const SubMenu: FC<Props> = ({
  parent,
  children,
  menuClass,
  isOpen = false,
  ...rest
}) => {
  const [opened, setOpened] = useState(isOpen)

  useEffect(() => {
    setOpened(isOpen)
  }, [isOpen])

  return (
    <li {...rest}>
      {Children.map(parent, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            onClick: (e: MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault()
              e.stopPropagation()

              setOpened(!opened)
            },
          })
        }

        return child
      })}
      <ul
        className={mergeClassName('menu ', menuClass, !opened ? 'hidden' : '')}
      >
        {children}
      </ul>
    </li>
  )
}

export default SubMenu
