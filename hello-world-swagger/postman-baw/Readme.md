# Postman BAW

Import the file 
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
Cloudpak Dashboard: https://cpd-cp4ba.itzroks-6630025ezu-xyl3xy-4b4a324f027aea19c5cbc0c3275c4656-0000.us-south.containers.appdomain.cloud
Business Automation Workplace: https://cpd-cp4ba.itzroks-6630025ezu-xyl3xy-4b4a324f027aea19c5cbc0c3275c4656-0000.us-south.containers.appdomain.cloud/bas/Workplace
Business Automation Workflow External base URL: https://cpd-cp4ba.itzroks-6630025ezu-xyl3xy-4b4a324f027aea19c5cbc0c3275c4656-0000.us-south.containers.appdomain.cloud/bas/
Business Automation Process Portal: https://cpd-cp4ba.itzroks-6630025ezu-xyl3xy-4b4a324f027aea19c5cbc0c3275c4656-0000.us-south.containers.appdomain.cloud/bas/ProcessPortal
Business Automation Case Client: https://cpd-cp4ba.itzroks-6630025ezu-xyl3xy-4b4a324f027aea19c5cbc0c3275c4656-0000.us-south.containers.appdomain.cloud/icn/navigator/?desktop=baw

User credentials:
  username: cp4admin
  password: mypassword
```
