import { mergeClassName } from './utils'

describe('utils', () => {
  it('mergeClassName', () => {
    expect(mergeClassName()).toEqual('')
    expect(mergeClassName(' p-1   ')).toEqual('p-1')
    expect(mergeClassName(' p-2', ' m-6 absolute flex gap-4 ')).toEqual(
      'p-2 m-6 absolute flex gap-4'
    )
    expect(
      mergeClassName(' p-2', ' m-6 absolute flex gap-4 ', 'p-2 absolute')
    ).toEqual('p-2 m-6 absolute flex gap-4')

    expect(mergeClassName(' sm:m-3', undefined, null, '', 'bg-black')).toEqual(
      'sm:m-3 bg-black'
    )
  })
})
