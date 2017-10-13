let array = []
let visibility = false

const toggleVisibility = () => {
      visibility = !visibility;
      render();
};

const appRoot = document.getElementById('app');
const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {visibility && (
        <div>
          <p>Hey, These are some details you can now see</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, appRoot)
}

render();



//How I did it (worked, but not the same)
/*let array = []
let shower = 1
let message = 'Show Details'

const showHide = () => {
    if (shower === 1) {
      array.push('Hello')
      console.log(array)
      shower++;
      console.log(shower);
      message = "Hide Details"
      render();
    } else {
      array = []
      shower--;
      console.log(array);
      console.log(shower);
      message = "Show Details"
      render();
    }
};

const appRoot = document.getElementById('app');
const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={showHide}>{message}</button>
      <p>{array}</p>
    </div>
  );
  ReactDOM.render(template, appRoot)
}

render();*/
