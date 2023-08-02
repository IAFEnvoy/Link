const gen=()=>{
  let url=document.getElementById("url").value;
  let base64=window.btoa(url);
  document.getElementById("ans").innerText=`转码后的URL为：https://link.iafenvoy.net/?${base64}`;
}
