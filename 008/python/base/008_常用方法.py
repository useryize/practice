# + * in not in

# +
print(('+' * 20).center(50, '-'))
print('13' + '46')
print([132] + [465])
print((1, 2, 3) + (2, 3, 4))
# print({'a': 1} + {'b': 1}) # error

# *
print(('*' * 20).center(50, '-'))
print('#' * 50)
print([1, 2, 3, 4, 5] * 5)
print((1, 2, 3, 4, 5) * 5)
# print({'a': 1} * 5)  # error

# in  not in
print(('in' * 10).center(50, '-'))
print('a' in 'abc')  # true
print(1 in [1, 2, 3])  # true
print(1 in (1, 2, 3))  # true
print('name' in {'name': 1})  # true
print(1 not in [2, 3, 4])  # true

# len() max() min()
print(len([1, 2, 3, 4, 5]))
print(max(1,2,3,4,5))
print(min(1,2,3,4,5))
