# -*- coding: utf-8 -*-
import os, re, shutil

sections_to_insert = '''
    <!-- EXPERTISE SECTION (WITH IMAGE) -->
    <section class="section bg-light" id="about-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 pr-lg-5 mb-5 mb-md-0 element-animate">
            <div class="pr-lg-5">
              <span class="text-gold font-weight-bold text-uppercase letter-spacing-1 d-block mb-2">About MEQMP</span>
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
    </section>
    <!-- END expertise -->

    <!-- FEATURED PROJECTS SECTION (WITH IMAGES) -->
    <section class="section border-t" id="projects-section">
      <div class="container">
        <div class="row justify-content-center mb-5 element-animate">
          <div class="col-md-8 text-center">
            <span class="text-gold font-weight-bold text-uppercase letter-spacing-1 d-block mb-2">Our Portfolio</span>
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
    <!-- END projects -->
'''

for file_path in ['index.html', 'pivot/index.html']:
    with open(file_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # If already present, don't double insert
    if 'id="about-section"' in html or 'id="projects-section"' in html:
        print(f'{file_path} already has image sections')
        continue

    # Insert right after <!-- END slider -->
    target = '    <!-- END slider -->'
    if target in html:
        html = html.replace(target, target + '\n' + sections_to_insert)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(html)
        print(f'Successfully updated {file_path}')
    else:
        print(f'Target tag not found in {file_path}')
