import React,{Component} from 'react';
import UserDetails from './userdetail';
import Order from './order';
import Success from './success';
import Confirm from './confirm';
console.log("check")
export class GroupBooking extends Component {
	state = {
	step: 1,
    firstName: '',
    LastName: '',
    Email: '',
    Phone: '',
    perfLocation: [ 'Thimpu',
  'Gasa',
  'location1',
  'location2',
  'location3',
  'location4',
  'location5',
  'location6',
  'location7',
  'location8',],
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
	handleChange1 = input => event => {
		this.setState({ perfLocation: event.target.value });
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
                   prevStep = {this.prevStep}
                   handleChange = {this.handleChange}
                   values = {values}
                   nextStep = {this.nextStep}
                   handleChange1 = {this.handleChange1}
                 
                  />

			     )
			case 3: 
			     return (
                     <Confirm 
                      nextStep = {this.nextStep}
                      values = {values}
                      prevStep = {this.prevStep}

                     />
			     	) 
		    case 4:
		      return (
                <Success />
		      )
		}
	}
}
export default GroupBooking;