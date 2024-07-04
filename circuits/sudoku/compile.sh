#!/bin/bash


CIRCUIT=sudoku


if [ "$1" ]; then
    CIRCUIT=$1
fi


circom ${CIRCUIT}.circom --r1cs --wasm --sym --c
