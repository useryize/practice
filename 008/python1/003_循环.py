mapList = [1, 2, 3, 4, 5, 6]

# 获取列表的长度 len()
length = len(mapList)
print('mapList长度为： %d' % length)

# while
i = 0
while i < length:
    print('while: %d' % mapList[i])
    i += 1

# for
for (item) in mapList:
    print('for: %d' % item)
