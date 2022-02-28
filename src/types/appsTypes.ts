export interface App {
  appName: string | null;
  logoUrl: string | null;
  category: string | null;
  appDescription: string | null;
}

export interface AppsState {
  app: App;
}