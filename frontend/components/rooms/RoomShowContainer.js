import { connect } from "react-redux";
import RoomShow from "./RoomShow";
import { fetchRoom } from "../../actions/room_actions";
import { receiveMessage } from "../../actions/message_actions";

const mSTP = state => {
  return ({
    room: state.entities.room,
    messages: Object.values(state.entities.messages)
  })
}

const mDTP = dispatch => ({
  fetchRoom: id => dispatch(fetchRoom(id)),
  receiveMessage: message => dispatch(receiveMessage(message))
})

export default connect(mSTP, mDTP)(RoomShow);