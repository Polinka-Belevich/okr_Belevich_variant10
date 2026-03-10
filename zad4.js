class CustomLocalStorage {
    getData(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    setData(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    editData(key, newValue) {
        if (localStorage.getItem(key) !== null) {
            localStorage.setItem(key, JSON.stringify(newValue));
            return true;
        }
        return false;
    }

    deleteData(key) {
        localStorage.removeItem(key);
    }
}
const customStorage = new CustomLocalStorage();
customStorage.setData("key", 1);
