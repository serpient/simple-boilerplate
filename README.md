![logo](https://user-images.githubusercontent.com/29721784/52025031-c6891b00-24b7-11e9-8cac-4fa4d1dfd10d.png)

# simple-boilerplate
Simple Boilerplate is for HTML/CSS, Javascript, and JQuery projects. It has been setup with a live server so that you can see live changes with every save.

## Getting Started
Instructions to clone this repo.
```
git clone https://github.com/serpient/simple-boilerplate.git my-app-name
cd my-app-name
git remote rm origin
git remote add origin <your github repository link>
git push -u origin master

npm install
live-server
```

#### What do these commands do?
- `git clone <github repo link> my-app-name` - Copies the repository onto your computer as a new folder called "my-app-name"
- `git remote rm origin` - At this point, this repository copy is still connected to the simple-boilerplate github repository. This command will remove the remote origin link so you can connect it to a new link.
- `git remote add origin <your github repository link>` - As mentioned above, this is how you add a new origin link for your repository. As in, any changes in your local development will be "pushed" and sent to the repository link you set.
- `git push -u origin master` - Pushes all your local repository changes to master branch, aka your github repository master-branch.
- `npm install` - Installs all development dependencies the repository will need. 
- `npm i -g live-server` - Installs live-server globally
- `live-server` - Starts the live server so all changes in your code will be reflected immediately

## Starting Live Server
1. Navigate to the root folder (example, `simple-boilerplate/`)
2. Run `live-server`
3. Let it up open a local environment in your browser
4. Any changes in your files related to `index.html` will be seen in your browser

## Deployment to Github Pages
1. In your github repository settings, do the following:
![instructions](https://pages.github.com/images/source-setting@2x.png)
2. Go to your browser and check out `http://<YourUsername>.github.io/<yourRepoName>`. Give it a few minutes to see your changes!

[More Info](https://pages.github.com/)


## Deployment to Heroku
If you want to deploy to Heroku, it would require you to write a small simple server that would serve the `index.html` file as an entry point. This boilerplate isn't setup for that, but feel free to add it yourself!
[Something to research here](https://blog.teamtreehouse.com/deploy-static-site-heroku)
