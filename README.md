# First unit and fonctionnal Test with Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Install dependencies
Run `npm i` to install all dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 

## Description of the service

- Caculate.service.ts:
The service provides two functions, the first one 'multiplyResult()', is used to calculate the input amount field by the user and the type selected. It will throw an error if the value of the input is either negative or equal to none.

The second function, will display the 20% TVA applied on the result from first function. This one, will not work if the first function failed.

- calculate.service.spec.ts:
The spec file, will allow us to write the test unit for the service.
Test run on the service:
- verify that the calcul is working,
- verfiy that the calcul is still working with the decimal number,
- check if the calcul does not work with a negative number,
- check if the calcul with the tva is applied on the result of the first function,
- and verify that this one also work with decimal number.



