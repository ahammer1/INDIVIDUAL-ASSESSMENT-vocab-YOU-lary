import { deleteVocab, getSingleVocab, getVocab } from '../api/vocabData';
import addVocabForm from '../components/addvocabform';
import { showVocab } from '../pages/vocab ';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A WORD
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE WORD', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocab(firebaseKey).then(() => {
          getVocab().then(showVocab);
        });
      }
    }
    // CLICK EVENT FOR SHOWING FORM FOR ADDING A WORD
    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm();
    }

    // CLICK EVENT EDITING/UPDATING A WORD
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocab(firebaseKey).then(() => addVocabForm());
      // getSingleBook(firebaseKey).then(addBookForm);
    }

    // ADD CLICK EVENT FOR DELETING A WORD
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE VOCAB', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocab(firebaseKey).then(() => {
          getVocab().then(showVocab);
        });
      }
    }
  });
};

export default domEvents;
