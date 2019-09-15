import cx from 'classnames';
import { Component } from 'react';

export default class LikeButton extends Component {


  render() {
    return (
      <>
        <div>
          <Counter />
        </div>
        <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
      </>
    );
  }
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { likes: 100, liked: false, className: 'like-button' };
    this.like = this.like.bind(this);
  }

  like = () => {
    if (this.state.liked == false) {
      this.setState({ likes: this.state.likes + 1, liked: !this.state.liked, className: this.state.className + ' liked' });
    }
    else {
      this.setState({ likes: this.state.likes - 1, liked: !this.state.liked, className: 'like-button' });
    }

  };
  render() {
    return (
      <button type="submit" className={this.state.className} onClick={this.like}> Like | {this.state.likes}</button>
    )
  }

};

