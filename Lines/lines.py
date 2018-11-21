from html5print import HTMLBeautifier
import glob, urllib, os

class Lines:

	def __init__(self):
		dir_path = os.path.dirname(os.path.realpath(__file__))
		os.chdir(dir_path + "/Sites")
		for file in glob.glob("*.html"):
			location = dir_path + "/Sites/" + file
			h = open(location, 'r')
			print(h.read())

		# 	b = self.beautify(h.read())

			# location_save = file + ".txt"
			# print(location_save)
			# save_file = open(location_save, 'w')
			# save_file.write(b)
			# save_file.close()
			# print(file)
		# input_text = '<title>Page Title</title><p>Some text here</p>'
		# print(self.get_number_of_lines(self.beautify(input_text)))
		# print(self.beautify(input_text))

	def beautify(self, text_input):
		return HTMLBeautifier.beautify(text_input, 4)

	def get_number_of_lines(self, text_input):
		return sum(1 for line in text_input)

lines = Lines()