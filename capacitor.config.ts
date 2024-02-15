import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.assessmate',
  appName: 'assessmate',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
