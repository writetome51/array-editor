import { ClosedArrayContainer } from './ClosedArrayContainer';
import { OpenArrayGetterConverter }
	from '../../OpenDataContainer/OpenArrayContainer/OpenArrayGetterConverter';
import { ObjectFactory } from '../../../ObjectFactory/ObjectFactory';
import { getUninheritedPublicMethods }
	from 'datatype-handlers/objects/object_manipulation';


export class ClosedArrayGetterConverter extends ClosedArrayContainer {


	constructor(
		protected _array: OpenArrayGetterConverter, // injected dependency

		array = []
	) {
		super(_array, array);

		// Create methods identical to those belonging to this._array:
		let uninheritedPublicMethods = getUninheritedPublicMethods(this._array);

		// Create methods identical to those belonging to OpenArrayGetterConverter:
		this._createGetterAndOrSetterForEach(
			uninheritedPublicMethods,
			{
				get_getterFunction: (property) => {
					return () => {
						return (...params) => {
							return this._array[property](...params);
						};
					};
				}
			}
		);

	}


}


ObjectFactory.register(
	{class: ClosedArrayGetterConverter, dependencies: [OpenArrayGetterConverter]}
);