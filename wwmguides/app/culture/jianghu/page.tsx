import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is Jianghu? - WWM Guides",
  description: "Explore the concept of Jianghu - the world of martial artists and outlaws in Chinese culture, and its significance in Where Winds Meet.",
  keywords: "Jianghu, martial arts world, Wuxia, Chinese culture, rivers and lakes, Where Winds Meet",
};

export default function JianghuPage() {
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
          What is Jianghu?
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          The World of Martial Artists and Outlaws
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
            <span>⏱️ 7 min read</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        {/* Introduction Section */}
        <section className="mb-12">
          <p className="text-gray-300 leading-relaxed mb-6">
            <span className="text-gold font-semibold">Jianghu (江湖)</span>, literally translating to &quot;rivers and lakes,&quot; is one of the most important concepts in Chinese Wuxia culture. But it&apos;s far more than just a geographical description—it represents an entire parallel society, a world unto itself.
          </p>

          <div className="bg-slate-800/30 border-l-4 border-gold p-6 mb-6 rounded-r-lg">
            <p className="text-white text-lg mb-2">
              江湖 (Jiāng Hú)
            </p>
            <p className="text-gray-300 italic">
              江 (Jiāng) = Rivers<br />
              湖 (Hú) = Lakes
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed">
            The term originally appeared in classical Chinese texts referring to wanderers and hermits who lived by rivers and lakes, away from civilized society. Over time, it evolved to describe the underground world of martial artists, outlaws, merchants, and wanderers who operate outside the bounds of conventional society and government authority.
          </p>
        </section>

        {/* The Jianghu as a Parallel World Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            The Jianghu as a Parallel World
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Jianghu exists alongside mainstream society but operates by different rules. It&apos;s a world where:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-b from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gold mb-3">Personal Honor Trumps Law</h3>
              <p className="text-gray-300 text-sm">
                Disputes are settled through duels or mediation by respected elders, not government courts. Your reputation and word are more valuable than official titles.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gold mb-3">Martial Skill Determines Status</h3>
              <p className="text-gray-300 text-sm">
                Social hierarchy is based on martial prowess and moral character, not birth or wealth. A beggar with great kung fu can command more respect than a corrupt official.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gold mb-3">Loyalty Binds Communities</h3>
              <p className="text-gray-300 text-sm">
                Bonds between martial brothers,师徒 (master-disciple relationships), and sworn siblings are sacred and often stronger than blood ties.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gold mb-3">Unwritten Rules Govern Behavior</h3>
              <p className="text-gray-300 text-sm">
                The jianghu has its own code of conduct—when to fight, how to show respect, how to issue challenges, and when to grant mercy.
              </p>
            </div>
          </div>
        </section>

        {/* Who Inhabits the Jianghu Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            Who Inhabits the Jianghu?
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
              <h3 className="font-cinzel text-2xl font-bold mb-4 text-white">武林 (Wǔlín) - Martial Forests</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                The martial arts community, organized into sects, schools, and clans:
              </p>
              <ul className="list-none space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span><strong className="text-white">门派 (Mén Pài) - Sects:</strong> Formal martial arts schools with distinctive styles and philosophies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span><strong className="text-white">武馆 (Wǔ Guǎn) - Martial Halls:</strong> Training academies that teach combat skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span><strong className="text-white">独行侠 (Dú Xíng Xiá) - Lone Heroes:</strong> Wandering martial artists who walk their own path</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
              <h3 className="font-cinzel text-2xl font-bold mb-4 text-white">绿林 (Lǜlín) - Greenwood</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Outlaws, bandits, and those who live outside the law—not necessarily evil, often Robin Hood-like figures:
              </p>
              <ul className="list-none space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span><strong className="text-white">山寨 (Shān Zhài) - Mountain Strongholds:</strong> Bandit hideouts led by chieftains</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span><strong className="text-white">义贼 (Yì Zéi) - Righteous Thieves:</strong> Those who steal from the corrupt rich to help the poor</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
              <h3 className="font-cinzel text-2xl font-bold mb-4 text-white">Other Jianghu Dwellers</h3>
              <ul className="list-none space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span><strong className="text-white">镖师 (Biāo Shī) - Bodyguards:</strong> Professionals who protect merchant caravans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span><strong className="text-white">江湖医师 (Jiāng Hú Yī Shī) - Jianghu Physicians:</strong> Wandering healers skilled in both medicine and poison</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span><strong className="text-white">乞丐帮 (Qǐ Gài Bāng) - Beggar Gang:</strong> A vast information network disguised as beggars</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span><strong className="text-white">杀手 (Shā Shǒu) - Assassins:</strong> Those who kill for hire or revenge</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* The Jianghu Code Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            The Unwritten Code of Jianghu
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            While there are no written laws, the jianghu operates on understood principles:
          </p>

          <div className="space-y-4">
            <div className="bg-slate-800/50 border-l-4 border-gold p-4 rounded-r-lg">
              <h4 className="text-white font-bold mb-2">义气 (Yìqì) - Righteousness and Loyalty</h4>
              <p className="text-gray-300 text-sm">
                Stand by your friends, repay debts of gratitude, and never betray those who trust you. This is the highest virtue in jianghu.
              </p>
            </div>

            <div className="bg-slate-800/50 border-l-4 border-gold p-4 rounded-r-lg">
              <h4 className="text-white font-bold mb-2">恩怨分明 (Ēnyuàn Fēnmíng) - Clear Gratitude and Grudges</h4>
              <p className="text-gray-300 text-sm">
                Repay kindness with kindness, repay wrongs with revenge. Never let debts—good or bad—go unsettled.
              </p>
            </div>

            <div className="bg-slate-800/50 border-l-4 border-gold p-4 rounded-r-lg">
              <h4 className="text-white font-bold mb-2">言出必行 (Yán Chū Bì Xíng) - Keep Your Word</h4>
              <p className="text-gray-300 text-sm">
                Your word is your bond. Breaking a promise is worse than death. Once you commit, you must follow through.
              </p>
            </div>

            <div className="bg-slate-800/50 border-l-4 border-gold p-4 rounded-r-lg">
              <h4 className="text-white font-bold mb-2">江湖规矩 (Jiānghú Guījǔ) - Jianghu Etiquette</h4>
              <p className="text-gray-300 text-sm">
                Respect your elders, honor your teachers, announce yourself before fighting, and show mercy to the defeated who yield.
              </p>
            </div>
          </div>
        </section>

        {/* Entering and Leaving the Jianghu Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            Entering and Leaving the Jianghu
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            There&apos;s a famous saying in Chinese Wuxia:
          </p>

          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-lg border-2 border-gold mb-6">
            <p className="text-white text-2xl mb-4 text-center font-semibold">
              身在江湖，身不由己
            </p>
            <p className="text-gray-300 text-center italic">
              &quot;Once you&apos;re in the jianghu, you can&apos;t help yourself.&quot;
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Entering the Jianghu</h3>
              <p className="text-gray-300 text-sm mb-4">
                People enter jianghu for various reasons:
              </p>
              <ul className="list-none space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Seeking revenge for family</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Escaping persecution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Pursuing martial arts mastery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Seeking freedom from society</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Leaving the Jianghu</h3>
              <p className="text-gray-300 text-sm mb-4">
                退隐江湖 (Tuì Yǐn Jiānghú) - &quot;Retiring from jianghu&quot; is incredibly difficult:
              </p>
              <ul className="list-none space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Old enemies may seek revenge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Former allies may need help</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Unfinished business pulls you back</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>The skills that made you famous make you a target</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Jianghu in Where Winds Meet Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            Jianghu in Where Winds Meet
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Where Winds Meet brings the jianghu to life during the late Tang Dynasty, a period when the empire was crumbling and the jianghu thrived in the chaos:
          </p>

          <ul className="list-none space-y-3 text-gray-300 mb-6">
            <li className="flex items-start">
              <span className="text-gold mr-3">•</span>
              <span><strong className="text-white">Multiple Factions:</strong> Various sects, bandit groups, and martial organizations with competing interests</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3">•</span>
              <span><strong className="text-white">Reputation System:</strong> Your actions affect how jianghu denizens perceive and treat you</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3">•</span>
              <span><strong className="text-white">Code of Honor:</strong> Choices that test your adherence to jianghu principles</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3">•</span>
              <span><strong className="text-white">Living World:</strong> NPCs with their own jianghu stories, grudges, and alliances</span>
            </li>
          </ul>

          <div className="bg-slate-800/30 border-l-4 border-gold p-6 rounded-r-lg">
            <p className="text-white text-lg italic">
              &quot;The jianghu is not just a place—it&apos;s a way of life, a set of values, and a world of relationships. Once you step in, you become part of something larger than yourself.&quot;
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
