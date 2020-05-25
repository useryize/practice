#### ES2020 已定稿！赶紧上手实践一下吧（真实场景例子）

###### 可选链式操作符

> 对我个人来说，这是ES2020最令人兴奋的特点之一，我已近编写了很多程序，这些程序将会从这个新特性中获益匪浅。      
可选链操作符允许您安全的访问对象的深嵌套属性，而不必检查每个属性是否存在。让我们看看这个特性对我们有什么帮助。


>  拥有可选链操作符之前

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

> 正如您在上面看到的，必须检查每个级别中是否存在该属性,已避免出现无法读取的未定义属性 “po”的错误。 随着嵌套级别的增加，手动检查的属性数量也会增加。这以为这我们必须检查每个级别，已确保不会在遇到未定义或空对象是崩溃。



> 拥有可选链式操作符之后

> 随着可选链式操作符的引用，我们前端的工作变得容易了。通过简单的使用可选链式操作符 ' ?. ' 我们可以访问身深嵌套的对象，而不必要检查未定义或空对象。

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
  if (obj?.adds?.add1?.add2?.add3?.name) {
    console.log(obj.adds.add1.add2.add3.name)
  }
  
  
```
