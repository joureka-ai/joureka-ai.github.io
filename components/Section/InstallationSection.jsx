import React from "react";
import styles from "./Section.module.scss";

const InstallationSection = () => {

  return (
    <div className="d-flex flex-column justify-content-center h-100">
        <div className="row">
            <div className="col-12 pl-lg pr-md">
                <h1 className={styles.sectionTitle}>joureka lokal installieren</h1>
                <div className={styles.sectionDescription}>
                  <div>Damit deine Daten und die deiner 
                  Interviewpartner sicher sind, wird joureka auf deinem Rechner installiert. 
                  Nach einer abgeschlossenen Installation wird kein Internetzugang mehr benötigt.
                  </div>
                  <div className="mt-2">Da joureka lediglich begrenzt 
                  finanziert ist, wird von dir etwas technische Handwerklichkeit verlangt. 
                  Im Optimalfall kannst du mit den Begriffen Git, Docker und Python etwas anfangen. 
                  Für alle, denen diese Wörter nichts sagen, gibt es auch eine ausführlich Anleitung.
                  </div>
              </div>
          </div>
        </div>
        <div className="row mt-5">
            <div className={`col-12 col-lg-11 ${styles.blueContainer} ${styles.left}`}>
                <div className="row d-flex flex-row justify-content-center align-items-center py-5 px-2">
                <div className="pt-4 col-12 col-md-6 installation-step d-flex flex-row justify-content-start">
                    <div>
                      <div className="circle">1</div>
                    </div>
                    <div>
                      <div className="fw-bold">Kopieren der joureka-Dateien</div>
                      <p>Um die joureka App auf deinem Rechner zu installieren, benötigst du zuallererst 
                        den Quellcode. Diesen kannst du mittels eines Tools für die Verwaltung von 
                        Code - Git - herunterladen. Das Kopieren der Dateien führst du durch den 
                        folgenden Befehl und in der Kommandozeile aus:
                      </p>
                      <div className="code">git clone https://github.com/joureka-ai/joureka-app.git</div>
                    </div>
                  </div>
                  <div className="pt-4 col-12 col-md-6 mt-5 installation-step d-flex flex-row justify-content-start">
                    <div>
                      <div className="circle">2</div>
                    </div>
                    <div>
                      <div className="fw-bold">Installieren und starten der joureka App</div>
                      <p>Da alle nötigen Dateien auf deinem Rechner nun vorhanden sind, kannst du die 
                        Installation mittels Python und der Kommandozeile starten. Dafür musst du in 
                        der offenen Kommandozeile in den "joureka-app" Ordner gehen. Hier der Befehl dafür:
                      </p>
                      <div className="code">cd joureka-app</div>
                      <p className="pt-4">Endlich ist es soweit! Die joureka App kannst du jetzt mittels eines Befehls installieren:</p>
                      <div className="code">python start_joureka.py</div>
                      <p className="pt-4">Jetzt startet die Installation, dies wird eine Weile dauern. 
                        Je nachdem wie alt dein Rechner ist und wie schnell dein Internet kann dies unter Umständen bis zu 1,5 h dauern.
                      </p>
                      <p>Nach der einmaligen Installation kannst du den gleichen Befehl (<span className="fw-bold">python start_joureka.py</span>) verwenden, um joureka als App zu starten.</p>
                    </div>
                  </div>
                  <div className="pt-4 col-12 col-md-6 installation-step d-flex flex-row justify-content-start">
                    <div>
                      <div className="circle">3</div>
                    </div>
                    <div>
                      <div className="fw-bold">Ein erfolgreicher Start von joureka</div>
                      <p>Bei einem erfolgreichen Start von joureka wird dir das folgende 
                      in deiner Konsole angezeigt:
                      </p>
                      <div className="code-image"><img src="code_app_started.png" alt="Code app started" /></div>
                    </div>
                  </div>   
                  <div className="pt-4 col-12 col-md-6 installation-step d-flex flex-row justify-content-start">
                    <div>
                      <div className="circle">4</div>
                    </div>
                    <div>
                      <div className="fw-bold">Öffnen von joureka in deinem Browser</div>
                      <p>Nachdem du die vorherigen Schritte abgeschlossen hast und joureka, sozusagen, 
                        in deiner Konsole läuft, kannst du mittels deines Browsers (FireFox, Chrome, Opera ...) 
                        die eigentliche App verwenden. Dafür musst du die folgende Adresse in deinen Browser eingeben:
                      </p>
                      <div className="code">http://localhost:3000</div>
                    </div>
                  </div>                 
                </div> 
                <div className="col-1">
                </div>
                <div className="p-2 text-italic text-center"><small>
                  <span className="fw-bold">Du verstehst nur Bahnhof? </span> 
                  Hier findest du eine ausführliche und Betriebssystem spezifische 
                  <b><a target="_blank" href="https://github.com/joureka-ai/joureka-app" className="text-primary"> ANLEITUNG</a></b>.</small></div> 
            </div>
        </div>
    </div>
  );
};

export default InstallationSection;