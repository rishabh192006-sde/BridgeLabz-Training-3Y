
class FormBuilder {
    constructor(fields, form) {
        this.fields = fields;
        this.form = form;
    }

    buildForm() {
        this.form.innerHTML = "";

        this.fields.forEach(field => {
            const label = document.createElement("label");
            label.textContent = field.label;

            const input = document.createElement("input");
            input.type = field.type;
            input.name = field.name;
            input.required = true;

            this.form.appendChild(label);
            this.form.appendChild(input);
            this.form.appendChild(document.createElement("br"));
        });

        const button = document.createElement("button");
        button.type = "submit";
        button.textContent = "Submit";

        this.form.appendChild(button);

        this.form.addEventListener("submit", event => {
            event.preventDefault();

            const data = this.getFormData();

            document.getElementById("output").textContent =
                JSON.stringify(data, null, 2);
        });
    }

    getFormData() {
        const data = {};

        this.fields.forEach(field => {
            data[field.name] =
                this.form.elements[field.name].value;
        });

        return data;
    }
}

const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "number", label: "Age", name: "age" }
];

const formBuilder = new FormBuilder(
    fields,
    document.getElementById("dynamicForm")
);

formBuilder.buildForm();
