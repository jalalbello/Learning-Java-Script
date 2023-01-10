# Client-side form validation

b4 submitting client data to server, we gotta ensure all `required` fields  are filled out, in the `correct format`, 

We can ensure data submitted matches the requirements set forth in the various form controls.

`
by catching invalid data on the client-side, the user can fix it straight away.
`
> client-side validation should not be considered an exhaustive security measure!, as it can be bypassed so **server-side validation**  is needed

# HTML form validation

- required: Specifies whether a form field needs to be filled in before the form can be submitted.

- minlength and maxlength: Specifies the minimum and maximum length of textual data (strings).

- min and max: Specifies the minimum and maximum values of numerical input types.

 - type: Specifies whether the data needs to be a number, an email address, or some other specific preset type.

- pattern: Specifies a regular expression that defines a pattern the entered data needs to follow

# Styling errors with css:
:valid : lets you apply a specific style to valid elements.
:invalid : lets you apply a specific style to invalid elements.
:out-of-range
  
# The Constraint Validation API

The Constraint Validation API consists of a set of methods and properties available on the following form element DOM interfaces:

HTMLButtonElement (represents a `button` element)

HTMLFieldSetElement (represents a`fieldset ` element)

HTMLInputElement (represents an `input` element)

HTMLOutputElement (represents an `output` element)

HTMLSelectElement (represents a `select` element)

HTMLTextAreaElement (represents a `textarea` element)