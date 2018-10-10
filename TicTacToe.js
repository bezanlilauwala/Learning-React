class Square extends React.Component {

    constructor(props){
        super(props);
        this.state = {checked: false, value: ""};
        this.OnClick = this.OnClick.bind(this);
    }

    OnClick(event){
        if(this.state.checked === false) {
            this.setState({checked: true, value: this.props.turnX ? "X" : "O"});
            this.props.changeEvent(event);
        }
    }

    render() {
        return (
            <input type="button" value={this.state.value} onClick={this.OnClick}/>
        );
    }
}

function checkWin(){
    
    if ((document.getElementById("s1").state.value === "X" && 
            document.getElementById("s2").state.value === "X" &&
            document.getElementById("s3").state.value === "X") ||
        (document.getElementById("s4").state.value === "X" &&
            document.getElementById("s5").state.value === "X" &&
            document.getElementById("s6").state.value === "X") ||
        (document.getElementById("s7").state.value === "X" && 
            document.getElementById("s8").state.value === "X" &&
            document.getElementById("s9").state.value === "X") ||
        (document.getElementById("s1").state.value === "X" &&
            document.getElementById("s4").state.value === "X" &&
            document.getElementById("s7").state.value === "X") ||
        (document.getElementById("s2").state.value === "X" &&
            document.getElementById("s5").state.value === "X" &&
            document.getElementById("s8").state.value === "X") ||
        (document.getElementById("s3").state.value === "X" &&
            document.getElementById("s6").state.value === "X" &&
            document.getElementById("s9").state.value === "X") ||
        (document.getElementById("s1").state.value === "X" &&
            document.getElementById("s5").state.value === "X" &&
            document.getElementById("s9").state.value === "X") ||
        (document.getElementById("s3").state.value === "X" &&
            document.getElementById("s5").state.value === "X" &&
            document.getElementById("s7").state.value === "X") ||
        
        (document.getElementById("s1").state.value === "O" &&
            document.getElementById("s2").state.value === "O" &&
            document.getElementById("s3").state.value === "O") ||
        (document.getElementById("s4").state.value === "O" &&
            document.getElementById("s5").state.value === "O" &&
            document.getElementById("s6").state.value === "O") ||
        (document.getElementById("s7").state.value === "O" &&
            document.getElementById("s8").state.value === "O" &&
            document.getElementById("s9").state.value === "O") ||
        (document.getElementById("s1").state.value === "O" &&
            document.getElementById("s4").state.value === "O" &&
            document.getElementById("s7").state.value === "O") ||
        (document.getElementById("s2").state.value === "O" &&
            document.getElementById("s5").state.value === "O" &&
            document.getElementById("s8").state.value === "O") ||
        (document.getElementById("s3").state.value === "O" &&
            document.getElementById("s6").state.value === "O" &&
            document.getElementById("s9").state.value === "O") ||
        (document.getElementById("s1").state.value === "O" &&
            document.getElementById("s5").state.value === "O" &&
            document.getElementById("s9").state.value === "O") ||
        (document.getElementById("s3").state.value === "O" &&
            document.getElementById("s5").state.value === "O" &&
            document.getElementById("s7").state.value === "O"))
    {
        return true;
    }
    else{
        return false;
    }
}

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {turnX: true};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log("Calling Event");
        this.setState({turnX: !this.state.turnX});
    }

    render(){
        return (
            <div id="board">
                <Square id="s1" turnX={this.state.turnX} changeEvent={this.handleChange} />
                <Square id="s2" turnX={this.state.turnX} changeEvent={this.handleChange} />
                <Square id="s3" turnX={this.state.turnX} changeEvent={this.handleChange} />
                <br />
                <Square id="s4" turnX={this.state.turnX} changeEvent={this.handleChange} />
                <Square id="s5" turnX={this.state.turnX} changeEvent={this.handleChange} />
                <Square id="s6" turnX={this.state.turnX} changeEvent={this.handleChange} />
                <br />
                <Square id="s7" turnX={this.state.turnX} changeEvent={this.handleChange} />
                <Square id="s8" turnX={this.state.turnX} changeEvent={this.handleChange} />
                <Square id="s9" turnX={this.state.turnX} changeEvent={this.handleChange} />
            </div>

        );
    }

}

class TicTacToe extends React.Component {
    constructor(props){
        super(props);
        this.state = {change: false};
        this.handleClick = this.handleClick.bind(this);
        this.board = React.createRef();
    }

    handleClick(){
        this.setState({change: !this.state.change});
        ReactDOM.unmountComponentAtNode(document.getElementById("board"));
        console.log("Calling reset");
    }

    render(){
        return(
            <div>
                <Board  />
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