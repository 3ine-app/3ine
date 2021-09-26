import type { BeforeResolverSpecType } from '@redwoodjs/api'
import { requireAuth } from 'src/lib/auth'
import { db } from 'src/lib/db'

type GetFlashCardsPayload = Omit<
  Parameters<typeof db.flashCard.findMany>[0],
  'select' | 'where'
> & { tags?: Array<string> }
type CreateFlashCardPayload = Omit<
  Parameters<typeof db.flashCard.create>[0],
  'select'
>
type UpdateFlashCardPayload = Pick<
  Parameters<typeof db.flashCard.update>[0],
  'data'
> & { id: string }
type DeleteFlashCardPayload = { id: string }

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const flashCards = ({ tags, ...args }: GetFlashCardsPayload) => {
  const where = tags
    ? { OR: tags.map((tag) => ({ tags: { contains: tag } })) }
    : {}

  return db.flashCard.findMany({
    ...args,
    where,
  })
}

export const createFlashCard = ({ data }: CreateFlashCardPayload) => {
  return db.flashCard.create({ data })
}

export const updateFlashCard = ({ data, id }: UpdateFlashCardPayload) => {
  return db.flashCard.update({ data, where: { id } })
}

export const deleteFlashCard = ({ id }: DeleteFlashCardPayload) => {
  return db.flashCard.delete({ where: { id } })
}
