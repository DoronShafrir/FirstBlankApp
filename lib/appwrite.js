/*
const val APPWRITE_PROJECT_ID = "6a75b07f002168f6169f"
const val APPWRITE_PROJECT_NAME = "FirstBlankApp"
const val APPWRITE_PUBLIC_ENDPOINT = "https://nyc.cloud.appwrite.io/v1"
*/

import 'react-native-url-polyfill/auto';
import { Client, Account, Avatars, Databases } from 'react-native-appwrite';

export const client = new Client();

client
    .setProject('6a75b07f002168f6169f')
    .setPlatform('https://nyc.cloud.appwrite.io/v1')
    .setEndpoint('https://nyc.cloud.appwrite.io/v1');

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client)