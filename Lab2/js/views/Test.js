export class Test {
    constructor({ word, answers }) {
        this.word = word;
        this.answers = [...answers];
    }

    render(parent) {
        const element = document.createElement('div');

        element.classList.add('row');
        element.classList.add('mb-3');

        element.innerHTML = `
            <div class="col-12 card mb-3">
                <div class="card-body row">
                    <div class="title col-8">
                        <h5 class="card-title">${this.word}</h5>
                    </div>
                    <div class="col-4">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="first-${this.word}-0" value="${this.answers[0].variant}-${this.answers[0].isRight}" id="first-${this.word}">
                            <label class="form-check-label" for="first-${this.word}">
                            ${this.answers[0].variant}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="second-${this.word}-1" value="${this.answers[1].variant}-${this.answers[1].isRight}" id="second-${this.word}">
                            <label class="form-check-label" for="second-${this.word}">
                            ${this.answers[1].variant}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="third-${this.word}-2" value="${this.answers[2].variant}-${this.answers[2].isRight}" id="third-${this.word}">
                            <label class="form-check-label" for="third-${this.word}">
                            ${this.answers[2].variant}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="fourth-${this.word}-3" value="${this.answers[3].variant}-${this.answers[3].isRight}" id="fourth-${this.word}">
                            <label class="form-check-label" for="fourth-${this.word}">
                            ${this.answers[3].variant}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        `;

        parent.append(element);
    }
}