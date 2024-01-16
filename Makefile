create: ##Create env
	docker compose up -d --build
	composer install
	php bin/console ibexa:install
	php bin/console ibexa:graphql:generate-schema
	composer run post-install-cmd

start: ## Start env
	php -S 127.0.0.1:8000 -t public

symfony-start: ##Start env with Symfony cli
	symfony serve
