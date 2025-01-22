import axios from 'axios';
import { defaultConfig } from './defaultConfig';

export const authAPI = axios.create(defaultConfig);
