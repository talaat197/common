import { CustomError } from "./custom-error";

export class DatabaseConnetionError extends CustomError {
  public reason = "Error connection to the database";
  public statusCode = 500;

  constructor() {
    super('Error connecting to the DB');
    Object.setPrototypeOf(this, DatabaseConnetionError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
