<template>
    <div>
        <!-- <h1 class="bg-dark text-white">Hi</h1> -->
        <header class="">
            <div class="top-header row">
                <div class="col-md-3 col-sm-0"></div>
                <div class="col-md-9 col-sm-11 pt-3 text-center text-white slant-top">
                    <p class="slant-text">DISCIPLINE, SELF RELIANCE & EXCELLENCE</p>
                </div>
            </div>
            <div class="middle-header row mt-4 ml-3">
                <div class="col-md-3 ml-1 mr-0">
                    <router-link to="/"><a href=""></a><img src="../assets/images/unilogo.png" alt="Unizik Logo" class="img-fluid"></router-link>
                </div>
                <div class="col-md-2 row mt-3 mx-0">
                    <div class="col-md-2 ">
                        <div class="bg-gray rounded-circle mb-3 text-center" style="height: 30px; width: 30px">
                            <i class="fa fa-phone mt-2" style="font-size: 1.3rem"></i>
                        </div>
                    </div>
                    <div class="col-md-8 mx-0">
                        <p class="pb-1 mb-0 small-nav">Support@unizik.edu.ng</p>
                        <p class="pt-0 small-nav">+234812345678</p>
                    </div>
                </div>
                <div class="col-md-3 site-name px-0">
                    UNIVERSITY HOSTELS
                </div>
                <div class="col-md-2 row mt-3 px-0">
                    <div class="col-md-2 px-0">
                        <div class="bg-gray rounded-circle mx-0 mb-3 text-center" style="height: 36px; width: 36px">
                            <i class="far fa-clock mt-2" style="font-size: 1.6rem"></i>
                        </div>
                    </div>
                    <div class="col-md-10 text-left px-0">
                        <p class="pb-1 mb-0 small-nav">Mon - Sat : 8:00am - 5:00pm</p>
                        <p class="pt-0 small-nav">Sunday: Closed</p>
                    </div>
                </div>
                <div class="col-md-2 mx-0 px-0">
                    <div class="border py-3 px-2 rounded text-center mx-auto w-75">
                        <span class="mr-3"> Uzondu Lucy </span>
                        <i class="fa fa-chevron-down"></i>
                    </div>
                </div>
            </div>
            <div class="mt-3 col-md-8 mx-auto" id="floatNavbar">
                <nav class="navbar bg-white navbar-white uni-navbar p-0">
                   
                    <ul class="nav col-md-7 float-left">
                        <li class="nav-item active">
                            <a class="nav-link text-dark" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="/about">About us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">Pages</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">Contact</a>
                        </li>
                    </ul>
                    <div class="col-md-4 float-right input-group">
                        <input class="form-control" type="text" name="search" id="searchSite">
                        <div class="input-group-append">
                            <button class="btn input-group-text bg-white" id="searchSiteBtn" type="submit">
                                <i class="fa fa-search" style=""></i>
                            </button>
                        </div>

                    </div>
                </nav>
            </div>
        </header>
        <section class="" id="mainSlide">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active text-bold text-white" id="slide1">
                        <div class="mt-5 blockquote text-left ml-5 w-50">
                            <h4 class="slideHeading">UNIVERSITY HOSTEL</h4>
                            <p class="slideBody">Undergo your studies in <br>a peaceful accomodation</p>
                            <div class="w-50 d-flex justify-content-start mt-4">
                                <button class="btn btn-primary px-4 py-2 text-uppercase mr-4">
                                    <span class="py-2 font-weight-bold">Book a Room</span>
                                </button>
                                <button class="btn btn-light text-primary px-4 py-2 text-uppercase">
                                    <span class="py-2 font-weight-bold">Make Enquiry</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item text-bold text-white" id="slide2">
                        <div class="mt-5 blockquote text-left ml-5 w-50">
                            <h4 class="slideHeading">UNIVERSITY HOSTEL</h4>
                            <p class="slideBody">Pursue Excellence <br>in peace of mind</p>
                            <div class="w-50 d-flex justify-content-start mt-4">
                                <button class="btn btn-primary px-4 py-2 text-uppercase mr-3">
                                    <span class="py-2 font-weight-bold">Book a Room</span>
                                </button>
                                <button class="btn btn-light text-primary px-4 py-2 text-uppercase">
                                    <span class="py-2 font-weight-bold">Make Enquiry</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item text-bold text-white" id="slide3">
                        <div class="mt-5 blockquote text-left ml-5 w-50">
                            <h4 class="slideHeading">UNIVERSITY HOSTEL</h4>
                            <p class="slideBody">Designed with love <br>for a successful study</p>
                            <div class="w-50 d-flex justify-content-start mt-4">
                                <button class="btn btn-primary px-4 py-2 text-uppercase mr-3">
                                    <span class="py-2 font-weight-bold">Book a Room</span>
                                </button>
                                <button class="btn btn-light text-primary px-4 py-2 text-uppercase">
                                    <span class="py-2 font-weight-bold">Make Enquiry</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="features">
            <div class="row d-flex justify-content-center pt-5">
                <div class="text-center col-md-12" id="feature-title">
                    <p class="text-uppercase text-yellow">Explore Our</p>
                    <p class="text-white font-weight-bold" id="feature-title2">Hostel Features</p>
                </div>
                <div class="row d-flex justify-content-center mt-3">
                    <div class="col-md-3 text-center bg-light feat mr-5">
                        <p class="text-primary feat-icon">
                            <i class="fa fa-user-shield"></i>
                        </p>
                        <p class="text-black font-weight-bold mb-1">24/7 Security</p>
                        <p class="feat-text text-black">
                            The accommodation facilities are well equipped with well 
                            trained security personnels to ensure safety of occupants at all times
                        </p>
                    </div>
                    <div class="col-md-3 text-center bg-light feat mr-5">
                        <p class="text-primary feat-icon">
                            <i class="fa fa-bed"></i>
                        </p>
                        <p class="text-black font-weight-bold mb-1">Spacious Rooms</p>
                        <p class="feat-text text-black">
                            Elegant well-spaced and condusive rooms are the standards for our every accommodation. 
                            We give you thecomfort required for effective studies
                        </p>
                    </div>
                    <div class="col-md-3 text-center bg-light feat">
                        <p class="text-primary feat-icon">
                            <i class="fa fa-globe"></i>
                        </p>
                        <p class="text-black font-weight-bold mb-1">24/7 Social Amenities</p>
                        <p class="feat-text text-black">
                            Basic social amenties to promote effective studing 
                            (including electricity, clean water, food stalls) are 
                            made accessible to occupant always
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section id="tour">
            <div class="row justify-content-center py-3">
                <div class="col-md-4">
                    <img src="../assets/images/slide2.png" width="400" height="280" alt="Hostel Tour">
                </div>
                <div class="col-md-4 pt-5">
                    <p class="text-uppercase text-primary font-weight-bold">Take a look at our</p>
                    <p class="text-black font-weight-bold tour-title2">Comfortable and Spacious Rooms</p>
                    <p class="text-dark">
                        We have an amazing facility that will serve for comfort and as well 
                        help promote the student efficiency and productivity throught their 
                        stay in the room. You can take tours of all the rooms right here.
                    </p>
                    <button class="btn btn-primary tour-btn">TAKE TOUR</button>
                </div>
            </div>
        </section>
        <section id="testimony">
            <div class="row justify-content-center">
                <div class="col-md-6 py-5">
                    <div class="row d-flex justify-content-between pt-3">
                        <div class="col-md-5">
                            <p class="text-primary">
                                WHAT THEY HAVE TO SAY?
                            </p>
                            <p class="text-black font-weight-bold testi-title">
                                Testimonies
                            </p>
                        </div>
                        <div class="col-md-2 text-right">
                            <i class="quote-icon text-primary fa fa-quote-right"></i>
                        </div>
                    </div>
                    <div class="">
                        <p class="text-dark testi-text font-italic">
                            Elegant well-spaced and condusive rooms are the standards for 
                            our every accommodation facilities. We give you the space and 
                            comfort required for effective studies
                        </p>
                    </div>
                    <div class="row justify-content-between mt-5">
                        <div class="col-md-7 row">
                            <div class="col-md-3">
                                <img class="rounded-circle" src="../assets/images/testipic.png" alt="student" width="60" height="60">
                            </div>
                            <div class="col-md-5 pl-0 mt-3">
                                <p class="mb-1 font-weight-bold">Lucy Uzondu</p>
                                <p class="testi-star">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </p>
                            </div>
                        </div>
                        <div class="col-md-3 mt-4">
                            <button class="btn btn-light border mr-3">
                                <i class="fa fa-chevron-left"></i>
                            </button>
                            <button class="btn btn-light border">
                                <i class="fa fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mt-5">
                    <div class="card testi-call py-5 px-5 col-md-7">
                        <div class="text-center">
                            <p class="font-weight-bold text-black">
                                Always listening, always understanding.
                            </p>
                        </div>
                        <div class="mt-3">
                            <input type="text" class="form-control" placeholder="Your phone number">
                            <br>
                            <button class="btn btn-primary text-uppercase call-btn py-2 font-weight-bold">
                                GET A PHONE CALL
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="gallery" class="mt-4 pb-4">
            <div class="text-center pt-3">
                <p class="text-uppercase font-weight-bold gal-title text-primary mb-1">
                    TAKE A LOOK AT
                </p>
                <p class="text-capitalize gal-text text-white font-weight-bold">
                    Life In The Hostel
                </p>
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-md-2 mr-4">
                    <div class="col-md-12">
                        <img src="../assets/images/gallery1.png" alt="" width="240" height="180">
                    </div>
                    <div class="row ml-2 mt-3" >
                        <div class="col-md-2">
                            <div class="gal-letter text-center ">
                                <p class="text-black font-weight-bold ">
                                    A
                                </p>
                            </div>
                        </div> 
                        <div class="col-md-10">
                            <p class="text-white">
                                Here’s what you should know before buying travel…
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 mr-4">
                    <div class="col-md-12">
                        <img src="../assets/images/gallery2.png" alt="" width="240" height="180">
                    </div>
                    <div class="row ml-2 mt-3" >
                        <div class="col-md-2">
                            <div class="gal-letter text-center ">
                                <p class="text-black font-weight-bold ">
                                    B
                                </p>
                            </div>
                        </div> 
                        <div class="col-md-10">
                            <p class="text-white">
                                Here’s what you should know before buying travel…
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 mr-4">
                    <div class="col-md-12">
                        <img src="../assets/images/gallery3.png" alt="" width="240" height="180">
                    </div>
                    <div class="row ml-2 mt-3" >
                        <div class="col-md-2">
                            <div class="gal-letter text-center ">
                                <p class="text-black font-weight-bold ">
                                    C
                                </p>
                            </div>
                        </div> 
                        <div class="col-md-10">
                            <p class="text-white">
                                Here’s what you should know before buying travel…
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 mr-4">
                    <div class="col-md-12">
                        <img src="../assets/images/gallery4.png" alt="" width="240" height="180">
                    </div>
                    <div class="row ml-2 mt-3" >
                        <div class="col-md-2">
                            <div class="gal-letter text-center ">
                                <p class="text-black font-weight-bold ">
                                    D
                                </p>
                            </div>
                        </div> 
                        <div class="col-md-10">
                            <p class="text-white">
                                Here’s what you should know before buying travel…
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="news" class="mt-4">
            <div class="text-center pt-3">
                <p class="text-uppercase font-weight-bold news-title text-primary mb-1">
                    GET UP TO DATE
                </p>
                <p class="text-capitalize news-text text-black font-weight-bold">
                    Latest from News
                </p>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-3">
                    <div class="col-md-12">
                        <img src="../assets/images/news1.png" alt="unizik picture" width="260" height="180">
                    </div>
                    <div class="row ml-1 mt-3">
                        <div class="col-md-2">
                            <div class="news-date text-center pt-2">
                                <p class="text-primary mb-0 news-datenum">
                                    28
                                </p>
                                <p class="news-datemonth mb-0">
                                    SEP
                                </p>
                            </div>
                        </div>
                        <div class="col-md-10">
                            <p class="text-black font-weight-bold mb-1">
                                Here’s what you should know before buying travel…
                            </p>
                            <p class="text-black-50">
                                <span class="px-2">
                                    <i class="fa fa-user"></i>
                                </span>
                                <span class="">Jessica Temphers</span>
                                <span class="px-2">
                                    <i class="fa fa-comment"></i>
                                    12
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="col-md-12">
                        <img src="../assets/images/news2.png" alt="unizik picture" width="260" height="180">
                    </div>
                    <div class="row ml-1 mt-3">
                        <div class="col-md-2">
                            <div class="news-date text-center pt-2">
                                <p class="text-primary mb-0 news-datenum">
                                    08
                                </p>
                                <p class="news-datemonth mb-0">
                                    OCT
                                </p>
                            </div>
                        </div>
                        <div class="col-md-10">
                            <p class="text-black font-weight-bold mb-1">
                                Here’s what you should know before buying travel…
                            </p>
                            <p class="text-black-50">
                                <span class="px-2">
                                    <i class="fa fa-user"></i>
                                </span>
                                <span class="">Jessica Temphers</span>
                                <span class="px-2">
                                    <i class="fa fa-comment"></i>
                                    12
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="col-md-12">
                        <img src="../assets/images/news3.png" alt="unizik picture" width="260" height="180">
                    </div>
                    <div class="row ml-1 mt-3">
                        <div class="col-md-2">
                            <div class="news-date text-center pt-2">
                                <p class="text-primary mb-0 news-datenum">
                                    30
                                </p>
                                <p class="news-datemonth mb-0">
                                    AUG
                                </p>
                            </div>
                        </div>
                        <div class="col-md-10">
                            <p class="text-black font-weight-bold mb-1">
                                Here’s what you should know before buying travel…
                            </p>
                            <p class="text-black-50">
                                <span class="px-2">
                                    <i class="fa fa-user"></i>
                                </span>
                                <span class="">Jessica Temphers</span>
                                <span class="px-2">
                                    <i class="fa fa-comment"></i>
                                    12
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="supports" class="mt-5 pb-5">
            <div class="w-75 mx-auto mb-5">
                <hr class="bg-dark">
            </div>
            <div class="d-flex justify-content-center">
                <img src="../assets/images/1.png" alt="company logo" class="mx-5" width="100" height="50" >
                <img src="../assets/images/2.png" alt="company logo" class="mx-5" width="100" height="50" >
                <img src="../assets/images/3.png" alt="company logo" class="mx-5" width="100" height="50" >
                <img src="../assets/images/4.png" alt="company logo" class="mx-5" width="100" height="50" >
                <img src="../assets/images/5.png" alt="company logo" class="mx-5" width="100" height="50" >
                <img src="../assets/images/3.png" alt="company logo" class="mx-5" width="100" height="50" >
                <img src="../assets/images/1.png" alt="company logo" class="mx-5" width="100" height="50" >
            </div>
        </section>
        
    </div>
