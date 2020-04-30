import React from 'react';

class RoomShow extends React.Component {
  componentDidMount() {
    debugger
    this.props.fetchRoom(this.props.match.location);
  }
  
  render() {
    return (
      <input></input>
    )
  }
}

export default RoomShow;