import { ClosedArrayContainer } from './ClosedArrayContainer';
import { OpenArrayContent } from '../../OpenDataContainer/OpenArrayContainer/OpenArrayContent';
import { ObjectFactory } from '../../../ObjectFactory/ObjectFactory';


// This class has the same properties and methods defined inside OpenArrayContent.

export class ClosedArrayContent extends ClosedArrayContainer {


	constructor(
		protected _array: OpenArrayContent, // injected dependency

		input = []
	) {

		super(_array, input);

		// Create properties identical to those belonging to OpenArrayContent:
		this._createGetterAndOrSetterForEach(['length', 'isEmpty', 'notEmpty'],
			{
				get_getterFunction: (property) => {
					return () => {
						return this._array[property];
					};
				}
			}
		);

		// Create methods identical to those belonging to OpenArrayContent:
		this._createGetterAndOrSetterForEach(
			['has', 'hasAll', 'hasAny', 'matches', 'firstIndexOf', 'lastIndexOf',
				'indexesOf', 'allPass', 'anyPass'],
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
	{class: ClosedArrayContent, dependencies: [OpenArrayContent]}
);