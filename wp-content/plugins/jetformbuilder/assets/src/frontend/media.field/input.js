import { createFileList, isFile } from './functions';

const { InputData } = window.JetFormBuilderAbstract;

/**
 * @property {string} rawName
 * @property {string} name
 * @property {Node|boolean} comment
 * @property {Node|*[]} nodes
 * @property {ReactiveVar} value
 * @property {ConditionChecker} checker
 * @property {*} calcValue
 * @property {AdvancedReporting|BrowserReporting} reporting
 * @property {Observable} root
 * @property {PageState} page
 * @property {LoadingReactiveVar} loading
 * @property {SignalFile} callable
 *
 * @constructor
 */
function FileData() {
	InputData.call( this );

	this.isMultiple = false;
	this.prevFiles  = null;

	this.isSupported = function ( node ) {
		return isFile( node );
	};

	this.addListeners = function () {
		const [ node ] = this.nodes;

		node.addEventListener( 'change', event => {
			this.value.current = createFileList(
				this.isMultiple
				? [ ...this.prevFiles ?? [], ...event.target.files ]
				: [ ...event.target.files ],
			);
		} );
	};
	this.setNode      = function ( node ) {
		InputData.prototype.setNode.call( this, node );

		this.isMultiple = node.multiple;
	};

	this.setValue = function () {
		this.callable.loadFiles();
	};

	this.initNotifyValue = () => {};
}

FileData.prototype = Object.create( InputData.prototype );

export default FileData;