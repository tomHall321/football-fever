import React from 'react';
import Main from './components/Main';
import ResetBtn from './components/ResetBtn'
import AboutPage from './components/AboutPage'
import PlayerHeader from './components/Headers/PlayerHeader'

const App = ({aboutPage}) => {
  return (
    !aboutPage ?
    <>
    <div className="row-wrapper">
      <AboutPage/>
      <ResetBtn />
    </div>
      <PlayerHeader />
      <Main />
    </>
    :
    <PlayerHeader />
  );
}

export default App;