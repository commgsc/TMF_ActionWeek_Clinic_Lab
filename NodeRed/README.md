# NODE-RED
Node-RED is a powerful tool for building Internet of Things (IoT) applications with a focus on simplifying the ‘wiring together’ of code blocks to carry out tasks. It uses a visual programming approach that allows developers to connect predefined code blocks, known as ‘nodes’, together to perform a task. The connected nodes, usually a combination of input nodes, processing nodes and output nodes, when wired together, make up a ‘flows’.

Node-RED provides a browser-based flow editor, which can be used to create JavaScript functions. Elements of applications can be saved or shared for re-use. The runtime is built on Node.js. The flows created in Node-RED are stored using JSON.

In our lab, we will design application flow using node-red flow editor. Our application uses a http request to call watson conversation with user input. In our flow, we will use templates for http requests, HTML, JavaScript, function nodes for sending IBM functions credentials, node for watson assistant bot (with workspace and authorization credentials) and http responses. 
Once the request is made, we will use the javascript node in the flow to call watson assistant endpoint with user input, which calls IBM functions to create response. The response sent from watson assistant is processed by javascript and then displayed on the HTML. 
