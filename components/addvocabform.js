import clearDom from '../utils/cleardom';
import renderToDOM from '../utils/renderToDom';

const addVocabForm = () => {
  clearDom();
  const domString = `
    <form id="submit-author" class="mb-4">
      <div class="form-group">
        <label for="image">Vocabulary Word</label>
        <input type="text" class="form-control" id="vocab" placeholder="Example: class " required>
      </div>
      <div class="form-group">
        <label for="image">Definition</label>
        <input type="text" class="form-control" id="definition" placeholder="Example: Applies a CSS class style to an element " required>
      </div>
      <div class="form-group">
        <label for="title">Email</label>
        <input type="ltech" class="form-control" id="ltech" aria-describedby="ltech" placeholder="Enter ltech" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Author</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
