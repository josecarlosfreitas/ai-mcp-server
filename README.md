# AI MCP Server

A Model Context Protocol (MCP) server built with **TypeScript and Node.js** that exposes tools for mathematical calculations and order management.

The project demonstrates how AI clients can discover and execute application tools through the MCP standard.

## Features

- **MCP integration:** Implements the Model Context Protocol using the official TypeScript SDK.
- **Tool discovery:** Allows clients to discover available tools.
- **Mathematical operations:** Adds two numbers through the `somar` tool.
- **Order management:** Retrieves orders using the `consultar_pedidos` tool.
- **Status filtering:** Filters orders by `pending`, `processing`, or `completed`.
- **Input validation:** Uses Zod to validate tool arguments.
- **Automated testing:** Includes an MCP client for testing tool execution.

## Tech Stack

- Node.js
- TypeScript
- Model Context Protocol SDK
- Zod
- tsx

## Project Structure

```text
ai-mcp-server/
├── src/
│   ├── index.ts
│   ├── orders.ts
│   └── test.ts
├── package.json
├── package-lock.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/josecarlosfreitas/ai-mcp-server.git
cd ai-mcp-server
npm install
```

### Build the Project

```bash
npm run build
```

### Run the Test Client

```bash
npx tsx src/test.ts
```

The test client starts the MCP server, discovers its tools, and executes a sample order query.

## Available Tools

### `somar`

Adds two numbers.

Example input:

```json
{
  "a": 10,
  "b": 20
}
```

### `consultar_pedidos`

Retrieves orders, optionally filtered by status.

Example input:

```json
{
  "status": "pending"
}
```

Supported statuses:

- `pending`
- `processing`
- `completed`

The project currently uses in-memory sample data for demonstration purposes.

## Key Concepts Demonstrated

- Model Context Protocol (MCP)
- Tool registration and discovery
- Client-server communication over STDIO
- TypeScript and type-safe development
- Input validation with Zod
- Automated integration testing

## Future Improvements

- Integrate a persistent database.
- Add more business-oriented tools.
- Connect the server to an AI client.
- Add automated tests and continuous integration.

## License

This project is intended for educational and portfolio purposes. Add a license file if you intend to distribute it under specific terms.
