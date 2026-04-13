const PLAY_MODES = [
  { id: "local", label: "同じ端末" },
  { id: "online", label: "オンライン" },
];

const ROLES = [
  { id: "girlfriend", label: "彼女" },
  { id: "you", label: "あなた" },
];

const MODES = [
  { id: "warm", label: "ほんわか", questionModes: ["warm", "romance"] },
  { id: "romance", label: "恋愛", questionModes: ["romance", "warm", "deep"] },
  { id: "deep", label: "深い", questionModes: ["deep", "romance"] },
  { id: "spark", label: "ドキドキ", questionModes: ["spark", "romance"] },
];

const DEPTHS = [
  { id: 1, label: "レベル1" },
  { id: 2, label: "レベル2" },
  { id: 3, label: "レベル3" },
  { id: 4, label: "レベル4" },
];

const CATEGORIES = [
  "性格・価値観",
  "恋愛観",
  "日常習慣",
  "将来観",
  "相手への印象",
  "もしも系",
];

const QUESTIONS = [
  { id: "q01", category: "性格・価値観", depth: 1, mode: "warm", prompt: "予定が急に変わったら、どっちに近い？", note: "今の自分に近い方を選んでください。", options: [{ title: "その流れを楽しむ", subtitle: "柔軟にノる方" }, { title: "少し戸惑う", subtitle: "気持ちを整えたい方" }], dive: "予定変更が起きたとき、相手にどんな一言をかけてもらえると安心しそう？" },
  { id: "q02", category: "日常習慣", depth: 1, mode: "warm", prompt: "休日の朝はどっちが理想？", note: "ふたりの過ごし方の違いが出やすいお題です。", options: [{ title: "ゆっくり寝たい", subtitle: "のんびり回復重視" }, { title: "早めに動きたい", subtitle: "時間を有効に使いたい" }], dive: "理想の休日を1日だけ作れるなら、朝からどんな流れにしたい？" },
  { id: "q03", category: "恋愛観", depth: 1, mode: "romance", prompt: "愛情を感じやすいのはどっち？", note: "答えより理由を話すと一気に理解が深まります。", options: [{ title: "言葉で伝えてくれる", subtitle: "好きやありがとうを聞きたい" }, { title: "行動で示してくれる", subtitle: "気遣いや時間で感じたい" }], dive: "最近の相手の行動や言葉で、愛情を感じた場面はあった？" },
  { id: "q04", category: "相手への印象", depth: 1, mode: "warm", prompt: "相手の一番好きなところはどこに近い？", note: "褒め方の傾向が出ます。", options: [{ title: "安心できるところ", subtitle: "自然体でいられる" }, { title: "刺激をくれるところ", subtitle: "一緒にいると楽しい" }, { title: "尊敬できるところ", subtitle: "人として魅力を感じる" }], dive: "その魅力を最初に感じたタイミングはいつ頃だった？" },
  { id: "q05", category: "もしも系", depth: 1, mode: "warm", prompt: "急に1日休みができたら、どっちを選びたい？", note: "価値観というより今の気分で選んでも大丈夫です。", options: [{ title: "家でゆっくりしたい", subtitle: "回復と癒やしを優先" }, { title: "どこかに出かけたい", subtitle: "せっかくだから動きたい" }], dive: "もし相手が逆のタイプだったら、どんな折衷案がうれしい？" },
  { id: "q06", category: "日常習慣", depth: 1, mode: "warm", prompt: "連絡のテンポはどっちが心地いい？", note: "責めるためではなく、心地よさを知るためのお題です。", options: [{ title: "こまめにやりとりしたい", subtitle: "つながっている感じがほしい" }, { title: "必要なとき中心が楽", subtitle: "自分の時間も大切にしたい" }], dive: "相手からの連絡で、うれしいタイミングや内容ってどんなもの？" },
  { id: "q07", category: "性格・価値観", depth: 2, mode: "deep", prompt: "落ち込んだとき、先にほしいのはどっち？", note: "支え方のすれ違いを減らしやすいテーマです。", options: [{ title: "そっとしておいてほしい", subtitle: "まず自分で整理したい" }, { title: "話を聞いてほしい", subtitle: "一緒に気持ちをほどきたい" }], dive: "落ち込んでいるサインは自分でわかりやすく出る方？ それとも隠しがち？" },
  { id: "q08", category: "恋愛観", depth: 2, mode: "romance", prompt: "相手に一番求めるものはどれに近い？", note: "どれが正しいかではなく、今大事にしたいものを選びます。", options: [{ title: "安心感", subtitle: "一緒にいてほっとすること" }, { title: "刺激", subtitle: "ドキドキや新鮮さ" }, { title: "尊敬", subtitle: "信頼できる強さや姿勢" }], dive: "その要素が満たされていると、ふたりの関係はどう変わりそう？" },
  { id: "q09", category: "将来観", depth: 2, mode: "deep", prompt: "将来の幸せに近いのはどっち？", note: "真剣になりすぎず、イメージで選べるお題です。", options: [{ title: "安定した毎日", subtitle: "落ち着いた暮らしを大事にしたい" }, { title: "新しい挑戦がある毎日", subtitle: "変化や成長を楽しみたい" }], dive: "その未来を叶えるために、ふたりで大切にしたいことは何だと思う？" },
  { id: "q10", category: "相手への印象", depth: 2, mode: "romance", prompt: "相手にされてうれしいのはどっち？", note: "気持ちの受け取り方が見えます。", options: [{ title: "具体的に褒めてもらう", subtitle: "言葉で認められるとうれしい" }, { title: "さりげなく気遣ってもらう", subtitle: "自然な行動に愛を感じる" }], dive: "今までで、相手にされて特に印象に残っている気遣いはある？" },
  { id: "q11", category: "恋愛観", depth: 2, mode: "romance", prompt: "ケンカした直後、先にほしいのはどれ？", note: "正しさではなく、心が落ち着く順番の話です。", options: [{ title: "すぐ話し合う時間", subtitle: "気持ちを早く整理したい" }, { title: "少し冷静になる時間", subtitle: "落ち着いてから向き合いたい" }, { title: "まず安心できる一言", subtitle: "嫌いになったわけじゃないと知りたい" }], dive: "もしその流れを相手にお願いするとしたら、どんな言い方なら受け取りやすい？" },
  { id: "q12", category: "日常習慣", depth: 2, mode: "warm", prompt: "デートの予定はどっちが好き？", note: "生活リズムの相性が見えやすいです。", options: [{ title: "ある程度決めておきたい", subtitle: "安心して楽しみたい" }, { title: "その場で決めたい", subtitle: "気分に合わせて動きたい" }], dive: "相手と予定を立てるとき、これだけあると助かるという情報は何？" },
  { id: "q13", category: "もしも系", depth: 2, mode: "warm", prompt: "もし1週間だけ同じ部屋で暮らすなら、気になるのはどっち？", note: "責め合いではなく、快適さの違いを知る質問です。", options: [{ title: "生活リズムの違い", subtitle: "寝る時間や過ごし方" }, { title: "片付けの感覚の違い", subtitle: "散らかり具合や整え方" }], dive: "気になることがあったとき、やわらかく伝えるならどんな言い方がよさそう？" },
  { id: "q14", category: "性格・価値観", depth: 2, mode: "deep", prompt: "疲れている日に一番うれしいのはどれ？", note: "支え方のヒントになります。", options: [{ title: "静かに寄り添ってくれる", subtitle: "そばにいてくれる安心感" }, { title: "話を聞いてくれる", subtitle: "気持ちを言葉にしたい" }, { title: "笑わせてくれる", subtitle: "気分を軽くしてほしい" }], dive: "疲れているとき、自分ではどんなサインが出やすい？" },
  { id: "q15", category: "恋愛観", depth: 3, mode: "deep", prompt: "恋愛で不安になりやすいのはどの場面に近い？", note: "重くしすぎず、自分の傾向として答えるお題です。", options: [{ title: "気持ちが見えないとき", subtitle: "相手がどう思っているか不安" }, { title: "距離を感じるとき", subtitle: "会えない、話せない時間が続く" }, { title: "期待に応えられるか心配なとき", subtitle: "自分側の不安が大きい" }], dive: "そんな不安が出たとき、相手にどうしてもらえると落ち着きやすい？" },
  { id: "q16", category: "将来観", depth: 3, mode: "deep", prompt: "人生で大事にしたい軸はどれに近い？", note: "価値観がよく見える質問です。", options: [{ title: "安心して暮らせること", subtitle: "安定や土台づくりを重視" }, { title: "やりたいことに挑戦すること", subtitle: "経験や成長を重視" }, { title: "好きな人と濃い時間を過ごすこと", subtitle: "関係性や思い出を重視" }], dive: "その軸を守るために、今の自分が手放したくないものは何？" },
  { id: "q17", category: "相手への印象", depth: 3, mode: "romance", prompt: "相手に一番言われてうれしい言葉はどれ？", note: "ドキッとしつつも安全に話しやすいテーマです。", options: [{ title: "かわいい・かっこいい", subtitle: "魅力をまっすぐ伝えられたい" }, { title: "一緒にいると落ち着く", subtitle: "安心感を認められたい" }, { title: "尊敬してる", subtitle: "人として見てもらえてうれしい" }], dive: "その言葉を言われると、どうして特にうれしく感じそう？" },
  { id: "q18", category: "恋愛観", depth: 3, mode: "deep", prompt: "すれ違いが起きたとき、大事なのはどっち？", note: "対立ではなく、向き合い方の話です。", options: [{ title: "まず気持ちを受け止めること", subtitle: "正論より共感がほしい" }, { title: "事実を整理すること", subtitle: "何が起きたかをはっきりさせたい" }], dive: "自分が受け止められたと感じるのは、どんなリアクションがあったとき？" },
  { id: "q19", category: "もしも系", depth: 3, mode: "warm", prompt: "もし旅行先でトラブルが起きたら、どっちになりそう？", note: "責任感や動き方の違いが出ます。", options: [{ title: "まず自分が動く", subtitle: "解決のためにすぐ行動したい" }, { title: "相手と相談して決める", subtitle: "一緒に判断したい" }], dive: "トラブル時に相手に求めたい役割ってどんなもの？" },
  { id: "q20", category: "性格・価値観", depth: 3, mode: "deep", prompt: "大きな決断をするとき、頼るのはどっち？", note: "考え方の癖が出やすい質問です。", options: [{ title: "自分の直感", subtitle: "最後は感覚を信じたい" }, { title: "情報や現実性", subtitle: "納得できる材料がほしい" }], dive: "恋人に相談するとき、背中を押してほしい派？ 一緒に考えてほしい派？" },
  { id: "q21", category: "日常習慣", depth: 3, mode: "deep", prompt: "一緒に過ごしていて心地いいのはどっち？", note: "ふたりの空気感を知るテーマです。", options: [{ title: "会話がたくさんある時間", subtitle: "言葉でつながっていたい" }, { title: "無言でも平気な時間", subtitle: "同じ空間だけで満たされる" }], dive: "無言が気まずくなる瞬間ってある？ あるなら何がきっかけ？" },
  { id: "q22", category: "相手への印象", depth: 4, mode: "spark", prompt: "次のデートで一番うれしいのはどれ？", note: "軽いドキドキを楽しむお題です。", options: [{ title: "のんびりたくさん話す", subtitle: "じっくり向き合える時間" }, { title: "新しい場所に行く", subtitle: "一緒にワクワクしたい" }, { title: "少し特別な演出がある", subtitle: "印象に残るムードがほしい" }], dive: "次のデートで、さりげなく期待していることってある？" },
  { id: "q23", category: "恋愛観", depth: 4, mode: "spark", prompt: "相手に言われると一番照れるのはどれ？", note: "明るく話せる範囲のドキドキです。", options: [{ title: "かわいい・かっこいい", subtitle: "見た目の褒め言葉" }, { title: "一緒にいると落ち着く", subtitle: "存在そのものへの言葉" }, { title: "今日はいつもよりドキッとした", subtitle: "その日の特別感の言葉" }], dive: "照れつつもうれしい褒め方って、どんなトーンがちょうどいい？" },
  { id: "q24", category: "もしも系", depth: 4, mode: "spark", prompt: "ふたりでサプライズをするなら、どっちがうれしい？", note: "重くなりにくい演出系の質問です。", options: [{ title: "手紙や言葉中心", subtitle: "気持ちが伝わる方が好き" }, { title: "体験やおでかけ中心", subtitle: "思い出になる方が好き" }], dive: "相手にしてみたい小さなサプライズって何かある？" },
  { id: "q25", category: "性格・価値観", depth: 1, mode: "warm", prompt: "褒められるならどっちがうれしい？", note: "自分の見られたい面がわかります。", options: [{ title: "センスがいい", subtitle: "感覚や雰囲気を褒められたい" }, { title: "やさしい", subtitle: "人柄を褒められたい" }], dive: "自分ではあまり気づいていないけど、相手に見つけてほしい魅力はある？" },
  { id: "q26", category: "日常習慣", depth: 1, mode: "warm", prompt: "食事デートならどっち派？", note: "日常の好みを軽く知れるお題です。", options: [{ title: "定番のお気に入りに行く", subtitle: "安心して楽しめる" }, { title: "新しいお店を試す", subtitle: "ちょっと冒険したい" }], dive: "相手と行くなら、次はどんなお店を開拓してみたい？" },
  { id: "q27", category: "相手への印象", depth: 2, mode: "romance", prompt: "相手の魅力として近いのはどれ？", note: "答えの理由がそのまま会話のご褒美になります。", options: [{ title: "一緒にいると自然体になれる", subtitle: "安心感が強い" }, { title: "会うと気分が上がる", subtitle: "楽しさや高揚感がある" }, { title: "考え方に惹かれる", subtitle: "内面や価値観が魅力的" }], dive: "その魅力が特に出ていた最近の出来事って何かある？" },
  { id: "q28", category: "将来観", depth: 2, mode: "deep", prompt: "ふたりの時間で大事にしたいのはどっち？", note: "将来というより、関係を育てる感覚の質問です。", options: [{ title: "何気ない日常を積み重ねる", subtitle: "小さな幸せを大事にしたい" }, { title: "思い出に残る体験を増やす", subtitle: "特別な出来事を大事にしたい" }], dive: "いまのふたりに少し足すとしたら、日常と特別のどちらを増やしたい？" },
  { id: "q29", category: "恋愛観", depth: 3, mode: "deep", prompt: "好きが深まるきっかけはどれに近い？", note: "相手を試す意図ではなく、自分の動き方を知る質問です。", options: [{ title: "長い時間を一緒に過ごすこと", subtitle: "積み重ねで深まる" }, { title: "特別な瞬間を共有すること", subtitle: "印象的な出来事で深まる" }, { title: "本音を話せた瞬間", subtitle: "心が通った感覚で深まる" }], dive: "相手ともっと深まりたいとき、自分からはどんな行動をしやすい？" },
  { id: "q30", category: "もしも系", depth: 2, mode: "warm", prompt: "次の記念日、うれしいのはどっち？", note: "気軽な未来の話として答えられます。", options: [{ title: "しっかり予定を立てて祝う", subtitle: "特別感をちゃんと作りたい" }, { title: "自然においしいものを食べる", subtitle: "気負わず楽しく過ごしたい" }], dive: "記念日っぽさを感じるポイントって、演出？ 言葉？ 一緒にいる時間？" },
  { id: "q31", category: "性格・価値観", depth: 4, mode: "spark", prompt: "相手といるときに一番高まるのはどれ？", note: "明るいテンションで話せる範囲のドキドキです。", options: [{ title: "安心感", subtitle: "守られている感じ" }, { title: "高揚感", subtitle: "気分が上がる感じ" }, { title: "特別感", subtitle: "自分だけ感がある感じ" }], dive: "その感覚をもっと増やすには、どんな時間の過ごし方が合いそう？" },
  { id: "q32", category: "日常習慣", depth: 2, mode: "warm", prompt: "一緒にいる日の終わり、理想はどっち？", note: "距離感の心地よさを知る質問です。", options: [{ title: "余韻が残るくらいで解散", subtitle: "また会いたくなる感じがいい" }, { title: "満足するまで一緒にいたい", subtitle: "時間を惜しみたくない" }], dive: "その理想に近い終わり方をした日のこと、覚えているものはある？" },
  { id: "q33", category: "恋愛観", depth: 4, mode: "spark", prompt: "相手からのうれしい不意打ちはどれ？", note: "軽く照れられるくらいのテーマです。", options: [{ title: "急に褒められる", subtitle: "言葉でドキッとしたい" }, { title: "ふと手をつながれる", subtitle: "自然な触れ方に弱い" }, { title: "目を見て大事にされる", subtitle: "空気感で伝わるのがいい" }], dive: "相手にされるとうれしいけど、自分からは少し照れることってある？" },
  { id: "q34", category: "将来観", depth: 3, mode: "deep", prompt: "ふたりの関係で育てたいのはどっち？", note: "今後の方向感をやわらかく話せるお題です。", options: [{ title: "なんでも話せる安心感", subtitle: "本音を出しやすい土台" }, { title: "一緒に挑戦できる勢い", subtitle: "前向きに動ける関係" }], dive: "その関係に近づくために、最近できていることは何だと思う？" },
  { id: "q35", category: "相手への印象", depth: 1, mode: "romance", prompt: "相手の魅力が一番光る瞬間はどっち？", note: "シンプルだけど会話が広がりやすいお題です。", options: [{ title: "笑っているとき", subtitle: "雰囲気や表情に惹かれる" }, { title: "真剣なとき", subtitle: "ギャップや芯の強さに惹かれる" }], dive: "その瞬間を見たとき、自分の中ではどんな感情が動く？" },
  { id: "q36", category: "もしも系", depth: 4, mode: "spark", prompt: "次にふたりで試したい空気感はどれ？", note: "安全に未来のドキドキを話せる質問です。", options: [{ title: "まったり癒やし系", subtitle: "ゆっくり近い時間を楽しみたい" }, { title: "笑って盛り上がる系", subtitle: "テンション高めで楽しみたい" }, { title: "少し特別なムード系", subtitle: "いつもより雰囲気を作りたい" }], dive: "その空気感を作るなら、場所や時間帯はどんな感じが合いそう？" },
];

