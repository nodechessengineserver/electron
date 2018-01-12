// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

module.exports=exports={}

exports.showInfo=function (){
	let content=`
		We are using Node.js ${process.versions.node}
		Chromium ${process.versions.chrome},
		and Electron ${process.versions.electron}.
	`;
	document.getElementById("sysinfo").innerHTML=content;
}