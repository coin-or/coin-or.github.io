---
title: "COIN-OR Developer's Guide"
keywords: optimization COIN-OR
tags: [developer_getting_started]
sidebar: developer_sidebar
permalink: developer_introduction.html
summary: This guide is for developers of COIN-OR projects, especially those that use the COIN-OR build system.
---

For now, this guide focuses mainly on the migration from SVN to git in order
to help everyone get on a solid footing with the move to github. It is assumed
most people are familiar with git, but specific recipes are given for the usual workflows. 

## Basics

### Semantic versioning

### Contents of repository

## Working with git

### Migration from SVN

There will ultimately be many changes going from SVN to git, the biggest are

  * We'll be abandoning the use of the _externals_ mechanism that made it
  possible to easily pull in all dependencies in SVN.
  * The repository organization will change due to the fact that git doesn't
  employ the same sort of folder-based design for storage.

Although there is now a mechanism in git that functions
roughly like the SVN externals mechanims (it is called _submodules_), we've
long thought of moving away from using the externals mechanism in order to
avoid a number of issues, such as the difficult of having multiple packages
checked out simultaneously with common dependencies. The
[coinbrew](#coinbrew) script now acts as a sort of
package manager, effectively replacing the externals mechanism with a more
powerful alternative.

Other changes have to do simply terminology and philosophy. In git, each
commit represents a complete snapshot of the state of the repository, not a
set of changes, as in SVN. The commits in git are related to each other
through a directed acyclic graph. Each commit has one or more parents and one
or more children. The individual commits are identified by "hashes" or "SHAs"
(as opposed to SVN's revisions) because they are identified by a long string
that is obtained by hashing the contents of the commit, such as
```
~/Projects/Cbc > git log
commit 8a40de8b1a6f550c440dddd3e83d26807c1877b8 (HEAD -> master, origin/master, origin/HEAD)
Author: John Forrest <john.forrest@fastercoin.com>
Date:   Tue Mar 26 15:04:27 2019 +0000
```
Whereas in SVN, it is possible (thought not recommended) to commit changes to
multiple branches in a single commit, this is not possible in git.

When one "clones" a repository in git, the download includes the entirety of its contents,
including all commits, whereas in SVN, one only gets the contents of the
current revision. This enables you to work off-line with git and still be able
to switch branches, make commits, etc. 

### Repository organization

If you had the recommeded repository structure in your SVN repository, then
the root of your repository looked something like this.
```
html/
conf/
branches/
trunk/
stable/
releases/
```
In git, the top-level folders in SVN map either to git branches or tags. What was
called `trunk` in SVN is the `master` branch in git. this is the branch that
user's get by default (although you can change this if you want). If you now
do
```
git clone https://github.com/coin-or/Cbc
```
you will get the master branch. The stable versions in SVN are now mapped to
git branches named `stable/x.y`. To get the stable version 2.10 of Cbc (after
cloning as above), you would do
```
git checkout stable/2.10
```
You can see what branches are available with the `git branch` command, but git
only shows you branches that you have worked with locally by default. If you
do `git branch -a`, you will also see remote branches. For Cbc, we have
```
~/Projects/Cbc> git branch -a
  master
* stable/2.10
  remotes/origin/HEAD -> origin/master
  remotes/origin/autotools-update
  remotes/origin/devel
  remotes/origin/dynamicbranching
  remotes/origin/gh-pages
  remotes/origin/heur
  remotes/origin/master
  remotes/origin/newsearchtree
  remotes/origin/primalheur
  remotes/origin/stable/1.1
  remotes/origin/stable/1.2
  ...
```
The `*` indicates the branch you currently have checked out. Your local
branches will usually correspond to branches that also exist in the remote
repository, but not always. If you `git checkout` a branch with the same name as
one that exists remotely, then it will set up a new local branch that tracks
the remote one. Otherwise, it creates a new local branch for your current
commit that can later be pushed to the remote repository, if desired.

Releases in SVN are tags in git. To see the tags available, do
```
~/Projects/Cbc> git tag
releases/1.1.0
releases/1.1.1
releases/1.1.2
releases/1.2.0
releases/2.0.0
```
You can check out a tag in git, but you will get a message starting with
```
You are in 'detached HEAD' state. You can look around, make experimental changes...
```
This is because tags are just pointers to specific SHAs and don't have parents
or children. They exists in a fixed state detached from the rest of the
respository, although the SHA may itself also be a commit in a branch as well.
In general, it is better as a developer not to check out releases directly. 

### Mapping of SVN revisions to git hashes

The mirroring software we used to move project from SVN to git keeps a record
of the mapping between SVN revisions and git SHAs. To enable the mapping, edit
your `.git/config` file and add
```
[remote "origin"]
...
fetch = +refs/svn/map:refs/notes/commits
```
After that, the `git log` command will show the original SVN revision of any
commits that were created through mirroring.

### Dependencies

Dependencies are indicated by maintaining a file called `Dependencies` in the
root of your repository. This is used by the [`coinbrew`](#coinbrew) script,
among others, to determine what additional projects are needed. The format of
the file is lines consisting of a short name for the project, a URL, and (in
the case of a git dependency), a branch name. Note that you can mix git and
SVN URLs, although only SVN URLs hosted on `projects.coin-or.org`. The basic
format is something like
```
BuildTools  https://projects.coin-or.org/svn/BuildTools/stable/0.8
ThirdParty/Blas   https://projects.coin-or.org/svn/BuildTools/ThirdParty/Blas/stable/1.3
ThirdParty/Lapack https://projects.coin-or.org/svn/BuildTools/ThirdParty/Lapack/stable/1.4
Data/Sample https://projects.coin-or.org/svn/Data/Sample/stable/1.2
CoinUtils   https://projects.coin-or.org/svn/CoinUtils/stable/2.11/CoinUtils
Osi         https://projects.coin-or.org/svn/Osi/stable/0.108/Osi
Clp         https://projects.coin-or.org/svn/Clp/stable/1.17/Clp
Cgl         https://projects.coin-or.org/svn/Cgl/stable/0.60/Cgl
Cbc         https://projects.coin-or.org/svn/Cbc/stable/2.10/Cbc
Alps        https://github.com/coin-or/CHiPPS-ALPS stable/1.5
SYMPHONY    https://projects.coin-or.org/svn/SYMPHONY/stable/5.6/SYMPHONY
```

### Development workflows

#### Making a new stable version

#### Making a release

#### Feature branches

#### Merging

### The `coinbrew` script

It will allow you to fetch out any project and its
dependencies, but is aware of what projects have already been checked out and
will even switch version for you automatically if there are conflicting
dependencies so you can have one clone of each project and still be able to
build any version of any project with the proper dependencies all in one
place.

## Working with GitHub

### Continuous Integeration

### Zenodo and DOIs

### Project Web sites

## Working with the build system