const SESSION_SIZE = 6;
const MAX_PASSES = 3;
const STORAGE_KEY = "heart-match-online-room";
const APP_CONFIG = window.APP_CONFIG || {};
const hasOnlineConfig = Boolean(APP_CONFIG.supabaseUrl && APP_CONFIG.supabaseAnonKey);

const state = {
  playMode: "local",
  myRole: "girlfriend",
  clientId: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
  online: {
    channel: null,
    roomCode: "",
    connected: false,
    peerConnected: false,
    peerRole: null,
    supabase: null,
  },
  game: createInitialGameState(),
};

function createInitialGameState() {
  return {
    config: {
      mode: "warm",
      depth: 2,
      categories: [...CATEGORIES],
    },
    round: 0,
    score: 0,
    streak: 0,
    bestStreak: 0,
    currentResponder: "girlfriend",
    currentQuestionId: null,
    phase: "setup",
    passRemaining: { girlfriend: MAX_PASSES, you: MAX_PASSES },
    sessionQuestionIds: [],
    actualAnswer: null,
    predictedAnswer: null,
    history: [],
  };
}

const setupPanel = document.getElementById("setup-panel");
const gamePanel = document.getElementById("game-panel");
const finalPanel = document.getElementById("final-panel");
const playModeOptions = document.getElementById("play-mode-options");
const roleOptions = document.getElementById("role-options");
const onlineControls = document.getElementById("online-controls");
const roomCodeInput = document.getElementById("room-code-input");
const createRoomButton = document.getElementById("create-room-button");
const joinRoomButton = document.getElementById("join-room-button");
const onlineStatusLabel = document.getElementById("online-status-label");
const peerStatusLabel = document.getElementById("peer-status-label");
const onlineHelp = document.getElementById("online-help");
const modeOptions = document.getElementById("mode-options");
const depthOptions = document.getElementById("depth-options");
const categoryOptions = document.getElementById("category-options");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const changeSettingsButton = document.getElementById("change-settings-button");
const roundLabel = document.getElementById("round-label");
const gaugeLabel = document.getElementById("gauge-label");
const gaugeFill = document.getElementById("gauge-fill");
const girlfriendPassLabel = document.getElementById("girlfriend-pass-label");
const youPassLabel = document.getElementById("you-pass-label");
const categoryBadge = document.getElementById("category-badge");
const depthBadge = document.getElementById("depth-badge");
const modeBadge = document.getElementById("mode-badge");
const questionText = document.getElementById("question-text");
const questionNote = document.getElementById("question-note");
const phaseLabel = document.getElementById("phase-label");
const turnTitle = document.getElementById("turn-title");
const turnInstruction = document.getElementById("turn-instruction");
const answerGrid = document.getElementById("answer-grid");
const passButton = document.getElementById("pass-button");
const turnView = document.getElementById("turn-view");
const transitionView = document.getElementById("transition-view");
const transitionText = document.getElementById("transition-text");
const nextPhaseButton = document.getElementById("next-phase-button");
const resultView = document.getElementById("result-view");
const responderLabel = document.getElementById("responder-label");
const predictorLabel = document.getElementById("predictor-label");
const actualAnswer = document.getElementById("actual-answer");
const predictedAnswer = document.getElementById("predicted-answer");
const judgementText = document.getElementById("judgement-text");
const roundFeedback = document.getElementById("round-feedback");
const deepDiveText = document.getElementById("deep-dive-text");
const nextRoundButton = document.getElementById("next-round-button");
const finalTitle = document.getElementById("final-title");
const finalMessage = document.getElementById("final-message");
const summaryGauge = document.getElementById("summary-gauge");
const summaryScore = document.getElementById("summary-score");
const summaryStreak = document.getElementById("summary-streak");
const categorySummary = document.getElementById("category-summary");
const insightSummary = document.getElementById("insight-summary");
const sessionBanner = document.getElementById("session-banner");
const sessionModeLabel = document.getElementById("session-mode-label");
const sessionRoomLabel = document.getElementById("session-room-label");
const sessionRoleLabel = document.getElementById("session-role-label");

