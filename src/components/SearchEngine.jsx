import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom/cjs/react-router-dom.min'
import Nav from './Nav';
import Footer from "./Footer"
import Results from "./Results"

const SearchEngine = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
      <Router>
        <>
          <div className={darkMode ? 'dark' : ''}>
            <div className='dark:bg-gray-900 bg-gray-100 dark:text-gray min-h-screen'>
              <Nav setDarkMode={setDarkMode} darkMode={darkMode}></Nav>
              <div className="p-4">
                <Switch>
                  <Route exact path="/searchengine"><Redirect to="/search" /></Route>
                  <Route exact path="/search" component={Results}></Route>
                  <Route path="/images" component={Results}></Route>
                  <Route path="/news" component={Results}></Route>
                  <Route path="/videos" component={Results}></Route>
                </Switch>
              </div>
              <Footer />
            </div>
          </div>

        </>
      </Router>
  );
}
export default SearchEngine