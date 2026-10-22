# -*- coding: utf-8 -*-
import os, re

subpages = ['about.html', 'contact.html', 'get-quote.html', 'news.html', 'services.html', 'works.html', 'works-single.html']

footer_replacement = '''<footer class="site-footer bg-dark" role="contentinfo">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-4 mb-md-0">
            <img src="img/logo-white.png" alt="Meridian Quality Management Professionals" class="img-fluid mb-3" style="max-height: 50px;">
            <p><strong>Meridian Quality Management Professionals (MEQMP)</strong> &mdash; Your strategic partner in ISO certification, comprehensive quality auditing, risk mitigation, and executive compliance consulting.</p>
            <p class="copyright mt-3">
              Copyright &copy;<script>document.write(new Date().getFullYear());</script> Meridian Quality Management Professionals. All rights reserved.
            </p>
          </div>
          <div class="col-md-3 mb-4 mb-md-0">
            <h3>Contact Us</h3>
            <ul class="list-unstyled footer-link">
              <li><span class="mr-3 d-block text-gold">Office:</span><span class="text-white">Business Center, Kingdom of Saudi Arabia</span></li>
              <li><span class="mr-3 d-block text-gold">Phone:</span><span class="text-white">+966 50 000 0000</span></li>
              <li><span class="mr-3 d-block text-gold">E-mail:</span><span><a href="mailto:info@meqmp.com" class="text-gold font-weight-bold">info@meqmp.com</a></span></li>
              <li><span class="mr-3 d-block text-gold">Website:</span><span><a href="https://meqmp.com" target="_blank" class="text-white">www.meqmp.com</a></span></li>
            </ul>
          </div>
          <div class="col-md-2 mb-4 mb-md-0">
            <h3>Quick Links</h3>
            <ul class="list-unstyled footer-link">
              <li><a href="about.html">About MEQMP</a></li>
              <li><a href="services.html">Our Services</a></li>
              <li><a href="works.html">Case Studies</a></li>
              <li><a href="news.html">Latest News</a></li>
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="get-quote.html">Get Quotation</a></li>
            </ul>
          </div>
          <div class="col-md-3">
            <h3>Connect With Us</h3>
            <p class="mb-3">Follow Meridian for the latest updates on quality standards and industry regulations.</p>
            <ul class="list-unstyled footer-link d-flex footer-social">
              <li><a href="#" class="p-2" title="Twitter"><span class="fa fa-twitter"></span></a></li>
              <li><a href="#" class="p-2" title="Facebook"><span class="fa fa-facebook"></span></a></li>
              <li><a href="#" class="p-2" title="LinkedIn"><span class="fa fa-linkedin"></span></a></li>
              <li><a href="#" class="p-2" title="Instagram"><span class="fa fa-instagram"></span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <!-- END footer -->'''

cta_replacement = '''<section class="container cta-overlap">
      <div class="text d-flex align-items-center">
        <h2 class="h3 mb-0">Ready to Elevate Your Quality Standards &amp; Compliance?</h2>
        <div class="ml-auto btn-wrap">
          <a href="get-quote.html" class="btn-cta btn btn-outline-white">Request Quotation</a>
        </div>
      </div>
    </section>
    <!-- END section -->'''

for p in subpages:
    if not os.path.exists(p):
        continue
    with open(p, 'r', encoding='utf-8') as f:
        html = f.read()

    # Title & Favicon
    page_name = p.replace('.html', '').replace('-', ' ').title()
    html = re.sub(r'<title>.*?</title>', f'<title>{page_name} &mdash; Meridian Quality Management Professionals</title>\n    <link rel="shortcut icon" href="img/favicon.png" type="image/png">', html)

    # Navbar Logo
    html = re.sub(
        r'<a class="navbar-brand position-absolute" href="index.html">Pivot</a>',
        '<a class="navbar-brand" href="index.html"><img src="img/logo.png" alt="Meridian Quality Management Professionals" class="img-fluid logo-img"></a>',
        html
    )
    html = re.sub(
        r'<a class="navbar-brand" href="index.html">Pivot</a>',
        '<a class="navbar-brand" href="index.html"><img src="img/logo.png" alt="Meridian Quality Management Professionals" class="img-fluid logo-img"></a>',
        html
    )

    # CTA overlap if present
    cta_pattern = r'<section class="container cta-overlap">.*?</section>\s*<!-- END section -->'
    if re.search(cta_pattern, html, flags=re.DOTALL):
        html = re.sub(cta_pattern, cta_replacement, html, flags=re.DOTALL)

    # Footer
    footer_pattern = r'<footer class="site-footer bg-dark" role="contentinfo">.*?</footer>\s*<!-- END footer -->'
    if re.search(footer_pattern, html, flags=re.DOTALL):
        html = re.sub(footer_pattern, footer_replacement, html, flags=re.DOTALL)

    with open(p, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f'Updated {p}')

# Sync to pivot/ folder as well
import shutil
for p in subpages + ['index.html']:
    shutil.copy2(p, os.path.join('pivot', p))
print('Synchronized updated HTML files to pivot/ folder')
