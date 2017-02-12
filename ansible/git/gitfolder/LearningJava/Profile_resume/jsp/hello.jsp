<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Hello</title>
</head>
<body>
<%
String Ur_Ipaddress =request.getRemoteAddr();
String Ur_remoteuser = request.getRemoteUser();
int Ur_port = request.getRemotePort();
out.println("<br> Your IPAddress :"+Ur_Ipaddress);
out.println("<br> Your Ur_remoteuser :"+Ur_remoteuser);
out.println("<br> Your Ur_port :"+Ur_port);

String userAgent=request.getHeader("user-agent");
String browser="none";

out.println("Browser:"+userAgent);
if(userAgent!="null"){
	
	if(userAgent.indexOf("MSIE")>-1){
		browser="Microsoft Explorer";
	}else if(userAgent.indexOf("Mozilla")>-1){
		browser = "Mozilla Firefox";
	}else if(userAgent.indexOf("chrome")>-1){
		browser = "Google Chrome";
	}else if(userAgent.indexOf("opera")>-1){
		browser ="opera";
	}
	out.println("Browser:"+browser);
}

%>
</body>
</html>