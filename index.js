const gen=()=>{
  let url=document.getElementById("url").value;
  let base64=window.btoa(url);
  document.getElementById("ans").innerText=`转码后的URL为：https://link.iafenvoy.net/?${base64}`;
}

window.onload=()=>{
  let base64=location.search;
  if(base64==null||base64=="") return;
  base64=base64.substring(1);
  let url=window.atob(base64);
  location.href=url;
}