function createChips(container, items, currentValue, onClick, allowMultiple = false) {
  container.innerHTML = "";
  items.forEach((item) => {
    const chip = document.createElement("button");
    chip.className = "chip";
    chip.type = "button";
    chip.textContent = item.label || item;
    const compareValue = item.id ?? item.label ?? item;
    const isActive = allowMultiple ? currentValue.includes(item.label || item) : currentValue === compareValue;
    if (isActive) {
      chip.classList.add("active");
    }
    chip.addEventListener("click", () => onClick(item));
    container.appendChild(chip);
  });
}

function renderSetup() {
  createChips(playModeOptions, PLAY_MODES, state.playMode, (item) => {
    state.playMode = item.id;
    if (item.id === "local") {
      disconnectRoom();
    }
    renderSetup();
  });

  onlineControls.hidden = state.playMode !== "online";

  createChips(roleOptions, ROLES, state.myRole, (item) => {
    state.myRole = item.id;
    saveRoomToStorage();
    renderSetup();
    renderSessionBanner();
  });

  createChips(modeOptions, MODES, state.game.config.mode, (item) => {
    state.game.config.mode = item.id;
    broadcastStateIfNeeded();
    renderSetup();
  });

  createChips(depthOptions, DEPTHS, state.game.config.depth, (item) => {
    state.game.config.depth = item.id;
    broadcastStateIfNeeded();
    renderSetup();
  });

  createChips(categoryOptions, CATEGORIES, state.game.config.categories, (item) => {
    if (state.game.config.categories.includes(item)) {
      if (state.game.config.categories.length > 1) {
        state.game.config.categories = state.game.config.categories.filter((category) => category !== item);
      }
    } else {
      state.game.config.categories = [...state.game.config.categories, item];
    }
    broadcastStateIfNeeded();
    renderSetup();
  }, true);

  roomCodeInput.value = state.online.roomCode;
  renderOnlineStatus();
}

