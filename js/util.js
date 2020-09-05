import {
  loginMutation, allRoomsQuery
} from './graphql.js'


const formatErrors = errors => errors.map(err => err.message).join(',');

const excecuteQuery = (query, variables) => {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get('token', function ({ token }) {

      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("Accept", "application/json");
      if (token) {
        headers.append("Authorization", `Bearer ${token}`);
      }

      fetch('https://qidian.blue/bullet', { // This is the endpoint
        method: 'POST',
        headers,
        body: JSON.stringify({
          query,
          variables,
        })
      })
        .then(r => r.json())
        .then(({
          data,
          errors
        }) => {
          if (errors) {
            // console.log(errors, typeof errors, JSON.stringify(errors));
            reject(errors);
          }
          resolve(data);
        })
    });
  })
}


export const loginUser = async (username, password) => {
  try {
    const {
      login: {
        token,
        user
      }
    } = await excecuteQuery(loginMutation, {
      username,
      password
    });

    chrome.storage.sync.set({ token }, function () {
      console.log("Token is set", token);
    });
    window.location.href = "/html/dashboard.html";
    chrome.browserAction.setPopup({
      popup: '/html/dashboard.html'
    }, () => {
      console.log("setting pop up.")
    });

  } catch (errors) {
    console.error(formatErrors(errors));
  }
}


export const fetchAllRooms = async () => {
  try {
    const {
      allRooms: rooms
    } = await excecuteQuery(allRoomsQuery);
    console.log('rooms', JSON.stringify(rooms))
    return rooms;

  } catch (errors) {
    console.error(formatErrors(errors));
  }
}
