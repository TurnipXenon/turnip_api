# Onboarding

## Setup

- [ ] https://twitchtv.github.io/twirp/docs/install.html
- [ ] https://www.geeksforgeeks.org/how-to-install-protocol-buffers-on-windows/
- [ ] https://github.com/golang/go/wiki/PackagePublishing

**make generate**

protoc --twirp_out=. --go_out=. rpc/turnip/service.proto

npx protoc --ts_out ts --proto_path=. --ts_opt generate_dependencies rpc/turnip/service.proto

go get -u github.com/TurnipXenon/turnip_api/rpc/turnip@latest
go get -u github.com/TurnipXenon/turnip_api/rpc/turnip@66742860fbf07fd14b927c88fab7a7083b6ffe75 <- more specific or stable

go run github.com/TurnipXenon/turnip_api/dev/sync_mkdocs_readme
go install github.com/TurnipXenon/turnip_api/dev/sync_mkdocs_readme@latest

dont forget to generate the clients when making changes! lol

## MKDocs

You don't really need to run through this to make edits to MKDocs, but if you want to see the layout and what it looks
like served, check this guide.

This assumes that you have **Python** installed locally.

### MKDocs: Setup

```shell
pip install mkdocs
```

### MKDocs: Commands

When entering these commands, go to `/docs` instead of being in the project's root folder `/`.

* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

### MKDocs: Ideal workflow

1. Make changes
2. See changes made using `mkdocs serve`
3. If you edited index.md, run `go run dev/sync_mkdocs_readme.go` from the root folder `/`.
