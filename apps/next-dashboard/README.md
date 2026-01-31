## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Development

### Format (Prettier)

- Format all files:

```bash
pnpm format
```

- Check formatting (CI / before commit):

```bash
pnpm format:check
```

### Format on save (Cursor / VSCode)

This project includes workspace settings in `.vscode/settings.json` to run Prettier on save.

Make sure you have the Prettier extension installed: `esbenp.prettier-vscode`.

### pre-commit formatting check

This project uses `simple-git-hooks` + `lint-staged` to block commits when staged files are not formatted.

Note: Git hooks are not committed. After cloning on a new machine, run once:

```bash
pnpm hooks:install
```
