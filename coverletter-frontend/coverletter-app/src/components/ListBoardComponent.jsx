import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class ListBoardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            boards: []
        }

    }


    componentDidMount() {
        BoardService.getBoards().then((res) => {
            this.setState({boards: res.data});
        });
    }


    render() {
        return (
            <div>
                <h2 className="text-center">이동윤</h2>

                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>글 번호</th>
                            <th>타이틀</th>
                            <th>작성자</th>
                            <th>좋아요수</th>
                            <th>조회수</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.boards.map( board =>
                                    <tr key = {board.number}>
                                        <td> {board.number} </td>
                                        <td> {board.title} </td>
                                        <td> {board.memberNo} </td>
                                        <td> {board.likes} </td>
                                        <td> {board.counts} </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


export default ListBoardComponent;