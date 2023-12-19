import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LogIn } from './pages/LogIn';
import Homepage  from './pages/Homepage';
import './css/LogIn.css';


export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <LogIn/>
                   
                </Route>
                <Route exact path="/home" component={Homepage} >
                    <Homepage/></Route>
            </Switch>
        </Router>
    );
}