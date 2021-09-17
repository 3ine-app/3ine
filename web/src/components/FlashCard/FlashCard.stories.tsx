import FlashCard from './FlashCard'

export const base = () => {
  return <FlashCard />
}

export const custom = () => {
  return (
    <FlashCard
      question="Do you know you can simply customized flashcard?"
      answer="Yes, now I know from this good example!"
      className="bg-neutral text-neutral-content text-2xl font-gruppo"
    />
  )
}

export default { title: 'Components/FlashCard' }
