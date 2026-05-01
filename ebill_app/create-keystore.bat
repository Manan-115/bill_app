@echo off
setlocal enabledelayedexpansion

REM Create a test keystore for signing
REM Using a simple base64-encoded keystore for testing

set KEYSTORE_DIR=c:\bill_app\ebill_app\src-tauri\gen\android

REM Check if Java is available anywhere
for /f "tokens=*" %%A in ('where java 2^>nul') do set JAVA_PATH=%%A

if not defined JAVA_PATH (
    echo Java not found. Trying to find it in Android SDK...
    if exist "%LOCALAPPDATA%\Android\Sdk\cmdline-tools" (
        for /r "%LOCALAPPDATA%\Android\Sdk\cmdline-tools" %%F in (java.exe) do (
            set JAVA_PATH=%%F
            goto found_java
        )
    )
    if exist "%LOCALAPPDATA%\Android\Sdk\ndk" (
        for /r "%LOCALAPPDATA%\Android\Sdk\ndk" %%F in (java.exe) do (
            set JAVA_PATH=%%F
            goto found_java
        )
    )
    echo Java still not found
    exit /b 1
)

:found_java
if not defined JAVA_PATH (
    echo Failed to find Java
    exit /b 1
)

echo Found Java at: !JAVA_PATH!

REM Get the directory containing java.exe to find keytool
for %%F in (!JAVA_PATH!) do set JAVA_BIN_DIR=%%~dpF

set KEYTOOL=!JAVA_BIN_DIR!keytool.exe

if not exist !KEYTOOL! (
    echo keytool not found at !KEYTOOL!
    exit /b 1
)

echo Creating keystore at !KEYSTORE_DIR!\ebillapp.keystore...

!KEYTOOL! -genkey -v -keystore !KEYSTORE_DIR!\ebillapp.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias ebillapp -storepass ebillapp123 -keypass ebillapp123 -dname "CN=ebillapp, O=ebillapp, C=US"

if %ERRORLEVEL% equ 0 (
    echo Keystore created successfully!
) else (
    echo Failed to create keystore
    exit /b 1
)
