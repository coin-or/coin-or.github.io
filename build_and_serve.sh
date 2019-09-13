#!/bin/bash

echo Updating bundle...
bundle update
echo Starting Jekyll server
#bundle exec jekyll serve
bundle exec jekyll build
