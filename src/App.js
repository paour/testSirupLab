import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";

import './App.css';

function App() {

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
        <div>
            <header className="App App-header">
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
                <Router>
                    <Switch>
                        <Route path={`/books/:school/:level`}>
                            <Level/>
                        </Route>
                        <Route path="/books/:school">
                            <Level/>
                        </Route>
                        <Route path="/books/">
                            <div>Accueil</div>
                        </Route>
                        <Route path="/">
                            <div>Accueil</div>
                        </Route>
                    </Switch>
                </Router>
            </section>
        </div>
    );
}

function Level() {
    let { school,level } = useParams();
    return <h2>{school} {level?'Classe de '+level:'Tous les niveaux'}</h2>;
}

export default App;
