import { Link, NavLink, routes, useLocation, useMatch } from '@redwoodjs/router'
import { FC, useMemo } from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
import Dropdown from 'src/components/Dropdown/Dropdown'
import SubMenu from 'src/components/SubMenu/SubMenu'
import { mergeClassName } from 'src/utils'

type MainLayoutProps = {
  children?: React.ReactNode
}

const Logo = () => (
  <div className="flex items-center">
    <img
      width="60"
      height="60"
      loading="lazy"
      alt="3ine Footer Logo"
      src="images/icon-192x192.png"
    />
    <div className="ml-3 text-xl font-extrabold font-gruppo text-shadow">
      3ine.app
    </div>
  </div>
)

const CustomNavLink: FC<{ to: string }> = ({ to, children }) => {
  const { match } = useMatch(to)

  return (
    <li>
      <Link to={to}>
        <span className={match ? 'text-shadow' : ''}>{children}</span>
      </Link>
    </li>
  )
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const current = new Date()
  const { pathname } = useLocation()
  const isWhyActive = useMemo(
    () => ['/flashcards'].includes(pathname),
    [pathname]
  )

  return (
    <div className="drawer">
      <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col min-h-screen drawer-content">
        <div className="shadow-md sticky top-0 bg-base-100 z-10 font-gruppo">
          <div className="flex items-center max-w-7xl mx-auto h-14 pl-6 pr-4 xl:px-0">
            <Link
              to={routes.home()}
              className="text-4xl font-extrabold navbar-logo text-shadow"
            >
              <span className="inline-block">3</span>
              <span>ine</span>
            </Link>
            <div className="hidden flex-1 text-right sm:block">
              <Dropdown
                menuClass="rounded-xl w-52 bg-base-100"
                labelClass={mergeClassName(
                  isWhyActive &&
                    'bg-neutral hover:bg-neutral text-neutral-content',
                  'btn btn-sm btn-ghost mr-2 text-base'
                )}
                label={
                  <>
                    <span className="font-serif">W</span>
                    <span className="lowercase">hy</span>
                  </>
                }
              >
                <NavLink activeClassName="text-shadow" to={routes.flashcards()}>
                  Flashcards
                </NavLink>
              </Dropdown>

              <Link
                className="btn btn-sm btn-ghost mr-2 text-base"
                to={routes.home()}
              >
                <span className="font-serif">W</span>
                <span className="lowercase">here</span>
              </Link>
              <Link
                className="btn btn-sm btn-ghost mr-2 text-base"
                to={routes.home()}
              >
                <span className="font-serif">W</span>
                <span className="lowercase">hen</span>
              </Link>
              <NavLink
                className="btn btn-sm btn-ghost mr-2 text-base"
                activeClassName="bg-neutral text-white hover:bg-neutral"
                to={routes.about()}
              >
                <span className="capitalize">About</span>
              </NavLink>
            </div>
            <div className="flex-1 text-right sm:hidden">
              <label htmlFor="menu-drawer" className="btn btn-square btn-ghost">
                <FiMenu size={28} />
              </label>
            </div>
          </div>
        </div>
        <main className="flex-1 w-full max-w-7xl mx-auto mt-14 sm:mt-20 px-6 xl:px-0">
          {children}
        </main>
        <footer className="p-10 footer flex items-center flex-col-reverse sm:flex-row bg-gradient-to-t from-neutral to-base-100">
          <div className="flex-1 place-items-center sm:place-items-start">
            <Logo />
            <p className="font-medium text-shadow-light">
              Copyright © {current.getFullYear()} - All right reserved
            </p>
          </div>
          <div>
            <div className="grid grid-flow-col gap-4">
              <a
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                href="https://twitter.com/ralphbliu"
              >
                <FaTwitter size="28" className="drop-shadow-lg" />
              </a>
            </div>
          </div>
        </footer>
      </div>
      <div className="drawer-side font-gruppo">
        <label htmlFor="menu-drawer" className="drawer-overlay">
          &nbsp;
        </label>
        <ul className="p-4 overflow-y-auto menu w-80 bg-base-100">
          <li className="pt-2 pb-4">
            <div className="flex items-center">
              <div className="flex-1">
                <Logo />
              </div>
              <label
                htmlFor="menu-drawer"
                className="btn btn-square btn-ghost "
              >
                <IoMdClose size={30} />
              </label>
            </div>
          </li>
          <SubMenu
            isOpen={isWhyActive}
            parent={
              <a href="/">
                <span className="font-serif">W</span>
                <span className="lowercase">hy</span>
              </a>
            }
          >
            <ul className="menu">
              <CustomNavLink to={routes.flashcards()}>Flashcards</CustomNavLink>
            </ul>
          </SubMenu>
          <CustomNavLink to={routes.home()}>
            <span className="font-serif">W</span>
            <span className="lowercase">here</span>
          </CustomNavLink>
          <CustomNavLink to={routes.home()}>
            <span className="font-serif">W</span>
            <span className="lowercase">hen</span>
          </CustomNavLink>
          <CustomNavLink to={routes.about()}>
            <span className="capitalize">About</span>
          </CustomNavLink>
        </ul>
      </div>
    </div>
  )
}

export default MainLayout
