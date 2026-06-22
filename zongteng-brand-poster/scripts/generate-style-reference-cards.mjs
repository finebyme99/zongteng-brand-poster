#!/usr/bin/env node

import { mkdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const root = process.cwd();
const outDir = path.resolve(root, "assets/style-reference-cards");
const logoUrl = imageDataUrl(path.resolve(root, "assets/group-logo/20260622-102250.png"));
const width = 1024;
const height = 768;

mkdirSync(outDir, { recursive: true });

function imageDataUrl(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mime = ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" : "image/png";
  return `data:${mime};base64,${readFileSync(filePath).toString("base64")}`;
}

function loadChromium() {
  const require = createRequire(import.meta.url);
  const searchPaths = [root];
  if (process.env.NODE_PATH) {
    searchPaths.push(...process.env.NODE_PATH.split(path.delimiter));
  }
  const resolved = require.resolve("playwright", { paths: searchPaths });
  const playwright = require(resolved);
  return playwright.chromium ?? playwright.default?.chromium;
}

const cards = [
  {
    file: "01-minimal-business.png",
    slug: "minimal-business",
    number: "01",
    titleCn: "极简商务",
    titleEn: "EXECUTIVE MINIMAL",
    caption: "留白 / 大字 / 品牌色",
    art: `
      <div class="rule r1"></div><div class="rule r2"></div>
      <div class="mass navy"></div><div class="mass photo"></div>
      <div class="thin-card">GLOBAL<br>INFRASTRUCTURE</div>
      <div class="micro-list"><span>01 STRATEGY</span><span>02 TRUST</span><span>03 SCALE</span></div>
    `
  },
  {
    file: "02-neo-brutalist.png",
    slug: "neo-brutalist",
    number: "02",
    titleCn: "新粗野主义",
    titleEn: "NEO BRUTALISM",
    caption: "粗边框 / 高反差 / 活动冲击",
    art: `
      <div class="brutal border-one">MAKE<br>IT<br>VISIBLE</div>
      <div class="brutal lime"></div><div class="brutal blue"></div><div class="brutal pink">ACTION</div>
      <div class="ticker">RUN FAST / STAY REAL / WIN TOGETHER</div>
      <div class="slashes"></div>
    `
  },
  {
    file: "03-neo-fauvist.png",
    slug: "neo-fauvist-color",
    number: "03",
    titleCn: "新野兽派色彩",
    titleEn: "JOYFUL COLOR FIELD",
    caption: "强色块 / 情绪化 / 文化活动",
    art: `
      <div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div><div class="blob b4"></div>
      <div class="color-title">VALUE<br>IN COLOR</div>
      <div class="color-chip c1">尊重</div><div class="color-chip c2">卓越</div><div class="color-chip c3">务实</div>
    `
  },
  {
    file: "04-swiss-grid.png",
    slug: "swiss-grid",
    number: "04",
    titleCn: "瑞士网格",
    titleEn: "SWISS INFORMATION GRID",
    caption: "秩序 / 编号 / 信息密度",
    art: `
      <div class="grid-bg"></div>
      <div class="grid-block block-a"></div><div class="grid-block block-b"></div>
      <div class="grid-copy"><b>01 / 04</b><span>清晰、克制、可复用的信息秩序</span></div>
      <div class="grid-index">A<br>B<br>C<br>D</div>
    `
  },
  {
    file: "05-bento-data.png",
    slug: "bento-grid",
    number: "05",
    titleCn: "Bento 信息卡",
    titleEn: "BENTO DATA WALL",
    caption: "模块 / 数据 / 长图友好",
    art: `
      <div class="bento bento-big">96%</div><div class="bento bento-small">HRAS</div>
      <div class="bento bento-chart"><span></span><span></span><span></span><span></span></div>
      <div class="bento bento-orange">BENTO</div><div class="bento bento-text">信息分层<br><em>Layered briefing</em></div>
      <div class="bento bento-line"></div>
    `
  },
  {
    file: "06-soft-3d-ip.png",
    slug: "soft-3d-mascot",
    number: "06",
    titleCn: "软萌 3D IP",
    titleEn: "SOFT CHARACTER HERO",
    caption: "价值观 / 亲和 / 员工文化",
    art: `
      <div class="orb o1"></div><div class="orb o2"></div><div class="orb o3"></div>
      <div class="character-face"><i></i><i></i><b></b></div>
      <div class="orbit"></div>
      <div class="value-pill p1">RESPECT</div><div class="value-pill p2">EXCELLENCE</div>
    `
  },
  {
    file: "07-glass-tech.png",
    slug: "glass-tech",
    number: "07",
    titleCn: "液态玻璃科技",
    titleEn: "LIQUID GLASS TECH",
    caption: "透明层 / 深蓝 / 数字服务",
    art: `
      <div class="tech-grid"></div><div class="glass g1">DIGITAL<br>SERVICE</div><div class="glass g2"></div>
      <div class="glass g3"><span>AI</span><span>DATA</span><span>FLOW</span></div>
      <div class="neon-line"></div><div class="halo"></div>
    `
  },
  {
    file: "08-editorial-collage.png",
    slug: "editorial-collage",
    number: "08",
    titleCn: "编辑拼贴",
    titleEn: "EDITORIAL COLLAGE",
    caption: "故事 / 图像层次 / 人物专题",
    art: `
      <div class="paper photo-a"></div><div class="paper photo-b"></div><div class="paper note"></div>
      <div class="headline-block">STORY<br>FIELD<br>NOTES</div>
      <div class="tape t1"></div><div class="tape t2"></div>
      <div class="caption-line">人物 / 团队 / 现场 / 复盘</div>
    `
  },
  {
    file: "09-cyber-neon.png",
    slug: "cyber-neon",
    number: "09",
    titleCn: "赛博数据",
    titleEn: "NEON DATA DASH",
    caption: "暗色 / 速度 / AI 数据主题",
    art: `
      <div class="cyber-grid"></div><div class="speed-line s1"></div><div class="speed-line s2"></div>
      <div class="cyber-title">SPEED<br>REPORT</div>
      <div class="data-dots"><i></i><i></i><i></i><i></i><i></i></div>
      <div class="scan"></div>
    `
  },
  {
    file: "10-tactile-paper.png",
    slug: "tactile-paper",
    number: "10",
    titleCn: "触感纸艺",
    titleEn: "TACTILE PAPER CRAFT",
    caption: "纸张 / 温度 / 关怀沟通",
    art: `
      <div class="paper-texture"></div>
      <div class="sheet sheet-a">CARE<br>WITH<br>TEXTURE</div><div class="sheet sheet-b"></div><div class="sheet sheet-c"></div>
      <div class="stitch"></div><div class="hand-line"></div>
      <div class="tiny-note">员工关怀 / 节日 / 书信感</div>
    `
  },
  {
    file: "11-surreal-gradient.png",
    slug: "surreal-gradient",
    number: "11",
    titleCn: "液态超现实",
    titleEn: "LIQUID GRADIENT WORLD",
    caption: "流体 / 未来感 / 活动预热",
    art: `
      <div class="mesh"></div><div class="liquid l1"></div><div class="liquid l2"></div><div class="liquid l3"></div>
      <div class="future">FUTURE<br>FLOW</div>
      <div class="glass-ring"></div>
    `
  },
  {
    file: "12-warm-humanist.png",
    slug: "warm-humanist",
    number: "12",
    titleCn: "温暖人文",
    titleEn: "WARM HUMANIST",
    caption: "照片感 / 叙事 / 员工真实感",
    art: `
      <div class="portrait-card"><span></span><i></i></div><div class="soft-panel">PEOPLE<br>FIRST</div>
      <div class="human-dot h1"></div><div class="human-dot h2"></div>
      <div class="warm-line"></div><div class="quote">Respect begins with seeing people clearly.</div>
    `
  }
];

function shell(card) {
  return `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; }
  body { margin: 0; background: #dfe4ec; font-family: Inter, "SF Pro Display", "PingFang SC", "Noto Sans CJK SC", "Microsoft YaHei", Arial, sans-serif; }
  .poster {
    position: relative;
    width: ${width}px;
    height: ${height}px;
    overflow: hidden;
    color: #051d49;
    background: #f7f9fc;
    isolation: isolate;
  }
  .brand-wrap {
    position: absolute;
    left: 54px;
    top: 42px;
    z-index: 12;
    width: 136px;
    min-height: 44px;
    display: flex;
    align-items: center;
    padding: 8px 10px;
    border-radius: 999px;
    background: rgba(255,255,255,.84);
    box-shadow: 0 12px 40px rgba(5,29,73,.12);
    backdrop-filter: blur(18px);
  }
  .brand-wrap img { display: block; width: 112px; height: auto; }
  .kicker {
    position: absolute;
    right: 54px;
    top: 48px;
    z-index: 12;
    font-size: 13px;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: rgba(5,29,73,.62);
  }
  .title-block {
    position: absolute;
    left: 54px;
    bottom: 48px;
    z-index: 12;
    max-width: 620px;
  }
  .num { font-size: 16px; font-weight: 800; color: #ef7622; margin-bottom: 12px; }
  h1 { margin: 0; font-size: 45px; line-height: .96; letter-spacing: 0; font-weight: 900; }
  h2 { margin: 10px 0 0; font-size: 15px; line-height: 1.2; letter-spacing: .08em; color: #ef7622; text-transform: uppercase; font-weight: 800; }
  .caption { margin-top: 12px; font-size: 14px; color: rgba(5,29,73,.66); }
  .art { position: absolute; inset: 0; z-index: 1; }
  .minimal-business { background: #f8fafc; }
  .minimal-business .r1 { position: absolute; left: 54px; top: 146px; width: 330px; height: 3px; background: #ef7622; }
  .minimal-business .r2 { position: absolute; right: 310px; top: 0; width: 1px; height: 100%; background: rgba(5,29,73,.12); }
  .minimal-business .mass.navy { position: absolute; right: 0; top: 0; width: 296px; height: 100%; background: #051d49; }
  .minimal-business .mass.photo { position: absolute; right: 112px; top: 112px; width: 230px; height: 420px; border: 1px solid rgba(255,255,255,.55); background: linear-gradient(135deg, rgba(255,255,255,.08), rgba(255,255,255,.02)), radial-gradient(circle at 70% 30%, rgba(239,118,34,.8), transparent 34%); }
  .minimal-business .thin-card { position: absolute; left: 56px; top: 202px; font-size: 54px; line-height: .94; font-weight: 900; letter-spacing: 0; }
  .minimal-business .micro-list { position: absolute; left: 56px; top: 458px; display: grid; gap: 10px; font-size: 14px; color: rgba(5,29,73,.56); }
  .neo-brutalist { background: #f2eddc; color: #0c0c0c; }
  .neo-brutalist .brand-wrap { border: 2px solid #0c0c0c; border-radius: 0; box-shadow: 8px 8px 0 #0c0c0c; }
  .neo-brutalist .kicker { color: #0c0c0c; }
  .neo-brutalist .title-block { color: #0c0c0c; }
  .neo-brutalist .brutal { position: absolute; border: 5px solid #0c0c0c; box-shadow: 12px 12px 0 #0c0c0c; }
  .neo-brutalist .border-one { left: 118px; top: 168px; width: 300px; height: 250px; padding: 24px; background: #ef7622; font-size: 47px; line-height: .9; font-weight: 950; }
  .neo-brutalist .lime { right: 114px; top: 118px; width: 350px; height: 142px; background: #70f05b; }
  .neo-brutalist .blue { right: 84px; top: 310px; width: 330px; height: 170px; background: #051d49; }
  .neo-brutalist .pink { left: 458px; top: 430px; width: 186px; height: 110px; display: grid; place-items: center; background: #ff4f7a; font-size: 24px; font-weight: 900; transform: rotate(-4deg); }
  .neo-brutalist .ticker { position: absolute; left: -12px; top: 520px; width: 1080px; padding: 16px 0; border-block: 4px solid #0c0c0c; background: #f9dc32; font-size: 22px; font-weight: 900; text-align: center; }
  .neo-brutalist .slashes { position: absolute; right: 88px; bottom: 92px; width: 270px; height: 70px; background: repeating-linear-gradient(60deg, #0c0c0c 0 5px, transparent 5px 28px); }
  .neo-fauvist-color { background: #fff7ed; }
  .neo-fauvist-color .blob { position: absolute; border-radius: 45% 55% 52% 48%; filter: saturate(1.15); mix-blend-mode: multiply; }
  .neo-fauvist-color .b1 { width: 360px; height: 315px; left: 84px; top: 120px; background: #ff4f6d; transform: rotate(-16deg); }
  .neo-fauvist-color .b2 { width: 420px; height: 310px; right: 82px; top: 118px; background: #1c7dff; transform: rotate(11deg); }
  .neo-fauvist-color .b3 { width: 360px; height: 300px; left: 284px; top: 280px; background: #ffd735; transform: rotate(8deg); }
  .neo-fauvist-color .b4 { width: 290px; height: 255px; right: 112px; bottom: 94px; background: #25c983; transform: rotate(-8deg); }
  .neo-fauvist-color .color-title { position: absolute; left: 98px; top: 250px; font-size: 80px; line-height: .86; font-weight: 950; color: #051d49; }
  .neo-fauvist-color .color-chip { position: absolute; padding: 12px 18px; border-radius: 999px; background: #fff; border: 2px solid #051d49; font-weight: 900; }
  .neo-fauvist-color .c1 { left: 110px; top: 480px; }.neo-fauvist-color .c2 { left: 220px; top: 532px; }.neo-fauvist-color .c3 { left: 345px; top: 485px; }
  .swiss-grid { background: #fbfbf7; }
  .swiss-grid .grid-bg { position: absolute; inset: 92px 74px 126px; background-image: linear-gradient(rgba(5,29,73,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(5,29,73,.08) 1px, transparent 1px); background-size: 56px 56px; }
  .swiss-grid .grid-block { position: absolute; top: 210px; height: 210px; }
  .swiss-grid .block-a { left: 106px; width: 280px; background: #051d49; }
  .swiss-grid .block-b { left: 386px; width: 310px; background: #ef7622; }
  .swiss-grid .grid-copy { position: absolute; left: 430px; top: 470px; display: grid; gap: 12px; font-size: 22px; }
  .swiss-grid .grid-copy b { font-size: 36px; }.swiss-grid .grid-copy span { max-width: 390px; color: rgba(5,29,73,.68); }
  .swiss-grid .grid-index { position: absolute; right: 120px; top: 166px; font-size: 86px; line-height: .86; font-weight: 950; color: rgba(5,29,73,.1); }
  .bento-grid { background: #eef3f9; }
  .bento-grid .bento { position: absolute; border-radius: 28px; background: rgba(255,255,255,.78); box-shadow: 0 24px 60px rgba(5,29,73,.12); border: 1px solid rgba(5,29,73,.08); }
  .bento-grid .bento-big { left: 100px; top: 160px; width: 286px; height: 180px; display: grid; place-items: center; background: #051d49; color: #fff; font-size: 78px; font-weight: 900; }
  .bento-grid .bento-small { left: 410px; top: 160px; width: 190px; height: 180px; display: grid; place-items: center; color: #051d49; font-size: 28px; font-weight: 900; }
  .bento-grid .bento-chart { left: 100px; top: 372px; width: 230px; height: 168px; display: flex; align-items: end; gap: 12px; padding: 24px; }
  .bento-grid .bento-chart span { flex: 1; border-radius: 12px 12px 0 0; background: #ef7622; }.bento-grid .bento-chart span:nth-child(1) { height: 42%; }.bento-grid .bento-chart span:nth-child(2) { height: 76%; }.bento-grid .bento-chart span:nth-child(3) { height: 58%; }.bento-grid .bento-chart span:nth-child(4) { height: 92%; }
  .bento-grid .bento-orange { right: 104px; top: 160px; width: 236px; height: 380px; display: grid; place-items: center; background: #ef7622; color: #fff; font-size: 38px; font-weight: 900; }
  .bento-grid .bento-text { left: 358px; top: 372px; width: 250px; height: 168px; padding: 38px; font-size: 28px; font-weight: 900; }.bento-grid .bento-text em { display: block; margin-top: 8px; font-size: 13px; font-style: normal; color: rgba(5,29,73,.54); }
  .bento-grid .bento-line { left: 626px; top: 372px; width: 96px; height: 168px; background: repeating-linear-gradient(45deg, #d6e0ec 0 10px, #fff 10px 20px); }
  .soft-3d-mascot { background: radial-gradient(circle at 74% 20%, #fff 0 14%, transparent 15%), linear-gradient(135deg, #d9f4ff, #eaf7f1 56%, #fff8e9); }
  .soft-3d-mascot .orb { position: absolute; border-radius: 999px; filter: blur(.1px); box-shadow: inset -18px -24px 38px rgba(5,29,73,.14), inset 18px 20px 36px rgba(255,255,255,.7), 0 34px 74px rgba(5,29,73,.14); }
  .soft-3d-mascot .o1 { width: 180px; height: 180px; left: 140px; top: 190px; background: #1c7dff; }.soft-3d-mascot .o2 { width: 140px; height: 140px; right: 184px; top: 132px; background: #ef7622; }.soft-3d-mascot .o3 { width: 120px; height: 120px; right: 330px; bottom: 190px; background: #ffd735; }
  .soft-3d-mascot .character-face { position: absolute; left: 385px; top: 190px; width: 250px; height: 250px; border-radius: 58% 42% 50% 50%; background: #fff; box-shadow: 0 34px 90px rgba(5,29,73,.2), inset -18px -22px 34px rgba(5,29,73,.09); }
  .soft-3d-mascot .character-face i { position: absolute; top: 82px; width: 36px; height: 58px; border-radius: 999px; background: #111; }.soft-3d-mascot .character-face i:first-child { left: 72px; }.soft-3d-mascot .character-face i:nth-child(2) { right: 72px; }.soft-3d-mascot .character-face b { position: absolute; left: 105px; top: 150px; width: 42px; height: 24px; border: solid #111; border-width: 0 0 5px; border-radius: 50%; }
  .soft-3d-mascot .orbit { position: absolute; left: 326px; top: 150px; width: 370px; height: 300px; border: 2px dashed rgba(5,29,73,.2); border-radius: 50%; transform: rotate(-18deg); }
  .soft-3d-mascot .value-pill { position: absolute; padding: 14px 20px; border-radius: 999px; background: #fff; box-shadow: 0 18px 40px rgba(5,29,73,.12); font-weight: 900; }.soft-3d-mascot .p1 { left: 246px; top: 492px; }.soft-3d-mascot .p2 { right: 148px; top: 500px; }
  .glass-tech { background: radial-gradient(circle at 76% 15%, rgba(61,145,255,.8), transparent 28%), linear-gradient(140deg, #030b1b 0%, #07285b 48%, #0b62c4 100%); color: #fff; }
  .glass-tech .title-block h1, .glass-tech .title-block .caption { color: #fff; }.glass-tech .kicker { color: rgba(255,255,255,.72); }
  .glass-tech .tech-grid { position: absolute; inset: 110px 80px; background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 44px 44px; mask-image: linear-gradient(to bottom, transparent, #000 15%, #000 78%, transparent); }
  .glass-tech .glass { position: absolute; border: 1px solid rgba(255,255,255,.34); background: rgba(255,255,255,.15); box-shadow: inset 0 1px rgba(255,255,255,.35), 0 28px 80px rgba(0,0,0,.22); backdrop-filter: blur(18px); border-radius: 28px; }
  .glass-tech .g1 { left: 110px; top: 210px; width: 310px; height: 210px; padding: 45px; font-size: 42px; line-height: .92; font-weight: 900; }
  .glass-tech .g2 { left: 380px; top: 154px; width: 350px; height: 230px; }
  .glass-tech .g3 { right: 102px; top: 310px; width: 210px; height: 210px; padding: 34px; display: grid; gap: 12px; font-weight: 900; }
  .glass-tech .neon-line { position: absolute; left: 160px; top: 405px; width: 380px; height: 4px; background: #ef7622; box-shadow: 0 0 28px #ef7622; }.glass-tech .halo { position: absolute; right: -90px; bottom: -110px; width: 360px; height: 360px; border-radius: 50%; background: radial-gradient(circle, rgba(255,255,255,.22), transparent 65%); }
  .editorial-collage { background: #f6f0e6; }
  .editorial-collage .paper { position: absolute; box-shadow: 0 24px 70px rgba(5,29,73,.16); }
  .editorial-collage .photo-a { left: 132px; top: 170px; width: 290px; height: 360px; background: linear-gradient(135deg, #051d49 0 55%, #dfe8f5 56%); transform: rotate(-2deg); }
  .editorial-collage .photo-b { right: 130px; top: 146px; width: 330px; height: 242px; background: linear-gradient(150deg, #dce7f4 0 50%, #ef7622 51%); transform: rotate(3deg); }
  .editorial-collage .note { right: 180px; top: 410px; width: 300px; height: 160px; background: #fff; transform: rotate(-7deg); }
  .editorial-collage .headline-block { position: absolute; left: 172px; top: 220px; color: #fff; font-size: 58px; line-height: .85; font-weight: 950; }
  .editorial-collage .tape { position: absolute; height: 34px; background: rgba(239,118,34,.72); transform: rotate(-4deg); }.editorial-collage .t1 { left: 116px; top: 148px; width: 130px; }.editorial-collage .t2 { right: 260px; top: 118px; width: 150px; }
  .editorial-collage .caption-line { position: absolute; right: 160px; top: 472px; font-size: 24px; font-weight: 900; }
  .cyber-neon { background: #020712; color: #fff; }
  .cyber-neon .title-block h1, .cyber-neon .title-block .caption { color: #fff; }.cyber-neon .kicker { color: rgba(255,255,255,.6); }
  .cyber-neon .cyber-grid { position: absolute; inset: 116px 86px 124px; border: 1px solid rgba(0,210,255,.35); background-image: linear-gradient(rgba(0,210,255,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(0,210,255,.22) 1px, transparent 1px); background-size: 48px 48px; }
  .cyber-neon .speed-line { position: absolute; left: 140px; height: 4px; background: linear-gradient(90deg, #00e5ff, #ff4fd8, #ef7622); box-shadow: 0 0 24px #00e5ff; transform: skewY(-6deg); }.cyber-neon .s1 { top: 412px; width: 720px; }.cyber-neon .s2 { top: 470px; width: 540px; opacity: .45; }
  .cyber-neon .cyber-title { position: absolute; left: 132px; top: 188px; font-size: 86px; line-height: .84; font-weight: 950; color: #00e5ff; text-shadow: 0 0 28px rgba(0,229,255,.55); }
  .cyber-neon .data-dots { position: absolute; left: 174px; top: 500px; display: flex; gap: 54px; }.cyber-neon .data-dots i { width: 8px; height: 8px; border-radius: 50%; background: #fff; box-shadow: 0 0 14px #fff; }
  .cyber-neon .scan { position: absolute; inset: 0; background: repeating-linear-gradient(to bottom, transparent 0 5px, rgba(255,255,255,.03) 5px 7px); mix-blend-mode: screen; }
  .tactile-paper { background: #f4eadb; }
  .tactile-paper .paper-texture { position: absolute; inset: 0; background: radial-gradient(circle at 20% 20%, rgba(5,29,73,.06), transparent 13%), radial-gradient(circle at 80% 70%, rgba(239,118,34,.08), transparent 16%), repeating-linear-gradient(9deg, rgba(5,29,73,.03) 0 1px, transparent 1px 7px); opacity: .9; }
  .tactile-paper .sheet { position: absolute; background: #fffdf6; box-shadow: 0 26px 70px rgba(83,56,28,.18); }
  .tactile-paper .sheet-a { left: 112px; top: 170px; width: 330px; height: 310px; padding: 52px 42px; font-size: 52px; line-height: .88; font-weight: 950; }
  .tactile-paper .sheet-b { left: 382px; top: 136px; width: 270px; height: 230px; background: #fff6e7; transform: rotate(2deg); }
  .tactile-paper .sheet-c { right: 130px; top: 274px; width: 230px; height: 210px; background: #dce8f5; transform: rotate(-4deg); }
  .tactile-paper .stitch { position: absolute; left: 100px; top: 520px; width: 520px; height: 3px; background: repeating-linear-gradient(90deg, #051d49 0 18px, transparent 18px 32px); opacity: .36; }
  .tactile-paper .hand-line { position: absolute; right: 136px; top: 516px; width: 260px; height: 60px; border: solid #ef7622; border-width: 0 0 5px; border-radius: 50%; transform: rotate(-6deg); }
  .tactile-paper .tiny-note { position: absolute; right: 136px; top: 584px; color: rgba(5,29,73,.58); font-weight: 700; }
  .surreal-gradient { background: #101d49; color: #fff; }
  .surreal-gradient .title-block h1, .surreal-gradient .title-block .caption { color: #fff; }.surreal-gradient .kicker { color: rgba(255,255,255,.7); }
  .surreal-gradient .mesh { position: absolute; inset: 0; background: radial-gradient(circle at 24% 26%, #1c7dff 0 22%, transparent 38%), radial-gradient(circle at 72% 26%, #ef7622 0 24%, transparent 42%), radial-gradient(circle at 52% 74%, #aebcff 0 32%, transparent 48%), linear-gradient(140deg, #051d49, #4c61ff); filter: saturate(1.18); }
  .surreal-gradient .liquid { position: absolute; border-radius: 50%; filter: blur(.2px); box-shadow: 0 36px 90px rgba(0,0,0,.22); }.surreal-gradient .l1 { left: 118px; top: 176px; width: 420px; height: 280px; background: #1c7dff; }.surreal-gradient .l2 { right: 98px; top: 178px; width: 420px; height: 300px; background: #ef7622; }.surreal-gradient .l3 { left: 332px; top: 300px; width: 390px; height: 230px; background: #fff; }
  .surreal-gradient .future { position: absolute; left: 126px; top: 260px; font-size: 88px; line-height: .84; font-weight: 950; color: #04163b; mix-blend-mode: multiply; }
  .surreal-gradient .glass-ring { position: absolute; right: 160px; bottom: 160px; width: 190px; height: 190px; border-radius: 50%; border: 38px solid rgba(255,255,255,.45); backdrop-filter: blur(8px); }
  .warm-humanist { background: linear-gradient(135deg, #fff7ea 0%, #e7f1ff 55%, #fff 100%); }
  .warm-humanist .portrait-card { position: absolute; left: 126px; top: 172px; width: 330px; height: 390px; border-radius: 34px; background: linear-gradient(145deg, #efc99e, #f6dcc0); box-shadow: 0 32px 80px rgba(83,56,28,.17); overflow: hidden; }
  .warm-humanist .portrait-card span { position: absolute; left: 80px; top: 74px; width: 146px; height: 146px; border-radius: 50%; background: #d69b5b; }.warm-humanist .portrait-card i { position: absolute; left: 54px; bottom: -78px; width: 230px; height: 230px; border-radius: 50%; background: #fff4e8; }
  .warm-humanist .soft-panel { position: absolute; right: 110px; top: 214px; width: 330px; height: 250px; border-radius: 32px; background: rgba(255,255,255,.78); box-shadow: 0 24px 70px rgba(5,29,73,.12); padding: 54px; font-size: 54px; line-height: .9; font-weight: 950; }
  .warm-humanist .human-dot { position: absolute; border-radius: 50%; background: #ef7622; opacity: .9; }.warm-humanist .h1 { width: 34px; height: 34px; right: 400px; top: 166px; }.warm-humanist .h2 { width: 22px; height: 22px; right: 86px; top: 520px; background: #1c7dff; }
  .warm-humanist .warm-line { position: absolute; right: 158px; top: 428px; width: 220px; height: 4px; background: #ef7622; }.warm-humanist .quote { position: absolute; right: 134px; top: 500px; width: 350px; color: rgba(5,29,73,.6); font-weight: 700; }
</style>
</head>
<body>
  <main class="poster ${card.slug}">
    <div class="brand-wrap"><img src="${logoUrl}" alt="Zongteng"></div>
    <div class="kicker">WEB INSPIRED POSTER</div>
    <section class="art">${card.art}</section>
    <section class="title-block">
      <div class="num">${card.number}</div>
      <h1>${card.titleCn}</h1>
      <h2>${card.titleEn}</h2>
      <div class="caption">${card.caption}</div>
    </section>
  </main>
</body>
</html>`;
}

function overviewHtml() {
  const images = cards.map((card) => {
    const src = imageDataUrl(path.join(outDir, card.file));
    return `<figure><img src="${src}" alt="${card.titleCn}"><figcaption>${card.number} ${card.titleCn}<small>${card.titleEn}</small></figcaption></figure>`;
  }).join("");
  return `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; }
  body { margin: 0; background: #edf1f7; font-family: Inter, "SF Pro Display", "PingFang SC", "Noto Sans CJK SC", "Microsoft YaHei", Arial, sans-serif; color: #051d49; }
  .board { width: 1440px; min-height: 1760px; padding: 54px; background: #edf1f7; }
  header { display: flex; align-items: end; justify-content: space-between; margin-bottom: 34px; }
  h1 { margin: 0; font-size: 48px; line-height: .96; letter-spacing: 0; font-weight: 950; }
  p { margin: 0; max-width: 520px; color: rgba(5,29,73,.62); font-size: 19px; line-height: 1.45; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }
  figure { margin: 0; overflow: hidden; border-radius: 22px; background: #fff; box-shadow: 0 24px 80px rgba(5,29,73,.12); }
  img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }
  figcaption { min-height: 70px; padding: 16px 18px 18px; font-size: 20px; font-weight: 900; }
  small { display: block; margin-top: 5px; color: #ef7622; font-size: 12px; letter-spacing: .08em; }
</style>
</head>
<body>
  <main class="board">
    <header>
      <h1>纵腾海报<br>视觉风格参考</h1>
      <p>从前沿网页设计的首屏、作品集、互动站点和灵感库中提炼，转化为可用 HTML/CSS 落地的海报方向。</p>
    </header>
    <section class="grid">${images}</section>
  </main>
</body>
</html>`;
}

const chromium = loadChromium();
if (!chromium) {
  throw new Error("Playwright was found, but chromium could not be loaded.");
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });

for (const card of cards) {
  await page.setContent(shell(card), { waitUntil: "load" });
  await page.evaluate(() => document.fonts?.ready);
  await page.locator(".poster").screenshot({ path: path.join(outDir, card.file) });
  console.log(`Generated ${card.file}`);
}

await page.setViewportSize({ width: 1440, height: 1760 });
await page.setContent(overviewHtml(), { waitUntil: "load" });
await page.evaluate(() => document.fonts?.ready);
await page.locator(".board").screenshot({ path: path.join(outDir, "style-reference-overview.png") });
console.log("Generated style-reference-overview.png");

await browser.close();
