const navbar = (login = " login", Signup = "signup") => {
    return `<nav class="navbar navbar-expand-lg bg-black text-white">
    <div class="container-fluid ">
      <a class="navbar-brand text-white " href="../index.html"><img src="../components/1.png" alt="" width="70px" height="50px">  </a>
      <button
        class="navbar-toggler  bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon "></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link active text-white fs-5"
              aria-current="page"
              href="../index.html"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-white fs-5" href="../html/Products.html">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white fs-5" href="../html/AddProducts.html"
              >Add Product</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-white fs-5" href="../html/Cart.html">Cart</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white fs-5" id ="login" href="../html/Login.html">${login}</a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-white fs-5" href="../html/SignUp.html">${Signup}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`
}

export default navbar