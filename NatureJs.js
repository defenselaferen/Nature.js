/*******************************************************\
 *                 COPYRIGHT 2020                      *
 *******************************************************
 *   Have privacy police this made by website          *
 *   thekotekjournal.epizy.com                         *
 *   this not for publish CODE                         *
 *((((((((((((((((((((((((((C))))))))))))))))))))))))))*
\*******************************************************/

"use strict"

import {ArrayToObject} from './array/ToObject.js'
import {Window} from './Window/Window.js'
import {getCookie} from './Cookie/getCookie.js'
import {setCookie} from './Cookie/setCookie.js'

import {DataBase} from './DataBase/DataBase.js'
import {DataBases} from './DataBase/DataBases.js'

import {CryptoJS} from './encrypt/Crypto.js'

import * as Color from './Color/Color.js'

export function DB() {
	return new DataBase();
}

export function DBS() {
	return new DataBases();
}

const WinNature = new Window;

export function makeCookie(cname, cvalue, exdays) {
	return setCookie(cname, cvalue, exdays);
}


export function queryCookie(cname) {
	return getCookie(cname);
}

export class Component
{
	setState(object)
	{
		this.state = object;
	}
	Get(name)
	{
		return WinNature.Get(name);
	}
	Make(element = "h1", text = null, classId = null, idID = null)
	{
		return WinNature.Make(element, text, classId, idID);
	}
	Append(object, location)
	{
		return WinNature.Append(object, location); 
	}
	Appends(object, location)
	{
		return WinNature.append(object);
	}
}

class NatureJS
{
	constructor()
	{
		this.NatureJS = true;
	}
	renderAny(ObjectApp, ...Param) {
		let result = new ObjectApp(ArrayToObject(Param));
		return result.render();
	}
	render(ObjectApp, Location, ...Param)
	{
		let result = new ObjectApp(ArrayToObject(Param));
		return document.querySelector(Location).innerHTML += result.render();
	}
}

export const NatureJSDOM = new NatureJS();