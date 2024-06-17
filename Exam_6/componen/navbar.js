const navbar = () =>{
    return `<nav class="navbar navbar-expand-lg bg-dark text-white">
            <div class="container-fluid ">
              <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li class="nav-item">
                    <a class="nav-link active text-white fs-5" aria-current="page" href="/index.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white fs-5" href="./pages/BookSto.html">Dashboard</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white fs-5" href="./pages/mybook.html">My Book</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white fs-5" href="./pages/mookmarks.html">BookMarks</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

`
}
export default navbar