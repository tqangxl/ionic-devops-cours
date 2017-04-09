/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   09-04-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 09-04-2017
 */

 import { IEnvironment } from "./env-model";

 export const prodVariables:IEnvironment = {
   environmentName: 'Production Environment',
   ionicEnvName: 'prod',

   // Front-end
   apiEndpoint: 'http://localhost:8080',

   // Back-end
   dbHost: 'mongodb://localhost:27017',
   dbName: 'test'
 };
