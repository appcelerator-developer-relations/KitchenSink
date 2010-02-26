function SOAPClientParameters()
{var _pl=[];this.add=function(name,value)
{_pl[name]=value;return this;};this.toXml=function()
{var xml="";for(var p in _pl)
{if(typeof(_pl[p])!="function")
{xml+="<"+p+">"+_pl[p].toString().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</"+p+">";}}
return xml;};}
function SOAPClient(){}
SOAPClient.invoke=function(url,method,parameters,async,callback)
{if(async)
{SOAPClient._loadWsdl(url,method,parameters,async,callback);}
else
{return SOAPClient._loadWsdl(url,method,parameters,async,callback);}
return 0;};SOAPClient_cacheWsdl=[];SOAPClient._loadWsdl=function(url,method,parameters,async,callback)
{var wsdl=SOAPClient_cacheWsdl[url];if(wsdl+""!=""&&wsdl+""!="undefined")
{return SOAPClient._sendSoapRequest(url,method,parameters,async,callback,wsdl);}
var xmlHttp=SOAPClient._getXmlHttp();xmlHttp.open("GET",url+"?wsdl",async);if(async)
{xmlHttp.onload=function()
{SOAPClient._onLoadWsdl(url,method,parameters,async,callback,xmlHttp);};}
xmlHttp.send(null);if(!async)
{return SOAPClient._onLoadWsdl(url,method,parameters,async,callback,xmlHttp);}};SOAPClient._onLoadWsdl=function(url,method,parameters,async,callback,req)
{var wsdl=req.responseXML;SOAPClient_cacheWsdl[url]=wsdl;return SOAPClient._sendSoapRequest(url,method,parameters,async,callback,wsdl);};SOAPClient._sendSoapRequest=function(url,method,parameters,async,callback,wsdl)
{var ns=(wsdl.documentElement.attributes["targetNamespace"]+""=="undefined")?wsdl.documentElement.attributes.getNamedItem("targetNamespace").nodeValue:wsdl.documentElement.attributes["targetNamespace"].value;var sr="<?xml version=\"1.0\" encoding=\"utf-8\"?>"+"<soap:Envelope "+"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" "+"xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" "+"xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">"+"<soap:Body>"+"<"+method+" xmlns=\""+ns+"\">"+
parameters.toXml()+"</"+method+"></soap:Body></soap:Envelope>";var xmlHttp=SOAPClient._getXmlHttp();xmlHttp.open("POST",url,async);var soapaction=((ns.lastIndexOf("/")!=ns.length-1)?ns+"/":ns)+method;xmlHttp.setRequestHeader("SOAPAction",soapaction);xmlHttp.setRequestHeader("Content-Type","text/xml; charset=utf-8");if(async)
{xmlHttp.onload=function()
{SOAPClient._onSendSoapRequest(method,async,callback,wsdl,xmlHttp);};}
xmlHttp.send(sr);if(!async)
{return SOAPClient._onSendSoapRequest(method,async,callback,wsdl,xmlHttp);}};SOAPClient._onSendSoapRequest=function(method,async,callback,wsdl,req)
{var o=null;var nd=SOAPClient._getElementsByTagName(req.responseXML,method+"Result");if(nd.length==0)
{if(req.responseXML.getElementsByTagName("faultcode").length>0)
{throw new Error(500,req.responseXML.getElementsByTagName("faultstring")[0].childNodes[0].nodeValue);}}
else
{o=SOAPClient._soapresult2object(nd[0],wsdl);}
if(callback)
{callback(o,req.responseXML);}
if(!async)
{return o;}};SOAPClient._getElementsByTagName=function(document,tagName)
{try
{return document.selectNodes(".//*[local-name()=\""+tagName+"\"]");}
catch(ex){}
return document.getElementsByTagName(tagName);};SOAPClient._soapresult2object=function(node,wsdl)
{return SOAPClient._node2object(node,wsdl);};SOAPClient._node2object=function(node,wsdl)
{if(node==null)
{return null;}
if(node.nodeType==3||node.nodeType==4)
{return SOAPClient._extractValue(node,wsdl);}
if(node.childNodes.length==1&&(node.childNodes[0].nodeType==3||node.childNodes[0].nodeType==4))
{return SOAPClient._node2object(node.childNodes[0],wsdl);}
var isarray=SOAPClient._getTypeFromWsdl(node.nodeName,wsdl).toLowerCase().indexOf("arrayof")!=-1;if(!isarray)
{var obj=null;if(node.hasChildNodes())
{obj={};}
for(var i=0;i<node.childNodes.length;i++)
{var p=SOAPClient._node2object(node.childNodes[i],wsdl);obj[node.childNodes[i].nodeName]=p;}
return obj;}
else
{var l=[];for(var b=0;b<node.childNodes.length;b++)
{l[l.length]=SOAPClient._node2object(node.childNodes[b],wsdl);}
return l;}
return null;};SOAPClient._extractValue=function(node,wsdl)
{var value=node.nodeValue;switch(SOAPClient._getTypeFromWsdl(node.parentNode.nodeName,wsdl).toLowerCase())
{case"s:boolean":return value+""=="true";case"s:int":case"s:long":return(value!=null)?parseInt(value+"",10):0;case"s:double":return(value!=null)?parseFloat(value+""):0;case"s:datetime":if(value==null)
{return null;}
else
{value=value+"";value=value.substring(0,value.lastIndexOf("."));value=value.replace(/T/gi," ");value=value.replace(/-/gi,"/");var d=new Date();d.setTime(Date.parse(value));return d;}
break;default:return(value!=null)?value+"":"";}};SOAPClient._getTypeFromWsdl=function(elementname,wsdl)
{var ell=wsdl.getElementsByTagName("s:element");if(ell.length==0)
{ell=wsdl.getElementsByTagName("element");}
for(var i=0;i<ell.length;i++)
{if(ell[i].attributes["name"]+""=="undefined")
{if(ell[i].attributes.getNamedItem("name")!=null&&ell[i].attributes.getNamedItem("name").nodeValue==elementname&&ell[i].attributes.getNamedItem("type")!=null)
{return ell[i].attributes.getNamedItem("type").nodeValue;}}
else
{if(ell[i].attributes["name"]!=null&&ell[i].attributes["name"].value==elementname&&ell[i].attributes["type"]!=null)
{return ell[i].attributes["type"].value;}}}
return"";};SOAPClient._getXmlHttp=function()
{return new XMLHttpRequest();};