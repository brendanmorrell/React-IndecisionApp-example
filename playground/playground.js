const array = ['a','b','c','d','e','f']



const Filter = () => {
  return(
    <div>
      <h1>
        {array.map((gobbledygook) => {
          return gobbledygook+'5';
        })}<br />
        {array.filter((whatever) => {
          return whatever!=='a';
        })}
      </h1>
    </div>
  )
}





ReactDOM.render(<Filter />, document.getElementById('app'));
