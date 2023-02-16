'use strict';

const e = React.createElement;

const title = e('h1', null, 'React - Class Component')

const blockA = e(
  'div', null, [
  e('label', { id: 'labelCount', onClick: () => this.getState() })
  , e('button', { id: 'btnCount' }, '++Count')
])

const blockB = e(
  'div', null, [
  e('input', { type: 'text' }), e('label', { id: 'label' }, 'text')
])

const blockC = e(
  'div', null, [
  e('button', { id: 'btnGetApiData' }, 'Get API Data')
])

class MyReactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: 'MyReactComponent' };
  }

  render() {
    return e(
      'div', null,
      [title, blockA, blockB, blockC]
    )
  }
}