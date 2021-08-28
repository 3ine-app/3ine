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
      <div className="text-lg">
        Wine is beautiful but could be a bit intimidated to get close to it. We
        are a group of wine enthusiasts deems to share our knowledge for{' '}
        <mark className="bg-primary text-primary-content">free</mark> in all
        sorts of vehicles to help everyone start enjoying wine without paying a
        dime and hassles. We summarized{' '}
        <span className="text-primary-focus font-serif font-extrabold">3</span>{' '}
        most important topics of everything about{' '}
        <span className="text-primary-focus font-serif font-extrabold">w</span>
        ine you would need to focus on, thus{' '}
        <span className="text-primary-focus font-serif font-extrabold">
          3ine
        </span>{' '}
        is born.
      </div>
      <div className="flex flex-col lg:flex-row mt-10">
        {[
          {
            title: 'hy',
            icon: <GiGrapes size={40} />,
            description:
              'Learn basic knowledge about grapes, regions, terroir, colour, countries, history, wine making, wine cellaring and even WSET courses, all free.',
          },
          {
            title: 'here',
            icon: <FaWineBottle size={40} />,
            description:
              'Learn basic knowledge about grapes, regions, terroir, colour, countries, history, wine making, wine cellaring and even WSET courses, all free.',
          },
          {
            title: 'hen',
            icon: <RiCalendarEventLine size={40} />,
            description:
              'Learn basic knowledge about grapes, regions, terroir, colour, countries, history, wine making, wine cellaring and even WSET courses, all free.',
          },
        ].map(({ icon, title, description }, index) => (
          <div
            key={`about-${index}w`}
            className={`card shadow-2xl lg:card-side bg-neutral text-neutral-content ${
              index <= 2 ? 'mb-10 lg:mr-10' : ''
            }`}
          >
            <div className="card-body">
              <div className="flex items-center mb-6">
                <div className="flex-1">
                  <span className="ml-1 text-4xl font-serif">W</span>
                  <span className="text-2xl">{title}</span>
                </div>
                <span>{icon}</span>
              </div>
              <p className="font-open-sans font-extralight">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default AboutPage
