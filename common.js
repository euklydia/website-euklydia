function loadHeader() {
    const headerHTML = `
    <div id="header-placeholder">
    <header class="cp-header-area cp-header-style-2" style="width: 100%; height: 100px;">
        <div id="cp-header-sticky" class="menu-area" style="width: 100%; height: 100%;">
            <div class="container" style="max-width: 100%; height: 100%;">
                <div class="second-menu">
                    <div class="row align-items-center" style="height: 100%;">
                        <div class="col-xl-2 col-lg-2 col-md-5 col-5">
                            <div class="logo">
                                <a href="./"><img src="./assets/html-demo/images/logo blanc.png" alt="logo" style="max-height: 100%;"></a>
                            </div>
                        </div>
                        <div class="col-xl-10 col-lg-10 col-md-8 col-8 text-right text-xl-right">
                        <div class="main-menu">
                                <nav id="mobile-menu">
                                    <ul class="nav">
                                    <li><a href="./" >Home </a></li>

                                    <li><a href="./about" >Our DNA</a></li>
                                    <li><a href="./whyus">Our Unique Advantage</a></li>
                                    <li class="has-submenu"><a href="./service">Boost Your Business</a>
                                            <ul class="sub-menu">
                                                <li><a href="./branddiagnosis">Brand tracking </a></li>
                                                <li><a href="./Connecting customers">Brand creation</a></li>
                                                <li><a href="./socialmedia">Social Media Strategy</a></li>
                                                <li><a href="./logodesign">Content creation </a></li>
                                                <li><a href="./Web creation">Web Creation </a></li>
                                            </ul>
                                        </li>
                                        <li><a href="./UseCase">Success Stories</a></li>
                                        <li><a href="./iaimpact">our green AI</a></li>
                                        <li><a href="./contact">Contact</a></li>
                                    </ul>
                                   
                                </nav>
                            </div>
                        </div>

                       
                        <div class="col-12">
                            <div class="mobile-menu"></div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </header>
</div> 


    `;
    document.getElementById('header-placeholder').innerHTML = headerHTML;

    // Initialize Meanmenu for mobile menu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanRevealPosition: "right"
    });
}

function loadFooter() {
    const footerHTML = `
    <div id="footer-placeholder" class="footer-scope">
    <footer class="footer-section style-2" style="background-color: #00372C; width: 100%; padding:0px 0;">
        <div class="upper-footer" style="width: 100%; padding: 20px 15px;">
            <div class="container" style="max-width: 100%;">
                <div class="row">
                    <div class="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="widget about-widget">
                            <div >
                            <img src="assets/html-demo/images/logo blanc.png" alt="logo" style="width: 210px; height: 55px;">
                            </div>
                            <p style="color: white;">Your AI marketing agency that leads the digital revolution worldwide by merging artificial intelligence with human creativity</p>
                        </div>
                    </div>
                    <div class="col col-xl-3 col-lg-2 col-md-6 col-sm-12 col-12">
                        <div class="widget link-widget">
                            <div class="widget-title">
                            <h3 style="color: white; font-family: 'Schibsted Grotesk', sans-serif;">Pages</h3>
                            </div>
                            <ul>
                                <li><a href="./" style="color: white;">Home</a></li>
                                <li><a href="./service" style="color: white;">Services</a></li>
                                <li><a href="./about" style="color: white;">About Us</a></li>
                                <li><a href="./iaimpact" style="color: white;">AI Impact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="widget contact-widget">
                            <div class="widget-title">
                            <h3 style="color: white; font-family: 'Schibsted Grotesk', sans-serif;">Adress</h3>
                            </div>
                            <div class="contact-ft">
                                <ul style="color: white;">
                                    <li style="color: white;"><i class="icon-Group-7042" style="color: white;"></i>+216 55 005 630</li>
                                    <li style="color: white;"><i class="icon-Group-7043" style="color: white;"></i>contact@euklydia.com</li>
                                    <li style="color: white;"><i class="icon-Group-7044" style="color: white;"></i>Tunis, Tunisia <br>
                                    Paris, France</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="widget subscribe">
                            <div class="widget-title">
                            <h3 style="color: white; font-family: 'Schibsted Grotesk', sans-serif;"> Get Free Estimate</h3>
                            </div>
                            <form action="#">
                                <div class="form-field">
                                    <input type="email" placeholder="Your e-mail address" id="email" required="">
                                    <button type="submit"><i class="icon-flyer"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lower-footer" style="width: 100%; padding: 10px 15px;">
            <div class="container" style="max-width: 100%;">
                <div class="row align-items-center">
                    <div class="col col-lg-6 col-12">
                        <div class="copy-right">
                            <p class="copyright" style="color: aliceblue;">© 2024 <a href="./" style="color: #00E37D;">Euklydia</a>, All Rights Reserved.</p>
                        </div>
                    </div>
                    <div class="col col-lg-6 col-12">
                        <ul class="lower-footer-link">
                            <li><a href="./contact" style="color: aliceblue;">Terms &amp; Conditions</a></li>
                            <li><a href="./contact" style="color: aliceblue;">Privacy Policy</a></li>
                            <li><a href="./contact" style="color: aliceblue;">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>


    `;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});

