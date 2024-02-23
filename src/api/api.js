const baseURL = 'https://api.github.com'

export const getAllUsers = async () => {
  try {
    const response = await fetch(`${baseURL}/users`)
    if (!response.ok) {
      throw new Error('Failed to fetch user list')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

export const getUserById = async (username) => {
  if (!username) {
    throw new Error('Username is required')
  }
  try {
    const response = await fetch(`${baseURL}/users/${username}`)
    if (!response.ok) {
      throw new Error('Failed to fetch user details')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}
