# 字符串 双引号或单引号中的数据
# name = 'name'
# name2 = "name2"
# name3 = input('请输入：')
# print(name)
# print(name2)
# print(name3)
# print(type(name3))

# 下标： 就是编号 通过编号找到对应的存储空间 （= js中的索引）
# name = 'abcdefg'
# print(name[0])

# 切片
# 是指对操作的对象截取其中一部分的操作。
# 字符串、列表、元组都支持切片操作
# 切片的语法： [起始：结束：步长]
# 注意：选取的区间从"起始"位置开始到"结束"位前一列结束（不包括结束位本身）
# 步长表示选取间隔
# name = 'abcdefghijklmnopqrst'
# print(name[0:2])  # ab
# print(name[:2])  # ab #起始位默认为0
# print(name[0:])  # 结束位默认为最大值
# print(name[0:10:3])  # 起始 结束之间没隔多少位取值
# print(name[10: 0: -2])  # 反向 从右开始算

# find() 找存在 有返回下标 无返回-1。
# index() 找存在 有返回下标 无报错
# name = 'asdhakjsdgakjhd'
# findName = name.find('asdasd')
# findName2 = name.find('asdasd', 0, 1)
# # indexName = name.index('asdad')  # 报错
#
# print(findName2)


# count() 找次数
# name = 'asdasdasd'
# number = name.count('a')
# print(number)  # 3

# replace() 不改变原值
# name = 'asdasdasd'
# number = name.replace('a', '132')  # 替换全部
# number2 = name.replace('a', '132', 1)  # 替换N次
# print(number)
# print(number2)
# print('^' * 3)

# split() 已指定的值分割 （无指定就用空格） 返回数组
# name = '2021-08-02'
# splitName = name.split('-')
# print(splitName)  # ['2021', '08', '02']
