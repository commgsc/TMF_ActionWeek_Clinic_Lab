# MongoDB:
MongoDB is an open-source document database that provides high performance, high availability, and automatic scaling.
A record in MongoDB is a document, which is a data structure composed of field and value pairs. MongoDB documents are similar to JSON objects. The values of fields may include other documents, arrays, and arrays of documents.

The advantages of using documents are:
a) Documents (i.e. objects) correspond to native data types in many programming languages.
b) Embedded documents and arrays reduce need for expensive joins.
c) Dynamic schema supports fluent polymorphism.

In our lab, we are using mongodb deployed on IBM Kubernetes cluster. To re-implement TMForum swagger files and create APIs using IBM API Connect, mongodb is used as the database. All API's implemented use and create new collections in the database. The collections store documents for respective objects posted from different APIs.
These collections data in JSON format is used in IBM functions to process and display it on UI.
