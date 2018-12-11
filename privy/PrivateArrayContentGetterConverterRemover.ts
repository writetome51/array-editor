import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { PrivateArrayContent } from './PrivateArrayContent';
import { PrivateArrayGetter } from './PrivateArrayGetter';
import { PrivateArrayContainer } from './PrivateArrayContainer';
import { PrivateArrayGetterConverter } from './PrivateArrayGetterConverter';
import { PrivateArrayGetterRemover } from './PrivateArrayGetterRemover';


/**********
This class has these properties:
    this.content, this.get, this.getConverted, this.getAndRemove .

 They're named as such so they act as prefixes to their method names/properties, i.e,
 this.content.length, this.get.adjacentItems(), this.getConverted.toOne(),
 this.getAndRemove.item(), and so forth.
 ***********/

export class PrivateArrayContentGetterConverterRemover extends PrivateArrayContainer {

	// public content: PrivateArrayContent;
	// public get: PrivateArrayGetter;
	// public getConverted: PrivateArrayGetterConverter;
	// public getAndRemove: PrivateArrayGetterRemover;


	constructor(
		// begin injected dependencies...
		private _content: PrivateArrayContent,
		private _get: PrivateArrayGetter,
		private _getConverted: PrivateArrayGetterConverter,
		private _getAndRemove: PrivateArrayGetterRemover,
		//...end injected dependencies

		input = []
	) {

		super({data: []}, input);

		// create the public properties:
		this._createGetterAndOrSetterForEach(['content', 'get', 'getConverted', 'getAndRemove'],
			{
				get_getterFunction: (property) => {
					return () => {
						return this[`_${property}`].import(this._array.data);
					};
				}
			}
		);
	}


}


ObjectFactory.register(
	{
		class: PrivateArrayContentGetterConverterRemover,
		dependencies: [
			PrivateArrayContent, PrivateArrayGetter, PrivateArrayGetterConverter,
			PrivateArrayGetterRemover
		]
	}
);
