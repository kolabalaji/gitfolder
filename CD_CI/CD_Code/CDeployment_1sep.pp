/*
author:balaji.kola@gmail.com
Program:Manifest file for Continous Deployment
*/

#Generating the time_stamp format for backup folder

$timestamp=generate('/bin/date','+%Y%m%d%H%M%S%p')
 
#$versionwar=generate('/bin/ls','/home/admin/DiamondSaleApp/Diamonds/dist/')

#Running the ant script build.xml for creating the version build.

exec{"*********Running the ant script for Creating WAR **********":
	cmd =>"/home/admin/puppet/DiamondSaleApp/Diamonds/",
	path =>"/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:",
	command =>"ant -f build.xml",	
}


#Creating the timestamp directory

file{"/home/admin/puppet/NexusRepo/${timestamp}/":
	ensure => directory,
	owner =>admin,
	group =>admin,
}

#Shutting down the Tomcat Server

exec{"************Tomcat server shutting down***********":
	cmd =>"/home/admin/puppet/sotwares/apache-tomcat7.0.41/bin/",
	path =>"/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:",
	command =>"sh shutdown.sh",
}

#Taking backup of existing application into Nexusrepo before deploying..........

file{"/home/admin/puppet/NexusRepo/${timestamp}/DiamondSale_V34.war":
	mode => '0777',
	owner =>root,
	group =>root,
	source =>/home/admin/puppet/softwares/apache-tomcat-7.0.42/webapps/DiamondSale_V34.war",
}

#Deleting the WAR and application folder from the tomcat  deployment directory.

exec {"******** Deleting WAR and application folder from the deployment directory *******":
	cmd =>"/home/admin/puppet/sotwares/apache-tomcat-7.0.42/webapps/",
	path =>"/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:"
	command =>"rm -rf DiamondSale_V34.war DiamondSale_V34"
}

#Taking the WAR  from GIT repo and placing at Tomcat server.........

file{"/home/admin/puppet/sotwares/apache-tomcat-7.0.42/webapps/DiamondSale_V35.war":
	mode =>'0777',
	owner =>root,
	group =>root,
	source =>"/home/admin/DiamondSaleApp/diamonds/dist/DiamondSale_V35.war"
}

#Starting the tomcat server........

exec{"***************Tomcat starting up***************:
	cmd =>"/home/admin/puppet/sotwares/apache-tomcat7.0.41/bin/",
	path =>"/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:",
	command =>"sh startup.sh",
}


}
