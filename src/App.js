import React, { Component } from 'react';

class Square extends Component {
    constructor(props){
        super(props);
        this.state = {checked: false};
        this.handleClick = this.handleClick.bind(this);
        this.reset = this.reset.bind(this);
    }

    //Called when an individual square is clicked
    handleClick() {
        if (this.state.checked === false) {
            this.setState({checked: true});
            this.props.event(this.props.pos);
        }
    }

    reset(){
        this.setState({checked: false});
    }

    render(){
        return(
            <React.Fragment>
                <input type="button" value={this.props.value} onClick={this.handleClick}/>
            </React.Fragment>

        );
    }
}

class Board extends Component {
    constructor(props) {
        super(props);
        this.valueList = [["","",""], ["","",""], ["","",""]];
        this.state = {turn: "X", win: false, values: this.valueList};
        this.labelCheck = this.labelCheck.bind(this);
        this.handleSquareClick = this.handleSquareClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.checkWin = this.checkWin.bind(this);
        this.s1 = React.createRef();
        this.s2 = React.createRef();
        this.s3 = React.createRef();
        this.s4 = React.createRef();
        this.s5 = React.createRef();
        this.s6 = React.createRef();
        this.s7 = React.createRef();
        this.s8 = React.createRef();
        this.s9 = React.createRef();

    }

    checkWin(){
        console.log("Checking");
        let values = this.state.values;
        let char = ["X", "O"];

        for(let j = 0; j < 2; j++){
            for(let i = 0; i < 3; i++){
                if (values[i][0] === char[j] && values[i][1] === char[j] && values[i][2] === char[j]){
                    return true;
                }
                if (values[0][i] === char[j] && values[1][i] === char[j] && values[2][i] === char[j]){
                    return true;
                }
            }
            if ((values[0][0] === char[j] && values[1][1] === char[j] && values[2][2] === char[j]) ||
                (values[0][2] === char[j] && values[1][1] === char[j] && values[2][0] === char[j])){
                return true;
            }
        }
        return false;
    }

    handleSquareClick(pos){
        console.log(pos);
        let valueList = this.state.values;
        valueList[parseInt(pos.charAt(0))][parseInt(pos.charAt(1))] = this.state.turn;
        this.setState({values: valueList});
        if (this.checkWin() === true) {
            this.setState({win: true});
            console.log("win: true");
        }
        else {
            this.setState({turn: this.state.turn === "X" ? "O" : "X"});
            console.log("win: false");
        }
    }

    handleReset(){
        let valueList = [["","",""], ["","",""], ["","",""]];
        this.setState({turn: "X", win: false, values: valueList});
        this.s1.current.reset();
        this.s2.current.reset();
        this.s3.current.reset();
        this.s4.current.reset();
        this.s5.current.reset();
        this.s6.current.reset();
        this.s7.current.reset();
        this.s8.current.reset();
        this.s9.current.reset();
    }

    //Returns labels text
    labelCheck() {
        console.log("Label Check");
        if (this.state.win === false) {
            if (this.state.turn === "X") {
                return "X's Turn";
            }
            else {
                return "O's Turn";
            }
        }
        else {
            if (this.state.turn === "X") {
                return "Player X Wins";
            }
            else {
                return "Player O Wins";
            }
        }
    }

    render(){
        return(
            <div>
                <label>{this.labelCheck()}</label>
                <br />
                <Square ref={this.s1} pos="00" value={this.state.values[0][0]} event={this.handleSquareClick} />
                <Square ref={this.s2} pos="01" value={this.state.values[0][1]} event={this.handleSquareClick} />
                <Square ref={this.s3} pos="02" value={this.state.values[0][2]} event={this.handleSquareClick} />
                <br />
                <Square ref={this.s4} pos="10" value={this.state.values[1][0]} event={this.handleSquareClick} />
                <Square ref={this.s5} pos="11" value={this.state.values[1][1]} event={this.handleSquareClick} />
                <Square ref={this.s6} pos="12" value={this.state.values[1][2]} event={this.handleSquareClick} />
                <br />
                <Square ref={this.s7} pos="20" value={this.state.values[2][0]} event={this.handleSquareClick} />
                <Square ref={this.s8} pos="21" value={this.state.values[2][1]} event={this.handleSquareClick} />
                <Square ref={this.s9} pos="22" value={this.state.values[2][2]} event={this.handleSquareClick} />
            </div>
        );
    }
}


class App extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.board = React.createRef();
    }

    handleClick(){
        this.board.current.handleReset();
    }

    render() {
        return (
            <div >
                <Board ref={this.board}/>
                <input type="button" title="Click to reset" value="Reset" onClick={this.handleClick}/>
            </div>
        );
    }
}




export default App;
