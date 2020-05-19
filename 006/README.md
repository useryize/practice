#### 一维数组改二维

```js
/**
* 将key值相等的 存在一个Array中
*/
let list = [{name: 1, text: 2},{name: 1, text: 2},{name: 2, text: 2}];
let newList = [];
list.map(item => {
  let type = {};
  newList.map((subItem, subIndex) => {
    type.obj = subIndex.find(minItem => minItem.name === item.name);
    type.index = subIndex;
  });
  if (type.obj && type.obj.name === item.name) {
    newList[type.index].push(item);
  } else {
    newList.push([item])
  }
});




```
