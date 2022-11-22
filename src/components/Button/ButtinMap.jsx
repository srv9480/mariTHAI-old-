import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {isToggleOn: true};
    this.text = { title: '' };
    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   const url = 'https://yandex.ru/maps/?ll=39.137872%2C56.640507&mode=routes&rtext=~55.861287%2C37.541243&rtt=pd&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozODY5NjExMzQwEkTQoNC%2B0YHRgdC40Y8sINCc0L7RgdC60LLQsCwg0JjQu9GM0LzQtdC90YHQutC40Lkg0L%2FRgNC%2B0LXQt9C0LCAxN9C6MyIKDTsqFkIV9nFfQg%3D%3D&z=7'
  //   this.setState(() => ({

  //   }));
  // }

  render() {
    return (

      <button onClick={() => { window.location.href = 'https://yandex.ru/maps/?ll=39.137872%2C56.640507&mode=routes&rtext=~55.861287%2C37.541243&rtt=pd&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozODY5NjExMzQwEkTQoNC%2B0YHRgdC40Y8sINCc0L7RgdC60LLQsCwg0JjQu9GM0LzQtdC90YHQutC40Lkg0L%2FRgNC%2B0LXQt9C0LCAxN9C6MyIKDTsqFkIV9nFfQg%3D%3D&z=7'; }}>
        {this.text.title}
      </button>
    );
  }
}

export default Toggle;
