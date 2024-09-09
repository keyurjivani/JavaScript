export const navbar = (login="Login",signup="Sign UP") => {
    return `<nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"><img class="rounded" id="logo"
                src="/Live_Class_Project/Images/project.png" alt="Image Loading.." height="30px" width="80px"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link ms-0" href="/Project_Presention/Index.html" id="nav_a">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Project_Presention/html/Products.html" id="nav_a">Product</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Project_Presention/html/AddNovel.html" id="nav_a">Add Product</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Project_Presention/html/Cart.html" id="nav_a">Cart</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Project_Presention/html/Login.html" id="login">${login}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Project_Presention/html/Sign_up.html" id="nav_a">${signup}</a>
                </li>
            </ul>
            <form class="d-flex" role="search" id="search">
                <input class="form-control me-2" type="search" id="search_input" placeholder="Enter Category" aria-label="Search">
                <button class="btn btn-outline-light" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>`
}