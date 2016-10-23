Address Book for Angular2 and Ionic
===================================

This repo contains a sample address book application for Angular2 and Ionic that demonstrates how to use the DreamFactory REST API. It includes new user registration, user login, and CRUD for related tables.

#Getting a DreamFactory instance

To download and install DreamFactory, follow the instructions [here](http://wiki.dreamfactory.com/DreamFactory/Installation). Alternatively, you can create a [free hosted developer account](http://www.dreamfactory.com) at www.dreamfactory.com if you don't want to install DreamFactory locally.

#Configuring your DreamFactory instance to run the app

- Enable [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) for development purposes.
    - In the admin console, navigate to the Config tab and click on CORS in the left sidebar.
    - Click Add.
    - Set Origin, Paths, and Headers to *.
    - Set Max Age to 0.
    - Allow all HTTP verbs and check the Enabled box.
    - Click update when you are done.
    - More info on setting up CORS is available [here](http://wiki.dreamfactory.com/DreamFactory/Tutorials/Enabling_CORS_Access).

- Create a default role for new users and enable open registration
    - In the admin console, click the Roles tab then click Create in the left sidebar.
    - Enter a name for the role and check the Active box.
    - Go to the Access tab.
    - Add a new entry under Service Access (you can make it more restrictive later).
        - set Service = All
        - set Component = *
        - check all HTTP verbs under Access
        - set Requester = API
    - Click Create Role.
    - Click the Services tab, then edit the user service. Go to Config and enable Allow Open Registration.
    - Set the Open Reg Role Id to the name of the role you just created.
    - Make sure Open Reg Email Service Id is blank, so that new users can register without email confirmation.
    - Save changes.

- Make sure you have a SQL database service named 'db'. Most DreamFactory instances have a default 'db' service for SQLite. You can add one by going to the Services tab in the admin console and creating a new SQLite service. Make sure you set the name to 'db'.

- Import the package file for the app.
    - From the Apps tab in the admin console, click Import and click 'Address Book for Ionic' in the list of sample apps. The Address Book package contains the application description, schemas, and sample data.
    - Leave storage service and folder blank. You will be running the app locally on your machine so no file storage is required.
    - Click the Import button. If successful, your app will appear on the Apps tab. You may have to refresh the page to see your new app in the list.

- Edit your app API key and instance URL
    - Edit app/config/constants.ts and set DREAMFACTORY_API_KEY to the key for your new app. The API key is shown on the app details in the Apps tab of the admin console. Set DREAMFACTORY_INSTANCE_URL to the full URL for your DreamFactory instance.

#How to run the project on your local machine

```bash
git clone https://github.com/dreamfactorysoftware/ionic-sdk.git
cd ionic-sdk
# paste your DREAMFACTORY_INSTANCE_URL and DREAMFACTORY_API_KEY in app/config/config.ts
npm install -g grunt-npm-install
npm install -g gulp-cli
npm install
npm install -g ionic@beta (reference: http://ionicframework.com/docs/v2/getting-started/installation/)
npm install -g cordova (optional)
ionic serve -l
```

Note for OS X: Tested with node 4.6.0 and npm 3.10.7. npm 3.10.8 has a bug that shows up as 'uid must be an unsigned int'.

#Additional Resources

More detailed information on the DreamFactory REST API is available [here](http://wiki.dreamfactory.com/DreamFactory/API).

The live API documentation included in the admin console is a great way to learn how the DreamFactory REST API works.
"# ionic2-sdk" 
