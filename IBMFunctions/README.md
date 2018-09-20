#IBM Functions
IBM Cloud Functions (based on Apache OpenWhisk) is a Function-as-a-Service (FaaS) platform which executes functions in response to incoming events.

Given Cloud Functions’s event-driven nature, it offers several benefits for user-facing applications, whereas the HTTP requests coming from the user’s browser serve as the events. Cloud Functions applications use compute capacity and billed only when they are serving user requests. Idle standby or waiting mode is nonexistent. This feature makes Cloud Functions considerably less expensive when compared to traditional containers or CloudFoundry applications. Both of which can spend most of their time idle, waiting for inbound user requests, and being billed for all that “sleeping” time.

IBM has a growing list of runtime execution options, which now includes, Java, Swift, Node, Python, PHP and  other languages of your choice using Docker.

In this application, python is used as runtime for executing incoming events. It can be changed to any other runtime accordingly. For the application, based on the users intents identified by watson assistant,multiple IBM functions are called from watson assistant. These IBM Functions would instead call various API Connect endpoints to get required TMForum data and processes the data accordingly, sends it back to watson assistant. 
