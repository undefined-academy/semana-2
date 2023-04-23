#!/bin/bash

# Define the target directories
target_dirs=("formularios-html" "student-cvs")

# Loop through each target directory
for target_dir in "${target_dirs[@]}"; do
  # Check if the target directory exists
  if [ -d "$target_dir" ]; then
    # Rename folder names, replacing '.' with '(dot)' inside the target directory
    find "$target_dir" -mindepth 1 -type d -name "*.*" -exec sh -c '
      for folder; do
        new_name="$(echo "$folder" | sed "s/\./(dot)/")"
        mv -- "$folder" "$new_name"
      done
    ' sh {} +

    # Remove all files with the name '*Zone.Identifier'
    find "$target_dir" -name "*Zone.Identifier" -exec rm -rf {} \;
  else
    echo "The target directory \"$target_dir\" does not exist. Please check the path."
  fi
done