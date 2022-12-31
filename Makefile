generate:
	# Generate Go clients
	protoc --twirp_out=. --go_out=. rpc/turnip/service.proto

	# Generate Typescript clients
	npx protoc --ts_out ts --proto_path=. --ts_opt generate_dependencies rpc/turnip/service.proto
	npm run build
