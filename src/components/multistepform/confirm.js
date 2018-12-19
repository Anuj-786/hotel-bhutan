import React,{Component} from 'react';

class Confirm extends Component {
	
	constructor(props) {
	  super(props);
	}
	render() {
		const {
      values: { firstName, LastName, Email, Phone }
    } = this.props;
		return (

          <div style={{display:'inline-block',width:'100%',height:'100%'}}>
          	<h1>Thanks {`${firstName} ${LastName}`}for Group Booking<br/>
          	Our team will contact you on <br/>
          	Email: {Email} <br/>
          	phone: {Phone} <br/>
          	</h1>

           <p><a href="/">go to home page</a></p>
          </div>
			)
			
		
	}
}

export default Confirm;