import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Container from './components/container'
class App extends Component{
  state = { 
    stnk:null,
    loading:true
   }

   componentDidMount(){
     this.setState({stnk:[{nama:'Bobo', Kendaraan:'Ambulan', warna:'HotPink'},
                          {nama:'Dzaky', Kendaraan:'Delman', warna:'Oren'},
                          {nama:'Anya', Kendaraan:'Ojol', warna:'ungu'}
                        ],loading:false
                      })
   }
   


  render() {
    const {loading, stnk}=this.state
    if(loading){
      return<div>loading...</div>
    }

    return(
      <div>
        <Header namauser={'Fakhran'}/>
        <Container stnk={stnk}>

        </Container>

      </div>
    );
  }
}

export default App;
