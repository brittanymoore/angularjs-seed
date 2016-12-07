:: Copies the contents of app files in the web application project to the SharePoint application. 
:: Created by: Brittany Moore, October 2016

:: VS Post-build command
:: call "$(ProjectDir)build\BuildSP.bat" $(SolutionDir)

:: NOTE(s): 
::	To completely update ADD and DELETE operations, unload and reload the SP project after running this command.

:: USAGE: BuildSP.bat A
:: A = solution path

:: Dependencies:
::	BuildConstants.bat

:: Do not auto echo commands
@echo off

:: load build constants
call "%~dp0/BuildConstants.bat"

:: check for valid parameters; exit and print usage if invalid
set valid=false
if not "%1"=="" set valid=true
if "%valid%"=="false" (
	echo USAGE: BuildSP.bat ~SolutionPath
	exit /b	
)

:: copy files from web app to SharePoint app
set sourcePath=%1%WebAppName%\%WebAppPath%
set destinationPath=%1%SPAppName%\%SPAppPath%

:: robocopy (robust copy):
:: /mir : mirror the destination directory to the source directory (includes delete)
:: /xf : exclude file patterns
:: the if statement forces nonfatal returns to exit with error code 0 (otherwise VS reports success codes as errors)
(robocopy %sourcePath% %destinationPath% /mir /xf "*.env.js") ^& if %ERRORLEVEL% leq 1 (
	echo ADD / DELETE operations require the destination project to be reloaded.
	exit 0
)
