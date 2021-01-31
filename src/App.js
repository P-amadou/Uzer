import React from 'react';
import ReactDOM from 'react-dom';
import { Chart } from "react-google-charts";
import logo from './img/Logo.png';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { inputX: '',
                   inputY:'' ,
                   selectChart:'',
                   show:true //false
                  };
  }

  myChangeHandler = (event) => {
    this.setState({inputX: event.target.value});
  }
  myChangeHandler2=(event2)=>{
    this.setState({inputY: event2.target.value})
  }
  myChangeHandler3=(event3)=>{
    this.setState({selectChart: event3.target.value})
  }
  
  btnState(){
    this.setState({
      show:!this.state.show
    })
  }

  render() {
    let tab=[]
    function visualiser(){
      /**
       * Recuperer valeurs du form
       * Modifie val chart et select
       * CSS + Responsive
       */
      let x = 1 //this.state.inputX 
      let y = 3 //this.state.inputY 
  
        let data = [
          ['Name', 'Value'],
          ['Input 1',x],
          ['Input 2',y]
  
        ];
  
        let options1 = {
          legend:"First pie Chart"
        };
  
        let options2 = {
          pieHole: 0.4,
          is3D: false,
          legend:"First donut Chart"
        };

        tab.push(data,options1,options2)
  
        return tab
    }
    function typeChart(){
      visualiser()
      console.log(tab);
      let select = "dChart" //this.state.selectChart 
      
      if (select==="dChart"){
        
        return(
          <Chart 
         chartType='PieChart'
         data={tab[0]}
         options={tab[2]}
         />
        )
        }else{
         return(
         <Chart 
          chartType="PieChart"
          data={tab[0]}
          options={tab[1]}
          />
       )
      }
    }
  
    return (
      <div>
        <img src={logo} alt="logo" />
        <h1>Bienvenue sur votre espace Client</h1><br/>
        <h2>Renseignez une valeur pour chaque champs </h2><br/>
      <form>
        
        <input type="number" id="inputX" name="inputX" pattern="^[1-9][0-9]*{1}" placeholder="Tapez '1'" onChange={this.myChangeHandler} min="0" />
        <span class="icon"></span>
        
        
        <input type="number" id="inputY" name="inputY" pattern="^[1-9][0-9]*{1}" placeholder="Tapez '3'" onChange={this.myChangeHandler2} min="0" />
        <span class="icon"></span>
        <br/>
        <select id="selectChart"  onChange={this.myChangeHandler3}>
        <option value="ChoisirOption" selected>Choisir une option</option>
        <option value="pChart" >Pie Chart</option>
        <option value="dChart">Donut Chart</option>
        </select><br/>
        <input type="submit" id="btnSubmit" value="Visualiser" onClick={()=>this.btnState()}/>
        
      {
        this.state.show?
        typeChart()
        :null
      }
      </form>
      
      </div>
    );
  }

}

export default App;
