import time


def time_decorator(fn):
    def inner_fun(*args, **kwargs):
        start = time.time()
        result = fn(*args, **kwargs)
        end = time.time()
        duration = (end - start)
        print(f"function {fn.__name__} executed in {duration:4f}")
        return result
    return inner_fun

@time_decorator
def slow_func():
    time.sleep(1.5)

slow_func()