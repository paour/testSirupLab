import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import BookList from "./book/BookList"
import {
    BrowserRouter as Router,
    Link as Link,
    Switch,
    Route,
} from "react-router-dom";

import './App.css';

export default  function App() {
    const levels = {
        "lycée": [
            {
                "id": 287,
                "name": "Terminale"
            },
            {
                "id": 286,
                "name": "1re"
            },
            {
                "id": 285,
                "name": "2de"
            }
        ],
        "collège": [
            {
                "id": 284,
                "name": "3ème"
            },
            {
                "id": 282,
                "name": "4ème"
            },
            {
                "id": 281,
                "name": "5ème"
            },
            {
                "id": 283,
                "name": "6ème"
            }
        ]
    }

    return (
        <Router>
            <header className="App App-header">
                <Link to="/books" className="btn btn-basic">Accueil</Link>
                {Object.keys(levels).map(key=>{
                    console.log('App levels.map :', key)
                    return (
                        <Dropdown key={`dropdown-${key}`}>
                            <Dropdown.Toggle id={`dropdown-${key}`} variant="basic">
                                {key}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href={`/books/${key}/`}>Tous les niveaux</Dropdown.Item>
                                {levels[key].map(
                                    level=>(
                                        <Dropdown.Item key={level.id} href={`/books/${key}/${level.name}`}>
                                            {level.name}
                                        </Dropdown.Item>
                                    )
                                )}
                            </Dropdown.Menu>
                        </Dropdown>)
                })}
            </header>
            <section id="content">
                    <Switch>
                        <Route path={`/books/:school/:level`}>
                            <BookList levels={levels}/>
                        </Route>
                        <Route path="/books/:school">
                            <BookList levels={levels}/>
                        </Route>
                        <Route path="/books">
                            <BookList levels={levels}/>
                        </Route>
                        <Route path="/">
                            <div>Accueil</div>
                        </Route>
                    </Switch>
            </section>
        </Router>
    );
}


