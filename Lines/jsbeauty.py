import os
import jsbeautifier

class SleepingBeauty:

	def __init__(self):
		app_name = "youtubecom"
		dir_path = os.path.dirname(os.path.realpath(__file__))
		folder_location = "/Sites/" + app_name + "_files/"
		filename = "desktop_polymer.js"

		full_path = dir_path + folder_location + filename

		opts = jsbeautifier.default_options()
		opts.indent_size = 4
		opts.space_in_empty_paren = True

		res = jsbeautifier.beautify_file(full_path, opts)
		print(res)

jsbeauty = SleepingBeauty()