import { IClosedArrayContainer } from './IClosedArrayContainer';
import { BaseObject } from '../../../BaseObject';
import { IOpenDataContainer } from '../../OpenDataContainer/IOpenDataContainer';


export abstract class ClosedArrayContainer extends BaseObject implements IClosedArrayContainer {

	constructor(
		protected _array: IOpenDataContainer<any[]>,

		input = []
	) {
		super();
		this._set_data(input);
	}


	// If passing an argument to the constructor isn't possible you can use import() instead.
	import(array: any[]): this {
		this._set_data(array);
		return this;
	}


	empty() {
		this._array.data = [];
	}


	export(): any[] {
		return this._array.data;
	}


	protected _set_data(array) {
		this._array.data = array;
	}


}
