#### ES2020 已定稿！赶紧上手实践一下吧（真实场景例子）

###### 可选链式操作符

> 对我个人来说，这是ES2020最令人兴奋的特点之一，我已近编写了很多程序，这些程序将会从这个新特性中获益匪浅。      
可选链操作符允许您安全的访问对象的深嵌套属性，而不必检查每个属性是否存在。让我们看看这个特性对我们有什么帮助。


-  拥有可选链操作符之前

```js
  
  let obj = {
    name: "name",
    age: 18,
    adds: {
      add1: {
        add2: {
          add3: {
            name: "adds"
          }
        }
      }
    }
  }
  if (obj && obj.adds && obj.adds.add1 && obj.adds.add1.add2 && obj.adds.add1.add2.add3 && obj.adds.add1.add2.add3.name) {
    console.log(obj.adds.add1.add2.add3.name)
  }
  
  
```

