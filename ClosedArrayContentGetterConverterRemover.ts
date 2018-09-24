import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { ClosedArrayContent } from './ClosedArrayContent';
import { ClosedArrayItemGetter } from './ClosedArrayItemGetter';
import { ClosedArrayContainer } from './ClosedArrayContainer';
import { ClosedArrayGetterConverter } from './ClosedArrayGetterConverter';
import { ClosedArrayItemGetterRemover } from './ClosedArrayItemGetterRemover';


/**********
This class has these properties:
    this.content, this.get, this.getConverted, this.getAndRemove .

 They're named as such so they act as prefixes to their method names/properties, i.e,
 this.content.length, this.get.adjacentItems(), this.getConverted.toOne(),
 this.getAndRemove.item(), and so forth.
 ***********/

export class ClosedArrayContentGetterConverterRemover extends ClosedArrayContainer {

	// public content: ClosedArrayContent;
	// public get: ClosedArrayItemGetter;
	// public getConverted: ClosedArrayGetterConverter;
	// public getAndRemove: ClosedArrayItemGetterRemover;


	constructor(
		// begin injected dependencies...
		private _content: ClosedArrayContent,
		private _get: ClosedArrayItemGetter,
		private _getConverted: ClosedArrayGetterConverter,
		private _getAndRemove: ClosedArrayItemGetterRemover,
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
		class: ClosedArrayContentGetterConverterRemover,
		dependencies: [
			ClosedArrayContent, ClosedArrayItemGetter, ClosedArrayGetterConverter,
			ClosedArrayItemGetterRemover
		]
	}
);
