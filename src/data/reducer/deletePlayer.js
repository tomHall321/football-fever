const deletePlayer = (state, action) => {
  
  //button click identifies specific player index
  let playerToBeDeleted = action.index;

  let playersArray = state.players

  // filter out specific player to delete
  playersArray = playersArray.filter((player, index) => index !== playerToBeDeleted)

  return {
    ...state,
    players: playersArray,
    tooManyPlayers: false,
  }
}

  export default deletePlayer;