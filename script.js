const books = [
    {
        id: 1,
        title: "गोदान",
        author: "Munshi Premchand",
        authorId: "premchand",
        genre: "novel",
        language: "hindi",
        year: 1936,
        rating: 4.5,
        description: "गोदान प्रेमचंद का अंतिम पूर्ण उपन्यास है जो भारतीय ग्रामीण जीवन की मार्मिक झाँकी प्रस्तुत करता है। इसमें होरी और धनिया के माध्यम से किसान जीवन की त्रासदी को दर्शाया गया है। यह उपन्यास भारतीय किसान के संघर्ष, सामाजिक विषमता और ग्रामीण जीवन की वास्तविकताओं को बखूबी चित्रित करता है।",
        cover: "mockups/godaan.png",
        content: [
            "गोदान - पृष्ठ 1\n\nहोरी ने अपनी गाय को प्यार से सहलाया। वह उसके लिए सिर्फ एक पशु नहीं थी, बल्कि परिवार का सदस्य थी। गाय के दूध से ही उसके बच्चों का पेट भरता था। होरी के लिए गाय केवल दूध देने वाला जानवर नहीं, बल्कि उसकी सामाजिक प्रतिष्ठा का प्रतीक भी थी।",
            "गोदान - पृष्ठ 2\n\nगाँव के जमींदार ने होरी से बेगार की माँग की। होरी के पास कोई चारा नहीं था, उसे जमींदार की बात माननी पड़ी। उसकी गाय भूखी रह गई। होरी की आँखों में आँसू थे जब उसे अपनी गाय को भूखा छोड़कर जमींदार के खेतों में काम करने जाना पड़ा।",
            "गोदान - पृष्ठ 3\n\nधनिया ने होरी से कहा, 'अब तो हमारे बच्चों के लिए भी कुछ नहीं बचा।' होरी ने आँखें नीची कर लीं। उसके पास कोई जवाब नहीं था। उसकी चुप्पी में एक पूरे वर्ग की पीड़ा समाई हुई थी - उस किसान वर्ग की जो सदियों से शोषण का शिकार होता आया था।"
        ]
    },
    {
        id: 2,
        title: "कफन",
        author: "Munshi Premchand",
        authorId: "premchand",
        genre: "short-story",
        language: "hindi",
        year: 1936,
        rating: 4.2,
        description: "कफन प्रेमचंद की एक प्रसिद्ध कहानी है जो गरीबी और सामाजिक विषमता पर करारी टिप्पणी करती है। यह कहानी एक पिता-पुत्र की जोड़ी के इर्द-गिर्द घूमती है जो अपनी ही बहू/पत्नी के कफन के पैसे को शराब पर उड़ा देते हैं। यह कहानी मानवीय असंवेदनशीलता और सामाजिक व्यवस्था के क्रूर यथार्थ को उजागर करती है।",
        cover: "mockups/kafan.png",
        content: [
            "कफन - पृष्ठ 1\n\nझिंगुरी और माधव बैठे थे। अंधेरी रात थी और ठंडी हवा चल रही थी। झोंपड़ी में बुधिया कराह रही थी, लेकिन दोनों को कोई फर्क नहीं पड़ रहा था। उनकी उदासीनता इतनी भयावह थी कि वे अपने ही परिवार के सदस्य की पीड़ा को नजरअंदाज कर रहे थे।",
            "कफन - पृष्ठ 2\n\nजब बुधिया मर गई, तो दोनों को कफन के लिए पैसों की चिंता सताने लगी। गाँव वालों ने मिलकर कुछ पैसे जमा किए। लेकिन उनकी चिंता बुधिया के लिए नहीं, बल्कि अपनी जिम्मेदारी से बचने के लिए थी। उनके लिए मृत्यु भी एक सामान्य घटना मात्र थी।",
            "कफन - पृष्ठ 3\n\nलेकिन पैसे मिलते ही झिंगुरी और माधव ने शराब पीने का निश्चय किया। 'मरने वाली तो चली ही गई, अब यह पैसे कफन पर बर्बाद करने से क्या फायदा?' उनकी यह उक्ति समाज के उस वर्ग की मानसिकता को दर्शाती है जो इतना अभावग्रस्त हो चुका है कि उसके लिए नैतिकता और मानवीय संवेदनाएँ विलासिता बन चुकी हैं।"
        ]
    },
    {
        id: 3,
        title: "तमस",
        author: "Bhisham Sahni",
        authorId: "bhisham",
        genre: "novel",
        language: "hindi",
        year: 1974,
        rating: 4.7,
        description: "तमस भीष्म साहनी का विभाजन पर आधारित प्रसिद्ध उपन्यास है जो 1947 के दंगों की मार्मिक कहानी कहता है। यह सांप्रदायिक हिंसा के भयावहता और मानवीय संबंधों के टूटने की कहानी है। उपन्यास में विभाजन की त्रासदी को बहुत ही मार्मिक ढंग से चित्रित किया गया है जहाँ धर्म के नाम पर लोगों को एक-दूसरे का दुश्मन बना दिया गया।",
        cover: "mockups/tams.png",
        content: [
            "तमस - पृष्ठ 1\n\nशहर में अफवाहें फैल रही थीं। हिन्दू और मुसलमान एक-दूसरे को शक की निगाह से देखने लगे थे। नथूराम ने अपनी दुकान बंद कर दी। वह समझ नहीं पा रहा था कि कैसे उसके अपने पड़ोसी, जिनके साथ उसने सालों गुज़ारे थे, अचानक उसके लिए खतरा बन गए थे।",
            "तमस - पृष्ठ 2\n\nजब पहली हिंसा हुई, तो सब हैरान रह गए। कोई नहीं समझ पा रहा था कि यह सब कैसे शुरू हुआ। एक छोटी सी झड़प ने कैसे इतना बड़ा रूप ले लिया। लोग जो कल तक एक साथ रहते थे, आज एक-दूसरे के खून के प्यासे हो गए थे।",
            "तमस - पृष्ठ 3\n\nउपन्यास का अंत एक प्रश्न के साथ होता है - क्या धर्म इंसानियत से बड़ा है? भीष्म साहनी ने इस उपन्यास के माध्यम से यह संदेश दिया है कि सांप्रदायिकता किसी समाज के लिए सबसे बड़ा अभिशाप है।"
        ]
    },
    {
        id: 4,
        title: "आत्मबोध",
        author: "Adi Shankaracharya",
        authorId: "AdiShankaracharya",
        genre: "granth",
        language: "hindi",
        year: 1966,
        rating: 4.1,
        description: "'आत्मबोध' आदि शंकराचार्य द्वारा रचित उन ग्रथों में से है जो एक शुरुआती साधक को आत्म-साक्षात्कार के पथ पर आगे बढ़ने में मदद करता है। आत्मबोध का शाब्दिक अर्थ होता है 'स्वयं को जानना'। हमारे सारे कष्टों और दुःखों के मूल में यही कारण है कि हम स्वयं से पूरी तरह अनभिज्ञ हैं।",
        cover: "mockups/aatmabodh.png",
        content: [
            "इस ग्रंथ में शंकराचार्य ने बोध (ज्ञान) और आत्मा के स्वरूप को समझाने के लिए उदाहरणों (दृष्टांतों) का प्रयोग किया है। वे बताते हैं कि जिस प्रकार सूर्य के उदय होते ही अंधकार समाप्त हो जाता है, उसी प्रकार आत्मज्ञान प्राप्त होने से अज्ञान नष्ट हो जाता है। मनुष्य की अज्ञानता ही संसार के दुखों का कारण है, और आत्मबोध से ही इससे मुक्ति मिलती है।आत्मा शुद्ध, स्थायी, और परम सत्य है, जिसे मन और इंद्रियों से जाना नहीं जा सकता। केवल आत्मज्ञान से ही मोक्ष संभव है, और यह ज्ञान गुरु कृपा व स्वाध्याय से प्राप्त होता है।जैसे ग्रहण के समय चंद्रमा पर छाया पड़ती है, वैसे ही अज्ञान आत्मा पर पर्दा डाल देता है, लेकिन ज्ञान रूपी सूर्य से यह छाया हट जाती है।"
        ]
    },
    {
        id: 6,
        title: "आँधी",
        author: "Nagarjun",
        authorId: "nagarjun",
        genre: "play",
        language: "hindi",
        year: 1966,
        rating: 4.1,
        description: "आँधी नागार्जुन का प्रसिद्ध नाटक है जो सामाजिक परिवर्तन और क्रांति की आवश्यकता पर प्रकाश डालता है। यह नाटक ग्रामीण भारत के संघर्षों और सामंतवादी व्यवस्था के विरुद्ध जनजागरण की कहानी कहता है। नागार्जुन ने इस नाटक में सामाजिक अन्याय के विरुद्ध आवाज उठाई है और दिखाया है कि कैसे सामूहिक जागरूकता से व्यवस्था को बदला जा सकता है।",
        cover: "mockups/aandhi.jpg",
        content: [
            "आँधी - पृष्ठ 1\n\nगाँव के चौपाल पर लोग जमा थे। जमींदार के नए करों ने सबकी कमर तोड़ दी थी। रामदीन ने कहा - 'अब हमें इस अन्याय के खिलाफ आवाज़ उठानी होगी।' उसकी आवाज़ में गुस्सा था, पर उसकी आँखों में डर भी साफ झलक रहा था। वह जानता था कि जमींदार के खिलाफ बोलने का मतलब क्या हो सकता है, पर अब चुप रहना उसके लिए संभव नहीं था।",
            "आँधी - पृष्ठ 2\n\nजमींदार के लठैतों ने रामदीन को पीटा, पर वह डरा नहीं। उसकी आवाज़ और भी तेज हो गई - 'हम मजदूर हैं, हमारे बिना तुम्हारे खेतों में अनाज नहीं उगेगा।' उसकी इस हिम्मत ने अन्य गाँव वालों को भी प्रेरित किया। धीरे-धीरे लोगों ने समझना शुरू किया कि उनकी ताकत उनकी एकता में है।",
            "आँधी - पृष्ठ 3\n\nधीरे-धीरे पूरा गाँव जाग उठा। औरतों ने भी हाथ में हल चलाने के बजाय झाड़ू-बेलन उठा लिए। आँधी आ चुकी थी, और इस बार यह बदलाव की आँधी थी। जमींदार को झुकना पड़ा, और गाँव वालों ने सीखा कि अन्याय के खिलाफ एकजुट होकर खड़े होने से ही परिवर्तन संभव है। नागार्जुन ने इस नाटक के माध्यम से यह संदेश दिया कि क्रांति की शुरुआत एक ही व्यक्ति के साहस से हो सकती है।"
        ]
    },
    {
        id: 7,
        title: "गुनाहों का देवता",
        author: "Dharamvir Bharati",
        authorId: "bharati",
        genre: "novel",
        language: "hindi",
        year: 1949,
        rating: 4.6,
        description: "गुनाहों का देवता धर्मवीर भारती का प्रसिद्ध उपन्यास है जो प्रेम, नैतिकता और समर्पण की गाथा है। यह उपन्यास सुधा और चंदर के प्रेम की कहानी कहता है जहाँ चंदर का प्रेम इतना पवित्र है कि वह सुधा के सुख के लिए अपने प्रेम का त्याग कर देता है। यह उपन्यास हिंदी साहित्य के सर्वश्रेष्ठ प्रेम कथाओं में से एक माना जाता है।",
        cover: "mockups/gunaahon ka devta.png",
        content: [
            "गुनाहों का देवता - पृष्ठ 1\n\nचंदर ने सुधा को पहली बार कॉलेज के उस वार्षिकोत्सव में देखा था जब वह मंच पर कविता पाठ कर रही थी। उसकी आवाज़ में एक मादकता थी जिसने चंदर के हृदय को छू लिया। पर चंदर जानता था कि सुधा उसकी मित्र पम्मी की छोटी बहन है, और उसके लिए वह केवल एक बड़े भाई की तरह ही हो सकता है।",
            "गुनाहों का देवता - पृष्ठ 2\n\nजैसे-जैसे समय बीता, चंदर का प्रेम और गहरा होता गया, पर उसने कभी इसे व्यक्त नहीं किया। उसने सुधा के सपनों को पूरा करने में ही अपनी खुशी ढूँढ़ी। जब सुधा ने देवेन्द्र से विवाह किया, तो चंदर ने अपनी भावनाओं को दबाकर उसके सुख की कामना की।",
            "गुनाहों का देवता - पृष्ठ 3\n\nसुधा को जब चंदर के प्रेम का पता चला, तब तक बहुत देर हो चुकी थी। उसने समझा कि कैसे चंदर ने स्वार्थरहित प्रेम की नई परिभाषा लिखी थी। चंदर के इस त्याग और समर्पण ने उसे सच्चे अर्थों में 'गुनाहों का देवता' बना दिया था - एक ऐसा देवता जिसने प्रेम के नाम पर सब कुछ दे दिया, पर कुछ माँगा नहीं।"
        ]
    },
    {
        id: 8,
        title: "मैला आंचल",
        author: "Phanishwar Nath Renu",
        authorId: "renu",
        genre: "novel",
        language: "hindi",
        year: 1954,
        rating: 4.4,
        description: "मैला आंचल फणीश्वर नाथ रेणु का प्रसिद्ध उपन्यास है जो ग्रामीण भारत के जीवन का यथार्थ चित्रण प्रस्तुत करता है। यह उपन्यास बिहार के एक छोटे से गाँव मेरीगंज की कहानी कहता है जहाँ डॉक्टर प्रशांत गाँव वालों के जीवन में बदलाव लाने की कोशिश करता है। यह उपन्यास ग्रामीण समाज की जटिलताओं, अंधविश्वासों और राजनीतिक चालबाजियों को बहुत ही सजीव ढंग से प्रस्तुत करता है।",
        cover: "mockups/maila aanchal.png",
        content: [
            "मैला आंचल - पृष्ठ 1\n\nडॉक्टर प्रशांत जब पहली बार मेरीगंज पहुँचा, तो उसे लगा मानो वह समय से कई दशक पीछे चला आया हो। गाँव की गंदगी, गरीबी और अंधविश्वासों ने उसे झकझोर दिया। पर उसने ठान लिया कि वह इस गाँव की तस्वीर बदलकर रहेगा। उसने न सिर्फ एक डिस्पेंसरी खोली, बल्कि लोगों के मन में शिक्षा और स्वच्छता का बीज बोने का प्रयास किया।",
            "मैला आंचल - पृष्ठ 2\n\nलेकिन गाँव की राजनीति और जमींदार की साजिशों ने डॉक्टर के काम में बाधाएँ खड़ी करनी शुरू कर दीं। जमींदार ने लोगों को भड़काया कि डॉक्टर उनके धर्म और परंपराओं के खिलाफ है। धीरे-धीरे डॉक्टर प्रशांत को अहसास होने लगा कि बीमारियों से ज्यादा खतरनाक लोगों की मानसिकता है।",
            "मैला आंचल - पृष्ठ 3\n\nअंततः डॉक्टर प्रशांत को गाँव छोड़ना पड़ा, पर उसके बीजारोपण का प्रभाव पूरी तरह से नष्ट नहीं हुआ। कुछ युवाओं ने उसके विचारों को आगे बढ़ाया। रेणु ने इस उपन्यास के माध्यम से दिखाया कि सामाजिक परिवर्तन एक धीमी प्रक्रिया है, और इसमें कई बार असफलताएँ भी मिलती हैं, पर हर प्रयास भविष्य के लिए एक नींव रखता है।"
        ]
    },
    {
        id: 9,
        title: "कितने पाकिस्तान",
        author: "Kamleshwar",
        authorId: "kamleshwar",
        genre: "novel",
        language: "hindi",
        year: 2000,
        rating: 4.3,
        description: "यह उपन्यास विभाजन की त्रासदी पर एक नया दृष्टिकोण प्रस्तुत करता है। कमलेश्वर ने इतिहास के उस दौर को पकड़ने की कोशिश की है जब भारत का विभाजन हुआ था। यह उपन्यास न सिर्फ इतिहास बल्कि मानवीय संबंधों और उनके टूटने की कहानी है।",
        cover: "mockups/kitnepaakistaan.png",
        content: [
            "कितने पाकिस्तान - पृष्ठ 1\n\nविभाजन की त्रासदी ने न जाने कितने घर उजाड़ दिए। कमलेश्वर ने इस उपन्यास में उन लोगों की कहानी कही है जो एक दिन अपने ही देश में पराये हो गए। सीमा रेखा खींचते ही लोगों की पहचान बदल गई, उनका इतिहास बदल गया।",
            "कितने पाकिस्तान - पृष्ठ 2\n\nउपन्यास का नायक अपने अतीत को टटोलता है, उन रिश्तों को याद करता है जो अचानक दुश्मन हो गए। कैसे धर्म ने लोगों को बाँट दिया, यह प्रश्न उपन्यास में बार-बार उठता है। कमलेश्वर ने दिखाया है कि विभाजन सिर्फ भूमि का नहीं, मन का भी था।",
            "कितने पाकिस्तान - पृष्ठ 3\n\nअंत में नायक समझता है कि पाकिस्तान सिर्फ एक नहीं, कई हैं। हर उस व्यक्ति के भीतर जिसने अपनों को खोया, एक पाकिस्तान बसता है। यह उपन्यास स्मृतियों के उस पाकिस्तान की खोज है जो हर विभाजन-पीड़ित के मन में रहता है।"
        ]
    },
    {
        id: 10,
        title: "एक लड़की",
        author: "Amrita Pritam",
        authorId: "amrita",
        genre: "novel",
        language: "hindi",
        year: 1968,
        rating: 4.2,
        description: "यह उपन्यास एक स्त्री के संघर्ष और आत्मनिर्भर बनने की कहानी है। अमृता प्रीतम ने नारी मन की गहरी समझ को इस उपन्यास में उतारा है। मुख्य पात्र पूरबी के माध्यम से लेखिका ने स्त्री की आजादी, उसके सपनों और समाज की बेड़ियों को दर्शाया है।",
        cover: "mockups/ekladki.jpg",
        content: [
            "वो लड़की - पृष्ठ 1\n\nपूरबी जब पहली बार शहर आई तो उसके मन में डर था, पर सपने भी थे। उसने कभी नहीं सोचा था कि वह अपने पैरों पर खड़ी हो सकेगी। परिस्थितियों ने उसे मजबूर किया कि वह अपने लिए लड़ना सीखे। अमृता प्रीतम ने पूरबी के माध्यम से उस स्त्री का चित्रण किया है जो परंपरा और आधुनिकता के बीच संतुलन बनाने की कोशिश करती है।",
            "वो लड़की - पृष्ठ 2\n\nपूरबी का प्रेम प्रसंग उपन्यास का महत्वपूर्ण हिस्सा है। लेकिन यह प्रेम उसके लिए मुक्ति नहीं बन पाता। अंततः उसे समझ आता है कि सच्ची आजादी दूसरों पर निर्भरता से मुक्ति में है। वह अपने पैरों पर खड़ी होने का निश्चय करती है।",
            "वो लड़की - पृष्ठ 3\n\nउपन्यास का अंत आशावादी है। पूरबी अपने संघर्षों से सीख लेकर एक स्वतंत्र जीवन की शुरुआत करती है। अमृता प्रीतम ने इसके माध्यम से यह संदेश दिया है कि स्त्री की असली मुक्ति उसके आत्मविश्वास में निहित है।"
        ]
    },
    {
        id: 11,
        title: "सूरज का सातवाँ घोड़ा",
        author: "Dharamvir Bharati",
        authorId: "bharati",
        genre: "short-story",
        language: "hindi",
        year: 1952,
        rating: 4.5,
        description: "यह धर्मवीर भारती की प्रसिद्ध कहानी संग्रह है जिसमें उनकी सर्वश्रेष्ठ कहानियाँ संकलित हैं। इन कहानियों में मानवीय संवेदनाओं, रिश्तों और समाज की विसंगतियों को बहुत ही सूक्ष्मता से चित्रित किया गया है। शीर्षक कहानी 'सूरज का सातवाँ घोड़ा' तो हिंदी साहित्य की क्लासिक कहानियों में गिनी जाती है।",
        cover: "mockups/suraj.jpg",
        content: [
            "सूरज का सातवाँ घोड़ा - पृष्ठ 1\n\nकहानी का नायक सुबह सुबह उठकर सूरज को सात घोड़ों पर सवार होकर आते देखता है। यह दृश्य उसे इतना मोहित कर देता है कि वह पूरे दिन उसी के बारे में सोचता रहता है। उसकी यह कल्पनाशीलता उसे आम लोगों से अलग बनाती है। धर्मवीर भारती ने इस कहानी में साधारण जीवन में छिपे असाधारण पहलुओं को उजागर किया है।",
            "सूरज का सातवाँ घोड़ा - पृष्ठ 2\n\nनायक की इस कल्पनाशीलता को समाज समझ नहीं पाता। उसे पागल समझा जाने लगता है। लेकिन एक बच्ची उसकी कल्पनाओं में शामिल हो जाती है। यह दिखाता है कि कैसे बच्चों का मन अभी भी कल्पनाओं के लिए खुला होता है। कहानी में यथार्थ और कल्पना का सुंदर समन्वय है।",
            "सूरज का सातवाँ घोड़ा - पृष्ठ 3\n\nकहानी का अंत दार्शनिक है। नायक समझता है कि सूरज का सातवाँ घोड़ा वास्तव में उसकी अपनी आत्मा है जो उसे सच्चाई की ओर ले जाना चाहती है। धर्मवीर भारती ने इस कहानी के माध्यम से यह संदेश दिया है कि मनुष्य को अपनी आंतरिक आवाज़ सुननी चाहिए, चाहे समाज उसे कुछ भी समझे।"
        ]
    },
    {
        id: 13,
        title: "झूठा सच",
        author: "Yashpal",
        authorId: "yashpal",
        genre: "novel",
        language: "hindi",
        year: 1958,
        rating: 4.6,
        description: "यह यशपाल का महाकाव्यात्मक उपन्यास है जो भारत के विभाजन और उसके बाद की स्थितियों पर आधारित है। यह उपन्यास दो भागों में है - 'वतन और देश' तथा 'देश का भविष्य'। यशपाल ने इस उपन्यास में विभाजन की त्रासदी, राजनीतिक षड्यंत्रों और साम्प्रदायिक हिंसा को बहुत ही यथार्थपरक ढंग से चित्रित किया है।",
        cover: "mockups/jhutasach.jpg",
        content: [
            "झूठा सच - पृष्ठ 1\n\nउपन्यास की शुरुआत लाहौर के एक मध्यवर्गीय परिवार से होती है जो विभाजन की आँधी में फँस जाता है। यशपाल ने बताया है कि कैसे सामान्य लोगों का जीवन अचानक राजनीतिक फैसलों से बदल जाता है। परिवार के सदस्यों को अपना घर छोड़कर भागना पड़ता है, और वे भारत आकर शरणार्थी बन जाते हैं।",
            "झूठा सच - पृष्ठ 2\n\nउपन्यास का दूसरा भाग भारत में शरणार्थियों के पुनर्वास और नए समाज के निर्माण की कहानी कहता है। यशपाल ने दिखाया है कि कैसे विभाजन ने न सिर्फ भूगोल बल्कि लोगों के मन को भी बाँट दिया। उपन्यास में राजनीतिक दलों की भूमिका, साम्प्रदायिक ताकतों के उदय और आम आदमी की पीड़ा को विस्तार से दर्शाया गया है।",
            "झूठा सच - पृष्ठ 3\n\nयशपाल ने उपन्यास के अंत में यह प्रश्न उठाया है कि क्या स्वतंत्रता के बाद का भारत वास्तव में वह देश है जिसके लिए लोगों ने संघर्ष किया था। उन्होंने नए राष्ट्र की चुनौतियों और उसके भविष्य पर गंभीर प्रश्न चिन्ह लगाए हैं। 'झूठा सच' नाम ही यह संकेत करता है कि इतिहास के कई पहलू ऐसे हैं जो सच नहीं, बस झूठ का आवरण हैं।"
        ]
    },
    {
        id: 16,
        title: "चित्रलेखा",
        author: "Bhagwati Charan Varma",
        authorId: "bhagwati",
        genre: "novel",
        language: "hindi",
        year: 1934,
        rating: 4.3,
        description: "यह भगवतीचरण वर्मा का प्रसिद्ध उपन्यास है जो प्रेम, नैतिकता और आध्यात्मिक खोज की कहानी है। उपन्यास की नायिका चित्रलेखा एक सुंदर और बुद्धिमान नर्तकी है जो अपनी खोज में विभिन्न पुरुषों के जीवन में उथल-पुथल मचा देती है। यह उपन्यास प्रेम और आध्यात्मिकता के बीच के संबंधों को गहराई से खोजता है।",
        cover: "mockups/chitralekha.jpg",
        content: [
            "चित्रलेखा - पृष्ठ 1\n\nचित्रलेखा एक ऐसी स्त्री थी जिसकी सुंदरता और बुद्धिमत्ता ने सभी को मोहित कर दिया। वह न सिर्फ एक कुशल नर्तकी थी, बल्कि दर्शन और जीवन के गूढ़ रहस्यों में भी उसकी गहरी रुचि थी। उसकी यह खोज उसे विभिन्न पुरुषों के संपर्क में ले आई, जिनमें से प्रत्येक उसके व्यक्तित्व से प्रभावित हुए बिना न रह सका।",
            "चित्रलेखा - पृष्ठ 2\n\nउपन्यास का मुख्य संघर्ष चित्रलेखा और बीजगुप्त के बीच है। बीजगुप्त एक तपस्वी है जो चित्रलेखा के प्रेम में पड़ जाता है। यह प्रेम उसके आध्यात्मिक मार्ग में बाधा बनता है। भगवतीचरण वर्मा ने इस संघर्ष के माध्यम से यह प्रश्न उठाया है कि क्या प्रेम और आध्यात्मिकता एक साथ संभव है?",
            "चित्रलेखा - पृष्ठ 3\n\nउपन्यास का अंत चित्रलेखा के आत्मसाक्षात्कार के साथ होता है। वह समझ जाती है कि सच्चा प्रेम स्वार्थरहित होता है। उसकी यह समझ उसे आध्यात्मिक शांति की ओर ले जाती है। भगवतीचरण वर्मा ने इस उपन्यास के माध्यम से यह संदेश दिया है कि प्रेम और आध्यात्मिकता दोनों ही मनुष्य के जीवन के अभिन्न अंग हैं।"
        ]
    },
    {
        id: 17,
        title: "निर्मला",
        author: "Munshi Premchand",
        authorId: "premchand",
        genre: "novel",
        language: "hindi",
        year: 1927,
        rating: 4.2,
        description: "निर्मला प्रेमचंद का एक महत्वपूर्ण उपन्यास है जो बाल विवाह और वृद्ध पुरुषों के साथ युवा लड़कियों के विवाह की समस्या पर केंद्रित है। निर्मला नामक युवा लड़की को एक वृद्ध विधुर से विवाह करना पड़ता है और उसके बाद के संघर्षों को इस उपन्यास में मार्मिक ढंग से चित्रित किया गया है।",
        cover: "mockups/nirmala premchand.png",
        content: [
            "निर्मला - पृष्ठ 1\n\nनिर्मला एक सुंदर और समझदार युवती थी जिसका विवाह उसकी माँ की मृत्यु के बाद एक वृद्ध विधुर से कर दिया गया। उसके पिता ने यह विवाह सिर्फ इसलिए किया क्योंकि वह अपनी बेटी के लिए एक 'सुरक्षित' भविष्य चाहता था। निर्मला ने इस विवाह को अपनी नियति मान लिया, पर उसका हृदय इसके लिए तैयार नहीं था।",
            "निर्मला - पृष्ठ 2\n\nनिर्मला का पति तोताराम एक अच्छा इंसान था, पर उसकी उम्र निर्मला से तीन गुना अधिक थी। निर्मला को तोताराम के बेटे के साथ अधिक सामंजस्य था, जो उसकी ही उम्र का था। इस स्थिति ने परिवार में तनाव पैदा कर दिया। प्रेमचंद ने इस जटिल स्थिति को बहुत ही संवेदनशील ढंग से चित्रित किया है।",
            "निर्मला - पृष्ठ 3\n\nउपन्यास का अंत निर्मला की त्रासदी के साथ होता है। समाज के नियमों और परंपराओं के बीच वह टूट जाती है। प्रेमचंद ने इस उपन्यास के माध्यम से बाल विवाह और वृद्ध-युवा विवाह जैसी सामाजिक बुराइयों पर करारा प्रहार किया है। यह उपन्यास आज भी प्रासंगिक है क्योंकि ऐसी समस्याएँ समाज में किसी न किसी रूप में विद्यमान हैं।"
        ]
    },

    {
        id: 19,
        title: "अपनी खबर",
        author: "Agneya",
        authorId: "agneya",
        genre: "short-story",
        language: "hindi",
        year: 1961,
        rating: 4.0,
        description: "अपनी खबर अग्नेय की प्रसिद्ध कहानी है जो एक ऐसे व्यक्ति की कहानी कहती है जो समाज से कटकर अपनी ही दुनिया में रहता है। यह कहानी आधुनिक जीवन की एकाकीपन और अलगाव की समस्या को उजागर करती है। अग्नेय ने इस कहानी में मनोवैज्ञानिक गहराई के साथ एक ऐसे चरित्र को चित्रित किया है जो भीड़ में भी अकेला है।",
        cover: "mockups/apnikhabar.jpg",
        content: [
            "अपनी खबर - पृष्ठ 1\n\nकहानी का नायक एक ऐसा व्यक्ति है जो शहर की भीड़ में रहते हुए भी पूरी तरह से अकेला है। वह दफ्तर जाता है, लोगों से मिलता-जुलता है, पर किसी से वास्तविक संपर्क स्थापित नहीं कर पाता। उसकी यह स्थिति आधुनिक जीवन की उस विडंबना को दर्शाती है जहाँ लोग शारीरिक रूप से निकट होते हुए भी भावनात्मक रूप से मीलों दूर होते हैं।",
            "अपनी खबर - पृष्ठ 2\n\nएक दिन नायक को अहसास होता है कि उसकी मृत्यु हो गई है, पर कोई उसे याद नहीं कर रहा। वह अपने ही घर में भूत की तरह घूमता है, पर उसके परिवार वालों को उसकी अनुपस्थिति का भी पता नहीं चलता। यह दृश्य आधुनिक जीवन की उस कठोर सच्चाई को दर्शाता है जहाँ व्यक्ति का अस्तित्व महज एक औपचारिकता बनकर रह जाता है।",
            "अपनी खबर - पृष्ठ 3\n\nकहानी का अंत नायक के आत्मसाक्षात्कार के साथ होता है। वह समझ जाता है कि उसने अपनी वास्तविकता से मुँह मोड़ लिया था। अग्नेय ने इस कहानी के माध्यम से यह संदेश दिया है कि मनुष्य को अपने अस्तित्व के प्रति सजग रहना चाहिए, नहीं तो वह जीते-जी मर जाता है।"
        ]
    },
];

