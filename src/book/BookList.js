import {useParams} from "react-router-dom";
import React from "react";
import Container from "react-bootstrap/Container";
import Book from "./Book"

export default function BookList(props) {

    let {school, level} = useParams();
    const levelIds = school
        ? props.levels[school]
            .filter(item => level && item.name !== level ? null : item).map(item => item.id)
        : Object.values(props.levels).flatMap(s => s.map(l => l.id))
    ;
    console.log('levelIds : ', levelIds)
    ;

    const booksList = [
        {
            id: 1,
            title: 'title 1',
            price: 1259,
            subjects: [
                {id: 10, name: 'Subject 10'},
                {id: 120, name: 'Subject 120'}
            ],
            levels: [
                {id: 286, name: '1re'}
            ]
        },
        {
            id: 2,
            title: 'title 2',
            price: 1259,
            subjects: [
                {id: 10, name: 'Subject 10'},
                {id: 120, name: 'Subject 120'}
            ],
            levels: [
                {id: 282, name: '4ème'}
            ]
        },
        {
            id: 3,
            title: 'title 3',
            price: 1259,
            subjects: [
                {id: 10, name: 'Subject 10'},
                {id: 120, name: 'Subject 120'}
            ],
            levels: [
                {id: 282, name: '4ème'},
                {id: 281, name: '5ème'}
            ]
        },
        {
            id: 4,
            title: 'title 4',
            price: 1259,
            subjects: [
                {id: 10, name: 'Subject 10'},
                {id: 120, name: 'Subject 120'}
            ],
            levels: [
                {id: 287, name: 'Terminale'}
            ]
        },
        {
            id: 5,
            title: 'title 5',
            price: 1259,
            subjects: [
                {id: 10, name: 'Subject 10'},
                {id: 120, name: 'Subject 120'}
            ],
            levels: [
                {id: 281, name: '5ème'}
            ]
        },
        {
            id: 6,
            title: 'title 6',
            price: 1259,
            subjects: [
                {id: 10, name: 'Subject 10'},
                {id: 120, name: 'Subject 120'}
            ],
            levels: [
                {id: 286, name: '1re'}
            ]
        },
        {
            id: 7,
            title: 'title 7',
            price: 1259,
            subjects: [
                {id: 10, name: 'Subject 10'},
                {id: 120, name: 'Subject 120'}
            ],
            levels: [
                {id: 285, name: '2de'}
            ]
        },
        {
            id: 8,
            title: 'title 8',
            price: 1450,
            subjects: [{id: 120, name: 'Subject 120'}],
            levels: [{id: 286, name: '1re'}]
        },

    ];
    const books = booksList.filter(
        b => b.levels.find(
            l => levelIds.includes(l.id)
        )
    );
    return (
        <Container fluid>
            <h2>{school} <span style={{color: '#282c34', fontSize: '.7em'}}>
                    {level ? 'Classe de ' + level : 'Tous les niveaux'}
                </span>
            </h2>

            {books.length === 0 && <p className="alert alert-warning">La liste des livres est vide</p>
            ||
            (
                <div>
                    <p>{books.length} livre{books.length>1? 's':''} au total</p>
                    {books.map(book =>
                        (
                            <Book book={book}/>
                        )
                    )}
                </div>
            )
            }

        </Container>
    );
}
