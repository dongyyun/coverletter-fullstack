import React, { Component } from 'react';
let footer = {
    position:'absolute',
    bottom:'0',
    width:'100%',
    height:'70px',
    padding:'20px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '20px',
    backgroundColor: '#ccc'
}
class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer style={footer}>
                   부산 클라우드 네이티브 애플리케이션 개발자 양성과정

                </footer>
            </div>
        );
    }
}

export default FooterComponent;