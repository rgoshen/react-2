import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SnackOrBoozeApi from './Api';
import NavBar from './NavBar';
import Menu from './Menu';
import Item from './Item';
import { snackContent, drinkContent } from './content';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  // get all snack items
  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  // get all drink items
  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path='/'>
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path='/snacks'>
              <Menu items={snacks} title='Snacks' content={snackContent} />
            </Route>
            <Route path='/snacks/:id'>
              <Item items={snacks} cantFind='/snacks' />
            </Route>
            <Route exact path='/drinks'>
              <Menu items={drinks} title='Drinks' content={drinkContent} />
            </Route>
            <Route path='/drinks/:id'>
              <Item items={drinks} cantFind='/drinks' />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
