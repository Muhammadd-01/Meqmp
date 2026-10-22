# -*- coding: utf-8 -*-
import os, re, shutil

contact_path = 'contact.html'
with open(contact_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Replace address block
addr_pattern = r'<h5 class="text-uppercase mb-3">Address</h5>.*?<h5 class="text-uppercase mb-3">Call Us</h5>\s*<p class="mb-5">.*?</p>'
addr_replacement = '''<h5 class="text-uppercase mb-3 text-gold">Office Location</h5>
            <p class="mb-4">Business Center, Kingdom of Saudi Arabia</p>
            
            <h5 class="text-uppercase mb-3 text-gold">Email Us</h5>
            <p class="mb-4"><a href="mailto:info@meqmp.com" class="text-gold font-weight-bold">info@meqmp.com</a><br><a href="mailto:support@meqmp.com">support@meqmp.com</a></p>
            
            <h5 class="text-uppercase mb-3 text-gold">Call Us</h5>
            <p class="mb-5">Phone: +966 50 000 0000<br>Mobile: +966 55 000 0000</p>'''

html = re.sub(addr_pattern, addr_replacement, html, flags=re.DOTALL)

with open(contact_path, 'w', encoding='utf-8') as f:
    f.write(html)
shutil.copy2(contact_path, os.path.join('pivot', contact_path))
print('Updated contact.html contact info')
