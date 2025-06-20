class OldLogger:
    @staticmethod
    def write_log(text):
        print(f'old log: {text}')


# Adapter
class LoggerAdapter:
    def __init__(self, old_logger: OldLogger):
        self.old_logger = old_logger

    def log(self, msg):
        self.old_logger.write_log(msg)


def client(logger: LoggerAdapter, text):
    logger.log(text)


old_logger = OldLogger()
logger_adapter = LoggerAdapter(old_logger)

client(logger_adapter, 'hello adapter pattern')
