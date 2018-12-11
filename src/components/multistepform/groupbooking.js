import React,{Component} from 'react';
import UserDetails from './userdetail';
import Order from './order';
console.log("check")
export class GroupBooking extends Component {
	state = {
		step: 1,
    firstName: '',
    LastName: '',
    Email: '',
    Phone: '',
    perfLocation: '',
    perfDate: '',
    groupmember: '',
    msg: ''   
	}
	nextStep = () => {
		const {step} = this.state;
		this.setState({
			step: step + 1
		})
	}
	prevStep = () => {
		const {step} = this.state;
		this.setState({
			step: step - 1
		})
	}
	handleChange = input => e => {
       this.setState({
       	 [input]: e.target.value
       })


	}
	render() {
      const {step} = this.state;
      const {firstName,LastName,Email,Phone,prefLocation,perfDate,groupmember,msg} = this.state;
      const values = {firstName,LastName,Email,Phone,
      	prefLocation,perfDate,groupmember,msg} 
      
		switch (step) {
			case 1:
				return (

                <UserDetails
                  nextStep = {this.nextStep}
                  handleChange = {this.handleChange}
                  values = {values}
                
                />
				 )
			case 2: 
			      return(
                  <Order

                 
                  />

			     )
			case 3: 
			     return (

                <h1> confirmed</h1>
			     	) 
		    case 4:
		      return (
                <h1>success</h1>
		      )
		}
	}
}
export default GroupBooking;