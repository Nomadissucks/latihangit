import React, {Component} from 'react';

class Container extends Component{
    state ={  }

    renderstnk=()=>{
        var jsx=this.props.stnk.map((val, index)=>{
            return(
                <div key={index} className="col-md-4 px-5 py-0" style={{border:'1px solid black'}}>
                    <div>{val.nama}</div>
                    <div>{val.Kendaraan}</div>
                    <div>{val.warna}</div>
                    </div>
            )

            })
            console.log(jsx)
            return jsx
        
    }

    render(){
        return(
            <div className="row mx-5">
                {this.renderstnk()}
            </div>
        );
    }
}
export default Container