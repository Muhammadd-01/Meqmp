# -*- coding: utf-8 -*-
import os, re

def update_index():
    index_path = 'index.html'
    with open(index_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Title & Favicon
    html = re.sub(r'<title>.*?</title>', '<title>Meridian Quality Management Professionals &mdash; Excellence in Quality &amp; Risk Consulting</title>\n    <link rel="shortcut icon" href="img/favicon.png" type="image/png">', html)

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

    # Hero Slider content
    hero_pattern = r'<section class="home-slider owl-carousel">.*?</section>\s*<!-- END slider -->'
    hero_replacement = '''<section class="home-slider owl-carousel">
      <div class="slider-item" style="background-image: url('img/slider-1.jpg');">
        <div class="container">
          <div class="row slider-text align-items-center justify-content-center text-center">
            <div class="col-md-9 col-sm-12 element-animate">
              <h1 class="mb-4">Leading Quality Management <span class="text-gold">Professionals</span></h1>
              <p class="mb-4 lead text-white">Delivering World-Class Auditing, ISO Certification, &amp; Enterprise Risk Assessment</p>
              <p class="mb-0"><a href="services.html" class="btn btn-primary mr-2">Explore Services</a> <a href="get-quote.html" class="btn btn-outline-white">Get A Quote</a></p>
            </div>
          </div>
        </div>
      </div>

      <div class="slider-item" style="background-image: url('img/slider-2.jpg');">
        <div class="container">
          <div class="row slider-text align-items-center justify-content-center text-center">
            <div class="col-md-9 col-sm-12 element-animate">
              <h1 class="mb-4">Empowering Organizations <span class="text-gold">Towards Excellence</span></h1>
              <p class="mb-4 lead text-white">Strategic Consulting and Process Optimization for Global Industry Standards</p>
              <p class="mb-0"><a href="get-quote.html" class="btn btn-primary mr-2">Request Consultation</a> <a href="works.html" class="btn btn-outline-white">View Projects</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END slider -->'''
    html = re.sub(hero_pattern, hero_replacement, html, flags=re.DOTALL)

    # Expert in Construction -> Expert in Quality Management
    expert_pattern = r'<section class="section bg-light">.*?<div class="row align-items-center">.*?<div class="col-md-6 pr-lg-5 mb-5 mb-md-0.*?</div>\s*</div>\s*</div>\s*</section>'
    expert_replacement = '''<section class="section bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 pr-lg-5 mb-5 mb-md-0 element-animate">
            <div class="pr-lg-5">
              <h2 class="text-uppercase heading border-bottom mb-4 text-left">We Are Experts in <br><span class="text-navy">Quality Management</span></h2>
              <p><strong>Meridian Quality Management Professionals (MEQMP)</strong> is dedicated to delivering industry-leading quality assurance, compliance auditing, ISO certification support, and operational risk consulting.</p>
              <p>Our multidisciplinary team of certified lead auditors and management consultants empowers organizations across industrial, manufacturing, infrastructure, and healthcare sectors to achieve operational excellence and adhere to global quality benchmarks.</p>
              <p class="mt-4"><a href="about.html" class="btn btn-primary">Learn More About Us</a></p>
            </div>
          </div>
          <div class="col-md-6 element-animate">
            <img src="img/work_thumb_1.jpg" alt="Meridian Quality Management Specialists" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>'''
    html = re.sub(expert_pattern, expert_replacement, html, flags=re.DOTALL)

    # Recent Projects
    projects_pattern = r'<section class="section border-t">.*?<!-- END section -->'
    projects_replacement = '''<section class="section border-t">
      <div class="container">
        <div class="row justify-content-center mb-5 element-animate">
          <div class="col-md-8 text-center">
            <h2 class="text-uppercase heading border-bottom mb-4">Featured Engagements</h2>
            <p class="mb-3 lead">A showcase of successful quality audits, compliance evaluations, and process optimization projects across diverse sectors.</p>
            <p><a href="works.html" class="btn btn-primary">See All Projects</a></p>
          </div>
        </div>

        <div class="row no-gutters">
          <div class="col-md-4 element-animate">
            <a href="works-single.html" class="link-thumbnail">
              <h3>ISO 9001 Quality Audit</h3>
              <span class="ion-plus icon"></span>
              <img src="img/work_thumb_1.jpg" alt="ISO Quality Audit" class="img-fluid">
            </a>
          </div>
          <div class="col-md-4 element-animate">
            <a href="works-single.html" class="link-thumbnail">
              <h3>Enterprise Risk Assessment</h3>
              <span class="ion-plus icon"></span>
              <img src="img/work_thumb_2.jpg" alt="Enterprise Risk Assessment" class="img-fluid">
            </a>
          </div>
          <div class="col-md-4 element-animate">
            <a href="works-single.html" class="link-thumbnail">
              <h3>Executive Compliance Seminar</h3>
              <span class="ion-plus icon"></span>
              <img src="img/work_thumb_3.jpg" alt="Compliance Seminar" class="img-fluid">
            </a>
          </div>

          <div class="col-md-4 element-animate">
            <a href="works-single.html" class="link-thumbnail">
              <h3>Industrial Facility Compliance</h3>
              <span class="ion-plus icon"></span>
              <img src="img/work_thumb_4.jpg" alt="Industrial Facility Compliance" class="img-fluid">
            </a>
          </div>
          <div class="col-md-4 element-animate">
            <a href="works-single.html" class="link-thumbnail">
              <h3>Process Optimization Review</h3>
              <span class="ion-plus icon"></span>
              <img src="img/work_thumb_1.jpg" alt="Process Optimization Review" class="img-fluid">
            </a>
          </div>
          <div class="col-md-4 element-animate">
            <a href="works-single.html" class="link-thumbnail">
              <h3>Risk Mitigation Strategy</h3>
              <span class="ion-plus icon"></span>
              <img src="img/work_thumb_2.jpg" alt="Risk Mitigation Strategy" class="img-fluid">
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- END section -->'''
    html = re.sub(projects_pattern, projects_replacement, html, flags=re.DOTALL)

    # Services Section
    services_pattern = r'<section class="section">\s*<div class="container">\s*<div class="row justify-content-center mb-5 element-animate">.*?<h2 class="text-uppercase heading border-bottom mb-4">Services</h2>.*?<!-- END section -->'
    services_replacement = '''<section class="section">
      <div class="container">
        <div class="row justify-content-center mb-5 element-animate">
          <div class="col-md-8 text-center">
            <h2 class="text-uppercase heading border-bottom mb-4">Our Core Services</h2>
            <p class="mb-3 lead">Comprehensive quality management consulting, international certification auditing, and risk management solutions tailored to your operational needs.</p>
          </div>
        </div>

        <div class="row mb-5">
          <div class="col-lg-4 col-md-6 col-12 mb-3 element-animate">
            <div class="media d-block media-feature text-center">
              <span class="flaticon-blueprint icon"></span>
              <div class="media-body">
                <h3 class="mt-0">ISO Auditing &amp; Certification</h3>
                <p>Complete assessment and implementation for ISO 9001, 14001, 45001, and international quality management standards.</p>
                <p><a href="services.html" class="btn btn-outline-primary btn-sm">Learn More</a></p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-12 mb-3 element-animate">
            <div class="media d-block media-feature text-center">
              <span class="flaticon-building-1 icon"></span>
              <div class="media-body">
                <h3 class="mt-0">Enterprise Risk Assessment</h3>
                <p>Systematic hazard identification, risk response modeling (Avoid, Mitigate, Transfer, Accept), and compliance frameworks.</p>
                <p><a href="services.html" class="btn btn-outline-primary btn-sm">Learn More</a></p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-12 mb-3 element-animate">
            <div class="media d-block media-feature text-center">
              <span class="flaticon-crane icon"></span>
              <div class="media-body">
                <h3 class="mt-0">Quality Training &amp; Consulting</h3>
                <p>Executive seminars, continuous process improvement workshops, and bespoke quality system transformation programs.</p>
                <p><a href="services.html" class="btn btn-outline-primary btn-sm">Learn More</a></p>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center element-animate"> 
          <div class="col-md-4"><p><a href="services.html" class="btn btn-primary btn-block">View All Services</a></p></div>
        </div>
      </div>
    </section>
    <!-- END section -->'''
    html = re.sub(services_pattern, services_replacement, html, flags=re.DOTALL)

    # News section
    news_items = '''<div class="major-caousel js-carousel-1 owl-carousel">
            <div>
              <div class="media d-block media-custom text-left">
                <img src="img/work_thumb_1.jpg" alt="ISO Quality Audit" class="img-fluid">
                <div class="media-body">
                  <span class="meta-post">October 10, 2026</span>
                  <h3 class="mt-0"><a href="news.html">Key Strategies for a Flawless ISO 9001 Audit</a></h3>
                  <p>Discover proactive steps your organization can take to prepare for and excel in quality management audits.</p>
                  <p class="clearfix">
                    <a href="news.html" class="float-left">Read more</a>
                    <a href="#" class="float-right meta-chat"><span class="ion-chatbubble"></span> 6</a>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="media d-block media-custom text-left">
                <img src="img/work_thumb_2.jpg" alt="Risk Assessment" class="img-fluid">
                <div class="media-body">
                  <span class="meta-post">October 5, 2026</span>
                  <h3 class="mt-0"><a href="news.html">Modern Risk Assessment: Responding to Risk</a></h3>
                  <p>A deep dive into avoiding, mitigating, transferring, and accepting operational risks across critical workflows.</p>
                  <p class="clearfix">
                    <a href="news.html" class="float-left">Read more</a>
                    <a href="#" class="float-right meta-chat"><span class="ion-chatbubble"></span> 4</a>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="media d-block media-custom text-left">
                <img src="img/work_thumb_3.jpg" alt="Quality Training" class="img-fluid">
                <div class="media-body">
                  <span class="meta-post">September 28, 2026</span>
                  <h3 class="mt-0"><a href="news.html">Fostering a Culture of Continuous Quality Improvement</a></h3>
                  <p>How executive training programs drive lasting behavioral changes and quality awareness across team levels.</p>
                  <p class="clearfix">
                    <a href="news.html" class="float-left">Read more</a>
                    <a href="#" class="float-right meta-chat"><span class="ion-chatbubble"></span> 8</a>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="media d-block media-custom text-left">
                <img src="img/work_thumb_4.jpg" alt="Facility Compliance" class="img-fluid">
                <div class="media-body">
                  <span class="meta-post">September 20, 2026</span>
                  <h3 class="mt-0"><a href="news.html">Environmental &amp; Infrastructure Compliance Benchmarks</a></h3>
                  <p>Best practices for maintaining rigorous safety, environmental, and quality compliance in plant operations.</p>
                  <p class="clearfix">
                    <a href="news.html" class="float-left">Read more</a>
                    <a href="#" class="float-right meta-chat"><span class="ion-chatbubble"></span> 5</a>
                  </p>
                </div>
              </div>
            </div>
          </div>'''
    html = re.sub(r'<div class="major-caousel js-carousel-1 owl-carousel">.*?</div>\s*<!-- END slider -->', news_items + '\n          <!-- END slider -->', html, flags=re.DOTALL)
    html = re.sub(r'<h2 class="text-uppercase heading border-bottom mb-4">Our News</h2>', '<h2 class="text-uppercase heading border-bottom mb-4">Insights &amp; News</h2>', html)

    # Testimonials
    test_pattern = r'<section class="section">\s*<div class="container">\s*<div class="row justify-content-center mb-5 element-animate">.*?<h2 class="text-uppercase heading border-bottom mb-4">Happy Customer Says</h2>.*?</section>'
    test_replacement = '''<section class="section">
      <div class="container">
        <div class="row justify-content-center mb-5 element-animate">
          <div class="col-md-8 text-center mb-5">
            <h2 class="text-uppercase heading border-bottom mb-4">What Our Clients Say</h2>
            <p class="mb-0 lead">Trusted by leading enterprises, industrial leaders, and multinational organizations for quality excellence.</p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 element-animate">
            <div class="media d-block media-testimonial text-center">
              <img src="img/person_1.jpg" alt="Dr. Sarah Jenkins" class="img-fluid mb-3">
              <p>Dr. Sarah Jenkins, <a href="#">Apex Technologies</a></p>
              <div class="media-body">
                <blockquote>
                  <p>&ldquo;Meridian Quality Management Professionals completely revolutionized our audit readiness. Their systematic approach to ISO compliance saved us months of effort and delivered seamless accreditation.&rdquo;</p>  
                </blockquote>
              </div>
            </div>
          </div>

          <div class="col-md-6 element-animate">
            <div class="media d-block media-testimonial text-center">
              <img src="img/person_3.jpg" alt="Marcus Vance" class="img-fluid mb-3">
              <p>Marcus Vance, <a href="#">Global Infrastructure Ltd.</a></p>
              <div class="media-body">
                <blockquote>
                  <p>&ldquo;Their risk assessment and response modeling empowered our leadership team with actionable clarity. The level of rigor, professionalism, and industry knowledge is unmatched.&rdquo;</p>  
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>'''
    html = re.sub(test_pattern, test_replacement, html, flags=re.DOTALL)

    # CTA overlap banner
    cta_pattern = r'<section class="container cta-overlap">.*?</section>\s*<!-- END section -->'
    cta_replacement = '''<section class="container cta-overlap">
      <div class="text d-flex align-items-center">
        <h2 class="h3 mb-0">Ready to Elevate Your Quality Standards &amp; Compliance?</h2>
        <div class="ml-auto btn-wrap">
          <a href="get-quote.html" class="btn-cta btn btn-outline-white">Request Quotation</a>
        </div>
      </div>
    </section>
    <!-- END section -->'''
    html = re.sub(cta_pattern, cta_replacement, html, flags=re.DOTALL)

    # Footer
    footer_pattern = r'<footer class="site-footer bg-dark" role="contentinfo">.*?</footer>\s*<!-- END footer -->'
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
    html = re.sub(footer_pattern, footer_replacement, html, flags=re.DOTALL)

    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print('Updated index.html')

update_index()
