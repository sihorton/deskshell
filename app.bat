IF EXIST ..\node_modules\deskshell2-win\ SET p=..\node_modules\deskshell2-win\
IF EXIST node_modules\deskshell2-win\ SET p=node_modules\deskshell2-win\
%p%\deskshell-node.exe app\server.js %*