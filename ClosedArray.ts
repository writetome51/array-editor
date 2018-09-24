import { ClosedArrayContainer } from './ClosedArrayContainer';
import { getUninheritedPublicMethods } from 'intuitive-object-handlers/get/getUninheritedPublicMethods';
import { getUninheritedPublicProperties } from 'intuitive-object-handlers/get/getUninheritiedPublicProperties';
import { OpenArrayContainer } from '@writetome51/open-array/OpenArrayContainer';


export abstract class ClosedArray extends ClosedArrayContainer {


	constructor(
		protected _array: OpenArrayContainer, // must be subclass of it.

		input = [],
		get_getterFunctionForMethods: Function
	) {
		super(_array, input);

		// Create properties identical to those belonging to this._array:

		let uninheritedPublicProperties = getUninheritedPublicProperties(this._array);
		this._createGetterAndOrSetterForEach(uninheritedPublicProperties,
			{
				get_getterFunction: (property) => {
					return () => {
						return this._array[property];
					};
				}
			}
		);

		// Create methods identical to those belonging to this._array:
		let uninheritedPublicMethods = getUninheritedPublicMethods(this._array);

		this._createGetterAndOrSetterForEach(
			uninheritedPublicMethods,
			{
				get_getterFunction: get_getterFunctionForMethods
			}
		);

	}


}
