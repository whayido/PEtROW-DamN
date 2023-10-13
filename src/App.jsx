import React from "react";
/* import imageSSIM from "image-ssim"; */
import "./styles/style.sass";
import { Routes, Route } from "react-router-dom";
import Header from "./componets/Header";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Footer from "./componets/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

/* class ImageComparison extends Component {
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
 */
