

function loadHeader() {
    const headerHTML = `
    <div id="header-placeholder">
    <header class="cp-header-area cp-header-style-2">
        <div id="cp-header-sticky" class="menu-area">
            <div class="container">
                <div class="second-menu">
                    <div class="row align-items-center">
                        <div class="col-xl-2 col-lg-2 col-md-5 col-5">
                            <div class="logo">
                                <a href="./"><img src="./assets/html-demo/images/logo blanc.png" alt="logo"></a>
                            </div>
                        </div>
                        <div class="col-xl-10 col-lg-14 col-md-8 col-8 text-right text-xl-right">
                            <div class="main-menu">
                                <nav id="mobile-menu">
                                    <ul class="nav">
                                        <li><a href="./DNA" data-translate="our_dna">Our DNA</a></li>
                                        <li><a href="./whyus" data-translate="our_unique_advantage">Our Unique Advantage</a></li>
                                        <li class="has-submenu"><a href="./service" data-translate="boost_your_business">Boost Your Business</a>
                                            <ul class="sub-menu">
                                                <li><a href="./branddiagnosis" data-translate="brand_tracking">Brand tracking</a></li>
                                                <li><a href="./brandcreation" data-translate="brand_creation">Brand creation</a></li>
                                                <li><a href="./socialmedia" data-translate="social_media_strategy">Social Media Strategy</a></li>
                                                <li><a href="./contentcreation" data-translate="content_creation">Content creation</a></li>
                                                <li><a href="./Web creation" data-translate="web_creation">Web Creation</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="./UseCase" data-translate="success_stories">Success Stories</a></li>
                                        <li><a href="./iaimpact" data-translate="our_green_ai">Our Green AI</a></li>
                                        <li><a href="./blog" data-translate="blog">Blog</a></li>
                                        <li><a href="./contact" data-translate="contact">Contact</a></li>
                                        <li class="dropdown">
                                            <button class="dropbtn"><i id="current-lang" class="flag-icon flag-icon-fr"></i></button>
                                            <div class="dropdown-content">
                                                <a id="fr" class="lang" data-lang="fr"><i class="flag-icon flag-icon-fr"></i> French</a>
                                                <a id="en" class="lang" data-lang="en"><i class="flag-icon flag-icon-us"></i> English</a>
                                            </div>
                                        </li>
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
 </div>`;
    document.getElementById('header-placeholder').innerHTML = headerHTML;

    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanRevealPosition: "right"
    });

    const currentLang = localStorage.getItem('selectedLanguage') || 'fr';
    setCurrentLanguageIcon(currentLang);
    translateContent(currentLang);

    document.querySelectorAll('.lang').forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            const lang = event.target.closest('.lang').getAttribute('data-lang');
            setLanguage(lang);
        });
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
                            <div>
                                <img src="assets/html-demo/images/logo blanc.png" alt="logo" style="width: 210px; height: 55px;">
                            </div>
                            <p style="color: white;" data-translate="footer_description">Your AI marketing agency that leads the digital revolution worldwide by merging artificial intelligence with human creativity</p>
                        </div>
                    </div>
                    <div class="col col-xl-3 col-lg-2 col-md-6 col-sm-12 col-12">
                        <div class="widget link-widget">
                            <div class="widget-title">
                                <h3 style="color: white; font-family: 'Schibsted Grotesk', sans-serif;" data-translate="pages">Pages</h3>
                            </div>
                            <ul>
                                <li><a href="./" style="color: white;" data-translate="home">Home</a></li>
                                <li><a href="./service" style="color: white;" data-translate="services">Services</a></li>
                                <li><a href="./DNA" style="color: white;" data-translate="our_dna">Our DNA</a></li>
                                <li><a href="./iaimpact" style="color: white;" data-translate="ai_impact">AI Impact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="widget contact-widget">
                            <div class="widget-title">
                                <h3 style="color: white; font-family: 'Schibsted Grotesk', sans-serif;" data-translate="address">Address</h3>
                            </div>
                            <div class="contact-ft">
                                <ul style="color: white;">
                                    <li style="color: white;"><i class="icon-Group-7042" style="color: white;"></i>+216 55 005 630</li>
                                    <li style="color: white;"><i class="icon-Group-7043" style="color: white;"></i>contact@euklydia.com</li>
                                    <li style="color: white;"><i class="icon-Group-7044" style="color: white;"></i><span data-translate="address_details">Tunis, Tunisia <br>Paris, France</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="widget subscribe">
                            <div class="widget-title">
                                <h3 style="color: white; font-family: 'Schibsted Grotesk', sans-serif;" data-translate="get_estimate">Get Free Estimate</h3>
                            </div>
                            <form action="#">
                                <div class="form-field">
                                    <input type="email" placeholder="Your e-mail address" id="email" required="" data-translate="placeholder_email">
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
                            <p class="copyright" style="color: aliceblue;" data-translate="footer_copyright">© 2024 <a href="./" style="color: #00E37D;" data-translate="euklydia">Euklydia</a>, All Rights Reserved.</p>
                        </div>
                    </div>
                    <div class="col col-lg-6 col-12">
                        <ul class="lower-footer-link">
                            <li><a href="./contact" style="color: aliceblue;" data-translate="terms_conditions">Terms &amp; Conditions</a></li>
                            <li><a href="./contact" style="color: aliceblue;" data-translate="privacy_policy">Privacy Policy</a></li>
                            <li><a href="./contact" style="color: aliceblue;" data-translate="contact_us">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
    `;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
    const currentLang = localStorage.getItem('selectedLanguage') || 'fr';
    translateContent(currentLang);
}

function setCurrentLanguageIcon(lang) {
    const currentLangIcon = document.getElementById('current-lang');
    if (lang === 'fr') {
        currentLangIcon.className = 'flag-icon flag-icon-fr';
    } else if (lang === 'en') {
        currentLangIcon.className = 'flag-icon flag-icon-us';
    }
}

function translateContent(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.innerHTML = translations[lang][key];
    });
}

function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    setCurrentLanguageIcon(lang);
    translateContent(lang);
}

function initializeLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'fr';
    setCurrentLanguageIcon(savedLanguage);
    translateContent(savedLanguage);
}

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    initializeLanguage();
});


function loadFooter() {
    const footerHTML = `
    <div id="footer-placeholder" class="footer-scope">
    <footer class="footer-section style-2" style="background-color: #00372C; width: 100%; padding:0px 0;">
        <div class="upper-footer" style="width: 100%; padding: 20px 15px;">
            <div class="container" style="max-width: 100%;">
                <div class="row">
                    <div class="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="widget about-widget">
                            <div>
                                <img src="assets/html-demo/images/logo blanc.png" alt="logo" style="width: 210px; height: 55px;">
                            </div>
                            <p style="color: white;" data-translate="footer_description">Your AI marketing agency that leads the digital revolution worldwide by merging artificial intelligence with human creativity</p>
                        </div>
                    </div>
                    <div class="col col-xl-3 col-lg-2 col-md-6 col-sm-12 col-12">
                        <div class="widget link-widget">
                            <div class="widget-title">
                                <h3 style="color: white; font-family: 'Schibsted Grotesk', sans-serif;" data-translate="pages">Pages</h3>
                            </div>
                            <ul>
                                <li><a href="./" style="color: white;" data-translate="home">Home</a></li>
                                <li><a href="./service" style="color: white;" data-translate="services">Services</a></li>
                                <li><a href="./DNA" style="color: white;" data-translate="our_dna">Our DNA</a></li>
                                <li><a href="./iaimpact" style="color: white;" data-translate="ai_impact">AI Impact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="widget contact-widget">
                            <div class="widget-title">
                                <h3 style="color: white; font-family: 'Schibsted Grotesk', sans-serif;" data-translate="address">Address</h3>
                            </div>
                            <div class="contact-ft">
                                <ul style="color: white;">
                                    <li style="color: white;"><i class="icon-Group-7042" style="color: white;"></i>+216 55 005 630</li>
                                    <li style="color: white;"><i class="icon-Group-7043" style="color: white;"></i>contact@euklydia.com</li>
                                    <li style="color: white;"><i class="icon-Group-7044" style="color: white;"></i><span data-translate="address_details">Tunis, Tunisia <br>Paris, France</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="widget subscribe">
                            <div class="widget-title">
                                <h3 style="color: white; font-family: 'Schibsted Grotesk', sans-serif;" data-translate="get_estimate">Get Free Estimate</h3>
                            </div>
                            <form action="#">
                                <div class="form-field">
                                    <input type="email" placeholder="Your e-mail address" id="email" required="" data-translate="placeholder_email">
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
                            <p class="copyright" style="color: aliceblue;" data-translate="footer_copyright">© 2024 <a href="./" style="color: #00E37D;" data-translate="euklydia">Euklydia</a>, All Rights Reserved.</p>
                        </div>
                    </div>
                    <div class="col col-lg-6 col-12">
                        <ul class="lower-footer-link">
                         </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
    `;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
    const currentLang = localStorage.getItem('selectedLanguage') || 'fr';
    translateContent(currentLang);
}

document.addEventListener('DOMContentLoaded', () => {
    loadFooter();
});