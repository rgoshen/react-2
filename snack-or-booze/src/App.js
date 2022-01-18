import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/App.css';
import Home from './components/Home';
import SnackOrBoozeApi from './api/Api';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Item from './components/Item';
import { snackContent, drinkContent } from './content';
import AddItemForm from './components/AddItemForm';
import NotFoundPage from './components/Custom404';
import formatId from './helpers/formatId';

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

  // Function to pass down to form to update db
  const add = (formData, type) => {
    if (type === 'snacks') {
      setSnacks((snacks) => [
        ...snacks,
        { ...formData, id: formatId(formData.name) },
      ]);
      console.log('====================================');
      console.log(snacks);
      console.log('====================================');
    } else {
      setDrinks((drinks) => [
        ...drinks,
        { ...formData, id: formatId(formData.name) },
      ]);
      console.log('====================================');
      console.log(drinks);
      console.log('====================================');
    }
  };

  // Shows "Loading..." until data is received
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
            <Route exact path='/:type/add'>
              <AddItemForm add={add} />
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
            <Route path='*'>
              <NotFoundPage />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
