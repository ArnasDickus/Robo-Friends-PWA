import React, { Component } from "react";
import { connect } from 'react-redux'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from "../components/Scroll";
import Header from "../components/Header";

import {setSearchField, requestRobots} from "../action";

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    // prop name can be named anything
   return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
   } 
}

class App extends Component {
    
    // Fetching info with React and updating. With robots.
    componentDidMount(){
      this.props.onRequestRobots();
       
    }

    render() {
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot => {
            // if robot name include searchield text. Return a robot.
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return isPending ?
            <h1>Loading</h1> :
        (
        <div className = "tc">
        <Header />
        <SearchBox searchChange = {onSearchChange} />
        <Scroll>
        <CardList robots = {filteredRobots} />
        </Scroll>
    </div>
    );
        
    } 
}
// connect is higher order function. Higher order function is a function that
//  returns function
export default connect(mapStateToProps, mapDispatchToProps)(App)