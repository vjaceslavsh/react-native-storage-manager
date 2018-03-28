import { AsyncStorage } from 'react-native';

class Storage {
    constructor(id) {
        this.id = id;
        this.storage = AsyncStorage;
    }

    async set(key, value, isJSON = false) {
        const data = isJSON ? JSON.stringify(value) : value;

        try {
            await this.storage.setItem(`${this.id}:${key}`, data);
            return true;
        } catch(error) {
            return false;
        }
    }

    async get(key, isJSON) {
        try {
            const data = await this.storage.getItem(`${this.id}:${key}`);

            if (data !== null) {
                if (isJSON) {
                    return JSON.parse(data);
                }
                return data;
            }
            return false;
        } catch(error) {
            return false;
        }
    }

    async remove(key) {
        try {
            await this.storage.removeItem(`${this.id}:${key}`);
            return true;
        } catch(error) {
            return false;
        }
    }
}

export default Storage;