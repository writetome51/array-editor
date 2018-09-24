import { IClosedDataContainer } from 'closed-data-container/IClosedDataContainer';
import { IEmptyable } from 'emptyable/IEmptyable';


export interface IClosedArrayContainer extends IClosedDataContainer<any[]>, IEmptyable{

	import(data: any[]): this;

}
