#!/bin/sh

set -e

echo OPTIONS: ${OPTIONS}

k6 run ${OPTIONS} test.js