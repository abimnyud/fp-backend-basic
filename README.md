# README
Halo teman-teman Android! Ini merupakan final project untuk kelas Back-end Basic Study Club KSM Android UPNVJ. Mohon diikuti langkah-langkah dan ketentuannya agar lulus dalam kelas Study Club ini.

</br>

> ## <span style="color:red"> ⚠️ Deadline: Senin, 19 Desember 2022 </span>
## Tahapan
1. Baca detail tugas di bawah
2. Clone atau download repository ini untuk base structure project-nya
3. Buka project menggunakan IDE pilihan kalian, kemudian jalankan _command_ `npm install` di terminal
4. Package utama yang diperlukan dan npm script utama sudah ada, jadi kalian tinggal membuat logic API nya
5. Selamat Ngoding! ✨
## Detail Tugas
#### 1. API dapat menyimpan catatan
> API yang dibuat harus dapat **menyimpan** catatan melalui route:
> - Method : POST
> - URL : /notes
> - Body Request:
> ```
> {
>   id: integer,
>   title: string,
>   body: string,
>   createdAt: string,
>   updatedAt: string
> }
> ```
> Bila catatan **berhasil ditambahkan**, server harus mengembalikan response dengan ketentuan sebagai berikut:
> - Status Code : 201
> - Response Body:
> ```
> {
>   "status": "success",
>   "message": "catatan berhasil ditambahkan",
>   "data": {
>       "id": 1
>   }
> }
> ```



#### 2. API dapat menampilkan seluruh catatan
> API yang dibuat harus dapat **menampilkann** seluruh catatan melalui route:
> - Method : GET
> - URL : /notes
> 
> Server harus mengembalikan respons dengan::
> - Status Code : 200
> - Response Body:
> ```
> {
>   "status": "success",
>   "data": [
>       {
>           "id": 1,
>           "title": "Tugas",
>           "body": "Tugas Algoritma Pemrograman 1",
>           "createdAt": "2022-11-30T11:25:01.134Z",
>           "updatedAt": "2022-11-30T11:25:01.134Z"
>       },
>       {
>           "id": 2,
>           "title": "Catetan",
>           "body": "Halo ini catetan saya hari ini",
>           "createdAt": "2022-11-30T11:25:01.134Z",
>           "updatedAt": "2022-11-30T11:25:01.134Z"
>       },
>   ]
> }
> ```

#### 3. API dapat menampilkan detail catatan
> API yang dibuat harus dapat menampilkan detail catatan melalui route:
> - Method : GET
> - URL : /notes/{id}
> 
> Bila catatan dengan id yang dilampirkan oleh client **tidak ditemukan**, maka server harus mengembalikan respons dengan:
> - Status Code : 404
> - Response Body:
> ```
> {
>   "status": "fail",
>   "message": "Catatan tidak ditemukan",
> }
> ```
> Bila catatan dengan id yang dilampirkan oleh client **ditemukan**, maka server harus mengembalikan respons dengan:
> - Status Code : 200
> - Response Body:
> ```
> {
>   "status": "success",
>   "data": {
>       "id": 1,
>       "title": "Tugas",
>       "body": "Tugas Algoritma Pemrograman 1",
>       "createdAt": "2022-11-30T11:25:01.134Z",
>       "updatedAt": "2022-11-30T11:25:01.134Z"
>   }
> }
> ```

#### 4. API dapat mengubah catatan
> API yang dibuat harus dapat mengubah catatan melalui route:
> - Method : PUT
> - URL : /notes/{id}
> - Body Request: 
> ```
> {
>   title: string,
>   body: string,
>   createdAt: string,
>   updatedAt: string
> }
> ```
> Bila catatan **berhasil diperbarui**, server harus mengembalikan respons dengan:
> - Status Code : 200
> - Response Body:
> ```
> {
>   "status": "success",
>   "message": "Catatan berhasil diperbarui",
> }
> ```
#### 5. API dapat menghapus catatan
> API yang dibuat harus dapat menyimpan catatan melalui route:
> - Method : DELETE
> - URL : /notes/{id}
> Bila catatan **berhasil dihapus**, server harus mengembalikan respons dengan:
> - Status Code : 200
> - Response Body:
> ```
> {
>   "status": "success",
>   "message": "Catatan berhasil dihapus",
> }
> ```

___
## Contoh 📝
Ini menggunakan framework yang berbeda (hapi), namun dapat dijadikan gambaran yaa

https://github.com/abimnyud/notes-app-backend

---
## Cara Ngumpulin
1. Kalau mau kumpulin lewat git 
   1. Buat branch baru ([git cmd](#git-commands) poin 2)
   2. Jangan lupa commit file kalian ([git cmd](#git-commands) poin 2)
   3. Push branch kalian ke remote ([git cmd](#git-commands) poin 9)
2. Kalau mau ngumpulin lewat google drive bisa upload folder ke sini yaa https://bit.ly/fp-backend-basic
3. Presentasi tanggal 19 Desember

## Link Tutorial Tambahan Yang Bisa Dipelajari
- https://youtu.be/-MTSQjw5DrM - RESTful APIs in 100 Seconds // Build an API from Scratch with Node.js Express
- https://youtu.be/TecGUz4bPFA - Belajar NodeJS | 14. Apa itu Express?
  

---
#### Git Commands
1. Clone repository
`git clone https://github.com/abimnyud/example-app.git`

2. Commit file
`git add <file-atau-folder>` kemudian
`git commit -m "<messagenya-apa>"`
 
3. Publish commit ke branch yang sekarang
`git push `

4. Cek lagi di branch mana
`git status`

5. Cek ada branch apa aja di local `git branch`

6. Cek ada branch apa aja di remote dan di local
`git branch -a`

7. Buat branch baru di local `git branch <nama-branch>`

8. Pindah branch
`git switch <nama-branch>` atau `git checkout <nama-branch>`

9. publish branch dari local ke remote
`git push -u origin <nama-branch>` atau 
`git push --set-upstream origin <nama-branch>`

10. .gitignore untuk pengecualian file agar tidak tercommit
