# Tools

## See
[tools](https://tools.stu345.com/)

## Run
- `docker compose build`
- `docker compose run web rails db:create`
- `docker compose run web rails db:migrate RAILS_ENV=development`
- `docker compose up`
- `open http://localhost:3000`

### In Production
- `docker compose -f docker-compose.production.yml build`
- copy config/master.key (this file is ignored from git)
    - or you can recreate credentials.yml.enc and master.key:
        - `rm config/credentials.yml.enc`
        - `docker compose -f docker-compose.production.yml run -e EDITOR=vim web rails credentials:edit`
            - you need to set `Rails.application.credentials` variables
- `docker compose -f docker-compose.production.yml up -d`
- `docker compose -f docker-compose.production.yml run web rails db:create RAILS_ENV=production DISABLE_DATABASE_ENVIRONMENT_CHECK=1`
- `docker compose -f docker-compose.production.yml run web rails db:migrate RAILS_ENV=production`
