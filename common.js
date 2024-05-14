function loadHeader() {
    const headerHTML = `
    <header class="cp-header-area cp-header-style-2">
        <div id="cp-header-sticky" class="menu-area">
            <div class="container">
                <div class="second-menu">
                    <div class="row align-items-center">
                        <div class="col-xl-2 col-lg-2 col-md-5 col-5">
                            <div class="logo">
                                <a href="index.html"><img src="assets/html-demo/images/logo blanc.png" alt="logo"></a>
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-7 col-md-1 col-1 text-right text-xl-right">
                            <div class="main-menu">
                                <nav id="mobile-menu">
                                    <ul class="nav">
                                        <li class="has-submenu">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li><a href="about.html">About Us</a></li>
                                        <li class="has-submenu"><a href="service.html">Our Services</a>
                                            <ul class="sub-menu">
                                                <li><a href="branddiagnosis.html">AI Brand diagnosis and tracking</a></li>
                                                <li><a href="Connecting customers.html">Connecting with your target customers</a></li>
                                                <li><a href="socialmedia.html">Social media management and content creation</a></li>
                                                <li><a href="logodesign.html">Logo design and brand’s identity</a></li>
                                                <li><a href="Web creation.html">Web creation</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="whyus.html">Why us</a></li>
                                        <li><a href="UseCase.html">Case Study</a></li>
                                        <li><a href="iaimpact.html">AI Impact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6 col-6 text-left">
                            <div class="cp-header-area-right">
                                <a href="contact.html" class="ch-btn-style-2"><span>Contact</span></a>
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
    <footer class="footer-section style-2" style="background-color: #00372C;">
        <div class="upper-footer">
            <div class="container">
                <div class="row">
                    <div class="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="widget about-widget">
                            <div class="logo widget-about">
                                <img src="assets/logo blanc.png" alt="logo">
                            </div>
                            <p style="color: white;">Your AI marketing agency that leads the digital revolution worldwide by merging artificial intelligence with human creativity</p>
                            <div class="widget social-widget p-0">
                                <ul class="pbmit-social-links">
                                    <li class="pbmit-social-li pbmit-social-facebook">
                                        <a href="#" target="_blank"><span><i class="pbmit-base-icon-facebook-f" style="color: #00E37D;"></i></span></a>
                                    </li>
                                    <li class="pbmit-social-li pbmit-social-twitter">
                                        <a href="#" target="_blank"><span><i class="pbmit-base-icon-twitter" style="color: #00E37D;"></i></span></a>
                                    </li>
                                    <li class="pbmit-social-li pbmit-social-linkedin">
                                        <a href="#" target="_blank"><span><i class="pbmit-base-icon-linkedin-in" style="color: #00E37D;"></i></span></a>
                                    </li>
                                    <li class="pbmit-social-li pbmit-social-instagram">
                                        <a href="#" target="_blank"><span><i class="pbmit-base-icon-instagram" style="color: #00E37D;"></i></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col col-xl-3 col-lg-2 col-md-6 col-sm-12 col-12">
                        <div class="widget link-widget">
                            <div class="widget-title">
                                <h3 style="color: white;">Pages</h3>
                            </div>
                            <ul>
                                <li><a href="" style="color: white;">Home</a></li>
                                <li><a href="service.html" style="color: white;">Services</a></li>
                                <li><a href="about.html" style="color: white;">About Us</a></li>
                                <li><a href="iaimpact.html" style="color: white;">AI Impact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="widget contact-widget">
                            <div class="widget-title">
                                <h3 style="color: white;">Address</h3>
                            </div>
                            <div class="contact-ft">
                                <ul style="color: white;">
                                    <li style="color: white;"><i class="icon-Group-7042" style="color: white;"></i>+33 619 091 448</li>
                                    <li style="color: white;"><i class="icon-Group-7043" style="color: white;"></i>contact@euklydia.com</li>
                                    <li style="color: white;"><i class="icon-Group-7044" style="color: white;"></i>Tunis: Rue Ibn nafis <br> zone industrielle Kram</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="widget subscribe">
                            <div class="widget-title">
                                <h3 style="color: white;">Get Free Estimate</h3>
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
        <div class="lower-footer">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col col-lg-6 col-12">
                        <div class="copy-right">
                            <p class="copyright" style="color: aliceblue;">© 2024 <a href="index.html" style="color: #00E37D;">Euklydia</a>, All Rights Reserved.</p>
                        </div>
                    </div>
                    <div class="col col-lg-6 col-12">
                        <ul class="lower-footer-link">
                            <li><a href="contact.html" style="color: aliceblue;">Terms &amp; Conditions</a></li>
                            <li><a href="contact.html" style="color: aliceblue;">Privacy Policy</a></li>
                            <li><a href="contact.html" style="color: aliceblue;">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});
