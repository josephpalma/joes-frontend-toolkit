import React, { useState } from 'react';
import './pagetwo.css';
import { Formik, Field, Form } from 'formik';

function PageTwo() {

  const [submitted, setSubmitted] = useState(false);
  const [color, setColor] = useState("white");

  //Dan Davis: https://stackoverflow.com/questions/48484767/javascript-check-if-string-is-valid-css-color
  const isColor = (strColor) => {
    let s = new Option().style;
    s.color = strColor.color;
    let isColor = s.color === strColor.color;
    if (isColor) {
      setSubmitted(true);
      setColor(strColor.color);
    } else {
      setSubmitted(false);
      setColor("nac");
    }
  }

  return (
    <div class="form-container" style={{background: `${color}`}}>
      {console.log(color)}
      <div>
        <h3>🎨 Whats your favorite color???</h3>
      </div>
      <div>
        <Formik initialValues={{ color: '' }} onSubmit={(e) => { isColor(e);}} >
          <Form class="form">
            <Field class="field input" name="color" type="text" required />
            <button class="field button" type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
      {submitted ?
        <div>
          <h4>Your favorite color has been saved using persitting state storage</h4>
          <h4>Try refreshing!!</h4>
          <h5 style={{ fontSize: "10px" }}><i>*Does not apply to SSR applications</i></h5>
        </div> : null
      }
      {color === "nac" ? <h4>this is not a valid css color!</h4>: null}
    </div>
  );
}

export default PageTwo;