def init_01():
    def add_number(a, b):
        """
        两数之间的整数和
        :param a: 数1
        :param b: 数2
        :return: 和
        """
        max_num = max(a, b)
        min_num = min(a, b)
        add_num = 0
        while min_num <= max_num:
            add_num += min_num
            min_num += 1
        print(add_num)

    add_number(10, 1)

    # 函数返回值
    def return_number(a, b):
        return a + b

    get_number = return_number(2, 8)
    print(get_number)


number = 10


def test_number():
    global number  # number是全局变量   嵌套函数中global报错 解决：在外层函数中同时声明全局变量
    number = 5


test_number()


def init_02():
    global a
    a = 10

    def test_global():
        global a
        a = 5

    test_global()
    print(a)


init_02()
