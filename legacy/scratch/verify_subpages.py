import urllib.request, http.server, socketserver, threading, time, re

class SilentHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass

PORT = 8093
httpd = socketserver.TCPServer(('127.0.0.1', PORT), SilentHandler)
t = threading.Thread(target=httpd.serve_forever)
t.daemon = True
t.start()
time.sleep(0.5)

subpages = ['about.html', 'contact.html', 'get-quote.html', 'news.html', 'services.html', 'works.html', 'works-single.html']
all_broken = []

for p in subpages:
    try:
        res = urllib.request.urlopen(f'http://127.0.0.1:{PORT}/{p}')
        content = res.read().decode('utf-8')
        sources = re.findall(r'(?:src|href)=["\']([^"\']+)["\']', content)
        for s in sources:
            if s.startswith('http') or s.startswith('#') or s.startswith('mailto:') or s.startswith('javascript:'):
                continue
            try:
                r = urllib.request.urlopen(f'http://127.0.0.1:{PORT}/{s}')
                if r.status != 200:
                    all_broken.append((p, s, r.status))
            except Exception as e:
                all_broken.append((p, s, str(e)))
        print(f'{p}: Verified OK')
    except Exception as e:
        all_broken.append((p, p, str(e)))

if all_broken:
    print('Broken:', all_broken)
else:
    print('ALL SUBPAGES VERIFIED WITH ZERO BROKEN RESOURCES!')

httpd.shutdown()
