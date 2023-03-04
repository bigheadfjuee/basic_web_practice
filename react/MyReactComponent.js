'use strict';

const e = React.createElement

function statelessComponent () {
  return e('h2', null, 'Stateless Component')
}

class MyReactComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text: 'text',
      items: []
    };
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleInput = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  getApiData = () => {
    const base = Date.now();
    let newItems = []
    for (let i = 0; i < 5; i++) {
      newItems.push(base + i)
    }

    this.setState({
      items: newItems
    })
  }

  itemsToList = () => this.state.items.map((item) =>
    e('li', { key: item }, item)
  )

  render() {
    return e('div', null, [
      e('h1', null, this.props.title),
      statelessComponent(),
      e('div', null, [
        e('label', { id: 'labelCount' }, this.state.count),
        e('button', { id: 'btnCount', onClick: () => this.increaseCount() }, '++Count')
      ]),
      e('div', null, [
        e('input', { type: 'text', onChange: (e) => this.handleInput(e), value: this.state.text }),
        e('label', { id: 'label' }, this.state.text)
      ]),
      e('div', null, [
        e('button', { id: 'btnGetApiData', onClick: () => this.getApiData() }, 'Get API Data'),
        e('ul', null, this.itemsToList())
      ])
    ])
  }

}
