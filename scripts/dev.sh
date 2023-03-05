#!/bin/bash

# Launch typed-css-modules watcher in the background
# and save its process id in a variable.
tcm --watch src &
TCM_ID=$!

# Launch vite's development server.
vite

# Register an exit callback called "cleanup".
trap cleanup EXIT

# Cleanup function executed on exit.
function cleanup() {
  # If TCM_ID is not empty, kill the process with that id.
  # This should be the typed-css-modules watcher process.
  [[ ! -z "$TCM_ID" ]] && kill -9 "$TCM_ID"

  # Exit.
	exit 0
}