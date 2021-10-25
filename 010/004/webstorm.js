decodeURI 解析 后端返回的 res.headers['content-disposition'] 里面名字（URL编码的）
res.headers['content-disposition'] 这个在 fixfox浏览器 会有一个 *号 比如 filename*=，所以用 split('=')，而不用 split('filename=')，并跟后端约定好先filename信息放在 res.headers['content-disposition']  最后一个 = 号，然后前端也是取最后一个。
传参的时候记得要带上{responseType: 'blob'}
exportExcelStream('post', TestService.testApi(this.bodyParams)) // 调用
/**
 * 文件流方式下载
 * @param typeReq {String} 请求方式
 * @param paramsReq {Array} 解构后axios需要的参数列表
 */
function exportExcelStream (typeReq, paramsReq) {
  Ajax.$http[typeReq](...paramsReq, {responseType: 'blob'}).then((res) => {
    const content = res
    const blob = new Blob([content.data], {type: 'application/vnd.ms-excel;charset=utf-8'})
    const fileNameSplit = res.headers['content-disposition'].split('=')
    const fileName = decodeURI(fileNameSplit[fileNameSplit.length - 1]) // 跟后端约定好最后一个值为fileName字段
    if ('download' in document.createElement('a')) { // 非IE下载
      const elink = document.createElement('a')
      elink.download = fileName
      elink.style.display = 'none'
      elink.href = URL.createObjectURL(blob)
      document.body.appendChild(elink)
      elink.click()
      URL.revokeObjectURL(elink.href) // 释放 URL对象
      document.body.removeChild(elink)
    } else { // IE10+下载
      navigator.msSaveBlob(blob, fileName)
    }
    // if (window.navigator && window.navigator.msSaveOrOpenBlob) { // 也可这么判断IE10+
    //    window.navigator.msSaveOrOpenBlob(new Blob([data]), fileName)
    // }
  }).catch((err) => {
  })
}
发布于2020-09-16
著作权归作者所有
相关推荐更多
web前端js显示后台接口pdf二进制流文件
q382481322 0 下载
后端返回二进制文件流，前端如何下载文件
weixin_43487782 8624 阅读  1 评论
最新发布 前端根据后端返回的文件流实现下载功能
lff18277233091 758 阅读  0 评论
a 文件下载 后端返回文件流格式
xc_buxiangzhangda 1120 阅读  0 评论
热门推荐 前端js/vue下载后台传过来的流文件（如excel）并设置下载文件名
AiHuanhuan110 1万+ 阅读  7 评论
前端处理文件流下载文件超级超级超级简单的方法
qq_39974331 1304 阅读  1 评论
文件输入输出流的使用,后端返回给前端文件流的形式,由...
如果是需要返回给前端文件流的形式,然后前端来实现文件的下载使用如下方式: 这里需要注意的点是:接口无返回类型void @PostMapping("/downFile")@Transactional(rollbackFor=Exception.class)@ApiOperation(value="下载文件",notes="下载文...
vue前端下载后端返回的文件流_songjuntao8的专栏
vue前端下载后端返回的文件流 axios({ method: 'get', url: url, responseType: 'blob' }).then((res) => { console.log(res) if (!res) { return } let blob = new Blob([res.data], {...
前端文件下载,后端返回文件流方式,兼容ie浏览器_qq_427...
// 文件下载,后端返回文件流方式,兼容ie浏览器 constfileDownload= (fileName, params) => { showLoading();//出现load动画 Api.post(xxxfiledownloadurl, { params, responseType:'blob', ...
vue接收后端返回的文件流,下载文件(post和get)。前端的...
后台返回一个File类型(文件流、byte)的数据给前端。 前端请求的时候(建议小文件可以使用blob。大文件使用的时候,在获取文件流需要时间,等待时间会很久) 1、设置返回类型responseType,不管你用post\get\ect都要设置,还有post请求要设置cont...
【问题解决】后端如何以文件流的形式返回本地资源给前...
后端以文件流的形式返回本地资源//文件地址String path = "PDFpath";File file = new File(PDFpath);//读取生成的PDF文件InputStream inputStream;OutputStream outputStream;响应设置 重制输出流try { if (file.exists()){ input...
后端返回文件流,前端处理进行文件下载_urnotlynley的博...
后端返回文件流,前端需要对返回的文件流处理进行文件下载 先是发送请求的时候声明返回blob格式 url: '',(你的地址) method: 'post', data: params, responseType: 'blob' (这里很重要) 1 2 3 4 然后将返回的数据传给downLoad...
请求二进制文件数据流下载文件携带token带参数
qq_32615575 1138 阅读  0 评论
文件流下载
weixin_42995876 1104 阅读  0 评论
c++:母牛生小母牛问题 （类方法）
YC5518 0 下载
c++:母牛生小母牛问题（递归）
YC5518 0 下载
