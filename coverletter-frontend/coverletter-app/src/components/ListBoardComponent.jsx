import React, { Component } from 'react';
import BoardService from '../service/BoardService';
let textStyles = {

    fontWeight:'bold',
    marginTop: '20px'

};

let styles = {
    marginTop: '40px',
    display: 'inline-block',
    fontWeight:'bold',
    textAlign:'left',
    paddingRight:'10px'

};
let styles1 = {
    marginTop: '40px',
    width: '250px',
    fontWeight:'bold',
    textAlign:'left',
    display: 'inline-block'
};

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
                <h2 style={textStyles} className="text-center">이동윤</h2>
                <h5 style={styles}>학력</h5>

                <span className="i">최종학력</span>
                <div className="row" >
                    <table className="table table-striped table-bordered">

                        <thead>
                        <tr>
                            <th>재학기간</th>
                            <th>구분</th>
                            <th>학교명(소재지)</th>
                            <th>전공</th>
                            <th>학점</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.boards.map( board =>
                                    <tr key = {board.number}>
                                        <td> {board.schoolPeriod} </td>
                                        <td> {board.schoolType} </td>
                                        <td> {board.schoolName} </td>
                                        <td> {board.schoolMajor} </td>
                                        <td> {board.schoolGrade} </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>

                <h5 style={styles}>경력</h5>

               <div className="row" >
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>회사명</th>
                            <th>재직기간</th>
                            <th>퇴사사유</th>
                            <th>직급</th>
                            <th>근무부서</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.boards.map( board =>
                                <tr key = {board.number}>
                                    <td> {board.companyName} </td>
                                    <td> {board.companyPeriod} </td>
                                    <td> {board.companyReason} </td>
                                    <td> {board.companyGrade} </td>
                                    <td> {board.companyPart} </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>

              <h5 style={styles1}>자격증/어학/수상내역</h5>

                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>취득일/수상일</th>
                            <th>구분</th>
                            <th>자격/어학/수상명</th>
                            <th>발행처/기관</th>
                            <th>합격/점수</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.boards.map( board =>
                                <tr key = {board.number}>
                                    <td> {board.certPeriod} </td>
                                    <td> {board.certType} </td>
                                    <td> {board.certName} </td>
                                    <td> {board.certProvide} </td>
                                    <td> {board.certGrade} </td>
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