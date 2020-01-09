import React, {Component} from 'react';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {};


  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="row">
        <div className="container">
          <h3>Lễ hội trăng rằm cùng các bạn khiếm thính</h3>
          <p>Với mong muốn mang đến sự bình đẳng giáo dục, dự án "Hear us now" đã nỗ lực xây dựng nhiều chương trình dạy tiếng Anh cho người khiếm thính.</p>

           <div className="embedsocial-album" data-ref="efd93d3a8c61549882cd6e070cf5552669df6cf0" />
        </div>
      </div>
    );
  }
}

export default Post;