function renderOnlineStatus(message) {
  if (state.playMode !== "online") {
    return;
  }

  if (!hasOnlineConfig) {
    onlineStatusLabel.textContent = "Supabase未設定";
    peerStatusLabel.textContent = "オンライン利用不可";
    onlineHelp.textContent = "config.js に Supabase URL と Anon Key を入れると、GitHub Pages 上でも2人で同期プレイできます。";
    return;
  }

  onlineStatusLabel.textContent = message || (state.online.connected ? `接続中: ${state.online.roomCode}` : "オンライン未接続");
  peerStatusLabel.textContent = state.online.peerConnected
    ? `相手参加中: ${state.online.peerRole === "girlfriend" ? "彼女" : "あなた"}`
    : "相手未参加";
  onlineHelp.textContent = state.online.connected
    ? "同じルームコードを相手に共有してください。開始後は回答や結果がリアルタイム同期されます。"
    : "ルームを作るか、共有されたルームコードで参加してください。";
}

function renderSessionBanner() {
  if (setupPanel.hidden && state.playMode) {
    sessionBanner.hidden = false;
  }
  sessionModeLabel.textContent = state.playMode === "online" ? "オンライン" : "ローカル";
  sessionRoomLabel.textContent = `ROOM ${state.online.roomCode || "-"}`;
  sessionRoleLabel.textContent = `あなた: ${state.myRole === "girlfriend" ? "彼女" : "あなた"}`;
}

