create table posts
(
    id         serial primary key,
    user_id    int         not null,
    text       text,
    created_at timestamptz not null default CURRENT_TIMESTAMP,

    constraint fk_user
        foreign key (user_id)
            references users (id)
            on delete cascade
);


create table photos_posts
(
    id       serial primary key,
    photo_id int not null,
    post_id  int not null,

    constraint fk_photo
        foreign key (photo_id)
            references photos (id)
            on delete cascade,

    constraint fk_post
        foreign key (post_id)
            references posts (id)
            on delete cascade,

    constraint photos_posts_uniq
        unique (post_id, photo_id)
);

create table reposts
(
    id         serial primary key,
    post_id    int         not null,
    user_id    int         not null,
    created_at timestamptz not null default CURRENT_TIMESTAMP,

    constraint fk_user
        foreign key (user_id)
            references users (id)
            on delete cascade,
    constraint fk_post
        foreign key (post_id)
            references posts (id)
            on delete cascade,
    constraint reports_user_post_uniq
        unique (post_id, user_id)
);

create table likes
(
    id         serial primary key,
    post_id    int         not null,
    user_id    int         not null,
    created_at timestamptz not null default CURRENT_TIMESTAMP,

    constraint fk_user
        foreign key (user_id)
            references users (id)
            on delete cascade,
    constraint fk_post
        foreign key (post_id)
            references posts (id)
            on delete cascade,
    constraint likes_user_post_uniq
        unique (post_id, user_id)
);

create table comments
(
    id         serial primary key,
    post_id    int         not null,
    user_id    int         not null,
    created_at timestamptz not null default CURRENT_TIMESTAMP,
    text       text,

    constraint fk_user
        foreign key (user_id)
            references users (id)
            on delete cascade,
    constraint fk_post
        foreign key (post_id)
            references posts (id)
            on delete cascade
);

insert into posts (user_id, text)
values (1, 'test post'),
       (1,
        'test post with long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long text'),
       (1, 'Normal post with normal text'),
       (1, 'test post с русскими символами'),
       (1, null),
       (2, null),
       (2, 'la la la');

insert into photos (user_id, url)
values (1,
        'https://steamuserimages-a.akamaihd.net/ugc/2490011247818999778/1CCE64CE00CD9C8B72A6427F7335B2F32C27C598/?imw=512&amp;imh=325&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'),
       (1, 'https://steamuserimages-a.akamaihd.net/ugc/1996818260950447857/4C194C0A002E261D2688AFC85AC44E810AB6D646/'),
       (2,
        'https://steamuserimages-a.akamaihd.net/ugc/871873319165489629/ED20769CF8B759CD280472840FFA0AE224247DF8/?imw=512&amp;imh=426&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true');

insert into photos_posts (photo_id, post_id)
values (1, 1),
       (2, 2),
       (3, 6);
