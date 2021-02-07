import { Config, AuthType } from './types';

export const config: Config = {
    authType: AuthType.Mock,
    userConverter: (mockUser: any) => {
        return {
            id: '-1',
            name: mockUser.username,
            email: 'test.test',
            avatar: require('../../assets/images/avator.png'),
        };
    },
};
