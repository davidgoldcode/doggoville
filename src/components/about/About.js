import { default as png } from "../../assets/eight_sleep.png";
import { default as png1 } from "../../assets/eight_sleep1.png";
import { default as png2 } from "../../assets/eight_sleep2.png";
import { default as png3 } from "../../assets/eight_sleep3.png";
import { default as png4 } from "../../assets/eight_sleep4.png";
import { default as webp } from "../../assets/eight_sleep.webp";
import { default as webp1 } from "../../assets/eight_sleep1.webp";
import { default as webp2 } from "../../assets/eight_sleep2.webp";
import { default as webp3 } from "../../assets/eight_sleep3.webp";
import { default as webp4 } from "../../assets/eight_sleep4.webp";

// Styled Components
import { Img } from "./about-styling";
import { Div } from "./about-styling";

const imgs = [
  { src: webp, fallback: png },
  { src: webp1, fallback: png1 },
  { src: webp2, fallback: png2 },
  { src: webp3, fallback: png3 },
  { src: webp4, fallback: png4 },
];

const About = () => {
  return (
    <Div>
      <h1 className="self-center"> Hi 👋 I'm David </h1>
      <h3>About me</h3>
      <p>
        I am a developer who recently finished Lambda School - a full-time, 6+
        month intensive coding academy. I love Technology. When I'm not geeking
        on Tech, I might be cooking, playing basketball or sleeping.
      </p>

      <p>
        I know everybody who applies for a role says they're huge fans, but I am
        100% an EightSleep fan boy. No, seriously.
      </p>

      <div className="h-1/2 flex flex-wrap justify-center">
        {imgs.map((photo) => (
          <Img src={photo.src} fallback={photo.fallback} />
        ))}
      </div>
    </Div>
  );
};

export default About;
