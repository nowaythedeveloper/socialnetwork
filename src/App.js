import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom'
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header/>
        <Navbar state={props.appState.sideBar}/>
        <div className="wrapper-content">
          <Route path="/profile" render={() => <Profile state={props.appState.profilePage} />} /> {/* Можно так рендерить */}
          <Route path="/dialogs" render={() => <Dialogs state={props.appState.dialogsPage} />} />
          <Route path="/settings" component={() => <Settings />} /> {/* Можно так рендерить */}
          <Route path="/music" component={Music} /> {/* Можно так рендерить */}
          <Route path="/news" component={News} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App