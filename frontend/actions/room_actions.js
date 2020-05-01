import * as RoomAPIUtil from '../util/rooms_api_util';

export const RECEIVE_ROOM = 'RECEIVE_ROOM';

const receiveRoom = room => ({
  type: RECEIVE_ROOM,
  data: room
})

export const fetchRoom = id => dispatch => {
  RoomAPIUtil.fetchRoom(id)
  .then(data => dispatch(receiveRoom(data)))
}