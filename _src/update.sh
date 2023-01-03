#!/bin/bash
set -eux
# create new content
hugo
# copy new content
rsync -vuar public/* ../

