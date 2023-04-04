import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { ACCESS_TOKEN } from "../constants/constants";
import { useNavigate } from "react-router-dom";


export const authorizedApi = axios.create();

export function withAxiosIntercepted<T extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<T>
) {
  return function AxiosIntercepted(props: T) {
    const navigate = useNavigate();
    const [isInitialized, setIsInitialized] = useState<boolean>(false);

    useEffect(() => {
      axios.interceptors.request.use((config: AxiosRequestConfig) => {
        return {
          ...config,
          baseURL: process.env.REACT_APP_API_URL,
        };
      });

      authorizedApi.interceptors.request.use((config: AxiosRequestConfig) => {
        if (config?.headers) {
          config.headers["Authorization"] = `Bearer ${localStorage.getItem(
            ACCESS_TOKEN
          )}`;
        }

        return {
          ...config,
          baseURL: process.env.REACT_APP_API_URL,
        };
      });

      authorizedApi.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          if (error.response.status === 401) {
            navigate("/login");
          }
          return Promise.reject(error);
        }
      );

      setIsInitialized(true);
    }, [navigate]);

    return isInitialized ? <Component {...props} /> : <></>;
  };
}
