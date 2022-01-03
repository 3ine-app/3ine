import { createUser, getUserById } from '../user/user'
import {
  deleteUserProfile,
  getUserProfile,
  updateUserProfile,
} from './userProfile'

describe('services/userProfile', () => {
  const current = new Date()
  let userId = ''

  beforeEach(async () => {
    const user = await createUser({
      data: {
        issuer: 'fake.issuer.11231232',
        email: 'example@domain.com',
      },
    })

    userId = user.id
  })

  it('getUserProfile', async () => {
    const {
      id,
      userId: _userId,
      avatar,
      firstName,
      lastName,
      updatedAt,
    } = await getUserProfile({
      userId,
    })

    expect(id).not.toBeNull()
    expect(_userId).toEqual(userId)
    expect(avatar).toBeNull()
    expect(firstName).toBeNull()
    expect(lastName).toBeNull()
    expect(updatedAt).toBeInstanceOf(Date)
    expect(new Date(updatedAt).getTime()).toBeGreaterThanOrEqual(
      current.getTime()
    )
  })

  it('updateUserProfile', async () => {
    const now = new Date()
    const userProfileData = {
      avatar: 'https://myavatar.com',
      firstName: 'David',
      lastName: 'Jones',
    }
    const {
      id,
      userId: _userId,
      avatar,
      firstName,
      lastName,
      updatedAt,
    } = await updateUserProfile({
      data: userProfileData,
      userId,
    })

    expect(_userId).toEqual(userId)
    expect(avatar).toEqual(userProfileData.avatar)
    expect(firstName).toEqual(userProfileData.firstName)
    expect(lastName).toEqual(userProfileData.lastName)
    expect(updatedAt).toBeInstanceOf(Date)
    expect(new Date(updatedAt).getTime()).not.toEqual(now.getTime())
  })

  it('deleteUserProfile', async () => {
    const userProfile = await getUserProfile({ userId })

    expect(await deleteUserProfile({ userId })).toBeTruthy()

    const user = await getUserById({ id: userId })

    expect(user.id).not.toBeNull()
    expect(await getUserProfile({ userId })).toBeNull()
  })
})
