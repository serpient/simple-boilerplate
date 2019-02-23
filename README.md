![logo](https://user-images.githubusercontent.com/29721784/52025031-c6891b00-24b7-11e9-8cac-4fa4d1dfd10d.png)

# simple-boilerplate
Simple Boilerplate is for HTML/CSS, Javascript, and JQuery projects. It has been setup with a live server so that you can see live changes with every save.

# If you have the outdated version, please either re-clone or do the following:
- Delete node_modules , package.json, and package-lock.json
- Copy in the new package.json from this repository into your repository
- run `npm install`
- Note that the new serve command is `npm start`

# [Make sure to have Git, Node/NPM installed before proceeding](https://chingu.gitbook.io/cohort/cohort-guide/preparing-for-the-cohort/actionable-items-to-do)

# [Getting Started (Video Version)](https://vimeo.com/319114424)


# Getting Started
Instructions to clone this repo.
## 1. Create a new repo on GitHub with <YOUR APP NAME> as the Repository name
  ![new repo](https://lh3.googleusercontent.com/-02ntnkIChJ8/XHBj2hn2fLI/AAAAAAABx0M/D-rqT9mPY0EJVsRSJBgAWOzdgDzaZrrewCL0BGAYYCw/h282/2019-02-22.png)
### **make sure to NOT initialize the repo with any data**
### **do NOT check** Initialize this repository with a README
### **do NOT** add a .gitignore or license
![new repo setup](https://lh3.googleusercontent.com/-qWpiVQk9d4k/XHBj4f3pyII/AAAAAAABx0Q/pNHHBJIio6Mg3bw42uGYQHkWvTvP9I0NwCL0BGAYYCw/h701/2019-02-22.png)
  
### **Keep your repo link handy!**

![grab your repo link](https://lh3.googleusercontent.com/-G_Q3EAcuqkw/XHBj5okfwyI/AAAAAAABx0U/MqbNa0C_loUEn3XkA0uBjarSCUddb4qZwCL0BGAYYCw/h838/2019-02-22.png)
  
## 2. Navigate to the directory you want to keep your project in (say `~/all-code-projects`)

## 3. Clone this repo to get the boilerplate for your project: `git clone https://github.com/serpient/simple-boilerplate.git <YOUR APP NAME>`
  - For example, if `<YOUR APP NAME>` is 'my-first-app' then the directory will be cloned as a new folder called `my-first-app`
## 4. Replace the link to this repo with your GitHub repostiory so you can save your code under your own repo (the new one you just made)
  - `git remote rm origin`
  - `git remote add origin <your repo link>`
    - `<your repo link>` will be the link from the new repo you made in the first step. For example, if the repo name is my-first-app, the repo link will be `https://github.com/your-username/my-first-app.git`. the final command would then be `git remote add origin https://github.com/your-username/my-first-app.git`
  - `git push -u origin master` to push all the changes to your remote repository
## 5. Now open the project in your favorite code editor and run `npm install` to install dependencies
- you will need to install the dependencies to get the boilerplate code working. From your terminal (inside your project directory) enter: `npm install`. This will install the dependencies using NPM (node package manager)
## 6. Enter `npm start` to begin working on your project!
  - this command will open your project in the browser
  - as you make changes to the code in the project it will automatically reload the browser page to reflect them
  - you are ready to customize the project any way you'd like!
## 7. You can save your changes by committing and pushing them to GitHub
  - your local repo has been configured to push changes to the new repo you made automatically
  - read more about the basics of git in our [Chingu Handbook](https://chingu.gitbook.io/cohort/cohort-guide/preparing-for-the-cohort/actionable-items-to-do)

# Adding more JavaScript files in the project
When creating more JavaScript files, remember to add them as Scripts in `index.html`. All JavaScript files are listed at the end of `<body>`. Remember -- ordering of the JavaScript scripts matter! For example, if you try and use a function from `other.js` in `index.js`, BUT, index.js is imported first in index.html -- it will result in undefined! That's because it doesn't know that `other.js` exists yet!


# What do these commands do?
- `git clone <github repo link> my-app-name` - Copies the repository onto your computer as a new folder called "my-app-name"
- `git remote rm origin` - At this point, this repository copy is still connected to the simple-boilerplate github repository. This command will remove the remote origin link so you can connect it to a new link.
- `git remote add origin <your github repository link>` - As mentioned above, this is how you add a new origin link for your repository. As in, any changes in your local development will be "pushed" and sent to the repository link you set.
- `git push -u origin master` - Pushes all your local repository changes to master branch, aka your github repository master-branch.
- `npm install` or shorthand `npm i` - Installs all dependencies the repository will need. 
- `npm start` will run the `start` script defined in `package.json`
  - this begins the `live-server` package which opens the browser and hot-reloads whenever you make changes in the project

# Deployment to Github Pages
1. In your github repository settings, do the following:
![instructions](https://pages.github.com/images/source-setting@2x.png)
2. Go to your browser and check out `http://<YourUsername>.github.io/<yourRepoName>`. Give it a few minutes to see your changes!

[More Info](https://pages.github.com/)


# Deployment to Heroku
If you want to deploy to Heroku, it would require you to write a small simple server that would serve the `index.html` file as an entry point. This boilerplate isn't setup for that, but feel free to add it yourself!
[Something to research here](https://blog.teamtreehouse.com/deploy-static-site-heroku)
