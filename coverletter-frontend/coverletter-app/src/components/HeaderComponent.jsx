import React, { Component } from 'react';

let styles = {
    marginT: '10px',
    fontWeight:'bold',
    textAlign: 'center',
    fontSize: '30px',
    color: 'white',

};

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div style={styles}> CoverLetter</div>
                    </nav>
                </header>


            </div>
        );
    }
}

export default HeaderComponent;