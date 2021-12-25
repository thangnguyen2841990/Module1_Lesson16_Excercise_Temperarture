class Temperature {
    _celcius;
    constructor(celcius) {
        this._celcius = celcius;
    }

    get celcius() {
        return this._celcius;
    }

    set celcius(value) {
        this._celcius = value;
    }
}