function currentQuestion() {
  return QUESTIONS.find((question) => question.id === state.game.currentQuestionId);
}

function shuffle(list) {
  const copy = [...list];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function buildSessionQuestionIds() {
  const activeMode = MODES.find((mode) => mode.id === state.game.config.mode);
  return shuffle(
    QUESTIONS.filter((question) =>
      activeMode.questionModes.includes(question.mode) &&
      question.depth <= state.game.config.depth &&
      state.game.config.categories.includes(question.category)
    ).map((question) => question.id)
  ).slice(0, SESSION_SIZE);
}

function startGame() {
  const selectedConfig = {
    mode: state.game.config.mode,
    depth: state.game.config.depth,
    categories: [...state.game.config.categories],
  };

  if (state.playMode === "online" && !state.online.connected) {
    alert("オンラインで遊ぶには、先にルームを作成または参加してください。");
    return;
  }

  const ids = buildSessionQuestionIds();
  if (ids.length === 0) {
    alert("その条件では出題できる質問がありません。カテゴリか深さを広げてみてください。");
    return;
  }

  state.game = createInitialGameState();
  state.game.config = selectedConfig;
  state.game.sessionQuestionIds = ids;
  state.game.currentQuestionId = ids[0];
  state.game.phase = "answer";

  setupPanel.hidden = true;
  finalPanel.hidden = true;
  gamePanel.hidden = false;

  renderSessionBanner();
  renderGame();
  broadcastStateIfNeeded(true);
}

function renderGame() {
  if (state.game.phase === "finished") {
    renderFinal();
    return;
  }

  gamePanel.hidden = false;
  finalPanel.hidden = true;
  renderStatus();
  renderQuestionMeta();
  renderTurn();
  renderSessionBanner();
}

function renderStatus() {
  const total = state.game.sessionQuestionIds.length;
  const percent = total === 0 ? 0 : Math.round((state.game.score / total) * 100);
  roundLabel.textContent = `${state.game.round + 1} / ${total}`;
  gaugeLabel.textContent = `理解度 ${percent}%`;
  gaugeFill.style.width = `${percent}%`;
  girlfriendPassLabel.textContent = `彼女パス ${state.game.passRemaining.girlfriend}`;
  youPassLabel.textContent = `あなたパス ${state.game.passRemaining.you}`;
}

function renderQuestionMeta() {
  const question = currentQuestion();
  const mode = MODES.find((item) => item.id === state.game.config.mode);
  categoryBadge.textContent = question.category;
  depthBadge.textContent = `レベル${question.depth}`;
  modeBadge.textContent = mode.label;
  questionText.textContent = question.prompt;
  questionNote.textContent = question.note;
}

function canActInCurrentPhase() {
  if (state.playMode === "local") {
    return true;
  }
  const responder = state.game.currentResponder;
  const predictor = responder === "girlfriend" ? "you" : "girlfriend";
  if (state.game.phase === "answer") {
    return state.myRole === responder;
  }
  if (state.game.phase === "predict") {
    return state.myRole === predictor;
  }
  return true;
}

function renderTurn() {
  const question = currentQuestion();
  const responder = state.game.currentResponder;
  const predictor = responder === "girlfriend" ? "you" : "girlfriend";
  const responderName = responder === "girlfriend" ? "彼女" : "あなた";
  const predictorName = predictor === "girlfriend" ? "彼女" : "あなた";

  resultView.hidden = state.game.phase !== "result";
  transitionView.hidden = true;
  turnView.hidden = state.game.phase === "result";

  if (state.game.phase === "result") {
    responderLabel.textContent = `${responderName}の答え`;
    predictorLabel.textContent = `${predictorName}の予想`;
    actualAnswer.textContent = question.options[state.game.actualAnswer].title;
    predictedAnswer.textContent = question.options[state.game.predictedAnswer].title;
    const matched = state.game.actualAnswer === state.game.predictedAnswer;
    judgementText.textContent = matched ? "ぴったり正解" : "今回はズレあり";
    roundFeedback.textContent = matched
      ? `${predictorName}は${responderName}の気持ちをしっかり読めています。理由まで話すと、さらに理解が深まります。`
      : `ズレたのは会話のチャンスです。${responderName}が選んだ理由と、${predictorName}がそう予想した理由を比べてみてください。`;
    deepDiveText.textContent = question.dive;
    return;
  }

  const canAct = canActInCurrentPhase();
  passButton.hidden = state.game.phase !== "answer" || state.game.passRemaining[responder] <= 0 || !canAct;

  if (state.game.phase === "answer") {
    phaseLabel.textContent = "回答フェーズ";
    turnTitle.textContent = canAct ? `${responderName}が自分の答えを選ぶ番です` : `${responderName}の回答を待っています`;
    turnInstruction.textContent = canAct
      ? `${responderName}だけが画面を見て、自分の答えを選んでください。`
      : `${responderName}が回答すると、次に${predictorName}の予想フェーズへ自動で進みます。`;
    renderAnswerOptions(question.options, (index) => submitAnswer(index), canAct);
    return;
  }

  phaseLabel.textContent = "予想フェーズ";
  turnTitle.textContent = canAct ? `${predictorName}が相手の答えを予想します` : `${predictorName}の予想を待っています`;
  turnInstruction.textContent = canAct
    ? `${responderName}がどれを選んだと思うか、直感で当ててください。`
    : `${predictorName}が予想したら、答え合わせが両方の画面に表示されます。`;
  renderAnswerOptions(question.options, (index) => submitPrediction(index), canAct);
}

function renderAnswerOptions(options, onPick, enabled) {
  answerGrid.innerHTML = "";
  options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.innerHTML = `${option.title}<small>${option.subtitle}</small>`;
    button.disabled = !enabled;
    if (!enabled) {
      button.style.opacity = "0.55";
      button.style.cursor = "default";
    }
    button.addEventListener("click", () => enabled && onPick(index));
    answerGrid.appendChild(button);
  });
}

