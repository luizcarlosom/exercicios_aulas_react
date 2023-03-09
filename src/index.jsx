import React from "react";
import ReactDOM from "react-dom/client";
import Timer from "./components/Exemplo1";

class OlaMundo extends React.Component{
    render(){
        return <h1>Olá {this.props.name}!</h1>
    }
}

class Pagina01 extends React.Component{
    render(){
        return (
            <div>
                <OlaMundo name={this.props.name[0]}></OlaMundo>
                <OlaMundo name={this.props.name[1]}></OlaMundo>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Timer start={0} ms={500}></Timer>);