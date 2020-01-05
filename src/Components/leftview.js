import React, { Component }  from "react";
import './component.css'
import Recit from './recit';
import {colddrink ,hotDrink,pasetrie, breakfast,salad,sandwich} from './items'

class LeftView extends Component {
   state={midle:[],
    price:[],
    itemname:'',
    totalprice:0,  
   }
//=========================================================================================================
   changeMidle7=()=>{
     this.setState({
     midle:<div>
     <div className="totallabel"><label>Your total is: {this.state.totalprice.toFixed(2)}</label></div>
      <div className="firstRow">
          <input
            className="input11"
            id="input11"
            type="number"
            placeholder="0" 
          /> <button onClick={()=>{console.log("now"+document.getElementById("input11").value); 
          this.setState({
            price:[],
            itemname:'',
            midle:<div><Recit total={this.state.totalprice}
            pay={document.getElementById("input11").value}
            ></Recit> </div>,
            totalprice:0, 
          })}
          }>Pay</button>
          </div>
     </div>,})
   }
//======================================================================================================================
 trueMidleview=(items)=>{
  this.setState({midle:items.map(item =><label className='divlabel'><label className="midleLabel"  key={item.name} 
  onClick={()=> this.setState({totalprice:this.state.totalprice+item.price,
      itemname: this.state.itemname.concat( item.name+'_____$'+item.price+"  " ) ,
  price:[item.price] })    }> {item.name} </label></label> )}
  )
 }

changeMidle6=()=>{const items=sandwich;
  this.trueMidleview(items);
}
   changeMidle5=()=>{const items=salad;
    this.trueMidleview(items);
}
   changeMidle4=()=>{const items= breakfast;
    this.trueMidleview(items);
}
   changeMidle3=()=>{const items=pasetrie;
    this.trueMidleview(items);
}
   changeMidle2=()=>{const items=hotDrink;
    this.trueMidleview(items);
}
    changeMidle1=()=>{const items=colddrink;
      this.trueMidleview(items);
    }
//===========================================================================================================
render(){
    return (
      <div className="App">

     <div className="holder">
     <header className="header">
          <h1 className="headerh1">Online Cashier by Youri</h1>
        </header>
        <div className="leftView1">  
        <div>
      <div className="fistLine" onClick={this.changeMidle1}>
        <label >colddrink</label>
      </div>
      <div className="secondLine" onClick={this.changeMidle2} >
        <label>Hot Drink</label>
      </div>
      <div className="thirdLine" onClick={this.changeMidle3}>
        <label>pastries</label>
      </div>
      <div className="fourthLine" onClick={this.changeMidle4}>
        <label>Breakfast</label>
      </div>
      <div className="fiftLine" onClick={this.changeMidle5}>
        <label>salad</label>
      </div>
      <div className="sixLine" onClick={this.changeMidle6}>
        <label>sandwich</label>
      </div>
      <div className="seventhLine" onClick={this.changeMidle7}>
        <label>pay</label>
      </div>
    </div>
        </div>
        <div className="midletView2">{this.state.midle}</div>
    <div className="rightView3">{this.state.itemname+"  "}  </div>
        <div className="rightView4">{" total: $"+this.state.totalprice.toFixed(2)}   </div>
      </div>
      </div>
    );}
  }
  
  export default LeftView;
  