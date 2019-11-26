import React, {Component} from 'react';

class Navbar extends React.Component{
    state={ 
        nama:'Ariana',
        umur:12,
        mobil:['avanza', 'grabwheel', 'ambulance', 'tank']
     }
     componentDidMount(){
         this.setState({nama:'boba'})
     }

    render(){
        if(this.state.nama){
        return(
            <div>
                {this.state.nama}
            </div>
        );
    }else{
    return <div>loading...</div>
    }
    
}
}

export default Navbar;