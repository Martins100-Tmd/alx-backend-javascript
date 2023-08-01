#!/bin/bash

if [ "$1" -eq 2 ]
then
	vi "2-get_students_by_loc.js"
elif [ "$1" -eq 1 ]
then
	vi "1-get_list_student_ids.js"
elif [ "$1" -eq 0 ]
then
	vi "0-get_list_students.js"
elif [ "$1" -eq 3 ]
then
	vi "3-get_ids_sum.js"
elif [ "$1" -eq 4 ]
then
	vi "4-update_grade_by_city.js"
elif [ "$1" -eq 5 ]
then
	vi "5-typed_arrays.js"
elif [ "$1" -eq 6 ]
then
	vi "6-set.js"
elif [ "$1" -eq 7 ]
then
	vi "7-has_array_values.js"
elif [ "$1" -eq 8 ]
then
	vi "8-clean_set.js"
elif [ "$1" -eq 9 ]
then
	vi "9-groceries_list.js"
elif [ "$1" -eq 10 ]
then
	vi  "10-update_uniq_items.js"
elif [ "$1" -eq 100 ]
then
	vi "100-weak.js"
else
	echo "NULL"
fi
