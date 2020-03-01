Feature: Filtrar rutas

  Scenario: Como usuario quiero ver los filtros de las rutas
    Given I press "Rutas"
    Then I wait
    Given I press "Rutas"
    Then I should see "TRANSMILENIO"
    Then I should see "COMPLEMENTARIO"
    Then I should see "URBANO"               

  Scenario: Como usuario quiero filtrar las rutas
    Given I press "Rutas"
    Then I wait
    Given I press "Rutas"
    Then I should see "Portal el dorado"
    Given I press "URBANO"
    Then I should see "San fernando"
    Given I press "COMPLEMENTARIO"
    Then I should see "Guaymaral"

  Scenario: Como usuario quiero poder ver todos los filtros
    Given I press "Rutas"
    Then I wait
    Given I press "Rutas"
    Given I press "COMPLEMENTARIO"
    Then I should see "ESPECIAL"
    Given I press "ESPECIAL"
    Then I should see "ALIMENTADOR"      