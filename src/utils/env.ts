export class Env {
  public static readonly BASE_URL = process.env.URL as string;
  public static readonly EMAIL = process.env.EMAIL as string;
  public static readonly SECOND_EMAIL = process.env.SECOND_EMAIL as string;
  public static readonly PASSWORD = process.env.PASSWORD as string;
  public static readonly AUTH_CODE = process.env.AUTHCODE as string;
  public static readonly COMPANY_NUMBER = process.env.COMPANY_NUMBER as string;
}
