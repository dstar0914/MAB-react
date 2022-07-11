import React, { Component } from 'react';
import HTMLFlipBook from 'react-pageflip';

import './Book.css';

class Book extends Component {
    state = {
        books: []
    };

    async componentDidMount() {
        const response = await fetch('/books');
        const body = await response.json();
        this.setState({books: body});
    }

    render() {
        const {books} = this.state;

        return (
            <HTMLFlipBook width={600} height={800}>
                {books.map(book =>
                    <div className="demoPage" key={book.id}>{book.title}</div>
                )}
            </HTMLFlipBook>
        );
    }
}


export default Book;