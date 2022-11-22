import React from 'react';
import './styles.css';
import Icon from './Icons';

class Button extends React.Component {
  render() {
    const { onClickHandler } = this.props;
    return (

      <button
        type={this.props.type}
        onClick={(event) => onClickHandler(event.target)}
        className={`${this.props.theme} + 
            button + 
            ${this.props.color} + 
            ${this.props.size}`}
        style={this.props.style}
      >
        {<Icon icon={this.props.icon} />}
        {this.props.text}
      </button>
    );
  }
}
export default Button;
