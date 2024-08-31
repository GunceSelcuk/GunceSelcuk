import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { useState } from 'react';
import './Agreement.css'; // Create and import your CSS file

const photos = [
    { imgSrc: "./images/tadelleBeyaz.jpeg", title: "Tadellee" },
    { imgSrc: "./images/Miniş.jpg", title: "Precious Miniş" },
    // Add more photos similarly
];

const Agreement = () => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const handleAccordionChange = (event, isExpanded) => {
        setIsAccordionOpen(isExpanded);
    };

    return (
        <div className="agreement-container">
            <section className="agreement-section">
                <h1 className="agreement-title">The Agreement</h1>
                <div className="agreement-content">
                    <h3>Karşı cinsle hal ve hareketlerde dikkat edilmesi gereken huşular:
                    </h3>
                    <ul>
                        <li>0- Karşı taraf sözleşmenin tarafının yanında olsaydı gördüğünden rahatsız olmayacak davranışlar, usturuplu davranıştır. Çiftlerin birbirini yokluklarında dahi temsil görevi, ilişkinin esasıdır. 
                        </li>
                        <li>1.1- sarılma gibi temas gereken durumlar sadece selamlaşırken ve vedalaşırken çok uzun süreli olmamak kaydıyla
                        </li>
                        <li>1.2- karşı cinsle baş başa bir yerlere gidilmemesi/buluşulmaması
                        </li>
                        <li>1.2.1- karşı taraf bizle buluşmak için teklif verdiğinde, bu istisna durumu olarak çiftler arasında tartışılacaktır. 3. taraf, ilişkinin oluşumundan sonra, çiftlerden birinin hayatına girmişse, 		baş başa görüşülmez, sevgiliyle tanıştırılır, bundan sonrası için olacaksa grupla ya da beraberce dışarı çıkılır. 
                        </li>
                        <li>1.2.2- bu şekildeki istisnai durumlarda HER DAİM haber verilmesi ve fotoğraf, konum gönderilmesi iletişimin kapanmaması ESAStır.
                        </li>
                        <li>1.3- grup olarak bir yerlere gidiliyorsa planın vuku bulduğu an haber edilmesi, plana dahil olanların isimlerinin verilmesi
                        </li>
                        <li>1.3.1- grupta özellikle karşı cins varsa, aktivite, mekan değişiklikleri, yapılanlar haberdar edilir, karşı tarafa unutulmadığı gösterilir, aklımdasın mesajı verilir. 
                        </li>
                        <li>1.4- mesajlarda usturuplu konuşulması fazla samimiyete gidilmemesi

                        </li>
                        <li>1.5- karşı cinsle ayrıca bir eve girilmemesi, grup istisna olabilir. ama alkol alınamaz, akşam vaktinden sonrasında grup içinde dahi olsa kapalı mekanda gereğinden fazla kalınamaz. 
                        </li>
                        <li>1.6- mücbir sebep halleri: spontane gelişen olaylar mücbir sebep kapsamına girmez. Spontaneden kasıtlara genişletilebilecek şekilde örnekler: grubun dağılması ve karşı cinsle baş başa kalınması, 	ayaküstü sohbetin devamının getirilmesi, can sıkıntısından kaynaklı yürüyüş ihtiyacının karşı cinsle giderilmesi. sen yokken o vardı bahanesi sayılmaz. O davet etti kıramadım, beraber oturduk. zaten 	yanımızda insanlar vardı, gündüz vaktiydi. arabasına bindim, beni okula kadar bıraktı. ikimizdik ama 5 dakika anca kalmışımdır. eski arkadaşım, buluşmak için yazmış, ikimiz olacağız. 
 
                        </li>
                        <li>1.7- haber verilmeden dışarıya çıkıldığında bahane olarak rastlantı oldu, haber vermeyi unuttum denemez, rastlantı olduğunda 5 saniyesini ayırıp haber etmeyen taraf, sözleşmenin diğer tarafına saygı	           
	duymadığını alenen beyan etmiş olur.
</li>
                        <li>1.8- bilinçli bir şekilde geç haber verilemez. 5-10 dakika kafa yoğunluğu dışındaki haller için geçerli. (küslük, ağır kavga durumları maddenin istisnasını oluşturur.) 
                        </li>
                        <li>1.9- çok yoğunum şu sıralar, bu kadar beni darlamasan olur mu? geçerli bir bahane değildir. + 
                        </li>
                        <li>1.10- kızlı erkekli grup olarak dışarı çıkılacağı zaman izlenecek kurallar ?????????????????????????????????????????????
                        </li>
                        <li>1.11- kızlar yanlarında erkek getirdi, bana haber vermediler, oturmak durumunda kaldık gibi durumlarda "dahi" haber edilecektir. sonrasındaki işleyiş, oturma ve kalkma durumu, durumun akışına göre 	çiftin iletişimi ile belirlenecektir.  </li>
                        <li>1.10.1- çiftin birbirinden kalkmasını isteyebileceği durumlar: 
                        </li>
                        <li>1- aynı cins arkadaşın getirdiği karşı cinsin grubun kız/erkek üye sayısına eşit ya da daha fazla olması durumunda hemen değil ancak haber edilmek kaydıyla 1 saatten çok durulmaması gerekir.
                        </li>
                    </ul>
                    <h3>2- Çiftin arasında yaşananların 3. taraflar ile paylaşılması ile ilgili hususlar:
                    </h3>
                    <ul>
                        <li>2.1- ilişkideki mutsuzluklar kadar aşırı mutluluklar da 3. taraflar ile paylaşılmayacaktır. Kapsamı: aşna fişne işleri, gereksiz detay şüphesi taşıyan her şeyin karşı tarafa danışılarak anlatılabilir. 	Gereksiz detay olduğu düşünülmeyen hallerde, 1. dereceden aile üyeleri dışında yabancılarla paylaşılması söz konusu olacak olan bilgi, çiftlerden  birinin vücudu / ailesi / işi/ duygusu / zayıflıkları 	/korkuları / ekonomik durumu / kişisel bilgilerini içeriyorsa, danışıklı paylaşılabilir.
                        </li>
                        <li>2.2- cinselliğin detaylandırılmaması. Detayın tanımı: yalnızca "aynı cins" arkadaş ile üstünkörü paylaşılacak. 	
                        </li>
                        <li>2.3- kavgada söylenenler paylaşılmaz. Ayıbı kapatmak yalnızca mutluluk hallerine mahsus değildir, partnere duyulan saygıdan ötürü iyilikte ve kötülükte dahi ayıplar örtülür, kişide kalır. 
                        </li>
                    </ul>
                    <h3>3- Karşı tarafın hislerini değerlendirirken dikkat edilecek hususlar:
                    </h3>
                    <ul>
                        <li>3.1- "Buna mı alındın?" " Amma alıngansın" "Tribini çekemem" "Arıza çıkartma" "Amma taktın boş yere" "Senin aşağılık duygundan ben sorumlu değilim" "Arkadaşların bile sana böyle davranıyorsa benden ne 	bekliyorsun" "Arkadaşlarım ile asla sorun yaşamazken tek sorun yaşadığım sensin" "Seninle evli değilim" sözleri ve bunun mahiyetini kapsamına alabilecek hiçbir söz, diğerine saygı duyduğunu iddia eden çiftlerden biri tarafından sarf edilemez. 
                        </li>
                        <li>3.2- Nahifliğin cepte görülmesi/kanıksanması. nankörlük yapmayalım 
                        </li>
                        <li>3.3- Kıymet bilmemek. Herkese karşı böyle olunmazken, bu hususi tavrın tekilliğini unutmak. Sadece bana böyle davrandığını unutmak.

                        </li>
                    </ul>
                    <h3>4- Küslük hallerinde dikkat edilecek hususlar:
                    </h3>
                    <ul>
                        <li>4.1- Aramaların küslük halinde dahi açılması, ortaklığın nihayete ermediğini ifade eder. Bu güveni vermek istemeyen taraf, olası sonuçlarına katlanmayı göze almış olacaktır. 
                        </li>
                        <li>4.2- Küslük durumunda ortaklığın bitmediğine dair bir işaret verilir. "Sana dargınım ama bu seni sevmediğim/sevgimin azalması anlamına gelmiyor."</li>
                    </ul>
                    <h3>5-Dürüstlük hususunda dikkat edilecekler:
                    </h3>
                    <ul>
                        <li>5.1- Yalanın bahanesi olmaz.</li>
                        <li>5.2- Arkadaşların sırrı çiftin de sırrıdır. Geçerliliği bu sözleşmeyle başlar. Geriye yürümez.
                        </li>
                    </ul>
                    <h3>6- Çiftlerin birbirine davranışları
                    </h3>
                    <ul>
                        <li>6.1- Gün içerisinde uzak mesafe olması nedeniyle karşı taraf olabildiğince hayata dahil edilmelidir. Hissedilmeden araya konan her uzaklık, bahanesiz olarak 3,4 saat cevap geçliği ve benzeri, ilişkinin 	değerini kasten düşüren davranış sayılır.</li>
                    </ul>
                    <h3>7- Telefon Gizliliği
                    </h3>
                    <ul>
                        <li>7.1- Çiftler arasında mahrem olacak konu, asla telefon değildir. Taraflar, ilişkide bunca şey paylaşabilen iki insanın karşısındakine telefonunu mahrem saymasını müşterek olarak anlamsız bulduklarını 	kabul ederler. Bu madde bir gün değişecek olursa, taraflardan bunun aksini iddia eden iddiacı, telefonunda "saklamaya değer ve uygunsuz" bir şey taşıdığı zannını kendiliğinden itiraf eder.
                        </li>
                        <li>7.2- 3. Taraflarla kurulan (grup mesajları, bireysel mesajlar, resim alışverişi, video arama kayıtları ve telefon kayıtları, e posta zincirleri, örnek olmak üzere, gizli klasör ve benzeri normalde 	işletim sisteminde açıkça bulunamayacak olan her türlü özellik ve arkasında sakladıkları her türlü veri, veri saklamaya yarayan her türlü hardware) iletişimler incelenmeye ve sorgulanmaya açıktır. 	Herhangi bir cevaplanmayan soru, güven üzerinde kasıtlı yapılmış bir darbe sayılır ve bu durumun tarafın özgür iradesi ile yaratılmış olduğu kabul edilir. 
                        </li>
                        <li>7.2.1- Aynı anda süregelen bir konuşma esnasında çiftlerden biri, diğerinden screenshot istemeye yetkilidir. Gizlilik sözleşmesi ile yasal olarak bağlanmış olan tarafın bunu atma yükümlülüğü 			yoktur, ancak göstereceğini kabul eder. + olağanüstü durumlarda ekran açma.
                        </li>
                        <li>7.3- Harddisk'e bakılması gereken durumlarda, taraflar diğerine ne görebileceğini açıkça ve hiçbir şey saklamadan söyler, bakmaya devam etmek, karşı tarafın sorumluluğudur, karşı taraf, kendisi bakmak 	istediği bir fotoğraf yüzünden karşı tarafa kızamaz, karşı tarafı özen yükümlülüğü ile bağlı tutamaz.???????????? hangi fotoğraflar saklanabilir????????????? 
                        </li>
                    </ul>
                    <h3>8- Açık Giyinme Hususundaki Kurallar
                    </h3>
                    <ul>
                        <li>8.1- S'nin yanındayken serbest. Değilkenki hallerde ise, G'nin empati ve vicdan yeteneğine bağlı olmak kaydıyla kıyafetler özenle seçilecektir. G, herhangi bir kışkırtıcı kıyafetin, S'ye danışıklı 	giyilmediği durumlarda, S'ye nispet yapmak olduğu zannını kabul eder. 
                        </li>
                        <li>8.2- S, zorunda kalmadıkça (ev hali, belirli durumda iki dakika sokağa çıkıp gelme dışında tutularak) gri eşofman giymemeyi taahhüt eder.</li>
                    </ul>
                    <h3>9- Tarafların Sanatkarlığını ilgilendiren hususlar hakkında
                    </h3>
                    <ul>
                        <li>9.1- Tarafların hayatının geçiş evresine şans eseri denk gelmiş herhangi bir "şey" içeren her şey, çiftin o gün içerisinde istese ulaşamayacağı bir mesafede, ilişki boyunca her ne sebepten olursa olsun 	açılmamak şartıyla saklanmakla yükümlüdür. 
                        </li>
                        <li>9.2- Sonrasındaki aşama için taraflardan biri fikir değiştirirse, farklı bir çözüm için tahkim yapılacaktır.</li>
                    </ul>
                    <h3>10- Uzak mesafe hususunda dikkat edilecekler
                    </h3>
                    <ul>
                        <li>10.1- Yüz yüze görüşmenin mümkün oldurulması, tarafların bunun için çaba ve emek sarf etmesi, ilişkideki bağı korumak için esaslı nokta sayılacak, bunu yapmayan taraf sorumluluğunu yerine getirmemiş 	sayılacak, ve olası sonuçları göze aldığını kabul edecektir. "Seni kaybetmeyi göze alıyorum."
                        </li>
                        <li>10.2-  Herhangi bir şüphe, merak, iç daralması, rahatsız edici bir durumda, varsayım yapma sor. bir şeyi sormak isteyip de gururundan ötürü soramıyorsan bunu bir şekilde ifade et. Karşı taraf, soruları 	yargılamadan cevaplayacağını taahhüt eder. 
                        </li>
                    </ul>
                </div>
                <h2>
                Genel Hükümler

bu sözleşmenin kapsamı, makul ve dürüst davranacak bir insanın kapsamıdır. Dürüst davranma, bu sözleşmedeki hakları kullanırken iyi ve doğru hareket etmek, yani dürüst, namuslu, makul, fiilinin neticesini bilen, orta zekalı her insanın benzer hadiselerde takip edecek olduğu yolda hareket etmesi" anlamındadır. 

"Seninle yakınlığımı yeterince hissedemediğim için kırgın hissettiğim durumlarda, beni isteyerek ve gönüllü olarak teselli etmek istediğini bileceğim." "ÖRDEK EMOJİSİ" 



                </h2>
            </section>
        </div>
    );
};

export default Agreement;
