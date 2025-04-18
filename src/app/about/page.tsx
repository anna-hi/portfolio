// components
import PhotoCardHolder from "./_components/photo-card-holder";

// styles
import styles from "./style.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className="grid grid-cols-7 gap-16 items-center">
        <div className="col-span-4">
          <h1 className="mb-4">
            A little about <i className="text-pink">Anna.</i>
          </h1>
          <p>
            Hey, I&apos;m Anna. I&apos;m a designer with a background in Computer Science
            and Design. I focus primarily on product and user experience, and
            I&apos;m passionate about designing products that make a noticeable
            impact on real people&apos;s lives.
          </p>
          <p className="mb-0">
            I&apos;m currently pursuing a Masters degree in Human Computer
            Interaction at Carnegie Mellon University and recently just
            graduated summa cum laude from Northeastern University.
          </p>
        </div>
        <div className="col-span-3">
          <PhotoCardHolder />
        </div>
      </div>
    </div>
  );
}
