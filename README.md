# TypeScript for Beginners

## Install Software

```bash
npm install -g typescript
npm install -g lite-server
```

**Hinweise:** 
In modernen Projekte wird wird TypeScript nicht mehr global, sondern immer nur auf Projekt-Ebene installiert. Der Grund ist, dass man so mehrere Projekte auf einem System mit unterschiedlichen TypeScript-Versionen nutzen kann, ohne jedes Mal TypeScript Up- oder Downzugraden. Der Befehl dazu lautet dann `npm install --save-dev typescript`.

Wenn für das Projekt die Live-Server-Erweiterung im VS Code oder eine lokale Webserver-Installation wie z.B. `Laragon` benutzt wird, um das Projekt im Browser anzuzeigen, muss der Lite-Server **nicht** installiert werde.

Die minimale Installationsanweisung ist dann einfach nur

```bash
npm install --save-dev typescript
```

## TypeScript VSCode

Documentation: https://code.visualstudio.com/docs/typescript/typescript-compiling

## Folders Setup

- index.html
- script.ts
- package.json
- tsconfig.json

```bash
npm init
npm install
tsc -init
```

## `tsconfig` anpassen

Für den Kurs die minimalen Einstellungen für die `tsconfig.json` übernehmen:

```json
{
  "compilerOptions": {
    "module": "es2020",
    "target": "es2020",
    "strict": true,
    "moduleDetection": "force",
  },
  "include": [
    "**/*.ts"
  ],
  "exclude": [
    ".vscode",
    "node_modules"
  ]
}
```
Die Einstellung `"moduleDetection": "force"` unter `"compilerOptions"` sorgt dafür, dass nicht das ganze Projekt als ein Namensraum gesehen wird, sondern jedes Verzeichnis seinen eigenen Namensraum behält.

## Remote-Repo übernehmen und dessen Stand ziehen

Wenn das Remote bereits Inhalte hat (README, CI, etc.):

```bash
git remote add origin git@github.com:USER/REPO.git
git fetch origin
git merge origin/main --allow-unrelated-histories
```

Danach:

```bash
git push -u origin main

```

## Remote-Repo wechseln

```bash
git remote -v
git remote set-url origin git@github.com:NEU/REPO.git

```
Prüfen:

```bash
git remote -v
```

Falls das alte Repo komplett raus soll:

```bash
git remote remove origin
git remote add origin git@github.com:NEU/REPO.git

```

Danach puschen:

```bash
git push -u origin main
```
