import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import App from '../App'
import Layout from '../comonents/Layout/Layout'
import HomePage from './HomePage'
import 'bootstrap/dist/css/bootstrap.css';

export const AuthRouter = () => {

  return (
    <BrowserRouter>
        <Layout>
        <Switch>
          <Route path='/' exact component={App} />
          <Route path='/home' exact component={HomePage} />

          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
        </Layout>

    </BrowserRouter>
  )
}
