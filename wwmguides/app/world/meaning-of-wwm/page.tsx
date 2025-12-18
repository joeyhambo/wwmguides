import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Meaning of Where Winds Meet - WWM Guides",
  description: "Discover the profound meaning behind the game's Chinese name '燕云十六声' and its connection to history, music, and culture.",
  keywords: "where winds meet, 燕云十六声, yan yun, chinese history, game lore",
};

export default function MeaningOfWWM() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="font-cinzel text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gold transition">Home</Link>
        {" > "}
        <Link href="/world" className="hover:text-gold transition">World of Yan Yun</Link>
        {" > "}
        <span className="text-gray-300">World & Terms</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-4 text-white">
          The Meaning of Where Winds Meet
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Discover the profound meaning behind the game's Chinese name '燕云十六声' and its connection to history, music, and culture.
        </p>

        {/* Article Meta Information */}
        <div className="bg-slate-700/80 border border-slate-600 rounded-lg p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Author:</span>
              <span className="text-white ml-2">无效字符</span>
            </div>
            <div>
              <span className="text-gray-400">Translator:</span>
              <span className="text-white ml-2">向日菇</span>
            </div>
            <div>
              <span className="text-gray-400">Reviewer:</span>
              <span className="text-white ml-2">Unknown</span>
            </div>
            <div>
              <span className="text-gray-400">Source:</span>
              <span className="text-gold ml-2">燕鸣十六声 Where Stories Meet</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-600 text-sm text-gray-400">
            <span>📅 Published: December 16, 2024</span>
            <span className="mx-3">•</span>
            <span>⏱️ 8 min read</span>
          </div>
        </div>
      </header>

      {/* Introduction */}
      <section className="prose prose-invert prose-lg max-w-none mb-12">
        <p className="text-gray-300 leading-relaxed">
          The Chinese name for WWM is <strong className="text-white">"燕云十六声"</strong> (Yān Yún Shí Liù Shēng). This combination of six characters instantly reminds Chinese people of the geographical term <strong className="text-white">"燕云十六州"</strong> (Yān Yún Shí Liù Zhōu).
        </p>

        <div className="bg-slate-700 border border-slate-600 rounded-lg p-6 my-8">
          <p className="text-gray-300 mb-2">"燕云十六<strong className="text-gold">声</strong>" (WWM's Chinese name)</p>
          <p className="text-gray-300">"燕云十六<strong className="text-gold">州</strong>" (A historical geographical term)</p>
        </div>

        <p className="text-gray-300 leading-relaxed">
          Comparing these two phrases, only the final character is different. In fact, WWM's Chinese name is a blend of "燕云十六州" and "十六声". Its story is connected to both "燕云十六州" and "十六声".
        </p>
      </section>

      {/* Part 1: 燕云十六州 */}
      <section className="mb-12">
        <h2 className="font-cinzel text-3xl font-bold mb-6 text-white border-b border-slate-600 pb-3">
          Part 1. 【燕云十六州】
        </h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            "燕云十六州" (Yan Yun Shi Liù Zhou) refers to sixteen prefectures located in northern China, centered around <strong className="text-white">"幽州 Yōuzhōu"</strong> (present-day Beijing) and <strong className="text-white">"云州 Yúnzhōu"</strong> (present-day Datong, Shanxi). During the Spring and Autumn and Warring States periods, the Youzhou region was within the territory of Yan state. Therefore, "燕 Yān" was used to substitute "幽 Yōu" in the Chinese name, resulting in the term "Sixteen Prefectures of Yanyun".
          </p>

          <p>
            Throughout Chinese history, the agrarian Han people of the Central Plains and the nomadic tribes of the northern steppes existed in a constant state of conflict and truce. The Sixteen Prefectures of Yan and Yun lay at the convergence of these two worlds. The Central Plains dynasties used its rugged terrain, rivers, and the extensive Great Wall as a defensive barrier against southern incursions by nomadic cavalry. It can be seen as a sturdy shield held before them.
          </p>

          <div className="my-8 rounded-lg overflow-hidden border border-slate-600">
            <Image
              src="/images/The Meaning of Where Winds Meet 1.jpg"
              alt="Historical map showing the Sixteen Prefectures of Yan and Yun"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>

          <p>
            After the fall of the Tang Dynasty, Chinese history entered a period of great fragmentation. This period was characterized by political instability and frequent dynastic changes. In just over six decades, the Central Plains witnessed the successive rise and fall of the Later Liang, Later Tang, Later Jin, Later Han, and Later Zhou Dynasties, while the Jiangnan region saw the establishment of ten separate regimes, most notably the Southern Tang. This epoch is collectively known as the Five Dynasties and Ten Kingdoms period.
          </p>

          <p>
            Shi Jingtang, a general of the Later Jin Dynasty, coveted the throne. To achieve this, he offered the Sixteen Prefectures of Yan and Yun as a bargaining chip to the Khitan, a rising nomadic power from the north, in exchange for their military assistance. With the help of Khitan cavalry, he invaded the Central Plains, leading to the fall of the Later Tang Dynasty and the establishment of the Later Jin Dynasty (In the game, the boundary stele in Finesteed Hamlet recounts this story).
          </p>

          <p>
            The Khitan established a state in the north called "Liao", which stood in opposition to the Song Dynasty, the unified Han Chinese regime in the Central Plains. Without this crucial northern defensive barrier, Khitan incursions southward became much easier. Although many loyalists and patriots, including the founding emperor of the Song Dynasty, sought to resist the Khitan and reclaim the lost territories, their efforts ultimately ended in failure (In the game, the storyline and characters in Qinghe are largely related to this). The game is set in the third year of the Jianlong reign of the Song Dynasty (962 AD). In actual history, the Sixteen Prefectures of Yan and Yun were not regained by a Han Chinese regime until the first year of Hongwu reign of the Ming Dynasty (1368 AD).
          </p>

          <p>
            The arrival of the Khitan brought profound suffering to the original Han inhabitants of the Yan Yun region. Many were displaced or subjected to inferior status. Their cultural identification with the Han Chinese tradition fueled a deep desire to return to the fold of the Central Plains dynasties. However, it is undeniable that the Liao state implemented a policy of "govern in accordance with local customs", establishing The System of Northern and Southern Administrations — officialdom was divided into northern and southern branches: governing the Khitan people by the Khitan national system, administering the Han people according to the Han system. This approach objectively stabilized the rule of Liao Dynasty and fostered comprehensive integration between different ethnic groups in economic, political, and cultural spheres, representing a relatively successful practice in managing ethnic relations. Today, the Khitan people have been largely assimilated into other ethnic groups, becoming an inseparable part of China's fifty-six ethnic groups.
          </p>

          <p className="text-gold font-semibold">
            Through WWM, we can travel back a thousand years and personally experience that monumental tide of ethnic integration.
          </p>
        </div>
      </section>

      {/* Part 2: 十六声 */}
      <section className="mb-12">
        <h2 className="font-cinzel text-3xl font-bold mb-6 text-white border-b border-slate-600 pb-3">
          Part 2. 【十六声】
        </h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            The <strong className="text-white">"十六声"</strong> (Shí Liù Shēng) is the collective name for the Twelve Pitches and the Four Higher Pitches.
          </p>

          <p>
            The Twelve Pitches form an ancient Chinese musical tone system. During the politically turbulent Five Dynasties and Ten States period, the transmission of traditional music was interrupted. By the Later Zhou Dynasty, Emperor Shizong commissioned Wang Pu to correct the musical pitches. Wang Pu, an expert in music theory, added four higher-pitched tones ("清音" qīng yīn) to the traditional twelve, thus creating the sixteen tones.
          </p>

          <p>
            The four added tones were higher octave notes. High pitches are the most direct and powerful way to express intense emotions, and folk music is often filled with extreme joy, anger, sorrow, and happiness. From the perspective of music history, higher-pitched tones often originated from folk traditions. In other words, Wang Pu's revised sixteen tones incorporated sounds from the common people.
          </p>

          <p className="text-gold font-semibold">
            WWM's use of "十六声" as part of its name aligns with its frequent focus on the lives of ordinary people and reflects its historical perspective centered on them.
          </p>

          <p>
            WWM features a vast number of NPCs, and the development team has invested remarkable effort into them. They are not mere quest-givers but feel like living, breathing individuals with their own lives, stories, daily routines, and social connections (of course, not every single NPC has this depth, but the amount of information is still astonishing. Much of it is even hidden, requiring some deduction). As we wander through the streets and alleys, hearing the various voices of the NPCs and observing the living conditions of people from different social classes and backgrounds, it feels as if we are truly immersed in the streets of the Song Dynasty a millennium ago.
          </p>

          <p>
            If you wish to hear these sixteen tones, you can open the [Compendium] within the game. Its sixteen categories represent sixteen different cultural achievements of ancient China. What makes this system remarkable is how the game transforms abstract tones into vivid natural phenology, reflecting their essence. Each tone is connected to a specific field of cultural significance and is expressed through the sound of a unique traditional Chinese instrument. When you leaf through the Compendium, it unfolds like a poetic natural landscape composed through musical rhythms, allowing you to hear an ancient song of the four seasons, echoing across millennia.
          </p>
        </div>
      </section>

      {/* Part 3: Where Winds Meet */}
      <section className="mb-12">
        <h2 className="font-cinzel text-3xl font-bold mb-6 text-white border-b border-slate-600 pb-3">
          Part 3. 【Where Winds Meet】
        </h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            The <strong className="text-white">"诗经"</strong> (Shī jīng) is the earliest existing collection of Chinese poetry, divided into three sections: <strong className="text-white">风 fēng</strong> (Ballads), <strong className="text-white">雅 yǎ</strong> (Elegances), and <strong className="text-white">颂 sòng</strong> (Hymns). The hymns are solemn temple hymns. The elegances are music for banquets and court, dignified and refined. The ballads are folk songs collected from various regions, diverse in style.
          </p>

          <p>
            WWM incorporates this Feng, Ya and Song (Ballads, Courtly Songs and Sacrificial Hymns) framework into the game. If you look closely, you will see that the task interface has four sections: the Main Story uses a "颂" background, the Lost Chapter is "雅", Encounter and various unusual small tasks are "风", and the Exploration is "游 (Stroll)". In the "风" category quests, we encounter not legendary figures or great heroes, but all sorts of ordinary people with their own joys, angers, sorrows, and pleasures. It could be said that the concept of "风" in Chinese implicitly carries the notion of the common folk.
          </p>

          <p className="text-gold font-semibold text-lg">
            According to this, "Where Winds Meet" just like "Where We Meet".
          </p>

          <p>
            Against the backdrop of the game's turbulent era, destiny forever, every person is as ephemeral as the wind, coming fluttering and departing in haste. The encounters between the young master and each character, and every story experienced in the Jianghu, represent the meeting points of these winds.
          </p>

          <p className="text-gold font-semibold">
            WWM's Chinese and English names essentially express the same meaning - the voices and emotions of ordinary people. And we, the players outside the game, get to perceive each encounter through the eyes of the young master.
          </p>
        </div>
      </section>

      {/* Chinese Character Learning Section */}
      <section className="mb-12">
        <h2 className="font-cinzel text-3xl font-bold mb-6 text-white border-b border-slate-600 pb-3">
          Chinese Character Evolution
        </h2>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            Now, let's temporarily enter a simple Chinese learning segment. If you're interested in Chinese characters, please read on.
          </p>

          {/* 燕 Character */}
          <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
            <h3 className="font-cinzel text-2xl font-bold mb-4 text-white">燕 (Yàn) - Swallow</h3>

            <div className="my-4 rounded-lg overflow-hidden border border-slate-600">
              <Image
                src="/images/The Meaning of Where Winds Meet 2.jpg"
                alt="Evolution of the Chinese character 燕 (Yàn)"
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>

            <p>
              Initially, people simply drew a swallow. Even today, its core meaning remains "燕" (yàn). Swallows like to build nests under eaves, and their arrival signifies the coming of spring. Therefore, in Chinese culture, the swallow is an animal that brings good fortune. Consequently, "燕" also carries meanings of peace and tranquility.
            </p>

            <p>
              During the Western Zhou Dynasty (1044 BC), The Son of Heaven of the Zhou Dynasty enfeoffed the Yan (燕) region (present-day Beijing area) to a member of the royal clan. It gradually developed into a powerful vassal state, <strong className="text-white">"燕国 Yān Guó"</strong> (the State of Yan). Influenced by this, throughout the long subsequent historical process, many regimes established in the Beijing area used "Yan" as their state name.
            </p>
          </div>

          {/* 云 Character */}
          <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
            <h3 className="font-cinzel text-2xl font-bold mb-4 text-white">云 (Yún) - Cloud</h3>

            <div className="my-4 rounded-lg overflow-hidden border border-slate-600">
              <Image
                src="/images/The Meaning of Where Winds Meet 3.jpg"
                alt="Evolution of the Chinese character 云 (Yún)"
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>

            <p>
              Initially, people simply drew a cloud. Later, because the character "云" was borrowed in classical Chinese to mean "to speak", a separate character "雲" was later created by adding the "雨 yǔ (rain)" radical (⻗) to express the original meaning. During the process of Chinese character simplification, "云" was designated as the simplified form of "雲".
            </p>

            <p>
              The area where present-day Datong, Shanxi Province is located, due to its high altitude — like a city in the clouds — was called "Yunzhong Commandery". From the Qin to the Tang Dynasty, its name changed several times before finally being set as <strong className="text-white">"云州 yún zhōu"</strong>, retaining its original connection to the original meaning.
            </p>
          </div>

          {/* 州 Character */}
          <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
            <h3 className="font-cinzel text-2xl font-bold mb-4 text-white">州 (Zhōu) - Prefecture/State</h3>

            <div className="my-4 rounded-lg overflow-hidden border border-slate-600">
              <Image
                src="/images/The Meaning of Where Winds Meet 4.jpg"
                alt="Evolution of the Chinese character 州 (Zhōu)"
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>

            <p>
              In ancient times, people depicted rivers and created three related characters. The character "州 zhōu" originally depicted land within a river. Ancient China used rivers and mountains to demarcate administrative regions, so this character later came to be used specifically for administrative divisions. Its original meaning was replaced by the character "洲 zhōu" (which now means "continent" or "islet").
            </p>
          </div>

          {/* Numbers */}
          <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
            <h3 className="font-cinzel text-2xl font-bold mb-4 text-white">十六 (Shí Liù) - Sixteen</h3>

            <p>
              What is "十六 shí liù"? "十" (ten), "六" (six). Put together, they mean "sixteen".
            </p>

            <p className="mt-4">
              Maybe this pattern looks a bit familiar... Yes, that's the one.
            </p>

            <div className="my-4 rounded-lg overflow-hidden border border-slate-600 inline-block">
              <Image
                src="/images/The Meaning of Where Winds Meet 5.jpg"
                alt="Complete visual representation of 燕云十六州"
                width={200}
                height={200}
                className="h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-r from-slate-700 to-slate-800 border border-gold rounded-lg p-8">
        <p className="text-xl text-gold font-semibold">
          Congratulations! Now you could decode this string of square characters: "燕云十六州"
        </p>
      </section>
    </article>
  );
}
