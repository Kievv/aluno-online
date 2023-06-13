class Nota {
  constructor(disciplina, a1, a2, a3) {
    this.disciplina = disciplina;
    this.a1 = a1;
    this.a2 = a2;
    this.a3 = a3;
  }

  mediaFinal() {
    return Math.max(0.4 * this.a1 + 0.6 * this.a2, 0.4 * this.a1 + 0.6 * this.a3, 0.4 * this.a3 + 0.6 * this.a2);
  }

  mediaCA() {
    if (this.mediaFinal() < 5.0 && this.mediaFinal() >= 3) {
      return 'MI';
    } else if (this.mediaFinal() == 0) {
      return 'SR';
    } else if (this.mediaFinal() >= 0.1 && this.mediaFinal() < 3) {
      return 'II';
    } else if (this.mediaFinal() >= 5 && this.mediaFinal() < 7) {
      return 'MM';
    } else if (this.mediaFinal() >= 7 && this.mediaFinal() < 9) {
      return 'MS';
    } else if (this.mediaFinal() >= 9 && this.mediaFinal() <= 10) {
      return 'SS';
    }
  }
}

module.exports = Nota;


// describe('Adicionando um requerimento de disciplina Manutenção de Software', () => {
//   it('passes', () => {
//     cy.visit('localhost:3000/requerimentos');

//     cy.get('.btn')
//       .click()
//       .then(() => {
//         cy.get('#inputDisciplina').select('ADS030 - Manutenção de Software e DevOps');
//         cy.get('#inputProva').select('A1');
//         cy.get('#inputArgumentacao').type('Teste de argumentação', { delay: 20 });
//         cy.get('.btn-danger').click();

//         cy.get(':nth-child(6) > .col-md-5').should('be.visible');
//       });
//   });
// });

// describe('Adicionando um requerimento de disciplina Construção de Frontend ', () => {
//   it('passes', () => {
//     cy.visit('localhost:3000/requerimentos');

//     cy.get('.btn')
//       .click()
//       .then(() => {
//         cy.get('#inputDisciplina').select('ADS032 - Construção de Frontend');
//         cy.get('#inputProva').select('A2');
//         cy.get('#inputArgumentacao').type('Outro teste de argumentação', { delay: 20 });
//         cy.get('.btn-danger').click();

//         cy.get('.col-md-5').should('be.visible');
//       });
//   });
// });

// describe('Testando funcionalidade do botão desistir', () => {
//   it('passes', () => {
//     cy.visit('localhost:3000/requerimentos');

//     cy.get('.btn')
//       .click()
//       .then(() => {
//         cy.get('#inputDisciplina').select('ADS032 - Construção de Frontend');
//         cy.get('#inputProva').select('A2');
//         cy.get('#inputArgumentacao').type('Outro teste de argumentação', { delay: 20 });

//         cy.get('.btn-light').click();

//         cy.url().should('eq', 'http://localhost:3000/requerimentos');
//       });
//   });
// });
