import { MetaTags } from '@redwoodjs/web'
import { FaWineBottle } from 'react-icons/fa'
import { GiGrapes } from 'react-icons/gi'
import { RiCalendarEventLine } from 'react-icons/ri'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="3ine.app: About us" />
      <div className="about-title">
        <div>
          <div>3ine</div>
        </div>
        <div>
          <div>Wine</div>
        </div>
      </div>
      <div className="lg:mx-32 text-justify">
        <div className="mb-4">
          <span className="text-shadow font-semibold font-serif text-xl">
            Wine
          </span>{' '}
          or{' '}
          <span className="text-shadow font-semibold font-serif text-xl">
            3 wine
          </span>
          ? Whatever you would like to call it, we provide quintessential
          knowledge of wine in{' '}
          <span className="text-shadow font-semibold font-serif text-xl">
            3 Ws
          </span>{' '}
          for <span className="text-shadow font-semibold font-serif">free</span>
          . Yes, everything you want or need to know about wine to help you
          becoming savvy to pick good bottles for your lovely night with
          significant one or friends at a fancy restaurant or event paving your
          way to become professional in wine.
        </div>
        <div>
          Wine is beautiful and everyone is deserved to appreciate it without
          costing you fortune. Getting understand about wine could be daunting
          and quite often you will need to pay to start with. We are a group of
          wine enthusiasts who are holding different levels of WSET certificates
          and devoted to share our passion and knowledge to people for free and
          bring more people into the wine world.
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-20">
        {[
          {
            title: 'hy',
            icon: <GiGrapes size={40} />,
            description:
              'Why wine tasted dry? why steak with full-bodied wine? why different glasses? why temperature matters? why aging process changes taste? Any questions you have about wine, we cover for you, no buzz words, no charges, all free.',
          },
          {
            title: 'here',
            icon: <FaWineBottle size={40} />,
            description:
              'Buying wine can be frustrated especially searching bargains for specific wine region, grape, winery (château) or vintage. There are so many wine brokers out there selling different wines in different prices, you never get all the wines you want from the same broker in the cheapest price among them, thus we do it all for you.',
          },
          {
            title: 'hen',
            icon: <RiCalendarEventLine size={40} />,
            description:
              'Do you know Pinot Palooza? Do you know Taste Champagne? Do you know Good Food and Wine Show? We collects all the wine events for you based on your current location, so you will not miss any.',
          },
        ].map(({ icon, title, description }, index) => (
          <div
            key={`about-${index}w`}
            className={`card flex-1 shadow-2xl lg:card-side bg-gradient-to-tl from-neutral to-neutral-focus text-neutral-content ${
              index <= 2 ? 'mb-10 lg:mr-10' : ''
            }`}
          >
            <div className="card-body">
              <div className="flex items-center mb-6">
                <div className="flex-1 font-gruppo">
                  <span className="ml-1 text-4xl font-serif">W</span>
                  <span className="text-2xl">{title}</span>
                </div>
                <span>{icon}</span>
              </div>
              <p className="font-extralight text-justify">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default AboutPage
