import MaxFilesHtmlAttr from './MaxFilesHtmlAttr';

function MaxFileSizeHtmlAttr() {
	MaxFilesHtmlAttr.call( this );

	this.attrName = 'max_size';

	/**
	 * @param input {FileData|InputData}
	 */
	this.setInput = function ( input ) {
		MaxFilesHtmlAttr.prototype.setInput.call( this, input );

		const { previewsContainer } = input.callable;
		const { max_size = 1 }      = JSON.parse(
			previewsContainer.dataset.args,
		);

		this.initial = +max_size;
	};
}

MaxFileSizeHtmlAttr.prototype = Object.create( MaxFilesHtmlAttr.prototype );

export default MaxFileSizeHtmlAttr;