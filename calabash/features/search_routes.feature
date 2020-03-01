Feature: Buscar rutas

  Scenario: Como usuario quiero buscar una ruta
    Given I press "Rutas"
    Then I wait
    Then I press "Rutas"
    Then I press "Buscar"
    Then I enter "Portal sur" into input field number 1
    Then I press the enter button
    Then I should see "Héroes"
    Then I should see "Portal Sur"

  Scenario: Como usuario quiero no ver resultados si el criterio no es encontrado
    Given I press "Rutas"
    Then I wait
    Then I press "Rutas"
    Then I press "Buscar"
    Then I enter "asdf asdf asdf a" into input field number 1
    Then I press the enter button
    Then I should not see "Héroes"
    Then I should not see "Portal"

  Scenario: Como usuario quiero poder hacer scroll para ver más resultados de la busqueda
    Given I press "Rutas"
    Then I wait
    Then I press "Rutas"
    Then I press "Buscar"
    Then I enter "Portal sur" into input field number 1
    Then I press the enter button
    Then I drag from 50:70 to 50:30 moving with 1 steps
    Then I drag from 50:70 to 50:30 moving with 1 steps
    Then I should see "Museo nacional"
    Then I should see "Flores"