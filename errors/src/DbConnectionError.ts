import { CustomError } from './CustomError'
import { INTERNAL_SERVER_ERROR } from './responseCodes'

export class DbConnectionError extends CustomError {
  statusCode = INTERNAL_SERVER_ERROR

  reason = 'Error connecting to database'

  constructor(public message: string) {
    super(message)

    Object.setPrototypeOf(this, DbConnectionError.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.message ? this.message: this.reason,
      },
    ]
  }
}
