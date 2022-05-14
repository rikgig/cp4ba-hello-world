# Postman BAW

For BAW Process API, Import following files: 
* Hello BAW.postman_collection.json
* Hello BAW baby-step.postman_environment.json
* Hello BAW hello-pro.postman_environment.json

Theses files contains API request to the BAW process Rest API

* Set the **baseURL** to your cluster URL  add **/bpm** after your cluster name
* Set the **sbaseURL** to your cluster URL add **/bpm** after your cluster name
* Set the **model** to your workflow process name 
* Set the **container** to your workflow process container name

### Here how-to get your cluster URL for BAW
from the file your OCP cluster select project **cp4ba** , click on you **Workload>ConfigMaps**
find the access-info section take the value of the **Business Automation Workflow External base URL:**

**bastudio-access-info**
```
Cloudpak Dashboard: https://cpd-cp4ba.itzroks-6630025ezu-p4vtr6-4b4a324f027aea19c5cbc0c3275c4656-0000.us-south.containers.appdomain.cloud
Business Automation Workplace: https://cpd-cp4ba.itzroks-6630025ezu-p4vtr6-4b4a324f027aea19c5cbc0c3275c4656-0000.us-south.containers.appdomain.cloud/bas/Workplace
Business Automation Workflow External base URL: https://cpd-cp4ba.itzroks-6630025ezu-p4vtr6-4b4a324f027aea19c5cbc0c3275c4656-0000.us-south.containers.appdomain.cloud/bas/
Business Automation Process Portal: https://cpd-cp4ba.itzroks-6630025ezu-p4vtr6-4b4a324f027aea19c5cbc0c3275c4656-0000.us-south.containers.appdomain.cloud/bas/ProcessPortal
Business Automation Case Client: https://cpd-cp4ba.itzroks-6630025ezu-p4vtr6-4b4a324f027aea19c5cbc0c3275c4656-0000.us-south.containers.appdomain.cloud/icn/navigator/?desktop=baw

User credentials:
  username: cp4admin
  password: password
```

For BAC Case Manager Protocols, Import following files: 
* Hello BAW.postman_collection.json
* Hello BAW hello-case.postman_environment.json

### Case Management Applications
From the file your OCP cluster select project **cp4ba**
Click on you **Workload>ConfigMaps**
find the _*-cp4ba-access-info_ Config Map
Look for section **bastudio-access-info**
Take the value of the **Cloudpak Dashboard** to access Business Automation Studio.
Once defined and deployed at least once use the value of the **Business Automation Case Client** to access the cases.

Open following URL
````
Cloudpak Dashboard: https://cpd-cp4ba.itzroks-6630025ezu-p4vtr6-4b4a324f027aea19c5cbc0c3275c4656-0000.us-south.containers.appdomain.cloud

Business Automation Case Client: https://cpd-cp4ba.itzroks-6630025ezu-p4vtr6-4b4a324f027aea19c5cbc0c3275c4656-0000.us-south.containers.appdomain.cloud/icn/navigator/?desktop=baw

User credentials:
  username: cp4admin
  password: password
```

### Case URL Rest services

* Set the **baseURL** to your cluster URL  add **bas/CaseManager** after your cluster name

````
Cloudpak Dashboard: https://cpd-cp4ba.itzroks-6630025ezu-p4vtr6-4b4a324f027aea19c5cbc0c3275c4656-0000.us-south.containers.appdomain.cloud

User credentials:
  username: cp4admin
  password: password
```

For every URL set Basic Authorization with this name/password

### GET method for the list of document classes resource
### GET method for the particular solution resource
Set path parameter **solutionName** accordingly
Set query  parameter **targetObjectStore** accordingly

Docs:
https://www.ibm.com/docs/en/case-manager/5.3.3?topic=applications-developing-case-management-rest-protocols


