import { requireAuth } from 'src/lib/auth'
import { db } from 'src/lib/db'

type GetUserProfileParams = Pick<
  Parameters<typeof db.userProfile.findUnique>[0]['where'],
  'userId'
>
type CreateUserProfileParams = Parameters<typeof db.userProfile.create>[0]
type UpdateUserProfileData = Pick<
  Parameters<typeof db.userProfile.update>[0]['data'],
  'firstName' | 'lastName' | 'avatar' | 'userId'
>
type UpdateUserProfileParams = {
  data: UpdateUserProfileData
}
type DeleteUserProfile = Pick<
  Parameters<typeof db.userProfile.delete>[0]['where'],
  'userId'
>

// Required by RedwoodJS
function beforeResolver(rules) {
  rules.add(requireAuth)
}

function getUserProfile({ userId }: GetUserProfileParams) {
  return db.userProfile.findUnique({ where: { userId } })
}

function createUserProfile({ data }: CreateUserProfileParams) {
  return db.userProfile.create({
    data,
  })
}

function updateUserProfile({
  userId,
  data,
}: UpdateUserProfileParams & {
  userId: string
}) {
  return db.userProfile.update({
    data,
    where: { userId },
  })
}

async function deleteUserProfile({ userId }: DeleteUserProfile) {
  await db.userProfile.delete({ where: { userId } })
  return true
}

// GraphQL resolver for composition fields
export const UserProfile = {
  fullName: (_, { root }) =>
    [root.firstName, root.lastName].filter((v) => v).join(' '),
}

export { beforeResolver }
// GraphQL API & services
export { updateUserProfile }
// Services only
export { getUserProfile, createUserProfile, deleteUserProfile }