function submitAnswer(index) {
  state.game.actualAnswer = index;
  state.game.phase = state.playMode === "online" ? "predict" : "predict";
  renderGame();
  broadcastStateIfNeeded(true);
}

function submitPrediction(index) {
  state.game.predictedAnswer = index;
  const matched = state.game.actualAnswer === index;
  if (matched) {
    state.game.score += 1;
    state.game.streak += 1;
    state.game.bestStreak = Math.max(state.game.bestStreak, state.game.streak);
  } else {
    state.game.streak = 0;
  }
  state.game.history.push({
    questionId: state.game.currentQuestionId,
    responder: state.game.currentResponder,
    actualAnswer: state.game.actualAnswer,
    predictedAnswer: state.game.predictedAnswer,
    matched,
    passed: false,
  });
  state.game.phase = "result";
  renderGame();
  broadcastStateIfNeeded(true);
}

function handlePass() {
  const responder = state.game.currentResponder;
  if (state.game.passRemaining[responder] <= 0) {
    return;
  }
  state.game.passRemaining[responder] -= 1;
  state.game.streak = 0;
  state.game.history.push({
    questionId: state.game.currentQuestionId,
    responder,
    matched: false,
    passed: true,
  });
  goNextRound();
}

function goNextRound() {
  const nextRound = state.game.round + 1;
  if (nextRound >= state.game.sessionQuestionIds.length) {
    state.game.phase = "finished";
    renderFinal();
    broadcastStateIfNeeded(true);
    return;
  }
  state.game.round = nextRound;
  state.game.currentResponder = state.game.currentResponder === "girlfriend" ? "you" : "girlfriend";
  state.game.currentQuestionId = state.game.sessionQuestionIds[nextRound];
  state.game.actualAnswer = null;
  state.game.predictedAnswer = null;
  state.game.phase = "answer";
  renderGame();
  broadcastStateIfNeeded(true);
}

