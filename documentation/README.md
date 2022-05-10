# Documentation for Hello-World
 
 Deploy the application MySQL on the OpenShift cluster
 
 Base on this [link](https://developer.ibm.com/tutorials/mysql-database-on-openshift-link-to-microservices-app/)
 
Create the configmap, cm-hello-rest from the local file config.json
```
 oc create cm cm-hello-rest --from-file ./src/config.json
```
Set the volume to deployment/hello-rest to mount /opt/app-root/src to the cm-hello-rest configmap
```
oc set volume deployment/hello-rest --add -t configmap  --mount-path=/opt/app-root/src --name myvol --configmap-name cm-hello-rest
```

### Documentation Hello-world Mail

Deploy the application Hello-World-Mail on the OpenShift cluster

Git repository install - hello-world-mail

```
oc create secret generic test-secret --from-literal=SENDGRID_API_KEY="SG.HmQvd_nTSr6sa4q2GmMxow.T6Pov"
oc set env --from=secret/test-secret dc/hello-world-mail
```
or add the with the console UI - secrets to env of the deployment Config pod
