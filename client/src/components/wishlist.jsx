import React, { Component } from 'react';

class WishList extends Component {
    state = { 
        wishbooks:[],
        books:[
            {
                 id: "5001111",
                 category:"action",
                 src:"book1"
        }
        ]
     }
    render() { 
        return ( 
        <div> <h1>Welcome to WishList</h1> </div>
          );
    }
}
 
export default WishList;