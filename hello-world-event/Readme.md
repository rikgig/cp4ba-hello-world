
# Documentation on Hello-world Event 

Video on youtube
[here](https://www.youtube.com/watch?v=82vjt4DT0bI)

This directory is a simple event in BAW with the UserClientAgent

Base on this diagram

![cp4ba-hello-world](../images/userclientagent.PNG)

## But for my example, I have only one event process to send event

### Process receive
![cp4ba-hello-world](../images/process-receive.PNG)

### Service send
![cp4ba-hello-world](../images/service-send-uca.PNG)

The trick here to set a correllation ID on the send event process and listen for the same correllation ID on the receiving event

### In the Services tab in the left panel select the "Service Flow dance event"

 + Create 2 variables private
    - correl1   check the default value box "Has default" set it to "123456"
    - data1     check the default value box "Has default" set it to "Your Name"

![cp4ba-hello-world](../images/event-send-variable.PNG)

### In the Processes tab in the left panel select the 
 + Create 2 variables private
    - correlID  check the default value box "Has default" set it to "123456"
    - output2   leave it has is
    - 
![cp4ba-hello-world](../images/event-receive-variable.PNG)

### Assign the UCA to both send and receive message
click on the "select" button and choose "UndercoverAgent" and if there is none create one with the "new" button

You also need to do the "Data Mapping" for both event
### Data Mapping for send event
![cp4ba-hello-world](../images/event-send-datamapping.PNG)

### Data Mapping for receive event
![cp4ba-hello-world](../images/event-receive-datamapping.PNG)
