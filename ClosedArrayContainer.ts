import { IClosedArrayContainer } from './IClosedArrayContainer';
import { BatchGetterSetter } from 'batch-getter-setter/BatchGetterSetter';
import {IOpenDataContainer} from 'open-data-container/IOpenDataContainer';


export abstract class ClosedArrayContainer extends BatchGetterSetter implements IClosedArrayContainer {

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
