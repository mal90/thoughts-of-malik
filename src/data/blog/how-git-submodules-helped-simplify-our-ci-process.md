---
title: "How git submodules helped simplify our CI process"
pubDatetime: 2018-12-24T00:00:00.000Z
description: "In our company, we are developing set of applications , and these applications have their own separate front-ends."
---

## How git submodules helped simplify our CI process

## Problem we were trying to solve

In our company, we are developing set of applications , and these applications have their own separate front-ends. Each of these front-end source code is hosted on its own repository.

One of the main problem we've encountered when we were trying to create our CI pipeline was , how to create a job in jenkins to build all our front-ends at once. Since we've had around 12 repositories (as of now) , the simplest solution would be creating jenkins build jobs for each of the repositories. But it is certainly not the most efficient way. Because as the number of repositories grow , our build jobs also need to grow in parallel. This is also a maintenance nightmare. This is when we've discovered about git submodules.

git submodules is an awesome feature to use , say , if you have multiple repositories and if you want to have a central system to manage them all.

### What is git submodule ?

In a nutshell , git submodules are having set of child repositories as directories inside another main repository. This child repositories are called as submodules.

Each of these submodules will contain the commit reference of the checked out branch from its own repository. Refer the below image.

![submodule](https://lazydevguy.files.wordpress.com/2018/12/submodule_with_reference.png)

As we can see from the above image , git submodules are basically has references to the actual repository they represent.

### Our solution with git submodules

We have created a single repository called "combinedui" and added all repositories we needed to build as submodules. Yes, simple as that. Then we created a jenkins build , which will get the latest changes from the submodules and run a docker build where it creates a single docker image by running a series of build commands to build each of these front-ends on to that docker image. And after that it is just a matter of using that docker image for deployment.

The important thing we saw in this method was that all this was happening using a single build job. When we wanted to add another front-end to the build process , all we had to do was just add the respective repository as a submodule to the "combinedui" main repository and add the build steps to the dockerfile.

### HOW TO ADD A SUBMODULE

To add a submodule , you need to first have a git repository. We can call this as the parent repository. Open up a git bash/cmd inside the parent repository and run following command.

```
git submodule add "git repositry url"
git add .
git commit -m "this is parent changes commit message"
git push origin "parent repository"
```

After the above command , it will create a .gitmodules file which will keep track of all the submodules and their origins.

### STAGING AND COMMITTING NEW SUBMODULE CHANGES

When adding a new submodule , it will always points to the master branch of that repository. But let say you want to change it to some other branch , for example "dev" branch , below are the steps you need to take.

```
cd <submodule path>
git checkout dev
cd ..
git add .
git commit -m "this is parent changes commit message"
git push origin "parent repository"
```

As you can see in the above steps , after checking out the dev branch , we have to go back to the parent repository and stage and commit the changes. This will look unusual if you have never used submodules before. But what actually happens is that the parent repository is tracking every single change we do the submodule. So changing the branch of the submodule will actually trigger a change in the parent repository.

### HOW TO CLONE A GIT REPOSITORY WITH ALL ITS SUBMODULES

```
git clone "parent repository url"
cd <parent repository path>
git submodule update
```

### PULLING CHANGES FROM ALL THE SUBMODULES

```
git pull --recurse-submodules
```

### EXECUTING A COMMAND ON ALL OF THE SUBMODULES AT ONCE
```
git submodule foreach 'git reset --hard'
```

Using 'foreach' command will execute 'reset hard' on all the submodules inside the repository.

### DELETING A SUBMODULE FROM THE PARENT REPOSITORY.

In case if you want to delete a submodule and its references from the parent repository , follow below steps

- open up the .gitmodules file and delete the section which contains submodule name , path and url
- stage and commit this change
- open up the config file inside the .git directory and delete the section which contains the submodule name, path and url
- run `git rm –cached <path to the submodule>`
- run `rm -rf .git/modules/ <path to the submodule>`
- stage and commit the changes
- remove untracked files from the removed submodule 