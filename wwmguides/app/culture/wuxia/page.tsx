import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is Wuxia? - WWM Guides",
  description: "Discover the cultural foundation of the martial arts genre - Wuxia. Explore its history, philosophy, and influence on Chinese culture and Where Winds Meet.",
  keywords: "Wuxia, martial arts, Chinese culture, jianghu, chivalry, Where Winds Meet",
};

export default function WuxiaPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb Navigation */}
      <nav className="mb-8 text-sm text-gray-400">
        <Link href="/" className="hover:text-gold transition-colors">
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <Link href="/culture" className="hover:text-gold transition-colors">
          Culture & Lore
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-300">World & Terms</span>
      </nav>

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-4 text-white">
          What is Wuxia?
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          The Cultural Foundation of Martial Arts Genre
        </p>

        {/* Article Meta Information */}
        <div className="bg-slate-700/80 border border-slate-600 rounded-lg p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Category:</span>
              <span className="text-white ml-2">World & Terms</span>
            </div>
            <div>
              <span className="text-gray-400">Difficulty:</span>
              <span className="text-white ml-2">Cultural Deep Dive</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-600 text-sm text-gray-400">
            <span>📅 Published: December 30, 2024</span>
            <span className="mx-3">•</span>
            <span>⏱️ 6 min read</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        {/* Introduction Section */}
        <section className="mb-12">
          <p className="text-gray-300 leading-relaxed mb-6">
            <span className="text-gold font-semibold">Wuxia (武侠)</span>, literally meaning &quot;martial heroes,&quot; is a genre of Chinese fiction that centers on the adventures of martial artists in ancient China. It&apos;s not just about fighting—it&apos;s about honor, loyalty, righteousness, and the pursuit of justice in a world where the law often fails the common people.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Where Winds Meet is deeply rooted in the Wuxia tradition, bringing to life the spirit of martial heroes wandering the jianghu (martial arts world) during the turbulent late Tang Dynasty.
          </p>
        </section>

        {/* Core Elements Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            Core Elements of Wuxia
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
              <h3 className="font-cinzel text-2xl font-bold mb-4 text-gold">武 (Wǔ) - Martial</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                The &quot;martial&quot; aspect represents extraordinary fighting abilities and mastery of various weapons and techniques. Wuxia heroes possess skills far beyond ordinary warriors, often trained by legendary masters or through secret martial arts manuals.
              </p>
              <ul className="list-none space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Qinggong (轻功) - lightness skills that allow characters to leap great distances and run on walls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Internal energy cultivation (内功) - developing inner power through meditation and practice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Weapon mastery - expertise with swords, sabers, spears, and other traditional Chinese weapons</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
              <h3 className="font-cinzel text-2xl font-bold mb-4 text-gold">侠 (Xiá) - Chivalry/Hero</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                The &quot;hero&quot; aspect is even more important than martial prowess. A true wuxia hero embodies moral virtues and uses their power to help those in need, fight injustice, and uphold righteousness.
              </p>
              <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-gold">
                <p className="text-white text-lg italic mb-2">
                  侠之大者，为国为民
                </p>
                <p className="text-gray-300">
                  &quot;The greatest heroes serve their country and people.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Characteristics Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            Key Characteristics of Wuxia Stories
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-b from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Historical Setting</h3>
              <p className="text-gray-300 text-sm">
                Usually set in ancient China, often during periods of political turmoil or dynasty transitions. Where Winds Meet takes place during the late Tang Dynasty, a time of great upheaval.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Jianghu (江湖)</h3>
              <p className="text-gray-300 text-sm">
                The &quot;rivers and lakes&quot; - a parallel society of martial artists, sects, and clans operating outside mainstream society with their own codes and hierarchies.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Moral Code</h3>
              <p className="text-gray-300 text-sm">
                Honor, loyalty, righteousness, and keeping one&apos;s word are paramount. Breaking oaths or betraying trust is seen as the ultimate dishonor.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Revenge & Justice</h3>
              <p className="text-gray-300 text-sm">
                Many wuxia stories revolve around seeking revenge for wrongs, protecting the innocent, or righting injustices that the official system cannot address.
              </p>
            </div>
          </div>
        </section>

        {/* Wuxia vs Xianxia Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            Wuxia vs Xianxia
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            It&apos;s important to distinguish Wuxia from Xianxia (仙侠), another popular Chinese fantasy genre:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-slate-600">
              <thead className="bg-slate-700">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gold border-b border-slate-600">Aspect</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gold border-b border-slate-600">Wuxia (武侠)</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gold border-b border-slate-600">Xianxia (仙侠)</th>
                </tr>
              </thead>
              <tbody className="bg-slate-800">
                <tr>
                  <td className="px-6 py-4 text-sm text-white border-b border-slate-700">Setting</td>
                  <td className="px-6 py-4 text-sm text-gray-300 border-b border-slate-700">Historical, grounded reality</td>
                  <td className="px-6 py-4 text-sm text-gray-300 border-b border-slate-700">Fantasy world with immortals</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-white border-b border-slate-700">Power Source</td>
                  <td className="px-6 py-4 text-sm text-gray-300 border-b border-slate-700">Martial arts training, internal energy</td>
                  <td className="px-6 py-4 text-sm text-gray-300 border-b border-slate-700">Cultivation, magic, supernatural powers</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-white border-b border-slate-700">Goal</td>
                  <td className="px-6 py-4 text-sm text-gray-300 border-b border-slate-700">Justice, honor, protecting the weak</td>
                  <td className="px-6 py-4 text-sm text-gray-300 border-b border-slate-700">Immortality, godhood, cosmic power</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-white">Realism</td>
                  <td className="px-6 py-4 text-sm text-gray-300">Low fantasy, mostly realistic</td>
                  <td className="px-6 py-4 text-sm text-gray-300">High fantasy, supernatural elements</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-300 leading-relaxed mt-6">
            Where Winds Meet is firmly in the Wuxia tradition—while characters have impressive martial abilities, they remain human and face very human challenges and moral dilemmas.
          </p>
        </section>

        {/* Famous Wuxia Works Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            Famous Wuxia Works
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            The Wuxia genre has produced countless beloved works that have shaped Chinese popular culture:
          </p>

          <div className="space-y-4">
            <div className="bg-slate-700 border-l-4 border-gold p-4 rounded-r-lg">
              <h4 className="text-white font-bold mb-2">Jin Yong (Louis Cha) - The Master</h4>
              <p className="text-gray-300 text-sm">
                Works like &quot;The Legend of the Condor Heroes,&quot; &quot;Demi-Gods and Semi-Devils,&quot; and &quot;The Deer and the Cauldron&quot; are considered classics that defined modern Wuxia.
              </p>
            </div>

            <div className="bg-slate-700 border-l-4 border-gold p-4 rounded-r-lg">
              <h4 className="text-white font-bold mb-2">Gu Long - The Innovator</h4>
              <p className="text-gray-300 text-sm">
                Known for &quot;The Legend of Lu Xiaofeng&quot; and &quot;Chu Liuxiang,&quot; Gu Long brought a more detective-story approach to Wuxia with mystery and intrigue.
              </p>
            </div>

            <div className="bg-slate-700 border-l-4 border-gold p-4 rounded-r-lg">
              <h4 className="text-white font-bold mb-2">Modern Adaptations</h4>
              <p className="text-gray-300 text-sm">
                Wuxia has inspired countless films (Crouching Tiger, Hidden Dragon; Hero), TV series, and now games like Where Winds Meet.
              </p>
            </div>
          </div>
        </section>

        {/* Wuxia in Where Winds Meet Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            Wuxia in Where Winds Meet
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Where Winds Meet embodies the Wuxia spirit through:
          </p>

          <ul className="list-none space-y-3 text-gray-300 mb-6">
            <li className="flex items-start">
              <span className="text-gold mr-3">•</span>
              <span><strong className="text-white">Historical Authenticity:</strong> Set during the real historical period of the late Tang Dynasty with accurate cultural details</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3">•</span>
              <span><strong className="text-white">Martial Arts Variety:</strong> Multiple fighting styles, weapons, and techniques to master</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3">•</span>
              <span><strong className="text-white">Moral Choices:</strong> Story decisions that reflect Wuxia values of honor, loyalty, and righteousness</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3">•</span>
              <span><strong className="text-white">Jianghu Society:</strong> Complex factions, sects, and relationships in the martial world</span>
            </li>
          </ul>

          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-lg border-2 border-gold">
            <p className="text-white text-xl text-center font-semibold">
              &quot;In the jianghu, your word is your bond, and your actions define who you are.&quot;
            </p>
          </div>
        </section>
      </div>

      {/* Back Navigation */}
      <div className="mt-16 pt-8 border-t border-slate-700">
        <Link
          href="/culture"
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
          Back to Culture & Lore
        </Link>
      </div>
    </article>
  );
}
