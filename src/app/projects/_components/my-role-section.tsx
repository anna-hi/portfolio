import { ALEGREYA_SANS } from "@/util/fonts";
import styles from "./style.module.css";

type MyRoleSectionProps = {
  duration: string;
  role: string[];
  team?: string[];
  advisor?: string[];
};

export default function MyRoleSection({
  duration,
  role,
  team,
  advisor,
}: MyRoleSectionProps) {
  return (
    <div className={styles.myRoleContainer}>
      <div className={styles.myRoleColumn}>
        <div className={`${ALEGREYA_SANS.className} text-gray-dark`}>
          DURATION
        </div>
        {duration}
      </div>
      <div className={styles.myRoleColumn}>
        <div className={`${ALEGREYA_SANS.className} text-gray-dark`}>
          MY ROLE
        </div>
        {role.map((r) => (
          <div key={r}>{r}</div>
        ))}
      </div>
      {team && (
        <div className={styles.myRoleColumn}>
          <div className={`${ALEGREYA_SANS.className} text-gray-dark`}>
            TEAM
          </div>
          {team.map((t) => (
            <div key={t}>{t}</div>
          ))}
        </div>
      )}
      {advisor && (
        <div className={styles.myRoleColumn}>
          <div className={`${ALEGREYA_SANS.className} text-gray-dark`}>
            ADVISOR
          </div>
          {advisor.map((a) => (
            <div key={a}>{a}</div>
          ))}
        </div>
      )}
    </div>
  );
}
