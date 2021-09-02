import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Repositories from './pages/repositories';
import home from './pages/home';

export default  function Routes (){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={home}/> 
                <Route path='/repositories' component={Repositories} />
            </Switch>
        </BrowserRouter>
    )
}

 //exact para nao confundir com a barra 