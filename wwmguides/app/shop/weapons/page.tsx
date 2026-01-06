import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Traditional Chinese Weapons (Pre-Song Dynasty) - WWM Guides",
  description: "Explore authentic traditional Chinese weapons from ancient times through the Tang Dynasty, their history, and significance in martial arts culture.",
  keywords: "Chinese weapons, traditional weapons, Tang Dynasty, martial arts, sword, spear, halberd, Where Winds Meet",
};

export default function WeaponsPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb Navigation */}
      <nav className="mb-8 text-sm text-gray-400">
        <Link href="/" className="hover:text-gold transition-colors">
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <Link href="/shop" className="hover:text-gold transition-colors">
          Cultural Items
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-300">Traditional Weapons</span>
      </nav>

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-4 text-white">
          Traditional Chinese Weapons
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          From Ancient Times Through the Tang Dynasty (Pre-Song)
        </p>

        {/* Article Meta Information */}
        <div className="bg-slate-700/80 border border-slate-600 rounded-lg p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Time Period:</span>
              <span className="text-white ml-2">Ancient China - Tang Dynasty (618-907 AD)</span>
            </div>
            <div>
              <span className="text-gray-400">Category:</span>
              <span className="text-white ml-2">Military History & Culture</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-600 text-sm text-gray-400">
            <span>📅 Published: December 30, 2024</span>
            <span className="mx-3">•</span>
            <span>⏱️ 10 min read</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        {/* Introduction Section */}
        <section className="mb-12">
          <p className="text-gray-300 leading-relaxed mb-6">
            Chinese martial arts weapons have a rich history spanning thousands of years. From the Bronze Age through the Tang Dynasty, these weapons evolved from simple tools of war into refined instruments that embodied philosophy, art, and deadly efficiency. In Where Winds Meet, set during the late Tang Dynasty, many of these historical weapons come to life.
          </p>

          <div className="bg-slate-800/30 border-l-4 border-gold p-6 mb-6 rounded-r-lg">
            <p className="text-white text-lg mb-2">
              十八般兵器 (Shíbā Bān Bīngqì)
            </p>
            <p className="text-gray-300 italic">
              &quot;The Eighteen Types of Weapons&quot; - The classical categorization of Chinese martial weapons
            </p>
          </div>
        </section>

        {/* The Four Major Weapons Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            四大名器 - The Four Great Weapons
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            In traditional Chinese martial arts, four weapons are considered supreme and form the foundation of weapons training:
          </p>

          {/* Sword */}
          <div className="bg-slate-700 border border-slate-600 rounded-lg p-6 mb-6">
            <h3 className="font-cinzel text-2xl font-bold mb-4 text-gold">剑 (Jiàn) - The Straight Sword</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">Period</p>
                <p className="text-white">Zhou Dynasty - Tang Dynasty</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Status</p>
                <p className="text-white">&quot;Gentleman of Weapons&quot;</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Philosophy</p>
                <p className="text-white">Elegance & Precision</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Jian is a double-edged straight sword, considered the most noble of all Chinese weapons. During the Spring and Autumn period and Warring States period, bronze Jian were the weapons of aristocrats and scholars. By the Han Dynasty, iron and steel versions became standard military weapons.
            </p>
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <p className="text-white font-semibold mb-2">Characteristics:</p>
              <ul className="list-none space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Double-edged blade, typically 70-80cm in length</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Designed for thrusting, slashing, and precise cuts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Requires mastery of footwork and fluid movements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Associated with Taoist philosophy and literati culture</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Saber */}
          <div className="bg-slate-700 border border-slate-600 rounded-lg p-6 mb-6">
            <h3 className="font-cinzel text-2xl font-bold mb-4 text-gold">刀 (Dāo) - The Saber</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">Period</p>
                <p className="text-white">Shang Dynasty - Tang Dynasty</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Status</p>
                <p className="text-white">&quot;General of Weapons&quot;</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Philosophy</p>
                <p className="text-white">Power & Ferocity</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Dao is a single-edged curved or straight blade, the primary military weapon of Chinese armies for millennia. The Tang Dynasty saw the development of the iconic Tang Dao, one of the finest swords ever made, combining cutting power with flexibility.
            </p>
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <p className="text-white font-semibold mb-2">Notable Types (Pre-Song):</p>
              <ul className="list-none space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span><strong className="text-white">唐刀 (Tang Dao):</strong> The legendary Tang Dynasty saber, featuring a slight curve and pattern-welded steel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span><strong className="text-white">环首刀 (Huanshoudao):</strong> Han Dynasty ring-pommel saber, straight and powerful</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span><strong className="text-white">横刀 (Hengdao):</strong> Standard military saber of Tang infantry</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Spear */}
          <div className="bg-slate-700 border border-slate-600 rounded-lg p-6 mb-6">
            <h3 className="font-cinzel text-2xl font-bold mb-4 text-gold">枪 (Qiāng) - The Spear</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">Period</p>
                <p className="text-white">Ancient Times - Present</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Status</p>
                <p className="text-white">&quot;King of Weapons&quot;</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Philosophy</p>
                <p className="text-white">Range & Aggression</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Called the &quot;King of Weapons,&quot; the spear has been the primary weapon of Chinese infantry since prehistoric times. Simple yet deadly effective, a skilled spearman could defeat multiple sword-wielding opponents through superior reach and speed.
            </p>
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <p className="text-white font-semibold mb-2">Characteristics:</p>
              <ul className="list-none space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Long wooden shaft (2-4 meters) with metal spearhead</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Techniques emphasize thrusting, blocking, and sweeping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Red tassel below the blade to distract enemies and prevent blood from making the shaft slippery</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Staff */}
          <div className="bg-slate-700 border border-slate-600 rounded-lg p-6 mb-6">
            <h3 className="font-cinzel text-2xl font-bold mb-4 text-gold">棍 (Gùn) - The Staff</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">Period</p>
                <p className="text-white">Ancient Times - Present</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Status</p>
                <p className="text-white">&quot;Father of Weapons&quot;</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Philosophy</p>
                <p className="text-white">Simplicity & Versatility</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              The staff is the most fundamental of all weapons—a simple wooden pole that serves as the foundation for learning all other weapons. Monks, peasants, and martial artists alike favored the staff for its accessibility and effectiveness.
            </p>
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <p className="text-white font-semibold mb-2">Types:</p>
              <ul className="list-none space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span><strong className="text-white">齐眉棍 (Qímei Gun):</strong> Eyebrow-level staff, the standard length</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span><strong className="text-white">少林棍 (Shaolin Gun):</strong> Shaolin Temple staff techniques, famous for their power</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Polearms Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            长兵器 - Long Weapons (Polearms)
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gold mb-3">戈 (Gē) - The Dagger-Axe</h3>
              <p className="text-gray-300 text-sm mb-3">
                One of the oldest Chinese weapons, dating to the Shang Dynasty (1600-1046 BC). The Ge features a perpendicular blade mounted on a long pole, designed for hooking and slashing from chariots. It&apos;s the weapon that forms part of the character 武 (wǔ - martial).
              </p>
              <p className="text-gray-400 text-xs italic">
                Historical Note: The Ge largely fell out of use by the Qin Dynasty but remained culturally significant.
              </p>
            </div>

            <div className="bg-gradient-to-r from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gold mb-3">戟 (Jǐ) - The Halberd</h3>
              <p className="text-gray-300 text-sm mb-3">
                Combining elements of the spear and dagger-axe, the Ji is a versatile polearm that can thrust like a spear and hook like a Ge. During the Han Dynasty, the Ji was a symbol of high rank, often ceremonially decorated. Famous wielders include Lü Bu, one of history&apos;s greatest warriors.
              </p>
            </div>

            <div className="bg-gradient-to-r from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gold mb-3">矛 (Máo) - The Pike/Lance</h3>
              <p className="text-gray-300 text-sm mb-3">
                An ancient thrusting weapon similar to the spear but typically heavier and used primarily for thrusting. The Mao was a cavalry weapon during the Tang Dynasty, allowing mounted warriors to strike from horseback with devastating force.
              </p>
            </div>
          </div>
        </section>

        {/* Specialized Weapons Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            奇门兵器 - Exotic & Specialized Weapons
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-700 border border-slate-600 rounded-lg p-5">
              <h3 className="text-lg font-bold text-white mb-2">鞭 (Biān) - The Whip</h3>
              <p className="text-gray-300 text-sm">
                Metal segmented or chain whips, flexible yet devastating. Used to entangle opponents&apos; weapons or strike from unexpected angles.
              </p>
            </div>

            <div className="bg-slate-700 border border-slate-600 rounded-lg p-5">
              <h3 className="text-lg font-bold text-white mb-2">锤 (Chuí) - The Hammer/Mace</h3>
              <p className="text-gray-300 text-sm">
                Heavy blunt weapons designed to crush armor. The paired hammers (双锤) were particularly popular among strongmen.
              </p>
            </div>

            <div className="bg-slate-700 border border-slate-600 rounded-lg p-5">
              <h3 className="text-lg font-bold text-white mb-2">斧 (Fǔ) - The Axe</h3>
              <p className="text-gray-300 text-sm">
                Battle axes ranging from single-handed to massive two-handed varieties. The 大斧 (great axe) required immense strength but could cleave through armor.
              </p>
            </div>

            <div className="bg-slate-700 border border-slate-600 rounded-lg p-5">
              <h3 className="text-lg font-bold text-white mb-2">弓 (Gōng) - The Bow</h3>
              <p className="text-gray-300 text-sm">
                Composite bows made of wood, horn, and sinew. Chinese archery emphasized accuracy and power, with the Tang Dynasty producing some of the finest bows in history.
              </p>
            </div>

            <div className="bg-slate-700 border border-slate-600 rounded-lg p-5">
              <h3 className="text-lg font-bold text-white mb-2">弩 (Nǔ) - The Crossbow</h3>
              <p className="text-gray-300 text-sm">
                China invented the crossbow during the Warring States period. By the Tang Dynasty, repeating crossbows and powerful siege crossbows were in use.
              </p>
            </div>

            <div className="bg-slate-700 border border-slate-600 rounded-lg p-5">
              <h3 className="text-lg font-bold text-white mb-2">双钩 (Shuāng Gōu) - Twin Hooks</h3>
              <p className="text-gray-300 text-sm">
                Paired weapons with curved blades and hooks, used for trapping and disarming. Can link together for extended reach or defense.
              </p>
            </div>
          </div>
        </section>

        {/* Weapon Materials and Craftsmanship Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            Materials & Craftsmanship
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-800/30 border-l-4 border-gold p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-white mb-3">Bronze Age (Shang-Zhou Dynasties)</h3>
              <p className="text-gray-300 leading-relaxed">
                The earliest Chinese weapons were made of bronze—a copper-tin alloy. Bronze swords, spears, and dagger-axes from this period show remarkable craftsmanship, often with intricate decorative patterns and inscriptions.
              </p>
            </div>

            <div className="bg-slate-800/30 border-l-4 border-gold p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-white mb-3">Iron Age (Warring States - Han Dynasty)</h3>
              <p className="text-gray-300 leading-relaxed">
                The transition to iron weapons revolutionized Chinese warfare. Iron swords were longer, stronger, and more accessible than bronze. The Han Dynasty developed advanced smelting techniques.
              </p>
            </div>

            <div className="bg-slate-800/30 border-l-4 border-gold p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-white mb-3">Steel Mastery (Sui-Tang Dynasty)</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                By the Tang Dynasty, Chinese sword-makers had mastered pattern-welding and steel folding techniques. The legendary Tang Dao employed layers of different steel qualities to create blades that were both flexible and extremely sharp.
              </p>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">唐刀 (Tang Dao) - The Pinnacle of Tang Craftsmanship:</p>
                <ul className="list-none space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-gold mr-3">•</span>
                    <span>Pattern-welded steel with visible Damascus-like patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3">•</span>
                    <span>Differential hardening for a hard edge and flexible spine</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3">•</span>
                    <span>Influenced Japanese sword-making after Tang techniques spread to Japan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Weapons in Where Winds Meet Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            Weapons in Where Winds Meet
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Set during the late Tang Dynasty, Where Winds Meet features many of these historical weapons, allowing players to experience authentic Tang-era combat:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-gold/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gold mb-3">Historical Accuracy</h3>
              <p className="text-gray-300 text-sm">
                Weapon designs based on archaeological finds and historical records from the Tang Dynasty, ensuring cultural authenticity.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-gold/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gold mb-3">Diverse Arsenal</h3>
              <p className="text-gray-300 text-sm">
                From elegant straight swords to powerful Tang sabers, spears, and exotic weapons, each with unique movesets and techniques.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-gold/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gold mb-3">Martial Philosophy</h3>
              <p className="text-gray-300 text-sm">
                Each weapon type embodies different martial philosophies and fighting styles, from the gentleman&apos;s sword to the general&apos;s saber.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-gold/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gold mb-3">Master the Craft</h3>
              <p className="text-gray-300 text-sm">
                Players can learn from different schools and masters, each teaching their own interpretation of these ancient weapons.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-lg border-2 border-gold">
            <p className="text-white text-xl text-center mb-4 font-semibold">
              &quot;兵器者，武人之第二生命也&quot;
            </p>
            <p className="text-gray-300 text-center italic">
              &quot;A weapon is a warrior&apos;s second life.&quot;
            </p>
          </div>
        </section>
      </div>

      {/* Back Navigation */}
      <div className="mt-16 pt-8 border-t border-slate-700">
        <Link
          href="/shop"
          className="inline-flex items-center text-gray-400 hover:text-gold transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Cultural Items
        </Link>
      </div>
    </article>
  );
}
