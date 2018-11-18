import glob, os

def get_lines(doc):
	lines=0
	with open(doc,'r') as f:
		for line in f:
			lines += 1
	return lines


for dir in glob.glob("*/"):
    print "Webpage: ",dir
    css_size = 0
    css_lines = 0
    js_size = 0
    js_lines = 0
    html_size = os.path.getsize(dir+"index.html")
    html_lines = get_lines(dir+"index.html")
    for file in glob.glob(dir+"css/*.css"):
        size = os.path.getsize(file)
        lines = get_lines(file)
        #print "File: ", file, "\t (LOC: ", lines," Size: ",size,")"
        css_size+= size
        css_lines+= lines

    for file in glob.glob(dir+"js/*.js"):
        size = os.path.getsize(file)
        lines = get_lines(file)
        #print "File: ", file, "\t (LOC: ", lines," Size: ",size,")"
        js_size+= size
        js_lines+= lines

    print "HTML size: ", str(html_size/1000), "KB\tLOC: ",html_lines
    print "Total CSS size: ",str(css_size/1000), "KB\tLOC: ",css_lines
    print "Total JS size: ",str(js_size/1000), "KB\tLOC: ",js_lines,"\n"