function renderFinal() {
  gamePanel.hidden = true;
  finalPanel.hidden = false;
  sessionBanner.hidden = true;

  const total = state.game.sessionQuestionIds.length;
  const percent = total === 0 ? 0 : Math.round((state.game.score / total) * 100);
  finalTitle.textContent = `理解度 ${percent}% でセッション完了`;
  finalMessage.textContent = percent >= 80
    ? "かなり息が合っています。答えが当たった問題も、ズレた問題も、理由を話すほどさらに深まりやすいふたりです。"
    : percent >= 50
      ? "いいバランスです。わかっている部分がしっかりありつつ、まだ知らない魅力や考え方も残っています。"
      : "今回は発見多めの回でした。ズレは相性の悪さではなく、まだ会話の余白があるサインです。";
  summaryGauge.textContent = `${percent}%`;
  summaryScore.textContent = `${state.game.score} / ${total}`;
  summaryStreak.textContent = `${state.game.bestStreak} 連続`;
  renderCategorySummary();
  renderInsights();
}

function renderCategorySummary() {
  const stats = {};
  state.game.history.filter((entry) => !entry.passed).forEach((entry) => {
    const question = QUESTIONS.find((item) => item.id === entry.questionId);
    const key = question.category;
    if (!stats[key]) {
      stats[key] = { total: 0, matched: 0 };
    }
    stats[key].total += 1;
    if (entry.matched) {
      stats[key].matched += 1;
    }
  });

  categorySummary.innerHTML = "";
  const rows = Object.entries(stats);
  if (rows.length === 0) {
    categorySummary.innerHTML = `<div class="stack-item"><span>今回は集計できる回答がありませんでした。</span><strong class="warn">0%</strong></div>`;
    return;
  }

  rows.forEach(([category, value]) => {
    const rate = Math.round((value.matched / value.total) * 100);
    const row = document.createElement("div");
    row.className = "stack-item";
    row.innerHTML = `<span>${category}</span><strong class="${rate >= 50 ? "good" : "warn"}">${rate}%</strong>`;
    categorySummary.appendChild(row);
  });
}

function renderInsights() {
  const passedCount = state.game.history.filter((entry) => entry.passed).length;
  const answered = state.game.history.filter((entry) => !entry.passed);
  const topMatch = summarizeCategory(answered, true);
  const topGap = summarizeCategory(answered, false);
  const lines = [
    topMatch ? `${topMatch}は感覚が合いやすいテーマでした。` : "今回は一致テーマをまだ測りきれていません。",
    topGap ? `${topGap}は話すほど理解が深まりそうなテーマです。` : "ズレたテーマが少なく、安定して読み合えていました。",
    passedCount > 0 ? `パスは${passedCount}回使われたので、無理なく遊べる空気を保てています。` : "パスなしで完走できたので、ちょうどよい深さで遊べていました。",
  ];

  insightSummary.innerHTML = "";
  lines.forEach((line) => {
    const row = document.createElement("div");
    row.className = "stack-item";
    row.innerHTML = `<span>${line}</span><strong class="good">OK</strong>`;
    insightSummary.appendChild(row);
  });
}

