<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>js文件间互换</title>
</head>
<body>
   <input type="file" id="file"/>
   <button onclick="down()">文件下载</button>
</body>
</html>
<script>
   var file = document.getElementById('file')
   // 模拟上传的文件FromData数据
   var fileData 
   file.onchange=(e)=>{
      // 
      fileData = e.target.files[0]
      console.log(fileData)
   }
 
   down = ()=>{
      downFile(fileData)
   }
   // 文件流转换下载
   downFile = (data)=>{
      if (!data) {
         alert('没有上传')
         return
      }
      // 转换下载数据的url
      let url = window.URL.createObjectURL(new Blob([data]))
      // 创建a标签
      let a = document.createElement('a')
      a.style.display = 'none'
      a.href = url
      a.setAttribute('download', data.name)
      document.body.appendChild(a)
      a.click();
      a.remove();
   };
</script>
