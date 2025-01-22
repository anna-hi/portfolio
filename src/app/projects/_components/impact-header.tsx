import { ALEGREYA_SANS, LORA } from "@/util/fonts";
import styles from "./style.module.css";

type impactHeaderProps = {
  isPerceivedImpact?: boolean;
  children: React.ReactNode;
};

export default function ImpactHeader({
  isPerceivedImpact,
  children,
}: impactHeaderProps) {
  return (
    <div className={styles.impactHeaderContainer}>
      <h5>{isPerceivedImpact ? "perceived impact" : "impact"}</h5>
      <div className={`${LORA.className} text-2xl font-medium`}>{children}</div>
    </div>
  );
}
