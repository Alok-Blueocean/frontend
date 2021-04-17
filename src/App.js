import logo from './logo.svg';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
// import BlockBuilder from './containers/blockbuilder';
import ParentThemes from './pages/parentthemes_class'
import SubThemes from './pages/subthemes'
import BlockBuilder from './pages/blockbuilder'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <Redirect to='/parent/theme' />
        </Route>
        <Route path='/parent/theme' exact>
            <ParentThemes />
        </Route>
        <Route path='/parent/theme/:theme_id' component={SubThemes}>
            {/* <SubThemes /> */}
        </Route>
        <Route path='/theme/:theme_id/question' component={BlockBuilder}>
            {/* <SubThemes /> */}
        </Route>
      </Switch>
      {/* <BlockBuilder /> */}
    </div>
  );
}

export default App;
