import React from 'react';
import phpRequest from './api/phpRequest';

class App extends React.Component {
   

    state = { firstName: '', lastName: ''}

    componentDidMount(){
        this.phpCall();
    }
   
    phpCall = async() => {
        const response = await phpRequest.post('/react-php/api/post.php');
        const { firstName , lastName}  = response.data;

        this.setState({
            firstName,
            lastName
        })
    }

    render(){
        return (
            <div>
                first name is { this.state.firstName}
                last name is { this.state.lastName}
            </div>
        )
    }
}

export default App;