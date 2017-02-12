/*
Manifest for controlling the services of mysql and apache
author:Kola.Balaji
*/

#Controlling the apache server

service{'httpd':
	start =>"service httpd start",
	ensure =>running,
	pattern =>/usr/sbin/httpd",
}

#Controlling the mysql services

service {'mysqld':
	start =>"service mysqld start",
	ensure =>running,
	pattern =>"/usr/bin/mysql",
}