const booksContainer = document.getElementById('books-container');
const searchInput = document.getElementById('search-input');
const genreFilter = document.getElementById('genre-filter');
const authorFilter = document.getElementById('author-filter');
const languageFilter = document.getElementById('language-filter');
const genreOptions = document.getElementById('genre-options');
const authorOptions = document.getElementById('author-options');
const languageOptions = document.getElementById('language-options');
const previewModal = document.getElementById("preview-modal");
const closePreviewBtn = document.getElementById('close-preview');
const closePreviewBtn2 = document.getElementById('close-preview-btn');
const pageIndicator = document.getElementById('page-indicator');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

let obj = {
    1: "https://rohantewariiiits.github.io/shlok-decode-nsut_hindi_library_swastik/repo_books/godan.pdf",
    2: "https://rohantewariiiits.github.io/shlok-decode-nsut_hindi_library_swastik/repo_books/premchand-kafan.pdf",
    3: "https://rohantewariiiits.github.io/shlok-decode-nsut_hindi_library_swastik/repo_books/Tamas%20by%20Sahni%20Bhisham.pdf",
    4: "https://rohantewariiiits.github.io/shlok-decode-nsut_hindi_library_swastik/repo_books/106.%20%20Atma%20Bodha%20of%20Shankaracharya%20-%20Khemraj%20Shri%20Krishna%20Das.pdf",
    6: "https://rohantewariiiits.github.io/shlok-decode-nsut_hindi_library_swastik/repo_books/2015.481072.andhi.pdf",
    7: "https://rohantewariiiits.github.io/shlok-decode-nsut_hindi_library_swastik/repo_books/%E0%A4%97%E0%A5%81%E0%A4%A8%E0%A4%BE%E0%A4%B9%E0%A5%8B%E0%A4%82%20%E0%A4%95%E0%A4%BE%20%E0%A4%A6%E0%A5%87%E0%A4%B5%E0%A4%A4%E0%A4%BE%20%20Gunahon%20Ka%20Devta%20by%20%E0%A4%A7%E0%A4%B0%E0%A5%8D%E0%A4%AE%E0%A4%B5%E0%A5%80%E0%A4%B0%20%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4%E0%A5%80%2C%20Dharmaveer%20Bharti.pdf",
    8: "https://rohantewariiiits.github.io/shlok-decode-nsut_hindi_library_swastik/repo_books/335737-maila-aanchal-ek-vivechan-a384afa1.pdf",
    9: "https://rohantewariiiits.github.io/shlok-decode-nsut_hindi_library_swastik/repo_books/Kitne-Pakistan-Kamleshwar.pdf",
    10: "https://rohantewariiiits.github.io/shlok-decode-nsut_hindi_library_swastik/repo_books/2015.307296.Ek-Ladki.pdf",
    11: "https://rohantewariiiits.github.io/shlok-decode-nsut_hindi_library_swastik/repo_books/Suraj%20Ka%20Saatva%20Ghoda.pdf",
    13: "https://rohantewariiiits.github.io/shlok-decode-nsut_hindi_library_swastik/repo_books/jhoot%20sach.pdf",
    16: "https://rohantewariiiits.github.io/shlok-decode-nsut_hindi_library_swastik/repo_books/Chitra%20Lekha%20of%20Bhagavati%20Charan%20Varma%20Grantha%20Series%2077%20-%20Bharatiya%20Bhandar.pdf",
    17: "https://rohantewariiiits.github.io/shlok-decode-nsut_hindi_library_swastik/repo_books/premchand-nirmala.pdf",
    19: "https://rohantewariiiits.github.io/shlok-decode-nsut_hindi_library_swastik/repo_books/525674-Apni%20Khabar.pdf",


}

