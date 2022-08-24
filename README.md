## API Reference

#### Get all items

    API Erişim Adresi: https://whthpnd-backend-api.herokuapp.com/api

### POSTS

| Parameter | Url                   | Description                                                                                                                          |
| :-------- | :-------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| `GET`     | `/posts`              | Veritabanındaki tüm içerikleri dizi olarak döndürür                                                                                  |
| `GET`     | `/posts/:id`          | Verilen `id` değeriyle eşleşen objeyi döndürür.                                                                                      |
| `POST`    | `/posts/create`       | `title`,`content`,`categoryId` alanları zorunludur.                                                                                  |
| `POST`    | `/api/posts/:id/edit` | Verilen `id`'ye ait içeriği günceller. `title`,`content` alanları zorunludur.                                                        |
| `DELETE`  | `/api/posts/:id`      | Verilen `id`'ye ait içeriği siler. İçerik giriş yapmış kullanıcıya ait değilse hata mesajı döndürür.                                 |
| `GET`     | `/api/posts/:id/like` | Verilen `id`'ye ait içeriği, eğer beğenmediyseniz beğenmezinizi, beğendiyseniz geri almanızı sağlar. Giriş yapmış olmanız önemlidir. |
| `GET`     | `/posts/:id/comments` | Verilen `id` değeriyle eşleşen içeriğin yorumlarını döndürür.                                                                        |
| `POST`    | `/posts/:id/comments` | Verilen `id` değeriyle eşleşen içeriğe yorum eklemenizi sağlar. Giriş yapmış olmanız önemlidir. `content` anahtarı zorunludur        |
