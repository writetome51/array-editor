import { PrivateArrayContainer } from './PrivateArrayContainer';
import { getUninheritedPublicMethods } from 'intuitive-object-handlers/get/getUninheritedPublicMethods';
import { getUninheritedPublicProperties } from 'intuitive-object-handlers/get/getUninheritiedPublicProperties';
import { PublicArrayContainer } from '@writetome51/public-array-container';

// PrivateArray is an abstract class that provides most of the functionality for subclasses whose names begin 
// with 'PrivateArray'.  It gathers most of its logic from the passed PublicArrayContainer instance (this._array) .
// PrivateArray automatically generates properties and methods by using the properties and methods of this._array .
// First, it creates an array of the names of all the properties belonging to this._array .  Then it creates a getter 
// function for each one.  Each getter function simply returns the value of the corresponding PublicArrayContainer 
// property.  
// Then PrivateArray creates an array of the names of all methods belonging to this._array.  Then it creates a 
// getter function for each one.  What happens in that getter function is decided by a subclass.  In the constructor 
// below, the parameter get_getterFunctionForMethods must be a function that returns a getter function.  That 
// getter function, in turn, must return a function, which will be the value of the method.  That function could simply 
// be the corresponding PublicArrayContainer method, or it could be a function that calls the corresponding 
// PublicArrayContainer method somewhere inside it.

export abstract class PrivateArray extends PrivateArrayContainer {


	constructor(
		protected _array: PublicArrayContainer, // must be subclass of it.

		input = [],

		get_getterFunctionForMethods: Function // must return getter function
	) {
		super(_array, input);

		// Create properties identical to those belonging to this._array:

		let uninheritedPublicProperties = getUninheritedPublicProperties(this._array);

		this._createGetterAndOrSetterForEach(uninheritedPublicProperties,
			{
				get_getterFunction: (property) => {
					// Returns a getter function that returns the value of the corresponding 
					// PublicArrayContainer property:
					return () => {
						return this._array[property];
					};
				}
			}
		);

		// Create methods with names identical to those belonging to this._array:

		let uninheritedPublicMethods = getUninheritedPublicMethods(this._array);

		this._createGetterAndOrSetterForEach(
			uninheritedPublicMethods,
			{
				get_getterFunction: get_getterFunctionForMethods
			}
		);

	}


}
