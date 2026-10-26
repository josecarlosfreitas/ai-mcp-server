
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { consultarPedidos, PedidoStatus } from "./orders.js";

const server = new McpServer({
  name: "ai-mcp-server",
  version: "1.0.0",
});

server.registerTool(
  "somar",
  {
    title: "Somar números",
    description: "Soma dois números e retorna o resultado.",
    inputSchema: {
      a: z.number().describe("Primeiro número"),
      b: z.number().describe("Segundo número"),
    },
  },
  async ({ a, b }) => ({
    content: [
      {
        type: "text",
        text: `Resultado: ${a + b}`,
      },
    ],
  }),
);


server.registerTool(
  "consultar_pedidos",
  {
    title: "Consultar pedidos",
    description:
      "Consulta pedidos. Pode filtrar pelo status: pending, processing ou completed.",
    inputSchema: {
      status: z
        .enum(["pending", "processing", "completed"])
        .optional()
        .describe("Status dos pedidos a consultar"),
    },
  },
  async ({ status }) => {
    const pedidos = consultarPedidos(status as PedidoStatus | undefined);

    return {
      content: [
        {
          type: "text",
          text:
            pedidos.length > 0
                ? JSON.stringify(pedidos, null, 2)
                : "Nenhum pedido encontrado para o status informado.",
        },
      ],
    };
  },
);


const transport = new StdioServerTransport();

await server.connect(transport);
