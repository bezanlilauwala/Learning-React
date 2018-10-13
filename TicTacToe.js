function checkWin(instance){
    const s1Value = instance.s1.current.state.value;
    const s2Value = instance.s2.current.state.value;
    const s3Value = instance.s3.current.state.value;
    const s4Value = instance.s4.current.state.value;
    const s5Value = instance.s5.current.state.value;
    const s6Value = instance.s6.current.state.value;
    const s7Value = instance.s7.current.state.value;
    const s8Value = instance.s8.current.state.value;
    const s9Value = instance.s9.current.state.value;

    console.log(s1Value);
    console.log(s2Value);
    console.log(s3Value);
    console.log(s4Value);
    console.log(s5Value);
    console.log(s6Value);
    console.log(s7Value);
    console.log(s8Value);
    console.log(s9Value);
    
    if ((s1Value === "X" &&
            s2Value === "X" &&
            s3Value === "X") ||
        (s4Value === "X" &&
            s5Value === "X" &&
            s6Value === "X") ||
        (s7Value === "X" &&
            s8Value === "X" &&
            s9Value === "X") ||
        (s1Value === "X" &&
            s4Value === "X" &&
            s7Value === "X") ||
        (s2Value === "X" &&
            s5Value === "X" &&
            s8Value === "X") ||
        (s3Value === "X" &&
            s6Value === "X" &&
            s9Value === "X") ||
        (s1Value === "X" &&
            s5Value === "X" &&
            s9Value === "X") ||
        (s3Value === "X" &&
            s5Value === "X" &&
            s7Value === "X") ||

        (s1Value === "O" &&
            s2Value === "O" &&
            s3Value === "O") ||
        (s4Value === "O" &&
            s5Value === "O" &&
            s6Value === "O") ||
        (s7Value === "O" &&
            s8Value === "O" &&
            s9Value === "O") ||
        (s1Value === "O" &&
            s4Value === "O" &&
            s7Value === "O") ||
        (s2Value === "O" &&
            s5Value === "O" &&
            s8Value === "O") ||
        (s3Value === "O" &&
            s6Value === "O" &&
            s9Value === "O") ||
        (s1Value === "O" &&
            s5Value === "O" &&
            s9Value === "O") ||
        (s3Value === "O" &&
            s5Value === "O" &&
            s7Value === "O"))
    {
        console.log("true");
        return true;
    }
    else{
        console.log("false");
        return false;
    }
}

class Square extends React.Component {

    constructor(props){
        super(props);
        this.state = {checked: false, value: ""};
        this.OnClick = this.OnClick.bind(this);
        this.reset = this.reset.bind(this);
    }

    //Called when reset button is clicked
    reset(){
        this.setState({checked: false, value: ""});
    }

    //Called when individual square is clicked
    OnClick(event){
        console.log("clicked");
        if(this.state.checked === false) {
            this.setState({checked: true, value: this.props.turnX === true ? "X" : "O"});
            this.props.changeEvent(event);
        }
    }

    render() {
        return (
            <input type="button" value={this.state.value} onClick={this.OnClick} />
        );
    }
}

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {turnX: true, win: false};
        this.handleChange = this.handleChange.bind(this);
        this.reset = this.reset.bind(this);
        this.labelCheck = this.labelCheck.bind(this);
        this.s1 = React.createRef();
        this.s2 = React.createRef();
        this.s3 = React.createRef();
        this.s4 = React.createRef();
        this.s5 = React.createRef();
        this.s6 = React.createRef();
        this.s7 = React.createRef();
        this.s8 = React.createRef();
        this.s9 = React.createRef();
        this.label = React.createRef();
    }


    //Called after each square is clicked at its state is changed
    handleChange(event){
        this.setState({turnX: !this.state.turnX});
        if (checkWin(this) === true) {
            this.setState({win: true});
        }
    }

    //Called after each square is reset
    reset(){
        this.setState({turnX: true, win: false});
    }

    //Returns labels text
    labelCheck() {
        console.log("Label Check");
        if (this.state.win === false) {
            if (this.state.turnX === true) {
                return "X's Turn";
            }
            else {
                return "O's Turn";
            }
        }
        else {
            if (this.state.turnX === true) {
                return "Player X Wins"; //Switch X & O after fixing ref issue
            }
            else {
                return "Player O Wins";
            }
        }
    }

    render(){
        return (
            <div>
                <label>{this.labelCheck()}</label>
                <br />
                <Square ref={this.s1} turnX={this.state.turnX} changeEvent={this.handleChange} />
                <Square ref={this.s2} turnX={this.state.turnX} changeEvent={this.handleChange} />
                <Square ref={this.s3} turnX={this.state.turnX} changeEvent={this.handleChange} />
                <br />
                <Square ref={this.s4} turnX={this.state.turnX} changeEvent={this.handleChange} />
                <Square ref={this.s5} turnX={this.state.turnX} changeEvent={this.handleChange} />
                <Square ref={this.s6} turnX={this.state.turnX} changeEvent={this.handleChange} />
                <br />
                <Square ref={this.s7} turnX={this.state.turnX} changeEvent={this.handleChange} />
                <Square ref={this.s8} turnX={this.state.turnX} changeEvent={this.handleChange} />
                <Square ref={this.s9} turnX={this.state.turnX} changeEvent={this.handleChange} />
            </div>
        );

    }

}

class TicTacToe extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.board = React.createRef();
    }

    handleClick(){
        this.board.current.s1.current.reset();
        this.board.current.s2.current.reset();
        this.board.current.s3.current.reset();
        this.board.current.s4.current.reset();
        this.board.current.s5.current.reset();
        this.board.current.s6.current.reset();
        this.board.current.s7.current.reset();
        this.board.current.s8.current.reset();
        this.board.current.s9.current.reset();
        this.board.current.reset();
    }

    render(){
        return(
            <div>
                <Board  ref={this.board} />
                <br />
                <input type="button" value="Reset" title="Click to Reset Game" onClick={this.handleClick} />
            </div>

        );
    }


}


ReactDOM.render(
    <TicTacToe />,
    document.getElementById("entryPoint")
);