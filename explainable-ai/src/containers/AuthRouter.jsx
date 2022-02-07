import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import App from '../App'
import Layout from '../components/Layout'
import HomePage from './HomePage'
import 'bootstrap/dist/css/bootstrap.css';
import DecisionTreeStartPage from './decision-tree-container/DecisionTreeStartPage';
import RegressionStartPage from './linear-regression-container/RegressionStartPage';

export const AuthRouter = () => {

  return (
    <BrowserRouter>
        <Layout>
        <Switch>
          <Route path='/' exact component={App} />
          <Route path='/home' exact component={HomePage} />
          <Route path='/regression' exact component={RegressionStartPage} />
          <Route path='/decision-tree' exact component={DecisionTreeStartPage} />

          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
        </Layout>

    </BrowserRouter>
  )
}
