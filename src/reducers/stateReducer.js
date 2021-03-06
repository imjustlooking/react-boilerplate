import { Map, List } from 'immutable'

import {
  ACTION_ADD_PLAYER,
  ACTION_EDIT_INPUT
} from '../actions/actionCreators'

const addPlayer = (action) => (state) => {
  const players = state.getIn(["data", "players"], List())
  return state.setIn(["data", "players"], players.push(action.name))
}

const editInput = (action) => (state) => {
  return state.setIn(action.path, action.value)
}

const applyFn = (state, fn) => fn(state)

const pipe = (fns, state) =>
  state.withMutations(s => fns.reduce(applyFn, s))

const state = (state = Map(), action) => {
  switch (action.type) {

    case ACTION_ADD_PLAYER:
      return pipe([
        addPlayer(action),
      ], state)

    case ACTION_EDIT_INPUT:
      return pipe([
        editInput(action),
      ], state)

    default:
      return state
  }
}

export default state
