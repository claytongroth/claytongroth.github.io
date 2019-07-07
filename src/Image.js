import React from "react";
import Spinner from './spinner.js';
import Image from "react-bootstrap/Image";

class MyImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageStatus: "loading",
      loading: true
    };
  }
  handleImageLoaded() {
    this.setState({
       imageStatus: "loaded",
       loading: false
    });
  }
  handleImageErrored() {
    this.setState({
      imageStatus: "failed to load" ,
      loading: false
  });
  }

  render() {
    return (
      <div>
        { this.state.loading && <Spinner/> }
        <Image
          src={this.props.imageUrl}
          style={{borderRadius: 20}}
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
          fluid
        />
      </div>
    );
  }
}
export default MyImage;
