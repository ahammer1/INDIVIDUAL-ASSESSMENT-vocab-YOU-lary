import { createVocab, getVocab, updateVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-vocab')) {
      const payload = {
        name: document.querySelector('#name').value,
        definition: document.querySelector('#definition').value,
        ltech: document.querySelector('#ltech').value,
      };

      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab().then(showVocab);
        });
      });
    }
    // CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-voacb')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#name').value,
        definition: document.querySelector('#definition').value,
        ltech: document.querySelector('#ltech').value,
        firebaseKey,
      };

      updateVocab(payload).then(() => {
        getVocab().then(showVocab);
      });
    }
  });
};

export default formEvents;
