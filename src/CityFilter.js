import React, { Component } from 'react'
import {Dropdown, DropdownButton} from 'react-bootstrap';
import {Card} from './Card'
export class CityFilter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: ''
        }
    }
    
    handleSelect=(evt,evtKey)=> {
        // what am I suppose to write in there to get the val?
        if(evt == 1){
            this.setState({
                value: {Card}
            })
            console.log(this.state)
        }
        
    }    
    render() {
        return (
            <div className="Container col-md-8">
                <DropdownButton id="dropdown-basic-button" title="Select City" onSelect={this.state.value=this.handleSelect}>
                <Dropdown.Item eventKey="1" val="1" href="./booked1">Mumbai</Dropdown.Item>
                <Dropdown.Item eventKey="2" href="./booked2">Pune</Dropdown.Item>
                <Dropdown.Item eventKey="3" href="./booked3">Bangalore</Dropdown.Item>
                </DropdownButton>

                <div>
                    {this.state.value}
                </div>
            </div>
        )
    }
}

export default CityFilter
