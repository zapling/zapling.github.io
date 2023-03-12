.PHONY: production-build

production-build:
	rm -r docs/
	mkdir docs
	cp github_pages/* docs/.
	bun run build
	cp -r build/* docs/.
