

class SpecialHeader extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        <nav>

        <section class="slider container flex">
            <div class="sliderBox slidrImg1"></div>
            <div class="sliderBox slidrImg2"></div>
            <div class="sliderBox slidrImg3"></div>
            <div class="sliderBox slidrImg4"></div>

           
        </section>
        <div class="prev sldrIcon "><i class="fa-solid fa-chevron-left fa-2xl"></i></div>

        <div class="next sldrIcon">
            <i class="fa-solid fa-chevron-right fa-2xl"></i>
        </div>




        <section class="section1 container">
            <header>
                <div class="logo">
                    <a href="#"><img src="https://kl7.co/assets/logo/logo.png" alt=""></a>
                </div>
                <div class="togal"> <span class="bar">☰</span></div>
            </header>

            <div class="order-btn ">
                <span class="bg cp">ORDER NOW</span>
            </div>

            <div class="search-btn">

                <div class="k1"></div>

                <div class="search-icone"><i class="fa-solid fa-magnifying-glass"></i></div>

                <div class="search-input-div search-input ">
                    <input type="text" placeholder="Search for Hotels,Restaurant,Destination and more..">
                    <div class="search-click not-serch-click flex">
                        <div class="history">
                            <ul>
                                <li><i class="fa-solid fa-clock-rotate-left"></i>debitis sit minus mollitia </li>
                                <li><i class="fa-solid fa-clock-rotate-left"></i>sint consequatur asperiores </li>
                                <li><i class="fa-solid fa-clock-rotate-left"></i> dolor similique tempora est</li>
                                <li><i class="fa-solid fa-clock-rotate-left"></i> dolore quis maiores sint </li>
                                <li><i class="fa-solid fa-clock-rotate-left"></i> sit amet consectetur </li>
                                <li><i class="fa-solid fa-clock-rotate-left"></i> dolore quis maiores sint </li>

                            </ul>
                        </div>
                        <div class="serchRemove">
                            <ul>
                                <li>Remove</li>
                                <li>Remove</li>
                                <li>Remove</li>
                                <li>Remove</li>
                                <li>Remove</li>
                                <li>Remove</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </nav>


    <ul class="aside">
        <i class="fa-solid fa-circle-xmark cut"></i>
        <li><a class="nav-list active" href="index.html">Home</a></li>
        <li> <a class="nav-list" href="about.html">About Us</a> </li>
        <li> <a class="nav-list" href="hotal.html">Hotal</a> </li>
        <li><a class="nav-list" href="gallery.html"> Gallery </a></li>
      
        <li><a class="nav-list" href="contect.html"> Contact </a></li>
    </ul>          
        `
    }
}


class SpecialFooter extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        <footer class="">

        <footer class=" mb-5">
            <div class="upr flex">
                <div class="left-fo flex">
                    <span>
                        <h5>USEFUL LINK</h5>
                        <ul>
                            <a href="#">
                                <li>HOME</li>
                            </a>
                            <a href=""></a>
                            <li>ABOUT</li>
                            <li>ABOUT PATNA</li>
                            <li>KL7 HOTAL</li>
                            <li>BANQUATE HALLs</li>
                            <li>CONTACTS US</li>
                            <li>ACTIVITY</li>
                        </ul>
                    </span>
                    <span>
                        <h5>HELP</h5>
                        <ul>
                            <li>Payments</li>
                            <li>Shiping</li>
                            <li>Cancellation & return</li>
                            <li>FAQ</li>
                            <li>Reort Information</li>

                        </ul>
                    </span>
                    <span>
                        <h5>CONSUMER POLICY</h5>
                        <ul>
                            <li>Return policy</li>
                            <li>terms Of Use</li>
                            <li>Security</li>
                            <li>Privacy</li>
                            <li>Sitemap</li>
                            <li>Grievance Redressal</li>
                            <li>EPR Compliance</li>
                        </ul>
                    </span>
                    <span>
                        <h5>SOCIAL</h5>
                        <ul>
                            <li>Facebook</li>
                            <li>Twittr</li>
                            <li>YouTube</li>

                        </ul>
                    </span>

                </div>
                <div class="right-fo flex">
                    <span class="adress-mail">
                        <h5>Mail Us:</h5>
                        <p>Postal Address:raja ghat ,near gai ghaat , Bihar <br> 800007 <br>Phone : (+91)-0612 231
                            0021/22<br> : (+91)-0612 231 0021 <br> : (+91)-0612 231 0022 </p>
                    </span>
                    <span class="adress">
                        <h5>Helpline Number:(+91) 926 299 0022</h5>
                        <p>Postal Address:raja ghat ,near gai ghaat , Bihar <br> 800007 <br>Phone : (+91)-0612 231
                            0021/22<br> : (+91)-0612 231 0021 <br> : (+91)-0612 231 0022 </p>
                    </span>
                </div>
            </div>
            <div class="down d-flex justify-content-between">


                <div>
                    <p class="mt-5">Pay Now
                        Secured by Razorpay
                        © Copyright 2019. KL7 Hotel & Banquets. All rights reserved.</p>
                </div>
                <div>
                    <p class="mt-5">Design & Developed by krishna kumar</p>
                </div>


            </div>
        </footer>
    </footer>

        
        `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)