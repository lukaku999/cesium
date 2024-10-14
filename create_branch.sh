#!/bin/bash

# Prompt for the branch name
read -p "Enter the name of the new branch: " BRANCH_NAME

# Check if branch name is provided
if [ -z "$BRANCH_NAME" ]; then
  echo "Branch name is required"
  exit 1
fi

# Fetch latest changes from remote
git fetch

# Checkout the dev branch
git checkout dev

# Pull the latest changes for dev branch
git pull origin dev

# Create a new branch from the dev branch
git checkout -b $BRANCH_NAME

# Push the new branch to the remote repository
git push -u origin $BRANCH_NAME

echo "New branch '$BRANCH_NAME' created from 'dev' and pushed to remote repository."

