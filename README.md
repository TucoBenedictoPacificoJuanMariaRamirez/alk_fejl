Alkalmazás fejlesztés beadandó
============

---

#### ÉTTEREM

A program egy étterem ételrendeléseit reprezentálja. 
Az étterem rendelkezik egy menüsorral, mely bárki számára megtekinthető.
A vendégek rendeléseket leadni csak bejelentkezve tudnak, melyhez regisztráció szükséges. 
A megrendelt ételek kiszállítását a futárok végzik.

### Táblák
* Rendelések
* Ételek
* Vendégek
* Futárok

#### Kapcsolatok
* Rendelések-Ételek: sok-sok kapcsolat
* Vendégek-Rendelések: egy-sok kapcsolat
* Futárok-Rendelések: egy-sok kapcsolat

#### Tábal kapcsolat diagram (egyszerűsített és teljes verzió)
![Ezen a képen látható az adatbázis egyszerűsített kapcsolati diagramja](ER_diagram.png "Egyszerűsített kapcsolati diagram")
![Ezen a képen látható az adatbázis kapcsolati diagramja](Etterem_UML.png "Adatbázis kapcsolati diagram")

### REST végpontok
* POST /api/register - Regisztrációs végpont az új felhasználók részére
* POST /api/login - Bejelentkező felület regisztrált felhasználók számára
* GET/POST /api/menus - Itt lehet listázni a menüket/hozzáadni újat
* GET/PATCH/DELETE /api/menus/{id} - Egy adott menü lekérdezése, módosítása, törlése
* GET/POST /api/orders - Itt lehet lekérdezni/leadni a rendeléseket (csak bejelentkezett felhasználóknak)
* GET/PATCH/DELETE /api/orders/{id} - Egy adott rendelés lekérdezése, módosítása, törlése
* GET /api/couriers - A futárok adatait itt lehet lekérdezni
* GET/PATCH/DELETE /api/couriers/{id} - Egy adott futár adatainak lekérdezése, módosítása, törlése
* GET /api/customers - A vásárlók adatainak lekérdezése
* GET/PATCH/DELETE /api/customers/{id} - Egy adott várásló adatainak lekérdezése
  
#### Funkcionális követelmények
* Regisztráció
* Bejelentkezés
* Étlap megtekintése
* Az étterem elérhetőségeinek megtekintése
* Bejelentkezett felhasználóknak
 	* Étel kosárba helyezése
 	* Étel törlése a kosárból
 	* Rendelés leadása
 	* Korábbi rendelések megtekintése
 	* Adatok módosítása

#### Nem funkcionális követelmények
* Felhasználóbarát: Megfelelően elhatárolt funkciók. Világos, látható színekkel írt szövegek. Ésszerű elrendezés.
* Biztonság: Jelszóval védett funkciók. Titkosított jelszavak.
* Gyors és megbízható működés: Adatbázis használata
  
#### Szakterületi fogalomjegyzék
Az alkalmazás megértéséhez nem szükségesek szakszavak vagy nem mindennapi kifejezések

#### Szerepkörök
* Vendég: Az oldal nem regisztrált látogatója. Megtekintheti az étlapot, valamint az étterem elérhetőségeit. Tud a menüben keresni és regisztrálni.
* Bejelentkezett vendég: Regisztrált és bejelentkezett felhasználó, aki már rendeléseket is adhat le.

#### Képernyőterv
![Ezen a képen látható az ételrendelő lap drótvázterve](mockup.jpg "Ételrendelő lap")

### Fejlesztői környezet
* A program bármilyen operációs rendszeren futtatható. 
* A szoftver megfelel a MVC architeltúrának.
* A projektet Java Spring Boot technológia használatával kivitelezzük.

* **Használt eszközök, telepített szoftverek:**
	* Github a projekt közzétételéhez
	* Node.js Javascript környezet
	* NetBeans IDE 8.2
	* H2 adatbázis-kezelő rendszer	
	* Andular keretrendszer használata(6.1.9)
	* AJAX a szerverrel törénő kommunikációhoz	
* **Importált J2EE csomagok:**
	* JPA
	* lombok
	* Web services
	* DevTools
	* Web	
		
* **Fejlesztőkörnyezet felállítása:**
1. Git verziókezelő telepítése (Githubon történő regisztráció ajánlott)
2. Node.js környzet telepítése
3. Project klónozása (vagy letöltése) lokális gépre: git clone https://github.com/TucoBenedictoPacificoJuanMariaRamirez/alk_fejl.git
4. A projectkönyvtárban a függőségek telepítése

#### Backend könyvtárszerkezet
![Ezen a képen látható a projekt mappa struktúrája](folder_structure_with_files.PNG "Backend Könyvtárszerkezet")
#### Frontend könyvtárszerkezet
![Ezen a képen látható a projekt mappa struktúrája](frontend_folderstructure.png "Frontend Könyvtárszerkezet")

#### Szekvenciadiagram
![Ezen a képen 1 db végpont működésének leírása látható, mi történik, milyen lépések követik egymást](sequence.png "Szekvenciadiagram")


#### Felhasználói használati esetek
Vendég felhasználó esetén:

![A vendég felhasználó használati eset diagramja](vendeg_use_case.png "Vendég felhasználó használati eset diagramja")

Regisztrált felhasználó esetén:

![Regisztrált felhasználó használati eset diagramja](customer_use_case.png "Regisztrált felhasználó használati eset diagramja")

Az admin felhasználó:

![Az admin használati eset diagramja](admin_use_case.png "Az admin használati eset diagramja")


---

#### Fejlesztők
* ##### *Király Bianka*
* ##### *Nagy Bence*
