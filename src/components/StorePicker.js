import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	myInput = React.createRef();

	goToStore = event => {
		// 1. Stop the form from submitting
		event.preventDefault();
		// 2. get the text from that input
		const storeName = this.myInput.current.value;
		// 3. Change the page to /store/whatever-they-enterd
		this.props.history.push(`/store/${storeName} `);
	};

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2> Please enter a store </h2>
				<input
					type="text"
					ref={this.myInput}
					required
					placeholder="Store name"
					defaultValue={getFunName()}
				/>
				<button type="submit">Visit Sore</button>
			</form>
		);
	}
}

export default StorePicker;
