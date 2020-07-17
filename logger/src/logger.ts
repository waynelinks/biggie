import { createLogger, format, transports } from 'winston'

const env = process.env.NODE_ENV || 'development'

const logger = createLogger({
  level: env === 'development' ? 'debug' : 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.json(),
    format.errors({ stack: true }),
    format.splat(),
  ),
  defaultMeta: { service: process.env.SERVICE },
  transports: [
    new transports.File({
      filename: 'error.log',
      level: 'error',
    }),
    new transports.File({ filename: 'combined.log' }),
  ],
  exceptionHandlers: [
    new transports.File({ filename: 'uncaughtExceptions.log' }),
  ],
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      level: 'info',
      format: format.combine(
        format.colorize(),
        format.printf(
          (info) => `${info.timestamp} ${info.level}: ${info.message}`,
        ),
      ),
    }),
  )
}

export { logger }
