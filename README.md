# Entry form - an interactive form in which the user enters his payment card data to pay for the service.

"Pure" JavaScript (Vanilla JS) is used.

## Styles:

- design reproduced by Pixel Perfect;
- preprocessor SCSS;

## Validation

The form undergoes dynamic validation:

- all fields must be filled in to continue;
- the card number must meet the requirements for payment card numbers;
- the "Next step" button is active only in the case of a correctly verified form;
- the form is checked both after each character is entered and after the button is pressed.
- if the user clicks the active "Next Step" button, the standard "Success" notification appears.
