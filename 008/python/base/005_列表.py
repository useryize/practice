# 列表

# listInfo = [0, 1, 2, 3, 4, 5, 6]
# print(listInfo[0])
# print(listInfo[2:])  # 从第2开始取所有
# print(listInfo[:3])  # 从第0个开始取3个

# listInfo = [0, 1, 2, 3, 4, 5, 6]
# length = len(listInfo)
# i = 1
# while i < length:
#     i += 1
# for item in listInfo:
#     print(item)

# 增加
# append()  extend() insert()
# listInfo = [1, 2]
# listInfo2 = [3, 4]
# listInfo.append(5) # [1, 2, 5]
# listInfo.append(listInfo2) # [1, 2, [3, 4]] 整体添加
# listInfo.extend(listInfo2)  # [1, 2, 3, 4]  逐个添加
# listInfo.insert(0, 5)  # [1, 2, 3, 4]  带索引添加
# print(listInfo)

# 修改
# listInfo = [1, 2, 3]
# listInfo[0] = 3
# print(listInfo)

# 删除
# listInfo = [1, 2, 3]
# del listInfo[0]  # 干掉下标
# listInfo.pop()  # 干掉最后一个
# listInfo.remove(3)  # 干掉指定类容
# print(listInfo)

# 排序
# sort()  reverse()
# listInfo = [6, 5, 8, 1, 2, 3]
# listInfo.sort()
# listInfo.reverse()
# print(listInfo)

# 嵌套
andNumber = 0
listInfo = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]]
for item in listInfo:
    for itemSub in item:
        andNumber += itemSub
print(andNumber)
