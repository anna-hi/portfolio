import { ALEGREYA_SANS, LORA } from "@/util/fonts";
import styles from "./style.module.css";

type impacyHeaderProps = {
  isPerceivedImpact: boolean;
  children: React.ReactNode;
};

export default function ImpactHeader({
  isPerceivedImpact,
  children,
}: impacyHeaderProps) {
  return (
    <div className={styles.impactHeaderContainer}>
      <div className={`${ALEGREYA_SANS.className} text-gray-dark`}>
        {isPerceivedImpact ? "PERCEIVED IMPACT" : "IMPACT"}
      </div>
      <div className={`${LORA.className} text-2xl mb-5 font-medium`}>
        {children}
      </div>
    </div>
  );
}
