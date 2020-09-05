import {
  loginMutation
} from './graphql.js'


const excecuteQuery = (query, variables) => {
  return fetch('https://qidian.blue/bullet', { // This is the endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
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
        console.log(errors, typeof errors, JSON.stringify(errors));
        throw new Error(errors.map(err => err.message).join(','));
      }

      return data;
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

  } catch (error) {
    // Login error
  }
}
