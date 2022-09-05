

export default async (models) => {
    const locationList = [
        {
            name: "Cat Paradise",
            city: "Milan"
        },
        {
            name: "Cat City",
            city: "Rome"
        }
    ]
    const location0 = await models.Location.create(locationList[0])
    const location1 = await models.Location.create(locationList[1])
    const catList = [
        {
            name: "Cat 1",
            breed: "Siberian",
            description: "Details about cat 1",
            img: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
            locationId: location0.id
        },
        {
            name: "Cat 2",
            breed: "Birman",
            description: "Details about cat 2",
            img: "https://fs.i3lab.group/hypermedia/cats/birman.jpg",
            locationId: location0.id
        },
        {
            name: "Cat 3",
            breed: "Bombay",
            description: "Details about cat 3",
            img: "https://fs.i3lab.group/hypermedia/cats/bombay.jpg",
            locationId: location0.id
        },
        {
            name: "Cat 4",
            breed: "Calico",
            description: "Details about cat 4",
            img: "https://fs.i3lab.group/hypermedia/cats/calico.jpg",
            locationId: location1.id
        },
        {
            name: "Cat 5",
            breed: "Maine Coon",
            description: "Details about cat 5",
            img: "https://fs.i3lab.group/hypermedia/cats/maine-coon.jpg",
            locationId: location1.id
        },
    ]
    await models.Cat.bulkCreate(catList)

    const POIs = [
        {
            imgPathMain: "https://img.itinari.com/pages/images/original/45efadaf-72bc-47a6-979a-b12bf1849cf7-istock-458117473.jpg?ch=DPR&dpr=1.25&w=1600&s=9c2481e70bf928dc4ee8c79cdb62f471",
            descriptionMain: "Italy is reputed as a country that enjoys and celebrates the wonderful things in life - food, drinks, friends and the obvious dance! One of the most recognized dance types is the traditional dance of southern Italy, called tarantella, which is characterized by fast beats and the accompaniment of a tambourine. The word itself is the name of a poisonous which is common in southern Italy. According to ancient folk belief, spider bites once caused a crisis of violent psychopathy.",
            heading: "Puglia Dance and Tarantula Spider Night",
            address: "Florence-Pitti Palace",
            hours: "1 Sep - 7 Sep",
            cost: "$14",
            imgPathText: "https://img.itinari.com/pages/images/original/45efadaf-72bc-47a6-979a-b12bf1849cf7-istock-458117473.jpg?ch=DPR&dpr=1.25&w=1600&s=9c2481e70bf928dc4ee8c79cdb62f471 ",
            imgPathMap: "https://www.google.com/maps/d/thumbnail?mid=10VmHW_IKbqVsLo3GSftdvHCyAJM&hl=en",
            category: "dance",
            url: "https://www.itinari.com/zh/apulian-dances-and-the-night-of-the-tarantula-xjaf",
            Neighbourhood: "florence",
            
        },
        {
            imgPathMain: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/04/xBANNER-415X250_202211.jpg.pagespeed.ic.ZG598FW7Pw.webp",
            descriptionMain: "Music by Bellini, Donizetti, Rossini, Liszt Programme: VINCENZO BELLINI Vanne, o rosa fortunata GAETANO DONIZETTI",
            heading: "Pretty Yende",
            address: "Florence-Pitti Palace",
            hours: "1 Sep - 7 Sep",
            cost: "Free",
            imgPathText: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/04/xBANNER-415X250_202211.jpg.pagespeed.ic.ZG598FW7Pw.webp",
            imgPathMap: "https://i.stack.imgur.com/coL96.png",
            category: "dance",
            url: "https://www.c.it/en/spettacolo/pretty-yende",
            Neighbourhood: "florence",
        },
        {
            imgPathMain: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/04/xBANNER-415X250_202212.jpg.pagespeed.ic.FjALU91zgD.webp",
            descriptionMain: "Music by Cilea, De Curtis, Puccini, Leoncavallo, Arditi, Verdi, Falvo, Giordano, Arlen, Mascagni, Catalani, Cardillo Programme: FRANCESCO CILEA “Io son l’umile ancella” from Adriana Lecouvreur ERNESTO DE CURTIS Non ti scordar di me  GIACOMO PUCCINI “O mio babbino caro” from Gianni Schicchi RUGGERO LEONCAVALLO",
            heading: "Anna Pirozzi",
            address: "Florence-Pitti Palace",
            hours: "1 Sep - 7 Sep",
            cost: "Free",
            imgPathText: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/04/xBANNER-415X250_202212.jpg.pagespeed.ic.FjALU91zgD.webp",
            imgPathMap: "https://i.stack.imgur.com/coL96.png",
            category: "music",
            url: "https://www.festivaldellavalleditria.it/en/spettacolo/anna-pirozzi",
            Neighbourhood: "florence",
            
        },
        {
           imgPathMain: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/05/xBANNER-415X250_2022_bassifondi.jpg.pagespeed.ic.mcshdGF83S.webp",
            descriptionMain: "Music by Foscarini, Kapsberger, Marchetti Romano, Piccinini, De Murcia, Sanz, Valdambrini Romano, Kircher Programme:ALFABETO FALSO Quando le lettere nascondono qualcosa GIOVANNI PAOLO FOSCARINI “Gagliarda francese”, “Passacaglia sopra la O”, “Aria di Firenze per la A e C” from Li cinque libri della chitarra alla spagnola HIERONIMUS KAPSBERGER",
            heading: "Il canto degli ulivi | I Bassifondi",
            address: "Florence-Pitti Palace",
            hours: "1 Sep - 7 Sep",
            cost: "Free",
            imgPathText: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/05/xBANNER-415X250_2022_bassifondi.jpg.pagespeed.ic.mcshdGF83S.webp",
            imgPathMap: "https://i.stack.imgur.com/coL96.png",
            category: "music",
            url: "https://www.festivaldellavalleditria.it/en/spettacolo/il-canto-degli-ulivi-i-bassifondi",
            Neighbourhood: "florence",
            
        },
        {
           imgPathMain: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/04/xBANNER-415X250_20229.jpg.pagespeed.ic.HCdeoDqzpc.webp",
            descriptionMain: "Music by Giuliani, Doisy, Sor, Schubert, Mertz, Rossini Programme: MAURO GIULIANI 6 Cavatine, op. 39 CHARLES DOISY Romances pour voix et guitar FERNANDO SOR Caprice op. 50, “Le calme” FRANZ SCHUBERT “Der Wanderer” and “Ständchen” from Schwanengesang D957 JOHANN KASPAR MERTZ",
            heading: "Il canto degli ulivi | Giulia Semenzato",
            address: "Florence-Pitti Palace",
            hours: "1 Sep - 7 Sep",
            cost: "Free",
            imgPathText: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/04/xBANNER-415X250_20229.jpg.pagespeed.ic.HCdeoDqzpc.webp",
            imgPathMap: "https://i.stack.imgur.com/coL96.png",
            category: "music",
            url: "https://www.festivaldellavalleditria.it/en/spettacolo/il-canto-degli-ulivi-giulia-semenzato",
            Neighbourhood: "florence",
            
        },
        {
            imgPathMain: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/04/xBANNER-415X250_20226.jpg.pagespeed.ic.BxSn2dC9ug.webp",
            descriptionMain: "Music by Giacomo Puccini Locandina: Director and film adaptation Damiano Michieletto (ITA, 2021 – 75 minuti) Conductor Stefano Montanari Music played by Orchestra Teatro Comunale di Bologna cenography Paolo Fantin",
            heading: "Gianni Schicchi | Film",
            address: "Montreal-Montreal Park",
            hours: "1 Sep - 7 Sep",
            cost: "Free",
            imgPathText: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/04/xBANNER-415X250_20226.jpg.pagespeed.ic.BxSn2dC9ug.webp",
            imgPathMap: "https://i.stack.imgur.com/coL96.png",
            category: "music",
            url: "https://www.festivaldellavalleditria.it/en/spettacolo/gianni-schicchi-film",
            Neighbourhood: "montreal",
            
        },
        {
            imgPathMain: "https://giornaledelladanza.com/wp-content/uploads/IMG_6922-3-BOLERO-1.jpg",
            descriptionMain: "It is called Magic of a star a production by Susanna Beltrami.Just in homage to her long career Luciana Savignano tells her audience also proposing in video some precious memorabilia of her career, which she herself will comment live.",
            heading: "Magic of a Star",
            address: "Turin-Giardini Reali di Torino",
            hours: "1 Sep - 7 Sep",
            cost: "Free",
            imgPathText: "https://giornaledelladanza.com/wp-content/uploads/IMG_6922-3-BOLERO-1.jpg",
            imgPathMap: "https://i.stack.imgur.com/coL96.png",
            category: "theater",
            url: "https://giornaledelladanza.com/luciana-savignano-magia-di-una-stella/",
            Neighbourhood: "Turin",
            
        },
        {
            imgPathMain: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/04/xBANNER-415X250_20227.jpg.pagespeed.ic.-Wzjkzu1yN.webp",
            descriptionMain: "Le pellicole, del 1915, Carmen di DeMille (protagonista la diva del Metropolitan Opera Geraldine Farrar) e Burlesque on Carmen di e con Charlie Chaplin (che fa una parodia del lavoro di DeMille) vengono proiettate in versione restaurata e con le colonne sonore eseguite dal vivo dall’Orchestra della Magna Grecia diretta da Timothy Brock.",
            heading: "Silent Carmen",
            address: "Venice-St. Mark's Square",
            hours: "1 Sep - 7 Sep",
            cost: "Free",
            imgPathText: "https://www.festivaldellavalleditria.it/wp-content/uploads/2022/04/xBANNER-415X250_20227.jpg.pagespeed.ic.-Wzjkzu1yN.webp",
            imgPathMap: "https://i.stack.imgur.com/coL96.png",
            category: "theater",
            url: "https://www.festivaldellavalleditria.it/en/spettacolo/silent-carmen-film",
            Neighbourhood: "venice",
            
        },
        {
           imgPathMain: "https://www.puccinifestival.it/wp-content/uploads/2022/08/madama_butterfly-1.jpg",
            descriptionMain: "Manu Lalli’s ecological message is visually rendered with a beautiful forest of real trees on stage. Green trees in the first act that become dry and arid in the second and third, a clear message of condemnation against gender violence and the violence that man perpetrates every day against nature. Alberto Veronesi, refined interpreter of the “Puccini” style, conducts the Puccini Festival Orchestra and Chorus.",
            heading: "MADAMA BUTTERFLY",
            address: "Venice-St. Mark's Square",
            hours: "1 Sep - 7 Sep",
            cost: "Free",
            imgPathText: "https://www.puccinifestival.it/wp-content/uploads/2022/08/madama_butterfly-3.jpg",
            imgPathMap: "https://i.stack.imgur.com/coL96.png",
            category: "opera",
            url: "https://www.puccinifestival.it/en/madama_butterfly_2022/",
            Neighbourhood: "venice",
            
        },
        {
            imgPathMain: "https://www.puccinifestival.it/wp-content/uploads/2022/08/tosca-2.jpg",
            descriptionMain: "osca is undoubtedly Puccini's most dramatic opera, cruelty and sadism provide the backdrop for the story of love and death set in Rome in the 1800s.At the Puccini Festival 2022 it will be presented in a production by Pier Luigi Pizzi, with Enrico Calesso on the podium of the Puccini Festival Orchestra.Pizzi, who also designed the sets and costumes,  makes a temporal shift from the Rome of the Napoleonic era to the Italy of the late 1930s.",
            heading: "TOSCA",
            address: "Naples-Real Bosco di Capodimonte",
            hours: "1 Sep - 7 Sep",
            cost: "Free",
            imgPathText: "https://www.puccinifestival.it/wp-content/uploads/2022/08/tosca-3.jpg",
            imgPathMap: "https://i.stack.imgur.com/coL96.png",
            category: "opera",
            url: "https://www.puccinifestival.it/en/tosca_2022/",
            Neighbourhood: "Naples",
            
        },
      
    ]
    await models.POI.bulkCreate(POIs)

    const Event = [
    ]
    await models.Event.bulkCreate(Event)

    const Service = [
         {
            heading: "Silent Carmen",
            location: "Venice-St. Mark's Square",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=8",
            type: "Aterballetto",
        },
        {
            heading: "Gianni Schicchi | Film",
            location: "Montreal-Montreal Park",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=6",
            type: "Aterballetto",
        },
        {
            heading: "Puglia Dance and Tarantula Spider Night",
            location: "Florence-Pitti Palace",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=1",
            type: "Aterballetto",
        },
        {
            heading: "Silent Carmen",
            location: "Venice-St. Mark's Square",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=8",
            type: "Beatrice Bresolin",
        },
        {
            heading: "Puglia Dance and Tarantula Spider Night",
            location: "Florence-Pitti Palace",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=1",
            type: "Beatrice Bresolin",
        },
        {
            heading: "TOSCA",
            location: "Naples-Real Bosco di Capodimonte",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=10",
            type: "Beatrice Bresolin",
        },
        {
            heading: "Puglia Dance and Tarantula Spider Night",
            location: "Florence-Pitti Palace",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=1",
            type: "Marco D’Agostin",
        },
        {
            heading: "MADAMA BUTTERFLY",
            location: "Venice-St. Mark's Square",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=9",
            type: "Marco D’Agostin",
        },
        {
            heading: "Silent Carmen",
            location: "Venice-St. Mark's Square",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=8",
            type: "Marco D’Agostin",
        },
        {
            heading: "Gianni Schicchi | Film",
            location: "Montreal-Montreal Park",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=6",
            type: "Sharon Eyal",
        },
        {
            heading: "Il canto degli ulivi | I Bassifondi",
            location: "Florence-Pitti Palace",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=4",
            type: "Sharon Eyal",
        },
        {
            heading: "Puglia Dance and Tarantula Spider Night",
            location: "Florence-Pitti Palace",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=1",
            type: "Sharon Eyal",
        },
        {
            heading: "Puglia Dance and Tarantula Spider Night",
            location: "Florence-Pitti Palace",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=1",
            type: "Gabriele Strata",
        },
        {
            heading: "Pretty Yende",
            location: "Florence-Pitti Palace",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=2",
            type: "Gabriele Strata",
        },
        {
            heading: "Puglia Dance and Tarantula Spider Night",
            location: "Florence-Pitti Palace",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=1",
            type: "Christian Pabst",
        },
        {
            heading: "Pretty Yende",
            location: "Florence-Pitti Palace",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=2",
            type: "Christian Pabst",
        },
        {
            heading: "Magic of a Star",
            location: "Turin-Giardini Reali di Torino",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=7",
            type: "Leonora Armellini",
        },
        {
            heading: "Silent Carmen",
            location: "Venice-St. Mark's Square",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=8",
            type: "Leonora Armellini",
        },
        {
            heading: "Pretty Yende",
            location: "Florence-Pitti Palace",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=4",
            type: "Erica Piccotti",
        },
        {
            heading: "Il canto degli ulivi | Giulia Semenzato",
            location: "Florence-Pitti Palace",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=5",
            type: "Erica Piccotti",
        },
        {
            heading: "Gianni Schicchi | Film",
            location: "Montreal-Montreal Park",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=6",
            type: "ERT Emilia Romagna Teatro ",
        },
        {
            heading: "Magic of a Star",
            location: "Turin-Giardini Reali di Torino",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=7",
            type: "ERT Emilia Romagna Teatro",
        },
        {
            heading: "Silent Carmen",
            location: "Venice-St. Mark's Square",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=8",
            type: "Roberto Latini",
        },
                {
            heading: "Pretty Yende",
            location: "Florence-Pitti Palace",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=2",
            type: "Carlos Natale",
        },
        {
            heading: "Pretty Yende",
            location: "Florence-Pitti Palace",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=2",
            type: "Grigory Shkarupa",
        },
        {
            heading: "Pretty Yende",
            location: "Florence-Pitti Palace",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=2",
            type: "Simone Piazzola",
        },
        {
            heading: "Pretty Yende",
            location: "Florence-Pitti Palace",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=2",
            type: "Mirko Artuso",
        },
        {
            heading: "Pretty Yende",
            location: "Florence-Pitti Palace",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=2",
            type: "Marco Paolini",
        },
        {
            heading: "MADAMA BUTTERFLY",
            location: "Venice-St. Mark's Square",
            hours: "1 Sep - 7 Sep",
            url: "https://ali-ali.herokuapp.com/all-festival/poi?id=9",
            type: "Roberto Latini",
        },

    ]
    await models.Service.bulkCreate(Service)

    const AllService = [
       {
            type: "Aterballetto",
            imgPath: "https://dancingopportunities.com/wp-content/uploads/2022/02/Fondazione-Nazionale-della-Danza-Aterballetto-Audition-for-2022-23-Season.jpg",
            description: "At present, the reserved program of Aterballetto includes works choreographed by the following artists: Mauro Bigonzetti, Michel Abundonza and Andonella Bertone, Itkik Galilee, and other young European choreographers, as well as internationally renowned artists such as William Forster and Girrie Killen",

        },
        {
            type: "Beatrice Bresolin",
            imgPath: "http://www.cantieridanza.it/festivalammutinamenti/files/2021/08/ritratto_beatrice_bresolin_sito.jpg",
            description: "She makes work for the stage and for urban and natural contexts, in dialogue with the environment, architecture, works of art and people, significantly relying on the senses. Her practice acknowledges the body as the place of being, as a tool to know the world and as a source of knowledge itself. The art of words fascinates and helps her as well, as a tool for conceptualization, communication, and imagination.",

        },
        {
            type: "Marco D’Agostin",
            imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwoWSjf6kkoYhmIP8X0Feowt5Z57rjlwDe_w&usqp=CAU",
            description: "His work questions the role and functioning of memory, and focuses on the relationship between performer and spectator. Dance, a complex geography in which sounds, words and movements constantly collide, tends towards the emotional compromise of the ones who perform and the ones who watch.",

        },
        {
            type: "Sharon Eyal",
            imgPath: "https://www.ridcc.com/site/wp-content/uploads/2020/01/sharon-eyal-screenshot--1100x595.png",
            description: "Alongside their work with L-E-V, Eyal and Behar had also been commissioned to create for external companies such as Bedroom Folk, Salt Womb, Feelings and Sara for the Nederland Dance Theatre; Strong  for StaatsBallett, Berlin, Germany, Faunes for The Paris Opera, France Half Life for the Royal Swedish Ballet; Untitled Black and Autodance for GöteborgsOperans Danskompani, Sweden; Killer Pig and Corps de Walk for Carte Blanche Dance of Norway; Too Beaucoup for Hubbard Street Dance Chicago; Plafona for Tanzcompagnie Oldenburg Germany; Promise, Soul Chain for Staatstheater Mainz, Germany and more.",

        },
        {
            type: "Gabriele Strata",
            imgPath: "http://iicparigi.esteri.it/iic_parigi/resource/img/2022/03/gs.png",
            description: "Graduated in piano at the Conservatory of Vicenza with 10 laude and honorable mention under the guidance of Riccardo Zadra and Roberto Prosseda, he currently attends the Master's degree at Yale University with Boris Berman.",

        },
        {
            type: "Christian Pabst",
            imgPath: "https://angartwork.akamaized.net/?id=1061186&size=640",
            description: "German pianist and (film-) composer Christian Pabst is a true storyteller.While being deeply rooted and connected to the greats of jazz, Christian developed an original, strong and genre transcending voice as a pianist and composer. Finding inspiration not only in the magnificent diversity of the arts but also in travelling and everyday life, his radiant music is very visual and inspires your imagination. “I want to create music that speaks to the heart and the mind alike” says the pianist. ",

        },
        {
            type: "Leonora Armellini",
            imgPath: "http://www.fazioli.com/sites/default/files/concerthall/sito_1140x858_armellini.png",
            description: "She graduated summa cum laude at the age of 17 at the National Academy of S. Cecilia in Rome, under the guidance of Sergio Perticaroli and her artistic development is also influenced by Lilya Zilberstein (Musikhochschule Hamburg) and Boris Petrushansky (Accademia Pianistica “Incontri col Maestro”, Imola).",

        },
        {
            type: "Marco Paolini",
            imgPath: "https://media.gettyimages.com/photos/marco-paolini-attends-a-photocall-for-la-pelle-dellorso-on-october-27-picture-id618578966?s=612x612",
            description: "Author and interpreter of a repertoire that belongs to the so-called civil theater, he has been dealing with dramaturgy since the seventies. His activity is distinguished by the taste of the study of texts and the search for sources and for the continuous juxtaposition of facts with theatrical finds often desecrating and ironic; his shows, in this way, deal with complex issues.",

        },
        {
            type: "Mirko Artuso",
            imgPath: "https://www.themoviedb.org/t/p/w500/v1BQOTylkRGUNP98CSW7n1wpTCG.jpg",
            description: "He trained working in close collaboration with actors such as:  Laura Curino, Marco Paolini, Eugenio Allegri. His artistic research is based on the continuous comparison between the poetic language of the theater and the interpretation of reality and the places in which it manifests itself. His creations move from the need to tell.",

        },
        {
            type: "Simone Piazzola",
            imgPath: "https://crescendiartists.com/wp-content/uploads/2021/02/Simone-Piazzola-by-Francesca-Marta-2-min-1000x1024.jpg",
            description: "He has twice won the prestigious Abbiati Prize of theater criticism: in 2015 for his interpretation of the role of Simon Boccanegra and in 2019 for the engraving of the Mass for Rossini by Decca , conductor M ° Riccardo Chailly .",

        },
        {
            type: "Grigory Shkarupa",
            imgPath: "https://berinart.com/img/c/524_thumb.jpg",
            description: "Grigory Shkarupa started winning prizes at a very young age with his deep, warm and precisely sung bass. In 2011 he was a prizewinner at the 1st Elena Obraztsova International Competition of Young Singers in St. Petersburg. Later followed the Shalyapin International Competition in Yalta, the ‘Three Centuries of the Classical Romance’ International Competition in St. Petersburg, as well as the All-Russian Sviridov Vocal Competition in Kursk.",

        },
        {
            type: "Carlos Natale",
            imgPath: "https://www.qdpnews.it/wp-content/uploads/2019/11/mirko_artuso_moriago_copy.jpg",
            description: "His actorial skills and his vocal versatility allow him to sing a large repertoire ranging from baroque to contemporary music. He has sung solistic roles in choral symphonic repertoire including “Carmina Burana”, Handel’s “The Messiah”, Puccini’s “Messa di Gloria”, Mozart’s “Messa d ‘incoronation “, “Mass in C Minor “, Beethoven’s “9th Symphony”.",

        },
        {
            type: "Erica Piccotti",
            imgPath: "https://www2.kronbergacademy.de/fileadmin/_processed_/1/d/csm_piccotti-erica_01_ae20ab0ef5.jpg",
            description: "She won first prizes in national and international competitions including Rassegna Nazionale d’Archi di Vittorio Veneto, Premio Nazionale delle Arti run by Italy.",

        },
        {
            type: "ERT Emilia Romagna Teatro ",
            imgPath: "https://spettacolo.emiliaromagnacultura.it/wp-content/uploads/2021/10/1469cc68a2ae8fe0e9f8d7cdc82022e8-malosti-foto-di-laila-pozzi-363x235.png",
            description: "prestigious theatres and festivals in Italy and worldwide.",

        },
        {
            type: "Roberto Latini",
            imgPath: "https://www.teatriincomune.roma.it/wp-content/uploads/2018/08/roberto-latini-pdf.jpg",
            description: "He enrolled in the acting school Il Mulino di Fiora, directed by Perla Peragallo, where he graduated in 1992. With his classmates Nicola D'Angelis and Maximilian La Monica founded the Associazione Teatro Es. In the meantime he completed his studies at the Faculty of Letters and Philosophy of the University of Rome",

        }
        
    ]
    await models.AllService.bulkCreate(AllService)

    const Itineraries = [
        {
            imgPath: "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_headers/51360/2000x2000-0-70-29bde528fdc139b63abfe78184fd1957.jpg",
            description: "The Palazzo Pitti, in English sometimes called the Pitti Palace, is a vast, mainly Renaissance, palace in Florence, Italy. It is situated on the south side of the River Arno, a short distance from the Ponte Vecchio",
            heading: "Florence-Pitti Palace",
        },
        {
            imgPath: "https://www.ourescapeclause.com/wp-content/uploads/2021/08/shutterstock_1372373447-scaled.jpg",
            description: "Piazza San Marco, often known in English as St Mark's Square, is the principal public square of Venice, Italy, where it is generally known just as la Piazza. All other urban spaces in the city are called campi. The Piazzetta is an extension of the Piazza towards San Marco basin in its south east corner. ",
            heading: "venice-St. Mark's Square",

        },
        {
            imgPath: "https://bstatic.com/xdata/images/xphoto/1182x887/151600551.jpg?k=4da3bd59c99c41d160a4697d0dd70d0f8afa0079c4112046099020da674decd3&o=?size=S",
            description: "The Royal Palace of Turin (Italian: Palazzo Reale di Torino) is a historic palace of the House of Savoy in the city of Turin in Northern Italy.This 18th-century museum houses magnificent collections from such renowned artists as Masaccio, Titian, Raphael, El Greco and Bruegel, including the immense Farnese collection.",
            heading: "Turin-Giardini Reali di Torino",
        },

        {
            imgPath: "https://visit.marketing-italia.eu/uploads/visitnaples/uploads_articoli/evidenza/2020022710041020200128164214bosco%20di%20capodimonte.jpg",
            description: "This 18th-century museum houses magnificent collections from such renowned artists as Masaccio, Titian, Raphael, El Greco and Bruegel, including the immense Farnese collection.This 18th-century museum houses magnificent collections from such renowned artists as Masaccio, Titian, Raphael, El Greco and Bruegel, including the immense Farnese collection.",
            heading: "Naples-Real Bosco di Capodimonte",
        },
        {
            imgPath: "https://www.mtlblog.com/media-library/image.jpg?id=26890332&width=1245&height=700&quality=85&coordinates=40%2C0%2C40%2C0",
            description: "At the northern tippy top of the island, this lovely park meanders along the verdant grassy knolls that line the banks of Rivière-des-Prairies, with occasional detours onto Henri Bourassa Street, where you’ll spot some of the city’s oldest farmhouses. Walking eastward, when you reach the little inlet at Gouin and Papineau, go explore the trails near Simon Sicard Dam. The views of the river are great.",
            heading: "Montreal-Montreal Park",

        },

    ]

    await models.Itineraries.bulkCreate(Itineraries)

    const poiEventsJoinTable = [
        

    ]


    await models.poiEventsJoinTable.bulkCreate(poiEventsJoinTable)
}
