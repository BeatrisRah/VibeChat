export default function Navigation() {
   return (
    <header class="header_section">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg custom_nav-container ">
                <a class="navbar-brand" href="/">
                    <span>
                        VibeChat
                    </span>
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class=""> </span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav  ">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/chatrooms"> Chatrooms</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about"> About</a>
                        </li>

                        
                        <li class="nav-item">
                            <a class="nav-link" href="/user/"> <i class="fa fa-user" aria-hidden="true"></i> Account</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/auth/logout"> Logout</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/auth/login"> <i class="fa fa-user" aria-hidden="true"></i> Login</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/auth/register"> Register</a>
                        </li>
                        <form class="form-inline">
                            <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </form>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
   );
}