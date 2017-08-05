# shop cms

### setting up dev environment
#### create .env file
Create a .env file inside project directory. You can directly copy .env.example.
Set following variables to run on locally.

```
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
API_ENDPOINT=
APP_TITLE=
APP_CURRENCY=
TEMPLATE=default
BASE_PATH=''
```

#### set up nodejs
install nodejs, use latest stable version.
You can use [nvm](https://github.com/creationix/nvm) to install latest stable version.

#### install local dependencies
`npm install`

#### run the application
`npm start`

### deploying application
Application deployment is heroku compatible 

## Integrate as a widget inside another website
You have to define global API_ENDPOINT, APP_TITLE and BASE_PATH vars and add next lines to your html page

```
<div id="root"></div>
<script type="text/javascript" src="{::BUILD_URL::}/build/webpack/vendor.js"></script> 
<script type="text/javascript" src="{::BUILD_URL::}/build/webpack/bundle.js"></script>
<link rel="stylesheet" type="text/css" href="{::BUILD_URL::}/build/webpack/bundle.css">
```

### Example of index.html file inside /external/ folder:
```
<html> 
 <head>  
  <title>Title</title>
  <script>
    var API_ENDPOINT = 'http://13.54.216.163:8080/';
    var APP_TITLE = 'Widget';
    var BASE_PATH='/external/';
  </script>
 </head> 
 <body> 
    <h1>Website content</h1>
    <div id="root"></div>
    <script type="text/javascript" src="{::BUILD_URL::}/build/webpack/vendor.js"></script> 
    <script type="text/javascript" src="{::BUILD_URL::}/build/webpack/bundle.js"></script>
    <link rel="stylesheet" type="text/css" href="{::BUILD_URL::}/build/webpack/bundle.css">
 </body> 
</html>
```
### Notice
All requests to /BASE_PATH/* in reality should call index.html inside this folder. For example /external/products/12345
