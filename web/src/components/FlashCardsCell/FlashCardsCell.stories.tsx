import { Empty, Failure, Loading, Success } from './FlashCardsCell'
import { standard } from './FlashCardsCell.mock'

export const loading = () => {
  return Loading ? <Loading /> : null
}

export const empty = () => {
  return Empty ? <Empty /> : null
}

export const failure = () => {
  return Failure ? (
    <Failure error={new Error('500 Internal Server Error')} />
  ) : null
}

export const success = () => {
  return Success ? <Success {...standard()} /> : null
}

export default { title: 'Cells/FlashCardsCell' }
