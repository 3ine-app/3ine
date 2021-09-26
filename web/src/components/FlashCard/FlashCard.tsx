import type { FC, HTMLAttributes } from 'react'
import { FaRegHandPointRight } from 'react-icons/fa'

interface FlashCardProps extends HTMLAttributes<HTMLDivElement> {
  question?: string
  answer?: string
}

const FlashCard: FC<FlashCardProps> = ({
  question = 'What is your question?',
  answer = 'This is answer',
  className = '',
  ...rest
}) => {
  return (
    <div className="flashcard" {...rest}>
      <div className="flashcard-body">
        <div className={`flashcard-question ${className ?? ''}`}>
          <p dangerouslySetInnerHTML={{ __html: question }}></p>
          <div className="flashcard-float">
            <FaRegHandPointRight size={30} />
          </div>
        </div>
        <div className={`flashcard-answer ${className ?? ''}`}>
          <p dangerouslySetInnerHTML={{ __html: answer }}></p>
        </div>
      </div>
    </div>
  )
}

export default FlashCard
