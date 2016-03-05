#continuous Integration Using puppet

Files used in CD 
-------------------------

1.build.xml
2.CDeployment.pp
3.RollBack.pp
4.service.pp

Description
————————————————————————-
1.build.xml 

Description:
build.xml is the ant script file to create the war artifect file with build number.


2.CDDeployment.pp

Description:
CDDeployment file is a manifest file to do the continous deployment.

Features in this file:
---------------------------
1.Creates the timestamp folder to save the existing application backup in Nexus folder.
2.Shutting down the server
3.Taking the backup of existing artifect (WAR) and saving in Nexus repo
4.Deleting the WAR and applicaiton folder in the tomcat deployment directory.
5.Taking the WAR from git repo and placing at tomcat server....
6.Starting the tomcat server




