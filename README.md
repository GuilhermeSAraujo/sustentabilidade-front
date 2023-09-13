## Configurando o ambiente
- VSCode - padrão;
- Git - [Download](https://github.com/git-for-windows/git/releases/download/v2.42.0.windows.1/Git-2.42.0-64-bit.exe);
- Node - [Download](https://nodejs.org/dist/v18.17.1/node-v18.17.1-x64.msi);
- PNPM gerenciador de pacotes:
	- No **powershell**, executar o seguinte comando: `iwr https://get.pnpm.io/install.ps1 -useb | iex`.

## Configurando o git
Abra o **cmd** e execute os seguintes comandos:
- `git config --global user.name "Nome Sobrenome"`
- `git config --global user.email "seu_email@email.com"`


## Clonando o projeto
- Abrir o **cmd** e executar os seguintes comandos:
	- `cd Documents` ou `cd Documentos`;
	- `git clone https://github.com/GuilhermeSAraujo/sustentabilidade-front.git`

## Executando o projeto

Agora, através do terminal do VSCode (atalho *ctrl + '*) executar os seguintes comandos:
- `pnpm install`;
- `pnpm dev`.

O terminal deve informar em qual endereço o servidor local está rodando.

## Contribuindo
Para começar a contribuir com o projeto é necessário criar uma branch.
Criando a branch:
No terminal do VSCode execute os seguintes comandos:
- `git checkout main` - para fazer checkout na branch principal do projeto;
- `git pull` - para trazer as alterações mais recentes dela;
- `git checkout -b "nome_da_branch"` - para criar uma nova branch a partir da main.

*Sugiro criar a branch com o nome da feature/tela que será desenvolvida.

### Deploy
https://dev.to/shashannkbawa/deploying-vite-app-to-github-pages-3ane

:)