let currentGenre = 'all';
let currentAuthor = 'all';
let currentLanguage = 'all';
let currentSearch = '';
let currentBook = null;
let currentPage = 0;
let isLoading = false;




function init() {
    renderBooks();
    setupEventListeners();
}

function renderBooks() {
    booksContainer.innerHTML = '';

    isLoading = true;
    booksContainer.innerHTML = '<div class="loading"><div class="spinner"></div></div>';

    setTimeout(() => {
        isLoading = false;

        const filteredBooks = books.filter(book => {
            const matchesGenre = currentGenre === 'all' || book.genre === currentGenre;
            const matchesAuthor = currentAuthor === 'all' || book.authorId === currentAuthor;
            const matchesLanguage = currentLanguage === 'all' || book.language === currentLanguage;
            const matchesSearch = currentSearch === '' ||
                book.title.toLowerCase().includes(currentSearch) ||
                book.author.toLowerCase().includes(currentSearch) ||
                book.description.toLowerCase().includes(currentSearch) ||
                book.genre.toLowerCase().includes(currentSearch);

            return matchesGenre && matchesAuthor && matchesLanguage && matchesSearch;
        });

        if (filteredBooks.length === 0) {
            booksContainer.innerHTML = `
                        <div class="empty-state">
                            <img src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/media/8a466a80c07b3a5f48d0f7bceebec21d.png" alt="No books found">
                            <h3>No Books Found</h3>
                            <p>We couldn't find any books matching your criteria. Try adjusting your filters.</p>
                            <button class="cta-btn" onclick="resetFilters()">Reset Filters</button>
                        </div>
                    `;
            return;
        }

        booksContainer.innerHTML = '';
        filteredBooks.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            bookCard.innerHTML = `
                        <div class="book-cover">
                            <img src="${book.cover}" alt="${book.title}" loading="lazy">
                            <span class="book-badge">${book.genre}</span>
                            <span class="book-rating">
                                <span class="star">★</span>
                                ${book.rating}
                            </span>
                        </div>
                        <div class="book-info">
                            <h3 class="book-title">${book.title}</h3>
                            <p class="book-author">${book.author}</p>
                            <p class="book-description">${book.description}</p>
                            <div class="book-actions">
                                <button class="preview-btn" data-id="${book.id}">Preview</button>
                                <button class="read-btn" data-id="${book.id}" style="color:white;">
                        <a href="${obj[book.id]}" style="color: inherit; text-decoration: none;">Read Now</a>
                            </button>

                        </div>
                    `;
            booksContainer.appendChild(bookCard);
        });
    }, 800);
}

