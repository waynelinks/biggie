import { CustomError } from './CustomError'
import { NOT_FOUND } from './responseCodes'

export class NotFoundError extends CustomError {
  statusCode = NOT_FOUND

  constructor(public message: string) {
    super(message)

    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.message,
      },
    ]
  }
}
