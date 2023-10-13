import "../styles/pages/Home.sass";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main id="content">
        <section>
          <div>
            <input
              type="file"
              accept="image/*"
              /*  onChange={(e) => this.handleImageUpload(e, "image1")} */
            />
            <input
              type="file"
              accept="image/*"
              /*   onChange={(e) => this.handleImageUpload(e, "image2")} */
            />

            {/*   {ssim !== null && (
              <div>
                <h2>SSIM: {ssim}</h2>
              </div>
            )} */}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
