//Classe CalcController = criação da classe que controlara a calculadora

class CalcController {

    constructor() {

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dataEl = document.querySelector("#data");
        this._horaEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize() {

        this.setDisplayDateTime();

        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);

    }

    initButtonsEvents() {

        let buttons = document.querySelectorAll('#buttons > g, #parts > g');

        buttons.forEach((btn, index) => {
            btn.addEventListener('click', e => {
                console.log(btn.className.baseVal.replace('btn-', ''));
            })
        });

    }

    setDisplayDateTime() {
        this.displayTime = new Date().toLocaleTimeString(this._locale);
        this.displayDate = new Date().toLocaleDateString(this._locale);
    }

    //getter and setter dispaycalc
    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(param) {
        this._displayCalcEl.innerHTML = param;
    }

    get displayTime() {
        return this._horaEl.innerHTML;
    }

    set displayTime(param) {
        this._horaEl.innerHTML = param;
    }

    //getter and setter _currentDate
    get displayDate() {
        let data = new Date();
        this._dataEl.innerHTML = data.toLocaleDateString();
        return this._dataEl.innerHTML;
    }

    set displayDate(param) {
        this._dataEl.innerHTML = param;
    }

}