import { connect } from "react-redux";
import RoomShow from "./RoomShow";
import { fetchRoom } from "../../actions/room_actions";

const mSTP = state => ({
  room: state.room
})

const mDTP = dispatch => ({
  fetchRoom: id => dispatch(fetchRoom(id)),
  sendMessage: body => dispatch(sendMessage(body))
})

export default connect(mSTP, mDTP)(RoomShow);