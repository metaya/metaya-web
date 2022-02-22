<template>
  <div>
    <section>
      <div class="container d-flex h-100">
        <div class="row">
          <div class="col-md-6 col-12 align-self-center py-4">
            <h2 class="text-white text-center"><strong class="text-secondary">Building the first</strong> Metaverse ready <br> NFT platform dedicated to e-Sports.</h2>
          </div>
          <div class="col-md-6 col-12 py-4">
            <video controls="controls" src="@/assets/metaya-banner.mp4" width="100%">
              Your browser does not support the HTML5 video element.
            </video>
          </div>
        </div>
      </div>
    </section>

    <section id="about">
      <div class="container mb-5">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="header text-gradient">Mision</h1>
            <div class="text-white">
              <p class="quotation">
                METAYA aims to create a decentralized NFT platform dedicated to the Asian eSports community and to led the tectonic shift in media distribution, IP monetization and advertising and community building. Built on the Flow blockchain, METAYA will allow eSports fans, collectors, players and IP providers to interact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mb-5">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="header-2 header-bg-gradient">Traditional Model</h1>
            <p class="h5 text-white mt-3 mb-5">• Traditional consumption model Sports market undervalued</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-12 px-md-4 px-5 my-3"><img class="banner" src="@/assets/pic/producers.png" alt="producers"></div>
          <div v-if="isMobile" class="col-md-4 col-12 px-md-4 px-5 my-3"><img class="banner" src="@/assets/pic/consumption-channels-m.png" alt="consumption-channels"></div>
          <div v-else class="col-md-4 col-12 px-md-4 px-5 my-3"><img class="banner" src="@/assets/pic/consumption-channels.png" alt="consumption-channels"></div>
          <div class="col-md-4 col-12 px-md-4 px-5 my-3"><img class="banner" src="@/assets/pic/consumers.png" alt="consumers"></div>
        </div>
      </div>
    </section>

    <section id="howitworks">
      <div class="container mb-5">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="header-2 header-bg-gradient">Our Model</h1>
            <div class="h5 text-white text-left mt-3 mb-5 px-md-5 px-2">
              <p class="mb-1">• Metaya creates a fun, interactive, and profitable platform for all parties.</p>
              <p class="mb-1">• Renewed identities in Metaverse powered by NFT, digital currency and monetization.</p>
            </div>
            <img v-if="isMobile" class="banner" src="@/assets/pic/metaya-model-m.png" alt="our model">
            <img v-else class="banner" src="@/assets/pic/metaya-model.png" alt="our model">
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mb-5">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="header-2 header-bg-gradient">Benefits</h1>
            <div class="h5 text-white text-left mt-3 mb-5 px-md-5 px-2">
              <p class="mb-1">• Metaya creates a fun, interactive, and profitable platform for all parties.</p>
              <p class="mb-1">• Renewed identities in Metaverse powered by NFT, digital currency and monetization.</p>
            </div>
            <div class="row">
              <div class="col-md-6 col-12 my-4"><img src="@/assets/pic/nft-networks.png" width="90%" alt="nft-networks"></div>
              <div class="col-md-6 col-12 my-4"><img src="@/assets/pic/benefits.png" width="90%" alt="enefits"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="team">
      <div class="container">
        <div class="row mb-4">
          <div class="col-12 text-center">
            <h2 class="header-2 header-bg-gradient">Our Team</h2>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-lg-3 col-md-6 col-12 px-4 mb-5">
            <div v-if="isMobile">
              <div class="row d-flex h-100">
                <div class="col-5 align-self-center">
                  <img src="@/assets/team/joseph-zhou.png" width="100%" class="rounded-circle">
                </div>
                <div class="col-7 align-self-center">
                  <div>
                    <p class="member-name text-white">Joseph Zhou</p>
                    <p class="member-title text-primary">CEO</p>
                    <img src="@/assets/team/joseph-career.png" class="member-career">
                    <div>
                      <a href="#"><img src="@/assets/media/linkedin.png" class="member-social"></a>
                      <a href="https://twitter.com/JosephZhou01" target="_blank"><img src="@/assets/media/twitter.png" class="member-social"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <img src="@/assets/team/joseph-zhou.png" width="200px" class="rounded-circle mb-4">
              <div>
                <p class="member-name text-white">Joseph Zhou</p>
                <p class="member-title text-primary">CEO</p>
                <img src="@/assets/team/joseph-career.png" class="member-career">
                <div>
                  <a href="#"><img src="@/assets/media/linkedin.png" class="member-social"></a>
                  <a href="https://twitter.com/JosephZhou01" target="_blank"><img src="@/assets/media/twitter.png" class="member-social"></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 px-4 mb-5">
            <div v-if="isMobile">
              <div class="row d-flex h-100">
                <div class="col-5 align-self-center">
                  <img src="@/assets/team/mas-karasawa.png" width="100%" class="rounded-circle">
                </div>
                <div class="col-7 align-self-center">
                  <div>
                    <p class="member-name text-white">Mas Karasawa</p>
                    <p class="member-title text-primary">CTO</p>
                    <img src="@/assets/team/mas-career.png" class="member-career">
                    <div>
                      <a href="#"><img src="@/assets/media/linkedin.png" class="member-social"></a>
                      <a href="https://twitter.com/masrk777" target="_blank"><img src="@/assets/media/twitter.png" class="member-social"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <img src="@/assets/team/mas-karasawa.png" width="200px" class="rounded-circle mb-4">
              <div>
                <p class="member-name text-white">Mas Karasawa</p>
                <p class="member-title text-primary">CTO</p>
                <img src="@/assets/team/mas-career.png" class="member-career">
                <div>
                  <a href="#"><img src="@/assets/media/linkedin.png" class="member-social"></a>
                  <a href="https://twitter.com/masrk777" target="_blank"><img src="@/assets/media/twitter.png" class="member-social"></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 px-4 mb-5">
            <div v-if="isMobile">
              <div class="row d-flex h-100">
                <div class="col-5 align-self-center">
                  <img src="@/assets/team/xin-tong.png" width="100%" class="rounded-circle">
                </div>
                <div class="col-7 align-self-center">
                  <div>
                    <p class="member-name text-white">Xin Tong</p>
                    <p class="member-title text-primary">CPO</p>
                    <img src="@/assets/team/xin-career.png" class="member-career">
                    <div>
                      <a href="#"><img src="@/assets/media/linkedin.png" class="member-social"></a>
                      <a href="#" target="_blank"><img src="@/assets/media/twitter.png" class="member-social"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <img src="@/assets/team/xin-tong.png" width="200px" class="rounded-circle mb-4">
              <div>
                <p class="member-name text-white">Xin Tong</p>
                <p class="member-title text-primary">CPO</p>
                <img src="@/assets/team/xin-career.png" class="member-career">
                <div>
                  <a href="#"><img src="@/assets/media/linkedin.png" class="member-social"></a>
                  <a href="#" target="_blank"><img src="@/assets/media/twitter.png" class="member-social"></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 px-4 mb-5">
            <div v-if="isMobile">
              <div class="row d-flex h-100">
                <div class="col-5 align-self-center">
                  <img src="@/assets/team/mimi-vong.png" width="100%" class="rounded-circle">
                </div>
                <div class="col-7 align-self-center">
                  <div>
                    <p class="member-name text-white">Mimi Vong</p>
                    <p class="member-title text-primary">CFO</p>
                    <img src="@/assets/team/mimi-career.png" class="member-career">
                    <div>
                      <a href="https://www.linkedin.com/in/mimivong/"><img src="@/assets/media/linkedin.png" class="member-social"></a>
                      <a href="https://twitter.com/mimivong" target="_blank"><img src="@/assets/media/twitter.png" class="member-social"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <img src="@/assets/team/mimi-vong.png" width="200px" class="rounded-circle mb-4">
              <div>
                <p class="member-name text-white">Mimi Vong</p>
                <p class="member-title text-primary">CFO</p>
                <img src="@/assets/team/mimi-career.png" class="member-career">
                <div>
                  <a href="https://www.linkedin.com/in/mimivong/"><img src="@/assets/media/linkedin.png" class="member-social"></a>
                  <a href="https://twitter.com/mimivong" target="_blank"><img src="@/assets/media/twitter.png" class="member-social"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row mb-4">
          <div class="col-12 text-center">
            <h2 class="header-2 header-bg-gradient">Advisors</h2>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-4 col-12 px-4 mb-5">
            <div v-if="isMobile">
              <div class="row d-flex h-100">
                <div class="col-5 align-self-center">
                  <img src="@/assets/team/alvin-foo.png" width="100%" class="rounded-circle">
                </div>
                <div class="col-7 align-self-center">
                  <div>
                    <p class="member-name text-white">Alvin Foo</p>
                    <p class="member-title text-primary">President of Nasdex</p>
                    <div>
                      <a href="https://www.linkedin.com/in/alvinfsc/"><img src="@/assets/media/linkedin.png" class="member-social"></a>
                      <a href="https://twitter.com/Alvinfoo" target="_blank"><img src="@/assets/media/twitter.png" class="member-social"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <img src="@/assets/team/alvin-foo.png" width="200px" class="rounded-circle mb-4">
              <div>
                <p class="member-name text-white">JAlvin Foo</p>
                <p class="member-title text-primary">President of Nasdex</p>
                <div>
                  <a href="https://www.linkedin.com/in/alvinfsc/"><img src="@/assets/media/linkedin.png" class="member-social"></a>
                  <a href="https://twitter.com/Alvinfoo" target="_blank"><img src="@/assets/media/twitter.png" class="member-social"></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12 px-4 mb-5">
            <div v-if="isMobile">
              <div class="row d-flex h-100">
                <div class="col-5 align-self-center">
                  <img src="@/assets/team/koh-kashiwa.png" width="100%" class="rounded-circle">
                </div>
                <div class="col-7 align-self-center">
                  <div>
                    <p class="member-name text-white">Koh Kashiwa</p>
                    <p class="member-title text-primary">CTO Soundlinks</p>
                    <div>
                      <a href="#"><img src="@/assets/media/linkedin.png" class="member-social"></a>
                      <a href="#" target="_blank"><img src="@/assets/media/twitter.png" class="member-social"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <img src="@/assets/team/koh-kashiwa.png" width="200px" class="rounded-circle mb-4">
              <div>
                <p class="member-name text-white">Koh Kashiwa</p>
                <p class="member-title text-primary">CTO Soundlinks</p>
                <div>
                  <a href="#"><img src="@/assets/media/linkedin.png" class="member-social"></a>
                  <a href="#" target="_blank"><img src="@/assets/media/twitter.png" class="member-social"></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12 px-4 mb-5">
            <div v-if="isMobile">
              <div class="row d-flex h-100">
                <div class="col-5 align-self-center">
                  <img src="@/assets/team/donald-zhang.png" width="100%" class="rounded-circle">
                </div>
                <div class="col-7 align-self-center">
                  <div>
                    <p class="member-name text-white">Donald Zhang</p>
                    <p class="member-title text-primary">COO</p>
                    <div>
                      <a href="#"><img src="@/assets/media/linkedin.png" class="member-social"></a>
                      <a href="https://twitter.com/pawfectworld" target="_blank"><img src="@/assets/media/twitter.png" class="member-social"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <img src="@/assets/team/donald-zhang.png" width="200px" class="rounded-circle mb-4">
              <div>
                <p class="member-name text-white">Donald Zhang</p>
                <p class="member-title text-primary">COO</p>
                <div>
                  <a href="#"><img src="@/assets/media/linkedin.png" class="member-social"></a>
                  <a href="https://twitter.com/pawfectworld" target="_blank"><img src="@/assets/media/twitter.png" class="member-social"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row mb-4">
          <div class="col-12 text-center">
            <h2 class="header-2 header-bg-gradient">Elite Backing</h2>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-4 col-12 px-4 mb-5">
            <div v-if="isMobile">
              <div class="row d-flex h-100">
                <div class="col-5 align-self-center">
                  <img src="@/assets/club/edg.png" width="100%" class="rounded-circle">
                </div>
                <div class="col-7 align-self-center">
                  <div>
                    <p class="member-name text-white">EDward Gaming eSports Club</p>
                    <p class="member-title text-secondary">EDG电子竞技俱乐部</p>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <img src="@/assets/club/edg.png" width="200px" class="rounded-circle mb-4">
              <div>
                <p class="member-name text-white">EDward Gaming eSports Club</p>
                <p class="member-title text-primary">EDG电子竞技俱乐部</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12 px-4 mb-5">
            <div v-if="isMobile">
              <div class="row d-flex h-100">
                <div class="col-5 align-self-center">
                  <img src="@/assets/club/rng.png" width="100%" class="rounded-circle">
                </div>
                <div class="col-7 align-self-center">
                  <div>
                    <p class="member-name text-white">Royal Never Give Up eSports Club</p>
                    <p class="member-title text-secondary">RNG电子竞技俱乐部</p>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <img src="@/assets/club/rng.png" width="200px" class="rounded-circle mb-4">
              <div>
                <p class="member-name text-white">Royal Never Give Up eSports Club</p>
                <p class="member-title text-primary">RNG电子竞技俱乐部</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12 px-4 mb-5">
            <div v-if="isMobile">
              <div class="row d-flex h-100">
                <div class="col-5 align-self-center">
                  <img src="@/assets/club/ig.png" width="100%" class="rounded-circle">
                </div>
                <div class="col-7 align-self-center">
                  <div>
                    <p class="member-name text-white">Invictus Gaming eSports Club</p>
                    <p class="member-title text-secondary">iG电子竞技俱乐部</p>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <img src="@/assets/club/ig.png" width="200px" class="rounded-circle mb-4">
              <div>
                <p class="member-name text-white">Invictus Gaming eSports Club</p>
                <p class="member-title text-primary">iG电子竞技俱乐部</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mb-5">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="header-2 header-bg-gradient">Roadmap</h1>
            <div class="h5 text-white text-left mt-3 mb-5 px-md-5 px-2">
              <p class="mb-1">• IDO wil be completed by 2022 Q1.</p>
              <p class="mb-1">• Metaverse-ready in 2022 Q4 Full stacks ready including Applications, PaaS and Blockchain Layer.</p>
            </div>
            <div class="row">
              <div class="col-12 text-center px-5">
                <img v-if="isMobile" class="banner" src="@/assets/pic/roadmap-m.png" alt="roadmap">
                <img v-else class="banner" src="@/assets/pic/roadmap.png" alt="roadmpa">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="container pb-4">
        <div class="row px-5 pt-5 mb-5">
          <div class="text-center col-12">
            <h2 class="header text-lighter">Have any questions?</h2>
          </div>
          <div class="text-center col-12">
            <p class="h5 text-white">Perhaps you will find the answer to your question in our documentation. If not, you can always contact us by our email:
              <a href="mailto:metaya@metaya.io" class="btn btn-primary btn-sm mx-2 my-3">metaya@metaya.io</a>
            </p>
          </div>
        </div>
        <div class="row px-2 mb-5">
          <div class="col-12 text-center text-white">
            <img src="@/assets/media/media-linkedin.png" width="40px" class="mx-3">
            <img src="@/assets/media/media-twitter.png" width="40px" class="mx-3">
            <img src="@/assets/media/media-discord.png" width="40px" class="mx-3">
            <img src="@/assets/media/media-telegram.png" width="40px" class="mx-3">
          </div>
        </div>
        <div class="row px-2 mb-5">
          <div class="col-12 text-center text-white">
            <span class="h6 mx-3">Privacy policy</span>
            <span class="h6 mx-3">Terms & Conditions</span>
          </div>
        </div>
        <div class="row text-center py-4">
          <div class="col-12">
            <img src="@/assets/metaya-logo-white.png" height="60" class="d-inline-block mb-4">
            <p class="text-white mb-4">
              &#169;2022 Metaya. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created() {
  },
};
</script>

