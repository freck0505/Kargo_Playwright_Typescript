@echo off
setlocal EnableDelayedExpansion
REM Dual-token fallback for Qase MCP:
REM 1) QASE_API_TOKEN  2) QASE_TESTOPS_API_TOKEN  3) values from project .env

if not defined QASE_API_TOKEN if defined QASE_TESTOPS_API_TOKEN (
  set "QASE_API_TOKEN=%QASE_TESTOPS_API_TOKEN%"
)

if not defined QASE_API_TOKEN (
  call :load_dotenv_token
)

npx -y @qase/mcp-server %*
exit /b %ERRORLEVEL%

:load_dotenv_token
set "ENV_FILE=%CD%\.env"
if not exist "%ENV_FILE%" (
  if exist "%~dp0..\..\.env" set "ENV_FILE=%~dp0..\..\.env"
)
if not exist "%ENV_FILE%" exit /b 0

for /f "usebackq tokens=1,* delims==" %%A in ("%ENV_FILE%") do (
  set "K=%%A"
  set "V=%%B"
  if /i "!K!"=="QASE_API_TOKEN" if not "!V!"=="" set "QASE_API_TOKEN=!V!"
  if /i "!K!"=="QASE_TESTOPS_API_TOKEN" if not "!V!"=="" set "QASE_TESTOPS_API_TOKEN=!V!"
)
if not defined QASE_API_TOKEN if defined QASE_TESTOPS_API_TOKEN (
  set "QASE_API_TOKEN=!QASE_TESTOPS_API_TOKEN!"
)
exit /b 0
