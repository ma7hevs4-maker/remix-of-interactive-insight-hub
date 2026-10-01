import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Resumo Diário · Scanner 4.0 · RJ" },
      { name: "description", content: "Dashboard interativo de KPIs operacionais — carregue sua base XLSX." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/dashboard.html"
      title="Resumo Diário Scanner 4.0"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
        margin: 0,
        padding: 0,
      }}
    />
  );
}
