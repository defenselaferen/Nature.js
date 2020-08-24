/*******************************************************\
 *                 COPYRIGHT 2020                      *
 *******************************************************
 *   Have privacy police this made by website          *
 *   thekotekjournal.epizy.com                         *
 *   this not for publish CODE                         *
 *((((((((((((((((((((((((((C))))))))))))))))))))))))))*
\*******************************************************/

export class Window
{
	Get(x)
	{
		return document.querySelector(x);
	}
	Make(element = "h1", text = null, classId = null, idID = null)
	{
		let result = document.createElement(element);
		if(text == null){}else{result.textContent = text;}
		if(classId == null){}else{result.setAttribute('class', classId);}
		if(idID == null){}else{result.setAttribute('id', idID);}

		return result;
	}
	AppendToBody(object)
	{
		document.body.appendChild(object);
	}
	Append(object, location)
	{
		let result = document.querySelector(location);
		return result.append(object);
	}
	Appends(object, location)
	{
		return location.append(object);
	}
}