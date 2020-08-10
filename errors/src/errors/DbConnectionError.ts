import { CustomError } from './CustomError'
import { INTERNAL_SERVER_ERROR } from './responseCodes'

export class DbConnectionError extends CustomError {
  statusCode = INTERNAL_SERVER_ERROR

  constructor(public message: string = 'Error connecting to database') {
    super(message)

    Object.setPrototypeOf(this, DbConnectionError.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.message,
      },
    ]
  }
}
