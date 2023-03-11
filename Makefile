.PHONY: build-clean build-prod

build-clean:
	mv docs/CNAME .
	mv docs/_config.yml .
	rm -rf docs/
	mkdir docs
	mv CNAME docs/.
	mv _config.yml docs/.

build-prod: build-clean
	bun run build
	cp -r build/* docs/.
