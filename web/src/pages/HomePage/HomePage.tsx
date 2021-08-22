import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="3ine.app home page"></MetaTags>
      <div className="mt-20 flex flex-col place-items-center">
        <img
          src="/android-chrome-192x192.png"
          loading="lazy"
          alt="3ine"
          width="192"
          height="192"
        />
        <div className="mt-10 text-5xl animate-pulse">Coming soon!</div>
      </div>
    </>
  )
}

export default HomePage
