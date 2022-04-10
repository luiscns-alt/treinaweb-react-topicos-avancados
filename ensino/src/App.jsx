import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Outlet,
} from 'react-router-dom';

import Index from './views/index';
import About from './views/about';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link tto='/about/abc'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/about/def'>About</Link>
                                </li>
                            </ul>
                        </nav>

                        <Routes>
                            <Route path='/' element={<Index />} />
                            <Route
                                path='/about/:minhaVariavel(abc|def)'
                                element={<About />}
                            />
                        </Routes>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
