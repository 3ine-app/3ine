import { Link, NavLink, routes } from '@redwoodjs/router'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <div className="shadow-sm">
        <div className="flex items-center max-w-7xl mx-auto h-14 px-6 xl:px-0">
          <Link
            to={routes.home()}
            className="text-4xl font-extrabold navbar-logo"
          >
            <span className="inline-block">3</span>
            <span>ine</span>
          </Link>
          <div className="flex-1 text-right">
            <Link
              className="btn btn-sm btn-ghost mr-2 text-base"
              to={routes.home()}
            >
              <span className="font-serif">W</span>
              <span className="lowercase">hy</span>
            </Link>
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
        </div>
      </div>
      <main className="max-w-7xl mx-auto mt-20 px-6 xl:px-0">{children}</main>
    </>
  )
}

export default MainLayout
