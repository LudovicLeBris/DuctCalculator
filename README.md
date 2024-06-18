# DuctCalculator

This web app provide tools for choosing aeraulic duct and calculating air pressure drop easily.

## Technologies

It is a totally frontend application, write in Typescript with the framework Angular.
I used the Google's Material UI kit to speed up the developpement.  
**Angular version used : 18.02**.

The development environnement is encapuslate in a Dockerfile. It provide an Angular installation from a Node Docker image.

## How to install

### With Docker

- Build the docker file with `docker build . -t duct-calculator`
- Launch the Docker image and enter in it with `docker run -it $(id -u) -rm duct-calculator bash`
- Create an Angular project `ng new DuctCalculator --skip-git=true --ssr=false --style=scss --interactive=false`

### Without Docker

- Angular 18 must be installed on yout machine
- Run `npm install`
