---
title: "COIN-OR Developer's Guide"
keywords: optimization COIN-OR
tags: [developer_getting_started]
sidebar: developer_sidebar
permalink: developer_introduction.html
summary: This guide is for developers of COIN-OR projects, especially those that use the COIN-OR build system.
---

For now, this guide focuses mainly on the migration from SVN to git in order
to help everyone get on a solid footing with the move to GitHub. It is assumed
most people are familiar with git, but specific recipes are given for the
usual workflows. A good crash course in git for those familiar with SVN is
[here](https://git.wiki.kernel.org/index.php/GitSvnCrashCourse).

## Moving from SVN to git

This section will mainly be of interest to developers on projects have been
mirrored from SVN and are now moving to being managed entirely under git,
especially those who are not entirely familiar with git. There will ultimately
be many changes going from SVN to git, the biggest are

  * We'll be abandoning the use of the _externals_ mechanism that made it
    possible to easily pull in all dependencies in SVN.
  * The repository organization will change due to the fact that git doesn't
    employ the same sort of folder-based design for storage.

Although there is now a mechanism in git that functions roughly like the SVN
externals mechanism (it is called _submodules_), we've long thought of moving
away from using the externals mechanism in order to avoid a number of issues,
such as the difficult of having multiple packages checked out simultaneously
with common dependencies. The [coinbrew](#coinbrew) script now acts as a sort
of package manager, effectively replacing the externals mechanism with a more
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
Each commit has one (or more) parents, which define the graph of commits
across the entire repository.
```
~/Projects/Cbc > git cat-file -p 8a40de8b
tree 11d40c5ac7bfd6ec6d9747a4b62562ee83986deb
parent ededdc0f67e0381b7ea233d61488e4933078115d
author John Forrest <john.forrest@fastercoin.com> 1553612667 +0000
committer John Forrest <john.forrest@fastercoin.com> 1553612667 +0000

out stupid clone which causes memory leak
```
Whereas in SVN, it is possible (though not recommended) to commit changes to
multiple branches in a single commit, this is not possible in git.

When one "clones" a repository in git, the download includes the entirety of
its contents, including all commits, whereas in SVN, one only gets the
contents of the current revision. This enables you to work off-line with git
and still be able to switch branches, make commits, etc. The working
directory, however, contains only the contents of what used to be one of the
single top-level folders in SVN at one time. Next, we describe how the SVN
folder structure translates into the structure of a git repository.

### Repository organization

If you had the recommended repository structure in your SVN repository, then
the root of your repository looked something like this.
```
html/
conf/
branches/
trunk/
stable/x.y
releases/x.y.z
```
Git is not folder based, so the folders in SVN have to be mapped either to a
git "branch" or to a git "tag". Both branches and tags are nothing more in git
than aliases for particular commits (identified by their SHA or hash). The
difference between a branch and a tag is only that a branch is dynamic and
always points to the "tip" of a given series of commits, whereas a "tag" is a
fixed pointer that never changes.

The recommended structure in git (which is imposed for the repositories that were
mirrored from SVN to git) is as follows.
  * The stable versions in SVN that used to live in a folder `stable/x.y` are
    now in a git branch called `stable/x.y`. In git, this branch label is just
    a string designating the name of a branch, not a true folder, as in SVN
    (the `/` has no meaning in terms of organization).
  * The releases in SVN that used to be in the folder `releases/x.y.z` are now
    git tags with the label `releases/x.y.z` in git. These are now truly fixed
    versions, whereas they could in principle be updated in SVN (and sometimes
    were).
  * What was called `trunk` in SVN is the `master` branch in git.
    This is the branch that users get by default (although you can change this
    if you want).
  * If there was anything in the SVN `branches` folder, this
    would also be just a regular git branch in the git repo.
If you now do

```
git clone https://github.com/coin-or/Cbc
```
you will get a copy of the repository with the working directory being the
`master` branch. To get the stable version 2.10 of Cbc (after cloning as
above), you would do
```
git checkout stable/2.10
```
You can see what branches are available with the `git branch` command, but by
default, git only shows you branches that you have already checked out
locally. If you do `git branch -a`, you will also see remote branches. For
Cbc, we have
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

To see the tags (releases) available, do
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
repository, although the SHA may itself also be a commit in a branch as well.
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
For now, there may be a mix of URLs for GitHub and SVN, but this will eventually be
only GitHub URLs.

### Root directories

Another change being made as we move from SVN to git is to remove what used to
be the root directory of each repository. The repository for project Xyz used
to contain a subdirectory within it called Xyz. This was so that when the
project was checked out with its SVN externals (dependencies), the result
would that each project (including the main project would end up in its own
subdirectory. At the root level, there was also a main `configure` script,
`Makefile.am`, `Makefile.in` and a number of other autotools-related scripts.
The resulting structure when project Xyz was checked out was
```
Xyz/
Yyy/
Zzz/
configure
Makefile.am
Makefile.in
...
```
The new structure will (eventually) be that the root directory will be
removed. When checked out with `coinbrew`, the same overall structure (each
project in its own subdirectory) will be maintained, but the root directory
won't be part of any repository and the main `configure` script is essentially
replaced by `coinbrew` (see section below describing coinbrew).

## Standard development workflows

This section describes standard workflows that are closely aligned with the
workflows used in many projects in the past under SVN. Project managers are free
to use any of the alternative workflows described briefly in the next section,
as well as any other workflow of their choice. To take advantage of the
`coinbrew` build script, as well as other shared services related to continuous
integration, testing, and binary distribution, all that is required is that

  * the repository be organized as described above, using the recommended naming
    conventions for branches and tags,
  * that it use the scheme described above for dependencies,
  * and (for now), that it use an autotools-based build system. 

In the standard workflow described here, development takes place in the `master`
branch (or in feature branches, as described below). Long-running branches will
be maintained for each stable version (as with SVN), but it is typically not
expected that commits will be made directly to these branches.  Instead, as was
also the case with SVN, commits made to master will be moved to the stable
branches, as explained in the next section.

### Publishing changes 

By default, whatever branch you check out will be set up to "track the
remote," meaning that you can sync changes from the same branch in the remote
repository (on COIN-OR's GitHub repo) and publish your changes to that
branch. The normal flow of development would thus be to first checkout the
`master` branch (if not already done).
```
git checkout master
```
After checking out `master`, make some changes, then commit them. Committing in
git is different than in SVN in that SVN commits all changes by default,
whereas git only commits what you tell it to. The first step is then to `add`
the files whose changes should be committed. Following this, you then `commit`
the changes. The `commit` command only records the changes in your local copy
of the repository. To publish them requires a `push` command, as follows.
```
git add fileToAdd.cpp
git commit -m "This is the commit message describing the commit"
git push
```
If you want to see what files have changed since the last commit, you can do
```
git status
```
To see the detailed diff, you can do
```
git diff
```
Note that if you `add` a file and then make more changes to it before committing,
the new changes will not be included. You need to `add` again. The `git diff`
command is against the current index, so if you `git add fileToAdd.cpp` and then
`git diff fileToAdd.cpp`, the difference will be empty. To diff the changes
you have staged and are about to commit against the previous commit, do
`git diff --cached`.

### Syncing a local branch with remote

**This section is important, please read carefully**. Before you are allowed
to publish (`push`) your commits, you must sync your branch with the remote.
This means invoking the command
```
git pull
```
In git, there are *two ways* to sync change and it is very important to
understand the difference. 

#### Merge

The default is to `merge`, which will attempt to take the current tip of your
branch and combine it with the current tip of the remote branch, just as
happens when doing an `svn update`. This may or may not create a conflict. If
there is a conflict, then you must resolve it, just as you would in SVN, by
looking for conflict markers. After resolving the conflict, the files may need
to added again with a `git add` to indicate the conflict has been resolved
(this may happen automatically whenever the file doesn't contain any conflict
markers). Merging creates a "merge commit" whose purpose is to record the two
parent commits (the respective tips of the two paths in the graph that are
being brought back together.

#### Rebase (Preferred)

A `rebase` is the other alternative and is almost always preferred, although
it is not the default. What a rebase does is to reapply each of your commits,
starting at the tip of the remote branch, creating a history that looks as if
you started your work with the current tip of the remote branch and worked
from there. This is preferable because it creates a so-called "linear history"
rather than a history that introduces additional divergent paths into the
commit graph and includes merge commits that interrupt the flow of the
history. Two possible disadvantages of `rebase` are
  * A rebase will change the SHAs of all your local commits, so you should
    never do this if you have already shared your commits with someone else or
    if pointers to those commits exist somewhere else. This shouldn't be the
    case for work in progress that only exists on your local machine.
  * A rebase can make it more difficult to resolve conflicts, since it applies
    each of your local commits, one by one. Each of these commits could
    potentially cause a conflict, which needs to be resolved, one by one. If
    this process is too arduous it is easy to abort and do a merge instead.

To do a pull with rebase, one can execute the command
```
git pull --rebase
```
To avoid having to remember to do this each time, it is easy to change the
default for pulling to be `rebase` with the command
```
git config --global pull.rebase true
```
This is **highly recommended**.

When pulling with rebase, if there is a conflict, it should be resolved in the
usual way (remove conflict markers, add the files if necessary) and then `git
rebase --continue` must be called to continue the process. If at any time, you
want to to abort the process and start over, just do `git rebase --abort.

### Syncing stable branch with master

To move changes from `master` to `stable/x.y`, the process is very similar to
`svn merge`.

#### Moving individual commits

The command in git corresponding most precisely to `svn merge` is `git
cherry-pick`. If you want to move a single commit from `master` to
`stable/x.y`, the recommended incantation is
```
git checkout stable/x.y
git cherry-pick -xes 1b89e6cc58
```
A big difference between `svn` and `git` is that `svn` is "patch-based"
meaning that the repository is a collection of patches, and `svn` explicitly
tracks when a patch is moved from one branch (folder) to another. In `git`,
there is no explicit tracking. By adding `-xes` above, however, we do get some
additional information, which makes it easier to keep track. The `-s`
explicitly records who performed the cherry-pick. The `-x` records the SHA of
the original commit that was cherry-picked.  Finally, the `-e` allows editing
of the commit message for any additional information that should be recorded.

It is also possible to cherry-pick a series of commits, just as with `svn
merge`. 
```
git cherry-pick -xes 1b89e6cc58..c0079e0da58
```
There is lots of other fancy stuff that can be done, see the [git
book](https://git-scm.com/docs/git-cherry-pick) for examples.

One final possibly useful command is `git cherry`, which lists all commits
that have not yet been cherry-picked. Note, however, that it determines
whether a commit has already been applied by comparing the id's (hashes) of
the patches associated with each commit. If the patch applied when cherry
picking the commit the first time was not exactly the same as the patch in the
original branch (e.g., there was a conflict), then this will not be detected.
See discussion [here](https://stackoverflow.com/a/18746296/3054922). 

#### Rebasing

Depending on what you want to do precisely, there are many alternatives to
`cherry-pick`. One that is not well-tested, but seems to be useful is to
interactively rebase master onto stable/2.10. 
```
git rebase -i --signoff --onto stable/2.10 <starting-sha> master
```
This command replays each commit in master on top of stable/2.10, starting at
the SHA <starting-sha>, which would usually be the SHA after the one that was
the tip of master last time the two branches were synced. It could also be the
least common ancestor (which is the SHA at which the stable branch
oreeiginally split from the master branch, given by `git merge-base master
stable/2.10`). The `-i` argument makes the rebase interactive, which means
that the person doing the rebase will be presented with a file to edits
containing all available commits and will be able to choose any that are
relevant, deleting the others. Only the chosen commits will be moved. Thus,
the result is similar to cherry-pick, but it may be easier to pick the exact
set of commits to be moved. Note that the commit message for the re-based
commits will not include the original SHA in this case. It should be possible,
though using the `-x` argument, which runs a command after each commit, to
amend the commit message with the SHA of the original commit. The `-x`
argument could also be used to run a unit test after each commit is added to
ensure that no commit added breaks anything.

### Making a new stable version

The
[prepare-stable](https://github.com/coin-or-tools/BuildTools/blob/master/prepare-stable)
script is provided to automate the process of making a new stable version, but
we describe the process here anyway. The process in git is similar to that in
SVN. A new branch is first made from a commit in `master` and the version
string in `configure.ac` is updated. 
``` 
git checkout master 
git checkout -b stable/x.y 
<edit configure.ac> 
run_autotools . 
git add -u 
git commit -m "Creating new stable branch x.y" 
git push -u origin stable/x.y 
``` 
In addition, the `Dependencies` probably needs to be updated.

### Making a release

The
[prepare-release](https://github.com/coin-or-tools/BuildTools/blob/master/prepare-release)
script is provided to automate the process of making a new release but we
describe the process here, since it is quite different in git than in SVN. In
SVN, it was necessary to create a number of "fake" commits that were there
only for the purposes of temporarily changing version numbers. In git, it is
possible to make a release without creating any additional commits that appear
in the history of the stable branch. We simply make a new branch from
stable/x.y, create a single commit in that new branch, tag that commit, then
delete the branch. Deleting a branch in git only means the label/pointer is
deleted, not the commits in the branch. The tag that remains is enough to find
the commit associated with the release if needed. 
```
git checkout stable/x.y
git checkout -b release-x.y.z
<edit configure.ac, CHANGELOG, Dependencies etc.>
run_autotools .
git add -u
git commit -m "Creating new release x.y.z"
<wait for automated testing to complete successfully>
git tag -a releases/x.y.z -m "Creating release x.y.z"
git push origin releases/x.y.z
git checkout stable/x.y
git branch -d release-x.y.z
```
Note that it is possible to push the commit without tagging it at first in
order to wait for automated testing to be done before finally tagging the
release. 

### Developing a feature

Development of new features should be done, if at all possible in a "feature
branch." This can be done in one of two ways. Either fork the remote
repository on GitHub into your own personal GitHub account and develop the
feature there (this is somewhat preferred) or, if you are main developer,
develop it in a separate branch in the main repo.
```
git checkout master
git checkout -b feature_branch
<do some development>
git rebase master
<do some more development>
git rebase master
```
Once the feature is ready to be merged into master, it is strongly preferred
that this be done using a pull request. If you are viewing your feature branch
on GitHub, there should be a button there for creating a pull request. If you 
don't want to create a pull request, you can follow up the above series of
commits with
```
git checkout master
git merge feature_branch
```
and this will perform a co-called "fast-forward" merge, which means that the tip
of `master` will just be moved to the tip of your branch (since there is nothing 
in `master` that is not in your branch, once you rebase). 

## Alternative workflows

We mention here briefly that there are a number of other possible workflows that
can be used. For simple, slow-moving projects with only one or two developers,
working in master and tagging releases directly from there without having a
stable branch may work fine, although much of the infrastructure described above
and below depends on the existence of stable branches.

Another alternative is to do development in the current stable branch. In this
case, bug fixes applying to earlier stable version would need to be back-ported.
Master would then consist of only the latest tagged releases. The advantage of
this workflow is that when users check out the repository, they automatically
get the latest release. 

## The `coinbrew` script

The `coinbrew` script is a universal script for checking our projects with their
dependencies, building a project and its dependencies, switching versions, and
much much more. The documentation for it is
[here](https://coin-or.github.io/coinbrew). 

## Working with GitHub

### Continuous Integration

Currently, we recommend using Github Actions CI services. To get started, take
a look at
[.github/workflows](https://github.com/coin-or/CoinUtils/blob/master/.github/worflows)
in the CoinUtils repository. These can be used as a basic template. Once your
repository is activated on the services (requests can be sent to
github-admin@coin-or.org), simply adding the YAML files to the repository will
activate automated build and test.

### Uploading Binaries

Any binaries/libraries that are built using Github Actions are automatically
uploaded as
[artifacts](https://docs.github.com/en/actions/managing-workflow-runs/downloading-workflow-artifacts).

### Zenodo and DOIs

We recommend using [Zenodo](https://zenodo.org/) to generate a DOI for each
released version of your software. This makes it possible for the software to be
formally and directly cited. Once Zenodo is activated for your project (requests
can be sent to github-admin@coin-or.org), all that needs to be done to generate
a DOI is to publish your release. Once a tagged release version is pushed, just
go to page listing releases and click on the "Draft a New Release Button."

### Project Web sites

To create a project Web site, we recommend using GitHub Pages, a service
provided by GitHub by which your project's site is hosted directly in your
repository. To get started, follow the instructions
[here](https://help.github.com/en/github/working-with-github-pages/getting-started-with-github-pages).
The instructions are very general and cover a lot of cases, so in case it's not
clear, in most cases, you will want to create a branch in your repository call
`gh-pages` and place your Jekyll theme files there. The site will then be
displayed at the URL https://coin-or.github.io/Xyz.

## Working with the build system

We are currently transitiong from TravisCI, AppVeyor and Bintray to Github
Actions and Github Releases. Pushes to the main branch or pull requests
automatically trigger the CI across a variety of platforms. Pushing a
new tag automatically creates a new release, and builds and uploads artifacts for
each platform.
