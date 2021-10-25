/**
 * 导出文件工具方法
 * 需要将返回的文件流对象直接传入,
 * 如果没有数据， 返回一个对象
 */
export let exportFile = (data, name = 'name') => {
	return data.blob().then((blob) => {
		// js无法判断文件刘是否存在，只能通过类型
		// 文件流没有数据的时候转码是/html结尾，我这个直接返回一个对象，方便调用的时候处理
		if (blob.type.endsWith('/html')) {
			return {
				msg: "暂无数据"
			}
		}
		let downloadUrl = window.URL.createObjectURL(blob);
		let anchor = document.createElement("a");
		let filename = data.headers.get('Content-Disposition');
		anchor.href = downloadUrl;
		anchor.download = filename.replace('filename=', '');
		anchor.click();
		window.URL.revokeObjectURL(downloadUrl);
	})
}

// 调用文件导出方法
async function export () {
    let res = await axios.post('http://xxx.com', {})
    let err = await exportFile(res.data, '推送日志')
	if (err) message.warning(err.msg)
}

export()
