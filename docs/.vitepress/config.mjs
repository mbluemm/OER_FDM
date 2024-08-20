import footnote from 'markdown-it-footnote'
import { defineConfig } from 'vitepress'

/* ■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■
    Konfigurationsdatei
  □■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■ */


// https:/vitepress.dev/reference/site-config
export default defineConfig({

  title: 'Technische Hochschule Köln',
  lang: 'de-DE',
  description: 'Lehreinheiten, Lernzielmatrizen, Kursmaterialien',
  base: '/OER_FDM/',

  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },

  // https:/vitepress.dev/reference/default-theme-config
  themeConfig: {

    logo: '/logo_TH_Koeln.png', 

    // ︶꒷꒦꒷︶꒷꒦꒷︶꒷︶꒷꒦꒷︶ Navigation
    nav: [
      {
        text: 'FDM@Studium.nrw',
        items: [
          { text: 'FDM@Studium.nrw', link: 'https://www.dh.nrw/kooperationen/FDM@Studium.nrw-97' },
          { text: 'Ministerium für Kultur und Wissenschaft des Landes Nordrhein-Westfalen', link: 'https://www.mkw.nrw/hochschule-und-forschung/digitalisierung-hochschule-und-wissenschaft/forschungsdatenmanagement-fdm' }
        ]
      },
      {
        text: 'Über das Projekt',
        items: [
        { text: 'Landesinitiative_NRW', link: 'https://fdm-nrw.coscine.de/#/?id=landesinitiative-für-forschungsdatenmanagement-fdmnrw' },
        { text: 'UDE', link: "https://www.uni-due.de/rds/fdm-curriculum.php" },
        { text: 'BUW', link: "https://fdm.uni-wuppertal.de/de/" },
        { text: 'TH Koeln', link: "https://www.th-koeln.de/informatik-und-ingenieurwissenschaften/fdmstudiumnrw_98785.php" }
        ]
      }],
  
    //︶꒷꒦꒷︶꒷꒦꒷︶꒷︶꒷꒦꒷︶ Sidebar
    sidebar: [
      {
    text: 'Lehrkonzepte für Dozierende',
    collapsed: true,
    items: [
      { text: '1. Forschungsdaten', link: '/konzepte/01_LE-Doz_Forschungsdaten.md' },
      { text: '2. Forschungsdatenmanagement', link: '/konzepte/02_LE-Doz_Forschungsdatenmanagement.md' },
      { text: '3. Datenlebenszyklus', link: '/konzepte/03_LE-Doz_Datenlebenszyklus.md' },
      { text: '4. FAIR-Prinzipien', link: '/konzepte/04_LE-Doz_FAIR-Prinzipien.md' },        
      { text: '5. Datendokumentation', link: '/konzepte/05_LE-Doz_Datendokumentation.md' },
      { text: '6. Metadaten', link: '/konzepte/06_LE-Doz_Metadaten.md' },
      { text: '7. Dateistruktur', link: '/konzepte/07_LE-Doz_Dateistruktur.md' },
      { text: '8. Daten speichern', link: '/konzepte/08_LE-Doz_Daten-Speichern.md' },
      { text: '9. Daten finden', link: '/konzepte/09_LE-Doz_Daten-Finden.md' },
      { text: '10. Recht', link: '/konzepte/10_LE-Doz_Rechtliche-Aspekte.md' },
      { text: '11. Ethik', link: '/konzepte/11_LE-Doz_Ethische-Aspekte.md' },
      { text: '12. Arbeiten im Team', link: '/konzepte/12_LE-Doz_Arbeiten-im-Team.md' },
      ]
    },
    {
      text: 'Lerneinheiten für Studierende',
      collapsed: true,
      items: [
        { text: '1. Forschungsdaten', link: '/texte/01_LE_Forschungsdaten.md' },
        { text: '2. Forschungsdatenmanagement', link: '/texte/02_LE_Forschungsdatenmanagement.md' },
        { text: '3. Datenlebenszyklus', link: '/texte/03_LE_Datenlebenszyklus.md' },       
        { text: '4. FAIR-Prinzipien', link: '/texte/04_LE_FAIR-Prinzipien.md' },
        { text: '5. Datendokumentation', link: '/texte/05_LE_Datendokumentation.md' },
        { text: '6. Metadaten', link: '/texte/06_LE_Metadaten.md' },
        { text: '7. Dateistruktur', link: '/texte/07_LE_Dateistruktur.md' },
        { text: '8. Daten speichern', link: '/texte/08_LE_Daten-Speichern.md' },
        { text: '9. Daten finden', link: '/texte/09_LE_Daten-Finden.md' },
        { text: '10. Recht', link: '/texte/10_LE_Rechtliche-Aspekte.md' },
        { text: '11. Ethik', link: '/texte/11_LE_Ethische-Aspekte.md' },
        { text: '12. Arbeiten im Team', link: '/texte/12_LE_Arbeiten-im-Team.md' },
        ]
      }
    ],
    
    //︶꒷꒦꒷︶꒷꒦꒷︶꒷︶꒷꒦꒷︶ Aside
    aside: {
    },
    socialLinks: [
      { icon: 'github',
        link: 'https://github.com/mbluemm/OER_FDM' },
    ],

    //︶꒷꒦꒷︶꒷꒦꒷︶꒷︶꒷꒦꒷︶ Footer 
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 <a href="https://www.dh.nrw/kooperationen/FDM@Studium.nrw-97" target="_blank">FDM@Studium.NRW</a>'
    },

    //︶꒷꒦꒷︶꒷꒦꒷︶꒷︶꒷꒦꒷︶ Timestamp
    lastUpdated: {
      text: 'Zuletzt aktualisiert am:',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    
  }
}
)


