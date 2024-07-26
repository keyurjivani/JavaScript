const navbar = () => {
    return `<nav class="navbar navbar-expand-lg  bg-black">
    <div class="container-fluid">
      <a class="navbar-brand text-light" href="">Logo </a>
      <button
        class="navbar-toggler text-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon bg-danger"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link active text-light fs-5"
              aria-current="page"
              href=""
              ></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fs-5" href="/Api_Project/Pages/Product.html">Product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fs-5" href="/Api_Project/Pages/cart.html"
              >Cart</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fs-5" href="/Api_Project/Pages/AddProducts.html">AddProducts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fs-5" href="/Api_Project/Pages/Login.html">Login</a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-light fs-5" href="/Api_Project/Pages/Signup.html">Sign Up</a>
          </li>
        </ul>
        <!-- <form class="d-flex text-light fs-5" role="search" id="search">
          <input
            class="form-control me-2 text-light fs-5"
            type="search"
            placeholder="Search"
            aria-label="Search" id="Searching"
          />
          <button class="btn btn-outline-light text-light fs-5" type="submit">
            Search
          </button>
        </form> -->
      </div>
    </div>
  </nav>


`
}

export default navbar
