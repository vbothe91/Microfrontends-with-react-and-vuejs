# Microfrontends demo application
As a part of this demo we have created four diffrent applications and they are working on diffrent ports as below
1. components (This is first remote/child application and will run on port 3001)
2. to-do-list (This is second remote/child application and will run on port 3002)
3. Vue-app (This is third remote/child application created in vue.js and will run on port 3003).
4. MFApp (This is micro frontends host application and will run on port 3000).

We are using components from all the three remotes applications in host application.

## Steps to run
1. First go to components folder, do npm install and then npm start (App will open in port 3001).
2. Now go to to-do-list folder in another tab and do npm install and then npm start (App will open in port 3002).
3. Now go to vue-app folder in another tab and do npm install and then npm start (App will open in port 3003)
4. Now go to MFApp folder in fourth tab and do npm install and then npm start (App will open in port 3000).
5. You will see components from all the three child applications are used in host application.

### Demo link urls

