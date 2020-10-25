.PHONY: build
build-prod:
	npm run build
	mkdir tmp
	mv docs/CNAME tmp/.
	mv docs/_config.yml tmp/.
	rm -rf docs/
	mkdir docs/
	cp -r build/* docs/.
	mv tmp/CNAME docs/.
	mv tmp/_config.yml docs/.
	rm -r tmp
