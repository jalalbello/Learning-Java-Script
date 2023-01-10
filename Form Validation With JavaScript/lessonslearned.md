# Radio inputs

```jsx
They need to have the same name in order for only one to be selected
```
```html
    <fieldset>
      <legend>
        Do you have a Driver's license?<span aria-label="required">*</span>
      </legend>
      <input type="radio" name="driving_license" id="yes_driving_license" value="yes" required />
      <label for="yes_driving_license">Yes</label>
      <input type="radio" name="driving_license" id="no_driving_license" value="no" required />
      <label for="no_driving_license">No</label>
    </fieldset>
```