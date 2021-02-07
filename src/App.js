import './App.css';
import { Route } from 'react-router-dom'
import Layout from './hoc/Layout/layout'
import routes from './routes/routes'
import ControlPannelLogin from './containers/Login/Login';

function App() {
  
  const routesList = routes.map(({ subRoutes }, key) => {
    console.log(localStorage.getItem('login'))
    return subRoutes.map((item, key) => <Route exact path={item.path} component={item.component} key={key} />)
  },)

  
  
  return (
    <>
     
     {}<Route exact path="/" component={ControlPannelLogin}  />
    <Layout>
     
     {routesList}
   </Layout>
    </>
  );
}

export default App;
