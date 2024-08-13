import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <header className="bg-pink-300 text-red-900 p-4">
        <h1 className="text-3xl font-bold">Welcome to へぶったー!</h1>
      </header>
      
      <section className="p-6">
        <h2 className="text-2xl font-semibold">へぶったーとは？</h2>
        <p className="my-4">
        へぶったーは、ヘブンバーンズレッド（ヘブバン）のファンコミュニティとTwitter風SNSを組み合わせた新しいプラットフォームです。ファンの皆様が安心して集い、交流し、ゲームの情報や感想を共有するための場を提供します。
        </p>

        <h2 className="text-2xl font-semibold">プロジェクトの目標</h2>
        <p className="my-4">
          ヘブバンのファンが、情報を分散せず一つのプラットフォームで快適に交流できる場所を作りたい。それがへぶったーの目標です。日常的なつぶやきから攻略情報、ネタバレありのディスカッションまで、皆さんが大切にしていることをサポートします。
        </p>

        <h2 className="text-2xl font-semibold">主な機能</h2>
        <ul className="list-disc pl-6 my-4">
          <li><strong>ちら裏機能</strong>: 日常のつぶやきを共有し、友達とつながることができます。画像やYouTubeリンクの投稿も可能！</li>
          <li><strong>活動報告書機能</strong>: 長文記事を投稿して、他のファンと知識や考えを深く共有しましょう。</li>
          <li><strong>へちゃんねる機能</strong>: 質問や議論の場として活用できる掲示板機能。ログイン不要で参加可能！</li>
          <li><strong>ネタバレ防止機能</strong>: ネタバレに敏感なファンでも安心して利用できるフィルタリング機能を搭載。</li>
          <li><strong>ナービィ広場</strong>: お絵描きチャットやミニゲームなど、エンターテイメントも満載！</li>
          <li><strong>AIチャットボットKETU</strong>: ユーザーの質問に適当に答えてくれるユーモラスなAI。</li>
          <li><strong>ランキング機能</strong>: ゲーム内でのスコアを競い合い、称号や勲章を手に入れましょう！</li>
        </ul>

        <h2 className="text-2xl font-semibold">セキュリティ</h2>
        <p className="my-4">
          Heavtterは、ユーザーの安全とプライバシーを最優先に設計されています。暗号化されたデータ管理、多要素認証、厳密なアクセス制限など、安心してご利用いただける環境を提供します。
        </p>

        <h2 className="text-2xl font-semibold">ぜひへぶったーで新しいコミュニティ体験を！</h2>
      </section>

      <footer className="bg-pink-300 text-red-900 p-4 text-center">
        <p>&copy; 2024 Heavtter. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