</template>

<script>
export default {
    name: 'NavTop'
}
</script>

<style scoped>
.foot-btn{
    height: 40px;
}
.foot-col1-text{
    font-size: 1.1rem;
}
.btn-orange{
    background: #D35400;
}
.foot-title {
    font-size: 1.5rem;
}
footer{
    background: #0C2034;
    /* height: 450px; */
}
.news-date{
    width: 55px;
    height: 60px;
    background: #F5F5F5;
}
.news-datemonth{
    font-size: 0.8rem;
}
.news-datenum{
    font-size: 2rem;
    line-height: 28px;
}
.gal-letter{
    background: #D35400;
    width: 30px;
    height: 30px;
    vertical-align: 3px;
}
.gal-letter p{
    font-size: 1.5rem;
}
.gal-text, .news-text{
    font-size: 1.4rem;
}
.gal-title, .news-title{
    font-size: 0.8rem;
    letter-spacing: 0.8px;
}
#gallery{
    background: #0C2034;
}
.call-btn{
    font-size: 0.8rem;
    width: 100%;
}
.testi-star{
    font-size: 0.8rem;
    color: #ff9d00;
}
.testi-title{
    font-size: 1.5rem;

}
.quote-icon{
    font-size: 3rem;
    opacity: 30%;
}
#testimony{
    background: #F2F8FE;
}
.tour-btn{
    font-size: 0.9rem;
    width: 177px;
}
.tour-title2{
    font-size: 2rem;
}
.feat-icon{
    font-size: 3rem;
}
.feat{
    height: 200px;
}
.feat-text, .testi-test{
    color: rgb(95, 94, 94);
    font-size: 0.9rem;
}
#feature-title2{
    font-size: 1.9rem;
    line-height: 5px;
}
.text-yellow{
   color: #F0FF00; 
}
#features{
    width: 100%;
    height: 350px;
    background-size: cover;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.89), rgba(24, 22, 22, 0.924)),url('../assets/images/slide1.png');
    margin-top: 16%;
}
.slideHeading{
    color: #F0FF00;
    font-size: 2.3rem;
    font-weight: bold;
}
.slideBody{
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 37px;
}
.carousel-indicators li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
}
#mainSlide {
    margin-top: -27px;
    max-height: 300px;
    padding: 0;
}
#slide1, #slide2, #slide3{
    padding-left: 15%;
    padding-top: 9%;
    height: 530px;
    width: 100%;
}
#slide1{
    background-size: cover;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.89), rgba(24, 22, 22, 0.692), transparent),url('../assets/images/slide1.png');
}
#slide2{
    background-size: cover;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.89), rgba(24, 22, 22, 0.534), transparent),url('../assets/images/slide2.png');
}
#slide3{
    background-size: cover;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.89), rgba(24, 22, 22, 0.678), transparent),url('../assets/images/slide1.png');
}
#floatNavbar{
    z-index: 200;
}
.nav-item {
    height: 50px;
    text-transform: uppercase;
}
.nav-item a{
    padding-top: 1.2rem ;
    font-size: 0.9rem;
    font-weight: 600;
}
.active {
    background: #0278F2;
}
.active a{
    color: #fff !important;
}
.active a:hover{
    color: #fff !important;
}
#searchSite {
    border-top-left-radius: 50rem;
    border-bottom-left-radius: 50rem;
}
#searchSiteBtn {
    border-top-right-radius: 50rem;
    border-bottom-right-radius: 50rem;
}
.uni-navbar{
    border-top: 1px solid #F5F5F5;
}

.slant-top {
    position: relative;
    display: inline-block;
    overflow: hidden;
}
.slant-top:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(37, 98, 138);
    -webkit-transform-origin: 100% 0;
    -ms-transform-origin: 100% 0;
    transform-origin: 100% 0;
    -webkit-transform: skew(45deg);
    -ms-transform: skew(45deg);
    transform: skew(45deg);
    z-index: -1;
}
.slant-text {
    font-size: 0.9rem;
}
.site-name {
    font-size: 2.3rem;
    font-weight: 700;
    color: rgb(37, 98, 138);
}
.bg-gray {
    background: #ebf5fa;
}
.small-nav {
    font-size: 0.9rem; 
}
</style>