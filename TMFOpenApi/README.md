OpenAPI:
OpenAPI is a specification for describing REST APIs. With OpenAPI, instead of XML, you have set of JSON objects, with a specific schema that defines their naming, order, and contents. This JSON file (often expressed in YAML instead of JSON) describes each part of your API. By describing your API in a standard format, publishing tools can programmatically ingest the information about your API and display each component in a stylized, interactive display.

An OpenAPI file allows you to describe your entire API, including:
a) Available endpoints (/users) and operations on each endpoint (GET /users, POST /users)
b) Operation parameters Input and output for each operation
c) Authentication methods
d) Contact information, license, terms of use and other information.

API specifications can be written in YAML or JSON. The format is easy to learn and readable to both humans and machines. The ability of APIs to describe their own structure is the root of all awesomeness in OpenAPI. Once written, an OpenAPI specification and Swagger tools can drive your API development further in various ways.

How it works in our lab:
In our lab, TMForum API specification files are used to re-implement them and create endpoints using IBM APIConnect. In this process, we will re-use the available endpoints, operations and parameters from TMFourm swagger files and then replicate these endpoints using IBM APIConnect. Thus, we will be able to change or enhance the existing API.