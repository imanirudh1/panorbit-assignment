import './App.css'
import HomeScreen from './screen/HomeScreen'
import { Route, Switch } from 'react-router-dom'
import ProfileScreen from './screen/ProfileScreen'
import DashBoard from './screen/DashBoard'
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/dashboard' component={DashBoard} />
        <Route path='/' component={HomeScreen} />
      </Switch>
    </div>
  )
}

export default App
