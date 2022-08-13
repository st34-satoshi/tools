# mini games

## Run
- `docker-compose build`
- `docker-compose run web yarn install`
- `docker-compose run web rails db:create`
- `docker-compose run web rails db:migrate RAILS_ENV=development`
- `docker-compose up`
- `open http://localhost:3000`

### In Production
- copy config/master.key (this file is ignored from git)
    - or you can recreate credentials.yml.enc and master.key:
        - `rm credentials.yml.enc`
        - `docker-compose run -e EDITOR=vim web rails credentials:edit`
            - you need to set `Rails.application.credentials` variables
- `docker-compose -f docker-compose.production.yml build`
- `docker-compose -f docker-compose.production.yml run web yarn install --production`
- `docker-compose -f docker-compose.production.yml run web rails db:migrate:reset RAILS_ENV=production DISABLE_DATABASE_ENVIRONMENT_CHECK=1`
- `docker-compose -f docker-compose.production.yml up -d`