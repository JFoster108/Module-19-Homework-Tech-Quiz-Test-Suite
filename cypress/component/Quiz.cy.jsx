import Quiz from "../../client/src/components/quiz";

describe("Quiz component",
    () => {
        beforeEach(() => {
            cy.intercept({
                method: 'GET',
                url: '/api/questions/random'
            },
                {
                    fixture: 'questions.json',
                    statusCode: 200
                }
            ).as('getRandomQuestion')
        });

        it('should start the quiz and display the first question', () => {
            cy.mount(<Quiz />);
            cy.get('button').contains('Start Quiz').click();
            cy.get('.card').should('be.visible');
            cy.get('h2').should('not.be.empty')
        });

        it ("should answer questions and complete the quiz", () => {
            cy.mount(<Quiz />);
            cy.get('button').contains("Start Quiz").click();
            cy.get('button').contains("1").click();
            cy.get('.alert-success').should("be.visible").and("contain","You score")
        });
    }
);