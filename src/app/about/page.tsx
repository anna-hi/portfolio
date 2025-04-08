import styles from "./style.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div>
        <h1>
          A little about <i className="text-pink">Anna.</i>
        </h1>
        <p>
          Hey, I’m Anna. I’m a designer with a background in Computer Science
          and Design. I focus primarily on product and user experience, and I’m
          passionate about designing products that make a noticeable impact on
          real people’s lives.
        </p>
        <p>
          I’m currently pursuing a Masters degree in Human Computer Interaction
          at Carnegie Mellon University and recently just graduated summa cum
          laude from Northeastern University.
        </p>
      </div>
    </div>
  );
}
