import React from "react";
import ReactDOM from "react-dom/client";

class Timer extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {seconds:this.props.start};
    }

    contar(){
        this.setState(state => ({seconds: state.seconds + 1}));
    }

    startStop(){
        if(this.interval){
            clearInterval(this.interval);
            this.interval = null;
        }else{
            this.interval = setInterval (() => this.contar(), this.props.ms);
        }   
    }

    zero(){
        this.setState(state => ({
            seconds: 0
        }));
    }
    /*componentDidMount(){
        this.interval = setInterval (() => this.contar(), this.props.ms);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }*/

    render(){
        return (
            <div>
                <div className="bg-gray-500 border-black border-4 h-16 w-80 m-4 rounded-md flex flex-col justify-center items-center">
                    <h1 className="text-3xl text-white cronometro">
                        {this.state.seconds}
                    </h1>
                </div>
                <div className="flex w-96 justify-center">
                    <button onClick={() => this.startStop()} className="bg-blueDark border-black border-2 p-1 m-4 w-28">Iiniciar/Parar</button>
                    <button onClick={() => this.zero()} className="bg-red-500 border-black border-2 p-1 m-4 w-28">Zerar</button>
                </div>
            </div>
        )
    }
}

export default Timer