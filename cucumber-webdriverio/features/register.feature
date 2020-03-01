Feature: Register user into losestudiantes
    As a non user I want to register a user to authenticate myself within losestudiantes website in order to rate teachers

Scenario Outline: Register failed with wrong inputs
    Given I go to losestudiantes home screen
    When I open the login screen
    And I enter <email> and <password>
    And I try to register
    Then I expect to see <error>

    Examples:
    | email                      | password        | error  |
    | se-mende@uniandes.edu.co   | PruebasTaller2  | "Debes aceptar los términos y condiciones"     |
    | se-mende@uniandes.edu.co   |   | "Ingresa una contraseña"     |
    |   | PruebasTaller2  | "Ingresa tu correo"     |

Scenario Outline: Register works well
    Given I go to losestudiantes home screen
    When I open the login screen
    And I register <email> and <password> and <firstname> and <lastname>
    And I try to register
    Then I expect to be able to register

    Examples:
    | email                              | password        | firstname | lastname |
    | se-mende-pruebas2@uniandes.edu.co   | PruebasTaller5  | Juan      | Mendez   |
