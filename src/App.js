import React from 'react';
import Main from './components/Main';
import ResetBtn from './components/ResetBtn'
import PlayerHeader from './components/Headers/PlayerHeader'

function App() {
  return (
    <>
      <ResetBtn />
      <PlayerHeader />
      <Main />
    </>
  );
}

export default App;