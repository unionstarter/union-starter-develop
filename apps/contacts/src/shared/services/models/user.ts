export interface User {
  uid: string;
  email: string;
  displayName: string;
  emailVerified: boolean;
  phoneNumber?: string;
}
