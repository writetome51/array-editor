import { IClosedArrayContainer } from './IClosedArrayContainer';
import { ClosedArraySorter } from './ClosedArraySorter';
import { ClosedArrayItemInserter } from './ClosedArrayItemInserter';
import { ClosedArrayItemReplacer } from './ClosedArrayItemReplacer';
import { ClosedArrayFilter } from './ClosedArrayFilter';
import { ClosedArrayContentGetterConverterRemover } from './ClosedArrayContentGetterConverterRemover';
import { ClosedArrayItemGetter } from './ClosedArrayItemGetter';
import { ClosedArrayContent } from './ClosedArrayContent';
import { ClosedArrayItemRemover } from './ClosedArrayItemRemover';
import { ClosedArrayGetterConverter } from './ClosedArrayGetterConverter';
import { ClosedArrayItemGetterRemover } from './ClosedArrayItemGetterRemover';
import { MethodGenerator } from 'method-generator/MethodGenerator';
import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';


/***********
 Behold... ArrayEditor.
 ArrayEditor combines all the other ClosedArrayContainer classes into one powerful,
 versatile class.  This class contains methods that are defined during runtime using
 MethodGenerator.  So when you're calling these methods, a linting tool like TSLint
 will tell you these methods don't exist.  In this case, ignore TSLint.

 Every method generated for this class returns the class instance.  So they are all
 chainable, i.e, you can write something like:

 this.remove_allOf('nuts').insert_multiple(['jelly','donut'], 2).append_single('frosting').export();

 ************/


export class ArrayEditor extends ClosedArrayContentGetterConverterRemover {

	// These properties are intended to be private, hence the underscores. You're only
	// intended to access the methods generated for them.
	protected _propertiesToGenerateMethodsFor = [
		'_remove', '_replace', '_insert', '_sort', '_filter'
	];


	constructor(
		// begin injected dependencies...
		content: ClosedArrayContent, // this.content
		get: ClosedArrayItemGetter, // this.get
		getConverted: ClosedArrayGetterConverter, // this.getConverted
		getAndRemove: ClosedArrayItemGetterRemover, // this.getAndRemove
		private __remove: ClosedArrayItemRemover,
		private __replace: ClosedArrayItemReplacer,
		private __insert: ClosedArrayItemInserter,
		private __sort: ClosedArraySorter,
		private __filter: ClosedArrayFilter,
		methodGenerator: MethodGenerator,
		// ... end injected dependencies

		input = []
	) {

		super(content, get, getConverted, getAndRemove, input);

		// create the properties:
		this._createGetterAndOrSetterForEach(this._propertiesToGenerateMethodsFor,
			{
				get_getterFunction: (property) => {
					return () => {
						return this[`_${property}`].import(this._array.data);
					};
				}
			}
		);

		methodGenerator.targetInstance = this;
		methodGenerator.nameofFunctionToCallInEachNewMethod = '_doAction_updateData_and_returnThis';
		methodGenerator.generatePublicMethodsFor(this._propertiesToGenerateMethodsFor);

	}


	get append(){}


	get prepend(){}


	// The method called inside each method created by methodGenerator:
	private _doAction_updateData_and_returnThis(obj: IClosedArrayContainer, action, actionArgs) {
		return this.runMethod_and_returnThis(obj, action, actionArgs, () => {
			this._array.data = obj.export();
			obj.empty();
		});
	}


}


ObjectFactory.register(
	{
		class: ArrayEditor,
		dependencies: [
			ClosedArrayContent, ClosedArrayItemGetter, ClosedArrayGetterConverter,
			ClosedArrayItemGetterRemover, ClosedArrayItemRemover, ClosedArrayItemReplacer,
			ClosedArrayItemInserter, ClosedArraySorter, ClosedArrayFilter, MethodGenerator
		]
	}
);
