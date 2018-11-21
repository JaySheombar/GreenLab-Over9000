from html5print import HTMLBeautifier
import glob, urllib, os

class Lines:

	def __init__(self):
		self.single_file()

	def single_file(self):
		dir_path = os.path.dirname(os.path.realpath(__file__))
		os.chdir(dir_path + "/Sites")

		filename = ""
		location = dir_path + "/Sites/" + filename + ".html"
		h = open(location, 'r')
		s = self.beautify(h.read())
		print(s)

		loc_save = dir_path + "/" + filename + ".txt"
		print("Saving file to:" + loc_save)
		save_file = open(loc_save, 'w+')
		save_file.write(s)
		save_file.close()

		print(self.get_lines(loc_save))

	def get_lines(self, doc):
		lines = 0

		with open(doc, 'r') as f:
			for line in f:
				lines += 1
		
		return lines

	def beautify(self, text_input):
		return HTMLBeautifier.beautify(text_input, 4)

	def get_number_of_lines(self, text_input):
		return sum(1 for line in text_input)

lines = Lines()