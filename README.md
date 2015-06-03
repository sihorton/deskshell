# deskshell
A portable desktop wrapper for webapps.

### Install from source code:
The normal way to develop with deskshell is to download the portable zip folder and then edit the default application. On your development machine you will need to have nodejs installed (http://nodejs.org/) on windows open the "nodejs command prompt" and then follow the process below using that command prompt (the command prompt sets up the environment for you).

To checkout from source follow the following process:
```
git clone https://github.com/sihorton/deskshell.git   -- checkout the source
cd deskshell                                          -- enter the source code directory
npm install                                           -- install the dependancies
```

### Technical Note:

Internally this is the second release of the deskshell wrapper. This version does away with the platform runtime in preference for an entirely portable design. This design ends up being much more nodejs friendly but can still be used by developers that are not familiar with nodejs.

