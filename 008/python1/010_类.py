# 定义类
class Init01:
    # 属性
    def __init__(self, a=10, b=10):
        print('init')
        self.a = a
        self.b = b

    def __str__(self):
        print('str')
        return str(self.a)

    def __del__(self):
        print('del')

    # 方法
    def test(self, a=0, b=0):
        print('self', self.a, self.b)
        print('def', a, b)


get_init01 = Init01(20, 20)
get_init01.test(10, 10)
