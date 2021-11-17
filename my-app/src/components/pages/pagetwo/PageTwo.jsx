import React, { useState } from 'react';
import './pagetwo.css';
import { Formik, Field, Form } from 'formik';
import useStickyState from '../../reusable/sticky/UseStickyState';
import ShadowDropButton from '../../reusable/buttons/shadowdrop/ShadowDropButton.jsx';

//background: https://pocoloco.io/
function PageTwo() {

  const [submitted, setSubmitted] = useState(false);
  const [color, setColor] = useStickyState("none", "color");

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
    <div>
      <div class="page2-background" style={{ backgroundImage: `linear-gradient(90deg, #543AB7, ${color}, #3c196b)`}}>
        <div class="form-container">
          <div class="form-box" style={{background: `${color}`}}>
            <div>
              {color != "none" ? <h3>🎨 Your favorite color is <u>{color}</u>, care to change it?</h3> : <h3>🎨 Whats your favorite color???</h3>}
            </div>
            <div>
              <Formik initialValues={{ color: '' }} onSubmit={(e) => { isColor(e);}} >
                <Form class="form">
                  <Field class="field input" name="color" type="text" required />
                  <ShadowDropButton text="Change" type="submit"></ShadowDropButton>
                </Form>
              </Formik>
            </div>
            {submitted ?
              <div>
                <h4>Your favorite color has been saved using <a href="https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage/" target="_blank">Persisting State Storage</a></h4>
                <h4>Try refreshing!!</h4>
                <h5 style={{ fontSize: "12px" }}><i>*Does not apply to SSR applications</i></h5>
              </div> : null
            }
            {color === "nac" ? <h4>this is not a valid css color!</h4> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageTwo;