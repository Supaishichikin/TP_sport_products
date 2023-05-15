export class ResponseError extends Error {
  response: Response;

  constructor(message: string, res: Response) {
    super(message);
    this.response = res;
  }
}

export function handleError(err: unknown) {
  if (err instanceof ResponseError) {
    switch (err.response.status) {
      case 401:
        // handle 401 errors
        console.error("Unauthorized request");
        break;
      case 500:
        // handle 500 errors
        console.error("Internal server error");
        break;
      default:
        // Show
        throw new Error("Unhandled fetch response", { cause: err });
    }
  }
  throw new Error("Unknown fetch error", { cause: err });
}
