
export type PedidoStatus = "pending" | "processing" | "completed";

export interface Pedido {
  id: number;
  cliente: string;
  produto: string;
  status: PedidoStatus;
  valor: number;
}

const pedidos: Pedido[] = [
  {
    id: 101,
    cliente: "João Santos",
    produto: "Monitor",
    status: "pending",
    valor: 1200,
  },
  {
    id: 102,
    cliente: "Ana Costa",
    produto: "Teclado",
    status: "processing",
    valor: 250,
  },
  {
    id: 103,
    cliente: "Carlos Lima",
    produto: "Headset",
    status: "pending",
    valor: 350,
  },
  {
    id: 104,
    cliente: "Mariana Alves",
    produto: "Mouse",
    status: "completed",
    valor: 150,
  },
];

export function consultarPedidos(status?: PedidoStatus): Pedido[] {
  if (!status) {
    return pedidos;
  }

  return pedidos.filter((pedido) => pedido.status === status);
}
