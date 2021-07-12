.PHONY: setup dev build-prod
setup:
	npm install

dev:
	npm start

build-clean:
	mv docs/CNAME .
	mv docs/_config.yml .
	rm -rf docs/
	mkdir docs
	mv CNAME docs/.
	mv _config.yml docs/.

build-prod: build-clean
	npm run build
	cp -r build/* docs/.
