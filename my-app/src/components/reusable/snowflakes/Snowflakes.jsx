import './snowflakes.css'

function Snowflakes() {
  let d = new Date();
  if (d.getMonth() === 11 && d.getDate() > 9 && d.getDate() < 28) {
    return (
      <div class="snowflakes" aria-hidden="true">
        <div class="snowflake">
          ❅
        </div>
        <div class="snowflake">
          ❆
        </div>
        <div class="snowflake">
          ❅
        </div>
        <div class="snowflake">
          ❆
        </div>
        <div class="snowflake">
          ❅
        </div>
        <div class="snowflake">
          ❆
        </div>
        <div class="snowflake">
          ❅
        </div>
        <div class="snowflake">
          ❆
        </div>
        <div class="snowflake">
          ❅
        </div>
        <div class="snowflake">
          ❆
        </div>
        <div class="snowflake">
          ❅
        </div>
        <div class="snowflake">
          ❆
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Snowflakes;