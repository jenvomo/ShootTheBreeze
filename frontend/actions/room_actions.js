export const RECEIVE_ROOM = 'RECEIVE_ROOM';

const receiveRoom = room => ({
  type: RECEIVE_ROOM,
  room
})

export const fetchRoom = id => dispatch => {
  RoomAPIUtil.fetchRoom(id)
  .then(data => dispatch(receiveRoom(data)))
}