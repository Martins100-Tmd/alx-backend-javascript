import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  set amount(amount) {
    if (typeof amount === 'number') this._amount = amount;
    else throw new TypeError('Amount must be a number');
  }

  get amount() {
    return this._amount;
  }

  set currency(currency) {
    if (currency instanceof Currency) this._currency = currency;
    else throw new TypeError('Currency must be currency');
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') return amount * conversionRate;
    throw new TypeError('Amount and Conv_rate must be a number');
  }
}

