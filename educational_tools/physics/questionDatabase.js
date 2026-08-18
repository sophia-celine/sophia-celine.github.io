window.questionDatabase = [
  {
    "category": "MRU e MRUV",
    "title": "Deslocamento (MRU)",
    "context": "Imagine um carro viajando com velocidade constante em uma estrada. O movimento retilíneo uniforme permite prever a posição desse carro ao longo do tempo.",
    "varsPrompt": "No movimento retilíneo uniforme (MRU), a variação de espaço (Δs) depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "velocidade",
          "v"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "tempo",
          "variacao de tempo",
          "delta t",
          "t"
        ]
      }
    ],
    "validFormulas": [
      "\\Delta s=v\\cdot\\Delta t",
      "\\Delta s=v\\Delta t",
      "\\Delta s=v\\cdot t",
      "s=vt"
    ],
    "displayFormula": "\\Delta s = v \\cdot \\Delta t"
  },
  {
    "category": "MRU e MRUV",
    "title": "Aceleração Média",
    "context": "Quando você pisa no acelerador ou no freio, a velocidade do carro muda ao longo do tempo.",
    "varsPrompt": "A aceleração (a) mede a rapidez dessa mudança. De quais grandezas ela depende?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "variacao de velocidade",
          "velocidade",
          "delta v",
          "v"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "tempo",
          "variacao de tempo",
          "delta t",
          "t"
        ]
      }
    ],
    "validFormulas": [
      "a=\\frac{\\Delta v}{\\Delta t}",
      "a=\\Delta v/\\Delta t"
    ],
    "displayFormula": "a = \\frac{\\Delta v}{\\Delta t}"
  },
  {
    "category": "MRU e MRUV",
    "title": "Função Horária da Velocidade",
    "context": "Um objeto já possui uma velocidade inicial e começa a acelerar. A função horária da velocidade permite prever a velocidade final após um certo tempo.",
    "varsPrompt": "A velocidade final (v) em um MRUV depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "velocidade inicial",
          "v0"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "aceleracao",
          "a"
        ]
      },
      {
        "id": "var_2",
        "synonyms": [
          "tempo",
          "t"
        ]
      }
    ],
    "validFormulas": [
      "v=v_0+a\\cdot t",
      "v=v0+a\\cdot t",
      "v=v_0+at",
      "v=v0+at"
    ],
    "displayFormula": "v = v_0 + a \\cdot t"
  },
  {
    "category": "MRU e MRUV",
    "title": "Equação de Torricelli",
    "context": "Às vezes não sabemos o tempo que um movimento durou, mas sabemos a distância percorrida enquanto o objeto freava ou acelerava.",
    "varsPrompt": "Nesse caso, a velocidade final (v) depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "velocidade inicial",
          "v0"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "aceleracao",
          "a"
        ]
      },
      {
        "id": "var_2",
        "synonyms": [
          "deslocamento",
          "distancia",
          "delta s",
          "espaço"
        ]
      }
    ],
    "validFormulas": [
      "v^2=v_0^2+2a\\Delta s",
      "v^2=v_0^2+2\\cdot a\\cdot\\Delta s",
      "v^2=v0^2+2\\cdot a\\cdot\\Delta s",
      "v^2=v0^2+2a\\Delta s"
    ],
    "displayFormula": "v^2 = v_0^2 + 2 \\cdot a \\cdot \\Delta s"
  },
  {
    "category": "MRU e MRUV",
    "title": "Função Horária da Posição",
    "context": "Um objeto já possui uma posição inicial e uma velocidade inicial, e começa a acelerar. A função horária da posição permite prever a posição final após um certo tempo.",
    "varsPrompt": "A posição final (s) no MRUV depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "posicao inicial",
          "s0"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "velocidade inicial",
          "v0"
        ]
      },
      {
        "id": "var_2",
        "synonyms": [
          "tempo",
          "t"
        ]
      },
      {
        "id": "var_3",
        "synonyms": [
          "aceleracao",
          "a"
        ]
      }
    ],
    "validFormulas": [
      "s=s_0+v_0t+\\frac{at^2}{2}",
      "s=s_0+v_0t+at^2/2",
      "s=s0+v0t+\\frac{at^2}{2}",
      "s=s_0+v_0\\cdot t+\\frac{a\\cdot t^2}{2}",
      "s=s0+v0t+at^2/2"
    ],
    "displayFormula": "s = s_0 + v_0 \\cdot t + \\frac{a \\cdot t^2}{2}"
  },
  {
    "category": "Gases",
    "title": "Equação de Clapeyron",
    "context": "A Equação Geral dos Gases ou Equação de Clapeyron permite prever como um gás se comporta quando suas condições são alteradas.",
    "varsPrompt": "Para um gás ideal, o produto da Pressão (P) pelo Volume (V) depende de quais grandezas (ignorando a constante R)?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "numero de mols",
          "mols",
          "n"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "temperatura",
          "t"
        ]
      }
    ],
    "validFormulas": [
      "PV=nRT",
      "P\\cdot V=n\\cdot R\\cdot T"
    ],
    "displayFormula": "P \\cdot V = n \\cdot R \\cdot T"
  },
  {
    "category": "Gases",
    "title": "Energia Interna (Gás Monoatômico)",
    "context": "As moléculas de um gás estão em constante agitação. A energia total desse movimento interno pode ser calculada.",
    "varsPrompt": "A energia interna (U) de um gás ideal monoatômico depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "numero de mols",
          "n"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "temperatura",
          "t"
        ]
      }
    ],
    "validFormulas": [
      "U=\\frac{3}{2}nRT",
      "U=\\frac{3}{2}\\cdot n\\cdot R\\cdot T"
    ],
    "displayFormula": "U_{mono} = \\frac{3}{2} \\cdot n \\cdot R \\cdot T"
  },
  {
    "category": "Gases",
    "title": "Trabalho de um Gás",
    "context": "Quando um gás se expande, ele empurra as paredes do recipiente (como um êmbolo), realizando trabalho (W) sobre o meio.",
    "varsPrompt": "O Trabalho (W) realizado por um gás a pressão constante depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "pressao",
          "p"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "variacao de volume",
          "delta v",
          "volume"
        ]
      }
    ],
    "validFormulas": [
      "W=P\\cdot\\Delta V",
      "W=P\\Delta V"
    ],
    "displayFormula": "W = P \\cdot \\Delta V"
  },
  {
    "category": "Gases",
    "title": "1ª Lei da Termodinâmica",
    "context": "O calor (Q) que um sistema recebe pode ser usado para modificar seu estado internamente ou externamente.",
    "varsPrompt": "A quantidade de Calor (Q) recebida por um sistema depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "variacao da energia interna",
          "delta u"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "trabalho",
          "w"
        ]
      }
    ],
    "validFormulas": [
      "Q=\\Delta U+W",
      "Q=W+\\Delta U"
    ],
    "displayFormula": "Q = \\Delta U + W"
  },
  {
    "category": "Termodinâmica",
    "title": "Calor Sensível",
    "context": "Para esquentar a água do café, você fornece energia. A energia necessária para mudar a temperatura não é a mesma em todas as circunstâncias.",
    "varsPrompt": "De quais grandezas a quantidade de calor (Q) necessária para mudar a temperatura de uma substância (calor específico) depende?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "massa",
          "m"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "calor especifico",
          "c"
        ]
      },
      {
        "id": "var_2",
        "synonyms": [
          "variacao de temperatura",
          "delta theta",
          "delta t"
        ]
      }
    ],
    "validFormulas": [
      "Q=mc\\Delta\\theta",
      "Q=m\\cdot c\\cdot\\Delta\\theta",
      "Q=mc\\Delta T"
    ],
    "displayFormula": "Q = m \\cdot c \\cdot \\Delta \\theta"
  },
  {
    "category": "Termodinâmica",
    "title": "Calor Latente",
    "context": "Quando um cubo de gelo está derretendo, ele absorve calor sem mudar sua temperatura. A energia é gasta apenas para quebrar as ligações de estado físico.",
    "varsPrompt": "O calor latente de mudança de fase (Q) depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "massa",
          "m"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "calor latente",
          "l",
          "constante latente"
        ]
      }
    ],
    "validFormulas": [
      "Q=mL",
      "Q=m\\cdot L"
    ],
    "displayFormula": "Q = m \\cdot L"
  },
  {
    "category": "Circuitos",
    "title": "1ª Lei de Ohm",
    "context": "A corrente que passa por um fio depende do quão 'forte' é a tensão aplicada e do quanto o fio 'resiste' à passagem.",
    "varsPrompt": "A Tensão ou DDP (U) depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "resistencia",
          "r"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "corrente",
          "i"
        ]
      }
    ],
    "validFormulas": [
      "U=R\\cdot i",
      "U=Ri",
      "V=Ri"
    ],
    "displayFormula": "U = R \\cdot i"
  },
  {
    "category": "Circuitos",
    "title": "Potência Elétrica",
    "context": "O brilho de uma lâmpada indica o quão rápido ela converte energia elétrica em luz e calor.",
    "varsPrompt": "A Potência (P) dissipada por um equipamento elétrico depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "corrente",
          "i"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "tensao",
          "ddp",
          "u"
        ]
      }
    ],
    "validFormulas": [
      "P=i\\cdot U",
      "P=iU",
      "P=U\\cdot i"
    ],
    "displayFormula": "P = i \\cdot U"
  },
  {
    "category": "Circuitos",
    "title": "Energia Elétrica",
    "context": "A conta de luz é cobrada com base na potência dos seus aparelhos e do tempo que eles ficam ligados.",
    "varsPrompt": "A Energia Elétrica (E) consumida depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "potencia",
          "p"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "tempo",
          "delta t",
          "t"
        ]
      }
    ],
    "validFormulas": [
      "E=P\\cdot\\Delta t",
      "E=P\\Delta t",
      "E=Pt"
    ],
    "displayFormula": "E = P \\cdot \\Delta t"
  },
  {
    "category": "Circuitos",
    "title": "Resistores em Série",
    "context": "Quando você coloca obstáculos (resistores) um após o outro no mesmo caminho, a dificuldade total para a corrente aumenta diretamente.",
    "varsPrompt": "A Resistência Equivalente (Req) de duas resistências R1 e R2 em série depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "resistencia 1",
          "r1"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "resistencia 2",
          "r2"
        ]
      }
    ],
    "validFormulas": [
      "R_{eq}=R_1+R_2",
      "R=R_1+R_2"
    ],
    "displayFormula": "R_{eq} = R_1 + R_2 + ..."
  },
  {
    "category": "Circuitos",
    "title": "Resistores em Paralelo",
    "context": "Ao abrir vários caminhos simultâneos (paralelo) para a corrente, a dificuldade total (resistência equivalente) diminui.",
    "varsPrompt": "A Resistência Equivalente (Req) de duas resistências R1 e R2 em paralelo depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "resistencia 1",
          "r1"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "resistencia 2",
          "r2"
        ]
      }
    ],
    "validFormulas": [
      "\\frac{1}{R_{eq}}=\\frac{1}{R_1}+\\frac{1}{R_2}",
      "1/R_{eq}=1/R_1+1/R_2"
    ],
    "displayFormula": "\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + ..."
  },
  {
    "category": "Ondulatória",
    "title": "Equação Fundamental da Onda",
    "context": "A velocidade de uma onda em um meio depende de quão rápido ela oscila e do tamanho de cada ciclo.",
    "varsPrompt": "A velocidade de propagação (v) de uma onda depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "comprimento de onda",
          "lambda"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "frequencia",
          "f"
        ]
      }
    ],
    "validFormulas": [
      "v=\\lambda\\cdot f",
      "v=\\lambda f"
    ],
    "displayFormula": "v = \\lambda \\cdot f"
  },
  {
    "category": "Energia",
    "title": "Energia Cinética",
    "context": "A energia cinética de um objeto é a energia associada ao seu movimento.",
    "varsPrompt": "A Energia Cinética (Ec) de um corpo depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "massa",
          "m"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "velocidade",
          "v"
        ]
      }
    ],
    "validFormulas": [
      "E_c=\\frac{mv^2}{2}",
      "E_c=\\frac{m\\cdot v^2}{2}"
    ],
    "displayFormula": "E_c = \\frac{m \\cdot v^2}{2}"
  },
  {
    "category": "Energia",
    "title": "Energia Potencial Gravitacional",
    "context": "Ao levantar um peso, você armazena energia nele. Quanto mais alto e mais pesado, mais energia é acumulada.",
    "varsPrompt": "A Energia Potencial Gravitacional (Epg) depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "massa",
          "m"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "gravidade",
          "g"
        ]
      },
      {
        "id": "var_2",
        "synonyms": [
          "altura",
          "h"
        ]
      }
    ],
    "validFormulas": [
      "E_{pg}=mgh",
      "E_{pg}=m\\cdot g\\cdot h"
    ],
    "displayFormula": "E_{pg} = m \\cdot g \\cdot h"
  },
  {
    "category": "Energia",
    "title": "Energia Potencial Elástica",
    "context": "Ao esticar um estilingue ou amassar uma mola, energia é guardada na deformação.",
    "varsPrompt": "A Energia Potencial Elástica (Eel) armazenada em uma mola depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "constante elastica",
          "k"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "deformacao",
          "x"
        ]
      }
    ],
    "validFormulas": [
      "E_{el}=\\frac{kx^2}{2}",
      "E_{el}=\\frac{k\\cdot x^2}{2}"
    ],
    "displayFormula": "E_{el} = \\frac{k \\cdot x^2}{2}"
  },
  {
    "category": "Dinâmica / Forças",
    "title": "Força Peso",
    "context": "A força que a Terra exerce puxando você para o chão é constante e depende da sua constituição e da gravidade local.",
    "varsPrompt": "O Peso (P) de um corpo depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "massa",
          "m"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "gravidade",
          "g",
          "aceleracao da gravidade"
        ]
      }
    ],
    "validFormulas": [
      "P=mg",
      "P=m\\cdot g"
    ],
    "displayFormula": "P = m \\cdot g"
  },
  {
    "category": "Dinâmica / Forças",
    "title": "Força de Atrito",
    "context": "É mais difícil empurrar um móvel pesado no carpete do que no piso liso.",
    "varsPrompt": "A Força de Atrito (Fat) depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "coeficiente de atrito",
          "mi",
          "rugosidade"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "forca normal",
          "normal",
          "n"
        ]
      }
    ],
    "validFormulas": [
      "F_{at}=\\mu\\cdot N",
      "F_{at}=\\mu N",
      "Fat=\\mu N"
    ],
    "displayFormula": "F_{at} = \\mu \\cdot N"
  },
  {
    "category": "Dinâmica / Forças",
    "title": "Lei de Hooke (Força Elástica)",
    "context": "Quanto mais você tenta esticar uma mola resistente, mais força ela faz puxando de volta.",
    "varsPrompt": "A Força Elástica (Fel) feita pela mola depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "constante elastica",
          "k"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "deformacao",
          "x"
        ]
      }
    ],
    "validFormulas": [
      "F_{el}=kx",
      "F_{el}=k\\cdot x"
    ],
    "displayFormula": "F_{el} = k \\cdot x"
  },
  {
    "category": "Dinâmica / Forças",
    "title": "2ª Lei de Newton",
    "context": "Para fazer um corpo acelerar, você precisa aplicar uma força resultante. Quanto mais massivo, mais força é necessária.",
    "varsPrompt": "A Força Resultante (Fr) sobre um corpo depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "massa",
          "m"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "aceleracao",
          "a"
        ]
      }
    ],
    "validFormulas": [
      "F_r=ma",
      "F_r=m\\cdot a",
      "F=ma"
    ],
    "displayFormula": "F_r = m \\cdot a"
  },
  {
    "category": "Movimento Circular",
    "title": "Velocidade Linear no MCU",
    "context": "Imagine um disco girando. A velocidade linear de um ponto descreve o quão rápido ele percorre a circunferência da curva.",
    "varsPrompt": "A velocidade escalar ou linear (v) em um MCU depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "velocidade angular",
          "omega",
          "w"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "raio",
          "r"
        ]
      }
    ],
    "validFormulas": [
      "v=\\omega R",
      "v=\\omega\\cdot R"
    ],
    "displayFormula": "v = \\omega \\cdot R"
  },
  {
    "category": "Movimento Circular",
    "title": "Velocidade Angular e Período",
    "context": "Imagine um disco girando. A velocidade angular de um ponto descreve o quão rápido ele gira.",
    "varsPrompt": "A velocidade angular (ω) depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "periodo",
          "t",
          "tempo"
        ]
      }
    ],
    "validFormulas": [
      "\\omega=\\frac{2\\pi}{T}",
      "w=\\frac{2\\pi}{T}"
    ],
    "displayFormula": "\\omega = \\frac{2 \\cdot \\pi}{T}"
  },
  {
    "category": "Movimento Circular",
    "title": "Frequência e Período",
    "context": "Imagine um disco girando. A frequência de um ponto descreve o número de voltas que ele dá em um segundo.",
    "varsPrompt": "A frequência (f) de um movimento cíclico se relaciona com qual outra grandeza?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "periodo",
          "t"
        ]
      }
    ],
    "validFormulas": [
      "f=\\frac{1}{T}",
      "f=1/T"
    ],
    "displayFormula": "f = \\frac{1}{T}"
  },
  {
    "category": "Movimento Circular",
    "title": "Aceleração Centrípeta",
    "context": "Imagine que você está dentro de um carro fazendo uma curva. A aceleração centrípeta descreve a força que te empurra para o lado de dentro da curva.",
    "varsPrompt": "A Aceleração Centrípeta (ac) depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "velocidade",
          "v"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "raio",
          "r"
        ]
      }
    ],
    "validFormulas": [
      "a_c=\\frac{v^2}{R}",
      "ac=\\frac{v^2}{R}"
    ],
    "displayFormula": "a_c = \\frac{v^2}{R}"
  },
  {
    "category": "Eletrostática",
    "title": "Lei de Coulomb",
    "context": "Cargas iguais se repelem, cargas opostas se atraem. A força elétrica descreve a intensidade com que as cargas interagem.",
    "varsPrompt": "A Força Elétrica (Fel) entre duas partículas depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "carga 1",
          "q1"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "carga 2",
          "q2"
        ]
      },
      {
        "id": "var_2",
        "synonyms": [
          "distancia",
          "d"
        ]
      },
      {
        "id": "var_3",
        "synonyms": [
          "constante eletrostatica",
          "constante eletrostatica do meio",
          "k"
        ]
      }
    ],
    "validFormulas": [
      "F_{el}=\\frac{k\\cdot q_1\\cdot q_2}{d^2}",
      "F_{el}=\\frac{k\\cdot q1\\cdot q2}{d^2}",
      "F_{el}=k\\cdot\\frac{q1\\cdot q2}{d^2}",
      "F_{el}=k\\cdot\\frac{q_1\\cdot q_2}{d^2}",
      "F=\\frac{kq_1q_2}{d^2}",
      "F=k\\frac{q_1q_2}{d^2}"
    ],
    "displayFormula": "F_{el} = \\frac{k \\cdot q_1 \\cdot q_2}{d^2}"
  },
  {
    "category": "Eletrostática",
    "title": "Potencial Elétrico",
    "context": "Ao redor de uma carga, existe um 'relevo' elétrico. O nível desse relevo (potencial) diminui conforme você se afasta da carga central.",
    "varsPrompt": "O Potencial Elétrico (V) gerado por uma partícula depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "carga geradora",
          "carga",
          "carga eletrica",
          "q"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "distancia",
          "d"
        ]
      },
      {
        "id": "var_3",
        "synonyms": [
          "constante eletrostatica",
          "constante eletrostatica do meio",
          "k"
        ]
      }
    ],
    "validFormulas": [
      "V=\\frac{kq}{d}",
      "V=k\\frac{q}{d}",
      "V=\\frac{k\\cdot q}{d}",
      "V=k\\cdot\\frac{q}{d}",
      "V=\\frac{q\\cdot k}{d}"
    ],
    "displayFormula": "V = \\frac{k \\cdot q}{d}"
  },
  {
  "category": "Eletrostática",

  "title": "Energia Potencial Elétrica",

  "context": "Imagine uma região entre duas placas onde existe um campo elétrico uniforme. Ao se deslocar de um ponto para outro nessa região, uma carga pode perceber uma diferença de potencial entre esses pontos.",

  "varsPrompt": "A diferença de potencial elétrico (U) em um campo elétrico uniforme depende de quais grandezas?",

  "vars": [

    {
      "id": "var_0",

      "synonyms": [
        "campo eletrico",
        "intensidade do campo eletrico",
        "campo",
        "E"
      ]
    },

    {
      "id": "var_1",

      "synonyms": [
        "distancia",
        "distancia entre os pontos",
        "d"
      ]
    }

  ],

  "validFormulas": [

    "U=Ed",
    "U=E\\cdot d",
    "U=dE",
    "U=d\\cdot E"

  ],

  "displayFormula": "U = E \\cdot d"
},
{
  "category": "Eletrostática",

  "title": "Força Elétrica",

  "context": "Imagine uma pequena carga elétrica colocada em uma região onde existe um campo elétrico. Nessa situação, a presença do campo pode fazer com que a carga sofra uma força.",

  "varsPrompt": "A Força Elétrica (F) que atua sobre uma carga em um campo elétrico depende de quais grandezas?",

  "vars": [

    {
      "id": "var_0",

      "synonyms": [
        "carga",
        "carga eletrica",
        "q"
      ]
    },

    {
      "id": "var_1",

      "synonyms": [
        "campo eletrico",
        "intensidade do campo eletrico",
        "campo",
        "E"
      ]
    }

  ],

  "validFormulas": [

    "F=qE",
    "F=q\\cdot E",
    "F=Eq",
    "F=E\\cdot q"

  ],

  "displayFormula": "F = q \\cdot E"
},
  {
    "category": "Eletromagnetismo",
    "title": "Força Magnética",
    "context": "Uma carga pontual se movendo cortando um campo magnético sofre um desvio em sua rota devido à ação da força magnética sobre ela.",
    "varsPrompt": "A Força Magnética (Fmag) máxima sobre uma carga depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "carga",
          "q",
          "carga eletrica"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "velocidade",
          "v"
        ]
      },
      {
        "id": "var_2",
        "synonyms": [
          "campo magnetico",
          "b"
        ]
      }
    ],
    "validFormulas": [
      "F_{mag}=qvB",
      "F_{mag}=q\\cdot v\\cdot B"
    ],
    "displayFormula": "F_{mag} = q \\cdot v \\cdot B"
  },
  {
    "category": "Eletromagnetismo",
    "title": "Raio da Trajetória no Campo Magnético",
    "context": "Quando uma carga pontual se move em um campo magnético uniforme, ela descreve uma trajetória circular.",
    "varsPrompt": "O Raio (R) da trajetória circular de uma carga em um campo magnético uniforme depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "massa",
          "m"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "velocidade",
          "v"
        ]
      },
      {
        "id": "var_2",
        "synonyms": [
          "carga",
          "q"
        ]
      },
      {
        "id": "var_3",
        "synonyms": [
          "campo magnetico",
          "b"
        ]
      }
    ],
    "validFormulas": [
      "R=\\frac{mv}{qB}",
      "R=\\frac{m\\cdot v}{q\\cdot B}"
    ],
    "displayFormula": "R = \\frac{m \\cdot v}{q \\cdot B}"
  },
  {
    "category": "Eletromagnetismo",
    "title": "Fluxo Magnético",
    "context": "Imagine as linhas do campo magnético como chuva caindo através de uma janela. O quanto de 'chuva' passa pela janela é o equivalente ao fluxo magnético em uma superfície.",
    "varsPrompt": "O Fluxo Magnético (Φ) através de uma superfície plana depende de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "campo magnetico",
          "b"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "area",
          "a"
        ]
      },
      {
        "id": "var_2",
        "synonyms": [
          "angulo",
          "alfa",
          "cos alfa",
          "cos"
        ]
      }
    ],
    "validFormulas": [
      "\\phi=B\\cdot A\\cdot\\cos\\alpha",
      "\\phi=BA\\cos\\alpha",
      "\\Phi=BA\\cos\\alpha"
    ],
    "displayFormula": "\\phi = B \\cdot A \\cdot \\cos\\alpha"
  },
  {
    "category": "Eletromagnetismo",
    "title": "Lei de Faraday-Lenz",
    "context": "O princípio por trás dos geradores de energia. Variar a quantidade de 'linhas de campo' que atravessam uma bobina ao longo do tempo cria uma tensão induzida.",
    "varsPrompt": "A Força Eletromotriz Induzida (ε) depende da variação de quais grandezas?",
    "vars": [
      {
        "id": "var_0",
        "synonyms": [
          "fluxo magnetico",
          "variacao do fluxo",
          "delta phi",
          "phi"
        ]
      },
      {
        "id": "var_1",
        "synonyms": [
          "tempo",
          "variacao de tempo",
          "delta t",
          "t"
        ]
      }
    ],
    "validFormulas": [
      "\\varepsilon=-\\frac{\\Delta\\phi}{\\Delta t}",
      "E=-\\frac{\\Delta\\Phi}{\\Delta t}",
      "\\varepsilon=-\\Delta\\phi/\\Delta t"
    ],
    "displayFormula": "\\varepsilon = -\\frac{\\Delta \\phi}{\\Delta t}"
  }
]
;
