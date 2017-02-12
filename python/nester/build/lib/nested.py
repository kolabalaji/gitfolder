
#This is a print_lol module., Its used for printing for nested list
def print_lol(the_list):
	for each_item in the_list:
        # Nested recurvise function where it is used for if the list have the recursive list items,
		if isinstance(each_item,(list)):
			print_lol(each_item);
		else:
			print(each_item);




			
