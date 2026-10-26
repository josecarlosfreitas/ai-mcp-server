
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const transport = new StdioClientTransport({
  command: "node",
  args: ["dist/index.js"],
});

const client = new Client({
  name: "ai-mcp-server-test",
  version: "1.0.0",
});

try {
  await client.connect(transport);

  const tools = await client.listTools();
  console.log(
    "Ferramentas disponíveis:",
    tools.tools.map((tool) => tool.name),
  );

  const result = await client.callTool({
    name: "consultar_pedidos",
    arguments: { status: "pending" },
  });

  console.log("Pedidos pendentes:", result.content);
} finally {
  await client.close();
}
