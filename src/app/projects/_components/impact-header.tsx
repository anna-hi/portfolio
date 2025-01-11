import { ALEGREYA_SANS, LORA } from "@/util/fonts";
import styles from "./style.module.css";

type impactHeaderProps = {
  isPerceivedImpact: boolean;
  children: React.ReactNode;
};

export default function ImpactHeader({
  isPerceivedImpact,
  children,
}: impactHeaderProps) {
  return (
    <div className={styles.impactHeaderContainer}>
      <div className={`${ALEGREYA_SANS.className} text-gray-dark`}>
        {isPerceivedImpact ? "perceived impact" : "impact"}
      </div>
      <div className={`${LORA.className} text-2xl font-medium`}>{children}</div>
    </div>
  );
}
