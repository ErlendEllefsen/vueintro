<template>
  <div>
    <v-container>
      <v-container class="d-flex justify-center mb-6">
        <h1 class="header">Introduksjon</h1>
      </v-container>
    <v-container class="d-flex justify-center justify-space-between text-center">
        <v-card class="intro-card primary" elevation="10">
          <v-card-text>
            <v-icon
              x-large
              class="d-flex justify-center mb-6"
              color="icon"
            >
              mdi-vuejs
            </v-icon>
            <h1 class="d-flex justify-center display-1 text--primary">Hva er Vue?</h1>
            <div class="px-2 text--primary">
              <p class="mt-6 subtitle-1">
                Vue er ett Javascript-rammeverk som brukes til å bygge
                brukergrensensnitt og front-end applikasjoner.
              </p>
              <p class="subtitle-1">
                Vue er ett av de mest populære JS-rammeverkene og 
                populariteten stiger.
              </p>
            </div>
          </v-card-text>
        </v-card>
        <v-card class="intro-card primary" elevation="10">
          <v-card-text>
            <v-icon
              x-large
              class="d-flex justify-center mb-6"
              color="icon"
            >
              mdi-help
            </v-icon>
            <h1 class="d-flex justify-center display-1 text--primary">Hvorfor bruke Vue?</h1>
              <div class="px-2 text--primary">
                <p class="mt-6 subtitle-1">
                  Gjør det veldig lett å lage front-end applikasjoner som både er 
                  raske og lite ressurskrevende å kjøre.
                </p>
                <p class="subtitle-1">
                  Kan bygge kraftige single-page applikasjoner. Virtuell DOM holder styr på endringer
                  som gjøres og legger dem i det virkelige DOM. Bare de nødvendige komponentene på siden
                  blir oppdatert, ikke nødvendig å laste inn hele siden på nytt.
                </p>
              </div>
          </v-card-text>
        </v-card>
        <v-card class="intro-card primary" elevation="10">
          <v-card-text>
            <v-icon
              x-large
              class="d-flex justify-center mb-6"
              color="icon"
            >
              mdi-connection
            </v-icon>
            <h1 class="d-flex justify-center display-1 text--primary">Hvordan bruke Vue?</h1>
            <div class="px-2 text--primary">
              <p class="mt-6 subtitle-1">
                Lage komponenter som kan brukes om igjen.
              </p>
              <p class="subtitle-1">
                Bruke riktig verktøy: Vue-Cli, Vue Devtools, Vetur og dokumentasjonen til Vue
              </p>
            </div>
          </v-card-text>
        </v-card>
     </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Intro"
}
</script>
<style>
.color{
   color: var(--v-textcolor-base) !important;
}
.intro-card{
  width: 30%;
  float: left;
}
v-card-text{
  color: white;
}
.header{
  font-size: 3em;
}
</style>