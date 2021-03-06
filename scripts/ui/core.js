/**********
 * Core UI Functions
 * Author: Ian Glen <ian@ianglen.me>
 *********/

/* UI elements array */
var elementsArray = new Array();
var displayUI = true;


/**
 * window.drawElements()
 * draws all visible elements in the UI elements array
 */
var drawElements = function()
{
	if(displayUI)
	{
		for(var n = 0; n < elementsArray.length; n++)
		{
			elementsArray[n].drawSetup();
			elementsArray[n].draw();
		}
	}
}


/**
 * window.addElement(Element element)
 * adds an element to the UI elements array
 *     element - element object to be added
 */
var addElement = function(element)
{
	elementsArray.push(element);
}


/**
 * window.removeElement(string name)
 * removes an element from the UI elements array
 *     name - name of the element to be removed
 */
var removeElement = function(name)
{
	for(var n = 0; n < elementsArray.length; n++)
	{
		if(elementsArray[n].name = name)
		{
			elementsArray.splice(n, 1);
			break;
		}
	}
}


/**
 * window.getElement(string name)
 * returns the element object for an element with a given name
 *     name - name of the element
 */
var getElement = function(name)
{
	for(var n = 0; n < elementsArray.length; n++)
	{
		if(elementsArray[n].name == name)
		{
			return elementsArray[n];
		}
	}

	return false;
}