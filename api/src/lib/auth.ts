import { Magic } from '@magic-sdk/admin'
import { AuthenticationError } from '@redwoodjs/graphql-server'
import {
  createUser,
  getUserByIssuer,
  updateUserByIssuer,
} from 'src/services/user/user'

/**
 * getCurrentUser returns the user information together with
 * an optional collection of roles used by requireAuth() to check
 * if the user is authenticated or has role-based access
 *
 * @param decoded - The decoded access token containing user info and JWT claims like `sub`. Note could be null.
 * @param { token, SupportedAuthTypes type } - The access token itself as well as the auth provider type
 * @param { APIGatewayEvent event, Context context } - An object which contains information from the invoker
 * such as headers and cookies, and the context information about the invocation such as IP Address
 *
 * @see https://github.com/redwoodjs/redwood/tree/main/packages/auth for examples
 */
export const getCurrentUser = async (decoded) => {
  const mAdmin = new Magic(process.env.MAGIC_SECRET_API_KEY)
  const { proof, claim } = decoded
  const issuer = claim.iss

  const { email } = await mAdmin.users.getMetadataByIssuer(issuer)
  const user = await getUserByIssuer({ issuer })
  const _user = user
    ? await updateUserByIssuer({
        issuer,
        data: { logOn: new Date() },
      })
    : await createUser({ data: { issuer, email } })

  // https://magic.link/docs/introduction/decentralized-id#what-is-a-did-token
  return { proof, claim, ..._user }
}

/**
 * The user is authenticated if there is a currentUser in the context
 *
 * @returns {boolean} - If the currentUser is authenticated
 */
export const isAuthenticated = (): boolean => {
  return !!context.currentUser
}

/**
 * Use requireAuth in your services to check that a user is logged in,
 * and raise an error if they're not.
 *
 * @returns - If the currentUser is authenticated
 *
 * @throws {AuthenticationError} - If the currentUser is not authenticated
 *
 * @see https://github.com/redwoodjs/redwood/tree/main/packages/auth for examples
 */
export const requireAuth = () => {
  if (!isAuthenticated()) {
    throw new AuthenticationError("You don't have permission to do that.")
  }
  // Custom implementation of RBAC is required for magicLink
}
