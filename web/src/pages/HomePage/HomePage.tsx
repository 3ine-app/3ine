import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Home"
        description="Wine is subjective and personal, it just make no senses for us to
            manipulate your taste. Thus, we provide what we believe the three
            pivot wheels to help you taking control of your wine experience."
      />
      <div className="hero-content flex-col lg:flex-row-reverse gap-20 mb-20 p-0">
        <img
          loading="lazy"
          alt="3ine.app Home Page"
          src="/images/hero-graphic.gif"
          className="w-full max-w-2xl rounded-2xl filter contrast-75 shadow-2xl"
        />
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold">Take the wheel,</h1>
          <h1 className="mb-5 text-4xl md:text-6xl font-bold">
            we fill up for you
          </h1>
          <p className="mb-5">
            Wine is subjective and personal, it just make no senses for us to
            manipulate your taste. Thus, we provide what we believe the three
            pivot wheels to help you taking control of your wine experience.
          </p>
          <Link to={routes.flashcards()} className="btn">
            Get Started
          </Link>
        </div>
      </div>
    </>
  )
}

export default HomePage
