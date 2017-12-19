import React, { Component } from 'react';
import Modal from 'react-modal';
import '../styles/components/modal.css';

export default class OptionModal extends Component {
	render() {
		return (
			<div>
				<Modal
		          isOpen={!!this.props.selectedOption}
		          ariaHideApp={false}
		          onRequestClose={this.props.closeModal}
		          contentLabel="Selected Option"
		          closeTimeoutMS={500}
		          className="modal"
		        >
		        	<h3 className="modal__title">Selected Option</h3>
		        	{this.props.selectedOption && <p className="modal__body">{this.props.selectedOption}</p>}
		        	<button className="btn" onClick={this.props.closeModal}>Okay</button>
		        </Modal>
			</div>
		);
	}
}