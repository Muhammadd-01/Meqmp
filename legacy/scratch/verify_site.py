import urllib.request, http.server, socketserver, threading, time, re

class SilentHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass

PORT = 8092
httpd = socketserver.TCPServer(('127.0.0.1', PORT), SilentHandler)
t = threading.Thread(target=httpd.serve_forever)
t.daemon = True
t.start()
time.sleep(0.5)

res = urllib.request.urlopen(f'http://127.0.0.1:{PORT}/index.html')
content = res.read().decode('utf-8')
print('index.html size:', len(content))

sources = re.findall(r'(?:src|href)=["\']([^"\']+)["\']', content)
print(f'Found {len(sources)} links and resources in index.html')

checked = set()
broken = []
for s in sources:
    if s.startswith('http') or s.startswith('#') or s.startswith('mailto:') or s.startswith('javascript:'):
        continue
    if s in checked:
        continue
    checked.add(s)
    try:
        r = urllib.request.urlopen(f'http://127.0.0.1:{PORT}/{s}')
        if r.status != 200:
            broken.append((s, r.status))
        else:
            print(f'OK: {s}')
    except Exception as e:
        broken.append((s, str(e)))

if broken:
    print('BROKEN RESOURCES:', broken)
else:
    print('\nSUCCESS: ALL local images, stylesheets, scripts, and links in index.html returned 200 OK!')

httpd.shutdown()
