export interface Anuncio {
  id: number;
  titulo: string;
  descricao: string;
  preco: number;
  dataValidade: string;
  imagem: string;
  status: 'ativo' | 'desativo';
}
