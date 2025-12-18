# 🚀 Como fazer deploy no Cloudflare Pages

## Estrutura de arquivos correta:
```
hysbel-premium-proposal/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── .gitignore
└── src/
    ├── main.tsx
    └── App.tsx
```

## Passo a Passo:

### 1. Substitua os arquivos no seu repositório GitHub
- Delete todos os arquivos antigos
- Faça upload dos novos arquivos com a estrutura acima

### 2. Configure o Cloudflare Pages
No painel do Cloudflare Pages, configure:

| Campo | Valor |
|-------|-------|
| **Framework preset** | Vite |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Node.js version** | 18 (ou superior) |

### 3. Variáveis de ambiente (opcional)
Não precisa de nenhuma variável de ambiente para este projeto.

### 4. Faça o deploy
- Commit as mudanças no GitHub
- O Cloudflare Pages vai detectar automaticamente e fazer o build

---

## Problemas comuns:

### "Hello World" aparecendo
Isso acontece quando:
- O build não foi executado
- O output directory está errado
- Os arquivos não estão na estrutura correta

### Build falha
Verifique se:
- O `package.json` tem as dependências corretas
- O `vite.config.ts` está configurado
- Os arquivos estão em `/src/`

---

## Testando localmente:
```bash
npm install
npm run dev
```

O site vai rodar em `http://localhost:5173`
