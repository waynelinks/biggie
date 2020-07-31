import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'

import fs from 'fs'
import path from 'path'

const env = process.env.NODE_ENV || 'development'

let dir = './logs'
if (!dir) dir = path.resolve('logs')

if (!fs.existsSync(dir)) fs.mkdirSync(dir)

const options = {
  file: {
    level: env === 'development' ? 'debug' : 'warn',
    filename: dir + '/%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    timestamp: true,
    handleExceptions: true,
    humanReadableUnhandledException: true,
    prettyPrint: true,
    json: true,
    maxSize: '20m',
    colorize: true,
    maxFiles: '14d',
  },
}
const logger = createLogger({
  level: env === 'development' ? 'debug' : 'info',
  format: format.combine(
    format.json(),
    format.prettyPrint(),
    format.errors({ stack: true }),
    format.splat(),
  ),
  exceptionHandlers: [new DailyRotateFile(options.file)],
  exitOnError: false
})
