export interface AuthConfig {
  providers: {
    google: boolean;
    emailPassword: boolean;
  };
  redirectAfterLogin: string;
}

export const authConfig: AuthConfig = {
  providers: {
    google: true,
    emailPassword: true,
  },
  redirectAfterLogin: '/dashboard',
};
