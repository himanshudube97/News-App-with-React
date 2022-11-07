

function Navbar(props){
    return <div className="navDiv">
 <nav class="navbar navbar-expand-lg navbar-dark bg-danger  ">
    <div class="container-fluid">
    <a class="navbar-brand Brand" href="#">News</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon "></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <button className="btn btn-danger" onClick={props.changeNewsCategory} value="business">Business</button>
          <button className="btn btn-danger" onClick={props.changeNewsCategory} value="entertainment">Entertainment</button>
          <button className="btn btn-danger" onClick={props.changeNewsCategory} value="general">General</button>
          <button className="btn btn-danger" onClick={props.changeNewsCategory} value="health">Health</button>
          <button className="btn btn-danger" onClick={props.changeNewsCategory} value="science">Science</button>
          <button className="btn btn-danger" onClick={props.changeNewsCategory} value="sports">Sports</button>
          <button className="btn btn-danger" onClick={props.changeNewsCategory} value="technology">Technology</button>
        </ul>
        <form class="d-flex" role="search">
        <input onChange={props.changeInput} class="form-control me-2" type="search" placeholder="search..." aria-label="Search"></input>
        <button onClick={props.changeQuery} class="btn btn-outline-light">Search</button>
      </form>
      </div>
    </div>
  </nav>
  </div>
}
export default Navbar