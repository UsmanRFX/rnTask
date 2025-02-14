import { AxiosError } from "axios";

export class AppError extends Error {
  statusCode?: number;

  constructor(message: string, statusCode?: number) {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;
  }
}

export const handleApiError = (error: unknown): AppError => {
  if (error instanceof AxiosError) {
    const status = error.response?.status || 500;
    const message = error.response?.data?.message || "Something went wrong!";
    return new AppError(message, status);
  }

  if (error instanceof Error) {
    return new AppError(error.message);
  }

  return new AppError("An unknown error occurred");
};
