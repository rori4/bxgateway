export class Filter {
    private _filter: string = '';
    private _valid: boolean = false;

    build() {
        if (!this._valid) throw new Error('Invalid filter');
        return this._filter;
    }

    to(address: string) {
        this._filter += `to == '${address}'`;
        this._valid = true;
        return this;
    }

    toIn(addresses: string[]) {
        this._filter += `to in ${JSON.stringify(addresses)}`;
        this._valid = true;
        return this;
    }

    from(address: string) {
        this._filter += `from == '${address}'`;
        this._valid = true;
        return this;
    }

    fromIn(addresses: string[]) {
        this._filter += `from in ${JSON.stringify(addresses)}`;
        this._valid = true;
        return this;
    }

    method(methodId: string) {
        this._filter += `method_id == '${methodId}'`;
        this._valid = true;
        return this;
    }

    methodIn(methodIds: string[]) {
        this._filter += `method_id in ${JSON.stringify(methodIds)}`;
        this._valid = true;
        return this;
    }

    gasPriceGt(gasPrice: string) {
        this._filter += `gas_price > ${gasPrice}`;
        this._valid = true;
        return this;
    }

    gasPriceLt(gasPrice: string) {
        this._filter += `gas_price < ${gasPrice}`;
        this._valid = true;
        return this;
    }

    get and() {
        this._filter += ` AND `;
        this._valid = false;
        return this;
    }

    get or() {
        this._filter += ` OR `;
        this._valid = false;
        return this;
    }
}
