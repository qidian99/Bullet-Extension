import { loginUser, fetchAllRooms } from './util.js'

window.addEventListener('DOMContentLoaded', async (event) => {
  const rooms = await fetchAllRooms();
  document.getElementById('bulletRooms').innerHTML =
`
<bullet-room rooms='${JSON.stringify(rooms)}'></bullet-room>
`
});
