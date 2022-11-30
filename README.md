# README
Halo teman-teman Android! Ini merupakan final project untuk kelas Back-end Basic Study Club KSM Android UPNVJ. Mohon diikuti langkah-langkah dan ketentuannya agar lulus dalam kelas Study Club ini.

</br>

> ## <span style="color:red"> ⚠️ Deadline: Senin, 19 Desember 2022 </span>
## Tahapan
1. Baca detail tugas di bawah
2. Clone atau download repository ini untuk base structure project-nya
3. Selamat Ngoding! ✨
## Detail Tugas
- Minimal memiliki entitas admin dan 2 entitas lain yang memiliki relasi 1:n (One to Many) atau m:n (Many to One) antara 2 entitas tersebut,
- Web Service API (CRUD) untuk admin dan 2 entitas yang ditentukan,
- Membuat signup dan login authentication (signup optional, yang wajib hanya login). Apabila login berhasil, maka akan mengembalikan token JWT yang bisa digunakan untuk Create, Update, dan Delete 2 entitas yang ditentukan, serta Update dan Delete admin.
- Membuat authorization middleware untuk cek apakah merupakan admin yang sudah login atau bukan? Kalau bukan, maka kembalikan error.

> ## Contoh 📝


---
## Penilaian Tambahan
- Membuat error handling sendiri pakai class ataupun middleware
- Menggunakan enkripsi password yang disimpan ke database (bcrypt, argon2, dsb.)
- API read data pemain atau film mengembalikan data join relasinya, misal:
  - Ketika Get Film by id 1, maka juga akan mengembalikan data para pemainnya
    <details>
      <summary>Klik buat liat datanya</summary>

      ```
	  
      {
      	"judul_film": "Gundala",
      	"rating": 5,
      	"pemain": [
      		{
      			"id": 1,
                "nama": "Abimana Aryasatya",
      			"rating": 5
      		},
      		{
      			"id": 2,
                "nama": "Pevita Pearce",
      			"rating": 5
      		},
      		{
      			"id": 3,
                "nama": "Tara Basro",
      			"rating": 5
      		}
      	]
      }

      ```

    </details>
  - Ketika Get Cast by id 1, maka juga akan mengembalikan data film yang dimainkan
    <details>
      <summary>Klik buat liat datanya</summary>

      ```

      {
      	"nama": "Abimana Aryasatya",
      	"rating": 5,
      	"pemain": [
      		{
      			"id": 1,
                "judul_film": "Gundala",
      			"rating": 5
      		}
      	]
      }
      
      ```

    </details>

## Cara Ngumpulin
1. Kalau mau kumpulin lewat git 
   1. Buat branch baru ([git cmd](#git-commands) poin 2)
   2. Jangan lupa commit file kalian ([git cmd](#git-commands) poin 2)
   3. Push branch kalian ke remote ([git cmd](#git-commands) poin 9)
2. Presentasi setelah tanggal 19 Desember (nanti disampaikan lagi)
3. Kelar deh 🤟

## Link Tutorial Tambahan Yang Bisa Dipelajari
- Setup database https://youtu.be/8JPmHZJKB5w
- Authentication dan Authorization https://youtu.be/2jqok-WgelI
  
## Git Commands
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