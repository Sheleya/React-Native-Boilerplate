import axios, { AxiosRequestConfig } from 'axios';
import DeviceInfo from 'react-native-device-info';
import { storage } from '@utils/storage';
import { Endpoints } from '@constants/enums';
import { isJWTValid } from '@utils/jwt';
import { config } from '../config';

const CONFIG: AxiosRequestConfig = {
  headers: {
    Authorization: '',
    accept: 'application/json',
    'X-App-Version': DeviceInfo.getVersion(),
  },
};
export class Api {
  static JWT: string;

  static Config = CONFIG;

  static setToken = (jwt: string) => {
    Api.JWT = jwt;

    if (Api.Config.headers) {
      Api.Config.headers.Authorization = `Bearer ${jwt}`;
    }
  };

  static setLanguage = (language: string) => {
    if (Api.Config.headers) {
      Api.Config.headers['Accept-Language'] = language;
    }
  };

  static checkJWT = async () => {
    if (!isJWTValid(Api.JWT)) {
      const oldRefreshToken = await storage.getItem('refresh_token');

      if (!oldRefreshToken) {
        // logout user

        return;
      }

      const { id_token: token, refresh_token: refreshToken } = await Api.post(
        Endpoints.refreshToken,
        {
          refresh_token: oldRefreshToken,
        },
        false,
      );

      if (!token) {
        // logout user

        return;
      }

      await storage.setItem('token', token);
      await storage.setItem('refresh_token', refreshToken);
      Api.setToken(token);
    }
  };

  // Helpers
  static get = async <T>(
    endpoint: string,
    params?: { [key in string]: string | number },
  ) => {
    await Api.checkJWT();
    const url = config.BASE_URL + endpoint;

    return (await axios.get<{ data: T }>(url, { ...Api.Config, params })).data
      .data;
  };

  static post = async <D, T>(endpoint: string, data: D, checkJWT = true) => {
    if (checkJWT) {
      await Api.checkJWT();
    }

    const url = config.BASE_URL + endpoint;

    return (await axios.post<{ data: T }>(url, data, Api.Config)).data.data;
  };

  static patch = async <D, T>(endpoint: string, data: D) => {
    await Api.checkJWT();
    const url = config.BASE_URL + endpoint;

    return (await axios.patch<{ data: T }>(url, data, Api.Config)).data.data;
  };

  static delete = async <D, T>(endpoint: string, data: D) => {
    await Api.checkJWT();
    const url = config.BASE_URL + endpoint;

    return (await axios.delete<{ data: T }>(url, { ...Api.Config, data })).data
      .data;
  };
}
