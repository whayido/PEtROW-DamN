import React, { Component } from "react";
import imageSSIM from "image-ssim";
import "./App.css";

/* function App() {
  return (
    <>
      <h1>Vite + React</h1>
    </>
  );
}

export default App; */

class ImageComparison extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image1: null,
      image2: null,
      ssim: null,
    };
  }

  handleImageUpload = (event, imageNumber) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = () => {
          this.setState({ [imageNumber]: image }, () => this.calculateSSIM());
        };
      };
      reader.readAsDataURL(file);
    }
  };

  calculateSSIM = () => {
    const { image1, image2 } = this.state;
    if (image1 && image2) {
      // Вычисление SSIM между изображениями
      imageSSIM(image1, image2).then((ssim) => {
        this.setState({ ssim });
      });
    }
  };

  render() {
    const { ssim } = this.state;

    return (
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => this.handleImageUpload(e, "image1")}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => this.handleImageUpload(e, "image2")}
        />

        {ssim !== null && (
          <div>
            <h2>SSIM: {ssim}</h2>
          </div>
        )}
      </div>
    );
  }
}

export default ImageComparison;
