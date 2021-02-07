import { Config } from './types';

export const config: Config = {
    title: 'admin.brand',
    logoUri: require('../../assets/images/logo.png'),
    resourceBaseUri: APP_BASEHREF || '/',
    defaultLocale: 'ja-JP', // empty to use navigator language
    locales: [
        {
            name: 'English',
            value: 'en-US',
            // uncomment that will load locale file(file name format: en-US.json) via ajax
            messages: require('../../assets/locales/json/en-US.json'),
        },
        {
            name: '日本語',
            value: 'ja-JP',
            messages: require('../../assets/locales/json/ja-JP.json'),
        },
    ],
};
