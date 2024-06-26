const Navbar = () =>{
    return `<nav class="navbar navbar-expand-lg bg-black">
    <div class="container-fluid">
      <a class="navbar-brand text-light" href="/index.html">  <img src="../Components/1.png" alt="" width="80px" height="50px"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active text-light fs-5" aria-current="page" href="/index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fs-5" href="/Pages/AddPlace.html">AddPlace</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fs-5" href="/Pages/Login.html">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fs-5" href="/Pages/SignUp.html">SignUp</a>
          </li>
        </ul>
        <form class="d-flex" role="search" id = "Serchh">
          <input class="form-control me-2" id = "searchValue" type="search" placeholder="Search" >
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>`
}

export default Navbar
