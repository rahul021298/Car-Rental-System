import React, { Component } from 'react'
import {Dropdown, DropdownButton} from 'react-bootstrap';
import {Card} from './Card'
// import $ from 'jquery';
export class CityFilter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: ''
        }
    }
    
    handleSelect=(data)=> {
        // what am I suppose to write in there to get the val?
        var str="";
        if(data ==1){
            str = <div><Card /></div>;
        }else if(data == 2){
            str = <div><Card /><Card /></div>;
        }else if(data==3){
            str = <div><Card /> <Card /> <Card/></div>
        }
            this.setState({
                value: str
            })
            // alert('INSIDE ACTIONS '+data);
            // // console.log({Card});
            // $('#dcardContent').append(this.state.value);
       
        
    }
    componentDidMount(){
        // $('DropdownButton')
            
        
    } 
    render() {
        
        return (
            <div>
                <div className="Container col-md-8">
                <DropdownButton id="dropdown-basic-button" title="Select City" onSelect={()=>this.handleSelect}>
                <Dropdown.Item onClick={()=>this.handleSelect(1)}>Mumbai</Dropdown.Item>
                <Dropdown.Item onClick={()=>this.handleSelect(2)}>Pune</Dropdown.Item>
                <Dropdown.Item onClick={()=>this.handleSelect(3)}>Bangalore</Dropdown.Item>
                </DropdownButton>
            </div>

                {this.state.value}
            </div>
        )
    }
}

export default CityFilter

