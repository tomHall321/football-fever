import React from 'react';
import NumberOfPlayers from './components/NumberOfPlayers/NumberOfPlayers';
import PlayerForm from './components/PlayerForm';
import PlayersList from './components/PlayersList/PlayersList';


function App() {
  return (
    <>
      <NumberOfPlayers />
      <PlayerForm />
      <PlayersList/>
    </>
  );
}

export default App;