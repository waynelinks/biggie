import { CustomError } from './CustomError'
import { UNAUTHORIZED } from './responseCodes'

export class UnAuthorizedError extends CustomError {
  statusCode = UNAUTHORIZED

  constructor(public message: string = 'Not Authorized!') {
    super(message)

    Object.setPrototypeOf(this, UnAuthorizedError.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.message,
      },
    ]
  }
}
