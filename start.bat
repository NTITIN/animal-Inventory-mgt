@echo off
title PashuVyapar - Animal Feeding Inventory
echo Starting PashuVyapar Inventory Management Server...
echo.
start http://localhost:5173
call npm.cmd run dev
pause
