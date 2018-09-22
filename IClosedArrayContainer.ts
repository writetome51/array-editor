import { IClosedDataContainer } from '../IClosedDataContainer';
import { IEmptyable } from '../../../../interfaces/IEmptyable';


export interface IClosedArrayContainer extends IClosedDataContainer<any[]>, IEmptyable{

	import(data: any[]): this;

}
