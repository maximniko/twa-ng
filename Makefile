up:
	docker compose -f ./docker-compose.yml up -d
down:
	docker compose -f ./docker-compose.yml down --remove-orphans
frontend-ng-init:
	docker compose -f ./docker-compose.yml run --rm node ng n frontend --directory ./
