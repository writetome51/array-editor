import { IPrivateDataContainer } from 'private-data-container-interface/IPrivateDataContainer';
import { IEmptyable } from 'emptyable/IEmptyable';


export interface IPrivateArrayContainer extends IPrivateDataContainer<any[]>, IEmptyable{

	import(data: any[]): this;

}
