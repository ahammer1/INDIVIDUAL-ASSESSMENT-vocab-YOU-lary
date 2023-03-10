import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocab</h1>';
  renderToDOM('#store', domString);
};

const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add Vocab</button>';
renderToDOM('#add-button', btnString);

export default { emptyVocab };
