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

# find() 方法检测字符串中是否包含子字符串 str ，如果指定 beg（开始） 和 end（结束） 范围，则检查是否包含在指定范围内，如果包含子字符串返回开始的索引值，否则返回-1。
# index() 方法检测字符串中是否包含子字符串 str ，如果指定 beg（开始） 和 end（结束） 范围，则检查是否包含在指定范围内，该方法与 python find()方法一样，只不过如果str不在 string中会报一个异常
# name = 'asdhakjsdgakjhd'
# findName = name.find('asdasd')
# findName2 = name.find('asdasd', 0, 1)
# # indexName = name.index('asdad')  # 报错
#
# print(findName2)


