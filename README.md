![logo](https://user-images.githubusercontent.com/29721784/52025031-c6891b00-24b7-11e9-8cac-4fa4d1dfd10d.png)

# simple-boilerplate
Simple Boilerplate is for HTML/CSS, Javascript, and JQuery projects. It has been setup with a live server so that you can see live changes with every save.

## Getting Started
Instructions to clone this repo.
- create a new repo on GitHub with <YOUR APP NAME> as the Repository name
  - **make sure to not initialize the repo with any data**
    - **do not check** Initialize this repository with a README
    - **do not** add a .gitignore or license
- navigate to the directory you want to keep your project in (say `~/code-projects`)
- clone this repo to get the boilerplate for your project: `git clone https://github.com/serpient/simple-boilerplate.git <YOUR APP NAME>`
  - note that you if <YOUR APP NAME> is My First App then the directory to clone into should be `my-first-app`
    - ex: `git clone https://github.com/serpient/simple-boilerplate.git my-first-app`
- replace the link to this repo so that you can save your code under your own repo (the new one you just made)
  - `git remote rm origin`
  - `git remote add origin <your repo link>`
    - `<your repo link>` will be the link from the new repo you made in the first step
      - ex: repo name is my-first-app
        - repo link will be `https://github.com/your-username/my-first-app`
      - ex: `git remote add origin https://github.com/your-username/my-first-app`
- now open the project in your favorite code editor
- you will need to install the dependencies to get the boilerplate code working
  - from your terminal (inside your project directory) enter: `npm i`
    - this will install the dependencies using NPM (node package manager)
- now just enter `npm start` to begin working on your project!
  - this command will open your project in the browser
  - as you make changes to the code in the project it will automatically reload the browser page to reflect them
- you are ready to customize the project any way you'd like!
- you can save your changes by committing and pushing them to GitHub
  - your local repo has been configured to push changes to the new repo you made automatically
  - read more about the basics of git in our [Chingu Handbook]()

#### What do these commands do?
- `git clone <github repo link> my-app-name` - Copies the repository onto your computer as a new folder called "my-app-name"
- `git remote rm origin` - At this point, this repository copy is still connected to the simple-boilerplate github repository. This command will remove the remote origin link so you can connect it to a new link.
- `git remote add origin <your github repository link>` - As mentioned above, this is how you add a new origin link for your repository. As in, any changes in your local development will be "pushed" and sent to the repository link you set.
- `git push -u origin master` - Pushes all your local repository changes to master branch, aka your github repository master-branch.
- `npm install` or shorthand `npm i` - Installs all dependencies the repository will need. 
- `npm start` will run the `start` script defined in `package.json`
  - this begins the `live-server` package which opens the browser and hot-reloads whenever you make changes in the project

## Deployment to Github Pages
1. In your github repository settings, do the following:
![instructions](https://pages.github.com/images/source-setting@2x.png)
2. Go to your browser and check out `http://<YourUsername>.github.io/<yourRepoName>`. Give it a few minutes to see your changes!

[More Info](https://pages.github.com/)


## Deployment to Heroku
If you want to deploy to Heroku, it would require you to write a small simple server that would serve the `index.html` file as an entry point. This boilerplate isn't setup for that, but feel free to add it yourself!
[Something to research here](https://blog.teamtreehouse.com/deploy-static-site-heroku)
