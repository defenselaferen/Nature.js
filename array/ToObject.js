/*******************************************************\
 *                 COPYRIGHT 2020                      *
 *******************************************************
 *   Have privacy police this made by website          *
 *   thekotekjournal.epizy.com                         *
 *   this not for publish CODE                         *
 *((((((((((((((((((((((((((C))))))))))))))))))))))))))*
\*******************************************************/

// it owns the copyright of the website
// https://gamegakjelas.000webhostapp.com/
// To work on Array To Json

export function ArrayToObject(array) {
	let result = {};
	for(let i = 0; i < array.length; i += 2) {
		result [array[i]] = array[i+1];
	}
	return result;
}

// How It Works An Array That Has More 
// Importance Two And Param 1 
// will be the parent and second contents
// OBJECT = {[0]: [1]}
