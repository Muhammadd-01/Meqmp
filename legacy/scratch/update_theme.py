# -*- coding: utf-8 -*-
import os

theme_patch = """
/* ==============================================================
   THEME CUSTOMIZATION: NAVY BLUE & GOLDEN (MERIDIAN MEQMP)
   ============================================================== */
:root {
  --primary-navy: #0B1B3D;
  --navy-dark: #071228;
  --navy-light: #16325C;
  --primary-gold: #D4AF37;
  --gold-hover: #B8860B;
  --gold-light: #F4D068;
  --gold-bg: #FFF9EE;
}

body {
  color: #556277;
}

h1, h2, h3, h4, h5, h6 {
  color: #0B1B3D;
}

.text-gold {
  color: #D4AF37 !important;
}

.text-navy {
  color: #0B1B3D !important;
}

.bg-navy {
  background-color: #0B1B3D !important;
}

.bg-gold {
  background-color: #D4AF37 !important;
}

/* Header & Navbar */
header .navbar {
  border-top: 3px solid #D4AF37;
  background: #ffffff !important;
  box-shadow: 0 4px 20px rgba(11, 27, 61, 0.08);
}

header .navbar-brand {
  position: static !important;
  display: inline-flex;
  align-items: center;
  padding: 8px 0;
}

header .navbar-brand img.logo-img {
  max-height: 56px;
  width: auto;
  object-fit: contain;
}

@media (max-width: 991.98px) {
  header .navbar-brand img.logo-img {
    max-height: 44px;
  }
}

header .navbar .nav-link {
  color: #0B1B3D !important;
  font-weight: 600;
  font-size: 15px;
  transition: .3s all ease;
}

header .navbar .nav-link:hover,
header .navbar .nav-link.active {
  color: #D4AF37 !important;
}

header .navbar .dropdown-menu {
  border-top: 3px solid #D4AF37;
  border-radius: 4px;
  box-shadow: 0 10px 30px rgba(11, 27, 61, 0.15);
}

header .navbar .dropdown-menu .dropdown-item {
  color: #0B1B3D;
  font-weight: 500;
}

header .navbar .dropdown-menu .dropdown-item:hover,
header .navbar .dropdown-menu .dropdown-item.active {
  background: #0B1B3D !important;
  color: #D4AF37 !important;
}

header .navbar .cta-btn2 a span {
  border: 2px solid #D4AF37 !important;
  color: #0B1B3D !important;
  background: transparent;
  font-weight: 700;
  border-radius: 4px;
  letter-spacing: .05em;
  transition: .3s all ease;
}

header .navbar .cta-btn2 a:hover span {
  background: #D4AF37 !important;
  color: #0B1B3D !important;
  border-color: #D4AF37 !important;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
}

/* Buttons */
.btn.btn-primary {
  color: #0B1B3D !important;
  background: #D4AF37 !important;
  border-color: #D4AF37 !important;
  font-weight: 700;
  border-width: 2px;
  border-radius: 4px;
  letter-spacing: .04em;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  transition: .3s all ease;
}

.btn.btn-primary:hover,
.btn.btn-primary:active,
.btn.btn-primary:focus {
  border-color: #B8860B !important;
  background: #B8860B !important;
  color: #ffffff !important;
  box-shadow: 0 6px 20px rgba(184, 134, 11, 0.4);
}

.btn.btn-outline-primary {
  border-width: 2px;
  border-color: #D4AF37;
  color: #0B1B3D;
  font-weight: 600;
  border-radius: 4px;
}

.btn.btn-outline-primary:hover,
.btn.btn-outline-primary:focus,
.btn.btn-outline-primary:active {
  background: #D4AF37;
  border-color: #D4AF37;
  color: #0B1B3D;
}

.btn.btn-outline-white {
  border-width: 2px;
  border-color: #D4AF37;
  color: #0B1B3D;
  background: #D4AF37;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: .15em;
  font-weight: 700;
  border-radius: 4px;
}

.btn.btn-outline-white:hover,
.btn.btn-outline-white:focus {
  background: #B8860B;
  border-color: #B8860B;
  color: #fff;
}

/* Headings underline */
.heading.border-bottom {
  border-bottom: none !important;
  position: relative;
  padding-bottom: 22px;
}

.heading.border-bottom:after {
  content: "";
  position: absolute;
  width: 65px;
  height: 4px;
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  background: #D4AF37;
  border-bottom: none !important;
  border-radius: 2px;
}

.heading.border-bottom.text-left:after {
  left: 0;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
}

/* Home Slider */
.owl-carousel.home-slider .slider-item .slider-text h1 {
  text-shadow: 0 2px 10px rgba(11, 27, 61, 0.6);
}

.owl-carousel.home-slider .owl-nav .owl-prev,
.owl-carousel.home-slider .owl-nav .owl-next {
  color: #D4AF37;
  background: rgba(11, 27, 61, 0.6);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(212, 175, 55, 0.4);
  transition: .3s all ease;
}

.owl-carousel.home-slider .owl-nav .owl-prev:hover,
.owl-carousel.home-slider .owl-nav .owl-next:hover {
  background: #D4AF37;
  color: #0B1B3D;
  border-color: #D4AF37;
}

/* Service / Feature Cards */
.media-feature {
  background: #ffffff;
  border: 1px solid #e3e8f0;
  border-radius: 8px;
  padding: 40px 25px;
  transition: .3s all ease;
  box-shadow: 0 4px 15px rgba(11, 27, 61, 0.04);
}

.media-feature:hover {
  border-color: #D4AF37;
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(11, 27, 61, 0.12);
}

.media-feature .icon {
  color: #D4AF37 !important;
  font-size: 55px;
  display: inline-block;
  margin-bottom: 20px;
}

.media-feature h3 {
  color: #0B1B3D !important;
  font-weight: 700;
  font-size: 20px;
}

/* Portfolio / Project Cards */
.link-thumbnail:before {
  background: rgba(11, 27, 61, 0.85) !important;
}

.link-thumbnail h3 {
  color: #ffffff !important;
  font-weight: 700;
}

.link-thumbnail .icon {
  background: #D4AF37 !important;
  color: #0B1B3D !important;
}

/* News Cards */
.media-custom {
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(11, 27, 61, 0.05);
  border: 1px solid #e3e8f0;
  transition: .3s all ease;
}

.media-custom:hover {
  border-color: #D4AF37;
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(11, 27, 61, 0.12);
}

.media-custom .meta-post {
  color: #D4AF37 !important;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: .05em;
}

.media-custom h3 a {
  color: #0B1B3D !important;
  font-weight: 700;
}

.media-custom h3 a:hover {
  color: #D4AF37 !important;
}

.media-custom a.float-left {
  color: #0B1B3D;
  font-weight: 700;
}

.media-custom a.float-left:hover {
  color: #D4AF37;
}

.media-custom .meta-chat {
  color: #8fa0bc;
}

.media-custom .meta-chat .ion-chatbubble {
  color: #D4AF37;
}

/* Testimonials */
.media-testimonial img {
  border: 3px solid #D4AF37;
  padding: 3px;
  border-radius: 50%;
  width: 85px;
  height: 85px;
  object-fit: cover;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
}

.media-testimonial p {
  color: #0B1B3D;
  font-weight: 700;
}

.media-testimonial p a {
  color: #D4AF37;
}

/* CTA Overlap Banner */
.cta-overlap .text {
  background: linear-gradient(135deg, #0B1B3D 0%, #071228 100%) !important;
  border: 1px solid rgba(212, 175, 55, 0.35);
  border-left: 6px solid #D4AF37 !important;
  color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 15px 40px rgba(11, 27, 61, 0.35);
}

.cta-overlap .text h2 {
  color: #ffffff !important;
  font-weight: 700;
}

.cta-overlap .btn-cta {
  background: #D4AF37 !important;
  border-color: #D4AF37 !important;
  color: #0B1B3D !important;
  font-weight: 700;
  border-radius: 4px;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
}

.cta-overlap .btn-cta:hover {
  background: #B8860B !important;
  border-color: #B8860B !important;
  color: #ffffff !important;
}

/* Site Footer */
.site-footer.bg-dark {
  background: #071228 !important;
  border-top: 3px solid #D4AF37;
  color: #9ab0d3;
}

.site-footer h3 {
  color: #D4AF37 !important;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.site-footer a {
  color: #b7cbef;
}

.site-footer a:hover {
  color: #D4AF37 !important;
}

.site-footer .footer-social a {
  color: #D4AF37 !important;
  background: rgba(212, 175, 55, 0.08);
  border: 1px solid rgba(212, 175, 55, 0.35);
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  transition: .3s all ease;
}

.site-footer .footer-social a:hover {
  background: #D4AF37 !important;
  color: #0B1B3D !important;
  border-color: #D4AF37 !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.4);
}

/* Loader */
#loader .path {
  stroke: #D4AF37 !important;
}

/* Waypoints Visibility Fallback */
.element-animate.element-animated {
  opacity: 1 !important;
  visibility: visible !important;
}
"""

for target in [r'css\style.css', r'pivot\css\style.css']:
    if os.path.exists(target):
        with open(target, 'r', encoding='utf-8') as f:
            content = f.read()
        if '/* THEME CUSTOMIZATION: NAVY BLUE & GOLDEN' not in content:
            with open(target, 'w', encoding='utf-8') as f:
                f.write(content + '\n' + theme_patch)
            print(f'Patched: {target}')
        else:
            print(f'Already patched: {target}')
