import { redirect } from "next/navigation";

const resumeUrl =
  "https://drive.google.com/file/d/1VlE1NctNL2japj9nKU_DiXkNXPS3uCHG/view?usp=sharing";

export default function Resume() {
  redirect(resumeUrl);
}
