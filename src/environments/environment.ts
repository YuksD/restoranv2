// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  api_key: 'bW9jay04ODc3NTU2NjExMjEyNGZmZmZmZmJ2',
  url_base: 'https://smarty.kerzz.com:4004'
};
const firebaseConfig = {
  apiKey: "AIzaSyBMubVe0Aiqd_MUVWP7-OuCE2pzNJxsWQw",
  authDomain: "restaurant-listing-app-2a94f.firebaseapp.com",
  projectId: "restaurant-listing-app-2a94f",
  storageBucket: "restaurant-listing-app-2a94f.appspot.com",
  messagingSenderId: "448855673150",
  appId: "1:448855673150:web:55c2de93e1c50fd249c46f",
  measurementId: "G-E5ZNQ1SV94"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
