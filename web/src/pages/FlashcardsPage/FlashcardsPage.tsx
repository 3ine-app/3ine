import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import FlashCardsCell from 'src/components/FlashCardsCell'
import { mergeClassName } from 'src/utils'

// TODO: Move to global level
const TAGS = [
  'grape',
  'region',
  'colour',
  'SAT',
  'aroma',
  'terroir',
  'tasting',
  'labelling',
  'appellation',
  'stainless steel',
  'inert vessels',
  'fermentation',
  'food pairing',
  'temperature',
  'winemaking',
  'white',
  'red',
  'sweet',
  'palates',
  'blending',
  'vintage',
  'maturation',
  'secondary',
  'botrytis',
  'wine 101',
  'storage',
  'ageing',
  'sparkling',
  'fortified',
  'pinot noir',
  'zinfandel',
  'chardonnay',
  'riesling',
  'sauvignon blanc',
  'chenin blanc',
  'semillon',
  'pinot gris',
  'gewurztraminer',
  'viognier',
  'merlot',
]
const FlashcardsPage = () => {
  const randomIndex = Math.floor(Math.random() * TAGS.length)
  const [currentTags, setCurrentTags] = useState(
    TAGS.slice(randomIndex, randomIndex + 1)
  )

  return (
    <>
      <MetaTags
        title="WSET Flashcards"
        ogContentUrl="https://logo.clearbit.com/wsetglobal.com"
        description="A collection of WSET flashcards help you to effortlessly revise before your exam."
      />
      <div className="flex flex-wrap">
        <div className="collapse rounded-box collapse-arrow shadow-xl">
          <input type="checkbox" defaultChecked />
          <div className="collapse-title text-xl font-medium pr-8">
            {currentTags.map((tag, index) => (
              <div
                key={`badge-${index}`}
                className="badge badge-neutral badge-outline shadow-md badge-sm md:badge-md lg:badge-lg capitalize mx-0.5"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="collapse-content flex flex-wrap">
            {TAGS.map((tag, index) => (
              <div className="form-control" key={`tag-checkbox-${index}`}>
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    name="flashCardTags"
                    checked={currentTags.includes(tag)}
                    onChange={() => {
                      if (currentTags.includes(tag)) {
                        setCurrentTags(currentTags.filter((t) => t !== tag))
                      } else {
                        setCurrentTags([...currentTags, tag])
                      }
                    }}
                    className="checkbox-xs md:checkbox-sm lg:checkbox-md checkbox checkbox-neutral rounded-full"
                  />
                  <span
                    className={mergeClassName(
                      'label-text capitalize ml-1 mr-2 text-xs md:text-sm',
                      currentTags.includes(tag) ? 'text-shadow' : ''
                    )}
                  >
                    {tag}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 mb-20 flex justify-center">
        <FlashCardsCell tags={currentTags.map((t) => t.toLowerCase())} />
      </div>
    </>
  )
}

export default FlashcardsPage
