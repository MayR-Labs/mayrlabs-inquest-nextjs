export interface AuthConfig {
  providers: {
    google: boolean;
    emailPassword: boolean;
  };
}

export const authConfig: AuthConfig = {
  providers: {
    google: true,
    emailPassword: true,
  },
};