<style scoped>
.banner {
  max-width:100%;
  max-height:100%;
}

.header {
  text-transform: uppercase;
  font-size: 44px;
  font-weight: bold;
  color: white;
  margin: 25px 10px;
}

@media only screen and (max-width: 768px) {
  .header {
    font-size: 30px;
  }
}

.header-2 {
  text-transform: uppercase;
  font-size: 32px;
  font-family: bold;
  color: white;
  margin: 25px 10px;
  letter-spacing: 0.1em;
}

@media only screen and (max-width: 768px) {
  .header-2 {
    font-size: 26px;
    margin: 20px 0;
  }
}

.text-lighter {
  font-weight: lighter !important;
}

.text-gradient {
  display: inline-block;
  background-image: linear-gradient(90deg, #c531a9, #00a6a1);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}

.header-bg-gradient {
  display: inline-block;
  background-image: linear-gradient(90deg, #c531a9, #00a6a1);
  background-size: 100%;
  border-radius: 8px;
  padding: 6px 26px;
}

.bg-gradient {
  background-image: linear-gradient(90deg, #c531a9, #00a6a1);
  background-size: 100%;
}

.quotation {
  padding: 20px 100px;
  font-size: 20px;
  line-height: 1.4;
  text-align: justify;
}

@media only screen and (max-width: 767px) {
  .quotation {
    padding: 20px 20px;
  }
}

.member-name {
  font-size: 18px;
  padding: 0;
  margin: 0;
}

.member-title {
  font-size: 18px;
  line-height: 28px;
  padding: 0;
  margin: 0;
}

.member-social {
  height: 16px;
  line-height: 28px;
  vertical-align: baseline;
  margin-left: 5px;
  margin-right: 5px;
}

.member-career {
  width: 100%;
  margin: 20px 0;
}

@media only screen and (max-width: 767px) {
  .member-career {
    margin: 5px 0;
  }
}

.social {
  height: 40px;
  width: 40px;
}

.right-border {
  border-right: 1px solid white;
}

.flag {
  vertical-align:sub;
  height: 30px;
  margin-right: 5px;
}

#scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  cursor: pointer;
}
</style>
