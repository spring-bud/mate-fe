import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  user_id: number;
  user_url: string;
  user_nickname: string;
  sub: string;
  iat: number;
  exp: number;
}

export const decodeAccessToken = (token: string): DecodedToken => {
  return jwtDecode<DecodedToken>(token);
};
