import { Component } from 'react';
import axios from 'axios';

class Button extends Component {
  state = {
    items: [],
    page: 1,
  };

  getData = async () => {
    const images = await axios
      .get(
        `https://pixabay.com/api/?q=${this.props.phrase}&page=${this.state.page}&key=36318494-588897fc86ad50d359fa41850&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(res => {
        this.setState({
          items: (this.state.items = res.data.hits),
        });
        this.setState({ page: this.state.page + 1 });
        this.props.load(this.state.items);
      });
    console.log('a', this.state.items, 'b', this.state.items2);
  };

  componentDidUpdate() {
    this.setState({
      items: this.state.items,
    });
    console.log("I'm updated");
  }

  render() {
    return (
      <button onClick={this.getData} className="LoadButton">
        Load more!
      </button>
    );
  }
}
export default Button;
