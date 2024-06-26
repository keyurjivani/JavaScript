const navbar = () => {
  return `
    
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/JavaScript/EXAM_7/index.html">  <img src="/JavaScript/EXAM_7/Components/1.png" alt="" width="80px" height="50px"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/JavaScript/EXAM_7/index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/JavaScript/EXAM_7/Pages/AddPlace.html">AddPlace</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/JavaScript/EXAM_7/Pages/Login.html">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/JavaScript/EXAM_7/Pages/SignUp.html">SignUp</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

`
}
export default navbar;
