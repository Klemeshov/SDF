create table users
(
    id            serial primary key,
    email         varchar(255) not null unique,
    first_name    varchar(255) not null,
    second_name   varchar(255),
    password_hash text         not null,
    created_at    timestamptz  not null default current_timestamp,
    avatar_url    int
);

create table photos
(
    id        serial primary key,
    url       varchar(255) not null,
    user_id    int          not null,
    crated_at timestamptz  not null default current_timestamp,

    constraint fk_user
        foreign key (user_id)
            references users (id)
            on delete cascade
);

alter table users
    add
        constraint fk_photos
            foreign key (avatar)
                references photos (id)
                on delete set null;


insert into users (email, first_name, second_name, password_hash)
values ('test@test.test', 'Test', 'Test', 'test'),
       ('a@a.a', 'Mr. A', '', 'a'),
       ('zxc@zxc.zxc', 'ZXC', 'Ghoul', 'zxc');
