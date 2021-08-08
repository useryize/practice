info = {'name': 13, 'color': 1346, 'a': 1}
print(info)

# 增
info['id'] = 465

# 刪
del info['id']
# info.clear()  # 清空

# 改
info['name'] = '改'

# 查
getInfo = info.get('name')
getInfoId = info.get('id', 546)  # 默認值

# keys() values() items()

infokey = info.keys()
infovalue = info.values()
infoitems = info.items()

for key, valus in infoitems:
    print(key, valus)

print(info)
print(infokey)
print(infovalue)
print(infoitems)
