#!/bin/bash
# simple-interest.sh
# This script calculates simple interest using the formula: (Principal * Rate * Time) / 100

# Input values
p=$1   # Principal
r=$2   # Rate of Interest
t=$3   # Time

# Calculation
si=$(( (p * r * t) / 100 ))

# Output
echo "Simple Interest: $si"