function loadFooter() {
    const footerHTML = `
    <div id="footer-placeholder" class="footer-scope">
    <footer class="footer-section style-2" style="background-color: #00372C; width: 100%; padding:0px 0;">
        <div class="upper-footer" style="width: 100%; padding:">
            <div class="container" style="max-width: 100%;">
                <div class="row">
                    <div class="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="widget about-widget">
                            <div >
                            <img src="assets/html-demo/images/logo blanc.png" alt="logo" style="width: 210px; height: 55px;">
                            </div>
                            <p style="color: white;">Your AI marketing agency that leads the digital revolution worldwide by merging artificial intelligence with human creativity</p>
                        </div>
                    </div>
                    <div class="col col-xl-3 col-lg-2 col-md-6 col-sm-12 col-12">
                        <div class="widget link-widget">
                            <div class="widget-title">
                            <h3 style="color: white; font-family: 'Schibsted Grotesk', sans-serif;">Pages</h3>
                            </div>
                            <ul>
                                <li><a href="./" style="color: white;">Home</a></li>
                                <li><a href="./service" style="color: white;">Services</a></li>
                                <li><a href="./about" style="color: white;">About Us</a></li>
                                <li><a href="./iaimpact" style="color: white;">AI Impact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="widget contact-widget">
                            <div class="widget-title">
                            <h3 style="color: white; font-family: 'Schibsted Grotesk', sans-serif;">Address</h3>
                            </div>
                            <div class="contact-ft">
                                <ul style="color: white;">
                                    <li style="color: white;"><i class="icon-Group-7042" style="color: white;"></i>+216 55 005 630</li>
                                    <li style="color: white;"><i class="icon-Group-7043" style="color: white;"></i>contact@euklydia.com</li>
                                    <li style="color: white;"><i class="icon-Group-7044" style="color: white;"></i>Tunis, Tunisia <br>
                                    Paris, France</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="widget subscribe">
                            <div class="widget-title">
                            <h3 style="color: white; font-family: 'Schibsted Grotesk', sans-serif;"> Get Free Estimate</h3>
                            </div>
                            <form action="#">
                                <div class="form-field">
                                    <input type="email" placeholder="Your e-mail address" id="email" required="">
                                 </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lower-footer" style="width: 100%; padding: 10px 15px;">
            <div class="container" style="max-width: 100%;">
                <div class="row align-items-center">
                    <div class="col col-lg-6 col-12">
                        <div class="copy-right">
                            <p class="copyright" style="color: aliceblue;">© 2024 <a href="./" style="color: #00E37D;">Euklydia</a>, All Rights Reserved.</p>
                        </div>
                    </div>
                    <div class="col col-lg-6 col-12">
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
    `;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    loadFooter();
});
