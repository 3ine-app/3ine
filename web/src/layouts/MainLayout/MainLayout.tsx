import { Link, NavLink, routes } from '@redwoodjs/router'
import { FaTwitter } from 'react-icons/fa'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const current = new Date()
  const brandName = document
    .getElementsByTagName('meta')
    .namedItem('brandName').content

  return (
    <div className="flex flex-col min-h-screen">
      <div className="shadow-md sticky top-0 bg-base-100 z-10 font-gruppo">
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
      <main className="flex-1 max-w-7xl mx-auto mt-20 px-6 xl:px-0">
        {children}
      </main>
      <footer className="p-10 footer flex items-center flex-col-reverse sm:flex-row bg-gradient-to-t from-neutral to-base-100">
        <div className="flex-1 place-items-center sm:place-items-start">
          <div className="flex items-center">
            <img
              width="60"
              height="60"
              loading="lazy"
              alt="3ine Footer Logo"
              src="images/icon-192x192.png"
            />
            <div className="ml-3 text-xl font-extrabold font-gruppo">
              {brandName}
            </div>
          </div>
          <p>Copyright © {current.getFullYear()} - All right reserved</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a
              target="_blank"
              rel="noreferrer"
              referrerPolicy="no-referrer"
              href="https://twitter.com/ralphbliu"
            >
              <FaTwitter size="28" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
