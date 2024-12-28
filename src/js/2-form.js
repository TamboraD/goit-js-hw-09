const feedbackFormEl = document.querySelector('.feedback-form');

const formInput = document.querySelector('input');
formInput.classList.add('feedback-input')
const formMessage = document.querySelector('textarea');
formMessage.classList.add('feedback-message')
const formButton = document.querySelector('button');
formButton.classList.add('btn')

let formData = {
    email: '',
    message: '',
};

const fillFormFields = () => {
    try {
        const formDataLS = JSON.parse(localStorage.getItem('feedback-form-state'));

        if (formDataLS === null) {
            return;
        }
        formData = formDataLS;
        console.log(formData);

        for (const key in formDataLS) {
            feedbackFormEl.elements[key].value = formDataLS[key];
        }
    } catch (err) {
        console.log(err)
    }
}
fillFormFields();

const onFormFieldInput = event => {
    const formFieldEl = event.target;

    const fieldValue = formFieldEl.value;
    const fieldName = formFieldEl.name;

    formData[fieldName] = fieldValue;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData))
}

const btnSubmit = event => {
    event.preventDefault();
    if (formData.email === '' || formData.message === '') {
        return alert('Fill please all fields')
    } else {
        console.log(formData)
    
        const { currentTarget: formEl } = event;
        localStorage.removeItem('feedback-form-state');
        formData.email = '';
        formData.message = '';
        formEl.reset();
    }
}


feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit',btnSubmit)