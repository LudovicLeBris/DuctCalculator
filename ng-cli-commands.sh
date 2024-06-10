#!/bin/zsh

Help()
(
  echo "Shortcuts for Angular CLI commands in docker container"
  echo
  echo "Syntax: sh ng-cli-commands [-s|c|h] ["ng command"]"
  echo "options :"
  echo "s    serve the project to the localhost:4200 url"
  echo "h    print this help"
  echo "t    launch test routine"
  echo "c    run commands in the project container folder, useful for ng cli commands or npm install. The command must be between double quotes ("")"
  echo
  echo "By default without arguments, the command is "bash", who grant access to the project folder in container"
)

Command="bash"

while getopts ":hstc:" option; do
  case $option in
    h)
      Help
      exit;;
    s)
      docker run -it -u $(id -u) --rm -p 4200:4200 -v "$PWD":/app/DuctCalculator --workdir /app/DuctCalculator duct-calculator ng serve --host 0.0.0.0
      exit;;
    t)
      docker run -it -u $(id -u) --rm -p 9876:9876 -v "$PWD":/app/DuctCalculator --workdir /app/DuctCalculator duct-calculator ng test
      exit;;
    c)
      Command=$OPTARG
      docker run -it -u $(id -u) --rm -v "$PWD":/app/DuctCalculator --workdir /app/DuctCalculator duct-calculator $Command
      exit;;
    \?)
      echo "Error: Invalid option"
      exit;;
  esac
done

docker run -it -u $(id -u) --rm -v "$PWD":/app/DuctCalculator --workdir /app/DuctCalculator duct-calculator bash
