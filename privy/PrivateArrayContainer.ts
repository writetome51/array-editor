import { IPrivateArrayContainer } from './IPrivateArrayContainer';
import { BatchGetterSetter } from 'batch-getter-setter/BatchGetterSetter';
import {IPublicDataContainer} from 'public-data-container-interface/IPublicDataContainer';


export abstract class PrivateArrayContainer extends BatchGetterSetter implements IPrivateArrayContainer {

	constructor(
		protected _array: IPublicDataContainer<any[]>,

		input = []
	) {
		super();
		this._set_data(input);
	}


	// If passing an argument to the constructor isn't possible you can use import() instead.
	import(array: any[]): this {
		return this.returnThis_after( this._set_data(array));
	}


	export(): any[] {
		return this._array.data;
	}


	empty() {
		setArray( this._array.data,  []);
	}


	protected _set_data(array) {
		this._array.data = array;
	}


}
