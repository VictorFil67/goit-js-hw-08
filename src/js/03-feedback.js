import  throttle  from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(onFeedbackFormInput, 500));

function onFeedbackFormInput(e) {
const userForm = {};
const formData = new FormData(feedbackForm);

formData.forEach((value, key) => {
  userForm[key] = value;
});

saveToLs('feedback-form-state', userForm);
}

function saveToLs(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function onLoad() {
    const data = loadFromLS('feedback-form-state') || {};
  
    for (const key of Object.keys(data)) {
      feedbackForm.elements[key].value = data[key];
    }
  }

  function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
    return data;
  }
}
  
  function onFeedbackFormSubmit(e) {
    e.preventDefault();
  
    const data = loadFromLS('feedback-form-state');
    localStorage.removeItem('feedback-form-state');
    e.target.reset();
    console.log(data);
  }
  
  feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
  
  onLoad();