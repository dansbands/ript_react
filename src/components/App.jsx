import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import '../index.css';
import moment from 'moment';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        }
    }

    addReminder() {
        console.log('this.state.dueDate', this.state.dueDate);
        this.props.addReminder(this.state.text, this.state.dueDate);
    }

    deleteReminder(id) {
        this.props.deleteReminder(id);
    }

    renderReminders () {
        const { reminders } = this.props;
        return (
            <ul className="list-group col-sm-4">
                {
                    reminders.map( reminder => {
                        return (
                            <li key={reminder.id} className="list-group-item">
                                <div className="list-item">
                                    <div>{reminder.text}</div>
                                    <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                                </div>
                                <div
                                    className="list-item delete-button"
                                    onClick={() => this.deleteReminder(reminder.id)}
                                >
                                    &#x2715;
                                </div>
                            </li>
                        )
                    })
                }

            </ul>
        )
    }

    render () {
        return (
            <div className="App">
                <div className="title">
                    &larr;
                    Bench Press
                </div>

                <form>
                    <FormGroup
                        controlId="formBasicText"
                       // validationState={this.getValidationState()}
                    >

                        <div className="row">
                            <div className="previous">
                                <ControlLabel>Previous</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="95 x 10"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                            </div>

                            <div className="cell">
                                <ControlLabel>Lbs</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="95"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                            </div>

                            <div className="cell">
                            <ControlLabel>Reps</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="10"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                            </div>
                        </div>

                        <div className="row">
                            <div className="previous">
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="95 x 10"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                            </div>

                            <div className="cell">
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="105"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                            </div>

                            <div className="cell">
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="8"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                            </div>
                        </div>

                        <div className="row">
                            <div className="previous">
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="95 x 10"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                            </div>

                            <div className="cell">
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="115"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                            </div>

                            <div className="cell">
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="6"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                            </div>
                        </div>
                    </FormGroup>
                </form>
                <div>
                    <button type="button"
                            className="left"
                            onClick = {() => this.addReminder()}
                    >
                        +/- sets
                    </button>
                    <button type="button"
                            className="center"
                            onClick = {() => this.addReminder()}
                    >
                        Next
                    </button>
                    <button type="button"
                            className="right"
                            onClick = {() => this.addReminder()}
                    >
                        Finish
                    </button>
                </div>

                <div className="form-inline reminder-form">
                    <div className="form-group">
                        <input className="form-control"
                               placeholder="I have to..."
                               onChange={event => this.setState({text: event.target.value})}
                               />
                        <input
                            className="form-control"
                            type="datetime-local"
                            onChange={event => this.setState({dueDate: event.target.value})}

                        />
                    </div>
                    <button type="button"
                            className="btn btn-success"
                            onClick = {() => this.addReminder()}
                    >
                        Add Reminder
                    </button>
                </div>
                { this.renderReminders() }
                <div
                    className="btn btn-danger"
                    onClick={() => this.props.clearReminders()}
                >
                    Clear Reminders
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(App);