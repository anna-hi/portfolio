import { ALEGREYA_SANS } from "@/util/fonts";
import styles from "./style.module.css";

type MyRoleSectionProps = {
  duration: string;
  role: string[];
  team?: string[];
  advisor?: string[];
  isDark?: boolean;
};

export default function MyRoleSection({
  duration,
  role,
  team,
  advisor,
  isDark,
}: MyRoleSectionProps) {
  const headerClass = `${ALEGREYA_SANS.className} ${
    isDark ? "text-[#C8C8C8]" : "text-gray-dark"
  } text-base`;

  return (
    <div className={styles.myRoleContainer}>
      <div className={styles.myRoleColumn}>
        <div className={headerClass}>duration</div>
        {duration}
      </div>
      <div className={styles.myRoleColumn}>
        <div className={headerClass}>my role</div>
        {role.map((r) => (
          <div key={r}>{r}</div>
        ))}
      </div>
      {team && (
        <div className={styles.myRoleColumn}>
          <div className={headerClass}>team</div>
          {team.map((t) => (
            <div key={t}>{t}</div>
          ))}
        </div>
      )}
      {advisor && (
        <div className={styles.myRoleColumn}>
          <div className={headerClass}>advisor</div>
          {advisor.map((a) => (
            <div key={a}>{a}</div>
          ))}
        </div>
      )}
    </div>
  );
}
