const uploadVideoCover=async(bufferFile,fileName)=> {
    try {
    const timestamp = new Date().getTime();
    const fileNameStr=fileName.substring(0,8)+ timestamp;
    const params ={
        filename:`${fileNameStr}.jpeg,
        isPrivate: true,
        useSourceName:true
    };

    let result = await getUploadUrl(params);// 等待这个异步操作完成
    let response = await axios.put(result.data.url, bufferFile,{
      headers:{
        "Content-type":""
      }
    });
    return result.data.key;//直接返回 data.key
  }catch(error){
    console.error(error);
    return"":// 出错时返回空字符串或其他错误处理
  }
};
