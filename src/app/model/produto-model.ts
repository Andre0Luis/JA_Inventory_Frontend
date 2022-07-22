export interface IProduto {
    id?: string;
    nome?: string;
    quantidade?: number;
    valor?: number;
    cod_barras?: string;
  }
  
  export class ProdutoModel implements IProduto {
    constructor(
      public id?: string,
      public nome?: string,
      public quantidade?: number,
      public valor?: number,
      public cod_barras?: string,
    ) { }
  }
  