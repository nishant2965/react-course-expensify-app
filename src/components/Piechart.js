import React,{useEffect,useState} from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import randomColor from "randomcolor";


const Piec= (props)=>{
    let chartlist=[]
    
    props.expenses.map((expense)=>{
        let color=randomColor()
        let info = {title:expense.description,value:expense.amount,color:color

        }

        chartlist.push(info)

    })
            


        

   

    return(
        <div class="pie">

           
        
<PieChart
  data={chartlist} 

  viewBoxSize='[30,30]'
  

/>
</div>
    )}
    
const mapStateToProps = (state) => {
    return {
      expenses: selectExpenses(state.expenses, state.filters)
    };

  };
export default connect(mapStateToProps)(Piec);