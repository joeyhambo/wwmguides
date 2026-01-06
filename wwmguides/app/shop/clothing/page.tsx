import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ancient Chinese Clothing (Pre-Song Dynasty) - WWM Guides",
  description: "Discover traditional Chinese garments and historical attire from ancient times through the Tang Dynasty, their cultural significance and evolution.",
  keywords: "Chinese clothing, Hanfu, Tang Dynasty, traditional garments, ancient clothing, historical fashion, Where Winds Meet",
};

export default function ClothingPage() {
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
        <span className="text-gray-300">Ancient Clothing</span>
      </nav>

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-4 text-white">
          Ancient Chinese Clothing
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Traditional Garments from Ancient Times Through the Tang Dynasty
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
              <span className="text-white ml-2">Cultural Heritage & Fashion</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-600 text-sm text-gray-400">
            <span>📅 Published: December 30, 2024</span>
            <span className="mx-3">•</span>
            <span>⏱️ 12 min read</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        {/* Introduction Section */}
        <section className="mb-12">
          <p className="text-gray-300 leading-relaxed mb-6">
            Chinese traditional clothing, known as <span className="text-gold font-semibold">Hanfu (汉服)</span>, has a history spanning over 4,000 years. From the ancient Shang Dynasty through the magnificent Tang Dynasty, Chinese garments evolved from simple robes to elaborate symbols of status, philosophy, and artistic expression. In Where Winds Meet, set during the late Tang Dynasty, you&apos;ll encounter many of these historical garments brought to life.
          </p>

          <div className="bg-slate-800/30 border-l-4 border-gold p-6 mb-6 rounded-r-lg">
            <p className="text-white text-lg mb-2">
              衣冠上国，礼仪之邦
            </p>
            <p className="text-gray-300 italic">
              &quot;A nation of refined clothing and etiquette&quot; - Traditional description of China
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Clothing in ancient China was never just about covering the body—it reflected Confucian values, social hierarchy, and the harmony between heaven, earth, and humanity.
          </p>
        </section>

        {/* Basic Components Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            Basic Components of Traditional Chinese Clothing
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
              <h3 className="font-cinzel text-2xl font-bold mb-4 text-gold">衣裳 (Yī Shang) - Upper and Lower Garments</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                The most ancient form of Chinese clothing consisted of separate upper and lower garments:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">衣 (Yī) - Upper Garment</h4>
                  <p className="text-gray-300 text-sm">
                    A cross-collar robe that wraps right over left (crossing left over right was reserved for the deceased). Features wide sleeves and ties at the waist.
                  </p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">裳 (Shang) - Lower Garment</h4>
                  <p className="text-gray-300 text-sm">
                    A skirt-like garment worn by both men and women in ancient times, later evolving into trousers (袴) for men.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
              <h3 className="font-cinzel text-2xl font-bold mb-4 text-gold">深衣 (Shēn Yī) - The Deep Robe</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Developed during the Zhou Dynasty, the Shenyi connected the upper and lower garments into one piece. This became the standard formal wear for scholars and officials, symbolizing unity and completeness in accordance with Confucian philosophy.
              </p>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">Symbolic Meanings:</p>
                <ul className="list-none space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-gold mr-3">•</span>
                    <span>Square collar represents earth; round hem represents heaven</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3">•</span>
                    <span>Straight seam down the back represents moral uprightness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3">•</span>
                    <span>Wide sleeves represent tolerance and generosity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Dynastic Styles Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            Evolution Through the Dynasties
          </h2>

          {/* Han Dynasty */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gold mb-4 font-cinzel">Han Dynasty (206 BC - 220 AD)</h3>
            <div className="bg-gradient-to-r from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                The Han Dynasty established many clothing traditions that lasted for centuries. The term &quot;Hanfu&quot; literally means &quot;Han clothing,&quot; named after this influential period.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="text-white font-semibold mb-3">Men&apos;s Clothing</h4>
                  <ul className="list-none space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-gold mr-3">•</span>
                      <span><strong className="text-white">襦裙 (Rúqún):</strong> Short jacket with a wrap skirt</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">•</span>
                      <span><strong className="text-white">直裾 (Zhíjū):</strong> Straight-hem robe for everyday wear</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">•</span>
                      <span><strong className="text-white">曲裾 (Qūjū):</strong> Curved-hem robe for formal occasions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Women&apos;s Clothing</h4>
                  <ul className="list-none space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-gold mr-3">•</span>
                      <span><strong className="text-white">曲裾深衣:</strong> Elegant curved-hem robes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">•</span>
                      <span><strong className="text-white">襦裙:</strong> Short top with long flowing skirt</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">•</span>
                      <span>Multiple layers creating graceful silhouettes</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800/50 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">Colors and Status:</p>
                <p className="text-gray-300 text-sm">
                  Colors were strictly regulated by social class. Emperors wore yellow (later becoming the exclusive imperial color), nobles wore purple and crimson, while commoners wore blue, black, and white.
                </p>
              </div>
            </div>
          </div>

          {/* Wei-Jin-Northern and Southern Dynasties */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gold mb-4 font-cinzel">Wei-Jin Period (220-420 AD)</h3>
            <div className="bg-gradient-to-r from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                This period saw a relaxation of strict Confucian dress codes, with scholars and aristocrats favoring more relaxed, flowing garments that reflected Daoist and Buddhist influences.
              </p>

              <ul className="list-none space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span><strong className="text-white">Wide sleeves and loose robes:</strong> Reflecting the &quot;free and easy&quot; philosophy of the Seven Sages of the Bamboo Grove</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span><strong className="text-white">Longer hair and minimal headwear:</strong> Breaking from Han Dynasty formality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span><strong className="text-white">Light fabrics and elegant draping:</strong> Emphasizing natural beauty over rigidity</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tang Dynasty */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gold mb-4 font-cinzel">Tang Dynasty (618-907 AD) - The Golden Age</h3>
            <div className="bg-gradient-to-r from-slate-700 to-slate-800 border-2 border-gold/50 rounded-lg p-6">
              <p className="text-gray-300 leading-relaxed mb-6">
                The Tang Dynasty represents the pinnacle of Chinese cultural achievement, and its clothing reflected the empire&apos;s cosmopolitan, confident spirit. Tang fashion was vibrant, luxurious, and remarkably open-minded, incorporating influences from across the Silk Road.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-800/50 p-5 rounded-lg border-l-4 border-gold">
                  <h4 className="text-white font-semibold mb-3 text-lg">Women&apos;s Tang Fashion</h4>
                  <ul className="list-none space-y-3 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-gold mr-3">•</span>
                      <span><strong className="text-white">齐胸襦裙 (Qíxiōng Rúqún):</strong> High-waisted skirts that reached just below the chest, creating an elegant elongated silhouette</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">•</span>
                      <span><strong className="text-white">半臂 (Bànbì):</strong> Half-sleeve short jackets worn over robes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">•</span>
                      <span><strong className="text-white">披帛 (Pībó):</strong> Long silk scarves draped over shoulders and arms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">•</span>
                      <span><strong className="text-white">Low necklines and sheer fabrics:</strong> Tang women enjoyed unprecedented freedom in fashion</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-5 rounded-lg border-l-4 border-gold">
                  <h4 className="text-white font-semibold mb-3 text-lg">Men&apos;s Tang Fashion</h4>
                  <ul className="list-none space-y-3 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-gold mr-3">•</span>
                      <span><strong className="text-white">圆领袍 (Yuánlǐng Páo):</strong> Round-collar robes that became standard official dress</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">•</span>
                      <span><strong className="text-white">幞头 (Fútóu):</strong> Distinctive black gauze hats with wing-like extensions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">•</span>
                      <span><strong className="text-white">胡服 (Húfú):</strong> Central Asian-style tunics and trousers, popular among cavalry and youth</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">•</span>
                      <span><strong className="text-white">长靴 (Chángxuē):</strong> High boots, influenced by nomadic cultures</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-900/50 p-5 rounded-lg border border-gold/30">
                <h4 className="text-gold font-semibold mb-3">Tang Dynasty Color Palette</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Tang clothing featured brilliant colors impossible in earlier eras thanks to advanced dyeing techniques:
                </p>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="bg-slate-800 p-3 rounded border-l-2 border-yellow-500">
                    <p className="text-white font-semibold">Imperial Yellow</p>
                    <p className="text-gray-400 text-xs">Emperor only</p>
                  </div>
                  <div className="bg-slate-800 p-3 rounded border-l-2 border-purple-500">
                    <p className="text-white font-semibold">Purple & Crimson</p>
                    <p className="text-gray-400 text-xs">High officials</p>
                  </div>
                  <div className="bg-slate-800 p-3 rounded border-l-2 border-green-500">
                    <p className="text-white font-semibold">Green & Blue</p>
                    <p className="text-gray-400 text-xs">Lower officials</p>
                  </div>
                  <div className="bg-slate-800 p-3 rounded border-l-2 border-red-500">
                    <p className="text-white font-semibold">Red</p>
                    <p className="text-gray-400 text-xs">Celebrations</p>
                  </div>
                  <div className="bg-slate-800 p-3 rounded border-l-2 border-pink-400">
                    <p className="text-white font-semibold">Pink</p>
                    <p className="text-gray-400 text-xs">Young women</p>
                  </div>
                  <div className="bg-slate-800 p-3 rounded border-l-2 border-cyan-400">
                    <p className="text-white font-semibold">Turquoise</p>
                    <p className="text-gray-400 text-xs">Popular fashion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accessories Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            Accessories & Adornments
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gold mb-4">头饰 (Tóushì) - Headwear</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-2 text-sm">For Men:</h4>
                  <ul className="list-none space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span><strong className="text-white">冠 (Guān):</strong> Formal caps for officials and nobles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span><strong className="text-white">幞头 (Fútóu):</strong> Tang Dynasty black gauze hats</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span><strong className="text-white">簪 (Zān):</strong> Hairpins to secure topknots</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2 text-sm">For Women:</h4>
                  <ul className="list-none space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span><strong className="text-white">花钿 (Huādiàn):</strong> Forehead decorations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span><strong className="text-white">步摇 (Bùyáo):</strong> Dangling hairpins that sway with movement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span><strong className="text-white">发髻 (Fàjì):</strong> Elaborate updo hairstyles, especially in Tang Dynasty</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gold mb-4">玉佩 (Yùpèi) - Jade Ornaments</h3>
              <p className="text-gray-300 text-sm mb-3">
                Jade has been treasured in Chinese culture for over 7,000 years. Ancient Chinese people believed jade possessed virtue and wearing it would bring good fortune and protect the wearer.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-800/50 p-3 rounded">
                  <p className="text-white font-semibold mb-1">佩玉 (Pèiyù)</p>
                  <p className="text-gray-300 text-xs">Jade pendants worn at the waist</p>
                </div>
                <div className="bg-slate-800/50 p-3 rounded">
                  <p className="text-white font-semibold mb-1">玉带钩 (Yù Dàigōu)</p>
                  <p className="text-gray-300 text-xs">Jade belt hooks</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gold mb-4">腰带 (Yāodài) - Belts & Sashes</h3>
              <p className="text-gray-300 text-sm mb-3">
                Belts were both functional and decorative, often made of silk, leather, or woven fabric. Officials wore belts with jade or metal ornaments indicating their rank.
              </p>
              <ul className="list-none space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span><strong className="text-white">革带 (Gédài):</strong> Leather belts with metal plaques for officials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span><strong className="text-white">丝绦 (Sītāo):</strong> Silk sashes for scholars and women</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Fabrics and Materials Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            Fabrics & Materials
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gold mb-3">丝绸 (Sīchóu) - Silk</h3>
              <p className="text-gray-300 text-sm mb-3">
                China&apos;s most famous textile, silk production was a closely guarded secret for millennia. Tang Dynasty silks were renowned worldwide, featuring:
              </p>
              <ul className="list-none space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Intricate woven patterns (织锦 - Zhījǐn)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Embroidery (刺绣 - Cìxiù)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Gauze and translucent fabrics</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gold mb-3">麻 (Má) - Hemp & Linen</h3>
              <p className="text-gray-300 text-sm mb-3">
                The common people&apos;s fabric, durable and practical:
              </p>
              <ul className="list-none space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Cool in summer, breathable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Less expensive than silk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Worn by farmers, soldiers, and workers</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gold mb-3">棉 (Mián) - Cotton</h3>
              <p className="text-gray-300 text-sm">
                Cotton was introduced to China relatively late. While it existed in small quantities during the Tang Dynasty, it didn&apos;t become widespread until the Yuan Dynasty (post-Song).
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gold mb-3">毛皮 (Máopí) - Fur & Leather</h3>
              <p className="text-gray-300 text-sm mb-3">
                Used for warmth in northern regions:
              </p>
              <ul className="list-none space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Fox, sable, and wolf furs for nobility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Sheepskin for common folk</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Clothing in Where Winds Meet Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            Traditional Clothing in Where Winds Meet
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Where Winds Meet meticulously recreates Tang Dynasty fashion, allowing players to experience the golden age of Chinese clothing:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gradient-to-b from-slate-700 to-slate-800 border-2 border-gold/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-gold mb-3">Historical Accuracy</h3>
              <p className="text-gray-300 text-sm">
                Garments designed based on Tang Dynasty murals, sculptures, and archaeological evidence, ensuring cultural authenticity.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-700 to-slate-800 border-2 border-gold/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-gold mb-3">Social Distinction</h3>
              <p className="text-gray-300 text-sm">
                Clothing reflects social status—from peasant hemp robes to noble silk garments with intricate embroidery.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-700 to-slate-800 border-2 border-gold/30 rounded-lg p-5">
              <h3 className="text-lg font-bold text-gold mb-3">Customization</h3>
              <p className="text-gray-300 text-sm">
                Players can wear various traditional outfits, from practical travel wear to elegant ceremonial robes.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/30 border-l-4 border-gold p-6 rounded-r-lg">
            <h4 className="text-white font-semibold mb-3">Character Classes & Clothing</h4>
            <p className="text-gray-300 leading-relaxed mb-4">
              Different character backgrounds in the game wear appropriate period attire:
            </p>
            <ul className="list-none space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span><strong className="text-white">Scholars:</strong> Elegant robes with wide sleeves, representing Confucian virtue</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span><strong className="text-white">Warriors:</strong> Practical tunics and armor, often with Central Asian influences</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span><strong className="text-white">Merchants:</strong> Functional yet prosperous-looking garments</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span><strong className="text-white">Nobles:</strong> Luxurious silks with elaborate accessories</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-lg border-2 border-gold">
            <p className="text-white text-xl text-center mb-4 font-semibold">
              &quot;华夏衣冠，传承千年&quot;
            </p>
            <p className="text-gray-300 text-center italic mb-4">
              &quot;The garments of China, passed down through a thousand years.&quot;
            </p>
            <p className="text-gray-300 text-sm text-center">
              Traditional Chinese clothing is more than fashion—it&apos;s a living embodiment of philosophy, art, and cultural identity that continues to inspire and captivate people around the world.
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
