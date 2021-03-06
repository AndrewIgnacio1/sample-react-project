import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  componentDidMount() {
    //fetching data here. Refreshing page will not remove data.
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options: options }))
      }
    } catch (error) {
      // Do nothing when no valid value
    }
  };
  componentDidUpdate(prevProps, prevState) {
    //saving data here
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  };
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exist';
    }
    this.setState((prevState) => ({options: prevState.options.concat([option])}))
  };
  handleDeleteOptions = () => {
    this.setState(() => ({options: []}))
  };
  handleClearOption = () => {
    this.setState(() => ({selectedOption: undefined}))
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[randomNum];
    this.setState((prevState) => ({
      selectedOption: selectedOption
    }))
  };
  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of a computer.';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearOption={this.handleClearOption}
        />
      </div>
    )
  }
}