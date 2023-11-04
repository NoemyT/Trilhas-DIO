/*
var (escopo global) - escopo fora do bloco.

let (escopo local) - escopo restrito ao bloco.

const (não permitindo reatribuição e nem redeclaração) - constante.

var
    - a variável var é declarada e iniciada no escopo da função
    - não respeitando bloco e permitindo a redeclaração e reatribuição.

let
    - a variável let é declarada no escopo da função, mas só é inicializada posteriormente
    - respeitando bloco e permitindo reatribuição, mas não permite a redeclaração.

const
    - a variável const é declarada no escopo da função, mas só é inicializada posteriormente
    - respeitando bloco e não permitindo reatribuição nem redeclaração.

OBS 1:
    - Ao declarar uma variável sem o var, sem o let ou sem o const, ela é criada no escopo global.

OBS 2:
    - Nunca declare variáveis sem var, let e const e evite a utilização de var.
*/

// PTB: Eduardo Da Silva Rodrigues