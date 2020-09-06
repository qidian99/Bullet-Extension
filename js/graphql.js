const USER_FRAGMENT = `
userId
password
username
email
avatar
friends {
  userId
  email
  username
}`;

const BULLET_FRAGMENT = `
bulletId
user {
  userId
  username
}
room {
  roomId
  alias
}
timestamp
content
updatedAt
createdAt
tags {
  name
  count
}`;

const ROOM_FRAGMENT = `
roomId
alias
creator {
  userId
  username
}
users {
  userId
  username
}
admins {
  userId
  username
}
avatar
updatedAt
public
`;

export const loginMutation = `mutation login($username: String! $password: String!) {
  login(username: $username password: $password) {
		token
		user {
      ${USER_FRAGMENT}
    }
	}
}`

export const allRoomsQuery = `query allRooms {
  allRooms {
    ${ROOM_FRAGMENT}
  }
}`

export const bulletsQuery = `
query bullets($roomId: ID!, $videoId: ID!) {
  allBulletsInResource(roomId: $roomId, resourceId: $videoId) {
    bulletId
    row
    timestamp
    content
  }
}
`
