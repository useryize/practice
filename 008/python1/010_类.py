# 定义类
class Init01:
    # 属性
    def __init__(self, a=10, b=10):
        self.a = a
        self.b = b

    def __str__(self):
        return str(self.a)

    # 方法
    def test(self, a=0, b=0):
        print('self', self.a, self.b)
        print('def', a, b)


get_init01 = Init01(20, 20)
get_init01.test(10, 10)
print(get_init01)
