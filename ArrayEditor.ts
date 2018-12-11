import { IPrivateArrayContainer } from './privy/IPrivateArrayContainer';
import { PrivateArraySorter } from './privy/PrivateArraySorter';
import { PrivateArrayInserter } from './privy/PrivateArrayInserter';
import { PrivateArrayReplacer } from './privy/PrivateArrayReplacer';
import { PrivateArrayFilter } from './privy/PrivateArrayFilter';
import { PrivateArrayContentGetterConverterRemover } from './privy/PrivateArrayContentGetterConverterRemover';
import { PrivateArrayGetter } from './privy/PrivateArrayGetter';
import { PrivateArrayContent } from './privy/PrivateArrayContent';
import { PrivateArrayRemover } from './privy/PrivateArrayRemover';
import { PrivateArrayGetterConverter } from './privy/PrivateArrayGetterConverter';
import { PrivateArrayGetterRemover } from './privy/PrivateArrayGetterRemover';
import { MethodGenerator } from 'method-generator/MethodGenerator';
import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';


/***********
 Behold... ArrayEditor.
 ArrayEditor combines all the other PrivateArrayContainer classes into one powerful,
 versatile class.  This class contains methods that are defined during runtime using
 MethodGenerator.  So when you're calling these methods, a linting tool like TSLint
 will tell you these methods don't exist.  In this case, ignore TSLint.

 Every method generated for this class returns the class instance.  So they are all
 chainable, i.e, you can write something like:

 this.remove_allOf('nuts').insert_at(2, ['jelly', 'donut']).append(['frosting']).export();

 ************/


export class ArrayEditor extends PrivateArrayContentGetterConverterRemover {

	// These properties are intended to be private, hence the underscores. You're only
	// intended to access the methods generated for them.
	protected _propertiesToGenerateMethodsFor = [
		'_remove', '_replace', '_insert', '_sort', '_filter'
	];


	constructor(
		// begin injected dependencies...
		content: PrivateArrayContent, // this.content
		get: PrivateArrayGetter, // this.get
		getConverted: PrivateArrayGetterConverter, // this.getConverted
		getAndRemove: PrivateArrayGetterRemover, // this.getAndRemove
		private __remove: PrivateArrayRemover,
		private __replace: PrivateArrayReplacer,
		private __insert: PrivateArrayInserter,
		private __sort: PrivateArraySorter,
		private __filter: PrivateArrayFilter,
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
	private _doAction_updateData_and_returnThis(obj: IPrivateArrayContainer, action, actionArgs) {
		return this.runMethod_and_returnThis(obj, action, actionArgs, () => {
			this._array.data = obj.export();
		});
	}


}


ObjectFactory.register(
	{
		class: ArrayEditor,
		dependencies: [
			PrivateArrayContent, PrivateArrayGetter, PrivateArrayGetterConverter,
			PrivateArrayGetterRemover, PrivateArrayRemover, PrivateArrayReplacer,
			PrivateArrayInserter, PrivateArraySorter, PrivateArrayFilter, MethodGenerator
		]
	}
);
