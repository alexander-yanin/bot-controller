class SettingProvider {
    constructor(uri, methods=null) {
        this._uri = uri;
        this._methods = methods;
    }

    get uri() {
        return this._uri;
    }

    get methods() {
        return this._methods;
    }

    set uri(value) {
        this._uri = value;
    }

    set methods(value) {
        this._methods = value;
    }
}

module.exports = SettingProvider;