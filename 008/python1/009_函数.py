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

    get_return_number = return_number(2, 8)
    print(get_return_number)

    # 函数形参默认值
    def mr_number(a=1, b=2):
        return a + b

    get_mr_number = mr_number()
    print(get_mr_number)


global_number = 0


def init_02():
    global global_number
    global_number = 10

    def test_global():
        global global_number  # global_number是全局变量 嵌套函数中改变全局变量必须使用global 而且多层嵌套时每层都需要声明
        global_number = 5

    test_global()
    print(global_number)


init_01()
init_02()
