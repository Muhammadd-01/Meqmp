# -*- coding: utf-8 -*-
import os, re, shutil

# Update services.html
services_path = 'services.html'
if os.path.exists(services_path):
    with open(services_path, 'r', encoding='utf-8') as f:
        html = f.read()

    old_section_pattern = r'<section class="section bg-light">\s*<div class="container">\s*<div class="row">.*?</div>\s*</div>\s*</section>'
    new_services = '''<section class="section bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12 mb-4 element-animate">
            <div class="media d-block media-feature text-center">
              <span class="flaticon-blueprint icon"></span>
              <div class="media-body">
                <h3 class="mt-0">ISO Certification &amp; Auditing</h3>
                <p>Comprehensive audits and implementation for ISO 9001, 14001, 45001, and 27001 standards.</p>
                <p><a href="get-quote.html" class="btn btn-outline-primary btn-sm">Get Quotation</a></p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-12 mb-4 element-animate">
            <div class="media d-block media-feature text-center">
              <span class="flaticon-building-1 icon"></span>
              <div class="media-body">
                <h3 class="mt-0">Enterprise Risk Assessment</h3>
                <p>Systematic risk profiling, risk register formulation, and mitigation strategies for critical operations.</p>
                <p><a href="get-quote.html" class="btn btn-outline-primary btn-sm">Get Quotation</a></p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-12 mb-4 element-animate">
            <div class="media d-block media-feature text-center">
              <span class="flaticon-crane icon"></span>
              <div class="media-body">
                <h3 class="mt-0">Quality Training &amp; Seminars</h3>
                <p>Tailored leadership workshops, internal auditor certifications, and organizational quality culture seminars.</p>
                <p><a href="get-quote.html" class="btn btn-outline-primary btn-sm">Get Quotation</a></p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-12 mb-4 element-animate">
            <div class="media d-block media-feature text-center">
              <span class="flaticon-helmet icon"></span>
              <div class="media-body">
                <h3 class="mt-0">Process Optimization &amp; Lean</h3>
                <p>Root cause analysis, workflow streamlining, defect reduction, and continual improvement frameworks.</p>
                <p><a href="get-quote.html" class="btn btn-outline-primary btn-sm">Get Quotation</a></p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-12 mb-4 element-animate">
            <div class="media d-block media-feature text-center">
              <span class="flaticon-building icon"></span>
              <div class="media-body">
                <h3 class="mt-0">Regulatory &amp; Compliance Advisory</h3>
                <p>Navigating national and international industry regulations, statutory mandates, and governance standards.</p>
                <p><a href="get-quote.html" class="btn btn-outline-primary btn-sm">Get Quotation</a></p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-12 mb-4 element-animate">
            <div class="media d-block media-feature text-center">
              <span class="flaticon-engineer icon"></span>
              <div class="media-body">
                <h3 class="mt-0">Supply Chain &amp; Vendor Auditing</h3>
                <p>Third-party evaluation of vendor quality systems, procurement verification, and supply chain integrity.</p>
                <p><a href="get-quote.html" class="btn btn-outline-primary btn-sm">Get Quotation</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>'''
    html = re.sub(old_section_pattern, new_services, html, flags=re.DOTALL)
    with open(services_path, 'w', encoding='utf-8') as f:
        f.write(html)
    shutil.copy2(services_path, os.path.join('pivot', services_path))
    print('Updated services.html')

# Update works.html
works_path = 'works.html'
if os.path.exists(works_path):
    with open(works_path, 'r', encoding='utf-8') as f:
        html = f.read()

    works_gallery_pattern = r'<div class="row no-gutters">.*?</div>\s*</div>\s*</section>'
    new_works_gallery = '''<div class="row no-gutters">
          <div class="col-md-4 element-animate">
            <a href="works-single.html" class="link-thumbnail">
              <h3>ISO 9001 Quality Audit</h3>
              <span class="ion-plus icon"></span>
              <img src="img/work_thumb_1.jpg" alt="ISO 9001 Quality Audit" class="img-fluid">
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
              <img src="img/work_thumb_3.jpg" alt="Executive Compliance Seminar" class="img-fluid">
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
              <h3>Supply Chain Quality Verification</h3>
              <span class="ion-plus icon"></span>
              <img src="img/work_thumb_2.jpg" alt="Supply Chain Quality Verification" class="img-fluid">
            </a>
          </div>
        </div>
      </div>
    </section>'''
    html = re.sub(works_gallery_pattern, new_works_gallery, html, flags=re.DOTALL)
    html = re.sub(r'<h1>Our Works in 15 Years</h1>', '<h1>Featured Quality Engagements</h1>', html)
    with open(works_path, 'w', encoding='utf-8') as f:
        f.write(html)
    shutil.copy2(works_path, os.path.join('pivot', works_path))
    print('Updated works.html')
