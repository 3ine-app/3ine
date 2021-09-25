/**
 *
 * @param {string[]} args multiple className string
 * @returns {string} className string
 */
export function mergeClassName(...args: string[]) {
  return args
    .filter((v) => !!v)
    .map((v) => v.trim().split(' '))
    .flat()
    .reduce(
      (previous, current) =>
        previous.includes(current) ? [...previous] : [...previous, current],
      []
    )
    .join(' ')
}
