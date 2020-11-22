import React from 'react';
import Movie from './pages/Movie'
import MovieDetails from './pages/MovieDetails'

import {BrowserRouter, Route,Switch} from 'react-router-dom'


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* url olarak ne yazdiysak onu acmak icin pathler icerisine urldeki karsiligi yazilir. ama movie icerisinde 
                ki kisim her harikarda krsilandigi icin exact vermemiz gerkir. yani sadece tam o adresse gir demek.
                ama best practice olarak ana sayfa enalta yazilarak ta bu sorun giderilir. */}
                <Route path='/detail/:id' component={MovieDetails} exact/> 
                <Route path='/' component={Movie}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App