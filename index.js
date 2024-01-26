const initLocale = () => {
    let locale = localStorage.getItem('locale') ?? "my";

    fetch(`locale/${locale}.json`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        trans(data)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {

    });

    const trans = (messages) => {
        console.log(messages);
        let list = document.querySelectorAll("[locale-key]");

        list.forEach((element) => {
            let attribute = element.getAttribute('locale-key');

            attribute = attribute.replace('-', '.');

            console.log("Message : ", getNestedValue(messages, attribute, ''));

            element.innerHTML = getNestedValue(messages, attribute, '');
        });
    }
}

const getNestedValue = (list, keys, defaultValue) => {
    if (!has(keys) || !has(list)) {
        return defaultValue;
    }

    keys = keys.split(".");

    let key = keys.shift();

    if (keys.length > 0) {
        return getNestedValue(list[key], keys.join("."), defaultValue);
    } else {
        return has(list[key]) ? list[key] : defaultValue;
    }
};

const has = (value) => {
    if (value == undefined || value == null) {
        return false;
    }

    if (typeof value == "boolean") {
        return true;
    }

    if (Array.isArray(value)) {
        return value.length > 0;
    }

    if (typeof value == "number") {
        return true;
    }

    if (typeof value == "object") {
        return Object.keys(value).length;
    }

    return !!value;
};

let myBtn = document.querySelector('#my-button');
let enBtn = document.querySelector('#en-button');

myBtn.addEventListener('click', (event) => {
    localStorage.setItem('locale', event.target.value);
    initLocale();
});

enBtn.addEventListener('click', (event) => {
    localStorage.setItem('locale', event.target.value);
    initLocale();
});

initLocale();