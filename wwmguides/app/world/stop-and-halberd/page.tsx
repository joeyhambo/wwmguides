import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why is the character for 'martial art' made up of the two components 'stop' and 'halberd' - WWM Guides",
  description: "Explore the deep philosophical meaning behind the Chinese character 武 (wǔ) and the concept of 止戈为武 (to stop the blade is true martial virtue) in Where Winds Meet.",
  keywords: "Where Winds Meet, martial arts, Chinese culture, 止戈为武, philosophy, Big Zhao, Zuo Zhuan",
};

export default function StopAndHalberdPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb Navigation */}
      <nav className="mb-8 text-sm text-gray-400">
        <Link href="/" className="hover:text-gold transition-colors">
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <Link href="/world" className="hover:text-gold transition-colors">
          World of WWM
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-300">Life & Culture</span>
      </nav>

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-4 text-white">
          Why is the character for &apos;martial art&apos; made up of the two components &apos;stop&apos; and &apos;halberd&apos;?
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          To End Conflict Is True Martial Virtue
        </p>

        {/* Article Meta Information */}
        <div className="bg-slate-700/80 border border-slate-600 rounded-lg p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Author:</span>
              <span className="text-white ml-2">远长亭</span>
            </div>
            <div>
              <span className="text-gray-400">Translator:</span>
              <span className="text-white ml-2">unknown</span>
            </div>
            <div>
              <span className="text-gray-400">Reviewer:</span>
              <span className="text-white ml-2">舟舟</span>
            </div>
            <div>
              <span className="text-gray-400">Source:</span>
              <span className="text-gold ml-2">燕鸣十六声 Where Stories Meet</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-600 text-sm text-gray-400">
            <span>📅 Published: December 26, 2024</span>
            <span className="mx-3">•</span>
            <span>⏱️ 6 min read</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        {/* Introduction Section */}
        <section className="mb-12">
          <div className="bg-slate-800/30 border-l-4 border-gold p-6 mb-8 rounded-r-lg">
            <p className="text-gray-300 italic mb-2">
              The line of Big Zhao in the Chinese version is:
            </p>
            <p className="text-white text-lg">
              &quot;我有时候就想啊，你说这武功的武字，怎么会是止戈二字呢？&quot;
            </p>
            <p className="text-gray-300 italic mt-4">
              &quot;Sometimes I wonder—why is the character for &apos;martial arts&apos; (武: wǔ) made up of the two components &apos;stop&apos; (止: zhǐ) and &apos;halberd&apos; (戈: gē)?&quot;
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            This line is very well-known among players on the Chinese servers.
          </p>

          {/* Big Zhao Screenshot */}
          <div className="my-8 flex justify-center">
            <div className="rounded-lg overflow-hidden border border-slate-600 max-w-2xl">
              <Image
                src="/images/World of WWM/Stop and Halberd (1).png"
                alt="Big Zhao's famous question about the character 武"
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Although in the earliest oracle-bone script, the combination of 止 and 戈 was originally a pictographic image: a person standing (止, representing a foot) holding a weapon (戈), later interpretations viewed 武 as a compound ideogram: since 止 has always meant &quot;to stop,&quot; from the past to the present, the character 武, when broken down, can be read as &quot;to stop the halberd,&quot; meaning to end war and to halt violence.
          </p>
        </section>

        {/* The Question Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            The Paradox of Martial Strength
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            So what Big Zhao really wondered is:
          </p>

          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 mb-6">
            <p className="text-white text-lg italic text-center">
              &quot;Martial strength itself is violent, so why is it formed from the idea of stopping war?&quot;
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            The concept of <span className="text-gold font-semibold">&quot;止戈为武&quot; (zhǐ gē wéi wǔ)</span>—to stop the blade is true martial virtue—originates from the &apos;Zuo Zhuan&apos; during the Spring and Autumn and Warring States period, and carries deep philosophical meaning.
          </p>

          {/* Zuo Zhuan Image */}
          <div className="my-8 flex justify-center">
            <div className="rounded-lg overflow-hidden border border-slate-600 max-w-xs">
              <Image
                src="/images/World of WWM/Stop and Halberd (2).png"
                alt="Zuo Zhuan - the origin of 止戈为武"
                width={400}
                height={267}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Historical Context Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            Legitimacy Through Peace, Not Conquest
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            In ancient times, struggles for power among nobles, even if victorious, were often condemned as usurpation, illegitimate and unrecognized.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            By contrast, in chaotic eras when common people could barely survive, uprisings led by the populace, if they ultimately established stable rule and genuinely improved lives, were regarded as rightful and legitimate.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Modern Chinese historiography often notes that while peasant regimes had limitations, they were still significant and worthy of recognition, because their &quot;武&quot;, their use of force, was aimed at restoring peace and giving people a new lease on life.
          </p>
        </section>

        {/* Lament Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            A Deeper Lament
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            At the same time, within the scene&apos;s context, the line is also a lament:
          </p>

          <div className="bg-slate-800/30 border-l-4 border-gold p-6 mb-6 rounded-r-lg">
            <p className="text-white italic">
              &quot;We have fought so many battles in the hope of creating a peaceful world, but why, when I walk among the people, are their lives still filled with hardship?&quot;
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            This leads to another layer of reflection:
          </p>

          <ul className="list-none space-y-3 text-gray-300 mb-6">
            <li className="flex items-start">
              <span className="text-gold mr-3">•</span>
              <span>Violence can be effective, but must it be violence?</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3">•</span>
              <span>Violence works at times, but can violence ever solve everything?</span>
            </li>
          </ul>
        </section>

        {/* Chinese Philosophy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            先礼后兵: Principle Before Force
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            When it comes to conflict, Chinese culture teaches to persuade with principle first (<span className="text-gold">先礼后兵: xiān lǐ hòu bīng</span>): If a conflict can be resolved peacefully, one should avoid force. Yet when reason fails and the opponent cannot be moved, having the ability to &quot;meet force with force&quot; becomes a necessary last card even though you might not use it.
          </p>

          <p className="text-gray-300 leading-relaxed">
            And after conflict ends, policy with violence might push a peaceful life much far away.
          </p>
        </section>

        {/* People Suffer Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            The Price Paid by the Common People
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            In every era, natural disasters and man-made catastrophes strike the common people first, because they have the weakest ability to withstand hardship. War, chaos, failed policies, or misguided governance: individuals are always crushed by the wheels of history.
          </p>

          <div className="bg-slate-800/50 p-6 rounded-lg border border-gold/50 mb-6">
            <p className="text-gray-400 italic text-center text-sm mb-4">
              Zhang Yanghao&apos;s poem &quot;Tóngguan Huáigǔ&quot; (Reflections on History at Tongguan Pass)
            </p>
            <p className="text-gray-300 text-center mb-2 text-lg leading-tight">
              张养浩《山坡羊·潼关怀古》
            </p>
            <p className="text-gold text-xl text-center my-6 font-semibold leading-snug">
              兴，百姓苦；<br />
              亡，百姓苦。
            </p>
            <p className="text-white text-xl text-center mt-4 italic leading-relaxed">
              &quot;When a dynasty rises, the people suffer;<br />
              when a dynasty falls, the people suffer.&quot;
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            From the perspective of powerful figures, it might be simple and dictatorial: some lose and some gain—it becomes a mathematical equation. But for individuals, every life is incomparable, equally precious. Thus, the need to find gentler paths toward resolution has only grown stronger.
          </p>

          <p className="text-gray-300 leading-relaxed">
            How do you create a world where everyone can live well? A truly peaceful age? It is a question far too complex for violence to answer.
          </p>
        </section>

        {/* Conclusion Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            The True Meaning of Martial Virtue
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            But if peace can be achieved without resorting to force, then that, too, is considered a martial virtue: rightful, moral, and imbued with a spirit of chivalry.
          </p>

          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-lg border-2 border-gold">
            <p className="text-white text-xl mb-4 text-center font-semibold">
              <span className="text-gold">止戈为武</span> - stopping the blade is what makes something &apos;martial.&apos;
            </p>
            <p className="text-white text-xl text-center font-semibold">
              <span className="text-gold">止戈为武</span> - &apos;martial&apos; is actually used to stop the blade.
            </p>
          </div>
        </section>

        {/* Chinese Character Evolution Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel border-b border-slate-600 pb-3">
            Chinese Character Evolution
          </h2>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <p className="text-gray-300 leading-relaxed">
              Now, let&apos;s explore the evolution of these ancient Chinese characters and understand how their forms have changed throughout history.
            </p>

            {/* 止 Character */}
            <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
              <h3 className="font-cinzel text-2xl font-bold mb-4 text-white">止 (Zhǐ) - Stop/Foot</h3>

              <div className="my-4 rounded-lg overflow-hidden border border-slate-600">
                <Image
                  src="/images/World of WWM/Stop and Halberd (6).png"
                  alt="Evolution of the Chinese character 止 (Zhǐ)"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-gray-300 leading-relaxed">
                The character 止 originally depicted a foot. In ancient times, when a foot stops moving, it represents the action of stopping or halting. This pictographic character has retained its core meaning of &quot;to stop&quot; throughout thousands of years of evolution.
              </p>
            </div>

            {/* 戈 Character */}
            <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
              <h3 className="font-cinzel text-2xl font-bold mb-4 text-white">戈 (Gē) - Halberd/Dagger-axe</h3>

              <div className="my-4 rounded-lg overflow-hidden border border-slate-600">
                <Image
                  src="/images/World of WWM/Stop and Halberd (4).png"
                  alt="Evolution of the Chinese character 戈 (Gē)"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                The character 戈 represents a dagger-axe or halberd, an ancient Chinese pole weapon. The character&apos;s shape closely resembles the actual weapon, making it a clear pictographic representation.
              </p>

              {/* Weapon Illustration */}
              <div className="my-4 flex justify-center">
                <div className="rounded-lg overflow-hidden border border-slate-600 max-w-xs">
                  <Image
                    src="/images/World of WWM/Stop and Halberd (3).png"
                    alt="Ancient Chinese weapon 戈 (Halberd)"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                The 戈 was one of the most common weapons in ancient Chinese warfare, symbolizing military power and martial strength. In the context of 止戈为武, it represents violence and conflict that must be stopped.
              </p>
            </div>

            {/* 武 Character */}
            <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
              <h3 className="font-cinzel text-2xl font-bold mb-4 text-white">武 (Wǔ) - Martial/Military</h3>

              <div className="my-4 rounded-lg overflow-hidden border border-slate-600">
                <Image
                  src="/images/World of WWM/Stop and Halberd (5).png"
                  alt="Evolution of the Chinese character 武 (Wǔ)"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                The character 武 combines 止 (stop) and 戈 (halberd). In its earliest form, it depicted a person (foot) holding a weapon, representing a warrior or military action. However, later interpretations gave it a deeper philosophical meaning: <strong className="text-white">to stop the halberd, to end violence</strong>.
              </p>

              <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-gold">
                <p className="text-white text-lg font-semibold mb-2">
                  止 (stop) + 戈 (halberd) = 武 (martial virtue)
                </p>
                <p className="text-gray-300 italic">
                  True martial strength is not about wielding weapons, but about knowing when to stop them.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Back Navigation */}
      <div className="mt-16 pt-8 border-t border-slate-700">
        <Link
          href="/world"
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
          Back to World of Where Winds Meet
        </Link>
      </div>
    </article>
  );
}
