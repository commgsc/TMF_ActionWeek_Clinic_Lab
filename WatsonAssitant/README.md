# Watson Assistant:
With the IBM Watson™ Assistant service, you can build a solution that understands natural-language input and uses machine learning to respond to customers in a way that simulates a conversation between humans.

## How watson assistant works:
1) Users interact with your application through the user interface that you implement. For example, a simple chat window or a mobile app, or even a robot with a voice interface.

2) The application sends the user input to the Watson Assistant service.
	a) The application connects to a workspace, which is a container for your dialog flow and training data.
	b) The service interprets the user input, directs the flow of the conversation and gathers information that it needs.
	c) You can connect additional Watson services to analyze user input, such as Tone Analyzer or Speech to Text.

3) The application can interact with your back-end systems based on the user's intent and additional information. For example, answer question, open tickets, update account information, or place orders. There is no limit to what you can do.

## How it works in our lab:

Watson Assistant uses predefined intents from content catalog(which can be added to workspace) as well as custom built intents and entities. Once the entities and intents are built, dialog is constructed according to user inputs. Dialog defines the conversation flow. Flow depends on the how the users inputs are interpreted by watson assistant, this inturn depends on how well watson assistant is trained. Once an intent is identified, we can add a response text or we can use the JSON editor to write paramaters and call IBM functions services to process the input and send the response.
IBM functions as a service does its processing and returns back response which can be displayed after further processing of JSON objects by using JavaScript of node-red application.

Please note that to use IBM functions services, both watson assistant and IBM function services has to be on same organization on IBM cloud.

