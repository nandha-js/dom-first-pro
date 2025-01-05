document.addEventListener('DOMContentLoaded', function () {
    var formContainer = document.getElementById('form-container');

    var form = document.createElement('form');
    form.id = 'userForm';

    var fields = [
        { label: 'First Name', id: 'firstname', type: 'text', required: '' },
        { label: 'Middle Name', id: 'middlename', type: 'text', required: '' },
        { label: 'Last Name', id: 'lastname', type: 'text', required: '' },
        { label: 'Email', id: 'email', type: 'email', required: '' },
        { label: 'Password', id: 'password', type: 'password', required: '' }
    ];

    fields.forEach(function(field) {
        var fieldContainer = document.createElement('div');

        var label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.textContent = field.label + ':';

        var input = document.createElement('input');
        input.type = field.type;
        input.id = field.id;
        input.name = field.id;
        if (field.required !== '') input.setAttribute('required', 'required');

        fieldContainer.appendChild(label);
        fieldContainer.appendChild(input);
        fieldContainer.appendChild(document.createElement('br'));
        form.appendChild(fieldContainer);
        form.appendChild(document.createElement('br'));
    });

    var submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    formContainer.appendChild(form);

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var output = '';
        fields.forEach(function(field) {
            var value = document.getElementById(field.id).value;
            output += field.label + ': ' + value + '\n';
        });

        console.log(output);
    });
});
