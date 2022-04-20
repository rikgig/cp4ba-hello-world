# Documentation for Hello-World
 
 Deploy the application MySQL on the OpenShift cluster
 
 Base on this [link](https://developer.ibm.com/tutorials/mysql-database-on-openshift-link-to-microservices-app/)
 
Create the configmap, config-temp from the local file config.json
```
 oc create cm config-hello-rest --from-file ./src/config.json
```
Set the volume to deployment/hello-rest to mount /opt/app-root/src to the config-temp configmap
```
oc set volume deployment/hello-rest --add -t configmap  --mount-path=/opt/app-root/src --name myvol --configmap-name config-hello-rest
```
