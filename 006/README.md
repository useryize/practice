#### 一维数组改二维

```
/**
* 将key值相等的 存在一个Array中
*/
let list = [{name: 1, text: 2},{name: 1, text: 2},{name: 2, text: 2}];
let newList = [];
list.map(item => {
  let type = {};
  newLisy.map((subItem, subIndex) => {
    type.name = subIndex.find(minItem => minItem.name === item.name);
    type.index = subIndex;
  });
  if (type.name === item.name) {
    newList[type.index].push(item);
  } else {
    newList.push(item)
  }
});




```
