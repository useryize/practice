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

    # 函数参数
    def mr_number(a, b=2, *args, **kwargs):
        print('args', args)
        print('函数缺省值', a, b, args, kwargs)

    mr_number(1, 22, 3, 4, 5, 6)

    # 拆包
    def parameter():
        a, b = [1, 2]
        c, d, *args = (1, 2, 3)
        e, f = {'name': 1, 'color': 1}
        a, b = b, a  # 交换
        print('args', args)
        print('拆包%d-%d' % (a, b))
        print('拆包%d-%d' % (c, d))
        print('拆包%s-%s' % (e, f))

    parameter()

    # 阶乘
    def factorial_num_while(num=10):
        i = 1
        results = 1
        while i <= num:
            results *= i
            i += 1
        print('阶乘-factorial_num_while', results)

    factorial_num_while(4)

    # 阶乘 递归
    def factorial_num_recursion(num=10):
        results = 1
        if num > 1:
            results = num * factorial_num_recursion(num - 1)

        return results

    print('阶乘-factorial_num_recursion', factorial_num_recursion(4))

    # eval()表达式
    def eval_def():
        a = 1
        b = 2
        print('eval()表达式', a + b)
        print('eval()表达式', eval('a + 9'))

    eval_def()

    # range()
    def range_list():
        for item in range(10):
            print('range', item)
        print([x for x in range(10)])  # 列表推导式

    range_list()


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
