import React, { Component } from 'react'
import PropTypes from 'prop-types';


class Search extends Component {
    state = {
        text: ''
    };

static propTypes ={
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
};

 changeHandler = e => this.setState({ [e.target.name]: e.target.value });

 submitHandler(e){
     e.preventDefault();
     if(this.state.text === '')
        this.props.setAlert('Please enter something', 'light');
    else{
        this.props.searchUsers(this.state.text);
        this.setState({text: ''});
    }
 }
 
    render() {
        const {  showClear, clearUsers} = this.props;
        return (
            <div>
                <form onSubmit={this.submitHandler.bind(this)} className='form'>
                    <input type='text' name='text' value={this.state.text} onChange={this.changeHandler} placeholder='Search Users...' />
                    <input type='submit' value='Search' className='btn btn-dark btn-block'/>  
                </form> 
                {showClear && 
                    <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button> 
                }
            </div>
        )
    }
}

export default Search
