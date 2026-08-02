export const AUTH_COOKIE_NAME = "annas_secret_key";
export const AUTH_COOKIE_VALUE = "authenticated";
export const AUTH_PASSWORD = process.env.SECRET_CODE;

export function isAuthenticated(cookieValue?: string) {
  return cookieValue === AUTH_COOKIE_VALUE;
}
