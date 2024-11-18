import img1 from "../../public/396.png";
import img2 from "../../public/396.png";
import img3 from "../../public/396.png";
import img4 from "../../public/396.png";
import img5 from "../../public/396.png";
import img6 from "../../public/396.png";
import img7 from "../../public/396.png";
import img8 from "../../public/396.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Carasole = () => {
  return (
    <article className="carousel-container bg-black pb-8 overflow-hidden">
      <section className="carousel">
        <div className="carousel-track flex animate-carousel">
          {/* First set of images */}
          {images.map((img, index) => (
            <img
              key={`first-${index}`}
              src={img}
              alt={`carousel image ${index + 1}`}
              className="h-auto w-[200px] object-contain mx-4"
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {images.map((img, index) => (
            <img
              key={`second-${index}`}
              src={img}
              alt={`carousel image ${index + 1}`}
              className="h-auto w-[200px] object-contain mx-4"
            />
          ))}
        </div>
      </section>
    </article>
  );
};

export default Carasole;
