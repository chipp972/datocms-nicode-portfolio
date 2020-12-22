import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line fp/no-class
export class Modal extends React.Component {
  el: HTMLDivElement;

  constructor(props) {
    super(props);

    if (typeof document !== 'undefined') {
      this.el = document.createElement('div');
    }
  }

  componentDidMount() {
    if (typeof document !== 'undefined') {
      document.querySelector('#dialog').appendChild(this.el);
    }
  }

  componentWillUnmount() {
    if (typeof document !== 'undefined') {
      document.querySelector('#dialog').removeChild(this.el);
    }
  }

  render() {
    const { children } = this.props;
    return this.el ? ReactDOM.createPortal(children, this.el) : null;
  }
}
