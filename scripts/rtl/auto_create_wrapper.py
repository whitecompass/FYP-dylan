#!/usr/bin/env python3
## usage: auto_create_wrapper.py <absolute_path/top_file.v>

import sys
top_file = sys.argv[0]

print("Path to top file:", top_file)

f = open(top_file)
for l in f:
    

