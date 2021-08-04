# 定义类
class Init01:
    # 属性
    def __init__(self, a=10, b=10):
        print('init')
        self.a = a
        self.b = b
        # 私有属性  命名已 __  开头
        self.__id = 123

    def __str__(self):
        return str(self.a)

    def __del__(self):
        print('del')

    # 私有方法 命名已 __  开头
    def __def_private(self):
        print('私有方法', self.a)

    # 方法
    def test(self, a=0, b=0):
        print('self', self.a, self.b)
        print('def', a, b)
        print('__id', self.__id)
        self.__def_private()


# get_init01 = Init01(20, 20)
# get_init01.test(10, 10)

# 继承
class Inheritance(Init01):
    pass


get_Inheritance = Inheritance()
get_Inheritance.test()
# print(get_Inheritance)