function summarizeCategory(answered, wantMatch) {
  const map = {};
  answered.forEach((entry) => {
    const question = QUESTIONS.find((item) => item.id === entry.questionId);
    const category = question.category;
    if (!map[category]) {
      map[category] = { total: 0, count: 0 };
    }
    map[category].total += 1;
    if ((wantMatch && entry.matched) || (!wantMatch && !entry.matched)) {
      map[category].count += 1;
    }
  });

  let best = null;
  let bestRate = 0;
  Object.entries(map).forEach(([category, value]) => {
    const rate = value.count / value.total;
    if (rate > bestRate) {
      bestRate = rate;
      best = category;
    }
  });
  return bestRate > 0 ? best : null;
}

function goToSetup() {
  gamePanel.hidden = true;
  finalPanel.hidden = true;
  setupPanel.hidden = false;
  sessionBanner.hidden = true;
  renderSetup();
}

function normalizeRoomCode(value) {
  return value.trim().toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6);
}

function generateRoomCode() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

async function ensureSupabase() {
  if (!hasOnlineConfig) {
    return null;
  }
  if (!state.online.supabase) {
    if (!window.supabase || !window.supabase.createClient) {
      await loadScript("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2");
    }
    state.online.supabase = window.supabase.createClient(APP_CONFIG.supabaseUrl, APP_CONFIG.supabaseAnonKey);
  }
  return state.online.supabase;
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function connectRoom(roomCode) {
  const code = normalizeRoomCode(roomCode);
  if (!code) {
    alert("ルームコードを入力してください。");
    return;
  }
  const supabase = await ensureSupabase();
  if (!supabase) {
    renderOnlineStatus();
    return;
  }

  await disconnectRoom();
  const channel = supabase.channel(`heart-match:${code}`, {
    config: {
      broadcast: { self: false },
      presence: { key: state.clientId },
    },
  });

  channel
    .on("broadcast", { event: "state-sync" }, ({ payload }) => {
      if (payload.senderId === state.clientId) {
        return;
      }
      applyIncomingGameState(payload.gameState);
    })
    .on("broadcast", { event: "sync-request" }, ({ payload }) => {
      if (payload.senderId !== state.clientId) {
        broadcastStateIfNeeded(true);
      }
    })
    .on("presence", { event: "sync" }, () => {
      const presence = channel.presenceState();
      const others = Object.values(presence).flat().filter((entry) => entry.clientId !== state.clientId);
      state.online.peerConnected = others.length > 0;
      state.online.peerRole = others[0]?.role || null;
      renderOnlineStatus();
    });

  const status = await channel.subscribe(async (subscribeStatus) => {
    if (subscribeStatus === "SUBSCRIBED") {
      await channel.track({ clientId: state.clientId, role: state.myRole, joinedAt: Date.now() });
      state.online.channel = channel;
      state.online.roomCode = code;
      state.online.connected = true;
      saveRoomToStorage();
      renderOnlineStatus(`接続中: ${code}`);
      renderSessionBanner();
      channel.send({ type: "broadcast", event: "sync-request", payload: { senderId: state.clientId } });
    }
  });

  return status;
}

async function disconnectRoom() {
  if (state.online.channel) {
    await state.online.channel.unsubscribe();
  }
  state.online.channel = null;
  state.online.connected = false;
  state.online.peerConnected = false;
  state.online.peerRole = null;
}

function applyIncomingGameState(incoming) {
  state.game = incoming;
  if (state.game.phase === "finished") {
    renderFinal();
  } else if (state.game.phase === "setup") {
    renderSetup();
  } else {
    setupPanel.hidden = true;
    gamePanel.hidden = false;
    finalPanel.hidden = true;
    renderGame();
  }
}

function broadcastStateIfNeeded(force = false) {
  if (state.playMode !== "online" || !state.online.channel || !state.online.connected) {
    return;
  }
  if (!force && !state.online.peerConnected) {
    return;
  }
  state.online.channel.send({
    type: "broadcast",
    event: "state-sync",
    payload: {
      senderId: state.clientId,
      gameState: state.game,
    },
  });
}

function saveRoomToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ roomCode: state.online.roomCode, myRole: state.myRole }));
}

function restoreRoomFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    state.online.roomCode = parsed.roomCode || "";
    state.myRole = parsed.myRole || state.myRole;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);
changeSettingsButton.addEventListener("click", goToSetup);
passButton.addEventListener("click", () => {
  handlePass();
  broadcastStateIfNeeded(true);
});
nextPhaseButton.addEventListener("click", () => {});
nextRoundButton.addEventListener("click", goNextRound);
roomCodeInput.addEventListener("input", (event) => {
  state.online.roomCode = normalizeRoomCode(event.target.value);
});
createRoomButton.addEventListener("click", async () => {
  state.online.roomCode = generateRoomCode();
  roomCodeInput.value = state.online.roomCode;
  await connectRoom(state.online.roomCode);
});
joinRoomButton.addEventListener("click", async () => {
  await connectRoom(roomCodeInput.value);
});

restoreRoomFromStorage();
renderSetup();
