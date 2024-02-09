const elements = [
	{
		title: 'Полный курс по JavaScript + React - с нуля до результата ',
		description: 'JavaScript',
		url : 'UC-9e1a7523-fb03-4211-b208-11f65d381e15',
		course: 'https://www.udemy.com/course/javascript_full/',
		date: '07.09.2023',
		text: `Освойте самый популярный язык программирования - JavaScript, библиотеку React и научитесь применять на практике!`
	},
	{
		title: 'Современный JavaScript - с Нуля до Junior Специалиста',
		description: 'JavaScript',
		url : 'UC-03a0a77c-9b44-4be9-ba6e-893a1d5ab6b3',
		course: 'https://www.udemy.com/course/javascript-zero-to-junior-developer/',
		date: '31.07.2023',
		text: `Наиболее новый и полный курс по JavaScript с нуля простым и понятным для новичков языком + React Fundamentals`
	},
	{
		title: `Statistical Arbitrage Bot Build in Crypto with Python (A-Z)`,
		description: 'crypto bot ',
		url : 'UC-0c836cdf-aa2e-48fe-85b4-8c6a7b8fece4',
		course: 'https://www.udemy.com/course/statistical-arbitrage-bot-build-in-crypto-with-python-a-z/',
		date: '12.01.2023',
		text: `Build a Pairs Trade bot like a boss on the ByBit Crypto exchange with a statistical arbitrage edge in Python.`
	},
	{
		title: 'Python ile Şeytan Örnekler',
		description: 'Python',
		url : 'UC-1b23781c-4179-4bcb-a2eb-dcf7da8513b0',
		course: 'https://www.udemy.com/course/python-ile-seytan-ornekler/',
		date: '03.02.2024',
		text: `İstemci-sunucu ilişkisini merak edenler. Python ile kendini geliştirmek isteyen herkes. İnternet sitelerine bot yazılımı geliştirmek isteyenler.`
	},
	{
		title: 'Uçtan Uca Nodejs',
		description: 'Node js',
		url : 'UC-20a1f730-cc5d-4def-a9f2-354e0b07bb31',
		course: 'https://www.udemy.com/course/uctan-uca-nodejs/',
		date: '04.09.2023',
		text: `Uygulamalarla birlikte Nodejs daha iyi kavrayın`
	},
	{
		title: 'Шаблоны проектирования. Design patterns tutorial',
		description: 'Design patterns',
		url : 'UC-38d1747f-8e77-4155-99e3-bd8a1ad99667',
		course: 'https://www.udemy.com/course/design-patterns-cj/',
		date: '03.02.2024',
		text: 'Обзор всех популярных шаблонов проектирования в разработке программного обеспечения.'
	},
	{
		title: 'Sıfırdan İleri Düzey Etik Hacker Kursu',
		description: 'Etik Hacker',
		url : 'UC-3f4be129-75f7-4ead-a64e-c012092ba717',
		course: 'https://www.udemy.com/course/sfrdan-ileri-duzey-etik-hacker-kursu-uygulamal/',
		date: '07.09.2023',
		text: 'Etik Hacker, Python ve Cisco Eğitimi Kapsamaktadır.'
	},
	{
		title: 'PHP 7 ile Sıfırdan MVC Proje Oluşturma PDO MySQL',
		description: 'PHP MYSQL',
		url : 'UC-497c9bdf-1097-4376-9da9-dd32dd19e1d0',
		course: 'https://www.udemy.com/course/php-mvc-egitimi/',
		date: '24.02.2020',
		text: 'PDO MySQL kullanarak PHP 7 ile Özel MVC Framework Oluşturmayı Öğrenin. Uygulamalı Proje ile Geliştirin ve Kullanın.'
	},
	{
		title: 'Bootstrap ile Sıfırdan 5 Gerçek Web Tasarım Projesi',
		description: 'Bootstrap',
		url : 'UC-51627c78-f65c-4253-9741-e10a82377fe3',
		course: 'https://www.udemy.com/course/bootstrap-4-egitimi-ile-sifirdan-animasyonlu-responsive-tasarim-yapmak/',
		date: '03.02.2024',
		text: 'Bootstrap, HTML 5 ve CSS 3 Kullanarak Animasyonlu Responsive Web Tasarım Eğitimi | Sıfırdan Frontend Web Tasarım Eğitimi'
	},
	{
		title: 'Komple Sıfırdan Adım Adım JQuery ile Harika Web Projeleri',
		description: 'jquery',
		url : 'UC-516XR3B3',
		course: 'https://www.udemy.com/course/komple-sifridan-adim-adim-jquery-ile-harika-web-projeleri/',
		date: '22.08.2019',
		text: 'Herkes için en gelişmiş ve detaylı JQUERY Kursu. Öğrendiklerini Php, Asp.Net, MVC-Web ,Python, Php, Ruby ile kullan'
	},
	{
		title: 'Node.js Puppeteer ile Sıfırdan İleri Seviye Bot Kodlama',
		description: 'Puppeteer',
		url : 'UC-582dd668-da8e-44fa-8de3-6ac9453831db',
		course: 'https://www.udemy.com/course/nodejs-puppeteer-ile-sfrdan-ileri-seviye-bot-kodlama/',
		date: '07.01.2024',
		text: 'Sıfırdan İleri Seviye Bot Kodlama Eğitimi'
	},
	{
		title: 'PHP-Мастер. От теории до собственной CMS интернет-магазина',
		description: 'PHP Master',
		url : 'UC-64a2b94a-fa8a-474a-ae95-337fd38f72e9',
		course: 'https://www.udemy.com/course/javascript_full/',
		date: '07.09.2023',
		text: 'собственной CMS интернет-магазина'
	},
	{
		title: 'Python ile Arayüz Programlama (PyQt5)',
		description: 'PyQt5',
		url : 'UC-66f26c2b-8119-44a8-8996-990e808754cb',
		course: 'https://www.udemy.com/course/javascript_full/',
		date: '07.09.2023',
		text: 'Python ile Arayüz Programlama'
	},
	{
		title: 'Kripto Para ile aylık düzenli gelir stratejisi',
		description: 'Kripto Para',
		url : 'UC-679a28d9-5b7f-4eb5-b1fc-abea0af4e982',
		course: 'https://www.udemy.com/course/kripto-para-ile-aylik-duzenli-gelir-stratejisi/',
		date: '16.02.2023',
		text: '8 Asker ve Karargâh stratejisi ile kripto para dünyasına adım atın!'
	},
	{
		title: 'Full-Stack Proje React POS Uygulaması - MERN Stack Proje',
		description: 'MERN',
		url : 'UC-74b926a6-1c2e-4ae7-87a1-48be9b2652f1',
		course: 'https://www.udemy.com/course/javascript_full/',
		date: '19.09.2023',
		text: 'React, TailwindCSS, Redux-Toolkit, Ant-Design, Express.js, MongoDB, Deployment ile Modern Full-Stack Projeler İnşaa Edin'
	},
	{
		title: 'Современный React - с Нуля до Профессионала',
		description: 'React js',
		url : 'UC-82243689-37b5-493e-827c-ad1a4942fb55',
		course: 'https://www.udemy.com/course/react-np/',
		date: '06.09.2023',
		text: 'Применение самой популярной JS библиотеки, используя современный подход хуков и функциональных компонентов!'
	},
	{
		title: 'React (Next.js) ile Full Stack Yemek Sipariş Projesi',
		description: 'Next js',
		url : 'UC-834a3858-b32f-408d-9a70-f0209cda2258',
		course: 'https://www.udemy.com/course/react-nextjs-ile-full-stack-yemek-siparis-projesi/',
		date: '03.02.2024',
		text: 'React, Next.js, Tailwind CSS, Redux, Redux-Toolkit, Next-Auth, Deployment ile Modern Full Stack Web Projeleri İnşaa Edin'
	},
	{
		title: 'Sıfırdan Her Yönüyle GraphQL ve Apollo',
		description: 'GraphQL & Apollo',
		url : 'UC-aa34339d-402f-4b26-9d6a-0c4366d2134e',
		course: 'https://www.udemy.com/course/graphql-apollo-egitimi/',
		date: '29.01.2024',
		text: 'GraphQL ve Apollo ile Node.JS, Express ve MongoDB Üzerinde Real-Time API Geliştirin'
	},
	{
		title: 'Sıfırdan Hızlı ve Kolay PHP ÖĞREN',
		description: 'PHP',
		url : 'UC-abac84a1-22d5-4f6e-9786-9d5ce92c1dfc',
		course: 'https://www.udemy.com/course/sifirdan-hizli-ve-kolay-php-ogren-ornek-uygulamalar-php-egitimi/',
		date: '03.08.2021',
		text: 'OOP-MVC- MYSQLİ - PDO -JQUERY - AJAX - CURL - JSON -BOT YAPIMI - Destekleyici örnek projeler- Nesne yönelimli yazılım'
	},
	{
		title: 'MERN Stack Geliştirme Kursu',
		description: 'MERN',
		url : 'UC-afced3b6-d9f7-48ab-a078-2a9bf713efd6',
		course: 'https://www.udemy.com/course/temel-nodejs-egitimi/',
		date: '07.09.2023',
		text: 'MERN Stack ile Web Geliştirme'
	},
	{
		title: 'Temel Python : 46 saat, 210 Soru, 5 Proje, 5 Ödev, 2 Sınav',
		description: 'zxczx',
		url : 'UC-bdc5cb53-edb9-4a33-91aa-60bf40957b0a',
		course: 'https://www.udemy.com/course/temel-python/',
		date: '17.01.2023',
		text: `0'dan İleri Seviyeye; uygulama, quiz, kodlama egzersizi, testler, projeler, ödevler, sınavlarla Python Programlama öğren`
	},
	{
		title: 'Робот для торговли криптовалютой на Binance на Python',
		description: 'Python Робот для Binance',
		url : 'UC-bedeaf49-c0c6-43e4-abdd-bddae0220003',
		course: 'https://www.udemy.com/course/binance-python/',
		date: '27.01.2023',
		text: 'Разработайте и запустите собственного торговорго робота для криптовалюты, акций или нефти и золота'
	},
	{
		title: 'Laravel 6 Uygulamalı Sıfırdan İleri Seviye Eğitimi',
		description: 'Laravel',
		url : 'UC-c5a91c8d-276e-48d9-a6ab-91a80e0abf92',
		course: 'https://www.udemy.com/course/laravel-egitimi/',
		date: '01.11.2022',
		text: 'Yeni Başlayanlar İçin Laravel Yada Laravel 6 Sürümü ile Kendini Geliştirmek İsteyenler İçin Uygulamalı Laravel Eğitimi'
	},
	{
		title: 'Azərbaycanca Etik Hacker Olma Kursu-Kali Linux və Python',
		description: 'Etichal Hacking',
		url : 'UC-c5de529c-ae33-4b3b-be8c-c1e19240f63c',
		course: 'https://www.udemy.com/course/azerbaycanca-etik-hacker-olma-kursu/',
		date: '07.09.2023',
		text: 'Etichal Hacking'
	},
	{
		title: 'PyQt5 Python - Разработка графических интерфейсов (GUI)',
		description: 'PyQt5',
		url : 'UC-cad1e613-8fbe-482e-9f3c-5868b3580144',
		course: 'https://www.udemy.com/course/pyqt5-python-gui/',
		date: '07.09.2023',
		text: 'Научим вас писать профессиональные программы с графическим интерфейсом на простых примерах используя qt python'
	},
	{
		title: 'Sıfırdan PHP MVC EĞİTİMİ-Sıfırdan E-TİCARET PROJESİ-FRAMEWORK',
		description: 'PHP MVC',
		url : 'UC-cfc0dd9e-2843-40eb-a942-5e27f62ea34c',
		course: 'https://www.udemy.com/course/sifirdan-php-mvc-egitimi-sifirdan-e-ticaret-projesi-yapimi/',
		date: '03.02.2024',
		text: 'Kendi Framework sistemimizi kurarak, sıfırdan işlemleri yapıyor ve MVC çatısında E-Ticaret sistemini geliştiriyoruz.'
	},
	{
		title: 'Kapsamlı Web App Geliştirme Kursu (NODEJS-REACT-FIREBASE)',
		description: 'Node js React',
		url : 'UC-cffc6174-e74c-44c1-99e1-3dbae5541d7b',
		course: 'https://www.udemy.com/course/kapsaml-web-app-gelistirme-kursu-nodejs-react-firebase/',
		date: '29.01.2024',
		text: '10 Tane Uygulama ile Javascript - NodeJS - Firebase - MongoDB - React - GraphQL - Apollo Öğreniyorum'
	},
	{
		title: `A'dan Z'ye Docker`,
		description: 'Docker',
		url : 'UC-e1a18c02-fe85-4552-bd2e-54948897b680',
		course: 'https://www.udemy.com/course/adan-zye-docker/',
		date: '19.09.2022',
		text: 'Uygulama geliştirme, test ve dağıtım süreçlerinizde Docker teknolojisini kullanmak için bilmeniz gerekenleri öğrenin'
	},
	{
		title: 'PHP OOP (Nesne Yönelimli Programlama) ve Proje Geliştirme',
		description: 'zxczx',
		url : 'UC-e465a0a0-5863-460b-bfe8-9508c4cdc32b',
		course: 'https://www.udemy.com/course/php-oop-kursu/',
		date: '03.02.2024',
		text: 'PHP OOP Tekniklerini Uygulamalı Olarak Yazdığımız Proje Üzerinden Öğrenin!'
	},
	{
		title: `NFT'ler Hakkında Her Şey (Başlangıçtan İleri Seviyeye)`,
		description: 'NFT',
		url : 'UC-ecb5cd0c-6c7d-497a-80f6-4956c0e7bd89',
		course: 'https://www.udemy.com/course/nftlerhakkindahersey/',
		date: '01.02.2023',
		text: 'NFT dünyasına dahil olmak için bilmeniz gereken her şeyi tek bir kursta topluyoruz'
	},
	{
		title: 'Sıfırdan İleri Seviyeye Komple PHP ile Web Geliştirme',
		description: 'PHP MYSQL',
		url : 'UC-f2d1452c-a1b3-46db-ad1a-0e2235b8263f',
		course: 'https://www.udemy.com/course/sifirdan-ileri-seviye-web-programlama-html-php-pdo-mysql/',
		date: '03.02.2024',
		text: 'PHP Web programlama öğrenerek öğrendiklerimizi uygulayıp PHP ile gerçek bir e-ticaret projesi geliştiriyoruz.(PDO+MySQL)'
	},
	{
		title: 'Komple Sıfırdan Adım Adım Javascript Öğrenin',
		description: 'JavaScript',
		url : 'UC-2a1b18e3-75f6-4a8b-8a7c-846191f7fc2c',
		course: 'https://www.udemy.com/course/komple-sifirdan-adim-adim-javascript-ogrenin/',
		date: '09.02.2024',
		text: 'Herkes için en gelişmiş Javascript JS Kursu. JAVASCRIPT Php, Asp.Net, MVC-Web ,Python, Php, Ruby ile kullan'
	},
	{
		title: 'Python BeautifulSoup & Selenium Veri ve Otomasyon Sistemleri',
		description: 'zxczxcz',
		url : 'UC-4c911486-e8b6-40c9-9f5f-ffbddacab037',
		course: 'https://www.udemy.com/course/draft/2861524/',
		date: '09.02.2024',
		text: 'Python BeautifulSoup'
	},
	{
		title: 'PHP MVC ile SOCKET IO Kullanımı ve Gerçek Zamanlı Projeler',
		description: 'PHP MVC Socket Io',
		url : 'UC-a05be6d6-7861-4106-8e45-96161d75797a',
		course: 'https://www.udemy.com/course/php-mvc-ve-socket-io-kullanimi/',
		date: '03.02.2024',
		text: 'Php websocket ile socket io kullanarak gerçek zamanlı ( real-time) anlık chat ( özel mesajlaşma) uygulaması yapıyoruz.'
	},
]

const certificate = document.querySelector('.certificate-content');

elements.map((element, index) => {
	certificate.innerHTML += 
	`
	<div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card" title="${index}">
        	<img src="resources/files/jpg/${element.url}.jpg" class="card-img-top">
            <div class="card_content">
                <div class="card_body">
                    <div class="card_head">
                        <div>
                            <a target="_blank" href="${element.course}" class="card_title">${element.title}</a>
                        </div>
                        <div class="card_head_info">
                            <div class="box">
                                <span class="levin" title="collection">${index}-${element.description}</span>
                            </div>
                            <div class="box">
                                <span>${element.date}</span>
                            </div>
                        </div>
                    </div>
                    <div class="card_text_box">
                        <span>${element.text}</span>
                    </div>
                </div>
                <div class="card_footer">
                    <div class="card_button_group">
                        <a target="_blank" href="resources/files/pdf/${element.url}.pdf">
                        pdf<span>скачать</span>
                        </a>
                        <a target="_blank" href="https://www.ude.my/${element.url}">
                            <span>certificate</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
	`;
});