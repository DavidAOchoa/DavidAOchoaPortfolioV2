# My Portfolio


## MVP
> To sustain a site that demonstrates my skill in front end development.

## Milestones
- Create Routing for multiple "pages"

## Techstack
* [Angular] - The Frontend framework I used to develop the site
* [Bootstrap] - the CSS library I used to develop the site
* [Firebase] - The Backend used for hosting 

[Angular]: <https://angular.io/>
[Bootstrap]: <https://getbootstrap.com/>
[Firebase]: <https://firebase.google.com/?gclid=Cj0KCQiA2sqOBhCGARIsAPuPK0jFQYsdHMvLs1I-bzs16VzVv7pQvR8ZSqKlcsfLp1fuEJzy-UNYabYaArKiEALw_wcB&gclsrc=aw.ds>

## How I got Started in Angular
### Installing the Angular CLI
We use the Agnular CLI to create projects, generate application and library code. It is also used to perform a variety on ongoing development tasks such as testing, bundling and deployment code. 
- To install type this line in Git Bash
`npm install -g @angular/cli`

### Creating a Workspace and Initial Application
To create a new workspace and initial starter app:
1) Run the CLI command `ng new` and provide the name `my-app`, as shown here:
	`ng new my-app`
2) The `ng new` command prompts you for information about features to include in the initial app. Accept the defaults by pressing **Enter**

### Run the Application
The Angular CLI includes a server, for you to build and serve your app locally.
1) Navigate to the workspace folder, such as `my-app`
    -	This is done by `cd "workspace"` or in this case `cd my-app`
2) Run the following command: 
		`ng serve --open`

The `ng serve` command launches the server, watches your files, and rebuilds the app as you make changes to those files

The `--open` (or just `-o`) option automatically opens your browser to `http://localhost:4200/`.
		
This should generate a foundational site that looks like this:
![Angular](https://angular.io/generated/images/guide/setup-local/app-works.png)

## How to create a component in Angular
Components are the main building block for Angular applications. Each component consists of:
-	An HTML  template that decalres what renders on the page
-	A TypeScript class that defines behavior 
-	A CSS selector that defines how the component is used in a template
-	Optionally, CSS styles applied to the template

### Creating the Component
The best way to create a component is with the Angular CLI. You can also create a component manually.

#### Creating a Component using the Angular CLI

To Create a component using the Angular CLI: 
1) From a terminal window, navigate to the directory containing your application
2) Run the `ng generate component <component-name>` command, where `<component-name>` is the name of your new component

## How to Connect your Project to Firebase (Hosting)

Firstly, head to [Firebase](https://firebase.google.com/) and click on **Get Started**. This will run you through the process of creating a Firebase Project.

Afterwards head to the **Hosting** tab. Like before click **Get Started** and it will prompt you with the following:

### Install Firebase CLI
To host your site with Firebase Hosting, you need the Firebase CLI
-	Run the following [npm](https://www.npmjs.com/) command to install the CLI or update to the latest CLI verison
`$ npm install -g firebase-tools`

Once that is typed into GitBash/Terminal click next

### Initialize your project
Open a terminal window and navigate to or create a root directory for your web app
-	**Sign in to Google**
`$ firebase login`
-	Initiate your project
-	Run this command from your app's root directory:
`$ firebase init`
- During this stage it will prompt you with a bunch of questions, the most important is to check on the box for **Hosting**, I chose the one that did not involve GitHub support.

### Deploy to Firebase Hosting
**When you're ready, deploy your web app**
-	Put your static files (e.g, HTML, CSS, JS) in your app's directory (the default is "public"). Then, run the command from your app's root directory:
`$ firebase deploy`
-	After deploying, view your app at <name-of-project>.web.app
		- If you need help check out the [Hosting docs](https://firebase.google.com/docs/hosting/quickstart?authuser=0)

## How to update and redeploy site in Firebase
> I had a lot of trouble getting my site to update with changes after redeploying and these steps solved it for me

### 1) Build the project 
  `npm run build`

### 2) test that changes were applied
  `firebase serve`
   - you want to do this to test all the changes locally so you are not redeploying the site so frequently
   - This is the firebase alternative to `ng serve`

  > If the changes don't appear yet type: 
  > `ctrl + shift + r`, this clears the cache in Chrome

### 3) If changes are visible 
  `firebase deploy`


