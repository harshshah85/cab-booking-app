import React, {Component} from 'react';

export default class BookingOptions extends Component {

    constructor(props){
        super(props);
    }

    _handleSelection(e){

    }

    render(){
        return(
            <div>
                <h3>Hello, {this.props.userName}!! Welcome to the Cab Booking App.</h3>
                <form className="" onChange={this._handleSelection.bind(this)}>
                  <div className="switch-wrapper columns small-4">
                    <label htmlFor="radio-switch-1 label small">
                      Uber</label>
                    <div className="switch">
                      <input name="book-option" id="book-option-1" value="uber" type="radio"/>
                      <label htmlFor="book-option-1"/>
                    </div>
                  </div>
                  <div className="switch-wrapper columns small-4 end">
                    <label htmlFor="radio-switch-1 label small">
                      Lyft</label>
                    <div className="switch">
                      <input name="book-option" id="book-option-2" value="lyft" type="radio"/>
                      <label htmlFor="book-option-2"/>
                    </div>
                </div>
            </form>
        </div>
        );
    }
}
