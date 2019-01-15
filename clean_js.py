input_file = 'raw.js'


with open(input_file, "r") as f:

	content = f.read()
	with open("output.js", "w") as w_f:

		for a_line in content.split("\n"):
			
			a_line = a_line.split(" ")
			#print (a_line)
			i = 0
			for a_char in a_line:
				if a_char.isdigit():
					break
				i += 1
				#print(i)
			print " ".join(a_line[i+1:])

			w_f.write(" ".join(a_line[i+1:]) + "\n")