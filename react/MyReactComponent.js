'use strict';

const e = React.createElement;

const title = e(
  'h1', null, 'React Component'
)

const labelCount = e(
  'lable',
  { id: 'labelCount', onclick: () => this.getState() },
)

const btnCount = e(
  'button',
  { id: 'btnCount' },
  '++Count'
)

const blockA = e(
  'div', null, [labelCount, btnCount]
)

const input = e(
  'input',
  { type: 'text', value: 'text' }
)

const label = e(
  'label',
  { id: 'label' },
  'text'
)

const blockB = e(
  'div', null, [input, label]
)

const btnGetApiData = e(
  'button',
  { id: 'btnGetApiData' },
  'Get API Data'
)

const list = e(
  'ul',
  { id: 'list' }
)

const blockC = e(
  'div', null, [btnGetApiData, list]
)


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