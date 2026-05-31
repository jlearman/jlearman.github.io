#!/usr/bin/env bash

# Update files in this repo from the output of music-generator repo
# NOTE: this doesn't delete any files, so use with care.

SRC=${1:-../music-generator}/output
DST=${2:-.}/output

# To check what might be copied using diff:
# diff -rq $SRC/xml/ $DST/xml/
# diff -rq $SRC/html/ $DST/html/

# DRY=-n # uncomment to do a dry run
# DELETE=--delete # uncomment to delete files in dest no longer in src. DO DRY RUN FIRST!
VERBOSE="--info=name1"

set -ex
rsync -au --checksum $VERBOSE $DRY $DELETE $SRC/xml/ $DST/xml/ | grep -v "/$"
rsync -au --checksum $VERBOSE $DRY $DELETE $SRC/html/ $DST/html/ | grep -v "/$"

# rebuild index files.  Github won't display a directory index.
python3 mkindex.py output/html
