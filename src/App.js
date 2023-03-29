import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HomePage } from './pages/Home-page/Home-page';
import { Header } from './components/Header.js';
import { GamePage } from './pages/game-page';
import { OrderPage } from './pages/order-page';
import { store } from './redux';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/app/:title">
              <GamePage />
            </Route>
            <Route exact path="/order">
              <OrderPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
