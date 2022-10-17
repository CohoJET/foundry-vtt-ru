export function InitMythras() {
    // Настройка активации Babele
    game.settings.register("ru-ru", "compendiumTranslation", {
      name: "Перевод библиотек",
      hint: "(Требуется модуль Babele) Некоторые библиотеки системы Mythras будут переведены.",
      type: Boolean,
      default: true,
      scope: "world",
      config: true,
      restricted: true,
      onChange: (value) => {
        window.location.reload();
      },
    });
  
    // Регистрация Babele
    if (typeof Babele !== "undefined") {
      Babele.get().register({
        module: "ru-ru",
        lang: "ru",
        dir: "compendium/mythras",
      });
    } else {
      if (game.settings.get("ru-ru", "compendiumTranslation")) {
        new Dialog({
          title: "Перевод библиотек",
          content: `<p>Для перевода библиотек системы Mythras требуется активировать модуль <b>Babele</b>. Вы можете отключить перевод библиотек в настройках модуля</p>`,
          buttons: {
            done: {
              label: "Хорошо",
            },
            never: {
              label: "Больше не показывать",
              callback: () => {
                game.settings.set("ru-ru", "compendiumTranslation", false);
              },
            },
          },
        }).render(true);
      }
    }
  }
  