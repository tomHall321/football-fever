import React from 'react';
import Main from '../Main';
import ResetBtn from '../ResetBtn'
import AboutPageBtn from '../AboutPageBtn'
import PlayerHeader from '../Headers/PlayerHeader'
import AboutPage from '../AboutPage/AboutPage'

const App = ({ aboutPage }) => {
  return (
    !aboutPage ?
      <>
        <section className="row-wrapper">
          <AboutPageBtn />
          <ResetBtn />
        </section>
        <PlayerHeader />
        <Main />
      </>
      :
      <>
        <AboutPageBtn />
        <PlayerHeader />
        <AboutPage />
      </>
  );
}

export default App;