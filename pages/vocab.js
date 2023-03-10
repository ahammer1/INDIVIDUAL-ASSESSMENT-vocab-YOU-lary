import clearDom from '../utils/cleardom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocab</h1>';
  renderToDOM('#store', domString);
};

const showVocab = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
          <h5 class="card-title">${item.name}</h5>
          <p1 class="card-description">${item.definition}</p1>
          <p2 class="card-info">${item.tech}</p2>
            <hr>
            <i id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showVocab, emptyVocab };
