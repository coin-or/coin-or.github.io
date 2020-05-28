---
title: "Getting started with the Optimization Suite"
keywords: optimization COIN-OR
tags: [getting_started]
sidebar: user_sidebar
permalink: user_introduction.html
summary: These brief instructions will help you get started quickly with COIN-OR.
---

{% include note.html content="If you've landed here, you're probably just getting started with COIN-OR. This documentation provides an overview of the projects and how to work with them. Individual projects may have their own documentation." %}

The COIN-OR Optimization Suite is a collection of interoperable open source
solvers from the repository of open source software maintained by the COIN-OR
Foundation. It consists of the following projects.

 * [CoinUtils](https://github.com/coin-or/CoinUtils) (COIN-OR utility library)
 * [Osi](https://github.com/coin-or/Osi) (Open Solver Interface)
 * [Clp](https://github.com/coin-or/Clp) (COIN-OR LP Solver)
 * [FlopCpp](https://github.com/coin-or/FlopCpp) (C++-based algebraic modeling language)
 * [DyLP](https://github.com/coin-or/DyLP) (LP solver based on dynamic simplex method)
 * [Vol](https://github.com/coin-or/Vol) (approximate LP solver based on Volume Algorithm)
 * [Cgl](http://projects.coin-or.org/Cgl) (Cut generation library)
 * [SYMPHONY](https://github.com/coin-or/SYMPHONY) (MILP solver framework)
 * [Cbc](https://github.com/coin-or/Cbc) (COIN-OR branch-and-cut MILP solver)
 * [Smi](https://github.com/coin-or/Smi) (Stochastic modeling interface)
 * [CoinMP](https://github.com/coin-or/CoinMP) (Unified C API for Cbc and Clp)
 * [Bcp](https://github.com/coin-or/Bcp) (Branch, cut, and price framework)
 * [Ipopt](https://github.com/coin-or/Ipopt) (Interior point algorithm for non-linear optimization)
 * CHiPPS (COIN-OR High Performance Parallel Search framework)
   * [Alps](https://github.com/coin-or/CHiPPS-ALPS) (Abstract Library for Parallel Search)
   * [BiCePS](https://github.com/coin-or/CHiPPS-BiCePS) (Branch, Constrain, and Price Software)
   * [Blis](https://github.com/coin-or/CHiPPS-BLIS) (BiCePS Linear Integer Solver)
 * [Dip](https://github.com/coin-or/Dip) (Decomposition-based MILP solver framework)
 * [CppAD](https://github.com/coin-or/CppAD) (Automatic differentiation in C++)
 * [Bonmin](https://github.com/coin-or/Bonmin) (Solver for Convex MINLP)
 * [Couenne](https://github.com/coin-or/Couenne) (Solver for non-convex MINLP)
 * [OS](https://github.com/coin-or/OS) (Optimization Services)
 * [MibS](https://github.com/coin-or/MibS) (Mixed Integer Bilevel Solver)
 * [DisCO](https://github.com/coin-or/DisCO) (Discrete Conic Optimization )
 * [Application Templates](https://github.com/coin-or-bazaar/ApplicationTemplates) (Examples)

## Downloading and Installing

### Pre-built Binaries

Binaries for some projects (and their dependencies) are available for download
from [Bintray](https://bintray.com/coin-or/download/). AMPL also kindly
provides executables of some solvers for download at

[http://ampl.com/products/solvers/open-source/](http://ampl.com/products/solvers/open-source/)

We are working on some other better ways of getting binaries, such as conda
packages, and will keep this README updated as things progress. For now,
various conda recipes are available if you search, e.g.,
[here](https://anaconda.org/search?q=cbc). Some other platform-specific ways
of obtaining binaries are listed next.

### Installers and Packages

#### Windows

On Windows, there are binaries available for some projects on
[BinTray](http://bintray.com/coin-or/download). Please let us know if you try
to use them and they don't work because of missing dependencies or other
issues. There is a deprecated Windows GUI installer available
[here](http://www.coin-or.org/download/binary/OptimizationSuite) for
installing binaries and libraries compatible with Visual Studio (you will need
to install the free Intel compiler redistributable libraries and the Visual
Studio redistributable libraries. The versions installed are not currently
up-to-date and this is not currently recommended. This may get updated
someday, but in the meantime, you can get binaries for some projects from
[BinTray](http://bintray.com/coin-or/download).

#### macOS

There are Homebrew recipes for some projects available
[here](https://github.com/coin-or-tools/homebrew-coinor) and this is the recommended way to install projects on OS X. Just do
```
brew tap coin-or-tools/coinor
brew install coin-or-tools/coinor/Xyz
```
Binaries are also available from [BinTray](http://bintray.com/coin-or/download) for
most recent version of macOS, but it's not clear how portable these binaries really
are and your mileage may vary.

#### Linux 

For Linux, there are Debian and Fedora packages for many projects in
the suite.
 * Click
 [here](https://packages.debian.org/search?keywords=coinor&searchon=names&suite=stable&section=all)
 for a list of Debian packages.
 * Click [here](https://apps.fedoraproject.org/packages/s/coin-or) for a list of Fedora packages.

It is also straightforward to install many packages using Linuxbrew, just as on macOS.
```
brew tap coin-or-tools/coinor
brew install coin-or-tools/coin-or/Xyz
```
At the moment, the first install is quite cumbersome, as it involves installing many dependencies,
but this should be reduced or eliminated, once we move to bottling most projects.   

### Docker Image

Several Docker images available at

[https://hub.docker.com/r/tkralphs](https://hub.docker.com/r/tkralphs).
In particular, there is an image that contains the entire Optimization Suite here.

[https://hub.docker.com/r/tkralphs/coinor-optimization-suite/](https://hub.docker.com/r/tkralphs/coinor-optimization-suite/)

This is another excellent way to use the COIN-OR Optimization Suite.

### Other Installation Methods

Other ways of obtaining COIN-OR include downloading it through a number of
modeling language front-ends. For example, COIN-OR can be used through
 * [AMPL](http://ampl.com/products/solvers/open-source/),
 * [GAMS](http://www.gams.com/help/index.jsp?topic=%2Fgams.doc%2Fsolvers%2Findex.html),
 * [MATLAB](http://www.i2c2.aut.ac.nz/Wiki/OPTI/index.php/DL/DownloadOPTI)
 * [MPL](http://www.maximalsoftware.com/solvers/coin.html), and
 * [R](https://www.r-project.org/): Packages available
 [here](http://bioconductor.org/packages/devel/bioc/html/lpsymphony.html) or
 [here](https://cran.r-project.org/web/packages/Rsymphony/index.html) or
 [here](https://github.com/vladchimescu/lpsymphony)
 * [Open Solver](http://opensolver.org)
 * [Solver Studio](http://solverstudio.org)

## Building from Source

Why download and build COIN-OR yourself? There are many options for building COIN
codes and the distributed binaries are built with just one possible set of
options. We cannot distribute binaries linked to libraries licensed under the
GPL or non-open source licenses, so you must build yourself if you want GMPL,
command completion, command history, Haskell libraries, etc. Other advanced
options that require specific hardware/software may also not be supported in
distributed binaries (parallel builds, MPI). Once you understand how to get and
build source, it is much faster to get bug fixes.

{% include note.html content="The below instructions revolve around the
[coinbrew](https://github.com/coin-or/coinbrew) script, which requires the use
of the `bash` shell (a command interpreter). This shell is built in to Linux
and macOS, but must be separately installed in Windows. Detailed instructions
for how to do a basic build and install in Linux, Windows, and macOS, including
all OS-specific workarounds and additional steps, are given below. More
extensive documentation of the `coinbrew` script that might be useful after
following the steps below, including advanced usage, is available
[here](https://coin-or.github.io/coinbrew)." %}

{% include note.html content="You do not need to clone the repository of the
project before following these instructions. The `coinbrew` script will clone
all required repositories for you automatically." %}

### Linux

Most Linux distributions come with all the required tools installed.
Occasionally, some commands are missing, so before starting, check that you have
 * pkg-config
 * gcc, g++, and gfortran
 * BLAS and LAPACK
 * Optional additions
   * Metis
   * Suitesparse
   * libamd
   * Cholmod
   * Nauty
   
To obtain the source code for a project `ProjName`, the first step is to download the
`bash` script that automatically fetches the source, builds, and installs
COIN-OR packages. 

```
git clone https://www.github.com/coin-or/coinbrew
```

Next, to check out source code for and build the project
and all its dependencies, do

```
cd coinbrew
chmod u+x coinbrew
./coinbrew
```

{% include note.html content="The `chmod` command is only needed if the execute permission is not
automatically set by git on cloning." %}
Once you run the script, you will be prompted interactively to select a
project to fetch and build. The rest should happen automagically.

Alternatively, the following command-line
incantation will execute the procedure non-interactively (this is recommended
for expert users who are used to executing Unix commands).

```
./coinbrew fetch ProjName@version --no-prompt
./coinbrew build ProjName --prefix=/path/to/install/dir --no-prompt
```
For example

```
./coinbrew fetch Cbc@2.10.5 --no-prompt
```

The `--prefix` argument above specifies the directory where the packages will
be installed and would normally be something like `$HOME` or `\usr\local`. If
the specified directory is writable, then all packages will be automatically
installed immediately after building and the install command is not needed. If
no prefix is specified, the package will be installed in the directory
`dist/`.

Options that should be passed to the `configure`
script can simply be added to the command-line. For
example, to build with debugging symbols, do

```
./coinbrew build ProjName --prefix=/path/to/install/dir --enable-debug --no-prompt
```

To get help with additional options available in running the script, do

```
./coinbrew --help
```

To get help with configuration options, do

```
./coinbrew ProjName --configure-help
```

The above procedures will build all required dependencies and the project itself.
Afterwards, the binaries will be installed in the directory `/path/to/install/dir/bin`
and the libraries in the directory `/path/to/install/dir/lib`. 

After installation, you will also need to add `/path/to/install/dir/bin` to your
`PATH` variable in your `.bashrc` and also add `/path/to/install/dir/lib`
to your `LD_LIBRARY_PATH` if you want to link to COIN-OR libraries, as follows

```
export PATH=$PATH:/path/to/install/dir/bin
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/path/to/install/dir/lib
```

### Windows

#### Obtaining the source 

Source can be obtained either by downloading an archive that includes the
source of the main project and all dependencies or by fetching with
`coinbrew`. The use of `coinbrew` is strongly recommended unless you plan to
work exclusively with Visual Studio and you wish to build within the Visual
Studio IDE using the supplied Visual Studio project files.

If you wish to obtain the source by downloading a complete archive to use with
Visual Studio, then go to the URL

[https://www.coin-or.org/download/source](https://www.coin-or.org/download/source)

and click on the folder for your desired project. Download source for the
latest release and unpack the archive. Then continue with the instructions for
the [Visual Studio IDE](#building-with-visual-studio-ide) below. Otherwise, continue here
with the instructions for `coinbrew`.

#### Setting up `coinbrew`

The most flexible and powerful way to build on Windows is with the GNU
autotools and the GCC, MS Visual Studio compilers, or Intel compilers from a
`bash` command line. To obtain the source and build it in this way, you will
need to first obtain a version of `bash`, which is a shell (command-line
interpreter) and scripting language. To get bash (and the GCC compilers),
install one of
   * [Msys2](https://msys2.github.io/)
   * [CYGWIN](http://cygwin.org/)
   * [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

Bash and the GCC compilers also come with the [Anaconda Python
distribution](https://www.anaconda.com/distribution/). Bash itself (but not
the GCC compilers) come with [Git for
Windows](https://git-scm.com/download/win).

WSL is a great option if you already know your way around Unix and want a
similar experience in a Windows environment. WSL gives you access to a full
Linux environment within Windows (essentially a Linux VM). If you go the route
of using WSL, then once you install WSL, you can simply open a WSL terminal
and follow the Linux instructions from there. Note, however, that this
produces Linux binaries that can only be run from within WSL.

To get Windows binaries, it is recommended to use MSys2, which provides a
minimal toolset that is easy to install. The remaining instructions will be
for MSys2. Instructions for CYGWIN will be similar, just with different
package names and a different package manager. Note that building on CYGWIN is
no longer officially supported or tested and anecdotal evidence indicates
that there may be issues with building recent version of some projects. 

To get MSys2, either download the installer or a zip file containing the MSys2
base from [here](http://kent.dl.sourceforge.net/project/msys2/Base/x86_64/)
Once you have installed MSys2, the easiest path to getting started if you are
planning to use the GCC compilers is to execute `C:\msys64\mingw64.exe` or
`C:\msys64\mingw32.exe`, which will automatically start up `bash` in a
separate window and set all paths for you.
{% include note.html content="If you are planning to build with
the Visual Studio compiler, you will need to set the paths and start `bash`
manually before doing the actual build, as explained
[below](#building-with-visual-studio-ide). For now, it is OK to continue with
these instructions to set up MSys2." %} 

Once you are running bash, install required packages using the following
command.

```
pacman -S make wget tar patch dos2unix diffutils git svn pkg-config zip unzip
```

Finally, you can obtain `coinbrew`, the script that will help you download and
build COIN-OR packages, with the following command.  

```
git clone https://www.github.com/coin-or/coinbrew
```

#### Building with GCC in MSYs2

Using the GCC compiler suite is convenient and easy, but will build libraries
that are incompatible with Visual Studio. If you intend to link your libraries
to Visual Studio applications you plan to build, you should follow the [Visual
Studio](#building-with-visual-studio) instructions below.

You should already have the MinGW GCC compilers available (you can check by
running `which gcc`). If not (and you plan to use the GCC compilers, not the
Visual Studio compilers), you can install them via

```
pacman -S mingw-w64-i686-toolchain mingw-w64-x86_64-toolchain
```

It is recommended (but optional for some solvers) to install BLAS and LAPACK packages, since this will speed
up some of the solvers that can use those packages. 

```
pacman -S mingw-w64-x86_64-lapack --noconfirm
```

Additionally, there are a number of other packages that provide additional 
functionality and can also be installed.

```
pacman -S mingw-w64-x86_64-lapack \
          mingw-w64-x86_64-winpthreads-git \
          mingw-w64-x86_64-readline \
          mingw-w64-x86_64-suitesparse \
          mingw-w64-x86_64-metis
```

Next, to check out source code for and build all the necessary projects
(including dependencies), execute the script in the `coinbrew` subdirectory,
as follows.

```
cd coinbrew
chmod u+x coinbrew
./coinbrew
```

{% include note.html content="The `chmod` command is only needed if the execute permission is not
automatically set by git on cloning." %}
Once you run the script, you will be prompted interactively to select a
project to fetch and build. The rest should happen automagically.

Alternatively, the following command-line incantation will execute the
procedure non-interactively (this is recommended for most expert users).

```
./coinbrew fetch ProjName@version --no-prompt
./coinbrew build ProjName --prefix=\path\to\install\dir --no-prompt --build=x86_64-w64-mingw32
```

The argument `--prefix=\path\to\install\dir` specifies the directory where the
packages will be installed and would normally be something like `$HOME` or
`\usr\local`. If the specified prefix is writable, then all packages will be
automatically installed immediately after building and the install command is
not needed. When the directory is not writable, the install step will need to
be run with administrator privileges (usually by running `bash` as
administrator). If no prefix is specified, the package will be installed in
the directory `dist/`.

Options that should be passed to `configure`
can be added to the command-line. For example, to build
with debugging symbols, do 

```
./coinbrew build ProjName --prefix=\path\to\install\dir --enable-debug --no-prompt
```

To get help with additional options available in running the script, do

```
./coinbrew --help
```

To get help with configuration options, do

```
./coinbrew ProjName --configure-help
```

After installation, you will also need to add `/path/to/install/dir/bin` to your
`PATH` variable in your `.bashrc`by adding the line

```
export PATH=$PATH:/path/to/install/dir/bin
```

#### Building with Visual Studio in MSys2

It is possible to use almost the exact same commands that were used with GCC
to build with the Visual Studio compilers. If you want to use the Visual
Studio compilers, however, it is important to get your `PATH` set correctly,
as there are some commands in MSys2 that have the same names as commands in
Visual Studio and you need to ensure the right command is used. Mainly, it is
important that the Visual Studio paths come *before* the MSys2 paths in your
`PATH` variable. To ensure this, start again in a fresh Windows command
Window. Now, begin by manually adding `C:\msys64\usr\bin` to your Windows
`PATH` by executing 

```
set PATH=C:\msys64\usr\bin;%PATH%
```

in a Windows terminal. **Do NOT run `Msys2_shell.bat`, `mingw64.exe`, or
`mingw32.exe`**. **After** setting your `PATH` as above, run
the `vcvarsall.bat` script for your version of Visual Studio to add the Visual
Studio paths to your `PATH`. You can do this with, for example, 

```
C:\Program Files (x86)\Microsoft Visual Studio 14.0\VC\vcvarsall.bat x86_amd64
```

{% include note.html content="Note that you will also need a compatible
Fortran compiler if you want to build any projects requiring Fortran. Intel's
`ifort` compiler is compatible with Visual Studio and is recommended, but is
not available for free." %}

Now run

```
bash
```

and to check if everything is correct, do

```
which link
```

The result should be something like

```
/c/Program Files (x86)/Microsoft Visual Studio 14.0/VC/BIN/x86_amd64/link
```

Next, to check out source code for and build all the necessary projects
(including dependencies), execute the script in the `coinbrew`
subdirectory, as follows (you should have already setup the `coinbrew`
subdirectory above).


```
cd coinbrew
chmod u+x coinbrew
./coinbrew
```

{% include note.html content="The `chmod` command is only needed if the execute permission is not
automatically set by git on cloning." %}
Once you run the script, you will be prompted interactively to select a
project to fetch and build. The rest should happen automagically.

Alternatively, the following command-line incarnation will execute the
procedure non-interactively (this is recommended for most expert users).

{% include note.html content="If you do not have a Fortran compiler, then you
will not be able to build any of the projects that require Fortran. Add
`--no-third-party` to the second command below to prevent building of some
third party projects that are in Fortan or use the `--skip` argument to skip
building of specific projects." %}

```
./coinbrew fetch ProjName@version --no-prompt
./coinbrew build ProjName --prefix=C:\path\to\install\dir --enable-msvc --no-prompt --build=x86_64-w64-mingw32
```

The argument `--prefix=C:\path\to\install\dir` specifies the directory where the
packages will be installed and would normally be something like `C:\Program
Files (x86)\COIN-OR\ProjName` or `C:\Users\YourUserName\COIN-OR`. If the
specified directory is writable, then all packages will be automatically
installed immediately after building and no separate install step is needed.
When the directory is not writable, the install step will need to be run with
administrator privileges (usually by running `bash` as administrator). If no
prefix is specified, the package will be installed in the directory
`dist/`.

Options that should be passed to the `configure` script
can be added to the command-line. For example, to build
with debugging symbols, do 

```
./coinbrew build ProjName --prefix=C:\path\to\install\dir --enable-debug --no-prompt
```

To get help with additional options available in running the script, do

```
./coinbrew --help
```

To get help with configuration options, do

```
./coinbrew ProjName --configure-help
```


The above procedures will build all required dependencies and ProjName itself.
Afterwards, the binaries will be installed in the directory `C:\path\to\install\dir\bin`
and the libraries in the directory `C:\path\to\install\dir\lib`. 

To use the resulting binaries and/or libraries, you will need to add the
full path of the directory `build\bin` to your Windows executable
search `PATH`, or, alternatively, copy the contents of the build directory to 
`C:\Program Files (x86)\COIN-OR\ProjName` and add the directory
`C:\Program Files (x86)\COIN-OR\ProjName\bin` 
to your Windows executable search `PATH`. You may also consider adding
`C:\Program Files (x86)\COIN-OR\ProjName\lib` to the `LIB` path and 
`C:\Program Files (x86)\COIN-OR\ProjName\include` to the `INCLUDE` path. 

#### Building with Visual Studio IDE

After obtaining source for the projects you want to build, either with
[coinbrew](https://github.com/coin-or/coinbrew) or by downloading an archive
of the sources of all dependencies, as described above, find the solution file
in the directory `MSVisualStudio`. MSVS project files are only available for
some projects.

{% include note.html content="Note that you will also need a compatible
Fortran compiler if you want to build any projects requiring Fortran. Intel's
`ifort` compiler is compatible with Visual Studio and is recommended, but is
not available for free." %}

### macOS

macOS is a Unix-based OS and ships with many of the basic components needed to
build COIN-OR, but it's missing some things. For examples, the latest versions
of macOS come with the `clang` compiler but no Fortran compiler. You may also
be missing the `wget` utility and `subversion` and `git` clients (needed for
obtaining source code). The easiest way to get these missing utilities is to
install Homebrew (see http://brew.sh). After installation, open a terminal and
do

```
brew install bash gcc wget svn git
```

To obtain the source code, the first step is to get the installer that will
then fetch the source for ProjName and all its dependencies. 

```
git clone https://www.github.com/coin-or/coinbrew
```

Next, to check out source code for and build the project
and all its dependencies, do

```
cd coinbrew
chmod u+x coinbrew
./coinbrew
```

{% include note.html content="The `chmod` command is only needed if the execute permission is not
automatically set by git on cloning." %}
Once you run the script, you will be prompted interactively to select a
project to fetch and build. The rest should happen automagically.

Alternatively, the following command-line
incantation will execute the procedure non-interactively (this is recommended
for expert users who are used to executing Unix commands).

```
./coinbrew fetch ProjName@version --no-prompt
./coinbrew build ProjName --prefix=/path/to/install/dir --no-prompt
```

The `--prefix` argument above specifies the directory where the packages will
be installed and would normally be something like `$HOME$` or `/usr/local`. If
the specified directory is writable, then all packages will be automatically
installed immediately after building and the install command is not needed. If
no prefix is specified, the package will be installed in the directory
`dist/`.

Options that should be passed to the `configure` script
can simply be added to the command-line. For example, to build
with debugging symbols, do

```
./coinbrew build ProjName --prefix=/path/to/install/dir --enable-debug --no-prompt
```

To get help with additional options available in running the script, do

```
./coinbrew --help
```

To get help with configuration options, do

```
./coinbrew ProjName --configure-help
```

The above procedures will build all required dependencies and the project itself.
Afterwards, the binaries will be installed in the directory `/path/to/install/dir/bin`
and the libraries in the directory `/path/to/install/dir/lib`. 

After installation, you will also need to add `/path/to/install/dir/bin` to your
`PATH` variable in your `.bashrc` and also add `/path/to/install/dir/lib`
to your `DYLD_LIBRARY_PATH` if you want to link to COIN-OR libraries. You can add
the following lines to your `.bashrc`.

```
export PATH=$PATH:/path/to/install/dir/bin
export DYLD_LIBRARY_PATH=$DYLD_LIBRARY_PATH:/path/to/install/dir/lib
```

## Additional Useful Information

### Organization of the repositories

All projects are now (or will soon be) managed using `git`. Within
the repository, the development branch is `master`, while branches named 
`stable/x.y` contain long-running stable versions and tags names
`releases/x.y.z` indicate point releases. 

The source tree for the root of project Xxx currently looks something like this

```
ProjName/
doxydoc/
INSTALL.md
README.md
AUTHORS
Dependencies 
configure 
Makefile.am
... 
```

The `ProjName` subdirectory for project `ProjName` looks something like this.

```
src/
examples/
MSVisualStudio/
test/
AUTHORS
README 
LICENSE 
INSTALL 
configure 
Makefile.am 
... 
```

The files in this subdirectory are for building the library of the project
itself, with no dependencies, with the exception of the `MSVisualStudio`
directory, which contains solution files that include dependencies.  

### About version numbers 

COIN-OR numbers versions by a standard semantic versioning scheme: each version
has a *major*, *minor*, and *patch/release* number. All versions within a
*major.minor* series are compatible. All versions within a *major* series are
backwards compatible. The versions with the `stable/` subdirectory have two
numbers, e.g., `1.1`, whereas the releases have three numbers, e.g., `2.1.0`.
The first two numbers of the release version indicate the stable series
of which the release is a snapshot. The third number is the release number in
that series.

### ThirdParty Projects

There are a number of open-source projects that COIN-OR projects can link to, but
whose source we do not distribute. We provide convenient scripts for
downloading these projects (shell scripts named `./get.ProjName` and a build
harness for build them. We also produce libraries and pkg-config files. If you
need the capabilities of a particular third party library, simply run the
`get.ProjName` script before configuring for your build and it will be
automatically integrated. Beware of licensing incompatibilities if you plan
to redistribute the resulting binaries. The following are the supported
libraries. 
 * AMPL Solver Library (required to use solvers with AMPL)
 * Glpk (required to read GMPL files and to use Glpk via OSI)
 * Metis (used by HSL and MUMPS)
 * MUMPS (required for Ipopt to build completely open source)
 * HSL (an alternative to MUMPS that is not open source)

For the following, download and build scripts are still available, but are
no longer updated.

 * Blas (improves performance of basic linear algebra routines---usually available natively on Linux/macOS)
 * Lapack (provides higher-level linear algebra routines---usually available natively on Linux/macOS)
 * FilterSQP (NLP solver for Bonmin)
 * SoPlex (required to use SoPlex via OSI; can be used by SCIP)
 * SCIP (required for the feasibility pump in Couenne)

### Parallel Builds

`SYMPHONY`, `DIP`, `CHiPPS`, and `Cbc` all include the ability to solve in 
parallel. 
 * CHiPPS uses MPI and is targeted at massive parallelism (it would be
   possible to develop a hybrid algorithm, however). To build in parallel,
   specify the location of MPI with the `--with-mpi-incdir` and `--with-mpi-lib`
   arguments to `coinbrew build`, as follows:

   ```
   --enable-static \ 
   --disable-shared \
   --with-mpi-incdir=/usr/include/mpich2 \ 
   --with-mpi-lib="-L/usr/lib  -lmpich" \
   MPICC=mpicc \
   MPICXX=mpic++ \
   ```

 * SYMPHONY has both shared and distributed memory parallel modes, but we'll
 only discuss the shared memory capability here. It is enabled by default if
 the compiler supports OpenMP (`gcc` and Microsoft's `cl` both do, but `clang`
 does not). To disable share memory parallel mode, use the `--disable-openmp`
 argument to `coinbrew`.  
 * Cbc has shared memory parallelism, which can be enabled with the
 `--enable-cbc-parallel` to `coinbrew` 
 * DIP currently has a shared memory parallel mode that works the same way as
 SYMPHONY's.
 
### Other Configure-time Options

There are many configure options for customizing the builds, which is the
advantage of learning to build yourself.
 * Over-riding variables: `CC, CXX, F77, CXX_ADDFLAGS`
 * `--prefix`
 * `--enable-debug`
 * `--enable-gnu-packages`
 * `-C`

Individual project also have their own options.
 * `ProjName/configure --help` will list the options for project ProjName.
 * The options for individual projects can be given to the root `coinbrew`
 script---they will be passed on to subprojects automatically.

### Build environment

The projects in the COIN-OR Optimization Suite use a build system that is
build on top of the autotools (autoconf, automake, autoheader, etc).
The `m4` functions and other custom build scripts are maintained in the
[BuildTools](https://github.com/coin-or-tools/BuildTools) project and this
is where you need to go if you want to re-generate any of the auto-generated
build files, such as the `configure` script.

Note that until recently, all COIN-OR projects were using a very old version
of the autotools. Recent versions of some projects (primarily the master
versions of projects in the Cbc stack) in the Optimization Suite are now
upgraded to use the most recent version of the autotools, but the transition
is not complete yet and there are no releases of any projects using recent
versions of the autotools.

### Building without coinbrew

In principle, each project can be obtained, built, and installed via
```
   git clone --branch stable/x.y https://github.com/coin-or/ProjName.git
   cd ProjName
   ./configure
   make
   make test
   make install
```

Most hints and instructions from above on how to setup a build environment,
flags to configure, etc, also apply when not using `coinbrew`.

However, many COIN-OR projects depend on a number of other COIN-OR projects.
`coinbrew` automates fetching, building, and installing these dependencies.
To see the dependencies of a project, see the file `Dependencies` in the
`.coin-or` subdirectory or base directory of a project.

### Building static executables

For projects using the most recent version of the autotools (so far, this means
the master version of anything in the Cbc stack, but this will be changing),
running `configure` or `coinbrew` with the following additional arguments should
produce static binaries with `gcc`, at least on Linux.
```
LT_LDFLAGS=-all-static LDFLAGS=-static --disable-shared
```
For version of COIN-OR projects using older versions of the autotools, e.g.,
Cbc 2.10 and its dependencies, it **may** work to additionally disable the linking
of libraries that not necessarily available statically (otherwise, the compiler
finds and links to the dynamic libraries anyway anmd this defeats the purpose).
For example, something like this may work for you, but you may have to tinker
with it if you get an executable that is not static (usee `ldd` to see whether
succeeded or not). 
```
--enable-static
--disable-shared
LT_LDFLAGS=-all-static
LD_FLAGS=-static
--disable-readline
--without-cholmod
--without-lapack
--without-amd
--no-third-party
```

### Documentation

Some documentation on using the full optimization suite will someday be available
[here](http://coin-or.github.io/).
There is also a full tutorial on the Optimization Suite and much more at
[Ted's page](http://coral.ie.lehigh.edu/~ted/teaching/coin-or).

User's manuals and documentation for project ProjName can be obtained at either
`http://coin-or.github.io/ProjName` or `http://www.coin-or.org/ProjName`.
Doxygen source code documentation for some projects can also be obtained at
[http://coin-or.github.io/Doxygen](http://coin-or.github.io/Doxygen).

### Support

Support is available primarily through mailing lists and bug reports at
`http://github.com/coin-or/ProjName/issues/new`.
