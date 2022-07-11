import React, { Component } from 'react';
import HTMLFlipBook from 'react-pageflip';
import {Link} from 'react-router-dom';

import './Book.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Book extends Component {
    state = {
        books: []
    };

    async componentDidMount() {
        const response = await fetch('/books');
        const body = await response.json();
        this.setState({books: body});
    }

    // render() {
    //     const {books} = this.state;

    //     return (
    //         <div>
    //              <div className="section-wrap">
    //                  <Link to = "/">
    //                      <button type="button" className="btn">
    //                          글쓰기
    //                      </button>
    //                  </Link>
    //              </div>

    //             <table border="1">
    //                 <tbody>
    //                 <tr align="center">
    //                     <td width="100">No.</td>
    //                     <td width="500">Title</td>
    //                     <td width="100">Date</td>
    //                 </tr>
    //                 {
    //                     books.map(row =>
    //                         (<Item key={row.id} row={row} />)
    //                     )
    //                 }
    //                 </tbody>
    //             </table>
    //         </div>

    //     );
    // }

    render() {
        const {books} = this.state;

        return (
            <div className="wrap">
                <div className="section-wrap">
                    <Link to = "/">
                        <button type="button" className="btn">
                            글쓰기
                        </button>
                    </Link>
                </div>

                <div className="section-wrap">
                    <HTMLFlipBook width={600} height={800}>
                        {books.map(book =>
                            <div className="demoPage" key={book.id}>{book.title}</div>
                        )}
                    </HTMLFlipBook>
                </div>
            </div>
        );
    }
}


// class Item extends Component {       
//     render() {
//         return(
//             <tr>
//                 <td>{this.props.row.id}</td>
//                 <td>{this.props.row.title}</td>
//                 <td>{this.props.row.createdAt}</td>
//             </tr>
//         );
//     }
// }

export default Book;