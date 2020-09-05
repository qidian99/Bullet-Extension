export const loginMutation = `mutation login($username: String! $password: String!) {
  login(username: $username password: $password) {
		token
		user {
			userId
      password
      username
      email
      avatar
      friends {
        userId
        email
        username
      }
		}
	}
}`
