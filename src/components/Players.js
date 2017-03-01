import React from 'react'
import { connect } from 'react-redux'

import { addPlayer } from "../actions/actionCreators"

// const test = (players) => {
//   let playersTable = null
//   if (players) {
//     // console.log("players -> " + players)
//     // return players.map( (player) => (<div>Test</div>) )
//     return <div>Test</div>
//   }
// }

const Players = (props) => {
  if (props.state) {
    return (
      <div>
        <h1>Players</h1>
        <div>{ props.state.map( (player) => (<div>Test</div>) )}</div>
        <div>
          <input id="input-name"></input>
          <button onClick={ (event) => {
                              // props.onAddPlayer(document.getElementById('input-name').value)}}>
                              props.dispatch(addPlayer(document.getElementById('input-name').value))}}>
                  Add a player
          </button>
        </div>
      </div>
  )} else {
    return (
      <div>
        <div>
          <input id="input-name"></input>
          <button onClick={ (event) => {
                              props.dispatch(addPlayer(document.getElementById('input-name').value))}}>
                  Add a player
          </button>
        </div>
      </div>)}
}

export default Players

// const mapDispatchToProps = (dispatch, state) => {
//   return {
//     onAddPlayer: (name) => {
//       dispatch(addPlayer(name))
//     }
//   }
// }
//
// export default connect(null, mapDispatchToProps)(Players)