function resetFilters() {
    currentGenre = 'all';
    currentAuthor = 'all';
    currentLanguage = 'all';
    currentSearch = '';

    document.querySelector('#genre-filter .filter-btn span:first-child').textContent = 'Genre';
    document.querySelector('#author-filter .filter-btn span:first-child').textContent = 'Author';
    document.querySelector('#language-filter .filter-btn span:first-child').textContent = 'Language';
    searchInput.value = '';

    renderBooks();
}

function setupEventListeners() {
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        renderBooks();
    });

    genreFilter.addEventListener('click', (e) => {
        genreFilter.classList.toggle('active');
        authorFilter.classList.remove('active');
        languageFilter.classList.remove('active');
    });

    authorFilter.addEventListener('click', (e) => {
        authorFilter.classList.toggle('active');
        genreFilter.classList.remove('active');
        languageFilter.classList.remove('active');
    });

    languageFilter.addEventListener('click', (e) => {
        languageFilter.classList.toggle('active');
        genreFilter.classList.remove('active');
        authorFilter.classList.remove('active');
    });

    genreOptions.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            currentGenre = e.target.dataset.value;
            const btnText = genreFilter.querySelector('.filter-btn span:first-child');
            btnText.textContent = e.target.textContent;
            genreFilter.classList.remove('active');
            renderBooks();
        }
    });

    authorOptions.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            currentAuthor = e.target.dataset.value;
            const btnText = authorFilter.querySelector('.filter-btn span:first-child');
            btnText.textContent = e.target.textContent;
            authorFilter.classList.remove('active');
            renderBooks();
        }
    });

    languageOptions.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            currentLanguage = e.target.dataset.value;
            const btnText = languageFilter.querySelector('.filter-btn span:first-child');
            btnText.textContent = e.target.textContent;
            languageFilter.classList.remove('active');
            renderBooks();
        }
    });



    booksContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('preview-btn')) {
            const bookId = parseInt(e.target.dataset.id);
            showPreview(bookId);
        } else if (e.target.classList.contains('read-btn')) {
            const bookId = parseInt(e.target.dataset.id);
            showReader(bookId);
        }
    });

    closePreviewBtn.addEventListener('click', () => {
        previewModal.classList.remove('active');
    });
    closePreviewBtn2.addEventListener('click', () => {
        previewModal.classList.remove('active');
    });


    //   readnow buttn update







    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!genreFilter.contains(e.target)) {
            genreFilter.classList.remove('active');
        }
        if (!authorFilter.contains(e.target)) {
            authorFilter.classList.remove('active');
        }
        if (!languageFilter.contains(e.target)) {
            languageFilter.classList.remove('active');
        }
    });
}

