up:
	docker compose -f ./docker-compose.yml up -d
down:
	docker compose -f ./docker-compose.yml down --remove-orphans
frontend-ng-init:
	docker compose -f ./docker-compose.yml run --rm node ng n frontend --directory ./
build-to-pages:
	docker compose -f ./docker-compose.yml exec node ng build --configuration production --base-href https://maximniko.github.io/twa-ng/
	rm -fdr ./docs/*
	cp ./frontend/dist/frontend/browser/* docs
