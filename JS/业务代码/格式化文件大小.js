const formatFileSize=(bytes)=>{
  if(bytes === 0)return "0 Bytes":
  const k= 1024;
  const sizes =["Bytes","KB","MB","GB","TB"];
  const i= Math.floor(x:Math.log(bytes)/ Math.log(k));
  return parseFloat((bytes / Math,pow(k, i)),toFixed( fractionDigits: 2))+""+ sizes[il;
};