function showPreview(bookId) {
    currentBook = books.find(book => book.id === bookId);
    document.getElementById('modal-book-title').textContent = currentBook.title;
    document.getElementById('modal-book-author').textContent = currentBook.author;
    document.getElementById('modal-book-genre').textContent = currentBook.genre;
    document.getElementById('modal-book-description').textContent = currentBook.description;
    document.getElementById('modal-book-cover').src = currentBook.cover;
    document.getElementById('modal-book-rating-value').textContent = currentBook.rating;

    // Add click event listener to the Read Now button
    

    previewModal.classList.add('active');
    const readNowBtn = document.getElementById('read-book-btn');
    readNowBtn.onclick = function () {
        window.location.href = obj[currentBook.id];
    };
}

function showReader(bookId) {
    currentBook = books.find(book => book.id === bookId);
    currentPage = 0;

    document.getElementById('reader-book-title').textContent = currentBook.title;
    updateReaderContent();

    readerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateReaderContent() {
    const readerContent = document.getElementById('reader-content');
    readerContent.innerHTML = `<p>${currentBook.content[currentPage].replace(/\n/g, '</p><p>')}</p>`;

    pageIndicator.textContent = `Page ${currentPage + 1} of ${currentBook.content.length}`;

    prevPageBtn.disabled = currentPage === 0;
    nextPageBtn.disabled = currentPage === currentBook.content.length - 1;
}

function goToPrevPage() {
    if (currentPage > 0) {
        currentPage--;
        updateReaderContent();
        document.getElementById('reader-content').scrollTo(0, 0);
    }
}

function goToNextPage() {
    if (currentPage < currentBook.content.length - 1) {
        currentPage++;
        updateReaderContent();
        document.getElementById('reader-content').scrollTo(0, 0);
    }
}

function closeReader() {
    readerModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

window.resetFilters = resetFilters;

document.addEventListener('DOMContentLoaded', init);
document.addEventListener('DOMContentLoaded', function () {
    const popupButton = document.getElementById('popupButton');
    const popupOverlay = document.getElementById('popupOverlay');
    const closeBtn = document.querySelector('.close-btn');

    // Open popup when button is clicked
    popupButton.addEventListener('click', function () {
        popupOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    // Close popup when close button is clicked
    closeBtn.addEventListener('click', function () {
        popupOverlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });

    // Close popup when clicking outside the content
    popupOverlay.addEventListener('click', function (e) {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close popup when pressing Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && popupOverlay.style.display === 'flex') {
            popupOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Footer Navigation Functions
function handleFooterNavigation(event, section) {
    event.preventDefault();

    switch (section) {
        // Quick Links
        case 'home':
            window.location.href = '#';
            break;
        case 'popular':
            // Scroll to popular books section
            document.querySelector('.popular-books').scrollIntoView({ behavior: 'smooth' });
            break;
        case 'new':
            // Scroll to new releases section
            document.querySelector('.new-releases').scrollIntoView({ behavior: 'smooth' });
            break;
        case 'authors':
            // Scroll to authors section
            document.querySelector('.authors-section').scrollIntoView({ behavior: 'smooth' });
            break;

        // Genres
        case 'novels':
            filterBooksByGenre('novel');
            break;
        case 'stories':
            filterBooksByGenre('short-story');
            break;
        case 'poetry':
            filterBooksByGenre('poetry');
            break;
        case 'plays':
            filterBooksByGenre('play');
            break;

        // Contact
        case 'about':
            showModal('about-modal');
            break;
        case 'help':
            showModal('help-modal');
            break;
        case 'feedback':
            showModal('feedback-modal');
            break;
        case 'privacy':
            showModal('privacy-modal');
            break;
    }
}

function filterBooksByGenre(genre) {
    // Hide all books
    const allBooks = document.querySelectorAll('.book-card');
    allBooks.forEach(book => {
        book.style.display = 'none';
    });

    // Show only books of selected genre
    const genreBooks = document.querySelectorAll(`.book-card[data-genre="${genre}"]`);
    genreBooks.forEach(book => {
        book.style.display = 'block';
    });
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Add event listeners to footer links
document.addEventListener('DOMContentLoaded', function () {
    // Quick Links
    document.querySelector('footer a[href="#"]').addEventListener('click', (e) => handleFooterNavigation(e, 'home'));
    document.querySelector('footer a[href="#popular-books"]').addEventListener('click', (e) => handleFooterNavigation(e, 'popular'));
    document.querySelector('footer a[href="#new-releases"]').addEventListener('click', (e) => handleFooterNavigation(e, 'new'));
    document.querySelector('footer a[href="#authors"]').addEventListener('click', (e) => handleFooterNavigation(e, 'authors'));

    // Genres
    document.querySelector('footer a[href="#novels"]').addEventListener('click', (e) => handleFooterNavigation(e, 'novels'));
    document.querySelector('footer a[href="#short-stories"]').addEventListener('click', (e) => handleFooterNavigation(e, 'stories'));
    document.querySelector('footer a[href="#poetry"]').addEventListener('click', (e) => handleFooterNavigation(e, 'poetry'));
    document.querySelector('footer a[href="#plays"]').addEventListener('click', (e) => handleFooterNavigation(e, 'plays'));

    // Contact
    document.querySelector('footer a[href="#about"]').addEventListener('click', (e) => handleFooterNavigation(e, 'about'));
    document.querySelector('footer a[href="#help"]').addEventListener('click', (e) => handleFooterNavigation(e, 'help'));
    document.querySelector('footer a[href="#feedback"]').addEventListener('click', (e) => handleFooterNavigation(e, 'feedback'));
    document.querySelector('footer a[href="#privacy"]').addEventListener('click', (e) => handleFooterNavigation(e, 'privacy'));
});

// Handle feedback form submission
document.getElementById('feedback-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you would typically send this data to your backend
    console.log('Feedback submitted:', { name, email, message });

    // Show success message
    alert('Thank you for your feedback!');

    // Clear form and close modal
    this.reset();
    document.getElementById('feedback-modal').style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', function (e) {
    const modals = document.getElementsByClassName('modal');
    for (let modal of modals) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    }
});

// Handle escape key to close modals
window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const modals = document.getElementsByClassName('modal');
        for (let modal of modals) {
            modal.style.display = 'none';
        }
    }
});

// Handle modal opening
document.querySelectorAll('.modal-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

