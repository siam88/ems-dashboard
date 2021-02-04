import './App.css';
import {  Route} from 'react-router-dom'
import Layout from './hoc/Layout/layout'
import routes from './routes/routes'

function App() {
  const routesList = routes.map(({subRoutes},key)=>{
    return subRoutes.map((item,key)=><Route exact path={item.path} component={item.component} key={key}/>)
  }
    )
  return (
      <Layout>
        {routesList}      
      </Layout>
  );
}

export default App;
