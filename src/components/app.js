import React, { Component } from 'react';
import Header from './header';
import Action from './action';
import Options from './options';
import AddOptions from './add-options';
import OptionModal from './option-modal';
import validator from 'validator';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.state = {
			options: [],
			selectedOption: undefined
		};
	}

	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);

			if(options) {
				this.setState (() => ({ options }));
			}
		} catch (err) {
			console.log('invalid data', err);
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}

	componentWillUnmount() {

	}

	handleDeleteOptions() {
		this.setState(() => ({ options: [] }));
	}

	handleDeleteOption(optionToDelete) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToDelete !== option) 
			}));
	}

	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
  		const option = this.state.options[randomNum];
  		this.setState(() => ({ selectedOption: option }));
	}

	handleAddOption(option) {
		if(!option) {
			return 'Enter valid request to add.';
		} else if (this.state.options.indexOf(option) > -1) { 
			return 'This option already exists.';
		}
		 
		this.setState((prevState) => ({
				options: prevState.options.concat(option)
		}));
	}

	closeModal() {
		this.setState(() => ({ selectedOption: undefined }));
	}

	render() { 
    	const subtitle = 'Put your life in the hands of a computer!';
	    return (
	      <div>
	      	<Header subtitle={subtitle} />
	      	<div className="container container__color">
		      	<Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
		      	<div className="widget">
		      		<Options options={this.state.options}
		      		handleDeleteOptions={this.handleDeleteOptions}
		      		handleDeleteOption={this.handleDeleteOption} />
	      			<AddOptions handleAddOption={this.handleAddOption}/>
	      		</div>
	      	</div>
	      	<OptionModal selectedOption={this.state.selectedOption} 
	      	closeModal={this.closeModal} />
	      </div>
	    );
	}
}