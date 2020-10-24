.PHONY: build
build:
	npm run build
	rm -rf docs/
	mkdir docs/
	cp -r build/* docs/.
