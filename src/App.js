import './App.css'
import HomeScreen from './screen/HomeScreen'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import DashBoard from './screen/DashBoard'
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/dashboard/:id' component={DashBoard} />
          <Route path='/' component={HomeScreen} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
