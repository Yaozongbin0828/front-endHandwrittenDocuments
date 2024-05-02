/** 这段代码定义了一个名为 `getFileListSize` 的箭头函数，它似乎旨在计算文件列表的总大小并将其格式化为可读的字符串。然而，代码中存在一些问题。

首先，`fileListSize` 被定义为一个数字，然后又尝试将其视为一个对象（具有 `value` 属性），这是不正确的。

另外，`fileListSize.value` 是一个数字，不具有 `forEach` 方法，因此会导致错误。

最后，函数中的 `fileListSizeStr` 也没有被定义。

如果您想要计算文件列表的总大小并格式化为可读的字符串，可以尝试以下修改：*/

const getFileListSize = (fileList) => {
  let totalSize = 0;
  fileList.forEach((item) => {
    totalSize += item.size;
  });

  if (totalSize < 1024) {
    return totalSize + "B";
  } else if (totalSize < 1024 * 1024) {
    return (totalSize / 1024).toFixed(2) + "KB";
  } else if (totalSize < 1024 * 1024 * 1024) {
    return (totalSize / 1024 / 1024).toFixed(2) + "MB";
  } else {
    return (totalSize / 1024 / 1024 / 1024).toFixed(2) + "GB";
  }
};


const getFileListSize1 = () => {
  fileListSize.value = 0;
  fileListSize.value.forEach((item) => {
    fileListSize.value += item.file.size;
  });

  if (fileListSize.value < 1024) {
    fileListSizeStr.value = fileListSize.value + "B";
  } else if (fileListSize.value < 1024 * 1024) {
    fileListSizeStr.value = (fileListSize.value / 1024).toFixed(2) + "KB";
  } else if (fileListSize.value < 1024 * 1024 * 1024) {
    fileListSizeStr.value =
      (fileListSize.value / 1024 / 1024 / 1024).toFixed(2) + "GB";
  } else {
    fileListSizeStr.value =
      (fileListSize.value / 1024 / 1024 / 1024 / 1024).toFixed(2) + "GB";
  }
};
