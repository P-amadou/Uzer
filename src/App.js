import React from 'react';
//import ReactDOM from 'react-dom';
import { Chart } from "react-google-charts";
import logo from './img/Logo.png';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { inputX: '',
                   inputY:'' ,
                   selectChart:'',
                   show:false
                  };
  }

  myChangeHandler = (event) => {
    this.setState({inputX: event.target.value});
    
  }
  myChangeHandler2=(event)=>{
    this.setState({inputY: event.target.value})
  }
  myChangeHandler3=(event)=>{
    this.setState({selectChart: event.target.value})

  }
  
  btnState(){
    //alert('Show state: '+this.state.show)
    this.setState({
      show:true
    })
    //console.log('Show state: '+this.state.show)
    // event.preDefault();
  }

  render() {
    function visualiser(){
      /**
       * Recuperer valeurs du form
       * Modifie val chart et select
       * CSS + Responsive
       */

       // if(document.getElementById('btnSubmit').clicked === true){
        //if(document.getElementById('inputY')>0){

        let x = document.getElementById('inputX').value //this.state.inputX 
        let y = document.getElementById('inputY').value
        console.log(`X = ${x} et Y = ${y}`);
          let data = [
            ['Name', 'Value'],
            ['Input 1',parseInt(x)],
            ['Input 2',parseInt(y)]
    
          ];
    
          return data

        //}
        //}
    }

    function typeChart(){
      let tab = visualiser()
      let select = document.getElementById('selectChart').value //this.state.selectChart 
      console.log(`Tab = ${tab} et Select = ${select}`);

      let options1 = {
        legend:"First pie Chart"
      };

      let options2 = {
        pieHole: 0.4,
        is3D: false,
        legend:"First donut Chart"
      };

      if (select === "dChart"){
        
        return(
          <Chart 
         chartType='PieChart'
         data={tab}
         options={options2}
         />
        )
        }else{
         return(
         <Chart 
          chartType="PieChart"
          data={tab}
          options={options1}
          />
       )
      }
    }
  
    return (
      <div>
        <img src={logo} alt="logo" />
        <h1>Bienvenue sur votre espace Client</h1><br/>
        <h2>Renseignez une valeur pour chaque champs </h2><br/>
      <form >
        
        <input type="text" id="inputX" name="inputX" pattern="^[1-9][0-9]*" placeholder="Tapez '1'" value={this.state.inputX} onChange={this.myChangeHandler.bind(this)} min="0" required />
        <span className="icon"></span>
                
        <input type="text" id="inputY" name="inputY" pattern="^[1-9][0-9]*" placeholder="Tapez '3'" value={this.state.inputY} onChange={this.myChangeHandler2.bind(this)} min="0" required />
        <span className="icon"></span>
        <br/>
        <select id="selectChart"  value={this.state.selectChart} onChange={this.myChangeHandler3.bind(this)}>
        <option value="DEFAULT" disabled >Choisir une option</option>
        <option value="pChart" >Pie Chart</option>
        <option value="dChart">Donut Chart</option>
        </select><br/>
        <input type="submit" id="btnSubmit" value="Visualiser" onClick={()=>this.btnState()}/>
        
      
      {
      this.state.show?
     typeChart()
     : null
    }
      </form>
      
      </div>
    );
  }

}

export default App;
