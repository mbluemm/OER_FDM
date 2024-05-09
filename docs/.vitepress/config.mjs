import footnote from 'markdown-it-footnote'
import { defineConfig } from 'vitepress'

/* ■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■
    Konfigurationsdatei
  □■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■ */


// https:/vitepress.dev/reference/site-config
export default defineConfig({

  title: 'Technische Hochschule Köln',
  lang: 'de-DE',
  description: 'Vorlesungskripte, Lerzielmatrizen, Kursmaterialien',
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
      { text: '1. Forschungsdaten', link: '/lz/LE_Forschungsdaten_LZ.md' },
      { text: '2. Forschungsdatenmanagement', link: '/lz/LE_Forschungsdatenmanagement_LZ.md' },
      { text: '3. Datenlebenszyklus', link: '/lz/LE_Datenlebenszyklus_LZ.md' },
      { text: '4. FAIR-Prinzipien', link: '/lz/LE_FAIR-Prinzipien_LZ.md' },        
      { text: '5. Datendokumentation', link: '/lz/LE_Datendokumentation_LZ.md' },
      { text: '6. Metadaten', link: '/lz/LE_Metadaten_LZ.md' },
      { text: '7. Dateistruktur', link: '/lz/LE_Dateistruktur_LZ.md' },
      { text: '8. Daten speichern', link: '/lz/LE_Daten-Speichern_LZ.md' },
      { text: '9. Daten finden', link: '/lz/LE_Daten-Finden_LZ.md' },
      { text: '10. Recht', link: '/lz/LE_Recht_LZ.md' },
      { text: '11. Ethik', link: '/lz/LE_Ethik_LZ.md' },
      { text: '12. Arbeiten im Team', link: '/lz/LE_Arbeiten-im-Team_LZ.md' },
      ]
    },
    {
      text: 'Lerneinheiten für Studierende',
      collapsed: true,
      items: [
        { text: '1. Forschungsdaten', link: '/texte/LE_Forschungsdaten.md' },
        { text: '2. Forschungsdatenmanagement', link: '/texte/LE_Forschungsdatenmanagement.md' },
        { text: '3. Datenlebenszyklus', link: '/texte/LE_Datenlebenszyklus.md' },       
        { text: '4. FAIR-Prinzipien', link: '/texte/LE_FAIR-Prinzipien.md' },
        { text: '5. Datendokumentation', link: '/texte/LE_Datendokumentation.md' },
        { text: '6. Metadaten', link: '/texte/LE_Metadaten.md' },
        { text: '7. Dateistruktur', link: '/texte/LE_Dateistruktur.md' },
        { text: '8. Daten speichern', link: '/texte/LE_Daten_Speichern.md' },
        { text: '9. Daten finden', link: '/texte/LE_Daten_Finden.md' },
        { text: '10. Recht', link: '/texte/LE_Recht.md' },
        { text: '11. Ethik', link: '/texte/LE_Ethik.md' },
        { text: '12. Arbeiten im Team', link: '/texte/LE_Arbeiten-im-Team.md' },
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


