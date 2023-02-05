#!/bin/bash

echo Installing TypeScript...
npm install typescript

echo Silently installing CDK...
npm install -g aws-cdk@2.18.0 >/dev/null 2>&1
cdk --version
