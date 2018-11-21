from html5print import HTMLBeautifier
from html5print import CSSBeautifier
from html5print import JSBeautifier

import glob, urllib, os

class Lines:

	apps = ['awsamazoncom', "applecom", "askcom", "chinacom", "cnncom", "coccoccom", "wettodaynet", "hao123com", "instagramcom", "microsoftcom", "paypalcom", "popadsnet", "quoracom", "theguardiancom", "tianyacn", "twittercom", "whatsappcom", "xnxxcom", "xvideoscom", "yandexru", "youtubecom"]

	def count_lines_from_file(self, app_name, filetype):
		dir_path = os.path.dirname(os.path.realpath(__file__))
		folder_location = "/Sites/" + app_name + "_files/"

		if not os.path.exists(dir_path + folder_location):
			return 

		os.chdir(dir_path + folder_location)

		number_of_lines = 0
		file_extension = "*." + filetype
		for file in glob.glob(file_extension):
			location = dir_path + folder_location + file

			with open(dir_path + folder_location + file, 'r') as f:
				data = f.read()

				if filetype is 'css':
					result = CSSBeautifier.beautify(data, 4)
				if filetype is 'js':
					result = JSBeautifier.beautify(data, 4)


				trimmed_app_name = file.replace(".", "")
				loc_save = dir_path + "/" + app_name + "_files/" + trimmed_app_name + ".txt"

				if not os.path.exists(dir_path + "/" + app_name + "_files/"):
					os.makedirs(dir_path + "/" + app_name + "_files/")

				save_file = open(loc_save, 'w+')
				save_file.write(result)
				save_file.close()

				number_of_lines = number_of_lines + self.get_lines(loc_save)
		print(app_name + ": ")
		print(number_of_lines)

	def single_html_file(self, filename):
		dir_path = os.path.dirname(os.path.realpath(__file__))
		os.chdir(dir_path + "/Sites")

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

	def launch_line_counter(self, file_extension):
		original_dir_path = os.path.dirname(os.path.realpath(__file__))		

		for some_app in self.apps:
			self.count_lines_from_file(some_app, file_extension)
			os.chdir(original_dir_path)

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
lines.launch_line_counter('css')