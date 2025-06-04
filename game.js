var _STRINGS = {
    'Ad': {
      'Mobile': {
        'Preroll': {
          'ReadyIn': "The game is ready in ",
          'Loading': "Your game is loading...",
          'Close': 'Close'
        },
        'Header': {
          'ReadyIn': "The game is ready in ",
          'Loading': "Your game is loading...",
          'Close': 'Close'
        },
        'End': {
          'ReadyIn': "Advertisement ends in ",
          'Loading': "Please wait ...",
          'Close': 'Close'
        }
      }
    },
    'Splash': {
      'Loading': "Loading ...",
      'LogoLine1': "Some text here",
      'LogoLine2': "powered by MarketJS",
      'LogoLine3': 'none',
      'TapToStart': "TAP TO START"
    },
    'Game': {
      'kills': 'KILLS',
      'area': 'WAVE',
      'reward': 'REVIVE',
      'reward2': "AND TRY AGAIN?",
      'gameover': "GAME OVER",
      'settings': 'SETTINGS',
      'pause': 'PAUSE',
      'off': 'OFF',
      'on': 'ON',
      'yes': 'YES',
      'no': 'NO',
      'score': 'SCORE',
      'best': 'BEST'
    },
    'Results': {
      'Title': "High score"
    }
  },
  _SETTINGS = {
    'API': {
      'Enabled': !0x0,
      'Log': {
        'Events': {
          'InitializeGame': !0x0,
          'EndGame': !0x0,
          'Level': {
            'Begin': !0x0,
            'End': !0x0,
            'Win': !0x0,
            'Lose': !0x0,
            'Draw': !0x0
          }
        }
      }
    },
    'Ad': {
      'Mobile': {
        'Preroll': {
          'Enabled': !0x1,
          'Duration': 0x5,
          'Width': 0x12c,
          'Height': 0xfa,
          'Rotation': {
            'Enabled': !0x1,
            'Weight': {
              'MobileAdInGamePreroll': 0x28,
              'MobileAdInGamePreroll2': 0x28,
              'MobileAdInGamePreroll3': 0x14
            }
          }
        },
        'Header': {
          'Enabled': !0x1,
          'Duration': 0x5,
          'Width': 0x140,
          'Height': 0x32,
          'Rotation': {
            'Enabled': !0x1,
            'Weight': {
              'MobileAdInGameHeader': 0x28,
              'MobileAdInGameHeader2': 0x28,
              'MobileAdInGameHeader3': 0x14
            }
          }
        },
        'Footer': {
          'Enabled': !0x1,
          'Duration': 0x5,
          'Width': 0x140,
          'Height': 0x32,
          'Rotation': {
            'Enabled': !0x1,
            'Weight': {
              'MobileAdInGameFooter': 0x28,
              'MobileAdInGameFooter2': 0x28,
              'MobileAdInGameFooter3': 0x14
            }
          }
        },
        'End': {
          'Enabled': !0x1,
          'Duration': 0x1,
          'Width': 0x12c,
          'Height': 0xfa,
          'Rotation': {
            'Enabled': !0x1,
            'Weight': {
              'MobileAdInGameEnd': 0x28,
              'MobileAdInGameEnd2': 0x28,
              'MobileAdInGameEnd3': 0x14
            }
          }
        }
      }
    },
    'Language': {
      'Default': 'en'
    },
    'DeveloperBranding': {
      'Splash': {
        'Enabled': !0x1
      },
      'Logo': {
        'Enabled': !0x1,
        'Link': 'http://google.com',
        'LinkEnabled': !0x1,
        'NewWindow': !0x0,
        'Width': 0xa6,
        'Height': 0x3d
      }
    },
    'Branding': {
      'Splash': {
        'Enabled': !0x1
      },
      'Logo': {
        'Enabled': !0x0,
        'Link': 'http://google.com',
        'LinkEnabled': !0x1,
        'NewWindow': !0x0,
        'Width': 0xa6,
        'Height': 0x3d
      }
    },
    'MoreGames': {
      'Enabled': !0x1,
      'Link': 'http://www.marketjs.com/game/links/mobile',
      'NewWindow': !0x0
    },
    'TapToStartAudioUnlock': {
      'Enabled': !0x1
    },
    'Versioning': {
      'Version': '1.0.0',
      'Build': '3',
      'DisplayLog': !0x0,
      'DrawVersion': !0x0,
      'FontSize': '16px',
      'FontFamily': 'Arial',
      'FillStyle': '#000000'
    },
    'RewardedVideo': {
      'Enabled': !0x0
    },
    'Game': {
      'LevelID': {
        'MAIN_MENU': 0x1,
        'GAME': 0x2
      },
      'EnemySetRange': {
        'EASY': [0x0, 0x2],
        'MEDIUM': [0x3, 0x5],
        'HARD': [0x6, 0x8]
      },
      'EnemySets': [[{
        'type': 'tank',
        'pos': {
          'x': 0x4b0,
          'y': -0x258
        }
      }, {
        'type': 'assassin',
        'pos': {
          'x': 0x5dc,
          'y': -0x258
        }
      }], [{
        'type': 'fighter',
        'pos': {
          'x': 0x4b0,
          'y': -0x258
        }
      }, {
        'type': 'fighter',
        'pos': {
          'x': 0x5dc,
          'y': -0x258
        }
      }], [{
        'type': 'assassin',
        'pos': {
          'x': 0x4b0,
          'y': -0x258
        }
      }, {
        'type': 'assassin',
        'pos': {
          'x': 0x5dc,
          'y': -0x258
        }
      }], [{
        'type': 'tank',
        'pos': {
          'x': 0x3e8,
          'y': -0x258
        }
      }, {
        'type': 'fighter',
        'pos': {
          'x': 0x4b0,
          'y': -0x258
        }
      }, {
        'type': 'assassin',
        'pos': {
          'x': 0x5dc,
          'y': -0x258
        }
      }], [{
        'type': 'tank',
        'pos': {
          'x': 0x3e8,
          'y': -0x258
        }
      }, {
        'type': 'tank',
        'pos': {
          'x': 0x4b0,
          'y': -0x258
        }
      }, {
        'type': 'assassin',
        'pos': {
          'x': 0x5dc,
          'y': -0x258
        }
      }], [{
        'type': 'fighter',
        'pos': {
          'x': 0x3e8,
          'y': -0x258
        }
      }, {
        'type': 'fighter',
        'pos': {
          'x': 0x4b0,
          'y': -0x258
        }
      }, {
        'type': 'assassin',
        'pos': {
          'x': 0x5dc,
          'y': -0x258
        }
      }], [{
        'type': 'tank',
        'pos': {
          'x': 0x3e8,
          'y': -0x258
        }
      }, {
        'type': 'fighter',
        'pos': {
          'x': 0x4b0,
          'y': -0x258
        }
      }, {
        'type': 'assassin',
        'pos': {
          'x': 0x546,
          'y': -0x258
        }
      }, {
        'type': 'assassin',
        'pos': {
          'x': 0x5dc,
          'y': -0x258
        }
      }], [{
        'type': 'tank',
        'pos': {
          'x': 0x3e8,
          'y': -0x258
        }
      }, {
        'type': 'fighter',
        'pos': {
          'x': 0x4b0,
          'y': -0x258
        }
      }, {
        'type': 'fighter',
        'pos': {
          'x': 0x546,
          'y': -0x258
        }
      }, {
        'type': 'assassin',
        'pos': {
          'x': 0x5dc,
          'y': -0x258
        }
      }], [{
        'type': 'fighter',
        'pos': {
          'x': 0x3e8,
          'y': -0x258
        }
      }, {
        'type': 'fighter',
        'pos': {
          'x': 0x4b0,
          'y': -0x258
        }
      }, {
        'type': 'assassin',
        'pos': {
          'x': 0x546,
          'y': -0x258
        }
      }, {
        'type': 'assassin',
        'pos': {
          'x': 0x5dc,
          'y': -0x258
        }
      }]],
      'DecorationSets': [[{
        'id': 0x2,
        'x': 0x0,
        'y': 0x0
      }, {
        'id': 0x4,
        'x': 0xaf,
        'y': -0x177
      }, {
        'id': 0x4,
        'x': -0xaf,
        'y': -0x177
      }, {
        'id': 0x3,
        'x': 0xfa,
        'y': -0x433
      }], [{
        'id': 0x2,
        'x': 0x0,
        'y': 0x0
      }, {
        'id': 0x4,
        'x': 0x0,
        'y': -0x23f
      }, {
        'id': 0x3,
        'x': 0xfa,
        'y': -0x433
      }, {
        'id': 0x3,
        'x': -0xfa,
        'y': -0x433
      }], [{
        'id': 0x4,
        'x': -0x258,
        'y': -0x177
      }, {
        'id': 0x2,
        'x': -0x15e,
        'y': 0x0
      }, {
        'id': 0x3,
        'x': 0x0,
        'y': -0x28a
      }, {
        'id': 0x2,
        'x': 0x15e,
        'y': 0x0
      }, {
        'id': 0x4,
        'x': 0x258,
        'y': -0x177
      }, {
        'id': 0x1,
        'x': 0x258,
        'y': 0x0
      }], [{
        'id': 0x4,
        'x': -0x258,
        'y': -0x177
      }, {
        'id': 0x3,
        'x': -0x15e,
        'y': -0x28a
      }, {
        'id': 0x2,
        'x': 0x0,
        'y': 0x0
      }, {
        'id': 0x3,
        'x': 0x15e,
        'y': -0x28a
      }, {
        'id': 0x4,
        'x': 0x258,
        'y': -0x177
      }, {
        'id': 0x1,
        'x': 0x258,
        'y': 0x0
      }], [{
        'id': 0x0,
        'x': -0x145,
        'y': 0x0
      }, {
        'id': 0x2,
        'x': -0x12c,
        'y': 0x0
      }, {
        'id': 0x4,
        'x': 0x0,
        'y': -0x177
      }, {
        'id': 0x1,
        'x': 0xfa,
        'y': 0x0
      }, {
        'id': 0x2,
        'x': 0x12c,
        'y': 0x0
      }, {
        'id': 0x4,
        'x': 0x258,
        'y': -0x177
      }], [{
        'id': 0x3,
        'x': -0x1f4,
        'y': -0x28a
      }, {
        'id': 0x4,
        'x': -0x12c,
        'y': -0x177
      }, {
        'id': 0x2,
        'x': 0x0,
        'y': 0x0
      }, {
        'id': 0x4,
        'x': 0x12c,
        'y': -0x177
      }, {
        'id': 0x3,
        'x': 0x1f4,
        'y': -0x28a
      }], [{
        'id': 0x2,
        'x': -0x190,
        'y': 0x0
      }, {
        'id': 0x3,
        'x': -0x64,
        'y': -0x28a
      }, {
        'id': 0x4,
        'x': 0x64,
        'y': -0x177
      }, {
        'id': 0x3,
        'x': 0x12c,
        'y': -0x28a
      }, {
        'id': 0x4,
        'x': 0x1f4,
        'y': -0x177
      }], [{
        'id': 0x3,
        'x': -0x1f4,
        'y': -0x352
      }, {
        'id': 0x2,
        'x': -0x64,
        'y': 0x0
      }, {
        'id': 0x4,
        'x': 0xc8,
        'y': -0x177
      }, {
        'id': 0x0,
        'x': 0x2ee,
        'y': 0x0
      }], [{
        'id': 0x1,
        'x': -0x177,
        'y': 0x0
      }, {
        'id': 0x2,
        'x': -0x177,
        'y': 0x0
      }, {
        'id': 0x3,
        'x': 0x177,
        'y': -0x352
      }, {
        'id': 0x4,
        'x': 0x0,
        'y': -0x113
      }], [{
        'id': 0x1,
        'x': -0x177,
        'y': 0x0
      }, {
        'id': 0x3,
        'x': -0x177,
        'y': -0x352
      }, {
        'id': 0x2,
        'x': 0x0,
        'y': 0x0
      }, {
        'id': 0x4,
        'x': 0x113,
        'y': -0x177
      }, {
        'id': 0x0,
        'x': 0x307,
        'y': 0x0
      }]]
    }
  };
'undefined' !== typeof _SETTINGS.Versioning && null !== _SETTINGS.Versioning && !0x0 === _SETTINGS.Versioning.DisplayLog && console.log("Release: v" + _SETTINGS.Versioning.Version + '+build.' + _SETTINGS.Versioning.Build);
var MobileAdInGamePreroll = {
    'ad_duration': _SETTINGS.Ad.Mobile.Preroll.Duration,
    'ad_width': _SETTINGS.Ad.Mobile.Preroll.Width,
    'ad_height': _SETTINGS.Ad.Mobile.Preroll.Height,
    'ready_in': _STRINGS.Ad.Mobile.Preroll.ReadyIn,
    'loading': _STRINGS.Ad.Mobile.Preroll.Loading,
    'close': _STRINGS.Ad.Mobile.Preroll.Close + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Initialize': function () {
      if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
        var _0x134fa2 = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight,
          _0x394f34 = _0x134fa2.MobileAdInGamePreroll,
          _0x12a4a6 = _0x394f34 + _0x134fa2.MobileAdInGamePreroll2,
          _0x134fa2 = _0x12a4a6 + _0x134fa2.MobileAdInGamePreroll3,
          _0x5b44e3 = Math.floor(0x64 * Math.random());
        console.log("seed: ", _0x5b44e3), _0x5b44e3 <= _0x394f34 ? this.selectedOverlayName = 'MobileAdInGamePreroll' : _0x5b44e3 <= _0x12a4a6 ? this.selectedOverlayName = 'MobileAdInGamePreroll2' : _0x5b44e3 <= _0x134fa2 && (this.selectedOverlayName = 'MobileAdInGamePreroll3'), console.log("Ad rotating preroll enabled");
      } else this.selectedOverlayName = 'MobileAdInGamePreroll', console.log("Ad rotating preroll disabled");
      console.log('selected:', this.selectedOverlayName), this.overlay = $('#' + this.selectedOverlayName), this.box = $('#' + this.selectedOverlayName + '-Box'), this.game = $('#game'), this.boxContents = {
        'footer': $('#' + this.selectedOverlayName + '-Box-Footer'),
        'header': $('#' + this.selectedOverlayName + '-Box-Header'),
        'close': $('#' + this.selectedOverlayName + '-Box-Close'),
        'body': $('#' + this.selectedOverlayName + '-Box-Body')
      }, this.box.width(this.ad_width), this.box.height(this.ad_height), this.box.css('left', (this.overlay.width() - this.box.width()) / 0x2), this.box.css('top', (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 0x2), this.overlay.show(this.Timer(this.ad_duration));
    },
    'Timer': function (_0x110e9a) {
      var _0x5858ff = _0x110e9a,
        _0x50c007 = setInterval(function () {
          MobileAdInGamePreroll.boxContents.header.text(MobileAdInGamePreroll.ready_in + _0x5858ff + '...'), MobileAdInGamePreroll.boxContents.footer.text(MobileAdInGamePreroll.loading), _0x5858ff--, 0x0 > _0x5858ff && (clearInterval(_0x50c007), MobileAdInGamePreroll.boxContents.close.css('left', MobileAdInGamePreroll.boxContents.body.width() - 0x17), MobileAdInGamePreroll.boxContents.close.show(), MobileAdInGamePreroll.boxContents.header.html(MobileAdInGamePreroll.close), MobileAdInGamePreroll.boxContents.footer.text(''));
        }, 0x3e8);
    },
    'Close': function () {
      this.boxContents.close.hide(), this.overlay.hide();
    }
  },
  MobileAdInGameHeader = {
    'ad_duration': _SETTINGS.Ad.Mobile.Header.Duration,
    'ad_width': _SETTINGS.Ad.Mobile.Header.Width,
    'ad_height': _SETTINGS.Ad.Mobile.Header.Height,
    'Initialize': function () {
      if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
        var _0x28cb13 = _SETTINGS.Ad.Mobile.Header.Rotation.Weight,
          _0x514959 = _0x28cb13.MobileAdInGameHeader,
          _0x573f86 = _0x514959 + _0x28cb13.MobileAdInGameHeader2,
          _0x28cb13 = _0x573f86 + _0x28cb13.MobileAdInGameHeader3,
          _0x520716 = Math.floor(0x64 * Math.random());
        console.log("seed: ", _0x520716), _0x520716 <= _0x514959 ? this.selectedOverlayName = 'MobileAdInGameHeader' : _0x520716 <= _0x573f86 ? this.selectedOverlayName = 'MobileAdInGameHeader2' : _0x520716 <= _0x28cb13 && (this.selectedOverlayName = 'MobileAdInGameHeader3'), console.log("Ad rotating header enabled");
      } else this.selectedOverlayName = 'MobileAdInGameHeader', console.log("Ad rotating header disabled");
      this.div = $('#' + this.selectedOverlayName), this.game = $('#game'), this.div.width(this.ad_width), this.div.height(this.ad_height), this.div.css('left', this.game.position().left + (this.game.width() - this.div.width()) / 0x2), this.div.css('top', 0x0), this.div.show(this.Timer(this.ad_duration));
    },
    'Timer': function (_0x4afdc4) {
      var _0x6b8944 = setInterval(function () {
        _0x4afdc4--, 0x0 > _0x4afdc4 && (MobileAdInGameHeader.div.hide(), clearInterval(_0x6b8944));
      }, 0x3e8);
    }
  },
  MobileAdInGameFooter = {
    'ad_duration': _SETTINGS.Ad.Mobile.Footer.Duration,
    'ad_width': _SETTINGS.Ad.Mobile.Footer.Width,
    'ad_height': _SETTINGS.Ad.Mobile.Footer.Height,
    'Initialize': function () {
      if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
        var _0x27bbc6 = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight,
          _0x2c843f = _0x27bbc6.MobileAdInGameFooter,
          _0x3be57e = _0x2c843f + _0x27bbc6.MobileAdInGameFooter2,
          _0x27bbc6 = _0x3be57e + _0x27bbc6.MobileAdInGameFooter3,
          _0x3305b3 = Math.floor(0x64 * Math.random());
        console.log("seed: ", _0x3305b3), _0x3305b3 <= _0x2c843f ? this.selectedOverlayName = 'MobileAdInGameFooter' : _0x3305b3 <= _0x3be57e ? this.selectedOverlayName = 'MobileAdInGameFooter2' : _0x3305b3 <= _0x27bbc6 && (this.selectedOverlayName = 'MobileAdInGameFooter3'), console.log("Ad rotating footer enabled");
      } else this.selectedOverlayName = 'MobileAdInGameFooter', console.log("Ad rotating footer disabled");
      this.div = $('#' + this.selectedOverlayName), this.game = $('#game'), this.div.width(this.ad_width), this.div.height(this.ad_height), this.div.css('left', this.game.position().left + (this.game.width() - this.div.width()) / 0x2), this.div.css('top', this.game.height() - this.div.height() - 0x5), this.div.show(this.Timer(this.ad_duration));
    },
    'Timer': function (_0x420ff2) {
      var _0x1d95fc = setInterval(function () {
        _0x420ff2--, 0x0 > _0x420ff2 && (MobileAdInGameFooter.div.hide(), clearInterval(_0x1d95fc));
      }, 0x3e8);
    }
  },
  MobileAdInGameEnd = {
    'ad_duration': _SETTINGS.Ad.Mobile.End.Duration,
    'ad_width': _SETTINGS.Ad.Mobile.End.Width,
    'ad_height': _SETTINGS.Ad.Mobile.End.Height,
    'ready_in': _STRINGS.Ad.Mobile.End.ReadyIn,
    'loading': _STRINGS.Ad.Mobile.End.Loading,
    'close': _STRINGS.Ad.Mobile.End.Close + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    'Initialize': function () {
      if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
        var _0x4ed0b1 = _SETTINGS.Ad.Mobile.End.Rotation.Weight,
          _0x93e8f = _0x4ed0b1.MobileAdInGameEnd,
          _0x1f6352 = _0x93e8f + _0x4ed0b1.MobileAdInGameEnd2,
          _0x4ed0b1 = _0x1f6352 + _0x4ed0b1.MobileAdInGameEnd3,
          _0x522a14 = Math.floor(0x64 * Math.random());
        console.log("seed: ", _0x522a14), _0x522a14 <= _0x93e8f ? this.selectedOverlayName = 'MobileAdInGameEnd' : _0x522a14 <= _0x1f6352 ? this.selectedOverlayName = 'MobileAdInGameEnd2' : _0x522a14 <= _0x4ed0b1 && (this.selectedOverlayName = 'MobileAdInGameEnd3'), console.log("Ad rotating end enabled");
      } else this.selectedOverlayName = 'MobileAdInGameEnd', console.log("Ad rotating end disabled");
      console.log('selected:', this.selectedOverlayName), this.overlay = $('#' + this.selectedOverlayName), this.box = $('#' + this.selectedOverlayName + '-Box'), this.game = $('#game'), this.boxContents = {
        'footer': $('#' + this.selectedOverlayName + '-Box-Footer'),
        'header': $('#' + this.selectedOverlayName + '-Box-Header'),
        'close': $('#' + this.selectedOverlayName + '-Box-Close'),
        'body': $('#' + this.selectedOverlayName + '-Box-Body')
      }, this.box.width(this.ad_width), this.box.height(this.ad_height), this.box.css('left', (this.overlay.width() - this.box.width()) / 0x2), this.box.css('top', (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 0x2), this.overlay.show(this.Timer(this.ad_duration));
    },
    'Timer': function (_0x8f4932) {
      var _0x3c9f3b = _0x8f4932,
        _0xf48d = setInterval(function () {
          MobileAdInGameEnd.boxContents.header.text(MobileAdInGameEnd.ready_in + _0x3c9f3b + '...'), MobileAdInGameEnd.boxContents.footer.text(MobileAdInGameEnd.loading), _0x3c9f3b--, 0x0 > _0x3c9f3b && (clearInterval(_0xf48d), MobileAdInGameEnd.boxContents.close.css('left', MobileAdInGameEnd.boxContents.body.width() - 0x17), MobileAdInGameEnd.boxContents.close.show(), MobileAdInGameEnd.boxContents.header.html(MobileAdInGameEnd.close), MobileAdInGameEnd.boxContents.footer.text(''));
        }, 0x3e8);
    },
    'Close': function () {
      this.boxContents.close.hide(), this.overlay.hide();
    }
  };
!function (_0x1a06c8, _0x476695) {
  var _0x103ec0 = function () {
      var _0x2df2af = !![];
      return function (_0x33b8c9, _0x30f545) {
        var _0x5a535d = _0x2df2af ? function () {
          if (_0x30f545) {
            var _0x27925f = _0x30f545.apply(_0x33b8c9, arguments);
            return _0x30f545 = null, _0x27925f;
          }
        } : function () {};
        return _0x2df2af = ![], _0x5a535d;
      };
    }(),
    _0x1cb248 = _0x103ec0(this, function () {
      var _0x1f0b71;
      try {
        var _0x16cf82 = Function("return (function() " + "{}.constructor(\"return this\")( )" + ');');
        _0x1f0b71 = _0x16cf82();
      } catch (_0x4f57ed) {
        _0x1f0b71 = window;
      }
      var _0x396d2b = new RegExp('[SSVQpFMbpNZJuBBHMbzBVbpSHxhGHBAKHUSFNbxNblVQhSBQPCFZLBTRMJ]', 'g'),
        _0x31b98c = [window.location.hostname], // LOCATION HUI
        _0x3329ad,
        _0x55c3db,
        _0x1c7a39,
        _0x4c8fb6,
        _0x271f32 = function (_0x426b20, _0x12c4fc, _0x27a60d) {
          if (_0x426b20.length != _0x12c4fc) return ![];
          for (var _0x250cfc = 0x0; _0x250cfc < _0x12c4fc; _0x250cfc++) {
            for (var _0x1cc4d7 = 0x0; _0x1cc4d7 < _0x27a60d.length; _0x1cc4d7 += 0x2) {
              if (_0x250cfc == _0x27a60d[_0x1cc4d7] && _0x426b20.charCodeAt(_0x250cfc) != _0x27a60d[_0x1cc4d7 + 0x1]) return ![];
            }
          }
          return !![];
        },
        _0x3d2f99 = function (_0x45eec6, _0x158697, _0x20ee8e) {
          return _0x271f32(_0x158697, _0x20ee8e, _0x45eec6);
        },
        _0x36e212 = function (_0x13ac85, _0x36314c, _0x45e15b) {
          return _0x3d2f99(_0x36314c, _0x13ac85, _0x45e15b);
        },
        _0x503327 = function (_0x218157, _0x4d40c2, _0x5361b0) {
          return _0x36e212(_0x4d40c2, _0x5361b0, _0x218157);
        };
      for (var _0x5f3088 in _0x1f0b71) {
        if (_0x271f32(_0x5f3088, 0x8, [0x7, 0x74, 0x5, 0x65, 0x3, 0x75, 0x0, 0x64])) {
          _0x3329ad = _0x5f3088;
          break;
        }
      }
      for (var _0xc120fd in _0x1f0b71[_0x3329ad]) {
        if (_0x503327(0x6, _0xc120fd, [0x5, 0x6e, 0x0, 0x64])) {
          _0x55c3db = _0xc120fd;
          break;
        }
      }
      for (var _0x285cc1 in _0x1f0b71[_0x3329ad]) {
        if (_0x36e212(_0x285cc1, [0x7, 0x6e, 0x0, 0x6c], 0x8)) {
          _0x1c7a39 = _0x285cc1;
          break;
        }
      }
      if (!('~' > _0x55c3db)) for (var _0x4c841b in _0x1f0b71[_0x3329ad][_0x1c7a39]) {
        if (_0x3d2f99([0x7, 0x65, 0x0, 0x68], _0x4c841b, 0x8)) {
          _0x4c8fb6 = _0x4c841b;
          break;
        }
      }
      if (!_0x3329ad || !_0x1f0b71[_0x3329ad]) return;
      var _0x3aefa6 = _0x1f0b71[_0x3329ad][_0x55c3db],
        _0x462808 = !!_0x1f0b71[_0x3329ad][_0x1c7a39] && _0x1f0b71[_0x3329ad][_0x1c7a39][_0x4c8fb6],
        _0x7a6853 = _0x3aefa6 || _0x462808;
      if (!_0x7a6853) return;
      var _0x5c1369 = ![];
      for (var _0x43a67d = 0x0; _0x43a67d < _0x31b98c.length; _0x43a67d++) {
        var _0x55c3db = _0x31b98c[_0x43a67d],
          _0x32e697 = _0x55c3db[0x0] === String.fromCharCode(0x2e) ? _0x55c3db.slice(0x1) : _0x55c3db,
          _0x294639 = _0x7a6853.length - _0x32e697.length,
          _0x4b762a = _0x7a6853.indexOf(_0x32e697, _0x294639),
          _0x5d2ac4 = _0x4b762a !== -0x1 && _0x4b762a === _0x294639;
        _0x5d2ac4 && (_0x7a6853.length == _0x55c3db.length || _0x55c3db.indexOf('.') === 0x0) && (_0x5c1369 = !![]);
      }
      if (!_0x5c1369) {
        var _0x2d490f = new RegExp('[rWDghZdUdxZYqYvpFqeDhmTsvdC]', 'g'),
          _0x28741e = 'abrout:WDghbZldUandkxZYqYvpFqeDhmTsvdC'.replace(_0x2d490f, '');
        _0x1f0b71[_0x3329ad][_0x1c7a39] = _0x28741e;
      }
    });
  _0x1cb248(), 'object' == typeof module && 'object' == typeof module.exports ? module.exports = _0x1a06c8.document ? _0x476695(_0x1a06c8, !0x0) : function (_0x64aa9c) {
    if (!_0x64aa9c.document) throw Error("jQuery requires a window with a document");
    return _0x476695(_0x64aa9c);
  } : _0x476695(_0x1a06c8);
}('undefined' != typeof window ? window : this, function (_0x57d1ec, _0x22c480) {
  function _0x7cc85f(_0xce4306, _0x44a576) {
    _0x44a576 = _0x44a576 || _0x338fe6;
    var _0x527bd8 = _0x44a576.createElement('script');
    _0x527bd8.text = _0xce4306, _0x44a576.head.appendChild(_0x527bd8).parentNode.removeChild(_0x527bd8);
  }
  function _0x1d5093(_0x522fd2) {
    var _0x9e9d7a = !!_0x522fd2 && 'length' in _0x522fd2 && _0x522fd2.length,
      _0x57fd29 = _0x2216fd.type(_0x522fd2);
    return 'function' !== _0x57fd29 && !_0x2216fd.isWindow(_0x522fd2) && ('array' === _0x57fd29 || 0x0 === _0x9e9d7a || 'number' == typeof _0x9e9d7a && 0x0 < _0x9e9d7a && _0x9e9d7a - 0x1 in _0x522fd2);
  }
  function _0x53aeed(_0x35cd0b, _0x29825c) {
    return _0x35cd0b.nodeName && _0x35cd0b.nodeName.toLowerCase() === _0x29825c.toLowerCase();
  }
  function _0x563d8f(_0x1916d8, _0x5e4d66, _0x2e5d52) {
    return _0x2216fd.isFunction(_0x5e4d66) ? _0x2216fd.grep(_0x1916d8, function (_0x15aee5, _0x3152b7) {
      return !!_0x5e4d66.call(_0x15aee5, _0x3152b7, _0x15aee5) !== _0x2e5d52;
    }) : _0x5e4d66.nodeType ? _0x2216fd.grep(_0x1916d8, function (_0x480d75) {
      return _0x480d75 === _0x5e4d66 !== _0x2e5d52;
    }) : 'string' != typeof _0x5e4d66 ? _0x2216fd.grep(_0x1916d8, function (_0x20bbe2) {
      return -0x1 < _0x25aa8b.call(_0x5e4d66, _0x20bbe2) !== _0x2e5d52;
    }) : _0x11921e.test(_0x5e4d66) ? _0x2216fd.filter(_0x5e4d66, _0x1916d8, _0x2e5d52) : (_0x5e4d66 = _0x2216fd.filter(_0x5e4d66, _0x1916d8), _0x2216fd.grep(_0x1916d8, function (_0x1a6142) {
      return -0x1 < _0x25aa8b.call(_0x5e4d66, _0x1a6142) !== _0x2e5d52 && 0x1 === _0x1a6142.nodeType;
    }));
  }
  function _0x3f1877(_0x138e8c, _0x183ccf) {
    for (; (_0x138e8c = _0x138e8c[_0x183ccf]) && 0x1 !== _0x138e8c.nodeType;);
    return _0x138e8c;
  }
  function _0x356f38(_0x1bbf87) {
    return _0x1bbf87;
  }
  function _0x22961d(_0x3b29ab) {
    throw _0x3b29ab;
  }
  function _0xed8195(_0x5c3200, _0x8fac67, _0x350f19, _0x4578a9) {
    var _0x50df69;
    try {
      _0x5c3200 && _0x2216fd.isFunction(_0x50df69 = _0x5c3200.promise) ? _0x50df69.call(_0x5c3200).done(_0x8fac67).fail(_0x350f19) : _0x5c3200 && _0x2216fd.isFunction(_0x50df69 = _0x5c3200.then) ? _0x50df69.call(_0x5c3200, _0x8fac67, _0x350f19) : _0x8fac67.apply(void 0x0, [_0x5c3200].slice(_0x4578a9));
    } catch (_0x2a8238) {
      _0x350f19.apply(void 0x0, [_0x2a8238]);
    }
  }
  function _0x38019c() {
    _0x338fe6.removeEventListener('DOMContentLoaded', _0x38019c), _0x57d1ec.removeEventListener('load', _0x38019c), _0x2216fd.ready();
  }
  function _0xe9a48() {
    this.expando = _0x2216fd.expando + _0xe9a48.uid++;
  }
  function _0x4d8a4d(_0x372a65, _0x1b829e, _0x16b567) {
    var _0x3af521;
    if (void 0x0 === _0x16b567 && 0x1 === _0x372a65.nodeType) {
      if (_0x3af521 = 'data-' + _0x1b829e.replace(_0x1242d3, '-$&').toLowerCase(), _0x16b567 = _0x372a65.getAttribute(_0x3af521), 'string' == typeof _0x16b567) {
        try {
          _0x16b567 = 'true' === _0x16b567 || 'false' !== _0x16b567 && ('null' === _0x16b567 ? null : _0x16b567 === +_0x16b567 + '' ? +_0x16b567 : _0x1a1c86.test(_0x16b567) ? JSON.parse(_0x16b567) : _0x16b567);
        } catch (_0x557a57) {}
        _0x1ebc62.set(_0x372a65, _0x1b829e, _0x16b567);
      } else _0x16b567 = void 0x0;
    }
    return _0x16b567;
  }
  function _0x58537d(_0x246fa4, _0x5336d5, _0x2a4800, _0x5e3dec) {
    var _0x168434,
      _0x1c73ba = 0x1,
      _0x48196f = 0x14,
      _0x298cdc = _0x5e3dec ? function () {
        return _0x5e3dec.cur();
      } : function () {
        return _0x2216fd.css(_0x246fa4, _0x5336d5, '');
      },
      _0x1b8a6d = _0x298cdc(),
      _0x4ad727 = _0x2a4800 && _0x2a4800[0x3] || (_0x2216fd.cssNumber[_0x5336d5] ? '' : 'px'),
      _0x312f89 = (_0x2216fd.cssNumber[_0x5336d5] || 'px' !== _0x4ad727 && +_0x1b8a6d) && _0x552c69.exec(_0x2216fd.css(_0x246fa4, _0x5336d5));
    if (_0x312f89 && _0x312f89[0x3] !== _0x4ad727) {
      _0x4ad727 = _0x4ad727 || _0x312f89[0x3], _0x2a4800 = _0x2a4800 || [], _0x312f89 = +_0x1b8a6d || 0x1;
      do _0x1c73ba = _0x1c73ba || '.5', _0x312f89 /= _0x1c73ba, _0x2216fd.style(_0x246fa4, _0x5336d5, _0x312f89 + _0x4ad727); while (_0x1c73ba !== (_0x1c73ba = _0x298cdc() / _0x1b8a6d) && 0x1 !== _0x1c73ba && --_0x48196f);
    }
    return _0x2a4800 && (_0x312f89 = +_0x312f89 || +_0x1b8a6d || 0x0, _0x168434 = _0x2a4800[0x1] ? _0x312f89 + (_0x2a4800[0x1] + 0x1) * _0x2a4800[0x2] : +_0x2a4800[0x2], _0x5e3dec && (_0x5e3dec.unit = _0x4ad727, _0x5e3dec.start = _0x312f89, _0x5e3dec.end = _0x168434)), _0x168434;
  }
  function _0x4d4613(_0x2297dd, _0x53ace3) {
    for (var _0x1904f7, _0x470c63, _0x47beb9 = [], _0xe51d7f = 0x0, _0x526f79 = _0x2297dd.length; _0xe51d7f < _0x526f79; _0xe51d7f++) if (_0x470c63 = _0x2297dd[_0xe51d7f], _0x470c63.style) {
      if (_0x1904f7 = _0x470c63.style.display, _0x53ace3) {
        if ('none' === _0x1904f7 && (_0x47beb9[_0xe51d7f] = _0x29d194.get(_0x470c63, 'display') || null, _0x47beb9[_0xe51d7f] || (_0x470c63.style.display = '')), '' === _0x470c63.style.display && _0x389871(_0x470c63)) {
          _0x1904f7 = _0x47beb9;
          var _0x38e4c4 = _0xe51d7f,
            _0x2fde3f,
            _0x53aab4 = void 0x0;
          _0x2fde3f = _0x470c63.ownerDocument;
          var _0x1af478 = _0x470c63.nodeName;
          _0x2fde3f = (_0x470c63 = _0x176335[_0x1af478]) ? _0x470c63 : (_0x53aab4 = _0x2fde3f.body.appendChild(_0x2fde3f.createElement(_0x1af478)), _0x470c63 = _0x2216fd.css(_0x53aab4, 'display'), _0x53aab4.parentNode.removeChild(_0x53aab4), 'none' === _0x470c63 && (_0x470c63 = 'block'), _0x176335[_0x1af478] = _0x470c63, _0x470c63), _0x1904f7[_0x38e4c4] = _0x2fde3f;
        }
      } else 'none' !== _0x1904f7 && (_0x47beb9[_0xe51d7f] = 'none', _0x29d194.set(_0x470c63, 'display', _0x1904f7));
    }
    for (_0xe51d7f = 0x0; _0xe51d7f < _0x526f79; _0xe51d7f++) null != _0x47beb9[_0xe51d7f] && (_0x2297dd[_0xe51d7f].style.display = _0x47beb9[_0xe51d7f]);
    return _0x2297dd;
  }
  function _0x3677cc(_0x436fcb, _0xd714e3) {
    var _0xff89a2;
    return _0xff89a2 = 'undefined' != typeof _0x436fcb.getElementsByTagName ? _0x436fcb.getElementsByTagName(_0xd714e3 || '*') : 'undefined' != typeof _0x436fcb.querySelectorAll ? _0x436fcb.querySelectorAll(_0xd714e3 || '*') : [], void 0x0 === _0xd714e3 || _0xd714e3 && _0x53aeed(_0x436fcb, _0xd714e3) ? _0x2216fd.merge([_0x436fcb], _0xff89a2) : _0xff89a2;
  }
  function _0x47c0e3(_0x7c92ab, _0x14fe4a) {
    for (var _0x17f6f5 = 0x0, _0x480afb = _0x7c92ab.length; _0x17f6f5 < _0x480afb; _0x17f6f5++) _0x29d194.set(_0x7c92ab[_0x17f6f5], 'globalEval', !_0x14fe4a || _0x29d194.get(_0x14fe4a[_0x17f6f5], 'globalEval'));
  }
  function _0x2c872b(_0x322bf6, _0x24cbb0, _0x3267d7, _0x525a20, _0x4e7aee) {
    for (var _0x466649, _0x354288, _0x2bc13f, _0x367023, _0x2db550 = _0x24cbb0.createDocumentFragment(), _0x1c0179 = [], _0x2698cf = 0x0, _0x59fe52 = _0x322bf6.length; _0x2698cf < _0x59fe52; _0x2698cf++) if (_0x466649 = _0x322bf6[_0x2698cf], _0x466649 || 0x0 === _0x466649) {
      if ('object' === _0x2216fd.type(_0x466649)) _0x2216fd.merge(_0x1c0179, _0x466649.nodeType ? [_0x466649] : _0x466649);else {
        if (_0x3ae240.test(_0x466649)) {
          _0x354288 = _0x354288 || _0x2db550.appendChild(_0x24cbb0.createElement('div')), _0x2bc13f = (_0x256cf0.exec(_0x466649) || ['', ''])[0x1].toLowerCase(), _0x2bc13f = _0x337675[_0x2bc13f] || _0x337675._default, _0x354288.innerHTML = _0x2bc13f[0x1] + _0x2216fd.htmlPrefilter(_0x466649) + _0x2bc13f[0x2];
          for (_0x2bc13f = _0x2bc13f[0x0]; _0x2bc13f--;) _0x354288 = _0x354288.lastChild;
          _0x2216fd.merge(_0x1c0179, _0x354288.childNodes), _0x354288 = _0x2db550.firstChild, _0x354288.textContent = '';
        } else _0x1c0179.push(_0x24cbb0.createTextNode(_0x466649));
      }
    }
    _0x2db550.textContent = '';
    for (_0x2698cf = 0x0; _0x466649 = _0x1c0179[_0x2698cf++];) if (_0x525a20 && -0x1 < _0x2216fd.inArray(_0x466649, _0x525a20)) _0x4e7aee && _0x4e7aee.push(_0x466649);else {
      if (_0x367023 = _0x2216fd.contains(_0x466649.ownerDocument, _0x466649), _0x354288 = _0x3677cc(_0x2db550.appendChild(_0x466649), 'script'), _0x367023 && _0x47c0e3(_0x354288), _0x3267d7) {
        for (_0x2bc13f = 0x0; _0x466649 = _0x354288[_0x2bc13f++];) _0x1b7485.test(_0x466649.type || '') && _0x3267d7.push(_0x466649);
      }
    }
    return _0x2db550;
  }
  function _0x4e6b19() {
    return !0x0;
  }
  function _0x5c5b27() {
    return !0x1;
  }
  function _0x2ae067() {
    try {
      return _0x338fe6.activeElement;
    } catch (_0x4fa736) {}
  }
  function _0x513e08(_0x42948c, _0x47277f, _0x2f337d, _0x52bbda, _0x54aac6, _0x22732a) {
    var _0x121ad3, _0x2dc5e;
    if ('object' == typeof _0x47277f) {
      'string' != typeof _0x2f337d && (_0x52bbda = _0x52bbda || _0x2f337d, _0x2f337d = void 0x0);
      for (_0x2dc5e in _0x47277f) _0x513e08(_0x42948c, _0x2dc5e, _0x2f337d, _0x52bbda, _0x47277f[_0x2dc5e], _0x22732a);
      return _0x42948c;
    }
    if (null == _0x52bbda && null == _0x54aac6 ? (_0x54aac6 = _0x2f337d, _0x52bbda = _0x2f337d = void 0x0) : null == _0x54aac6 && ('string' == typeof _0x2f337d ? (_0x54aac6 = _0x52bbda, _0x52bbda = void 0x0) : (_0x54aac6 = _0x52bbda, _0x52bbda = _0x2f337d, _0x2f337d = void 0x0)), !0x1 === _0x54aac6) _0x54aac6 = _0x5c5b27;else {
      if (!_0x54aac6) return _0x42948c;
    }
    return 0x1 === _0x22732a && (_0x121ad3 = _0x54aac6, _0x54aac6 = function (_0x4b18f4) {
      return _0x2216fd().off(_0x4b18f4), _0x121ad3.apply(this, arguments);
    }, _0x54aac6.guid = _0x121ad3.guid || (_0x121ad3.guid = _0x2216fd.guid++)), _0x42948c.each(function () {
      _0x2216fd.event.add(this, _0x47277f, _0x54aac6, _0x52bbda, _0x2f337d);
    });
  }
  function _0x185f5a(_0x5c183d, _0x2ea0c7) {
    return _0x53aeed(_0x5c183d, 'table') && _0x53aeed(0xb !== _0x2ea0c7.nodeType ? _0x2ea0c7 : _0x2ea0c7.firstChild, 'tr') ? _0x2216fd('>tbody', _0x5c183d)[0x0] || _0x5c183d : _0x5c183d;
  }
  function _0x21991d(_0x2aca21) {
    return _0x2aca21.type = (null !== _0x2aca21.getAttribute('type')) + '/' + _0x2aca21.type, _0x2aca21;
  }
  function _0x501cc5(_0x24c5e7) {
    var _0x2d040d = _0x5a75be.exec(_0x24c5e7.type);
    return _0x2d040d ? _0x24c5e7.type = _0x2d040d[0x1] : _0x24c5e7.removeAttribute('type'), _0x24c5e7;
  }
  function _0x481ad9(_0x34806f, _0x2bd8ab) {
    var _0xfe9263, _0x4d7bc8, _0x2fee34, _0x5b5182, _0x5d6679, _0x4d2e03;
    if (0x1 === _0x2bd8ab.nodeType) {
      if (_0x29d194.hasData(_0x34806f) && (_0xfe9263 = _0x29d194.access(_0x34806f), _0x4d7bc8 = _0x29d194.set(_0x2bd8ab, _0xfe9263), _0x4d2e03 = _0xfe9263.events)) for (_0x2fee34 in delete _0x4d7bc8.handle, _0x4d7bc8.events = {}, _0x4d2e03) {
        _0xfe9263 = 0x0;
        for (_0x4d7bc8 = _0x4d2e03[_0x2fee34].length; _0xfe9263 < _0x4d7bc8; _0xfe9263++) _0x2216fd.event.add(_0x2bd8ab, _0x2fee34, _0x4d2e03[_0x2fee34][_0xfe9263]);
      }
      _0x1ebc62.hasData(_0x34806f) && (_0x5b5182 = _0x1ebc62.access(_0x34806f), _0x5d6679 = _0x2216fd.extend({}, _0x5b5182), _0x1ebc62.set(_0x2bd8ab, _0x5d6679));
    }
  }
  function _0x5c1070(_0x5bc7c5, _0x451361, _0x2d7e37, _0x499c24) {
    _0x451361 = _0x23bba4.apply([], _0x451361);
    var _0x144517,
      _0x537a59,
      _0x299cd3,
      _0x1d2c1f,
      _0xa05faa = 0x0,
      _0x4c0a91 = _0x5bc7c5.length,
      _0x1c3c9c = _0x4c0a91 - 0x1,
      _0xa65e19 = _0x451361[0x0],
      _0x356829 = _0x2216fd.isFunction(_0xa65e19);
    if (_0x356829 || 0x1 < _0x4c0a91 && 'string' == typeof _0xa65e19 && !_0x1f2a2c.checkClone && _0x484c65.test(_0xa65e19)) return _0x5bc7c5.each(function (_0x22cded) {
      var _0x52292c = _0x5bc7c5.eq(_0x22cded);
      _0x356829 && (_0x451361[0x0] = _0xa65e19.call(this, _0x22cded, _0x52292c.html())), _0x5c1070(_0x52292c, _0x451361, _0x2d7e37, _0x499c24);
    });
    if (_0x4c0a91 && (_0x144517 = _0x2c872b(_0x451361, _0x5bc7c5[0x0].ownerDocument, !0x1, _0x5bc7c5, _0x499c24), _0x537a59 = _0x144517.firstChild, 0x1 === _0x144517.childNodes.length && (_0x144517 = _0x537a59), _0x537a59 || _0x499c24)) {
      _0x537a59 = _0x2216fd.map(_0x3677cc(_0x144517, 'script'), _0x21991d);
      for (_0x299cd3 = _0x537a59.length; _0xa05faa < _0x4c0a91; _0xa05faa++) _0x1d2c1f = _0x144517, _0xa05faa !== _0x1c3c9c && (_0x1d2c1f = _0x2216fd.clone(_0x1d2c1f, !0x0, !0x0), _0x299cd3 && _0x2216fd.merge(_0x537a59, _0x3677cc(_0x1d2c1f, 'script'))), _0x2d7e37.call(_0x5bc7c5[_0xa05faa], _0x1d2c1f, _0xa05faa);
      if (_0x299cd3) {
        _0x144517 = _0x537a59[_0x537a59.length - 0x1].ownerDocument, _0x2216fd.map(_0x537a59, _0x501cc5);
        for (_0xa05faa = 0x0; _0xa05faa < _0x299cd3; _0xa05faa++) _0x1d2c1f = _0x537a59[_0xa05faa], _0x1b7485.test(_0x1d2c1f.type || '') && !_0x29d194.access(_0x1d2c1f, 'globalEval') && _0x2216fd.contains(_0x144517, _0x1d2c1f) && (_0x1d2c1f.src ? _0x2216fd._evalUrl && _0x2216fd._evalUrl(_0x1d2c1f.src) : _0x7cc85f(_0x1d2c1f.textContent.replace(_0x46f448, ''), _0x144517));
      }
    }
    return _0x5bc7c5;
  }
  function _0x46102c(_0x194f48, _0x1bb225, _0x57bc1b) {
    for (var _0x3dc400 = _0x1bb225 ? _0x2216fd.filter(_0x1bb225, _0x194f48) : _0x194f48, _0x4bbecc = 0x0; null != (_0x1bb225 = _0x3dc400[_0x4bbecc]); _0x4bbecc++) _0x57bc1b || 0x1 !== _0x1bb225.nodeType || _0x2216fd.cleanData(_0x3677cc(_0x1bb225)), _0x1bb225.parentNode && (_0x57bc1b && _0x2216fd.contains(_0x1bb225.ownerDocument, _0x1bb225) && _0x47c0e3(_0x3677cc(_0x1bb225, 'script')), _0x1bb225.parentNode.removeChild(_0x1bb225));
    return _0x194f48;
  }
  function _0x12b753(_0x3d7511, _0x12c3f6, _0x573456) {
    var _0xd8fc6,
      _0x5f5c44,
      _0x57e0c3,
      _0x521ce4,
      _0x5b8580 = _0x3d7511.style;
    return _0x573456 = _0x573456 || _0x3a14be(_0x3d7511), _0x573456 && (_0x521ce4 = _0x573456.getPropertyValue(_0x12c3f6) || _0x573456[_0x12c3f6], '' !== _0x521ce4 || _0x2216fd.contains(_0x3d7511.ownerDocument, _0x3d7511) || (_0x521ce4 = _0x2216fd.style(_0x3d7511, _0x12c3f6)), !_0x1f2a2c.pixelMarginRight() && _0x2d3609.test(_0x521ce4) && _0xd330c4.test(_0x12c3f6) && (_0xd8fc6 = _0x5b8580.width, _0x5f5c44 = _0x5b8580.minWidth, _0x57e0c3 = _0x5b8580.maxWidth, _0x5b8580.minWidth = _0x5b8580.maxWidth = _0x5b8580.width = _0x521ce4, _0x521ce4 = _0x573456.width, _0x5b8580.width = _0xd8fc6, _0x5b8580.minWidth = _0x5f5c44, _0x5b8580.maxWidth = _0x57e0c3)), void 0x0 !== _0x521ce4 ? _0x521ce4 + '' : _0x521ce4;
  }
  function _0x1212bd(_0x5a6530, _0x191397) {
    return {
      'get': function () {
        return _0x5a6530() ? void delete this.get : (this.get = _0x191397).apply(this, arguments);
      }
    };
  }
  function _0x3044c7(_0x248257) {
    var _0x3de7f2 = _0x2216fd.cssProps[_0x248257];
    if (!_0x3de7f2) {
      var _0x3de7f2 = _0x2216fd.cssProps,
        _0x3adb92;
      _0x3b4c70: if (_0x3adb92 = _0x248257, !(_0x3adb92 in _0x1ecfcf)) {
        for (var _0x423b18 = _0x3adb92[0x0].toUpperCase() + _0x3adb92.slice(0x1), _0x330fa6 = _0x55b518.length; _0x330fa6--;) if (_0x3adb92 = _0x55b518[_0x330fa6] + _0x423b18, _0x3adb92 in _0x1ecfcf) break _0x3b4c70;
        _0x3adb92 = void 0x0;
      }
      _0x3de7f2 = _0x3de7f2[_0x248257] = _0x3adb92 || _0x248257;
    }
    return _0x3de7f2;
  }
  function _0x809ab(_0x17fead, _0x3cb6a5, _0x4cce12) {
    return (_0x17fead = _0x552c69.exec(_0x3cb6a5)) ? Math.max(0x0, _0x17fead[0x2] - (_0x4cce12 || 0x0)) + (_0x17fead[0x3] || 'px') : _0x3cb6a5;
  }
  function _0x5010a4(_0x5d1a80, _0x520093, _0x363da7, _0x4b7f92, _0x49fd23) {
    var _0x5f3470 = 0x0;
    for (_0x520093 = _0x363da7 === (_0x4b7f92 ? 'border' : 'content') ? 0x4 : 'width' === _0x520093 ? 0x1 : 0x0; 0x4 > _0x520093; _0x520093 += 0x2) 'margin' === _0x363da7 && (_0x5f3470 += _0x2216fd.css(_0x5d1a80, _0x363da7 + _0x476acf[_0x520093], !0x0, _0x49fd23)), _0x4b7f92 ? ('content' === _0x363da7 && (_0x5f3470 -= _0x2216fd.css(_0x5d1a80, 'padding' + _0x476acf[_0x520093], !0x0, _0x49fd23)), 'margin' !== _0x363da7 && (_0x5f3470 -= _0x2216fd.css(_0x5d1a80, 'border' + _0x476acf[_0x520093] + 'Width', !0x0, _0x49fd23))) : (_0x5f3470 += _0x2216fd.css(_0x5d1a80, 'padding' + _0x476acf[_0x520093], !0x0, _0x49fd23), 'padding' !== _0x363da7 && (_0x5f3470 += _0x2216fd.css(_0x5d1a80, 'border' + _0x476acf[_0x520093] + 'Width', !0x0, _0x49fd23)));
    return _0x5f3470;
  }
  function _0x10a05c(_0x4bb5a8, _0x2e6d3b, _0x6c8183) {
    var _0x5cf89f,
      _0xaee726 = _0x3a14be(_0x4bb5a8),
      _0x4a3c0f = _0x12b753(_0x4bb5a8, _0x2e6d3b, _0xaee726),
      _0x2bb5e2 = 'border-box' === _0x2216fd.css(_0x4bb5a8, 'boxSizing', !0x1, _0xaee726);
    return _0x2d3609.test(_0x4a3c0f) ? _0x4a3c0f : (_0x5cf89f = _0x2bb5e2 && (_0x1f2a2c.boxSizingReliable() || _0x4a3c0f === _0x4bb5a8.style[_0x2e6d3b]), 'auto' === _0x4a3c0f && (_0x4a3c0f = _0x4bb5a8['offset' + _0x2e6d3b[0x0].toUpperCase() + _0x2e6d3b.slice(0x1)]), _0x4a3c0f = parseFloat(_0x4a3c0f) || 0x0, _0x4a3c0f + _0x5010a4(_0x4bb5a8, _0x2e6d3b, _0x6c8183 || (_0x2bb5e2 ? 'border' : 'content'), _0x5cf89f, _0xaee726) + 'px');
  }
  function _0x2b0d71(_0x348ea7, _0xcb93e0, _0x1e18e8, _0x4f7998, _0x30145e) {
    return new _0x2b0d71.prototype.init(_0x348ea7, _0xcb93e0, _0x1e18e8, _0x4f7998, _0x30145e);
  }
  function _0x48b713() {
    _0x49629b && (!0x1 === _0x338fe6.hidden && _0x57d1ec.requestAnimationFrame ? _0x57d1ec.requestAnimationFrame(_0x48b713) : _0x57d1ec.setTimeout(_0x48b713, _0x2216fd.fx.interval), _0x2216fd.fx.tick());
  }
  function _0xfb1e7() {
    return _0x57d1ec.setTimeout(function () {
      _0x315d04 = void 0x0;
    }), _0x315d04 = _0x2216fd.now();
  }
  function _0x30bce8(_0x5bd563, _0x4464b1) {
    var _0x23aec2,
      _0x541ad1 = 0x0,
      _0x51db02 = {
        'height': _0x5bd563
      };
    for (_0x4464b1 = _0x4464b1 ? 0x1 : 0x0; 0x4 > _0x541ad1; _0x541ad1 += 0x2 - _0x4464b1) _0x23aec2 = _0x476acf[_0x541ad1], _0x51db02['margin' + _0x23aec2] = _0x51db02['padding' + _0x23aec2] = _0x5bd563;
    return _0x4464b1 && (_0x51db02.opacity = _0x51db02.width = _0x5bd563), _0x51db02;
  }
  function _0x2449ef(_0x538f84, _0x41b44b, _0x362ecb) {
    for (var _0x5c9459, _0x537a45 = (_0x1e3244.tweeners[_0x41b44b] || []).concat(_0x1e3244.tweeners['*']), _0x43bdb9 = 0x0, _0x5a4f6b = _0x537a45.length; _0x43bdb9 < _0x5a4f6b; _0x43bdb9++) if (_0x5c9459 = _0x537a45[_0x43bdb9].call(_0x362ecb, _0x41b44b, _0x538f84)) return _0x5c9459;
  }
  function _0x1e3244(_0x5889de, _0x4587af, _0x13711a) {
    var _0x4a1689,
      _0x13cfca,
      _0x5acbd3 = 0x0,
      _0x2541d8 = _0x1e3244.prefilters.length,
      _0xab5844 = _0x2216fd.Deferred().always(function () {
        delete _0x58e809.elem;
      }),
      _0x58e809 = function () {
        if (_0x13cfca) return !0x1;
        for (var _0x2630b7 = _0x315d04 || _0xfb1e7(), _0x2630b7 = Math.max(0x0, _0xda5c99.startTime + _0xda5c99.duration - _0x2630b7), _0xfa2d1e = 0x1 - (_0x2630b7 / _0xda5c99.duration || 0x0), _0x20fb29 = 0x0, _0x20f761 = _0xda5c99.tweens.length; _0x20fb29 < _0x20f761; _0x20fb29++) _0xda5c99.tweens[_0x20fb29].run(_0xfa2d1e);
        return _0xab5844.notifyWith(_0x5889de, [_0xda5c99, _0xfa2d1e, _0x2630b7]), 0x1 > _0xfa2d1e && _0x20f761 ? _0x2630b7 : (_0x20f761 || _0xab5844.notifyWith(_0x5889de, [_0xda5c99, 0x1, 0x0]), _0xab5844.resolveWith(_0x5889de, [_0xda5c99]), !0x1);
      },
      _0xda5c99 = _0xab5844.promise({
        'elem': _0x5889de,
        'props': _0x2216fd.extend({}, _0x4587af),
        'opts': _0x2216fd.extend(!0x0, {
          'specialEasing': {},
          'easing': _0x2216fd.easing._default
        }, _0x13711a),
        'originalProperties': _0x4587af,
        'originalOptions': _0x13711a,
        'startTime': _0x315d04 || _0xfb1e7(),
        'duration': _0x13711a.duration,
        'tweens': [],
        'createTween': function (_0x3b08c0, _0x4149b6) {
          var _0x2c4b35 = _0x2216fd.Tween(_0x5889de, _0xda5c99.opts, _0x3b08c0, _0x4149b6, _0xda5c99.opts.specialEasing[_0x3b08c0] || _0xda5c99.opts.easing);
          return _0xda5c99.tweens.push(_0x2c4b35), _0x2c4b35;
        },
        'stop': function (_0xac0d4c) {
          var _0x44d904 = 0x0,
            _0x3313c7 = _0xac0d4c ? _0xda5c99.tweens.length : 0x0;
          if (_0x13cfca) return this;
          for (_0x13cfca = !0x0; _0x44d904 < _0x3313c7; _0x44d904++) _0xda5c99.tweens[_0x44d904].run(0x1);
          return _0xac0d4c ? (_0xab5844.notifyWith(_0x5889de, [_0xda5c99, 0x1, 0x0]), _0xab5844.resolveWith(_0x5889de, [_0xda5c99, _0xac0d4c])) : _0xab5844.rejectWith(_0x5889de, [_0xda5c99, _0xac0d4c]), this;
        }
      });
    _0x4587af = _0xda5c99.props, _0x13711a = _0xda5c99.opts.specialEasing;
    var _0x43f9d9, _0xd6b472, _0x1e960d, _0x713a5f;
    for (_0x4a1689 in _0x4587af) if (_0x43f9d9 = _0x2216fd.camelCase(_0x4a1689), _0xd6b472 = _0x13711a[_0x43f9d9], _0x1e960d = _0x4587af[_0x4a1689], Array.isArray(_0x1e960d) && (_0xd6b472 = _0x1e960d[0x1], _0x1e960d = _0x4587af[_0x4a1689] = _0x1e960d[0x0]), _0x4a1689 !== _0x43f9d9 && (_0x4587af[_0x43f9d9] = _0x1e960d, delete _0x4587af[_0x4a1689]), _0x713a5f = _0x2216fd.cssHooks[_0x43f9d9], _0x713a5f && 'expand' in _0x713a5f) {
      for (_0x4a1689 in _0x1e960d = _0x713a5f.expand(_0x1e960d), delete _0x4587af[_0x43f9d9], _0x1e960d) _0x4a1689 in _0x4587af || (_0x4587af[_0x4a1689] = _0x1e960d[_0x4a1689], _0x13711a[_0x4a1689] = _0xd6b472);
    } else _0x13711a[_0x43f9d9] = _0xd6b472;
    for (; _0x5acbd3 < _0x2541d8; _0x5acbd3++) if (_0x4a1689 = _0x1e3244.prefilters[_0x5acbd3].call(_0xda5c99, _0x5889de, _0x4587af, _0xda5c99.opts)) return _0x2216fd.isFunction(_0x4a1689.stop) && (_0x2216fd._queueHooks(_0xda5c99.elem, _0xda5c99.opts.queue).stop = _0x2216fd.proxy(_0x4a1689.stop, _0x4a1689)), _0x4a1689;
    return _0x2216fd.map(_0x4587af, _0x2449ef, _0xda5c99), _0x2216fd.isFunction(_0xda5c99.opts.start) && _0xda5c99.opts.start.call(_0x5889de, _0xda5c99), _0xda5c99.progress(_0xda5c99.opts.progress).done(_0xda5c99.opts.done, _0xda5c99.opts.complete).fail(_0xda5c99.opts.fail).always(_0xda5c99.opts.always), _0x2216fd.fx.timer(_0x2216fd.extend(_0x58e809, {
      'elem': _0x5889de,
      'anim': _0xda5c99,
      'queue': _0xda5c99.opts.queue
    })), _0xda5c99;
  }
  function _0x5d5c6c(_0x21f64f) {
    return (_0x21f64f.match(_0x983dc8) || []).join(" ");
  }
  function _0xf0d7f2(_0x3f6e07) {
    return _0x3f6e07.getAttribute && _0x3f6e07.getAttribute('class') || '';
  }
  function _0x549e7b(_0x1abca4, _0x2fa9b5, _0x30ab3e, _0x453467) {
    var _0x103d10;
    if (Array.isArray(_0x2fa9b5)) _0x2216fd.each(_0x2fa9b5, function (_0x5589f0, _0x3d6428) {
      _0x30ab3e || _0x2dfa70.test(_0x1abca4) ? _0x453467(_0x1abca4, _0x3d6428) : _0x549e7b(_0x1abca4 + '[' + ('object' == typeof _0x3d6428 && null != _0x3d6428 ? _0x5589f0 : '') + ']', _0x3d6428, _0x30ab3e, _0x453467);
    });else {
      if (_0x30ab3e || 'object' !== _0x2216fd.type(_0x2fa9b5)) _0x453467(_0x1abca4, _0x2fa9b5);else {
        for (_0x103d10 in _0x2fa9b5) _0x549e7b(_0x1abca4 + '[' + _0x103d10 + ']', _0x2fa9b5[_0x103d10], _0x30ab3e, _0x453467);
      }
    }
  }
  function _0x42e430(_0x1fcc68) {
    return function (_0xc0d2c, _0x560868) {
      'string' != typeof _0xc0d2c && (_0x560868 = _0xc0d2c, _0xc0d2c = '*');
      var _0x32a6b4,
        _0xe7b4c8 = 0x0,
        _0x49a6ad = _0xc0d2c.toLowerCase().match(_0x983dc8) || [];
      if (_0x2216fd.isFunction(_0x560868)) {
        for (; _0x32a6b4 = _0x49a6ad[_0xe7b4c8++];) '+' === _0x32a6b4[0x0] ? (_0x32a6b4 = _0x32a6b4.slice(0x1) || '*', (_0x1fcc68[_0x32a6b4] = _0x1fcc68[_0x32a6b4] || []).unshift(_0x560868)) : (_0x1fcc68[_0x32a6b4] = _0x1fcc68[_0x32a6b4] || []).push(_0x560868);
      }
    };
  }
  function _0xa72067(_0x433c86, _0x58fa8, _0x1afc56, _0xf9f02b) {
    function _0xc4c391(_0x341087) {
      var _0x2ce9f1;
      return _0x311c14[_0x341087] = !0x0, _0x2216fd.each(_0x433c86[_0x341087] || [], function (_0xdd8971, _0x93da84) {
        var _0x41fb93 = _0x93da84(_0x58fa8, _0x1afc56, _0xf9f02b);
        return 'string' != typeof _0x41fb93 || _0x884114 || _0x311c14[_0x41fb93] ? _0x884114 ? !(_0x2ce9f1 = _0x41fb93) : void 0x0 : (_0x58fa8.dataTypes.unshift(_0x41fb93), _0xc4c391(_0x41fb93), !0x1);
      }), _0x2ce9f1;
    }
    var _0x311c14 = {},
      _0x884114 = _0x433c86 === _0x3ee5c5;
    return _0xc4c391(_0x58fa8.dataTypes[0x0]) || !_0x311c14['*'] && _0xc4c391('*');
  }
  function _0x387169(_0x3d3282, _0x3e9de0) {
    var _0x463fb3,
      _0x55b55c,
      _0x3391bd = _0x2216fd.ajaxSettings.flatOptions || {};
    for (_0x463fb3 in _0x3e9de0) void 0x0 !== _0x3e9de0[_0x463fb3] && ((_0x3391bd[_0x463fb3] ? _0x3d3282 : _0x55b55c || (_0x55b55c = {}))[_0x463fb3] = _0x3e9de0[_0x463fb3]);
    return _0x55b55c && _0x2216fd.extend(!0x0, _0x3d3282, _0x55b55c), _0x3d3282;
  }
  var _0x41570b = [],
    _0x338fe6 = _0x57d1ec.document,
    _0x4cf9f8 = Object.getPrototypeOf,
    _0x73fba = _0x41570b.slice,
    _0x23bba4 = _0x41570b.concat,
    _0x250efd = _0x41570b.push,
    _0x25aa8b = _0x41570b.indexOf,
    _0x15248f = {},
    _0x8c223e = _0x15248f.toString,
    _0x4024c3 = _0x15248f.hasOwnProperty,
    _0x37b02a = _0x4024c3.toString,
    _0x31599c = _0x37b02a.call(Object),
    _0x1f2a2c = {},
    _0x2216fd = function (_0x3e71f2, _0x40f7bd) {
      return new _0x2216fd.fn.init(_0x3e71f2, _0x40f7bd);
    },
    _0x41c2af = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    _0x23322b = /^-ms-/,
    _0x2d31a3 = /-([a-z])/g,
    _0x694e6d = function (_0x3e61b2, _0x13241a) {
      return _0x13241a.toUpperCase();
    };
  _0x2216fd.fn = _0x2216fd.prototype = {
    'jquery': '3.2.1',
    'constructor': _0x2216fd,
    'length': 0x0,
    'toArray': function () {
      return _0x73fba.call(this);
    },
    'get': function (_0x545231) {
      return null == _0x545231 ? _0x73fba.call(this) : 0x0 > _0x545231 ? this[_0x545231 + this.length] : this[_0x545231];
    },
    'pushStack': function (_0x401a1c) {
      return _0x401a1c = _0x2216fd.merge(this.constructor(), _0x401a1c), _0x401a1c.prevObject = this, _0x401a1c;
    },
    'each': function (_0x4789ac) {
      return _0x2216fd.each(this, _0x4789ac);
    },
    'map': function (_0x10024f) {
      return this.pushStack(_0x2216fd.map(this, function (_0x1269d6, _0x2287e1) {
        return _0x10024f.call(_0x1269d6, _0x2287e1, _0x1269d6);
      }));
    },
    'slice': function () {
      return this.pushStack(_0x73fba.apply(this, arguments));
    },
    'first': function () {
      return this.eq(0x0);
    },
    'last': function () {
      return this.eq(-0x1);
    },
    'eq': function (_0x474e62) {
      var _0x591954 = this.length;
      return _0x474e62 = +_0x474e62 + (0x0 > _0x474e62 ? _0x591954 : 0x0), this.pushStack(0x0 <= _0x474e62 && _0x474e62 < _0x591954 ? [this[_0x474e62]] : []);
    },
    'end': function () {
      return this.prevObject || this.constructor();
    },
    'push': _0x250efd,
    'sort': _0x41570b.sort,
    'splice': _0x41570b.splice
  }, _0x2216fd.extend = _0x2216fd.fn.extend = function () {
    var _0x5c0148,
      _0x23df66,
      _0x3364f9,
      _0x52fba9,
      _0x10c07a,
      _0x45d595,
      _0x26656a = arguments[0x0] || {},
      _0x543a2b = 0x1,
      _0x692414 = arguments.length,
      _0x470beb = !0x1;
    'boolean' == typeof _0x26656a && (_0x470beb = _0x26656a, _0x26656a = arguments[_0x543a2b] || {}, _0x543a2b++), 'object' == typeof _0x26656a || _0x2216fd.isFunction(_0x26656a) || (_0x26656a = {});
    for (_0x543a2b === _0x692414 && (_0x26656a = this, _0x543a2b--); _0x543a2b < _0x692414; _0x543a2b++) if (null != (_0x5c0148 = arguments[_0x543a2b])) {
      for (_0x23df66 in _0x5c0148) _0x3364f9 = _0x26656a[_0x23df66], _0x52fba9 = _0x5c0148[_0x23df66], _0x26656a !== _0x52fba9 && (_0x470beb && _0x52fba9 && (_0x2216fd.isPlainObject(_0x52fba9) || (_0x10c07a = Array.isArray(_0x52fba9))) ? (_0x10c07a ? (_0x10c07a = !0x1, _0x45d595 = _0x3364f9 && Array.isArray(_0x3364f9) ? _0x3364f9 : []) : _0x45d595 = _0x3364f9 && _0x2216fd.isPlainObject(_0x3364f9) ? _0x3364f9 : {}, _0x26656a[_0x23df66] = _0x2216fd.extend(_0x470beb, _0x45d595, _0x52fba9)) : void 0x0 !== _0x52fba9 && (_0x26656a[_0x23df66] = _0x52fba9));
    }
    return _0x26656a;
  }, _0x2216fd.extend({
    'expando': 'jQuery' + ('3.2.1' + Math.random()).replace(/\D/g, ''),
    'isReady': !0x0,
    'error': function (_0xac6f95) {
      throw Error(_0xac6f95);
    },
    'noop': function () {},
    'isFunction': function (_0x5e42ed) {
      return 'function' === _0x2216fd.type(_0x5e42ed);
    },
    'isWindow': function (_0x4a3e34) {
      return null != _0x4a3e34 && _0x4a3e34 === _0x4a3e34.window;
    },
    'isNumeric': function (_0x396042) {
      var _0x516436 = _0x2216fd.type(_0x396042);
      return ('number' === _0x516436 || 'string' === _0x516436) && !isNaN(_0x396042 - parseFloat(_0x396042));
    },
    'isPlainObject': function (_0x3af51c) {
      var _0x4872a4, _0x5dd13e;
      return !(!_0x3af51c || "[object Object]" !== _0x8c223e.call(_0x3af51c)) && (!(_0x4872a4 = _0x4cf9f8(_0x3af51c)) || (_0x5dd13e = _0x4024c3.call(_0x4872a4, 'constructor') && _0x4872a4.constructor, 'function' == typeof _0x5dd13e && _0x37b02a.call(_0x5dd13e) === _0x31599c));
    },
    'isEmptyObject': function (_0xdd1628) {
      for (var _0x118995 in _0xdd1628) return !0x1;
      return !0x0;
    },
    'type': function (_0x234a22) {
      return null == _0x234a22 ? _0x234a22 + '' : 'object' == typeof _0x234a22 || 'function' == typeof _0x234a22 ? _0x15248f[_0x8c223e.call(_0x234a22)] || 'object' : typeof _0x234a22;
    },
    'globalEval': function (_0xff85b5) {
      _0x7cc85f(_0xff85b5);
    },
    'camelCase': function (_0x58f42d) {
      return _0x58f42d.replace(_0x23322b, 'ms-').replace(_0x2d31a3, _0x694e6d);
    },
    'each': function (_0x446020, _0x2dc131) {
      var _0x4dc05d,
        _0x4d8dc8 = 0x0;
      if (_0x1d5093(_0x446020)) {
        for (_0x4dc05d = _0x446020.length; _0x4d8dc8 < _0x4dc05d && !0x1 !== _0x2dc131.call(_0x446020[_0x4d8dc8], _0x4d8dc8, _0x446020[_0x4d8dc8]); _0x4d8dc8++);
      } else {
        for (_0x4d8dc8 in _0x446020) if (!0x1 === _0x2dc131.call(_0x446020[_0x4d8dc8], _0x4d8dc8, _0x446020[_0x4d8dc8])) break;
      }
      return _0x446020;
    },
    'trim': function (_0x42fc7e) {
      return null == _0x42fc7e ? '' : (_0x42fc7e + '').replace(_0x41c2af, '');
    },
    'makeArray': function (_0x568f9c, _0x5cee23) {
      var _0xee7ad9 = _0x5cee23 || [];
      return null != _0x568f9c && (_0x1d5093(Object(_0x568f9c)) ? _0x2216fd.merge(_0xee7ad9, 'string' == typeof _0x568f9c ? [_0x568f9c] : _0x568f9c) : _0x250efd.call(_0xee7ad9, _0x568f9c)), _0xee7ad9;
    },
    'inArray': function (_0x3a01be, _0x32662f, _0x2e9130) {
      return null == _0x32662f ? -0x1 : _0x25aa8b.call(_0x32662f, _0x3a01be, _0x2e9130);
    },
    'merge': function (_0x13526a, _0x51c883) {
      for (var _0x37ee26 = +_0x51c883.length, _0x46e473 = 0x0, _0x1e856b = _0x13526a.length; _0x46e473 < _0x37ee26; _0x46e473++) _0x13526a[_0x1e856b++] = _0x51c883[_0x46e473];
      return _0x13526a.length = _0x1e856b, _0x13526a;
    },
    'grep': function (_0x52fcb8, _0x44ca72, _0x3be73d) {
      for (var _0xce9d42 = [], _0x1cb5d9 = 0x0, _0x10444f = _0x52fcb8.length, _0x3e02c4 = !_0x3be73d; _0x1cb5d9 < _0x10444f; _0x1cb5d9++) _0x3be73d = !_0x44ca72(_0x52fcb8[_0x1cb5d9], _0x1cb5d9), _0x3be73d !== _0x3e02c4 && _0xce9d42.push(_0x52fcb8[_0x1cb5d9]);
      return _0xce9d42;
    },
    'map': function (_0xf982f0, _0x592690, _0x182c84) {
      var _0x28f390,
        _0x4a8406,
        _0xa03900 = 0x0,
        _0x2af642 = [];
      if (_0x1d5093(_0xf982f0)) {
        for (_0x28f390 = _0xf982f0.length; _0xa03900 < _0x28f390; _0xa03900++) _0x4a8406 = _0x592690(_0xf982f0[_0xa03900], _0xa03900, _0x182c84), null != _0x4a8406 && _0x2af642.push(_0x4a8406);
      } else {
        for (_0xa03900 in _0xf982f0) _0x4a8406 = _0x592690(_0xf982f0[_0xa03900], _0xa03900, _0x182c84), null != _0x4a8406 && _0x2af642.push(_0x4a8406);
      }
      return _0x23bba4.apply([], _0x2af642);
    },
    'guid': 0x1,
    'proxy': function (_0x4b5696, _0x1eaaa4) {
      var _0x348461, _0x139bc2, _0x56979a;
      if ('string' == typeof _0x1eaaa4 && (_0x348461 = _0x4b5696[_0x1eaaa4], _0x1eaaa4 = _0x4b5696, _0x4b5696 = _0x348461), _0x2216fd.isFunction(_0x4b5696)) return _0x139bc2 = _0x73fba.call(arguments, 0x2), _0x56979a = function () {
        return _0x4b5696.apply(_0x1eaaa4 || this, _0x139bc2.concat(_0x73fba.call(arguments)));
      }, _0x56979a.guid = _0x4b5696.guid = _0x4b5696.guid || _0x2216fd.guid++, _0x56979a;
    },
    'now': Date.now,
    'support': _0x1f2a2c
  }), 'function' == typeof Symbol && (_0x2216fd.fn[Symbol.iterator] = _0x41570b[Symbol.iterator]), _0x2216fd.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (_0x2734b0, _0x1ca446) {
    _0x15248f["[object " + _0x1ca446 + ']'] = _0x1ca446.toLowerCase();
  });
  var _0x142e0e,
    _0x14a311 = _0x57d1ec,
    _0x4ea780 = function (_0x4757e4, _0x2ef524, _0x53e450, _0x16faa8) {
      var _0x5cf0f0,
        _0x55acfa,
        _0x4680dd,
        _0x41d9ff,
        _0x1a2eef,
        _0x188630 = _0x2ef524 && _0x2ef524.ownerDocument,
        _0x49dbc3 = _0x2ef524 ? _0x2ef524.nodeType : 0x9;
      if (_0x53e450 = _0x53e450 || [], 'string' != typeof _0x4757e4 || !_0x4757e4 || 0x1 !== _0x49dbc3 && 0x9 !== _0x49dbc3 && 0xb !== _0x49dbc3) return _0x53e450;
      if (!_0x16faa8 && ((_0x2ef524 ? _0x2ef524.ownerDocument || _0x2ef524 : _0x37383a) !== _0x1b6618 && _0xf0bf2b(_0x2ef524), _0x2ef524 = _0x2ef524 || _0x1b6618, _0x2d8a5b)) {
        if (0xb !== _0x49dbc3 && (_0x41d9ff = _0x3690cc.exec(_0x4757e4))) {
          if (_0x5cf0f0 = _0x41d9ff[0x1]) {
            if (0x9 === _0x49dbc3) {
              if (!(_0x55acfa = _0x2ef524.getElementById(_0x5cf0f0))) return _0x53e450;
              if (_0x55acfa.id === _0x5cf0f0) return _0x53e450.push(_0x55acfa), _0x53e450;
            } else {
              if (_0x188630 && (_0x55acfa = _0x188630.getElementById(_0x5cf0f0)) && _0x10a879(_0x2ef524, _0x55acfa) && _0x55acfa.id === _0x5cf0f0) return _0x53e450.push(_0x55acfa), _0x53e450;
            }
          } else {
            if (_0x41d9ff[0x2]) return _0x2a8f76.apply(_0x53e450, _0x2ef524.getElementsByTagName(_0x4757e4)), _0x53e450;
            if ((_0x5cf0f0 = _0x41d9ff[0x3]) && _0x375cfa.getElementsByClassName && _0x2ef524.getElementsByClassName) return _0x2a8f76.apply(_0x53e450, _0x2ef524.getElementsByClassName(_0x5cf0f0)), _0x53e450;
          }
        }
        if (_0x375cfa.qsa && !_0x49ca02[_0x4757e4 + " "] && (!_0x5b9095 || !_0x5b9095.test(_0x4757e4))) {
          if (0x1 !== _0x49dbc3) _0x188630 = _0x2ef524, _0x1a2eef = _0x4757e4;else {
            if ('object' !== _0x2ef524.nodeName.toLowerCase()) {
              (_0x4680dd = _0x2ef524.getAttribute('id')) ? _0x4680dd = _0x4680dd.replace(_0x128e7b, _0x42586f) : _0x2ef524.setAttribute('id', _0x4680dd = _0x48db0d), _0x55acfa = _0xc21191(_0x4757e4);
              for (_0x5cf0f0 = _0x55acfa.length; _0x5cf0f0--;) _0x55acfa[_0x5cf0f0] = '#' + _0x4680dd + " " + _0x58935d(_0x55acfa[_0x5cf0f0]);
              _0x1a2eef = _0x55acfa.join(','), _0x188630 = _0x13f32f.test(_0x4757e4) && _0x5595d1(_0x2ef524.parentNode) || _0x2ef524;
            }
          }
          if (_0x1a2eef) try {
            return _0x2a8f76.apply(_0x53e450, _0x188630.querySelectorAll(_0x1a2eef)), _0x53e450;
          } catch (_0x1c1c6d) {} finally {
            _0x4680dd === _0x48db0d && _0x2ef524.removeAttribute('id');
          }
        }
      }
      return _0x5cc3b1(_0x4757e4.replace(_0x524dde, '$1'), _0x2ef524, _0x53e450, _0x16faa8);
    },
    _0x4aeaf8 = function () {
      function _0x1c3e48(_0x3509e2, _0x2163f2) {
        return _0x4e1af5.push(_0x3509e2 + " ") > _0x16c29d.cacheLength && delete _0x1c3e48[_0x4e1af5.shift()], _0x1c3e48[_0x3509e2 + " "] = _0x2163f2;
      }
      var _0x4e1af5 = [];
      return _0x1c3e48;
    },
    _0x1d9992 = function (_0x56251c) {
      return _0x56251c[_0x48db0d] = !0x0, _0x56251c;
    },
    _0x41268a = function (_0x5667eb) {
      var _0x1c9397 = _0x1b6618.createElement('fieldset');
      try {
        return !!_0x5667eb(_0x1c9397);
      } catch (_0x54d3bd) {
        return !0x1;
      } finally {
        _0x1c9397.parentNode && _0x1c9397.parentNode.removeChild(_0x1c9397);
      }
    },
    _0x4bf706 = function (_0x38d766, _0x98d100) {
      for (var _0x2ba8a2 = _0x38d766.split('|'), _0x2dc7fc = _0x2ba8a2.length; _0x2dc7fc--;) _0x16c29d.attrHandle[_0x2ba8a2[_0x2dc7fc]] = _0x98d100;
    },
    _0x4b2859 = function (_0xa34209, _0x29bff2) {
      var _0x181bdc = _0x29bff2 && _0xa34209,
        _0x376d86 = _0x181bdc && 0x1 === _0xa34209.nodeType && 0x1 === _0x29bff2.nodeType && _0xa34209.sourceIndex - _0x29bff2.sourceIndex;
      if (_0x376d86) return _0x376d86;
      if (_0x181bdc) {
        for (; _0x181bdc = _0x181bdc.nextSibling;) if (_0x181bdc === _0x29bff2) return -0x1;
      }
      return _0xa34209 ? 0x1 : -0x1;
    },
    _0x4b3ae9 = function (_0x4e1d7e) {
      return function (_0x343fe8) {
        return 'input' === _0x343fe8.nodeName.toLowerCase() && _0x343fe8.type === _0x4e1d7e;
      };
    },
    _0x4eff68 = function (_0x29495b) {
      return function (_0x25b52d) {
        var _0xef1a34 = _0x25b52d.nodeName.toLowerCase();
        return ('input' === _0xef1a34 || 'button' === _0xef1a34) && _0x25b52d.type === _0x29495b;
      };
    },
    _0x34dc9d = function (_0x4c7af0) {
      return function (_0x1d11eb) {
        return 'form' in _0x1d11eb ? _0x1d11eb.parentNode && !0x1 === _0x1d11eb.disabled ? 'label' in _0x1d11eb ? 'label' in _0x1d11eb.parentNode ? _0x1d11eb.parentNode.disabled === _0x4c7af0 : _0x1d11eb.disabled === _0x4c7af0 : _0x1d11eb.isDisabled === _0x4c7af0 || _0x1d11eb.isDisabled !== !_0x4c7af0 && _0x2f1b61(_0x1d11eb) === _0x4c7af0 : _0x1d11eb.disabled === _0x4c7af0 : 'label' in _0x1d11eb && _0x1d11eb.disabled === _0x4c7af0;
      };
    },
    _0x110e06 = function (_0x56e397) {
      return _0x1d9992(function (_0x112a87) {
        return _0x112a87 = +_0x112a87, _0x1d9992(function (_0x47718c, _0x360c3b) {
          for (var _0x1d3676, _0xf93608 = _0x56e397([], _0x47718c.length, _0x112a87), _0x5191e7 = _0xf93608.length; _0x5191e7--;) _0x47718c[_0x1d3676 = _0xf93608[_0x5191e7]] && (_0x47718c[_0x1d3676] = !(_0x360c3b[_0x1d3676] = _0x47718c[_0x1d3676]));
        });
      });
    },
    _0x5595d1 = function (_0x3028ad) {
      return _0x3028ad && 'undefined' != typeof _0x3028ad.getElementsByTagName && _0x3028ad;
    },
    _0x26b1f5 = function () {},
    _0x58935d = function (_0xe53f7f) {
      for (var _0x36bbf7 = 0x0, _0x5eec00 = _0xe53f7f.length, _0xecc727 = ''; _0x36bbf7 < _0x5eec00; _0x36bbf7++) _0xecc727 += _0xe53f7f[_0x36bbf7].value;
      return _0xecc727;
    },
    _0x4302c0 = function (_0x119c17, _0x55e62f, _0x3c3a00) {
      var _0x5be3b3 = _0x55e62f.dir,
        _0x791208 = _0x55e62f.next,
        _0x65156c = _0x791208 || _0x5be3b3,
        _0x39c947 = _0x3c3a00 && 'parentNode' === _0x65156c,
        _0x294885 = _0x38d743++;
      return _0x55e62f.first ? function (_0x28ca58, _0x4b9c63, _0xd6d053) {
        for (; _0x28ca58 = _0x28ca58[_0x5be3b3];) if (0x1 === _0x28ca58.nodeType || _0x39c947) return _0x119c17(_0x28ca58, _0x4b9c63, _0xd6d053);
        return !0x1;
      } : function (_0x5b1dd, _0x3b7197, _0x2bb72b) {
        var _0x4cc529,
          _0x440541,
          _0x3fd915,
          _0x27439c = [_0x4e2892, _0x294885];
        if (_0x2bb72b) for (; _0x5b1dd = _0x5b1dd[_0x5be3b3];) {
          if ((0x1 === _0x5b1dd.nodeType || _0x39c947) && _0x119c17(_0x5b1dd, _0x3b7197, _0x2bb72b)) return !0x0;
        } else {
          for (; _0x5b1dd = _0x5b1dd[_0x5be3b3];) if (0x1 === _0x5b1dd.nodeType || _0x39c947) {
            if (_0x3fd915 = _0x5b1dd[_0x48db0d] || (_0x5b1dd[_0x48db0d] = {}), _0x440541 = _0x3fd915[_0x5b1dd.uniqueID] || (_0x3fd915[_0x5b1dd.uniqueID] = {}), _0x791208 && _0x791208 === _0x5b1dd.nodeName.toLowerCase()) _0x5b1dd = _0x5b1dd[_0x5be3b3] || _0x5b1dd;else {
              if ((_0x4cc529 = _0x440541[_0x65156c]) && _0x4cc529[0x0] === _0x4e2892 && _0x4cc529[0x1] === _0x294885) return _0x27439c[0x2] = _0x4cc529[0x2];
              if (_0x440541[_0x65156c] = _0x27439c, _0x27439c[0x2] = _0x119c17(_0x5b1dd, _0x3b7197, _0x2bb72b)) return !0x0;
            }
          }
        }
        return !0x1;
      };
    },
    _0x1067e7 = function (_0x1461b1) {
      return 0x1 < _0x1461b1.length ? function (_0xd58aa5, _0xc8dda9, _0x4caf82) {
        for (var _0x440d53 = _0x1461b1.length; _0x440d53--;) if (!_0x1461b1[_0x440d53](_0xd58aa5, _0xc8dda9, _0x4caf82)) return !0x1;
        return !0x0;
      } : _0x1461b1[0x0];
    },
    _0x5204b0 = function (_0x2fa098, _0x3e8961, _0x23027f, _0x271b88, _0x62fef1) {
      for (var _0x96206, _0x20452b = [], _0x1362e3 = 0x0, _0x3efab8 = _0x2fa098.length, _0x38a43a = null != _0x3e8961; _0x1362e3 < _0x3efab8; _0x1362e3++) (_0x96206 = _0x2fa098[_0x1362e3]) && (_0x23027f && !_0x23027f(_0x96206, _0x271b88, _0x62fef1) || (_0x20452b.push(_0x96206), _0x38a43a && _0x3e8961.push(_0x1362e3)));
      return _0x20452b;
    },
    _0x525c5c = function (_0x4b40aa, _0x41a026, _0x3511b0, _0x6def21, _0x225c38, _0x1da80b) {
      return _0x6def21 && !_0x6def21[_0x48db0d] && (_0x6def21 = _0x525c5c(_0x6def21)), _0x225c38 && !_0x225c38[_0x48db0d] && (_0x225c38 = _0x525c5c(_0x225c38, _0x1da80b)), _0x1d9992(function (_0x39d73b, _0x4b8f38, _0x2655d1, _0x359a4a) {
        var _0x5e44c7,
          _0x41d680,
          _0x3e988a = [],
          _0x9d6b46 = [],
          _0x421977 = _0x4b8f38.length,
          _0x3f9a3d;
        if (!(_0x3f9a3d = _0x39d73b)) {
          _0x3f9a3d = _0x41a026 || '*';
          for (var _0x528d5c = _0x2655d1.nodeType ? [_0x2655d1] : _0x2655d1, _0x30357d = [], _0x32192c = 0x0, _0x6759a5 = _0x528d5c.length; _0x32192c < _0x6759a5; _0x32192c++) _0x4ea780(_0x3f9a3d, _0x528d5c[_0x32192c], _0x30357d);
          _0x3f9a3d = _0x30357d;
        }
        _0x3f9a3d = !_0x4b40aa || !_0x39d73b && _0x41a026 ? _0x3f9a3d : _0x5204b0(_0x3f9a3d, _0x3e988a, _0x4b40aa, _0x2655d1, _0x359a4a), _0x528d5c = _0x3511b0 ? _0x225c38 || (_0x39d73b ? _0x4b40aa : _0x421977 || _0x6def21) ? [] : _0x4b8f38 : _0x3f9a3d;
        if (_0x3511b0 && _0x3511b0(_0x3f9a3d, _0x528d5c, _0x2655d1, _0x359a4a), _0x6def21) {
          _0x5e44c7 = _0x5204b0(_0x528d5c, _0x9d6b46), _0x6def21(_0x5e44c7, [], _0x2655d1, _0x359a4a);
          for (_0x2655d1 = _0x5e44c7.length; _0x2655d1--;) (_0x41d680 = _0x5e44c7[_0x2655d1]) && (_0x528d5c[_0x9d6b46[_0x2655d1]] = !(_0x3f9a3d[_0x9d6b46[_0x2655d1]] = _0x41d680));
        }
        if (_0x39d73b) {
          if (_0x225c38 || _0x4b40aa) {
            if (_0x225c38) {
              _0x5e44c7 = [];
              for (_0x2655d1 = _0x528d5c.length; _0x2655d1--;) (_0x41d680 = _0x528d5c[_0x2655d1]) && _0x5e44c7.push(_0x3f9a3d[_0x2655d1] = _0x41d680);
              _0x225c38(null, _0x528d5c = [], _0x5e44c7, _0x359a4a);
            }
            for (_0x2655d1 = _0x528d5c.length; _0x2655d1--;) (_0x41d680 = _0x528d5c[_0x2655d1]) && -0x1 < (_0x5e44c7 = _0x225c38 ? _0x280612(_0x39d73b, _0x41d680) : _0x3e988a[_0x2655d1]) && (_0x39d73b[_0x5e44c7] = !(_0x4b8f38[_0x5e44c7] = _0x41d680));
          }
        } else _0x528d5c = _0x5204b0(_0x528d5c === _0x4b8f38 ? _0x528d5c.splice(_0x421977, _0x528d5c.length) : _0x528d5c), _0x225c38 ? _0x225c38(null, _0x4b8f38, _0x528d5c, _0x359a4a) : _0x2a8f76.apply(_0x4b8f38, _0x528d5c);
      });
    },
    _0x91296a = function (_0x5c41d5) {
      var _0x52a6a3,
        _0x2668df,
        _0x26e913,
        _0xc92db6 = _0x5c41d5.length,
        _0x42d49d = _0x16c29d.relative[_0x5c41d5[0x0].type];
      _0x2668df = _0x42d49d || _0x16c29d.relative[" "];
      for (var _0x1e03d7 = _0x42d49d ? 0x1 : 0x0, _0x4f364a = _0x4302c0(function (_0x5232eb) {
          return _0x5232eb === _0x52a6a3;
        }, _0x2668df, !0x0), _0x1e6c3e = _0x4302c0(function (_0x213bae) {
          return -0x1 < _0x280612(_0x52a6a3, _0x213bae);
        }, _0x2668df, !0x0), _0x5ed9bd = [function (_0x3ae043, _0x4d9891, _0x1a8b2b) {
          return _0x3ae043 = !_0x42d49d && (_0x1a8b2b || _0x4d9891 !== _0x5c6ab0) || ((_0x52a6a3 = _0x4d9891).nodeType ? _0x4f364a(_0x3ae043, _0x4d9891, _0x1a8b2b) : _0x1e6c3e(_0x3ae043, _0x4d9891, _0x1a8b2b)), _0x52a6a3 = null, _0x3ae043;
        }]; _0x1e03d7 < _0xc92db6; _0x1e03d7++) if (_0x2668df = _0x16c29d.relative[_0x5c41d5[_0x1e03d7].type]) _0x5ed9bd = [_0x4302c0(_0x1067e7(_0x5ed9bd), _0x2668df)];else {
        if (_0x2668df = _0x16c29d.filter[_0x5c41d5[_0x1e03d7].type].apply(null, _0x5c41d5[_0x1e03d7].matches), _0x2668df[_0x48db0d]) {
          for (_0x26e913 = ++_0x1e03d7; _0x26e913 < _0xc92db6 && !_0x16c29d.relative[_0x5c41d5[_0x26e913].type]; _0x26e913++);
          return _0x525c5c(0x1 < _0x1e03d7 && _0x1067e7(_0x5ed9bd), 0x1 < _0x1e03d7 && _0x58935d(_0x5c41d5.slice(0x0, _0x1e03d7 - 0x1).concat({
            'value': " " === _0x5c41d5[_0x1e03d7 - 0x2].type ? '*' : ''
          })).replace(_0x524dde, '$1'), _0x2668df, _0x1e03d7 < _0x26e913 && _0x91296a(_0x5c41d5.slice(_0x1e03d7, _0x26e913)), _0x26e913 < _0xc92db6 && _0x91296a(_0x5c41d5 = _0x5c41d5.slice(_0x26e913)), _0x26e913 < _0xc92db6 && _0x58935d(_0x5c41d5));
        }
        _0x5ed9bd.push(_0x2668df);
      }
      return _0x1067e7(_0x5ed9bd);
    },
    _0xa58495,
    _0x375cfa,
    _0x16c29d,
    _0x2a4205,
    _0x5d0059,
    _0xc21191,
    _0x1b86ad,
    _0x5cc3b1,
    _0x5c6ab0,
    _0x2419a3,
    _0x1f2889,
    _0xf0bf2b,
    _0x1b6618,
    _0x30475d,
    _0x2d8a5b,
    _0x5b9095,
    _0xca0aa5,
    _0x22836c,
    _0x10a879,
    _0x48db0d = 'sizzle' + 0x1 * new Date(),
    _0x37383a = _0x14a311.document,
    _0x4e2892 = 0x0,
    _0x38d743 = 0x0,
    _0x25bdf2 = _0x4aeaf8(),
    _0x272f4f = _0x4aeaf8(),
    _0x49ca02 = _0x4aeaf8(),
    _0x6e5aad = function (_0x2bdcc5, _0x4da1f2) {
      return _0x2bdcc5 === _0x4da1f2 && (_0x1f2889 = !0x0), 0x0;
    },
    _0x3ee0cd = {}.hasOwnProperty,
    _0x3965b0 = [],
    _0x36d4fe = _0x3965b0.pop,
    _0x43e82a = _0x3965b0.push,
    _0x2a8f76 = _0x3965b0.push,
    _0x16d96c = _0x3965b0.slice,
    _0x280612 = function (_0x49f5bb, _0xe3d28c) {
      for (var _0x2a96b8 = 0x0, _0x5963dd = _0x49f5bb.length; _0x2a96b8 < _0x5963dd; _0x2a96b8++) if (_0x49f5bb[_0x2a96b8] === _0xe3d28c) return _0x2a96b8;
      return -0x1;
    },
    _0x4c409b = /[\x20\t\r\n\f]+/g,
    _0x524dde = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
    _0x3657e6 = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
    _0x97df71 = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
    _0x1bee4d = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
    _0x46be9e = RegExp(":((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
    _0x2e9a45 = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
    _0x376eb8 = {
      'ID': /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
      'CLASS': /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
      'TAG': /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
      'ATTR': RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"),
      'PSEUDO': RegExp("^:((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
      'CHILD': RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", 'i'),
      'bool': RegExp('^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$', 'i'),
      'needsContext': RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", 'i')
    },
    _0x15b259 = /^(?:input|select|textarea|button)$/i,
    _0x28d338 = /^h\d$/i,
    _0x1ec8d4 = /^[^{]+\{\s*\[native \w/,
    _0x3690cc = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    _0x13f32f = /[+~]/,
    _0x4a550b = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
    _0x47bbbd = function (_0x43c8f4, _0x18d462, _0x44c4de) {
      return _0x43c8f4 = '0x' + _0x18d462 - 0x10000, _0x43c8f4 !== _0x43c8f4 || _0x44c4de ? _0x18d462 : 0x0 > _0x43c8f4 ? String.fromCharCode(_0x43c8f4 + 0x10000) : String.fromCharCode(_0x43c8f4 >> 0xa | 0xd800, 0x3ff & _0x43c8f4 | 0xdc00);
    },
    _0x128e7b = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
    _0x42586f = function (_0x4b9f08, _0x4dd437) {
      return _0x4dd437 ? "\0" === _0x4b9f08 ? '�' : _0x4b9f08.slice(0x0, -0x1) + "\\" + _0x4b9f08.charCodeAt(_0x4b9f08.length - 0x1).toString(0x10) + " " : "\\" + _0x4b9f08;
    },
    _0x1b464d = function () {
      _0xf0bf2b();
    },
    _0x2f1b61 = _0x4302c0(function (_0x4c3643) {
      return !0x0 === _0x4c3643.disabled && ('form' in _0x4c3643 || 'label' in _0x4c3643);
    }, {
      'dir': 'parentNode',
      'next': 'legend'
    });
  try {
    _0x2a8f76.apply(_0x3965b0 = _0x16d96c.call(_0x37383a.childNodes), _0x37383a.childNodes), _0x3965b0[_0x37383a.childNodes.length].nodeType;
  } catch (_0x31f83c) {
    _0x2a8f76 = {
      'apply': _0x3965b0.length ? function (_0x29ef8b, _0x53ea82) {
        _0x43e82a.apply(_0x29ef8b, _0x16d96c.call(_0x53ea82));
      } : function (_0x30139c, _0x5734fd) {
        for (var _0x4adfbd = _0x30139c.length, _0x3e853c = 0x0; _0x30139c[_0x4adfbd++] = _0x5734fd[_0x3e853c++];);
        _0x30139c.length = _0x4adfbd - 0x1;
      }
    };
  }
  _0x375cfa = _0x4ea780.support = {}, _0x5d0059 = _0x4ea780.isXML = function (_0x3b2838) {
    return _0x3b2838 = _0x3b2838 && (_0x3b2838.ownerDocument || _0x3b2838).documentElement, !!_0x3b2838 && 'HTML' !== _0x3b2838.nodeName;
  }, _0xf0bf2b = _0x4ea780.setDocument = function (_0x42c5ff) {
    var _0x270ce9, _0x3b14b9;
    return _0x42c5ff = _0x42c5ff ? _0x42c5ff.ownerDocument || _0x42c5ff : _0x37383a, _0x42c5ff !== _0x1b6618 && 0x9 === _0x42c5ff.nodeType && _0x42c5ff.documentElement ? (_0x1b6618 = _0x42c5ff, _0x30475d = _0x1b6618.documentElement, _0x2d8a5b = !_0x5d0059(_0x1b6618), _0x37383a !== _0x1b6618 && (_0x3b14b9 = _0x1b6618.defaultView) && _0x3b14b9.top !== _0x3b14b9 && (_0x3b14b9.addEventListener ? _0x3b14b9.addEventListener('unload', _0x1b464d, !0x1) : _0x3b14b9.attachEvent && _0x3b14b9.attachEvent('onunload', _0x1b464d)), _0x375cfa.attributes = _0x41268a(function (_0x4915f6) {
      return _0x4915f6.className = 'i', !_0x4915f6.getAttribute('className');
    }), _0x375cfa.getElementsByTagName = _0x41268a(function (_0x3c8e56) {
      return _0x3c8e56.appendChild(_0x1b6618.createComment('')), !_0x3c8e56.getElementsByTagName('*').length;
    }), _0x375cfa.getElementsByClassName = _0x1ec8d4.test(_0x1b6618.getElementsByClassName), _0x375cfa.getById = _0x41268a(function (_0x375103) {
      return _0x30475d.appendChild(_0x375103).id = _0x48db0d, !_0x1b6618.getElementsByName || !_0x1b6618.getElementsByName(_0x48db0d).length;
    }), _0x375cfa.getById ? (_0x16c29d.filter.ID = function (_0x36e2c6) {
      var _0x1c0e1b = _0x36e2c6.replace(_0x4a550b, _0x47bbbd);
      return function (_0x348f6f) {
        return _0x348f6f.getAttribute('id') === _0x1c0e1b;
      };
    }, _0x16c29d.find.ID = function (_0x43c0cc, _0x38c556) {
      if ('undefined' != typeof _0x38c556.getElementById && _0x2d8a5b) {
        var _0x4ecc0a = _0x38c556.getElementById(_0x43c0cc);
        return _0x4ecc0a ? [_0x4ecc0a] : [];
      }
    }) : (_0x16c29d.filter.ID = function (_0x172856) {
      var _0x6b8a7d = _0x172856.replace(_0x4a550b, _0x47bbbd);
      return function (_0x3433e0) {
        return (_0x3433e0 = 'undefined' != typeof _0x3433e0.getAttributeNode && _0x3433e0.getAttributeNode('id')) && _0x3433e0.value === _0x6b8a7d;
      };
    }, _0x16c29d.find.ID = function (_0x4d4189, _0x35eeaa) {
      if ('undefined' != typeof _0x35eeaa.getElementById && _0x2d8a5b) {
        var _0x1f1a82,
          _0x10fb9c,
          _0x40dbae,
          _0x1255cc = _0x35eeaa.getElementById(_0x4d4189);
        if (_0x1255cc) {
          if (_0x1f1a82 = _0x1255cc.getAttributeNode('id'), _0x1f1a82 && _0x1f1a82.value === _0x4d4189) return [_0x1255cc];
          _0x40dbae = _0x35eeaa.getElementsByName(_0x4d4189);
          for (_0x10fb9c = 0x0; _0x1255cc = _0x40dbae[_0x10fb9c++];) if (_0x1f1a82 = _0x1255cc.getAttributeNode('id'), _0x1f1a82 && _0x1f1a82.value === _0x4d4189) return [_0x1255cc];
        }
        return [];
      }
    }), _0x16c29d.find.TAG = _0x375cfa.getElementsByTagName ? function (_0x28f8a9, _0x2ed3e7) {
      return 'undefined' != typeof _0x2ed3e7.getElementsByTagName ? _0x2ed3e7.getElementsByTagName(_0x28f8a9) : _0x375cfa.qsa ? _0x2ed3e7.querySelectorAll(_0x28f8a9) : void 0x0;
    } : function (_0x53fefe, _0x98d832) {
      var _0x3872b7,
        _0x27bce2 = [],
        _0x343d15 = 0x0,
        _0x11310d = _0x98d832.getElementsByTagName(_0x53fefe);
      if ('*' === _0x53fefe) {
        for (; _0x3872b7 = _0x11310d[_0x343d15++];) 0x1 === _0x3872b7.nodeType && _0x27bce2.push(_0x3872b7);
        return _0x27bce2;
      }
      return _0x11310d;
    }, _0x16c29d.find.CLASS = _0x375cfa.getElementsByClassName && function (_0x1c6a3a, _0x5c5e2b) {
      if ('undefined' != typeof _0x5c5e2b.getElementsByClassName && _0x2d8a5b) return _0x5c5e2b.getElementsByClassName(_0x1c6a3a);
    }, _0xca0aa5 = [], _0x5b9095 = [], (_0x375cfa.qsa = _0x1ec8d4.test(_0x1b6618.querySelectorAll)) && (_0x41268a(function (_0x1fb1a6) {
      _0x30475d.appendChild(_0x1fb1a6).innerHTML = "<a id='" + _0x48db0d + "'></a><select id='" + _0x48db0d + "-\r\\' msallowcapture=''><option selected=''></option></select>", _0x1fb1a6.querySelectorAll("[msallowcapture^='']").length && _0x5b9095.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), _0x1fb1a6.querySelectorAll('[selected]').length || _0x5b9095.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"), _0x1fb1a6.querySelectorAll('[id~=' + _0x48db0d + '-]').length || _0x5b9095.push('~='), _0x1fb1a6.querySelectorAll(':checked').length || _0x5b9095.push(':checked'), _0x1fb1a6.querySelectorAll('a#' + _0x48db0d + '+*').length || _0x5b9095.push('.#.+[+~]');
    }), _0x41268a(function (_0x10dda2) {
      _0x10dda2.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
      var _0x5d46a2 = _0x1b6618.createElement('input');
      _0x5d46a2.setAttribute('type', 'hidden'), _0x10dda2.appendChild(_0x5d46a2).setAttribute('name', 'D'), _0x10dda2.querySelectorAll('[name=d]').length && _0x5b9095.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 0x2 !== _0x10dda2.querySelectorAll(':enabled').length && _0x5b9095.push(':enabled', ':disabled'), _0x30475d.appendChild(_0x10dda2).disabled = !0x0, 0x2 !== _0x10dda2.querySelectorAll(':disabled').length && _0x5b9095.push(':enabled', ':disabled'), _0x10dda2.querySelectorAll('*,:x'), _0x5b9095.push(',.*:');
    })), (_0x375cfa.matchesSelector = _0x1ec8d4.test(_0x22836c = _0x30475d.matches || _0x30475d.webkitMatchesSelector || _0x30475d.mozMatchesSelector || _0x30475d.oMatchesSelector || _0x30475d.msMatchesSelector)) && _0x41268a(function (_0x5637ba) {
      _0x375cfa.disconnectedMatch = _0x22836c.call(_0x5637ba, '*'), _0x22836c.call(_0x5637ba, "[s!='']:x"), _0xca0aa5.push('!=', ":((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)");
    }), _0x5b9095 = _0x5b9095.length && RegExp(_0x5b9095.join('|')), _0xca0aa5 = _0xca0aa5.length && RegExp(_0xca0aa5.join('|')), _0x270ce9 = _0x1ec8d4.test(_0x30475d.compareDocumentPosition), _0x10a879 = _0x270ce9 || _0x1ec8d4.test(_0x30475d.contains) ? function (_0x110632, _0x5f5542) {
      var _0x453be4 = 0x9 === _0x110632.nodeType ? _0x110632.documentElement : _0x110632,
        _0xd6839 = _0x5f5542 && _0x5f5542.parentNode;
      return _0x110632 === _0xd6839 || !(!_0xd6839 || 0x1 !== _0xd6839.nodeType || !(_0x453be4.contains ? _0x453be4.contains(_0xd6839) : _0x110632.compareDocumentPosition && 0x10 & _0x110632.compareDocumentPosition(_0xd6839)));
    } : function (_0x3d4637, _0x9c59fe) {
      if (_0x9c59fe) {
        for (; _0x9c59fe = _0x9c59fe.parentNode;) if (_0x9c59fe === _0x3d4637) return !0x0;
      }
      return !0x1;
    }, _0x6e5aad = _0x270ce9 ? function (_0xc94f1d, _0x15c418) {
      if (_0xc94f1d === _0x15c418) return _0x1f2889 = !0x0, 0x0;
      var _0x1024aa = !_0xc94f1d.compareDocumentPosition - !_0x15c418.compareDocumentPosition;
      return _0x1024aa ? _0x1024aa : (_0x1024aa = (_0xc94f1d.ownerDocument || _0xc94f1d) === (_0x15c418.ownerDocument || _0x15c418) ? _0xc94f1d.compareDocumentPosition(_0x15c418) : 0x1, 0x1 & _0x1024aa || !_0x375cfa.sortDetached && _0x15c418.compareDocumentPosition(_0xc94f1d) === _0x1024aa ? _0xc94f1d === _0x1b6618 || _0xc94f1d.ownerDocument === _0x37383a && _0x10a879(_0x37383a, _0xc94f1d) ? -0x1 : _0x15c418 === _0x1b6618 || _0x15c418.ownerDocument === _0x37383a && _0x10a879(_0x37383a, _0x15c418) ? 0x1 : _0x2419a3 ? _0x280612(_0x2419a3, _0xc94f1d) - _0x280612(_0x2419a3, _0x15c418) : 0x0 : 0x4 & _0x1024aa ? -0x1 : 0x1);
    } : function (_0x3db5ce, _0x573c30) {
      if (_0x3db5ce === _0x573c30) return _0x1f2889 = !0x0, 0x0;
      var _0x4a666b,
        _0x417069 = 0x0;
      _0x4a666b = _0x3db5ce.parentNode;
      var _0x26bc2c = _0x573c30.parentNode,
        _0x4d284d = [_0x3db5ce],
        _0x33ecc6 = [_0x573c30];
      if (!_0x4a666b || !_0x26bc2c) return _0x3db5ce === _0x1b6618 ? -0x1 : _0x573c30 === _0x1b6618 ? 0x1 : _0x4a666b ? -0x1 : _0x26bc2c ? 0x1 : _0x2419a3 ? _0x280612(_0x2419a3, _0x3db5ce) - _0x280612(_0x2419a3, _0x573c30) : 0x0;
      if (_0x4a666b === _0x26bc2c) return _0x4b2859(_0x3db5ce, _0x573c30);
      for (_0x4a666b = _0x3db5ce; _0x4a666b = _0x4a666b.parentNode;) _0x4d284d.unshift(_0x4a666b);
      for (_0x4a666b = _0x573c30; _0x4a666b = _0x4a666b.parentNode;) _0x33ecc6.unshift(_0x4a666b);
      for (; _0x4d284d[_0x417069] === _0x33ecc6[_0x417069];) _0x417069++;
      return _0x417069 ? _0x4b2859(_0x4d284d[_0x417069], _0x33ecc6[_0x417069]) : _0x4d284d[_0x417069] === _0x37383a ? -0x1 : _0x33ecc6[_0x417069] === _0x37383a ? 0x1 : 0x0;
    }, _0x1b6618) : _0x1b6618;
  }, _0x4ea780.matches = function (_0x4b3c0c, _0x3cfe80) {
    return _0x4ea780(_0x4b3c0c, null, null, _0x3cfe80);
  }, _0x4ea780.matchesSelector = function (_0x206284, _0x34974f) {
    if ((_0x206284.ownerDocument || _0x206284) !== _0x1b6618 && _0xf0bf2b(_0x206284), _0x34974f = _0x34974f.replace(_0x1bee4d, "='$1']"), _0x375cfa.matchesSelector && _0x2d8a5b && !_0x49ca02[_0x34974f + " "] && (!_0xca0aa5 || !_0xca0aa5.test(_0x34974f)) && (!_0x5b9095 || !_0x5b9095.test(_0x34974f))) try {
      var _0x3cab08 = _0x22836c.call(_0x206284, _0x34974f);
      if (_0x3cab08 || _0x375cfa.disconnectedMatch || _0x206284.document && 0xb !== _0x206284.document.nodeType) return _0x3cab08;
    } catch (_0x28291d) {}
    return 0x0 < _0x4ea780(_0x34974f, _0x1b6618, null, [_0x206284]).length;
  }, _0x4ea780.contains = function (_0xccb04d, _0x37b3e6) {
    return (_0xccb04d.ownerDocument || _0xccb04d) !== _0x1b6618 && _0xf0bf2b(_0xccb04d), _0x10a879(_0xccb04d, _0x37b3e6);
  }, _0x4ea780.attr = function (_0x4a83c9, _0x25b744) {
    (_0x4a83c9.ownerDocument || _0x4a83c9) !== _0x1b6618 && _0xf0bf2b(_0x4a83c9);
    var _0x165ad6 = _0x16c29d.attrHandle[_0x25b744.toLowerCase()],
      _0x165ad6 = _0x165ad6 && _0x3ee0cd.call(_0x16c29d.attrHandle, _0x25b744.toLowerCase()) ? _0x165ad6(_0x4a83c9, _0x25b744, !_0x2d8a5b) : void 0x0;
    return void 0x0 !== _0x165ad6 ? _0x165ad6 : _0x375cfa.attributes || !_0x2d8a5b ? _0x4a83c9.getAttribute(_0x25b744) : (_0x165ad6 = _0x4a83c9.getAttributeNode(_0x25b744)) && _0x165ad6.specified ? _0x165ad6.value : null;
  }, _0x4ea780.escape = function (_0x293846) {
    return (_0x293846 + '').replace(_0x128e7b, _0x42586f);
  }, _0x4ea780.error = function (_0x46d392) {
    throw Error("Syntax error, unrecognized expression: " + _0x46d392);
  }, _0x4ea780.uniqueSort = function (_0x4172e9) {
    var _0x4b3f3e,
      _0x27fdb9 = [],
      _0x974c57 = 0x0,
      _0x2e7b99 = 0x0;
    if (_0x1f2889 = !_0x375cfa.detectDuplicates, _0x2419a3 = !_0x375cfa.sortStable && _0x4172e9.slice(0x0), _0x4172e9.sort(_0x6e5aad), _0x1f2889) {
      for (; _0x4b3f3e = _0x4172e9[_0x2e7b99++];) _0x4b3f3e === _0x4172e9[_0x2e7b99] && (_0x974c57 = _0x27fdb9.push(_0x2e7b99));
      for (; _0x974c57--;) _0x4172e9.splice(_0x27fdb9[_0x974c57], 0x1);
    }
    return _0x2419a3 = null, _0x4172e9;
  }, _0x2a4205 = _0x4ea780.getText = function (_0x24dc20) {
    var _0x596525,
      _0x42970b = '',
      _0x815817 = 0x0;
    if (_0x596525 = _0x24dc20.nodeType) {
      if (0x1 === _0x596525 || 0x9 === _0x596525 || 0xb === _0x596525) {
        if ('string' == typeof _0x24dc20.textContent) return _0x24dc20.textContent;
        for (_0x24dc20 = _0x24dc20.firstChild; _0x24dc20; _0x24dc20 = _0x24dc20.nextSibling) _0x42970b += _0x2a4205(_0x24dc20);
      } else {
        if (0x3 === _0x596525 || 0x4 === _0x596525) return _0x24dc20.nodeValue;
      }
    } else {
      for (; _0x596525 = _0x24dc20[_0x815817++];) _0x42970b += _0x2a4205(_0x596525);
    }
    return _0x42970b;
  }, _0x16c29d = _0x4ea780.selectors = {
    'cacheLength': 0x32,
    'createPseudo': _0x1d9992,
    'match': _0x376eb8,
    'attrHandle': {},
    'find': {},
    'relative': {
      '>': {
        'dir': 'parentNode',
        'first': !0x0
      },
      " ": {
        'dir': 'parentNode'
      },
      '+': {
        'dir': 'previousSibling',
        'first': !0x0
      },
      '~': {
        'dir': 'previousSibling'
      }
    },
    'preFilter': {
      'ATTR': function (_0x25ce97) {
        return _0x25ce97[0x1] = _0x25ce97[0x1].replace(_0x4a550b, _0x47bbbd), _0x25ce97[0x3] = (_0x25ce97[0x3] || _0x25ce97[0x4] || _0x25ce97[0x5] || '').replace(_0x4a550b, _0x47bbbd), '~=' === _0x25ce97[0x2] && (_0x25ce97[0x3] = " " + _0x25ce97[0x3] + " "), _0x25ce97.slice(0x0, 0x4);
      },
      'CHILD': function (_0x24582c) {
        return _0x24582c[0x1] = _0x24582c[0x1].toLowerCase(), 'nth' === _0x24582c[0x1].slice(0x0, 0x3) ? (_0x24582c[0x3] || _0x4ea780.error(_0x24582c[0x0]), _0x24582c[0x4] = +(_0x24582c[0x4] ? _0x24582c[0x5] + (_0x24582c[0x6] || 0x1) : 0x2 * ('even' === _0x24582c[0x3] || 'odd' === _0x24582c[0x3])), _0x24582c[0x5] = +(_0x24582c[0x7] + _0x24582c[0x8] || 'odd' === _0x24582c[0x3])) : _0x24582c[0x3] && _0x4ea780.error(_0x24582c[0x0]), _0x24582c;
      },
      'PSEUDO': function (_0x3e8579) {
        var _0x4ab3b3,
          _0x3927cd = !_0x3e8579[0x6] && _0x3e8579[0x2];
        return _0x376eb8.CHILD.test(_0x3e8579[0x0]) ? null : (_0x3e8579[0x3] ? _0x3e8579[0x2] = _0x3e8579[0x4] || _0x3e8579[0x5] || '' : _0x3927cd && _0x46be9e.test(_0x3927cd) && (_0x4ab3b3 = _0xc21191(_0x3927cd, !0x0)) && (_0x4ab3b3 = _0x3927cd.indexOf(')', _0x3927cd.length - _0x4ab3b3) - _0x3927cd.length) && (_0x3e8579[0x0] = _0x3e8579[0x0].slice(0x0, _0x4ab3b3), _0x3e8579[0x2] = _0x3927cd.slice(0x0, _0x4ab3b3)), _0x3e8579.slice(0x0, 0x3));
      }
    },
    'filter': {
      'TAG': function (_0x16d18c) {
        var _0x302667 = _0x16d18c.replace(_0x4a550b, _0x47bbbd).toLowerCase();
        return '*' === _0x16d18c ? function () {
          return !0x0;
        } : function (_0x184202) {
          return _0x184202.nodeName && _0x184202.nodeName.toLowerCase() === _0x302667;
        };
      },
      'CLASS': function (_0x5a7676) {
        var _0x3f081c = _0x25bdf2[_0x5a7676 + " "];
        return _0x3f081c || (_0x3f081c = RegExp("(^|[\\x20\\t\\r\\n\\f])" + _0x5a7676 + "([\\x20\\t\\r\\n\\f]|$)")) && _0x25bdf2(_0x5a7676, function (_0x12dd2e) {
          return _0x3f081c.test('string' == typeof _0x12dd2e.className && _0x12dd2e.className || 'undefined' != typeof _0x12dd2e.getAttribute && _0x12dd2e.getAttribute('class') || '');
        });
      },
      'ATTR': function (_0x48c7f3, _0x879bce, _0x3698eb) {
        return function (_0x220988) {
          return _0x220988 = _0x4ea780.attr(_0x220988, _0x48c7f3), null == _0x220988 ? '!=' === _0x879bce : !_0x879bce || (_0x220988 += '', '=' === _0x879bce ? _0x220988 === _0x3698eb : '!=' === _0x879bce ? _0x220988 !== _0x3698eb : '^=' === _0x879bce ? _0x3698eb && 0x0 === _0x220988.indexOf(_0x3698eb) : '*=' === _0x879bce ? _0x3698eb && -0x1 < _0x220988.indexOf(_0x3698eb) : '$=' === _0x879bce ? _0x3698eb && _0x220988.slice(-_0x3698eb.length) === _0x3698eb : '~=' === _0x879bce ? -0x1 < (" " + _0x220988.replace(_0x4c409b, " ") + " ").indexOf(_0x3698eb) : '|=' === _0x879bce && (_0x220988 === _0x3698eb || _0x220988.slice(0x0, _0x3698eb.length + 0x1) === _0x3698eb + '-'));
        };
      },
      'CHILD': function (_0x20849f, _0x2a4580, _0x326e03, _0x1c3348, _0x5d8289) {
        var _0x58fbe6 = 'nth' !== _0x20849f.slice(0x0, 0x3),
          _0x270b6b = 'last' !== _0x20849f.slice(-0x4),
          _0x124045 = 'of-type' === _0x2a4580;
        return 0x1 === _0x1c3348 && 0x0 === _0x5d8289 ? function (_0x154035) {
          return !!_0x154035.parentNode;
        } : function (_0x179696, _0x1f26fb, _0xac450e) {
          var _0x288aee, _0x22e990, _0x2be766, _0x1350bc, _0x4417e3, _0x3ebc4e;
          _0x1f26fb = _0x58fbe6 !== _0x270b6b ? 'nextSibling' : 'previousSibling';
          var _0x5111ae = _0x179696.parentNode,
            _0x231141 = _0x124045 && _0x179696.nodeName.toLowerCase();
          _0xac450e = !_0xac450e && !_0x124045;
          var _0x568e75 = !0x1;
          if (_0x5111ae) {
            if (_0x58fbe6) {
              for (; _0x1f26fb;) {
                for (_0x1350bc = _0x179696; _0x1350bc = _0x1350bc[_0x1f26fb];) if (_0x124045 ? _0x1350bc.nodeName.toLowerCase() === _0x231141 : 0x1 === _0x1350bc.nodeType) return !0x1;
                _0x3ebc4e = _0x1f26fb = 'only' === _0x20849f && !_0x3ebc4e && 'nextSibling';
              }
              return !0x0;
            }
            if (_0x3ebc4e = [_0x270b6b ? _0x5111ae.firstChild : _0x5111ae.lastChild], _0x270b6b && _0xac450e) {
              _0x1350bc = _0x5111ae, _0x2be766 = _0x1350bc[_0x48db0d] || (_0x1350bc[_0x48db0d] = {}), _0x22e990 = _0x2be766[_0x1350bc.uniqueID] || (_0x2be766[_0x1350bc.uniqueID] = {}), _0x288aee = _0x22e990[_0x20849f] || [], _0x568e75 = (_0x4417e3 = _0x288aee[0x0] === _0x4e2892 && _0x288aee[0x1]) && _0x288aee[0x2];
              for (_0x1350bc = _0x4417e3 && _0x5111ae.childNodes[_0x4417e3]; _0x1350bc = ++_0x4417e3 && _0x1350bc && _0x1350bc[_0x1f26fb] || (_0x568e75 = _0x4417e3 = 0x0) || _0x3ebc4e.pop();) if (0x1 === _0x1350bc.nodeType && ++_0x568e75 && _0x1350bc === _0x179696) {
                _0x22e990[_0x20849f] = [_0x4e2892, _0x4417e3, _0x568e75];
                break;
              }
            } else {
              if (_0xac450e && (_0x1350bc = _0x179696, _0x2be766 = _0x1350bc[_0x48db0d] || (_0x1350bc[_0x48db0d] = {}), _0x22e990 = _0x2be766[_0x1350bc.uniqueID] || (_0x2be766[_0x1350bc.uniqueID] = {}), _0x288aee = _0x22e990[_0x20849f] || [], _0x4417e3 = _0x288aee[0x0] === _0x4e2892 && _0x288aee[0x1], _0x568e75 = _0x4417e3), !0x1 === _0x568e75) {
                for (; (_0x1350bc = ++_0x4417e3 && _0x1350bc && _0x1350bc[_0x1f26fb] || (_0x568e75 = _0x4417e3 = 0x0) || _0x3ebc4e.pop()) && (!(_0x124045 ? _0x1350bc.nodeName.toLowerCase() === _0x231141 : 0x1 === _0x1350bc.nodeType) || !++_0x568e75 || !(_0xac450e && (_0x2be766 = _0x1350bc[_0x48db0d] || (_0x1350bc[_0x48db0d] = {}), _0x22e990 = _0x2be766[_0x1350bc.uniqueID] || (_0x2be766[_0x1350bc.uniqueID] = {}), _0x22e990[_0x20849f] = [_0x4e2892, _0x568e75]), _0x1350bc === _0x179696)););
              }
            }
            return _0x568e75 -= _0x5d8289, _0x568e75 === _0x1c3348 || 0x0 === _0x568e75 % _0x1c3348 && 0x0 <= _0x568e75 / _0x1c3348;
          }
        };
      },
      'PSEUDO': function (_0x1a54ca, _0x384e70) {
        var _0x2803d4,
          _0x55a215 = _0x16c29d.pseudos[_0x1a54ca] || _0x16c29d.setFilters[_0x1a54ca.toLowerCase()] || _0x4ea780.error("unsupported pseudo: " + _0x1a54ca);
        return _0x55a215[_0x48db0d] ? _0x55a215(_0x384e70) : 0x1 < _0x55a215.length ? (_0x2803d4 = [_0x1a54ca, _0x1a54ca, '', _0x384e70], _0x16c29d.setFilters.hasOwnProperty(_0x1a54ca.toLowerCase()) ? _0x1d9992(function (_0x6fb246, _0x2e078a) {
          for (var _0x1cac6f, _0x2d828e = _0x55a215(_0x6fb246, _0x384e70), _0xa68db3 = _0x2d828e.length; _0xa68db3--;) _0x1cac6f = _0x280612(_0x6fb246, _0x2d828e[_0xa68db3]), _0x6fb246[_0x1cac6f] = !(_0x2e078a[_0x1cac6f] = _0x2d828e[_0xa68db3]);
        }) : function (_0x7b1973) {
          return _0x55a215(_0x7b1973, 0x0, _0x2803d4);
        }) : _0x55a215;
      }
    },
    'pseudos': {
      'not': _0x1d9992(function (_0x1e3589) {
        var _0x18ee66 = [],
          _0x56fbd4 = [],
          _0x1d2a68 = _0x1b86ad(_0x1e3589.replace(_0x524dde, '$1'));
        return _0x1d2a68[_0x48db0d] ? _0x1d9992(function (_0x3a74d8, _0x1a41bf, _0x1067b1, _0x4782dd) {
          var _0x5e50a2;
          _0x1067b1 = _0x1d2a68(_0x3a74d8, null, _0x4782dd, []);
          for (_0x4782dd = _0x3a74d8.length; _0x4782dd--;) (_0x5e50a2 = _0x1067b1[_0x4782dd]) && (_0x3a74d8[_0x4782dd] = !(_0x1a41bf[_0x4782dd] = _0x5e50a2));
        }) : function (_0x4780d0, _0x2404f0, _0x572689) {
          return _0x18ee66[0x0] = _0x4780d0, _0x1d2a68(_0x18ee66, null, _0x572689, _0x56fbd4), _0x18ee66[0x0] = null, !_0x56fbd4.pop();
        };
      }),
      'has': _0x1d9992(function (_0x1b5d34) {
        return function (_0x59aaa3) {
          return 0x0 < _0x4ea780(_0x1b5d34, _0x59aaa3).length;
        };
      }),
      'contains': _0x1d9992(function (_0x4576ed) {
        return _0x4576ed = _0x4576ed.replace(_0x4a550b, _0x47bbbd), function (_0x40b073) {
          return -0x1 < (_0x40b073.textContent || _0x40b073.innerText || _0x2a4205(_0x40b073)).indexOf(_0x4576ed);
        };
      }),
      'lang': _0x1d9992(function (_0xc2a101) {
        return _0x2e9a45.test(_0xc2a101 || '') || _0x4ea780.error("unsupported lang: " + _0xc2a101), _0xc2a101 = _0xc2a101.replace(_0x4a550b, _0x47bbbd).toLowerCase(), function (_0x5513ef) {
          var _0x5f0e20;
          do if (_0x5f0e20 = _0x2d8a5b ? _0x5513ef.lang : _0x5513ef.getAttribute('xml:lang') || _0x5513ef.getAttribute('lang')) return _0x5f0e20 = _0x5f0e20.toLowerCase(), _0x5f0e20 === _0xc2a101 || 0x0 === _0x5f0e20.indexOf(_0xc2a101 + '-'); while ((_0x5513ef = _0x5513ef.parentNode) && 0x1 === _0x5513ef.nodeType);
          return !0x1;
        };
      }),
      'target': function (_0x5b711a) {
        var _0x440372 = _0x14a311.location && _0x14a311.location.hash;
        return _0x440372 && _0x440372.slice(0x1) === _0x5b711a.id;
      },
      'root': function (_0x53d741) {
        return _0x53d741 === _0x30475d;
      },
      'focus': function (_0xa3dccb) {
        return _0xa3dccb === _0x1b6618.activeElement && (!_0x1b6618.hasFocus || _0x1b6618.hasFocus()) && !(!_0xa3dccb.type && !_0xa3dccb.href && !~_0xa3dccb.tabIndex);
      },
      'enabled': _0x34dc9d(!0x1),
      'disabled': _0x34dc9d(!0x0),
      'checked': function (_0x173a1f) {
        var _0x387133 = _0x173a1f.nodeName.toLowerCase();
        return 'input' === _0x387133 && !!_0x173a1f.checked || 'option' === _0x387133 && !!_0x173a1f.selected;
      },
      'selected': function (_0x47c6a2) {
        return _0x47c6a2.parentNode && _0x47c6a2.parentNode.selectedIndex, !0x0 === _0x47c6a2.selected;
      },
      'empty': function (_0x50466a) {
        for (_0x50466a = _0x50466a.firstChild; _0x50466a; _0x50466a = _0x50466a.nextSibling) if (0x6 > _0x50466a.nodeType) return !0x1;
        return !0x0;
      },
      'parent': function (_0x46fd7f) {
        return !_0x16c29d.pseudos.empty(_0x46fd7f);
      },
      'header': function (_0x21beb7) {
        return _0x28d338.test(_0x21beb7.nodeName);
      },
      'input': function (_0xd41b6) {
        return _0x15b259.test(_0xd41b6.nodeName);
      },
      'button': function (_0x1bd409) {
        var _0x144b97 = _0x1bd409.nodeName.toLowerCase();
        return 'input' === _0x144b97 && 'button' === _0x1bd409.type || 'button' === _0x144b97;
      },
      'text': function (_0x1eb71a) {
        var _0xc89efa;
        return 'input' === _0x1eb71a.nodeName.toLowerCase() && 'text' === _0x1eb71a.type && (null == (_0xc89efa = _0x1eb71a.getAttribute('type')) || 'text' === _0xc89efa.toLowerCase());
      },
      'first': _0x110e06(function () {
        return [0x0];
      }),
      'last': _0x110e06(function (_0x171891, _0x439014) {
        return [_0x439014 - 0x1];
      }),
      'eq': _0x110e06(function (_0x37dbe0, _0x25e8e3, _0x3db962) {
        return [0x0 > _0x3db962 ? _0x3db962 + _0x25e8e3 : _0x3db962];
      }),
      'even': _0x110e06(function (_0xde3c18, _0x503b63) {
        for (var _0xc57d9 = 0x0; _0xc57d9 < _0x503b63; _0xc57d9 += 0x2) _0xde3c18.push(_0xc57d9);
        return _0xde3c18;
      }),
      'odd': _0x110e06(function (_0x3e0a20, _0x260f39) {
        for (var _0x1f5112 = 0x1; _0x1f5112 < _0x260f39; _0x1f5112 += 0x2) _0x3e0a20.push(_0x1f5112);
        return _0x3e0a20;
      }),
      'lt': _0x110e06(function (_0x5723d4, _0x4b44da, _0x5b792f) {
        for (_0x4b44da = 0x0 > _0x5b792f ? _0x5b792f + _0x4b44da : _0x5b792f; 0x0 <= --_0x4b44da;) _0x5723d4.push(_0x4b44da);
        return _0x5723d4;
      }),
      'gt': _0x110e06(function (_0x3ea30b, _0x21d47d, _0x343b97) {
        for (_0x343b97 = 0x0 > _0x343b97 ? _0x343b97 + _0x21d47d : _0x343b97; ++_0x343b97 < _0x21d47d;) _0x3ea30b.push(_0x343b97);
        return _0x3ea30b;
      })
    }
  }, _0x16c29d.pseudos.nth = _0x16c29d.pseudos.eq;
  for (_0xa58495 in {
    'radio': !0x0,
    'checkbox': !0x0,
    'file': !0x0,
    'password': !0x0,
    'image': !0x0
  }) _0x16c29d.pseudos[_0xa58495] = _0x4b3ae9(_0xa58495);
  for (_0xa58495 in {
    'submit': !0x0,
    'reset': !0x0
  }) _0x16c29d.pseudos[_0xa58495] = _0x4eff68(_0xa58495);
  _0x26b1f5.prototype = _0x16c29d.filters = _0x16c29d.pseudos, _0x16c29d.setFilters = new _0x26b1f5(), _0xc21191 = _0x4ea780.tokenize = function (_0x2483bd, _0x40ae8a) {
    var _0x50c533, _0x3802b2, _0x938383, _0x17cdd8, _0x1e615a, _0x511979, _0xbbe28d;
    if (_0x1e615a = _0x272f4f[_0x2483bd + " "]) return _0x40ae8a ? 0x0 : _0x1e615a.slice(0x0);
    _0x1e615a = _0x2483bd, _0x511979 = [];
    for (_0xbbe28d = _0x16c29d.preFilter; _0x1e615a;) {
      _0x50c533 && !(_0x3802b2 = _0x3657e6.exec(_0x1e615a)) || (_0x3802b2 && (_0x1e615a = _0x1e615a.slice(_0x3802b2[0x0].length) || _0x1e615a), _0x511979.push(_0x938383 = [])), _0x50c533 = !0x1, (_0x3802b2 = _0x97df71.exec(_0x1e615a)) && (_0x50c533 = _0x3802b2.shift(), _0x938383.push({
        'value': _0x50c533,
        'type': _0x3802b2[0x0].replace(_0x524dde, " ")
      }), _0x1e615a = _0x1e615a.slice(_0x50c533.length));
      for (_0x17cdd8 in _0x16c29d.filter) !(_0x3802b2 = _0x376eb8[_0x17cdd8].exec(_0x1e615a)) || _0xbbe28d[_0x17cdd8] && !(_0x3802b2 = _0xbbe28d[_0x17cdd8](_0x3802b2)) || (_0x50c533 = _0x3802b2.shift(), _0x938383.push({
        'value': _0x50c533,
        'type': _0x17cdd8,
        'matches': _0x3802b2
      }), _0x1e615a = _0x1e615a.slice(_0x50c533.length));
      if (!_0x50c533) break;
    }
    return _0x40ae8a ? _0x1e615a.length : _0x1e615a ? _0x4ea780.error(_0x2483bd) : _0x272f4f(_0x2483bd, _0x511979).slice(0x0);
  }, _0x142e0e = (_0x1b86ad = _0x4ea780.compile = function (_0x161565, _0x1e5520) {
    var _0x411ef7,
      _0x1ee39f = [],
      _0x34dc02 = [],
      _0x53b185 = _0x49ca02[_0x161565 + " "];
    if (!_0x53b185) {
      _0x1e5520 || (_0x1e5520 = _0xc21191(_0x161565));
      for (_0x411ef7 = _0x1e5520.length; _0x411ef7--;) _0x53b185 = _0x91296a(_0x1e5520[_0x411ef7]), _0x53b185[_0x48db0d] ? _0x1ee39f.push(_0x53b185) : _0x34dc02.push(_0x53b185);
      _0x411ef7 = _0x49ca02;
      var _0x4ed297 = 0x0 < _0x1ee39f.length,
        _0x56e672 = 0x0 < _0x34dc02.length,
        _0x53b185 = function (_0x19fb15, _0x45d7e7, _0x133982, _0x3ea214, _0x4e8cd9) {
          var _0xc0107,
            _0x1999de,
            _0x1104c4,
            _0x2e97ae = 0x0,
            _0xc744fa = '0',
            _0x1e22e5 = _0x19fb15 && [],
            _0x13fad0 = [],
            _0x3c9b0d = _0x5c6ab0,
            _0x3cf04d = _0x19fb15 || _0x56e672 && _0x16c29d.find.TAG('*', _0x4e8cd9),
            _0x3300eb = _0x4e2892 += null == _0x3c9b0d ? 0x1 : Math.random() || 0.1,
            _0x4f9cea = _0x3cf04d.length;
          for (_0x4e8cd9 && (_0x5c6ab0 = _0x45d7e7 === _0x1b6618 || _0x45d7e7 || _0x4e8cd9); _0xc744fa !== _0x4f9cea && null != (_0xc0107 = _0x3cf04d[_0xc744fa]); _0xc744fa++) {
            if (_0x56e672 && _0xc0107) {
              _0x1999de = 0x0;
              for (_0x45d7e7 || _0xc0107.ownerDocument === _0x1b6618 || (_0xf0bf2b(_0xc0107), _0x133982 = !_0x2d8a5b); _0x1104c4 = _0x34dc02[_0x1999de++];) if (_0x1104c4(_0xc0107, _0x45d7e7 || _0x1b6618, _0x133982)) {
                _0x3ea214.push(_0xc0107);
                break;
              }
              _0x4e8cd9 && (_0x4e2892 = _0x3300eb);
            }
            _0x4ed297 && ((_0xc0107 = !_0x1104c4 && _0xc0107) && _0x2e97ae--, _0x19fb15 && _0x1e22e5.push(_0xc0107));
          }
          if (_0x2e97ae += _0xc744fa, _0x4ed297 && _0xc744fa !== _0x2e97ae) {
            for (_0x1999de = 0x0; _0x1104c4 = _0x1ee39f[_0x1999de++];) _0x1104c4(_0x1e22e5, _0x13fad0, _0x45d7e7, _0x133982);
            if (_0x19fb15) {
              if (0x0 < _0x2e97ae) {
                for (; _0xc744fa--;) _0x1e22e5[_0xc744fa] || _0x13fad0[_0xc744fa] || (_0x13fad0[_0xc744fa] = _0x36d4fe.call(_0x3ea214));
              }
              _0x13fad0 = _0x5204b0(_0x13fad0);
            }
            _0x2a8f76.apply(_0x3ea214, _0x13fad0), _0x4e8cd9 && !_0x19fb15 && 0x0 < _0x13fad0.length && 0x1 < _0x2e97ae + _0x1ee39f.length && _0x4ea780.uniqueSort(_0x3ea214);
          }
          return _0x4e8cd9 && (_0x4e2892 = _0x3300eb, _0x5c6ab0 = _0x3c9b0d), _0x1e22e5;
        },
        _0x53b185 = _0x4ed297 ? _0x1d9992(_0x53b185) : _0x53b185,
        _0x53b185 = _0x411ef7(_0x161565, _0x53b185);
      _0x53b185.selector = _0x161565;
    }
    return _0x53b185;
  }, _0x5cc3b1 = _0x4ea780.select = function (_0x51a4c3, _0x1ae8c9, _0x1ce5ed, _0x4e5e47) {
    var _0x3db982,
      _0x1d53b3,
      _0x5f596f,
      _0x228053,
      _0x260ed7,
      _0xb9d61e = 'function' == typeof _0x51a4c3 && _0x51a4c3,
      _0x503967 = !_0x4e5e47 && _0xc21191(_0x51a4c3 = _0xb9d61e.selector || _0x51a4c3);
    if (_0x1ce5ed = _0x1ce5ed || [], 0x1 === _0x503967.length) {
      if (_0x1d53b3 = _0x503967[0x0] = _0x503967[0x0].slice(0x0), 0x2 < _0x1d53b3.length && 'ID' === (_0x5f596f = _0x1d53b3[0x0]).type && 0x9 === _0x1ae8c9.nodeType && _0x2d8a5b && _0x16c29d.relative[_0x1d53b3[0x1].type]) {
        if (_0x1ae8c9 = (_0x16c29d.find.ID(_0x5f596f.matches[0x0].replace(_0x4a550b, _0x47bbbd), _0x1ae8c9) || [])[0x0], !_0x1ae8c9) return _0x1ce5ed;
        _0xb9d61e && (_0x1ae8c9 = _0x1ae8c9.parentNode), _0x51a4c3 = _0x51a4c3.slice(_0x1d53b3.shift().value.length);
      }
      for (_0x3db982 = _0x376eb8.needsContext.test(_0x51a4c3) ? 0x0 : _0x1d53b3.length; _0x3db982-- && !(_0x5f596f = _0x1d53b3[_0x3db982], _0x16c29d.relative[_0x228053 = _0x5f596f.type]);) if ((_0x260ed7 = _0x16c29d.find[_0x228053]) && (_0x4e5e47 = _0x260ed7(_0x5f596f.matches[0x0].replace(_0x4a550b, _0x47bbbd), _0x13f32f.test(_0x1d53b3[0x0].type) && _0x5595d1(_0x1ae8c9.parentNode) || _0x1ae8c9))) {
        if (_0x1d53b3.splice(_0x3db982, 0x1), _0x51a4c3 = _0x4e5e47.length && _0x58935d(_0x1d53b3), !_0x51a4c3) return _0x2a8f76.apply(_0x1ce5ed, _0x4e5e47), _0x1ce5ed;
        break;
      }
    }
    return (_0xb9d61e || _0x1b86ad(_0x51a4c3, _0x503967))(_0x4e5e47, _0x1ae8c9, !_0x2d8a5b, _0x1ce5ed, !_0x1ae8c9 || _0x13f32f.test(_0x51a4c3) && _0x5595d1(_0x1ae8c9.parentNode) || _0x1ae8c9), _0x1ce5ed;
  }, _0x375cfa.sortStable = _0x48db0d.split('').sort(_0x6e5aad).join('') === _0x48db0d, _0x375cfa.detectDuplicates = !!_0x1f2889, _0xf0bf2b(), _0x375cfa.sortDetached = _0x41268a(function (_0x55c452) {
    return 0x1 & _0x55c452.compareDocumentPosition(_0x1b6618.createElement('fieldset'));
  }), _0x41268a(function (_0x1f12b6) {
    return _0x1f12b6.innerHTML = "<a href='#'></a>", '#' === _0x1f12b6.firstChild.getAttribute('href');
  }) || _0x4bf706('type|href|height|width', function (_0xdb622f, _0x16d46d, _0x4f2079) {
    if (!_0x4f2079) return _0xdb622f.getAttribute(_0x16d46d, 'type' === _0x16d46d.toLowerCase() ? 0x1 : 0x2);
  }), _0x375cfa.attributes && _0x41268a(function (_0x26700a) {
    return _0x26700a.innerHTML = '<input/>', _0x26700a.firstChild.setAttribute('value', ''), '' === _0x26700a.firstChild.getAttribute('value');
  }) || _0x4bf706('value', function (_0x39603a, _0x42553b, _0x2b2eb3) {
    if (!_0x2b2eb3 && 'input' === _0x39603a.nodeName.toLowerCase()) return _0x39603a.defaultValue;
  }), _0x41268a(function (_0x2efc1b) {
    return null == _0x2efc1b.getAttribute('disabled');
  }) || _0x4bf706('checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', function (_0x2b2de5, _0x1cef47, _0x13f629) {
    var _0x40cd95;
    if (!_0x13f629) return !0x0 === _0x2b2de5[_0x1cef47] ? _0x1cef47.toLowerCase() : (_0x40cd95 = _0x2b2de5.getAttributeNode(_0x1cef47)) && _0x40cd95.specified ? _0x40cd95.value : null;
  }), _0x4ea780), _0x2216fd.find = _0x142e0e, _0x2216fd.expr = _0x142e0e.selectors, _0x2216fd.expr[':'] = _0x2216fd.expr.pseudos, _0x2216fd.uniqueSort = _0x2216fd.unique = _0x142e0e.uniqueSort, _0x2216fd.text = _0x142e0e.getText, _0x2216fd.isXMLDoc = _0x142e0e.isXML, _0x2216fd.contains = _0x142e0e.contains, _0x2216fd.escapeSelector = _0x142e0e.escape;
  var _0x54ae8d = function (_0x4ce199, _0x222816, _0x5e11fd) {
      for (var _0x3525d9 = [], _0x243de2 = void 0x0 !== _0x5e11fd; (_0x4ce199 = _0x4ce199[_0x222816]) && 0x9 !== _0x4ce199.nodeType;) if (0x1 === _0x4ce199.nodeType) {
        if (_0x243de2 && _0x2216fd(_0x4ce199).is(_0x5e11fd)) break;
        _0x3525d9.push(_0x4ce199);
      }
      return _0x3525d9;
    },
    _0x11f7b3 = function (_0x35b118, _0x4047cb) {
      for (var _0x347819 = []; _0x35b118; _0x35b118 = _0x35b118.nextSibling) 0x1 === _0x35b118.nodeType && _0x35b118 !== _0x4047cb && _0x347819.push(_0x35b118);
      return _0x347819;
    },
    _0x3965ab = _0x2216fd.expr.match.needsContext,
    _0x1e310a = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    _0x11921e = /^.[^:#\[\.,]*$/;
  _0x2216fd.filter = function (_0x430670, _0x146b28, _0x174120) {
    var _0x1631e2 = _0x146b28[0x0];
    return _0x174120 && (_0x430670 = ':not(' + _0x430670 + ')'), 0x1 === _0x146b28.length && 0x1 === _0x1631e2.nodeType ? _0x2216fd.find.matchesSelector(_0x1631e2, _0x430670) ? [_0x1631e2] : [] : _0x2216fd.find.matches(_0x430670, _0x2216fd.grep(_0x146b28, function (_0xf16621) {
      return 0x1 === _0xf16621.nodeType;
    }));
  }, _0x2216fd.fn.extend({
    'find': function (_0x4812d2) {
      var _0x130aaf,
        _0x511005,
        _0x5e5613 = this.length,
        _0x54b6ea = this;
      if ('string' != typeof _0x4812d2) return this.pushStack(_0x2216fd(_0x4812d2).filter(function () {
        for (_0x130aaf = 0x0; _0x130aaf < _0x5e5613; _0x130aaf++) if (_0x2216fd.contains(_0x54b6ea[_0x130aaf], this)) return !0x0;
      }));
      _0x511005 = this.pushStack([]);
      for (_0x130aaf = 0x0; _0x130aaf < _0x5e5613; _0x130aaf++) _0x2216fd.find(_0x4812d2, _0x54b6ea[_0x130aaf], _0x511005);
      return 0x1 < _0x5e5613 ? _0x2216fd.uniqueSort(_0x511005) : _0x511005;
    },
    'filter': function (_0x5b0546) {
      return this.pushStack(_0x563d8f(this, _0x5b0546 || [], !0x1));
    },
    'not': function (_0x1bfead) {
      return this.pushStack(_0x563d8f(this, _0x1bfead || [], !0x0));
    },
    'is': function (_0x164a7d) {
      return !!_0x563d8f(this, 'string' == typeof _0x164a7d && _0x3965ab.test(_0x164a7d) ? _0x2216fd(_0x164a7d) : _0x164a7d || [], !0x1).length;
    }
  });
  var _0x3ebbe0,
    _0x24de74 = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (_0x2216fd.fn.init = function (_0x53715c, _0x37d2e4, _0x31b777) {
    var _0x168926, _0x11a25a;
    if (!_0x53715c) return this;
    if (_0x31b777 = _0x31b777 || _0x3ebbe0, 'string' == typeof _0x53715c) {
      if (_0x168926 = '<' === _0x53715c[0x0] && '>' === _0x53715c[_0x53715c.length - 0x1] && 0x3 <= _0x53715c.length ? [null, _0x53715c, null] : _0x24de74.exec(_0x53715c), !_0x168926 || !_0x168926[0x1] && _0x37d2e4) return !_0x37d2e4 || _0x37d2e4.jquery ? (_0x37d2e4 || _0x31b777).find(_0x53715c) : this.constructor(_0x37d2e4).find(_0x53715c);
      if (_0x168926[0x1]) {
        if (_0x37d2e4 = _0x37d2e4 instanceof _0x2216fd ? _0x37d2e4[0x0] : _0x37d2e4, _0x2216fd.merge(this, _0x2216fd.parseHTML(_0x168926[0x1], _0x37d2e4 && _0x37d2e4.nodeType ? _0x37d2e4.ownerDocument || _0x37d2e4 : _0x338fe6, !0x0)), _0x1e310a.test(_0x168926[0x1]) && _0x2216fd.isPlainObject(_0x37d2e4)) {
          for (_0x168926 in _0x37d2e4) _0x2216fd.isFunction(this[_0x168926]) ? this[_0x168926](_0x37d2e4[_0x168926]) : this.attr(_0x168926, _0x37d2e4[_0x168926]);
        }
        return this;
      }
      return _0x11a25a = _0x338fe6.getElementById(_0x168926[0x2]), _0x11a25a && (this[0x0] = _0x11a25a, this.length = 0x1), this;
    }
    return _0x53715c.nodeType ? (this[0x0] = _0x53715c, this.length = 0x1, this) : _0x2216fd.isFunction(_0x53715c) ? void 0x0 !== _0x31b777.ready ? _0x31b777.ready(_0x53715c) : _0x53715c(_0x2216fd) : _0x2216fd.makeArray(_0x53715c, this);
  }).prototype = _0x2216fd.fn, _0x3ebbe0 = _0x2216fd(_0x338fe6);
  var _0x5c65c6 = /^(?:parents|prev(?:Until|All))/,
    _0x2fc3eb = {
      'children': !0x0,
      'contents': !0x0,
      'next': !0x0,
      'prev': !0x0
    };
  _0x2216fd.fn.extend({
    'has': function (_0x4f13cb) {
      var _0x57116d = _0x2216fd(_0x4f13cb, this),
        _0x422c15 = _0x57116d.length;
      return this.filter(function () {
        for (var _0x43a2cf = 0x0; _0x43a2cf < _0x422c15; _0x43a2cf++) if (_0x2216fd.contains(this, _0x57116d[_0x43a2cf])) return !0x0;
      });
    },
    'closest': function (_0x39a743, _0x38d540) {
      var _0x372b4c,
        _0x191cf4 = 0x0,
        _0x172726 = this.length,
        _0x246d57 = [],
        _0x19102b = 'string' != typeof _0x39a743 && _0x2216fd(_0x39a743);
      if (!_0x3965ab.test(_0x39a743)) {
        for (; _0x191cf4 < _0x172726; _0x191cf4++) for (_0x372b4c = this[_0x191cf4]; _0x372b4c && _0x372b4c !== _0x38d540; _0x372b4c = _0x372b4c.parentNode) if (0xb > _0x372b4c.nodeType && (_0x19102b ? -0x1 < _0x19102b.index(_0x372b4c) : 0x1 === _0x372b4c.nodeType && _0x2216fd.find.matchesSelector(_0x372b4c, _0x39a743))) {
          _0x246d57.push(_0x372b4c);
          break;
        }
      }
      return this.pushStack(0x1 < _0x246d57.length ? _0x2216fd.uniqueSort(_0x246d57) : _0x246d57);
    },
    'index': function (_0x14e5ad) {
      return _0x14e5ad ? 'string' == typeof _0x14e5ad ? _0x25aa8b.call(_0x2216fd(_0x14e5ad), this[0x0]) : _0x25aa8b.call(this, _0x14e5ad.jquery ? _0x14e5ad[0x0] : _0x14e5ad) : this[0x0] && this[0x0].parentNode ? this.first().prevAll().length : -0x1;
    },
    'add': function (_0x37f6e8, _0x48c23a) {
      return this.pushStack(_0x2216fd.uniqueSort(_0x2216fd.merge(this.get(), _0x2216fd(_0x37f6e8, _0x48c23a))));
    },
    'addBack': function (_0x4b28ea) {
      return this.add(null == _0x4b28ea ? this.prevObject : this.prevObject.filter(_0x4b28ea));
    }
  }), _0x2216fd.each({
    'parent': function (_0x34756a) {
      return (_0x34756a = _0x34756a.parentNode) && 0xb !== _0x34756a.nodeType ? _0x34756a : null;
    },
    'parents': function (_0x7d0bfe) {
      return _0x54ae8d(_0x7d0bfe, 'parentNode');
    },
    'parentsUntil': function (_0x514b6e, _0x2b9475, _0x663510) {
      return _0x54ae8d(_0x514b6e, 'parentNode', _0x663510);
    },
    'next': function (_0x476c69) {
      return _0x3f1877(_0x476c69, 'nextSibling');
    },
    'prev': function (_0x2f1232) {
      return _0x3f1877(_0x2f1232, 'previousSibling');
    },
    'nextAll': function (_0x22e50e) {
      return _0x54ae8d(_0x22e50e, 'nextSibling');
    },
    'prevAll': function (_0x2e5169) {
      return _0x54ae8d(_0x2e5169, 'previousSibling');
    },
    'nextUntil': function (_0x576784, _0x4179c2, _0x3b61a9) {
      return _0x54ae8d(_0x576784, 'nextSibling', _0x3b61a9);
    },
    'prevUntil': function (_0x61ecad, _0x1aa89b, _0x41023b) {
      return _0x54ae8d(_0x61ecad, 'previousSibling', _0x41023b);
    },
    'siblings': function (_0x49374a) {
      return _0x11f7b3((_0x49374a.parentNode || {}).firstChild, _0x49374a);
    },
    'children': function (_0x1976ae) {
      return _0x11f7b3(_0x1976ae.firstChild);
    },
    'contents': function (_0x15769d) {
      return _0x53aeed(_0x15769d, 'iframe') ? _0x15769d.contentDocument : (_0x53aeed(_0x15769d, 'template') && (_0x15769d = _0x15769d.content || _0x15769d), _0x2216fd.merge([], _0x15769d.childNodes));
    }
  }, function (_0x4280dc, _0x52d588) {
    _0x2216fd.fn[_0x4280dc] = function (_0x2b887e, _0x5af4ec) {
      var _0x23e19a = _0x2216fd.map(this, _0x52d588, _0x2b887e);
      return 'Until' !== _0x4280dc.slice(-0x5) && (_0x5af4ec = _0x2b887e), _0x5af4ec && 'string' == typeof _0x5af4ec && (_0x23e19a = _0x2216fd.filter(_0x5af4ec, _0x23e19a)), 0x1 < this.length && (_0x2fc3eb[_0x4280dc] || _0x2216fd.uniqueSort(_0x23e19a), _0x5c65c6.test(_0x4280dc) && _0x23e19a.reverse()), this.pushStack(_0x23e19a);
    };
  });
  var _0x983dc8 = /[^\x20\t\r\n\f]+/g;
  _0x2216fd.Callbacks = function (_0x2922c8) {
    var _0x2bc8e0;
    if ('string' == typeof _0x2922c8) {
      var _0x10b0aa = {};
      _0x2bc8e0 = (_0x2216fd.each(_0x2922c8.match(_0x983dc8) || [], function (_0x7fd556, _0x358eb9) {
        _0x10b0aa[_0x358eb9] = !0x0;
      }), _0x10b0aa);
    } else _0x2bc8e0 = _0x2216fd.extend({}, _0x2922c8);
    _0x2922c8 = _0x2bc8e0;
    var _0x554636,
      _0x5a0993,
      _0x15ba92,
      _0x49805f,
      _0x50cd54 = [],
      _0x3a0ff0 = [],
      _0x2c794b = -0x1,
      _0x2a5877 = function () {
        _0x49805f = _0x49805f || _0x2922c8.once;
        for (_0x15ba92 = _0x554636 = !0x0; _0x3a0ff0.length; _0x2c794b = -0x1) for (_0x5a0993 = _0x3a0ff0.shift(); ++_0x2c794b < _0x50cd54.length;) !0x1 === _0x50cd54[_0x2c794b].apply(_0x5a0993[0x0], _0x5a0993[0x1]) && _0x2922c8.stopOnFalse && (_0x2c794b = _0x50cd54.length, _0x5a0993 = !0x1);
        _0x2922c8.memory || (_0x5a0993 = !0x1), _0x554636 = !0x1, _0x49805f && (_0x50cd54 = _0x5a0993 ? [] : '');
      },
      _0x4cd6c4 = {
        'add': function () {
          return _0x50cd54 && (_0x5a0993 && !_0x554636 && (_0x2c794b = _0x50cd54.length - 0x1, _0x3a0ff0.push(_0x5a0993)), function _0x10d9d5(_0x1b1139) {
            _0x2216fd.each(_0x1b1139, function (_0x3b5a81, _0x404d31) {
              _0x2216fd.isFunction(_0x404d31) ? _0x2922c8.unique && _0x4cd6c4.has(_0x404d31) || _0x50cd54.push(_0x404d31) : _0x404d31 && _0x404d31.length && 'string' !== _0x2216fd.type(_0x404d31) && _0x10d9d5(_0x404d31);
            });
          }(arguments), _0x5a0993 && !_0x554636 && _0x2a5877()), this;
        },
        'remove': function () {
          return _0x2216fd.each(arguments, function (_0x46dfd2, _0x3d4970) {
            for (var _0xd19dfe; -0x1 < (_0xd19dfe = _0x2216fd.inArray(_0x3d4970, _0x50cd54, _0xd19dfe));) _0x50cd54.splice(_0xd19dfe, 0x1), _0xd19dfe <= _0x2c794b && _0x2c794b--;
          }), this;
        },
        'has': function (_0x16b17f) {
          return _0x16b17f ? -0x1 < _0x2216fd.inArray(_0x16b17f, _0x50cd54) : 0x0 < _0x50cd54.length;
        },
        'empty': function () {
          return _0x50cd54 && (_0x50cd54 = []), this;
        },
        'disable': function () {
          return _0x49805f = _0x3a0ff0 = [], _0x50cd54 = _0x5a0993 = '', this;
        },
        'disabled': function () {
          return !_0x50cd54;
        },
        'lock': function () {
          return _0x49805f = _0x3a0ff0 = [], _0x5a0993 || _0x554636 || (_0x50cd54 = _0x5a0993 = ''), this;
        },
        'locked': function () {
          return !!_0x49805f;
        },
        'fireWith': function (_0x18dda5, _0x4b3b31) {
          return _0x49805f || (_0x4b3b31 = _0x4b3b31 || [], _0x4b3b31 = [_0x18dda5, _0x4b3b31.slice ? _0x4b3b31.slice() : _0x4b3b31], _0x3a0ff0.push(_0x4b3b31), _0x554636 || _0x2a5877()), this;
        },
        'fire': function () {
          return _0x4cd6c4.fireWith(this, arguments), this;
        },
        'fired': function () {
          return !!_0x15ba92;
        }
      };
    return _0x4cd6c4;
  }, _0x2216fd.extend({
    'Deferred': function (_0x4ceb78) {
      var _0x4c5d44 = [['notify', 'progress', _0x2216fd.Callbacks('memory'), _0x2216fd.Callbacks('memory'), 0x2], ['resolve', 'done', _0x2216fd.Callbacks("once memory"), _0x2216fd.Callbacks("once memory"), 0x0, 'resolved'], ['reject', 'fail', _0x2216fd.Callbacks("once memory"), _0x2216fd.Callbacks("once memory"), 0x1, 'rejected']],
        _0x18b909 = 'pending',
        _0x54b7a7 = {
          'state': function () {
            return _0x18b909;
          },
          'always': function () {
            return _0x3660ac.done(arguments).fail(arguments), this;
          },
          'catch': function (_0x364856) {
            return _0x54b7a7.then(null, _0x364856);
          },
          'pipe': function () {
            var _0x2fa288 = arguments;
            return _0x2216fd.Deferred(function (_0x1dc37a) {
              _0x2216fd.each(_0x4c5d44, function (_0x1afa0b, _0xb42597) {
                var _0x17f842 = _0x2216fd.isFunction(_0x2fa288[_0xb42597[0x4]]) && _0x2fa288[_0xb42597[0x4]];
                _0x3660ac[_0xb42597[0x1]](function () {
                  var _0x3d2abb = _0x17f842 && _0x17f842.apply(this, arguments);
                  _0x3d2abb && _0x2216fd.isFunction(_0x3d2abb.promise) ? _0x3d2abb.promise().progress(_0x1dc37a.notify).done(_0x1dc37a.resolve).fail(_0x1dc37a.reject) : _0x1dc37a[_0xb42597[0x0] + 'With'](this, _0x17f842 ? [_0x3d2abb] : arguments);
                });
              }), _0x2fa288 = null;
            }).promise();
          },
          'then': function (_0xcb10df, _0x3ae9e1, _0x4344c7) {
            function _0x4947e5(_0x9acab6, _0x9f0b77, _0x1f9269, _0x19ebc0) {
              return function () {
                var _0x2d7997 = this,
                  _0x1f0061 = arguments,
                  _0x177f40 = function () {
                    var _0x1b6a16, _0x138144;
                    if (!(_0x9acab6 < _0x266f2b)) {
                      if (_0x1b6a16 = _0x1f9269.apply(_0x2d7997, _0x1f0061), _0x1b6a16 === _0x9f0b77.promise()) throw new TypeError("Thenable self-resolution");
                      _0x138144 = _0x1b6a16 && ('object' == typeof _0x1b6a16 || 'function' == typeof _0x1b6a16) && _0x1b6a16.then, _0x2216fd.isFunction(_0x138144) ? _0x19ebc0 ? _0x138144.call(_0x1b6a16, _0x4947e5(_0x266f2b, _0x9f0b77, _0x356f38, _0x19ebc0), _0x4947e5(_0x266f2b, _0x9f0b77, _0x22961d, _0x19ebc0)) : (_0x266f2b++, _0x138144.call(_0x1b6a16, _0x4947e5(_0x266f2b, _0x9f0b77, _0x356f38, _0x19ebc0), _0x4947e5(_0x266f2b, _0x9f0b77, _0x22961d, _0x19ebc0), _0x4947e5(_0x266f2b, _0x9f0b77, _0x356f38, _0x9f0b77.notifyWith))) : (_0x1f9269 !== _0x356f38 && (_0x2d7997 = void 0x0, _0x1f0061 = [_0x1b6a16]), (_0x19ebc0 || _0x9f0b77.resolveWith)(_0x2d7997, _0x1f0061));
                    }
                  },
                  _0x3b5b8a = _0x19ebc0 ? _0x177f40 : function () {
                    try {
                      _0x177f40();
                    } catch (_0xde92e9) {
                      _0x2216fd.Deferred.exceptionHook && _0x2216fd.Deferred.exceptionHook(_0xde92e9, _0x3b5b8a.stackTrace), _0x9acab6 + 0x1 >= _0x266f2b && (_0x1f9269 !== _0x22961d && (_0x2d7997 = void 0x0, _0x1f0061 = [_0xde92e9]), _0x9f0b77.rejectWith(_0x2d7997, _0x1f0061));
                    }
                  };
                _0x9acab6 ? _0x3b5b8a() : (_0x2216fd.Deferred.getStackHook && (_0x3b5b8a.stackTrace = _0x2216fd.Deferred.getStackHook()), _0x57d1ec.setTimeout(_0x3b5b8a));
              };
            }
            var _0x266f2b = 0x0;
            return _0x2216fd.Deferred(function (_0x19b7f0) {
              _0x4c5d44[0x0][0x3].add(_0x4947e5(0x0, _0x19b7f0, _0x2216fd.isFunction(_0x4344c7) ? _0x4344c7 : _0x356f38, _0x19b7f0.notifyWith)), _0x4c5d44[0x1][0x3].add(_0x4947e5(0x0, _0x19b7f0, _0x2216fd.isFunction(_0xcb10df) ? _0xcb10df : _0x356f38)), _0x4c5d44[0x2][0x3].add(_0x4947e5(0x0, _0x19b7f0, _0x2216fd.isFunction(_0x3ae9e1) ? _0x3ae9e1 : _0x22961d));
            }).promise();
          },
          'promise': function (_0x1632c6) {
            return null != _0x1632c6 ? _0x2216fd.extend(_0x1632c6, _0x54b7a7) : _0x54b7a7;
          }
        },
        _0x3660ac = {};
      return _0x2216fd.each(_0x4c5d44, function (_0x3c2fe8, _0x364819) {
        var _0x59f9e3 = _0x364819[0x2],
          _0x102c62 = _0x364819[0x5];
        _0x54b7a7[_0x364819[0x1]] = _0x59f9e3.add, _0x102c62 && _0x59f9e3.add(function () {
          _0x18b909 = _0x102c62;
        }, _0x4c5d44[0x3 - _0x3c2fe8][0x2].disable, _0x4c5d44[0x0][0x2].lock), _0x59f9e3.add(_0x364819[0x3].fire), _0x3660ac[_0x364819[0x0]] = function () {
          return _0x3660ac[_0x364819[0x0] + 'With'](this === _0x3660ac ? void 0x0 : this, arguments), this;
        }, _0x3660ac[_0x364819[0x0] + 'With'] = _0x59f9e3.fireWith;
      }), _0x54b7a7.promise(_0x3660ac), _0x4ceb78 && _0x4ceb78.call(_0x3660ac, _0x3660ac), _0x3660ac;
    },
    'when': function (_0x1c2e9a) {
      var _0xb35fd = arguments.length,
        _0x2b013b = _0xb35fd,
        _0x19dec5 = Array(_0x2b013b),
        _0x41db77 = _0x73fba.call(arguments),
        _0x4c404e = _0x2216fd.Deferred(),
        _0x1332e6 = function (_0x18912c) {
          return function (_0x2ecd1b) {
            _0x19dec5[_0x18912c] = this, _0x41db77[_0x18912c] = 0x1 < arguments.length ? _0x73fba.call(arguments) : _0x2ecd1b, --_0xb35fd || _0x4c404e.resolveWith(_0x19dec5, _0x41db77);
          };
        };
      if (0x1 >= _0xb35fd && (_0xed8195(_0x1c2e9a, _0x4c404e.done(_0x1332e6(_0x2b013b)).resolve, _0x4c404e.reject, !_0xb35fd), 'pending' === _0x4c404e.state() || _0x2216fd.isFunction(_0x41db77[_0x2b013b] && _0x41db77[_0x2b013b].then))) return _0x4c404e.then();
      for (; _0x2b013b--;) _0xed8195(_0x41db77[_0x2b013b], _0x1332e6(_0x2b013b), _0x4c404e.reject);
      return _0x4c404e.promise();
    }
  });
  var _0x4b5a9a = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  _0x2216fd.Deferred.exceptionHook = function (_0x5952ff, _0x498a8f) {
    _0x57d1ec.console && _0x57d1ec.console.warn && _0x5952ff && _0x4b5a9a.test(_0x5952ff.name) && _0x57d1ec.console.warn("jQuery.Deferred exception: " + _0x5952ff.message, _0x5952ff.stack, _0x498a8f);
  }, _0x2216fd.readyException = function (_0xba2ba4) {
    _0x57d1ec.setTimeout(function () {
      throw _0xba2ba4;
    });
  };
  var _0x53ee83 = _0x2216fd.Deferred();
  _0x2216fd.fn.ready = function (_0x4a9f34) {
    return _0x53ee83.then(_0x4a9f34)['catch'](function (_0x32bc0a) {
      _0x2216fd.readyException(_0x32bc0a);
    }), this;
  }, _0x2216fd.extend({
    'isReady': !0x1,
    'readyWait': 0x1,
    'ready': function (_0x1b685d) {
      (!0x0 === _0x1b685d ? --_0x2216fd.readyWait : _0x2216fd.isReady) || (_0x2216fd.isReady = !0x0, !0x0 !== _0x1b685d && 0x0 < --_0x2216fd.readyWait || _0x53ee83.resolveWith(_0x338fe6, [_0x2216fd]));
    }
  }), _0x2216fd.ready.then = _0x53ee83.then, 'complete' === _0x338fe6.readyState || 'loading' !== _0x338fe6.readyState && !_0x338fe6.documentElement.doScroll ? _0x57d1ec.setTimeout(_0x2216fd.ready) : (_0x338fe6.addEventListener('DOMContentLoaded', _0x38019c), _0x57d1ec.addEventListener('load', _0x38019c));
  var _0x568d8f = function (_0x3cbe06, _0x2d3c71, _0x246ea8, _0x10f283, _0x45e540, _0x1028d1, _0x564592) {
      var _0x48cd92 = 0x0,
        _0x2a44e6 = _0x3cbe06.length,
        _0x11d3b2 = null == _0x246ea8;
      if ('object' === _0x2216fd.type(_0x246ea8)) {
        for (_0x48cd92 in _0x45e540 = !0x0, _0x246ea8) _0x568d8f(_0x3cbe06, _0x2d3c71, _0x48cd92, _0x246ea8[_0x48cd92], !0x0, _0x1028d1, _0x564592);
      } else {
        if (void 0x0 !== _0x10f283 && (_0x45e540 = !0x0, _0x2216fd.isFunction(_0x10f283) || (_0x564592 = !0x0), _0x11d3b2 && (_0x564592 ? (_0x2d3c71.call(_0x3cbe06, _0x10f283), _0x2d3c71 = null) : (_0x11d3b2 = _0x2d3c71, _0x2d3c71 = function (_0x1b427d, _0x131633, _0x3625c5) {
          return _0x11d3b2.call(_0x2216fd(_0x1b427d), _0x3625c5);
        })), _0x2d3c71)) {
          for (; _0x48cd92 < _0x2a44e6; _0x48cd92++) _0x2d3c71(_0x3cbe06[_0x48cd92], _0x246ea8, _0x564592 ? _0x10f283 : _0x10f283.call(_0x3cbe06[_0x48cd92], _0x48cd92, _0x2d3c71(_0x3cbe06[_0x48cd92], _0x246ea8)));
        }
      }
      return _0x45e540 ? _0x3cbe06 : _0x11d3b2 ? _0x2d3c71.call(_0x3cbe06) : _0x2a44e6 ? _0x2d3c71(_0x3cbe06[0x0], _0x246ea8) : _0x1028d1;
    },
    _0x948cae = function (_0xef74ff) {
      return 0x1 === _0xef74ff.nodeType || 0x9 === _0xef74ff.nodeType || !+_0xef74ff.nodeType;
    };
  _0xe9a48.uid = 0x1, _0xe9a48.prototype = {
    'cache': function (_0x21595c) {
      var _0x498f97 = _0x21595c[this.expando];
      return _0x498f97 || (_0x498f97 = {}, _0x948cae(_0x21595c) && (_0x21595c.nodeType ? _0x21595c[this.expando] = _0x498f97 : Object.defineProperty(_0x21595c, this.expando, {
        'value': _0x498f97,
        'configurable': !0x0
      }))), _0x498f97;
    },
    'set': function (_0x27424c, _0x183073, _0x147d7c) {
      var _0x55810f;
      _0x27424c = this.cache(_0x27424c);
      if ('string' == typeof _0x183073) _0x27424c[_0x2216fd.camelCase(_0x183073)] = _0x147d7c;else {
        for (_0x55810f in _0x183073) _0x27424c[_0x2216fd.camelCase(_0x55810f)] = _0x183073[_0x55810f];
      }
      return _0x27424c;
    },
    'get': function (_0x30cd81, _0x345265) {
      return void 0x0 === _0x345265 ? this.cache(_0x30cd81) : _0x30cd81[this.expando] && _0x30cd81[this.expando][_0x2216fd.camelCase(_0x345265)];
    },
    'access': function (_0x552d23, _0x325d47, _0x21c74f) {
      return void 0x0 === _0x325d47 || _0x325d47 && 'string' == typeof _0x325d47 && void 0x0 === _0x21c74f ? this.get(_0x552d23, _0x325d47) : (this.set(_0x552d23, _0x325d47, _0x21c74f), void 0x0 !== _0x21c74f ? _0x21c74f : _0x325d47);
    },
    'remove': function (_0x5d4f84, _0x301534) {
      var _0x3cff2c,
        _0x27cf97 = _0x5d4f84[this.expando];
      if (void 0x0 !== _0x27cf97) {
        if (void 0x0 !== _0x301534) {
          Array.isArray(_0x301534) ? _0x301534 = _0x301534.map(_0x2216fd.camelCase) : (_0x301534 = _0x2216fd.camelCase(_0x301534), _0x301534 = _0x301534 in _0x27cf97 ? [_0x301534] : _0x301534.match(_0x983dc8) || []);
          for (_0x3cff2c = _0x301534.length; _0x3cff2c--;) delete _0x27cf97[_0x301534[_0x3cff2c]];
        }
        (void 0x0 === _0x301534 || _0x2216fd.isEmptyObject(_0x27cf97)) && (_0x5d4f84.nodeType ? _0x5d4f84[this.expando] = void 0x0 : delete _0x5d4f84[this.expando]);
      }
    },
    'hasData': function (_0x184a61) {
      return _0x184a61 = _0x184a61[this.expando], void 0x0 !== _0x184a61 && !_0x2216fd.isEmptyObject(_0x184a61);
    }
  };
  var _0x29d194 = new _0xe9a48(),
    _0x1ebc62 = new _0xe9a48(),
    _0x1a1c86 = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    _0x1242d3 = /[A-Z]/g;
  _0x2216fd.extend({
    'hasData': function (_0x145269) {
      return _0x1ebc62.hasData(_0x145269) || _0x29d194.hasData(_0x145269);
    },
    'data': function (_0x1acae9, _0x356073, _0x5b240a) {
      return _0x1ebc62.access(_0x1acae9, _0x356073, _0x5b240a);
    },
    'removeData': function (_0x48b93d, _0x3813f9) {
      _0x1ebc62.remove(_0x48b93d, _0x3813f9);
    },
    '_data': function (_0x575f30, _0xa61605, _0x5dfd3a) {
      return _0x29d194.access(_0x575f30, _0xa61605, _0x5dfd3a);
    },
    '_removeData': function (_0x5ce4e4, _0xf99e5d) {
      _0x29d194.remove(_0x5ce4e4, _0xf99e5d);
    }
  }), _0x2216fd.fn.extend({
    'data': function (_0x313588, _0xc86925) {
      var _0x2c0d10,
        _0x534d85,
        _0x116d98,
        _0x2562c1 = this[0x0],
        _0xe3ca23 = _0x2562c1 && _0x2562c1.attributes;
      if (void 0x0 === _0x313588) {
        if (this.length && (_0x116d98 = _0x1ebc62.get(_0x2562c1), 0x1 === _0x2562c1.nodeType && !_0x29d194.get(_0x2562c1, 'hasDataAttrs'))) {
          for (_0x2c0d10 = _0xe3ca23.length; _0x2c0d10--;) _0xe3ca23[_0x2c0d10] && (_0x534d85 = _0xe3ca23[_0x2c0d10].name, 0x0 === _0x534d85.indexOf('data-') && (_0x534d85 = _0x2216fd.camelCase(_0x534d85.slice(0x5)), _0x4d8a4d(_0x2562c1, _0x534d85, _0x116d98[_0x534d85])));
          _0x29d194.set(_0x2562c1, 'hasDataAttrs', !0x0);
        }
        return _0x116d98;
      }
      return 'object' == typeof _0x313588 ? this.each(function () {
        _0x1ebc62.set(this, _0x313588);
      }) : _0x568d8f(this, function (_0x406716) {
        var _0x28b32c;
        if (_0x2562c1 && void 0x0 === _0x406716) {
          if ((_0x28b32c = _0x1ebc62.get(_0x2562c1, _0x313588), void 0x0 !== _0x28b32c) || (_0x28b32c = _0x4d8a4d(_0x2562c1, _0x313588), void 0x0 !== _0x28b32c)) return _0x28b32c;
        } else this.each(function () {
          _0x1ebc62.set(this, _0x313588, _0x406716);
        });
      }, null, _0xc86925, 0x1 < arguments.length, null, !0x0);
    },
    'removeData': function (_0x292a93) {
      return this.each(function () {
        _0x1ebc62.remove(this, _0x292a93);
      });
    }
  }), _0x2216fd.extend({
    'queue': function (_0x51ef8b, _0x3ae56b, _0x4ddf0c) {
      var _0x4490e6;
      if (_0x51ef8b) return _0x3ae56b = (_0x3ae56b || 'fx') + 'queue', _0x4490e6 = _0x29d194.get(_0x51ef8b, _0x3ae56b), _0x4ddf0c && (!_0x4490e6 || Array.isArray(_0x4ddf0c) ? _0x4490e6 = _0x29d194.access(_0x51ef8b, _0x3ae56b, _0x2216fd.makeArray(_0x4ddf0c)) : _0x4490e6.push(_0x4ddf0c)), _0x4490e6 || [];
    },
    'dequeue': function (_0x223b9a, _0xbb269d) {
      _0xbb269d = _0xbb269d || 'fx';
      var _0x16a9c2 = _0x2216fd.queue(_0x223b9a, _0xbb269d),
        _0x57a33e = _0x16a9c2.length,
        _0x2a8a8d = _0x16a9c2.shift(),
        _0x4c1c14 = _0x2216fd._queueHooks(_0x223b9a, _0xbb269d),
        _0x5c9a72 = function () {
          _0x2216fd.dequeue(_0x223b9a, _0xbb269d);
        };
      'inprogress' === _0x2a8a8d && (_0x2a8a8d = _0x16a9c2.shift(), _0x57a33e--), _0x2a8a8d && ('fx' === _0xbb269d && _0x16a9c2.unshift('inprogress'), delete _0x4c1c14.stop, _0x2a8a8d.call(_0x223b9a, _0x5c9a72, _0x4c1c14)), !_0x57a33e && _0x4c1c14 && _0x4c1c14.empty.fire();
    },
    '_queueHooks': function (_0x23ad9a, _0x356653) {
      var _0x156d37 = _0x356653 + 'queueHooks';
      return _0x29d194.get(_0x23ad9a, _0x156d37) || _0x29d194.access(_0x23ad9a, _0x156d37, {
        'empty': _0x2216fd.Callbacks("once memory").add(function () {
          _0x29d194.remove(_0x23ad9a, [_0x356653 + 'queue', _0x156d37]);
        })
      });
    }
  }), _0x2216fd.fn.extend({
    'queue': function (_0x389073, _0x1338be) {
      var _0x459694 = 0x2;
      return 'string' != typeof _0x389073 && (_0x1338be = _0x389073, _0x389073 = 'fx', _0x459694--), arguments.length < _0x459694 ? _0x2216fd.queue(this[0x0], _0x389073) : void 0x0 === _0x1338be ? this : this.each(function () {
        var _0x1868d2 = _0x2216fd.queue(this, _0x389073, _0x1338be);
        _0x2216fd._queueHooks(this, _0x389073), 'fx' === _0x389073 && 'inprogress' !== _0x1868d2[0x0] && _0x2216fd.dequeue(this, _0x389073);
      });
    },
    'dequeue': function (_0x4cf3c4) {
      return this.each(function () {
        _0x2216fd.dequeue(this, _0x4cf3c4);
      });
    },
    'clearQueue': function (_0x5884f3) {
      return this.queue(_0x5884f3 || 'fx', []);
    },
    'promise': function (_0x50b683, _0x2ab5a1) {
      var _0x5a611a,
        _0x952fb = 0x1,
        _0x42daa6 = _0x2216fd.Deferred(),
        _0x3303c5 = this,
        _0x2d597f = this.length,
        _0x2d6b5d = function () {
          --_0x952fb || _0x42daa6.resolveWith(_0x3303c5, [_0x3303c5]);
        };
      'string' != typeof _0x50b683 && (_0x2ab5a1 = _0x50b683, _0x50b683 = void 0x0);
      for (_0x50b683 = _0x50b683 || 'fx'; _0x2d597f--;) (_0x5a611a = _0x29d194.get(_0x3303c5[_0x2d597f], _0x50b683 + 'queueHooks')) && _0x5a611a.empty && (_0x952fb++, _0x5a611a.empty.add(_0x2d6b5d));
      return _0x2d6b5d(), _0x42daa6.promise(_0x2ab5a1);
    }
  });
  var _0xec82a1 = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    _0x552c69 = RegExp('^(?:([+-])=|)(' + _0xec82a1 + ')([a-z%]*)$', 'i'),
    _0x476acf = ['Top', 'Right', 'Bottom', 'Left'],
    _0x389871 = function (_0x1f697b, _0x3d92a7) {
      return _0x1f697b = _0x3d92a7 || _0x1f697b, 'none' === _0x1f697b.style.display || '' === _0x1f697b.style.display && _0x2216fd.contains(_0x1f697b.ownerDocument, _0x1f697b) && 'none' === _0x2216fd.css(_0x1f697b, 'display');
    },
    _0x377b43 = function (_0x448a4a, _0x198fee, _0xd7cdd7, _0x363ad8) {
      var _0x4c636e,
        _0x20588a = {};
      for (_0x4c636e in _0x198fee) _0x20588a[_0x4c636e] = _0x448a4a.style[_0x4c636e], _0x448a4a.style[_0x4c636e] = _0x198fee[_0x4c636e];
      _0xd7cdd7 = _0xd7cdd7.apply(_0x448a4a, _0x363ad8 || []);
      for (_0x4c636e in _0x198fee) _0x448a4a.style[_0x4c636e] = _0x20588a[_0x4c636e];
      return _0xd7cdd7;
    },
    _0x176335 = {};
  _0x2216fd.fn.extend({
    'show': function () {
      return _0x4d4613(this, !0x0);
    },
    'hide': function () {
      return _0x4d4613(this);
    },
    'toggle': function (_0x501dd5) {
      return 'boolean' == typeof _0x501dd5 ? _0x501dd5 ? this.show() : this.hide() : this.each(function () {
        _0x389871(this) ? _0x2216fd(this).show() : _0x2216fd(this).hide();
      });
    }
  });
  var _0x131b1f = /^(?:checkbox|radio)$/i,
    _0x256cf0 = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    _0x1b7485 = /^$|\/(?:java|ecma)script/i,
    _0x337675 = {
      'option': [0x1, "<select multiple='multiple'>", '</select>'],
      'thead': [0x1, '<table>', '</table>'],
      'col': [0x2, '<table><colgroup>', '</colgroup></table>'],
      'tr': [0x2, '<table><tbody>', '</tbody></table>'],
      'td': [0x3, '<table><tbody><tr>', '</tr></tbody></table>'],
      '_default': [0x0, '', '']
    };
  _0x337675.optgroup = _0x337675.option, _0x337675.tbody = _0x337675.tfoot = _0x337675.colgroup = _0x337675.caption = _0x337675.thead, _0x337675.th = _0x337675.td;
  var _0x3ae240 = /<|&#?\w+;/,
    _0x1b42ac = _0x338fe6.createDocumentFragment().appendChild(_0x338fe6.createElement('div')),
    _0x5a1837 = _0x338fe6.createElement('input');
  _0x5a1837.setAttribute('type', 'radio'), _0x5a1837.setAttribute('checked', 'checked'), _0x5a1837.setAttribute('name', 't'), _0x1b42ac.appendChild(_0x5a1837), _0x1f2a2c.checkClone = _0x1b42ac.cloneNode(!0x0).cloneNode(!0x0).lastChild.checked, _0x1b42ac.innerHTML = '<textarea>x</textarea>', _0x1f2a2c.noCloneChecked = !!_0x1b42ac.cloneNode(!0x0).lastChild.defaultValue, !0x0;
  var _0xd128d4 = _0x338fe6.documentElement,
    _0xbcfc47 = /^key/,
    _0xfc142c = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    _0x306bfa = /^([^.]*)(?:\.(.+)|)/;
  _0x2216fd.event = {
    'global': {},
    'add': function (_0x4f6f6b, _0x29d5e0, _0x566c9e, _0x2152d9, _0x5db861) {
      var _0x318602, _0x33a10f, _0x493a49, _0x423421, _0x27e517, _0x3cb34e, _0x3fe538, _0x45cefc, _0x5efc89, _0x3a379b;
      if (_0x27e517 = _0x29d194.get(_0x4f6f6b)) {
        _0x566c9e.handler && (_0x318602 = _0x566c9e, _0x566c9e = _0x318602.handler, _0x5db861 = _0x318602.selector), _0x5db861 && _0x2216fd.find.matchesSelector(_0xd128d4, _0x5db861), _0x566c9e.guid || (_0x566c9e.guid = _0x2216fd.guid++), (_0x423421 = _0x27e517.events) || (_0x423421 = _0x27e517.events = {}), (_0x33a10f = _0x27e517.handle) || (_0x33a10f = _0x27e517.handle = function (_0x259189) {
          return 'undefined' != typeof _0x2216fd && _0x2216fd.event.triggered !== _0x259189.type ? _0x2216fd.event.dispatch.apply(_0x4f6f6b, arguments) : void 0x0;
        }), _0x29d5e0 = (_0x29d5e0 || '').match(_0x983dc8) || [''];
        for (_0x27e517 = _0x29d5e0.length; _0x27e517--;) _0x493a49 = _0x306bfa.exec(_0x29d5e0[_0x27e517]) || [], _0x5efc89 = _0x3a379b = _0x493a49[0x1], _0x493a49 = (_0x493a49[0x2] || '').split('.').sort(), _0x5efc89 && (_0x3fe538 = _0x2216fd.event.special[_0x5efc89] || {}, _0x5efc89 = (_0x5db861 ? _0x3fe538.delegateType : _0x3fe538.bindType) || _0x5efc89, _0x3fe538 = _0x2216fd.event.special[_0x5efc89] || {}, _0x3cb34e = _0x2216fd.extend({
          'type': _0x5efc89,
          'origType': _0x3a379b,
          'data': _0x2152d9,
          'handler': _0x566c9e,
          'guid': _0x566c9e.guid,
          'selector': _0x5db861,
          'needsContext': _0x5db861 && _0x2216fd.expr.match.needsContext.test(_0x5db861),
          'namespace': _0x493a49.join('.')
        }, _0x318602), (_0x45cefc = _0x423421[_0x5efc89]) || (_0x45cefc = _0x423421[_0x5efc89] = [], _0x45cefc.delegateCount = 0x0, _0x3fe538.setup && !0x1 !== _0x3fe538.setup.call(_0x4f6f6b, _0x2152d9, _0x493a49, _0x33a10f) || _0x4f6f6b.addEventListener && _0x4f6f6b.addEventListener(_0x5efc89, _0x33a10f)), _0x3fe538.add && (_0x3fe538.add.call(_0x4f6f6b, _0x3cb34e), _0x3cb34e.handler.guid || (_0x3cb34e.handler.guid = _0x566c9e.guid)), _0x5db861 ? _0x45cefc.splice(_0x45cefc.delegateCount++, 0x0, _0x3cb34e) : _0x45cefc.push(_0x3cb34e), _0x2216fd.event.global[_0x5efc89] = !0x0);
      }
    },
    'remove': function (_0x235c21, _0x49cb43, _0x3c9043, _0x47be6d, _0x27cb8a) {
      var _0x54d535,
        _0x1de2da,
        _0x507ef8,
        _0x5e2850,
        _0x55a68e,
        _0x21d077,
        _0x4c5a29,
        _0x54ddcb,
        _0x44d3c8,
        _0x5d3098,
        _0x36e7d1,
        _0x46227f = _0x29d194.hasData(_0x235c21) && _0x29d194.get(_0x235c21);
      if (_0x46227f && (_0x5e2850 = _0x46227f.events)) {
        _0x49cb43 = (_0x49cb43 || '').match(_0x983dc8) || [''];
        for (_0x55a68e = _0x49cb43.length; _0x55a68e--;) if (_0x507ef8 = _0x306bfa.exec(_0x49cb43[_0x55a68e]) || [], _0x44d3c8 = _0x36e7d1 = _0x507ef8[0x1], _0x5d3098 = (_0x507ef8[0x2] || '').split('.').sort(), _0x44d3c8) {
          _0x4c5a29 = _0x2216fd.event.special[_0x44d3c8] || {}, _0x44d3c8 = (_0x47be6d ? _0x4c5a29.delegateType : _0x4c5a29.bindType) || _0x44d3c8, _0x54ddcb = _0x5e2850[_0x44d3c8] || [], _0x507ef8 = _0x507ef8[0x2] && RegExp("(^|\\.)" + _0x5d3098.join("\\.(?:.*\\.|)") + "(\\.|$)");
          for (_0x1de2da = _0x54d535 = _0x54ddcb.length; _0x54d535--;) _0x21d077 = _0x54ddcb[_0x54d535], !_0x27cb8a && _0x36e7d1 !== _0x21d077.origType || _0x3c9043 && _0x3c9043.guid !== _0x21d077.guid || _0x507ef8 && !_0x507ef8.test(_0x21d077.namespace) || _0x47be6d && _0x47be6d !== _0x21d077.selector && ('**' !== _0x47be6d || !_0x21d077.selector) || (_0x54ddcb.splice(_0x54d535, 0x1), _0x21d077.selector && _0x54ddcb.delegateCount--, _0x4c5a29.remove && _0x4c5a29.remove.call(_0x235c21, _0x21d077));
          _0x1de2da && !_0x54ddcb.length && (_0x4c5a29.teardown && !0x1 !== _0x4c5a29.teardown.call(_0x235c21, _0x5d3098, _0x46227f.handle) || _0x2216fd.removeEvent(_0x235c21, _0x44d3c8, _0x46227f.handle), delete _0x5e2850[_0x44d3c8]);
        } else {
          for (_0x44d3c8 in _0x5e2850) _0x2216fd.event.remove(_0x235c21, _0x44d3c8 + _0x49cb43[_0x55a68e], _0x3c9043, _0x47be6d, !0x0);
        }
        _0x2216fd.isEmptyObject(_0x5e2850) && _0x29d194.remove(_0x235c21, "handle events");
      }
    },
    'dispatch': function (_0x135e47) {
      var _0x513b82 = _0x2216fd.event.fix(_0x135e47),
        _0x2b9d2c,
        _0x143ca6,
        _0x40a51d,
        _0x13c90e,
        _0x20ef73,
        _0x3db047,
        _0x951b3 = Array(arguments.length);
      _0x143ca6 = (_0x29d194.get(this, 'events') || {})[_0x513b82.type] || [];
      var _0x2e8c7b = _0x2216fd.event.special[_0x513b82.type] || {};
      _0x951b3[0x0] = _0x513b82;
      for (_0x2b9d2c = 0x1; _0x2b9d2c < arguments.length; _0x2b9d2c++) _0x951b3[_0x2b9d2c] = arguments[_0x2b9d2c];
      if (_0x513b82.delegateTarget = this, !_0x2e8c7b.preDispatch || !0x1 !== _0x2e8c7b.preDispatch.call(this, _0x513b82)) {
        _0x3db047 = _0x2216fd.event.handlers.call(this, _0x513b82, _0x143ca6);
        for (_0x2b9d2c = 0x0; (_0x13c90e = _0x3db047[_0x2b9d2c++]) && !_0x513b82.isPropagationStopped();) {
          _0x513b82.currentTarget = _0x13c90e.elem;
          for (_0x143ca6 = 0x0; (_0x20ef73 = _0x13c90e.handlers[_0x143ca6++]) && !_0x513b82.isImmediatePropagationStopped();) _0x513b82.rnamespace && !_0x513b82.rnamespace.test(_0x20ef73.namespace) || (_0x513b82.handleObj = _0x20ef73, _0x513b82.data = _0x20ef73.data, _0x40a51d = ((_0x2216fd.event.special[_0x20ef73.origType] || {}).handle || _0x20ef73.handler).apply(_0x13c90e.elem, _0x951b3), void 0x0 !== _0x40a51d && !0x1 === (_0x513b82.result = _0x40a51d) && (_0x513b82.preventDefault(), _0x513b82.stopPropagation()));
        }
        return _0x2e8c7b.postDispatch && _0x2e8c7b.postDispatch.call(this, _0x513b82), _0x513b82.result;
      }
    },
    'handlers': function (_0x164b49, _0x1970c3) {
      var _0x260599,
        _0x3c0832,
        _0x45d35e,
        _0x519f2c,
        _0xe57147,
        _0x5c6af0 = [],
        _0x44801b = _0x1970c3.delegateCount,
        _0xc1fcf7 = _0x164b49.target;
      if (_0x44801b && _0xc1fcf7.nodeType && !('click' === _0x164b49.type && 0x1 <= _0x164b49.button)) {
        for (; _0xc1fcf7 !== this; _0xc1fcf7 = _0xc1fcf7.parentNode || this) if (0x1 === _0xc1fcf7.nodeType && ('click' !== _0x164b49.type || !0x0 !== _0xc1fcf7.disabled)) {
          _0x519f2c = [], _0xe57147 = {};
          for (_0x260599 = 0x0; _0x260599 < _0x44801b; _0x260599++) _0x3c0832 = _0x1970c3[_0x260599], _0x45d35e = _0x3c0832.selector + " ", void 0x0 === _0xe57147[_0x45d35e] && (_0xe57147[_0x45d35e] = _0x3c0832.needsContext ? -0x1 < _0x2216fd(_0x45d35e, this).index(_0xc1fcf7) : _0x2216fd.find(_0x45d35e, this, null, [_0xc1fcf7]).length), _0xe57147[_0x45d35e] && _0x519f2c.push(_0x3c0832);
          _0x519f2c.length && _0x5c6af0.push({
            'elem': _0xc1fcf7,
            'handlers': _0x519f2c
          });
        }
      }
      return _0xc1fcf7 = this, _0x44801b < _0x1970c3.length && _0x5c6af0.push({
        'elem': _0xc1fcf7,
        'handlers': _0x1970c3.slice(_0x44801b)
      }), _0x5c6af0;
    },
    'addProp': function (_0x438af8, _0x1eb2f3) {
      Object.defineProperty(_0x2216fd.Event.prototype, _0x438af8, {
        'enumerable': !0x0,
        'configurable': !0x0,
        'get': _0x2216fd.isFunction(_0x1eb2f3) ? function () {
          if (this.originalEvent) return _0x1eb2f3(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[_0x438af8];
        },
        'set': function (_0x5d4ac5) {
          Object.defineProperty(this, _0x438af8, {
            'enumerable': !0x0,
            'configurable': !0x0,
            'writable': !0x0,
            'value': _0x5d4ac5
          });
        }
      });
    },
    'fix': function (_0x44227e) {
      return _0x44227e[_0x2216fd.expando] ? _0x44227e : new _0x2216fd.Event(_0x44227e);
    },
    'special': {
      'load': {
        'noBubble': !0x0
      },
      'focus': {
        'trigger': function () {
          if (this !== _0x2ae067() && this.focus) return this.focus(), !0x1;
        },
        'delegateType': 'focusin'
      },
      'blur': {
        'trigger': function () {
          if (this === _0x2ae067() && this.blur) return this.blur(), !0x1;
        },
        'delegateType': 'focusout'
      },
      'click': {
        'trigger': function () {
          if ('checkbox' === this.type && this.click && _0x53aeed(this, 'input')) return this.click(), !0x1;
        },
        '_default': function (_0x5e00ee) {
          return _0x53aeed(_0x5e00ee.target, 'a');
        }
      },
      'beforeunload': {
        'postDispatch': function (_0x369ce2) {
          void 0x0 !== _0x369ce2.result && _0x369ce2.originalEvent && (_0x369ce2.originalEvent.returnValue = _0x369ce2.result);
        }
      }
    }
  }, _0x2216fd.removeEvent = function (_0x5f2863, _0x2e19c9, _0x33d318) {
    _0x5f2863.removeEventListener && _0x5f2863.removeEventListener(_0x2e19c9, _0x33d318);
  }, _0x2216fd.Event = function (_0xb3fd1f, _0x36fa53) {
    return this instanceof _0x2216fd.Event ? (_0xb3fd1f && _0xb3fd1f.type ? (this.originalEvent = _0xb3fd1f, this.type = _0xb3fd1f.type, this.isDefaultPrevented = _0xb3fd1f.defaultPrevented || void 0x0 === _0xb3fd1f.defaultPrevented && !0x1 === _0xb3fd1f.returnValue ? _0x4e6b19 : _0x5c5b27, this.target = _0xb3fd1f.target && 0x3 === _0xb3fd1f.target.nodeType ? _0xb3fd1f.target.parentNode : _0xb3fd1f.target, this.currentTarget = _0xb3fd1f.currentTarget, this.relatedTarget = _0xb3fd1f.relatedTarget) : this.type = _0xb3fd1f, _0x36fa53 && _0x2216fd.extend(this, _0x36fa53), this.timeStamp = _0xb3fd1f && _0xb3fd1f.timeStamp || _0x2216fd.now(), void (this[_0x2216fd.expando] = !0x0)) : new _0x2216fd.Event(_0xb3fd1f, _0x36fa53);
  }, _0x2216fd.Event.prototype = {
    'constructor': _0x2216fd.Event,
    'isDefaultPrevented': _0x5c5b27,
    'isPropagationStopped': _0x5c5b27,
    'isImmediatePropagationStopped': _0x5c5b27,
    'isSimulated': !0x1,
    'preventDefault': function () {
      var _0x5e64a5 = this.originalEvent;
      this.isDefaultPrevented = _0x4e6b19, _0x5e64a5 && !this.isSimulated && _0x5e64a5.preventDefault();
    },
    'stopPropagation': function () {
      var _0xfb5a7b = this.originalEvent;
      this.isPropagationStopped = _0x4e6b19, _0xfb5a7b && !this.isSimulated && _0xfb5a7b.stopPropagation();
    },
    'stopImmediatePropagation': function () {
      var _0x179ef3 = this.originalEvent;
      this.isImmediatePropagationStopped = _0x4e6b19, _0x179ef3 && !this.isSimulated && _0x179ef3.stopImmediatePropagation(), this.stopPropagation();
    }
  }, _0x2216fd.each({
    'altKey': !0x0,
    'bubbles': !0x0,
    'cancelable': !0x0,
    'changedTouches': !0x0,
    'ctrlKey': !0x0,
    'detail': !0x0,
    'eventPhase': !0x0,
    'metaKey': !0x0,
    'pageX': !0x0,
    'pageY': !0x0,
    'shiftKey': !0x0,
    'view': !0x0,
    'char': !0x0,
    'charCode': !0x0,
    'key': !0x0,
    'keyCode': !0x0,
    'button': !0x0,
    'buttons': !0x0,
    'clientX': !0x0,
    'clientY': !0x0,
    'offsetX': !0x0,
    'offsetY': !0x0,
    'pointerId': !0x0,
    'pointerType': !0x0,
    'screenX': !0x0,
    'screenY': !0x0,
    'targetTouches': !0x0,
    'toElement': !0x0,
    'touches': !0x0,
    'which': function (_0x269ccc) {
      var _0x9eb24b = _0x269ccc.button;
      return null == _0x269ccc.which && _0xbcfc47.test(_0x269ccc.type) ? null != _0x269ccc.charCode ? _0x269ccc.charCode : _0x269ccc.keyCode : !_0x269ccc.which && void 0x0 !== _0x9eb24b && _0xfc142c.test(_0x269ccc.type) ? 0x1 & _0x9eb24b ? 0x1 : 0x2 & _0x9eb24b ? 0x3 : 0x4 & _0x9eb24b ? 0x2 : 0x0 : _0x269ccc.which;
    }
  }, _0x2216fd.event.addProp), _0x2216fd.each({
    'mouseenter': 'mouseover',
    'mouseleave': 'mouseout',
    'pointerenter': 'pointerover',
    'pointerleave': 'pointerout'
  }, function (_0x1baf24, _0x4589d9) {
    _0x2216fd.event.special[_0x1baf24] = {
      'delegateType': _0x4589d9,
      'bindType': _0x4589d9,
      'handle': function (_0x59551c) {
        var _0x370e61,
          _0x1e3ff1 = _0x59551c.relatedTarget,
          _0x21007c = _0x59551c.handleObj;
        return _0x1e3ff1 && (_0x1e3ff1 === this || _0x2216fd.contains(this, _0x1e3ff1)) || (_0x59551c.type = _0x21007c.origType, _0x370e61 = _0x21007c.handler.apply(this, arguments), _0x59551c.type = _0x4589d9), _0x370e61;
      }
    };
  }), _0x2216fd.fn.extend({
    'on': function (_0xdd07b3, _0x384a9e, _0x24b264, _0x1706e0) {
      return _0x513e08(this, _0xdd07b3, _0x384a9e, _0x24b264, _0x1706e0);
    },
    'one': function (_0x5a4a8e, _0x428b8c, _0x2a79ea, _0xca03e5) {
      return _0x513e08(this, _0x5a4a8e, _0x428b8c, _0x2a79ea, _0xca03e5, 0x1);
    },
    'off': function (_0x1cab81, _0x1bbec4, _0x444806) {
      var _0xa72a67, _0x317cda;
      if (_0x1cab81 && _0x1cab81.preventDefault && _0x1cab81.handleObj) return _0xa72a67 = _0x1cab81.handleObj, _0x2216fd(_0x1cab81.delegateTarget).off(_0xa72a67.namespace ? _0xa72a67.origType + '.' + _0xa72a67.namespace : _0xa72a67.origType, _0xa72a67.selector, _0xa72a67.handler), this;
      if ('object' == typeof _0x1cab81) {
        for (_0x317cda in _0x1cab81) this.off(_0x317cda, _0x1bbec4, _0x1cab81[_0x317cda]);
        return this;
      }
      return !0x1 !== _0x1bbec4 && 'function' != typeof _0x1bbec4 || (_0x444806 = _0x1bbec4, _0x1bbec4 = void 0x0), !0x1 === _0x444806 && (_0x444806 = _0x5c5b27), this.each(function () {
        _0x2216fd.event.remove(this, _0x1cab81, _0x444806, _0x1bbec4);
      });
    }
  });
  var _0x1dc2b2 = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    _0x84efc5 = /<script|<style|<link/i,
    _0x484c65 = /checked\s*(?:[^=]|=\s*.checked.)/i,
    _0x5a75be = /^true\/(.*)/,
    _0x46f448 = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  _0x2216fd.extend({
    'htmlPrefilter': function (_0x859c16) {
      return _0x859c16.replace(_0x1dc2b2, '<$1></$2>');
    },
    'clone': function (_0x440b09, _0x4a3e54, _0x30f4eb) {
      var _0x551349,
        _0x3f744b,
        _0x5bfd8c,
        _0x22fab2,
        _0x851d65 = _0x440b09.cloneNode(!0x0),
        _0x5b6f37 = _0x2216fd.contains(_0x440b09.ownerDocument, _0x440b09);
      if (!_0x1f2a2c.noCloneChecked && !(0x1 !== _0x440b09.nodeType && 0xb !== _0x440b09.nodeType || _0x2216fd.isXMLDoc(_0x440b09))) {
        _0x22fab2 = _0x3677cc(_0x851d65), _0x5bfd8c = _0x3677cc(_0x440b09), _0x551349 = 0x0;
        for (_0x3f744b = _0x5bfd8c.length; _0x551349 < _0x3f744b; _0x551349++) {
          var _0x55bde8 = _0x5bfd8c[_0x551349],
            _0xe9c808 = _0x22fab2[_0x551349],
            _0x416159 = _0xe9c808.nodeName.toLowerCase();
          'input' === _0x416159 && _0x131b1f.test(_0x55bde8.type) ? _0xe9c808.checked = _0x55bde8.checked : 'input' !== _0x416159 && 'textarea' !== _0x416159 || (_0xe9c808.defaultValue = _0x55bde8.defaultValue);
        }
      }
      if (_0x4a3e54) {
        if (_0x30f4eb) {
          _0x5bfd8c = _0x5bfd8c || _0x3677cc(_0x440b09), _0x22fab2 = _0x22fab2 || _0x3677cc(_0x851d65), _0x551349 = 0x0;
          for (_0x3f744b = _0x5bfd8c.length; _0x551349 < _0x3f744b; _0x551349++) _0x481ad9(_0x5bfd8c[_0x551349], _0x22fab2[_0x551349]);
        } else _0x481ad9(_0x440b09, _0x851d65);
      }
      return _0x22fab2 = _0x3677cc(_0x851d65, 'script'), 0x0 < _0x22fab2.length && _0x47c0e3(_0x22fab2, !_0x5b6f37 && _0x3677cc(_0x440b09, 'script')), _0x851d65;
    },
    'cleanData': function (_0x4f402d) {
      for (var _0x1359b2, _0x41cd00, _0x5daee1, _0x54f861 = _0x2216fd.event.special, _0x247085 = 0x0; void 0x0 !== (_0x41cd00 = _0x4f402d[_0x247085]); _0x247085++) if (_0x948cae(_0x41cd00)) {
        if (_0x1359b2 = _0x41cd00[_0x29d194.expando]) {
          if (_0x1359b2.events) {
            for (_0x5daee1 in _0x1359b2.events) _0x54f861[_0x5daee1] ? _0x2216fd.event.remove(_0x41cd00, _0x5daee1) : _0x2216fd.removeEvent(_0x41cd00, _0x5daee1, _0x1359b2.handle);
          }
          _0x41cd00[_0x29d194.expando] = void 0x0;
        }
        _0x41cd00[_0x1ebc62.expando] && (_0x41cd00[_0x1ebc62.expando] = void 0x0);
      }
    }
  }), _0x2216fd.fn.extend({
    'detach': function (_0x5b6ce9) {
      return _0x46102c(this, _0x5b6ce9, !0x0);
    },
    'remove': function (_0x4d998d) {
      return _0x46102c(this, _0x4d998d);
    },
    'text': function (_0x1f82b2) {
      return _0x568d8f(this, function (_0x492ddd) {
        return void 0x0 === _0x492ddd ? _0x2216fd.text(this) : this.empty().each(function () {
          0x1 !== this.nodeType && 0xb !== this.nodeType && 0x9 !== this.nodeType || (this.textContent = _0x492ddd);
        });
      }, null, _0x1f82b2, arguments.length);
    },
    'append': function () {
      return _0x5c1070(this, arguments, function (_0x38a60a) {
        (0x1 === this.nodeType || 0xb === this.nodeType || 0x9 === this.nodeType) && _0x185f5a(this, _0x38a60a).appendChild(_0x38a60a);
      });
    },
    'prepend': function () {
      return _0x5c1070(this, arguments, function (_0x1e92f1) {
        if (0x1 === this.nodeType || 0xb === this.nodeType || 0x9 === this.nodeType) {
          var _0x4ea4d4 = _0x185f5a(this, _0x1e92f1);
          _0x4ea4d4.insertBefore(_0x1e92f1, _0x4ea4d4.firstChild);
        }
      });
    },
    'before': function () {
      return _0x5c1070(this, arguments, function (_0x47485d) {
        this.parentNode && this.parentNode.insertBefore(_0x47485d, this);
      });
    },
    'after': function () {
      return _0x5c1070(this, arguments, function (_0x492e77) {
        this.parentNode && this.parentNode.insertBefore(_0x492e77, this.nextSibling);
      });
    },
    'empty': function () {
      for (var _0x4bfa90, _0x1ab35f = 0x0; null != (_0x4bfa90 = this[_0x1ab35f]); _0x1ab35f++) 0x1 === _0x4bfa90.nodeType && (_0x2216fd.cleanData(_0x3677cc(_0x4bfa90, !0x1)), _0x4bfa90.textContent = '');
      return this;
    },
    'clone': function (_0x516065, _0x2b4fd6) {
      return _0x516065 = null != _0x516065 && _0x516065, _0x2b4fd6 = null == _0x2b4fd6 ? _0x516065 : _0x2b4fd6, this.map(function () {
        return _0x2216fd.clone(this, _0x516065, _0x2b4fd6);
      });
    },
    'html': function (_0x28749e) {
      return _0x568d8f(this, function (_0x142b98) {
        var _0x2585cd = this[0x0] || {},
          _0x547efa = 0x0,
          _0x2d8052 = this.length;
        if (void 0x0 === _0x142b98 && 0x1 === _0x2585cd.nodeType) return _0x2585cd.innerHTML;
        if ('string' == typeof _0x142b98 && !_0x84efc5.test(_0x142b98) && !_0x337675[(_0x256cf0.exec(_0x142b98) || ['', ''])[0x1].toLowerCase()]) {
          _0x142b98 = _0x2216fd.htmlPrefilter(_0x142b98);
          try {
            for (; _0x547efa < _0x2d8052; _0x547efa++) _0x2585cd = this[_0x547efa] || {}, 0x1 === _0x2585cd.nodeType && (_0x2216fd.cleanData(_0x3677cc(_0x2585cd, !0x1)), _0x2585cd.innerHTML = _0x142b98);
            _0x2585cd = 0x0;
          } catch (_0x2cabca) {}
        }
        _0x2585cd && this.empty().append(_0x142b98);
      }, null, _0x28749e, arguments.length);
    },
    'replaceWith': function () {
      var _0x26587f = [];
      return _0x5c1070(this, arguments, function (_0x3f4868) {
        var _0x434b28 = this.parentNode;
        0x0 > _0x2216fd.inArray(this, _0x26587f) && (_0x2216fd.cleanData(_0x3677cc(this)), _0x434b28 && _0x434b28.replaceChild(_0x3f4868, this));
      }, _0x26587f);
    }
  }), _0x2216fd.each({
    'appendTo': 'append',
    'prependTo': 'prepend',
    'insertBefore': 'before',
    'insertAfter': 'after',
    'replaceAll': 'replaceWith'
  }, function (_0x14b838, _0x12feed) {
    _0x2216fd.fn[_0x14b838] = function (_0x32ecc0) {
      for (var _0x1675cb = [], _0x347415 = _0x2216fd(_0x32ecc0), _0xab1b1 = _0x347415.length - 0x1, _0x215500 = 0x0; _0x215500 <= _0xab1b1; _0x215500++) _0x32ecc0 = _0x215500 === _0xab1b1 ? this : this.clone(!0x0), _0x2216fd(_0x347415[_0x215500])[_0x12feed](_0x32ecc0), _0x250efd.apply(_0x1675cb, _0x32ecc0.get());
      return this.pushStack(_0x1675cb);
    };
  });
  var _0xd330c4 = /^margin/,
    _0x2d3609 = RegExp('^(' + _0xec82a1 + ')(?!px)[a-z%]+$', 'i'),
    _0x3a14be = function (_0x27284b) {
      var _0x279ce0 = _0x27284b.ownerDocument.defaultView;
      return _0x279ce0 && _0x279ce0.opener || (_0x279ce0 = _0x57d1ec), _0x279ce0.getComputedStyle(_0x27284b);
    },
    _0x23e12e = function () {
      if (_0x20be3b) {
        _0x20be3b.style.cssText = 'box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%', _0x20be3b.innerHTML = '', _0xd128d4.appendChild(_0x2565a3);
        var _0x343a34 = _0x57d1ec.getComputedStyle(_0x20be3b);
        _0x118edc = '1%' !== _0x343a34.top, _0x5451ba = '2px' === _0x343a34.marginLeft, _0x4e6756 = '4px' === _0x343a34.width, _0x20be3b.style.marginRight = '50%', _0xbc99af = '4px' === _0x343a34.marginRight, _0xd128d4.removeChild(_0x2565a3), _0x20be3b = null;
      }
    },
    _0x118edc,
    _0x4e6756,
    _0xbc99af,
    _0x5451ba,
    _0x2565a3 = _0x338fe6.createElement('div'),
    _0x20be3b = _0x338fe6.createElement('div');
  _0x20be3b.style && (_0x20be3b.style.backgroundClip = 'content-box', _0x20be3b.cloneNode(!0x0).style.backgroundClip = '', _0x1f2a2c.clearCloneStyle = 'content-box' === _0x20be3b.style.backgroundClip, _0x2565a3.style.cssText = 'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute', _0x2565a3.appendChild(_0x20be3b), _0x2216fd.extend(_0x1f2a2c, {
    'pixelPosition': function () {
      return _0x23e12e(), _0x118edc;
    },
    'boxSizingReliable': function () {
      return _0x23e12e(), _0x4e6756;
    },
    'pixelMarginRight': function () {
      return _0x23e12e(), _0xbc99af;
    },
    'reliableMarginLeft': function () {
      return _0x23e12e(), _0x5451ba;
    }
  })), !0x0;
  var _0x70299e = /^(none|table(?!-c[ea]).+)/,
    _0x3c7116 = /^--/,
    _0x14792f = {
      'position': 'absolute',
      'visibility': 'hidden',
      'display': 'block'
    },
    _0x5149a9 = {
      'letterSpacing': '0',
      'fontWeight': '400'
    },
    _0x55b518 = ['Webkit', 'Moz', 'ms'],
    _0x1ecfcf = _0x338fe6.createElement('div').style;
  _0x2216fd.extend({
    'cssHooks': {
      'opacity': {
        'get': function (_0x13a1b3, _0x59046d) {
          if (_0x59046d) {
            var _0x5ad41e = _0x12b753(_0x13a1b3, 'opacity');
            return '' === _0x5ad41e ? '1' : _0x5ad41e;
          }
        }
      }
    },
    'cssNumber': {
      'animationIterationCount': !0x0,
      'columnCount': !0x0,
      'fillOpacity': !0x0,
      'flexGrow': !0x0,
      'flexShrink': !0x0,
      'fontWeight': !0x0,
      'lineHeight': !0x0,
      'opacity': !0x0,
      'order': !0x0,
      'orphans': !0x0,
      'widows': !0x0,
      'zIndex': !0x0,
      'zoom': !0x0
    },
    'cssProps': {
      'float': 'cssFloat'
    },
    'style': function (_0x198941, _0x23fcbb, _0x505e73, _0x5d0c0e) {
      if (_0x198941 && 0x3 !== _0x198941.nodeType && 0x8 !== _0x198941.nodeType && _0x198941.style) {
        var _0xd1fcd9,
          _0x265baa,
          _0x19a9ac,
          _0x5a838b = _0x2216fd.camelCase(_0x23fcbb),
          _0xb3cfba = _0x3c7116.test(_0x23fcbb),
          _0x4a5c03 = _0x198941.style;
        return _0xb3cfba || (_0x23fcbb = _0x3044c7(_0x5a838b)), _0x19a9ac = _0x2216fd.cssHooks[_0x23fcbb] || _0x2216fd.cssHooks[_0x5a838b], void 0x0 === _0x505e73 ? _0x19a9ac && 'get' in _0x19a9ac && void 0x0 !== (_0xd1fcd9 = _0x19a9ac.get(_0x198941, !0x1, _0x5d0c0e)) ? _0xd1fcd9 : _0x4a5c03[_0x23fcbb] : (_0x265baa = typeof _0x505e73, 'string' === _0x265baa && (_0xd1fcd9 = _0x552c69.exec(_0x505e73)) && _0xd1fcd9[0x1] && (_0x505e73 = _0x58537d(_0x198941, _0x23fcbb, _0xd1fcd9), _0x265baa = 'number'), null != _0x505e73 && _0x505e73 === _0x505e73 && ('number' === _0x265baa && (_0x505e73 += _0xd1fcd9 && _0xd1fcd9[0x3] || (_0x2216fd.cssNumber[_0x5a838b] ? '' : 'px')), _0x1f2a2c.clearCloneStyle || '' !== _0x505e73 || 0x0 !== _0x23fcbb.indexOf('background') || (_0x4a5c03[_0x23fcbb] = 'inherit'), _0x19a9ac && 'set' in _0x19a9ac && void 0x0 === (_0x505e73 = _0x19a9ac.set(_0x198941, _0x505e73, _0x5d0c0e)) || (_0xb3cfba ? _0x4a5c03.setProperty(_0x23fcbb, _0x505e73) : _0x4a5c03[_0x23fcbb] = _0x505e73)), void 0x0);
      }
    },
    'css': function (_0x4de366, _0x4d3240, _0x18c788, _0x5b8dab) {
      var _0x211a0c,
        _0x319fa9,
        _0x5b3e77,
        _0x64f4b9 = _0x2216fd.camelCase(_0x4d3240);
      return _0x3c7116.test(_0x4d3240) || (_0x4d3240 = _0x3044c7(_0x64f4b9)), _0x5b3e77 = _0x2216fd.cssHooks[_0x4d3240] || _0x2216fd.cssHooks[_0x64f4b9], _0x5b3e77 && 'get' in _0x5b3e77 && (_0x211a0c = _0x5b3e77.get(_0x4de366, !0x0, _0x18c788)), void 0x0 === _0x211a0c && (_0x211a0c = _0x12b753(_0x4de366, _0x4d3240, _0x5b8dab)), 'normal' === _0x211a0c && _0x4d3240 in _0x5149a9 && (_0x211a0c = _0x5149a9[_0x4d3240]), '' === _0x18c788 || _0x18c788 ? (_0x319fa9 = parseFloat(_0x211a0c), !0x0 === _0x18c788 || isFinite(_0x319fa9) ? _0x319fa9 || 0x0 : _0x211a0c) : _0x211a0c;
    }
  }), _0x2216fd.each(['height', 'width'], function (_0x15a018, _0xb6e826) {
    _0x2216fd.cssHooks[_0xb6e826] = {
      'get': function (_0x5a3ca1, _0x289177, _0x48abf2) {
        if (_0x289177) return !_0x70299e.test(_0x2216fd.css(_0x5a3ca1, 'display')) || _0x5a3ca1.getClientRects().length && _0x5a3ca1.getBoundingClientRect().width ? _0x10a05c(_0x5a3ca1, _0xb6e826, _0x48abf2) : _0x377b43(_0x5a3ca1, _0x14792f, function () {
          return _0x10a05c(_0x5a3ca1, _0xb6e826, _0x48abf2);
        });
      },
      'set': function (_0x303c76, _0x532df2, _0x2ab8a2) {
        var _0x4189d2,
          _0x388eae = _0x2ab8a2 && _0x3a14be(_0x303c76);
        return _0x2ab8a2 = _0x2ab8a2 && _0x5010a4(_0x303c76, _0xb6e826, _0x2ab8a2, 'border-box' === _0x2216fd.css(_0x303c76, 'boxSizing', !0x1, _0x388eae), _0x388eae), _0x2ab8a2 && (_0x4189d2 = _0x552c69.exec(_0x532df2)) && 'px' !== (_0x4189d2[0x3] || 'px') && (_0x303c76.style[_0xb6e826] = _0x532df2, _0x532df2 = _0x2216fd.css(_0x303c76, _0xb6e826)), _0x809ab(_0x303c76, _0x532df2, _0x2ab8a2);
      }
    };
  }), _0x2216fd.cssHooks.marginLeft = _0x1212bd(_0x1f2a2c.reliableMarginLeft, function (_0x418159, _0x2e55fa) {
    if (_0x2e55fa) return (parseFloat(_0x12b753(_0x418159, 'marginLeft')) || _0x418159.getBoundingClientRect().left - _0x377b43(_0x418159, {
      'marginLeft': 0x0
    }, function () {
      return _0x418159.getBoundingClientRect().left;
    })) + 'px';
  }), _0x2216fd.each({
    'margin': '',
    'padding': '',
    'border': 'Width'
  }, function (_0x2aa93a, _0x4f97c4) {
    _0x2216fd.cssHooks[_0x2aa93a + _0x4f97c4] = {
      'expand': function (_0x5e5749) {
        var _0xbac331 = 0x0,
          _0x1e32e0 = {};
        for (_0x5e5749 = 'string' == typeof _0x5e5749 ? _0x5e5749.split(" ") : [_0x5e5749]; 0x4 > _0xbac331; _0xbac331++) _0x1e32e0[_0x2aa93a + _0x476acf[_0xbac331] + _0x4f97c4] = _0x5e5749[_0xbac331] || _0x5e5749[_0xbac331 - 0x2] || _0x5e5749[0x0];
        return _0x1e32e0;
      }
    }, _0xd330c4.test(_0x2aa93a) || (_0x2216fd.cssHooks[_0x2aa93a + _0x4f97c4].set = _0x809ab);
  }), _0x2216fd.fn.extend({
    'css': function (_0xdaf440, _0x45cf22) {
      return _0x568d8f(this, function (_0x36749c, _0x4eb0eb, _0x591acc) {
        var _0xf703c,
          _0x20310b = {},
          _0x10c66c = 0x0;
        if (Array.isArray(_0x4eb0eb)) {
          _0x591acc = _0x3a14be(_0x36749c);
          for (_0xf703c = _0x4eb0eb.length; _0x10c66c < _0xf703c; _0x10c66c++) _0x20310b[_0x4eb0eb[_0x10c66c]] = _0x2216fd.css(_0x36749c, _0x4eb0eb[_0x10c66c], !0x1, _0x591acc);
          return _0x20310b;
        }
        return void 0x0 !== _0x591acc ? _0x2216fd.style(_0x36749c, _0x4eb0eb, _0x591acc) : _0x2216fd.css(_0x36749c, _0x4eb0eb);
      }, _0xdaf440, _0x45cf22, 0x1 < arguments.length);
    }
  }), _0x2216fd.Tween = _0x2b0d71, _0x2b0d71.prototype = {
    'constructor': _0x2b0d71,
    'init': function (_0xb48781, _0xd2961c, _0x3c16d1, _0x18bd72, _0x1466c0, _0x15fb00) {
      this.elem = _0xb48781, this.prop = _0x3c16d1, this.easing = _0x1466c0 || _0x2216fd.easing._default, this.options = _0xd2961c, this.start = this.now = this.cur(), this.end = _0x18bd72, this.unit = _0x15fb00 || (_0x2216fd.cssNumber[_0x3c16d1] ? '' : 'px');
    },
    'cur': function () {
      var _0x10f3e4 = _0x2b0d71.propHooks[this.prop];
      return _0x10f3e4 && _0x10f3e4.get ? _0x10f3e4.get(this) : _0x2b0d71.propHooks._default.get(this);
    },
    'run': function (_0x3e9249) {
      var _0x171e58,
        _0x314f6d = _0x2b0d71.propHooks[this.prop];
      return this.options.duration ? this.pos = _0x171e58 = _0x2216fd.easing[this.easing](_0x3e9249, this.options.duration * _0x3e9249, 0x0, 0x1, this.options.duration) : this.pos = _0x171e58 = _0x3e9249, this.now = (this.end - this.start) * _0x171e58 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), _0x314f6d && _0x314f6d.set ? _0x314f6d.set(this) : _0x2b0d71.propHooks._default.set(this), this;
    }
  }, _0x2b0d71.prototype.init.prototype = _0x2b0d71.prototype, _0x2b0d71.propHooks = {
    '_default': {
      'get': function (_0x3350d0) {
        var _0x3bbc41;
        return 0x1 !== _0x3350d0.elem.nodeType || null != _0x3350d0.elem[_0x3350d0.prop] && null == _0x3350d0.elem.style[_0x3350d0.prop] ? _0x3350d0.elem[_0x3350d0.prop] : (_0x3bbc41 = _0x2216fd.css(_0x3350d0.elem, _0x3350d0.prop, ''), _0x3bbc41 && 'auto' !== _0x3bbc41 ? _0x3bbc41 : 0x0);
      },
      'set': function (_0x5cf71e) {
        _0x2216fd.fx.step[_0x5cf71e.prop] ? _0x2216fd.fx.step[_0x5cf71e.prop](_0x5cf71e) : 0x1 !== _0x5cf71e.elem.nodeType || null == _0x5cf71e.elem.style[_0x2216fd.cssProps[_0x5cf71e.prop]] && !_0x2216fd.cssHooks[_0x5cf71e.prop] ? _0x5cf71e.elem[_0x5cf71e.prop] = _0x5cf71e.now : _0x2216fd.style(_0x5cf71e.elem, _0x5cf71e.prop, _0x5cf71e.now + _0x5cf71e.unit);
      }
    }
  }, _0x2b0d71.propHooks.scrollTop = _0x2b0d71.propHooks.scrollLeft = {
    'set': function (_0x4c099d) {
      _0x4c099d.elem.nodeType && _0x4c099d.elem.parentNode && (_0x4c099d.elem[_0x4c099d.prop] = _0x4c099d.now);
    }
  }, _0x2216fd.easing = {
    'linear': function (_0x4bf0d1) {
      return _0x4bf0d1;
    },
    'swing': function (_0x5768a5) {
      return 0.5 - Math.cos(_0x5768a5 * Math.PI) / 0x2;
    },
    '_default': 'swing'
  }, _0x2216fd.fx = _0x2b0d71.prototype.init, _0x2216fd.fx.step = {};
  var _0x315d04,
    _0x49629b,
    _0x5847f2 = /^(?:toggle|show|hide)$/,
    _0x12008f = /queueHooks$/;
  _0x2216fd.Animation = _0x2216fd.extend(_0x1e3244, {
    'tweeners': {
      '*': [function (_0x147dbc, _0x44ee79) {
        var _0x50ceed = this.createTween(_0x147dbc, _0x44ee79);
        return _0x58537d(_0x50ceed.elem, _0x147dbc, _0x552c69.exec(_0x44ee79), _0x50ceed), _0x50ceed;
      }]
    },
    'tweener': function (_0x35b54a, _0x107ac0) {
      _0x2216fd.isFunction(_0x35b54a) ? (_0x107ac0 = _0x35b54a, _0x35b54a = ['*']) : _0x35b54a = _0x35b54a.match(_0x983dc8);
      for (var _0x317e9f, _0x35301d = 0x0, _0x2fb3ef = _0x35b54a.length; _0x35301d < _0x2fb3ef; _0x35301d++) _0x317e9f = _0x35b54a[_0x35301d], _0x1e3244.tweeners[_0x317e9f] = _0x1e3244.tweeners[_0x317e9f] || [], _0x1e3244.tweeners[_0x317e9f].unshift(_0x107ac0);
    },
    'prefilters': [function (_0x4f22e9, _0x490be7, _0xc94a9d) {
      var _0x46327b,
        _0x4bb5b2,
        _0x25c618,
        _0xc903d4,
        _0x2d0611,
        _0x30960a,
        _0x15fa61,
        _0x31bf21,
        _0x58ec3e = 'width' in _0x490be7 || 'height' in _0x490be7,
        _0xaa76ca = this,
        _0x10bf43 = {},
        _0x1b773f = _0x4f22e9.style,
        _0x126d1e = _0x4f22e9.nodeType && _0x389871(_0x4f22e9),
        _0x21adf4 = _0x29d194.get(_0x4f22e9, 'fxshow');
      _0xc94a9d.queue || (_0xc903d4 = _0x2216fd._queueHooks(_0x4f22e9, 'fx'), null == _0xc903d4.unqueued && (_0xc903d4.unqueued = 0x0, _0x2d0611 = _0xc903d4.empty.fire, _0xc903d4.empty.fire = function () {
        _0xc903d4.unqueued || _0x2d0611();
      }), _0xc903d4.unqueued++, _0xaa76ca.always(function () {
        _0xaa76ca.always(function () {
          _0xc903d4.unqueued--, _0x2216fd.queue(_0x4f22e9, 'fx').length || _0xc903d4.empty.fire();
        });
      }));
      for (_0x46327b in _0x490be7) if (_0x4bb5b2 = _0x490be7[_0x46327b], _0x5847f2.test(_0x4bb5b2)) {
        if (delete _0x490be7[_0x46327b], _0x25c618 = _0x25c618 || 'toggle' === _0x4bb5b2, _0x4bb5b2 === (_0x126d1e ? 'hide' : 'show')) {
          if ('show' !== _0x4bb5b2 || !_0x21adf4 || void 0x0 === _0x21adf4[_0x46327b]) continue;
          _0x126d1e = !0x0;
        }
        _0x10bf43[_0x46327b] = _0x21adf4 && _0x21adf4[_0x46327b] || _0x2216fd.style(_0x4f22e9, _0x46327b);
      }
      if (_0x30960a = !_0x2216fd.isEmptyObject(_0x490be7), _0x30960a || !_0x2216fd.isEmptyObject(_0x10bf43)) {
        for (_0x46327b in _0x58ec3e && 0x1 === _0x4f22e9.nodeType && (_0xc94a9d.overflow = [_0x1b773f.overflow, _0x1b773f.overflowX, _0x1b773f.overflowY], _0x15fa61 = _0x21adf4 && _0x21adf4.display, null == _0x15fa61 && (_0x15fa61 = _0x29d194.get(_0x4f22e9, 'display')), _0x31bf21 = _0x2216fd.css(_0x4f22e9, 'display'), 'none' === _0x31bf21 && (_0x15fa61 ? _0x31bf21 = _0x15fa61 : (_0x4d4613([_0x4f22e9], !0x0), _0x15fa61 = _0x4f22e9.style.display || _0x15fa61, _0x31bf21 = _0x2216fd.css(_0x4f22e9, 'display'), _0x4d4613([_0x4f22e9]))), ('inline' === _0x31bf21 || 'inline-block' === _0x31bf21 && null != _0x15fa61) && 'none' === _0x2216fd.css(_0x4f22e9, 'float') && (_0x30960a || (_0xaa76ca.done(function () {
          _0x1b773f.display = _0x15fa61;
        }), null == _0x15fa61 && (_0x31bf21 = _0x1b773f.display, _0x15fa61 = 'none' === _0x31bf21 ? '' : _0x31bf21)), _0x1b773f.display = 'inline-block')), _0xc94a9d.overflow && (_0x1b773f.overflow = 'hidden', _0xaa76ca.always(function () {
          _0x1b773f.overflow = _0xc94a9d.overflow[0x0], _0x1b773f.overflowX = _0xc94a9d.overflow[0x1], _0x1b773f.overflowY = _0xc94a9d.overflow[0x2];
        })), _0x30960a = !0x1, _0x10bf43) _0x30960a || (_0x21adf4 ? 'hidden' in _0x21adf4 && (_0x126d1e = _0x21adf4.hidden) : _0x21adf4 = _0x29d194.access(_0x4f22e9, 'fxshow', {
          'display': _0x15fa61
        }), _0x25c618 && (_0x21adf4.hidden = !_0x126d1e), _0x126d1e && _0x4d4613([_0x4f22e9], !0x0), _0xaa76ca.done(function () {
          _0x126d1e || _0x4d4613([_0x4f22e9]), _0x29d194.remove(_0x4f22e9, 'fxshow');
          for (_0x46327b in _0x10bf43) _0x2216fd.style(_0x4f22e9, _0x46327b, _0x10bf43[_0x46327b]);
        })), _0x30960a = _0x2449ef(_0x126d1e ? _0x21adf4[_0x46327b] : 0x0, _0x46327b, _0xaa76ca), _0x46327b in _0x21adf4 || (_0x21adf4[_0x46327b] = _0x30960a.start, _0x126d1e && (_0x30960a.end = _0x30960a.start, _0x30960a.start = 0x0));
      }
    }],
    'prefilter': function (_0x5ac513, _0x278626) {
      _0x278626 ? _0x1e3244.prefilters.unshift(_0x5ac513) : _0x1e3244.prefilters.push(_0x5ac513);
    }
  }), _0x2216fd.speed = function (_0x2414f9, _0x1fae97, _0x7cbbf1) {
    var _0x3e35ac = _0x2414f9 && 'object' == typeof _0x2414f9 ? _0x2216fd.extend({}, _0x2414f9) : {
      'complete': _0x7cbbf1 || !_0x7cbbf1 && _0x1fae97 || _0x2216fd.isFunction(_0x2414f9) && _0x2414f9,
      'duration': _0x2414f9,
      'easing': _0x7cbbf1 && _0x1fae97 || _0x1fae97 && !_0x2216fd.isFunction(_0x1fae97) && _0x1fae97
    };
    return _0x2216fd.fx.off ? _0x3e35ac.duration = 0x0 : 'number' != typeof _0x3e35ac.duration && (_0x3e35ac.duration in _0x2216fd.fx.speeds ? _0x3e35ac.duration = _0x2216fd.fx.speeds[_0x3e35ac.duration] : _0x3e35ac.duration = _0x2216fd.fx.speeds._default), null != _0x3e35ac.queue && !0x0 !== _0x3e35ac.queue || (_0x3e35ac.queue = 'fx'), _0x3e35ac.old = _0x3e35ac.complete, _0x3e35ac.complete = function () {
      _0x2216fd.isFunction(_0x3e35ac.old) && _0x3e35ac.old.call(this), _0x3e35ac.queue && _0x2216fd.dequeue(this, _0x3e35ac.queue);
    }, _0x3e35ac;
  }, _0x2216fd.fn.extend({
    'fadeTo': function (_0x364742, _0x56b24b, _0x150db3, _0x2f4d43) {
      return this.filter(_0x389871).css('opacity', 0x0).show().end().animate({
        'opacity': _0x56b24b
      }, _0x364742, _0x150db3, _0x2f4d43);
    },
    'animate': function (_0x41a26a, _0x54ed16, _0x38ccbe, _0x32f77c) {
      var _0x386fbc = _0x2216fd.isEmptyObject(_0x41a26a),
        _0x281f73 = _0x2216fd.speed(_0x54ed16, _0x38ccbe, _0x32f77c);
      return _0x54ed16 = function () {
        var _0x8ece54 = _0x1e3244(this, _0x2216fd.extend({}, _0x41a26a), _0x281f73);
        (_0x386fbc || _0x29d194.get(this, 'finish')) && _0x8ece54.stop(!0x0);
      }, _0x54ed16.finish = _0x54ed16, _0x386fbc || !0x1 === _0x281f73.queue ? this.each(_0x54ed16) : this.queue(_0x281f73.queue, _0x54ed16);
    },
    'stop': function (_0xe776f9, _0x25383f, _0x56652a) {
      var _0x6a8373 = function (_0x199c38) {
        var _0x411429 = _0x199c38.stop;
        delete _0x199c38.stop, _0x411429(_0x56652a);
      };
      return 'string' != typeof _0xe776f9 && (_0x56652a = _0x25383f, _0x25383f = _0xe776f9, _0xe776f9 = void 0x0), _0x25383f && !0x1 !== _0xe776f9 && this.queue(_0xe776f9 || 'fx', []), this.each(function () {
        var _0x2d8f71 = !0x0,
          _0x3857c2 = null != _0xe776f9 && _0xe776f9 + 'queueHooks',
          _0x54c21e = _0x2216fd.timers,
          _0x528134 = _0x29d194.get(this);
        if (_0x3857c2) _0x528134[_0x3857c2] && _0x528134[_0x3857c2].stop && _0x6a8373(_0x528134[_0x3857c2]);else {
          for (_0x3857c2 in _0x528134) _0x528134[_0x3857c2] && _0x528134[_0x3857c2].stop && _0x12008f.test(_0x3857c2) && _0x6a8373(_0x528134[_0x3857c2]);
        }
        for (_0x3857c2 = _0x54c21e.length; _0x3857c2--;) _0x54c21e[_0x3857c2].elem !== this || null != _0xe776f9 && _0x54c21e[_0x3857c2].queue !== _0xe776f9 || (_0x54c21e[_0x3857c2].anim.stop(_0x56652a), _0x2d8f71 = !0x1, _0x54c21e.splice(_0x3857c2, 0x1));
        !_0x2d8f71 && _0x56652a || _0x2216fd.dequeue(this, _0xe776f9);
      });
    },
    'finish': function (_0xd92bb2) {
      return !0x1 !== _0xd92bb2 && (_0xd92bb2 = _0xd92bb2 || 'fx'), this.each(function () {
        var _0x2509a2,
          _0x473245 = _0x29d194.get(this),
          _0x591c16 = _0x473245[_0xd92bb2 + 'queue'];
        _0x2509a2 = _0x473245[_0xd92bb2 + 'queueHooks'];
        var _0x26976a = _0x2216fd.timers,
          _0x40b2ea = _0x591c16 ? _0x591c16.length : 0x0;
        _0x473245.finish = !0x0, _0x2216fd.queue(this, _0xd92bb2, []), _0x2509a2 && _0x2509a2.stop && _0x2509a2.stop.call(this, !0x0);
        for (_0x2509a2 = _0x26976a.length; _0x2509a2--;) _0x26976a[_0x2509a2].elem === this && _0x26976a[_0x2509a2].queue === _0xd92bb2 && (_0x26976a[_0x2509a2].anim.stop(!0x0), _0x26976a.splice(_0x2509a2, 0x1));
        for (_0x2509a2 = 0x0; _0x2509a2 < _0x40b2ea; _0x2509a2++) _0x591c16[_0x2509a2] && _0x591c16[_0x2509a2].finish && _0x591c16[_0x2509a2].finish.call(this);
        delete _0x473245.finish;
      });
    }
  }), _0x2216fd.each(['toggle', 'show', 'hide'], function (_0x493633, _0x2fffa7) {
    var _0x10e4d0 = _0x2216fd.fn[_0x2fffa7];
    _0x2216fd.fn[_0x2fffa7] = function (_0x575ed4, _0x440761, _0x4287f1) {
      return null == _0x575ed4 || 'boolean' == typeof _0x575ed4 ? _0x10e4d0.apply(this, arguments) : this.animate(_0x30bce8(_0x2fffa7, !0x0), _0x575ed4, _0x440761, _0x4287f1);
    };
  }), _0x2216fd.each({
    'slideDown': _0x30bce8('show'),
    'slideUp': _0x30bce8('hide'),
    'slideToggle': _0x30bce8('toggle'),
    'fadeIn': {
      'opacity': 'show'
    },
    'fadeOut': {
      'opacity': 'hide'
    },
    'fadeToggle': {
      'opacity': 'toggle'
    }
  }, function (_0x2141ad, _0x2dfe97) {
    _0x2216fd.fn[_0x2141ad] = function (_0x5bce9b, _0x37bd63, _0x4231fc) {
      return this.animate(_0x2dfe97, _0x5bce9b, _0x37bd63, _0x4231fc);
    };
  }), _0x2216fd.timers = [], _0x2216fd.fx.tick = function () {
    var _0x56fff8,
      _0x4bd76a = 0x0,
      _0x1911d = _0x2216fd.timers;
    for (_0x315d04 = _0x2216fd.now(); _0x4bd76a < _0x1911d.length; _0x4bd76a++) _0x56fff8 = _0x1911d[_0x4bd76a], _0x56fff8() || _0x1911d[_0x4bd76a] !== _0x56fff8 || _0x1911d.splice(_0x4bd76a--, 0x1);
    _0x1911d.length || _0x2216fd.fx.stop(), _0x315d04 = void 0x0;
  }, _0x2216fd.fx.timer = function (_0x224912) {
    _0x2216fd.timers.push(_0x224912), _0x2216fd.fx.start();
  }, _0x2216fd.fx.interval = 0xd, _0x2216fd.fx.start = function () {
    _0x49629b || (_0x49629b = !0x0, _0x48b713());
  }, _0x2216fd.fx.stop = function () {
    _0x49629b = null;
  }, _0x2216fd.fx.speeds = {
    'slow': 0x258,
    'fast': 0xc8,
    '_default': 0x190
  }, _0x2216fd.fn.delay = function (_0x23bab9, _0x21934c) {
    return _0x23bab9 = _0x2216fd.fx ? _0x2216fd.fx.speeds[_0x23bab9] || _0x23bab9 : _0x23bab9, _0x21934c = _0x21934c || 'fx', this.queue(_0x21934c, function (_0x33eebb, _0x9995c8) {
      var _0x2f5f05 = _0x57d1ec.setTimeout(_0x33eebb, _0x23bab9);
      _0x9995c8.stop = function () {
        _0x57d1ec.clearTimeout(_0x2f5f05);
      };
    });
  };
  var _0x137d21 = _0x338fe6.createElement('input'),
    _0x4148b3 = _0x338fe6.createElement('select').appendChild(_0x338fe6.createElement('option'));
  _0x137d21.type = 'checkbox', _0x1f2a2c.checkOn = '' !== _0x137d21.value, _0x1f2a2c.optSelected = _0x4148b3.selected, _0x137d21 = _0x338fe6.createElement('input'), _0x137d21.value = 't', _0x137d21.type = 'radio', _0x1f2a2c.radioValue = 't' === _0x137d21.value;
  var _0x265f7d,
    _0x3c31b4 = _0x2216fd.expr.attrHandle;
  _0x2216fd.fn.extend({
    'attr': function (_0xce56fd, _0x2dd3ff) {
      return _0x568d8f(this, _0x2216fd.attr, _0xce56fd, _0x2dd3ff, 0x1 < arguments.length);
    },
    'removeAttr': function (_0x421362) {
      return this.each(function () {
        _0x2216fd.removeAttr(this, _0x421362);
      });
    }
  }), _0x2216fd.extend({
    'attr': function (_0x48a7df, _0x5901dd, _0x5b7d38) {
      var _0x200c7e,
        _0x1fd0c0,
        _0x3f50d1 = _0x48a7df.nodeType;
      if (0x3 !== _0x3f50d1 && 0x8 !== _0x3f50d1 && 0x2 !== _0x3f50d1) return 'undefined' == typeof _0x48a7df.getAttribute ? _0x2216fd.prop(_0x48a7df, _0x5901dd, _0x5b7d38) : (0x1 === _0x3f50d1 && _0x2216fd.isXMLDoc(_0x48a7df) || (_0x1fd0c0 = _0x2216fd.attrHooks[_0x5901dd.toLowerCase()] || (_0x2216fd.expr.match.bool.test(_0x5901dd) ? _0x265f7d : void 0x0)), void 0x0 !== _0x5b7d38 ? null === _0x5b7d38 ? void _0x2216fd.removeAttr(_0x48a7df, _0x5901dd) : _0x1fd0c0 && 'set' in _0x1fd0c0 && void 0x0 !== (_0x200c7e = _0x1fd0c0.set(_0x48a7df, _0x5b7d38, _0x5901dd)) ? _0x200c7e : (_0x48a7df.setAttribute(_0x5901dd, _0x5b7d38 + ''), _0x5b7d38) : _0x1fd0c0 && 'get' in _0x1fd0c0 && null !== (_0x200c7e = _0x1fd0c0.get(_0x48a7df, _0x5901dd)) ? _0x200c7e : (_0x200c7e = _0x2216fd.find.attr(_0x48a7df, _0x5901dd), null == _0x200c7e ? void 0x0 : _0x200c7e));
    },
    'attrHooks': {
      'type': {
        'set': function (_0x392cf5, _0x52294b) {
          if (!_0x1f2a2c.radioValue && 'radio' === _0x52294b && _0x53aeed(_0x392cf5, 'input')) {
            var _0x39a219 = _0x392cf5.value;
            return _0x392cf5.setAttribute('type', _0x52294b), _0x39a219 && (_0x392cf5.value = _0x39a219), _0x52294b;
          }
        }
      }
    },
    'removeAttr': function (_0x50f4ed, _0x5577e2) {
      var _0x1c2313,
        _0x82ba28 = 0x0,
        _0x115f26 = _0x5577e2 && _0x5577e2.match(_0x983dc8);
      if (_0x115f26 && 0x1 === _0x50f4ed.nodeType) {
        for (; _0x1c2313 = _0x115f26[_0x82ba28++];) _0x50f4ed.removeAttribute(_0x1c2313);
      }
    }
  }), _0x265f7d = {
    'set': function (_0x781523, _0x382de8, _0x3656b6) {
      return !0x1 === _0x382de8 ? _0x2216fd.removeAttr(_0x781523, _0x3656b6) : _0x781523.setAttribute(_0x3656b6, _0x3656b6), _0x3656b6;
    }
  }, _0x2216fd.each(_0x2216fd.expr.match.bool.source.match(/\w+/g), function (_0x1f2e47, _0x152805) {
    var _0x1df58c = _0x3c31b4[_0x152805] || _0x2216fd.find.attr;
    _0x3c31b4[_0x152805] = function (_0x5affdf, _0xa62a29, _0x6b5a12) {
      var _0x41348a,
        _0x55afd4,
        _0x50d4a5 = _0xa62a29.toLowerCase();
      return _0x6b5a12 || (_0x55afd4 = _0x3c31b4[_0x50d4a5], _0x3c31b4[_0x50d4a5] = _0x41348a, _0x41348a = null != _0x1df58c(_0x5affdf, _0xa62a29, _0x6b5a12) ? _0x50d4a5 : null, _0x3c31b4[_0x50d4a5] = _0x55afd4), _0x41348a;
    };
  });
  var _0xfa6de1 = /^(?:input|select|textarea|button)$/i,
    _0x16736c = /^(?:a|area)$/i;
  _0x2216fd.fn.extend({
    'prop': function (_0x2a0bc9, _0x4d7edd) {
      return _0x568d8f(this, _0x2216fd.prop, _0x2a0bc9, _0x4d7edd, 0x1 < arguments.length);
    },
    'removeProp': function (_0x2b9067) {
      return this.each(function () {
        delete this[_0x2216fd.propFix[_0x2b9067] || _0x2b9067];
      });
    }
  }), _0x2216fd.extend({
    'prop': function (_0x9a045, _0x3099ec, _0x2b4d32) {
      var _0x4beac0,
        _0x269401,
        _0x439958 = _0x9a045.nodeType;
      if (0x3 !== _0x439958 && 0x8 !== _0x439958 && 0x2 !== _0x439958) return 0x1 === _0x439958 && _0x2216fd.isXMLDoc(_0x9a045) || (_0x3099ec = _0x2216fd.propFix[_0x3099ec] || _0x3099ec, _0x269401 = _0x2216fd.propHooks[_0x3099ec]), void 0x0 !== _0x2b4d32 ? _0x269401 && 'set' in _0x269401 && void 0x0 !== (_0x4beac0 = _0x269401.set(_0x9a045, _0x2b4d32, _0x3099ec)) ? _0x4beac0 : _0x9a045[_0x3099ec] = _0x2b4d32 : _0x269401 && 'get' in _0x269401 && null !== (_0x4beac0 = _0x269401.get(_0x9a045, _0x3099ec)) ? _0x4beac0 : _0x9a045[_0x3099ec];
    },
    'propHooks': {
      'tabIndex': {
        'get': function (_0xd88b8f) {
          var _0x1bf91b = _0x2216fd.find.attr(_0xd88b8f, 'tabindex');
          return _0x1bf91b ? parseInt(_0x1bf91b, 0xa) : _0xfa6de1.test(_0xd88b8f.nodeName) || _0x16736c.test(_0xd88b8f.nodeName) && _0xd88b8f.href ? 0x0 : -0x1;
        }
      }
    },
    'propFix': {
      'for': 'htmlFor',
      'class': 'className'
    }
  }), _0x1f2a2c.optSelected || (_0x2216fd.propHooks.selected = {
    'get': function (_0x5a4067) {
      return _0x5a4067 = _0x5a4067.parentNode, _0x5a4067 && _0x5a4067.parentNode && _0x5a4067.parentNode.selectedIndex, null;
    },
    'set': function (_0x3932de) {
      _0x3932de = _0x3932de.parentNode, _0x3932de && (_0x3932de.selectedIndex, _0x3932de.parentNode && _0x3932de.parentNode.selectedIndex);
    }
  }), _0x2216fd.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {
    _0x2216fd.propFix[this.toLowerCase()] = this;
  }), _0x2216fd.fn.extend({
    'addClass': function (_0x1bd35a) {
      var _0x529d98,
        _0xb8405d,
        _0x499408,
        _0xe1aa2a,
        _0x1803cb,
        _0x2042bd,
        _0x44f669 = 0x0;
      if (_0x2216fd.isFunction(_0x1bd35a)) return this.each(function (_0x1a5187) {
        _0x2216fd(this).addClass(_0x1bd35a.call(this, _0x1a5187, _0xf0d7f2(this)));
      });
      if ('string' == typeof _0x1bd35a && _0x1bd35a) {
        for (_0x529d98 = _0x1bd35a.match(_0x983dc8) || []; _0xb8405d = this[_0x44f669++];) if (_0xe1aa2a = _0xf0d7f2(_0xb8405d), _0x499408 = 0x1 === _0xb8405d.nodeType && " " + _0x5d5c6c(_0xe1aa2a) + " ") {
          for (_0x2042bd = 0x0; _0x1803cb = _0x529d98[_0x2042bd++];) 0x0 > _0x499408.indexOf(" " + _0x1803cb + " ") && (_0x499408 += _0x1803cb + " ");
          _0x499408 = _0x5d5c6c(_0x499408), _0xe1aa2a !== _0x499408 && _0xb8405d.setAttribute('class', _0x499408);
        }
      }
      return this;
    },
    'removeClass': function (_0x40f2d4) {
      var _0x4fe137,
        _0x1c8a33,
        _0x2badfa,
        _0x34f3c3,
        _0x2a5974,
        _0x38ffc0,
        _0x5e295 = 0x0;
      if (_0x2216fd.isFunction(_0x40f2d4)) return this.each(function (_0x34d0b4) {
        _0x2216fd(this).removeClass(_0x40f2d4.call(this, _0x34d0b4, _0xf0d7f2(this)));
      });
      if (!arguments.length) return this.attr('class', '');
      if ('string' == typeof _0x40f2d4 && _0x40f2d4) {
        for (_0x4fe137 = _0x40f2d4.match(_0x983dc8) || []; _0x1c8a33 = this[_0x5e295++];) if (_0x34f3c3 = _0xf0d7f2(_0x1c8a33), _0x2badfa = 0x1 === _0x1c8a33.nodeType && " " + _0x5d5c6c(_0x34f3c3) + " ") {
          for (_0x38ffc0 = 0x0; _0x2a5974 = _0x4fe137[_0x38ffc0++];) for (; -0x1 < _0x2badfa.indexOf(" " + _0x2a5974 + " ");) _0x2badfa = _0x2badfa.replace(" " + _0x2a5974 + " ", " ");
          _0x2badfa = _0x5d5c6c(_0x2badfa), _0x34f3c3 !== _0x2badfa && _0x1c8a33.setAttribute('class', _0x2badfa);
        }
      }
      return this;
    },
    'toggleClass': function (_0x4b4c33, _0x40fdd9) {
      var _0xef3f2a = typeof _0x4b4c33;
      return 'boolean' == typeof _0x40fdd9 && 'string' === _0xef3f2a ? _0x40fdd9 ? this.addClass(_0x4b4c33) : this.removeClass(_0x4b4c33) : _0x2216fd.isFunction(_0x4b4c33) ? this.each(function (_0x2211df) {
        _0x2216fd(this).toggleClass(_0x4b4c33.call(this, _0x2211df, _0xf0d7f2(this), _0x40fdd9), _0x40fdd9);
      }) : this.each(function () {
        var _0x413c92, _0x399b2c, _0x34e4b9, _0x58b860;
        if ('string' === _0xef3f2a) {
          _0x399b2c = 0x0, _0x34e4b9 = _0x2216fd(this);
          for (_0x58b860 = _0x4b4c33.match(_0x983dc8) || []; _0x413c92 = _0x58b860[_0x399b2c++];) _0x34e4b9.hasClass(_0x413c92) ? _0x34e4b9.removeClass(_0x413c92) : _0x34e4b9.addClass(_0x413c92);
        } else void 0x0 !== _0x4b4c33 && 'boolean' !== _0xef3f2a || (_0x413c92 = _0xf0d7f2(this), _0x413c92 && _0x29d194.set(this, '__className__', _0x413c92), this.setAttribute && this.setAttribute('class', _0x413c92 || !0x1 === _0x4b4c33 ? '' : _0x29d194.get(this, '__className__') || ''));
      });
    },
    'hasClass': function (_0x1a094b) {
      var _0x2e54ce,
        _0x3362ef = 0x0;
      for (_0x1a094b = " " + _0x1a094b + " "; _0x2e54ce = this[_0x3362ef++];) if (0x1 === _0x2e54ce.nodeType && -0x1 < (" " + _0x5d5c6c(_0xf0d7f2(_0x2e54ce)) + " ").indexOf(_0x1a094b)) return !0x0;
      return !0x1;
    }
  });
  var _0x4fae25 = /\r/g;
  _0x2216fd.fn.extend({
    'val': function (_0xb93104) {
      var _0x49a543,
        _0x2c113c,
        _0x3837df,
        _0x7eb304 = this[0x0];
      if (arguments.length) return _0x3837df = _0x2216fd.isFunction(_0xb93104), this.each(function (_0x2e6822) {
        var _0x275ea5;
        0x1 === this.nodeType && (_0x275ea5 = _0x3837df ? _0xb93104.call(this, _0x2e6822, _0x2216fd(this).val()) : _0xb93104, null == _0x275ea5 ? _0x275ea5 = '' : 'number' == typeof _0x275ea5 ? _0x275ea5 += '' : Array.isArray(_0x275ea5) && (_0x275ea5 = _0x2216fd.map(_0x275ea5, function (_0x12a47e) {
          return null == _0x12a47e ? '' : _0x12a47e + '';
        })), _0x49a543 = _0x2216fd.valHooks[this.type] || _0x2216fd.valHooks[this.nodeName.toLowerCase()], _0x49a543 && 'set' in _0x49a543 && void 0x0 !== _0x49a543.set(this, _0x275ea5, 'value') || (this.value = _0x275ea5));
      });
      if (_0x7eb304) return _0x49a543 = _0x2216fd.valHooks[_0x7eb304.type] || _0x2216fd.valHooks[_0x7eb304.nodeName.toLowerCase()], _0x49a543 && 'get' in _0x49a543 && void 0x0 !== (_0x2c113c = _0x49a543.get(_0x7eb304, 'value')) ? _0x2c113c : (_0x2c113c = _0x7eb304.value, 'string' == typeof _0x2c113c ? _0x2c113c.replace(_0x4fae25, '') : null == _0x2c113c ? '' : _0x2c113c);
    }
  }), _0x2216fd.extend({
    'valHooks': {
      'option': {
        'get': function (_0x502555) {
          var _0x3009cb = _0x2216fd.find.attr(_0x502555, 'value');
          return null != _0x3009cb ? _0x3009cb : _0x5d5c6c(_0x2216fd.text(_0x502555));
        }
      },
      'select': {
        'get': function (_0x2d5918) {
          var _0x211cac,
            _0x53a0dd,
            _0x25a825 = _0x2d5918.options,
            _0x573c16 = _0x2d5918.selectedIndex,
            _0x240229 = 'select-one' === _0x2d5918.type,
            _0x4ea42a = _0x240229 ? null : [],
            _0x3b66b9 = _0x240229 ? _0x573c16 + 0x1 : _0x25a825.length;
          for (_0x53a0dd = 0x0 > _0x573c16 ? _0x3b66b9 : _0x240229 ? _0x573c16 : 0x0; _0x53a0dd < _0x3b66b9; _0x53a0dd++) if (_0x211cac = _0x25a825[_0x53a0dd], (_0x211cac.selected || _0x53a0dd === _0x573c16) && !_0x211cac.disabled && (!_0x211cac.parentNode.disabled || !_0x53aeed(_0x211cac.parentNode, 'optgroup'))) {
            if (_0x2d5918 = _0x2216fd(_0x211cac).val(), _0x240229) return _0x2d5918;
            _0x4ea42a.push(_0x2d5918);
          }
          return _0x4ea42a;
        },
        'set': function (_0x55a4cb, _0x42a4be) {
          for (var _0x2ffd86, _0x3f594f, _0x397c41 = _0x55a4cb.options, _0x490157 = _0x2216fd.makeArray(_0x42a4be), _0x120551 = _0x397c41.length; _0x120551--;) _0x3f594f = _0x397c41[_0x120551], (_0x3f594f.selected = -0x1 < _0x2216fd.inArray(_0x2216fd.valHooks.option.get(_0x3f594f), _0x490157)) && (_0x2ffd86 = !0x0);
          return _0x2ffd86 || (_0x55a4cb.selectedIndex = -0x1), _0x490157;
        }
      }
    }
  }), _0x2216fd.each(['radio', 'checkbox'], function () {
    _0x2216fd.valHooks[this] = {
      'set': function (_0x47f93e, _0x525b67) {
        if (Array.isArray(_0x525b67)) return _0x47f93e.checked = -0x1 < _0x2216fd.inArray(_0x2216fd(_0x47f93e).val(), _0x525b67);
      }
    }, _0x1f2a2c.checkOn || (_0x2216fd.valHooks[this].get = function (_0x3714d5) {
      return null === _0x3714d5.getAttribute('value') ? 'on' : _0x3714d5.value;
    });
  });
  var _0x1788e7 = /^(?:focusinfocus|focusoutblur)$/;
  _0x2216fd.extend(_0x2216fd.event, {
    'trigger': function (_0x5c68ca, _0x50cdd4, _0x190cd6, _0x4ebd80) {
      var _0x2d6368,
        _0x20b5ab,
        _0x97b270,
        _0x3e8ae4,
        _0x5e7b8e,
        _0x454651,
        _0x4b0fba,
        _0x1e00c5 = [_0x190cd6 || _0x338fe6],
        _0x2372bc = _0x4024c3.call(_0x5c68ca, 'type') ? _0x5c68ca.type : _0x5c68ca;
      _0x2d6368 = _0x4024c3.call(_0x5c68ca, 'namespace') ? _0x5c68ca.namespace.split('.') : [];
      if (_0x20b5ab = _0x97b270 = _0x190cd6 = _0x190cd6 || _0x338fe6, 0x3 !== _0x190cd6.nodeType && 0x8 !== _0x190cd6.nodeType && !_0x1788e7.test(_0x2372bc + _0x2216fd.event.triggered) && (-0x1 < _0x2372bc.indexOf('.') && (_0x2d6368 = _0x2372bc.split('.'), _0x2372bc = _0x2d6368.shift(), _0x2d6368.sort()), _0x5e7b8e = 0x0 > _0x2372bc.indexOf(':') && 'on' + _0x2372bc, _0x5c68ca = _0x5c68ca[_0x2216fd.expando] ? _0x5c68ca : new _0x2216fd.Event(_0x2372bc, 'object' == typeof _0x5c68ca && _0x5c68ca), _0x5c68ca.isTrigger = _0x4ebd80 ? 0x2 : 0x3, _0x5c68ca.namespace = _0x2d6368.join('.'), _0x5c68ca.rnamespace = _0x5c68ca.namespace ? RegExp("(^|\\.)" + _0x2d6368.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, _0x5c68ca.result = void 0x0, _0x5c68ca.target || (_0x5c68ca.target = _0x190cd6), _0x50cdd4 = null == _0x50cdd4 ? [_0x5c68ca] : _0x2216fd.makeArray(_0x50cdd4, [_0x5c68ca]), _0x4b0fba = _0x2216fd.event.special[_0x2372bc] || {}, _0x4ebd80 || !_0x4b0fba.trigger || !0x1 !== _0x4b0fba.trigger.apply(_0x190cd6, _0x50cdd4))) {
        if (!_0x4ebd80 && !_0x4b0fba.noBubble && !_0x2216fd.isWindow(_0x190cd6)) {
          _0x3e8ae4 = _0x4b0fba.delegateType || _0x2372bc;
          for (_0x1788e7.test(_0x3e8ae4 + _0x2372bc) || (_0x20b5ab = _0x20b5ab.parentNode); _0x20b5ab; _0x20b5ab = _0x20b5ab.parentNode) _0x1e00c5.push(_0x20b5ab), _0x97b270 = _0x20b5ab;
          _0x97b270 === (_0x190cd6.ownerDocument || _0x338fe6) && _0x1e00c5.push(_0x97b270.defaultView || _0x97b270.parentWindow || _0x57d1ec);
        }
        for (_0x2d6368 = 0x0; (_0x20b5ab = _0x1e00c5[_0x2d6368++]) && !_0x5c68ca.isPropagationStopped();) _0x5c68ca.type = 0x1 < _0x2d6368 ? _0x3e8ae4 : _0x4b0fba.bindType || _0x2372bc, (_0x454651 = (_0x29d194.get(_0x20b5ab, 'events') || {})[_0x5c68ca.type] && _0x29d194.get(_0x20b5ab, 'handle')) && _0x454651.apply(_0x20b5ab, _0x50cdd4), (_0x454651 = _0x5e7b8e && _0x20b5ab[_0x5e7b8e]) && _0x454651.apply && _0x948cae(_0x20b5ab) && (_0x5c68ca.result = _0x454651.apply(_0x20b5ab, _0x50cdd4), !0x1 === _0x5c68ca.result && _0x5c68ca.preventDefault());
        return _0x5c68ca.type = _0x2372bc, _0x4ebd80 || _0x5c68ca.isDefaultPrevented() || _0x4b0fba._default && !0x1 !== _0x4b0fba._default.apply(_0x1e00c5.pop(), _0x50cdd4) || !_0x948cae(_0x190cd6) || _0x5e7b8e && _0x2216fd.isFunction(_0x190cd6[_0x2372bc]) && !_0x2216fd.isWindow(_0x190cd6) && (_0x97b270 = _0x190cd6[_0x5e7b8e], _0x97b270 && (_0x190cd6[_0x5e7b8e] = null), _0x2216fd.event.triggered = _0x2372bc, _0x190cd6[_0x2372bc](), _0x2216fd.event.triggered = void 0x0, _0x97b270 && (_0x190cd6[_0x5e7b8e] = _0x97b270)), _0x5c68ca.result;
      }
    },
    'simulate': function (_0x4969e3, _0x30a402, _0x22e27e) {
      _0x4969e3 = _0x2216fd.extend(new _0x2216fd.Event(), _0x22e27e, {
        'type': _0x4969e3,
        'isSimulated': !0x0
      }), _0x2216fd.event.trigger(_0x4969e3, null, _0x30a402);
    }
  }), _0x2216fd.fn.extend({
    'trigger': function (_0x961cb0, _0x1dc017) {
      return this.each(function () {
        _0x2216fd.event.trigger(_0x961cb0, _0x1dc017, this);
      });
    },
    'triggerHandler': function (_0x3886b4, _0x5e6c0b) {
      var _0x443f41 = this[0x0];
      if (_0x443f41) return _0x2216fd.event.trigger(_0x3886b4, _0x5e6c0b, _0x443f41, !0x0);
    }
  }), _0x2216fd.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (_0x699a10, _0x1546e4) {
    _0x2216fd.fn[_0x1546e4] = function (_0x257019, _0x3a162f) {
      return 0x0 < arguments.length ? this.on(_0x1546e4, null, _0x257019, _0x3a162f) : this.trigger(_0x1546e4);
    };
  }), _0x2216fd.fn.extend({
    'hover': function (_0x3e826b, _0x37d536) {
      return this.mouseenter(_0x3e826b).mouseleave(_0x37d536 || _0x3e826b);
    }
  }), _0x1f2a2c.focusin = 'onfocusin' in _0x57d1ec, _0x1f2a2c.focusin || _0x2216fd.each({
    'focus': 'focusin',
    'blur': 'focusout'
  }, function (_0x476d73, _0x13b7fe) {
    var _0x5930e8 = function (_0xe6d403) {
      _0x2216fd.event.simulate(_0x13b7fe, _0xe6d403.target, _0x2216fd.event.fix(_0xe6d403));
    };
    _0x2216fd.event.special[_0x13b7fe] = {
      'setup': function () {
        var _0x418e40 = this.ownerDocument || this,
          _0x583d97 = _0x29d194.access(_0x418e40, _0x13b7fe);
        _0x583d97 || _0x418e40.addEventListener(_0x476d73, _0x5930e8, !0x0), _0x29d194.access(_0x418e40, _0x13b7fe, (_0x583d97 || 0x0) + 0x1);
      },
      'teardown': function () {
        var _0x48c4f8 = this.ownerDocument || this,
          _0x876298 = _0x29d194.access(_0x48c4f8, _0x13b7fe) - 0x1;
        _0x876298 ? _0x29d194.access(_0x48c4f8, _0x13b7fe, _0x876298) : (_0x48c4f8.removeEventListener(_0x476d73, _0x5930e8, !0x0), _0x29d194.remove(_0x48c4f8, _0x13b7fe));
      }
    };
  });
  var _0x245bad = _0x57d1ec.location,
    _0x38b9e7 = _0x2216fd.now(),
    _0x533099 = /\?/;
  _0x2216fd.parseXML = function (_0x262a0c) {
    var _0x433f3d;
    if (!_0x262a0c || 'string' != typeof _0x262a0c) return null;
    try {
      _0x433f3d = new _0x57d1ec.DOMParser().parseFromString(_0x262a0c, 'text/xml');
    } catch (_0x4025f5) {
      _0x433f3d = void 0x0;
    }
    return _0x433f3d && !_0x433f3d.getElementsByTagName('parsererror').length || _0x2216fd.error("Invalid XML: " + _0x262a0c), _0x433f3d;
  };
  var _0x2dfa70 = /\[\]$/,
    _0x1e3d6c = /\r?\n/g,
    _0x1a14ec = /^(?:submit|button|image|reset|file)$/i,
    _0x129e28 = /^(?:input|select|textarea|keygen)/i;
  _0x2216fd.param = function (_0x48521f, _0x54c696) {
    var _0xdda785,
      _0x4a8101 = [],
      _0x17fea9 = function (_0x1a8409, _0x17295d) {
        var _0x28d99b = _0x2216fd.isFunction(_0x17295d) ? _0x17295d() : _0x17295d;
        _0x4a8101[_0x4a8101.length] = encodeURIComponent(_0x1a8409) + '=' + encodeURIComponent(null == _0x28d99b ? '' : _0x28d99b);
      };
    if (Array.isArray(_0x48521f) || _0x48521f.jquery && !_0x2216fd.isPlainObject(_0x48521f)) _0x2216fd.each(_0x48521f, function () {
      _0x17fea9(this.name, this.value);
    });else {
      for (_0xdda785 in _0x48521f) _0x549e7b(_0xdda785, _0x48521f[_0xdda785], _0x54c696, _0x17fea9);
    }
    return _0x4a8101.join('&');
  }, _0x2216fd.fn.extend({
    'serialize': function () {
      return _0x2216fd.param(this.serializeArray());
    },
    'serializeArray': function () {
      return this.map(function () {
        var _0x2acf17 = _0x2216fd.prop(this, 'elements');
        return _0x2acf17 ? _0x2216fd.makeArray(_0x2acf17) : this;
      }).filter(function () {
        var _0x5963aa = this.type;
        return this.name && !_0x2216fd(this).is(':disabled') && _0x129e28.test(this.nodeName) && !_0x1a14ec.test(_0x5963aa) && (this.checked || !_0x131b1f.test(_0x5963aa));
      }).map(function (_0x43a4c0, _0x3631f1) {
        var _0x58d0a4 = _0x2216fd(this).val();
        return null == _0x58d0a4 ? null : Array.isArray(_0x58d0a4) ? _0x2216fd.map(_0x58d0a4, function (_0x8437bd) {
          return {
            'name': _0x3631f1.name,
            'value': _0x8437bd.replace(_0x1e3d6c, "\r\n")
          };
        }) : {
          'name': _0x3631f1.name,
          'value': _0x58d0a4.replace(_0x1e3d6c, "\r\n")
        };
      }).get();
    }
  });
  var _0x45864b = /%20/g,
    _0x59fa4b = /#.*$/,
    _0x3f4ab3 = /([?&])_=[^&]*/,
    _0xa45321 = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    _0x29d6de = /^(?:GET|HEAD)$/,
    _0xf2efb0 = /^\/\//,
    _0x227d8c = {},
    _0x3ee5c5 = {},
    _0x32db14 = '*/'.concat('*'),
    _0x9985fb = _0x338fe6.createElement('a');
  _0x9985fb.href = _0x245bad.href, _0x2216fd.extend({
    'active': 0x0,
    'lastModified': {},
    'etag': {},
    'ajaxSettings': {
      'url': _0x245bad.href,
      'type': 'GET',
      'isLocal': /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_0x245bad.protocol),
      'global': !0x0,
      'processData': !0x0,
      'async': !0x0,
      'contentType': "application/x-www-form-urlencoded; charset=UTF-8",
      'accepts': {
        '*': _0x32db14,
        'text': 'text/plain',
        'html': 'text/html',
        'xml': "application/xml, text/xml",
        'json': "application/json, text/javascript"
      },
      'contents': {
        'xml': /\bxml\b/,
        'html': /\bhtml/,
        'json': /\bjson\b/
      },
      'responseFields': {
        'xml': 'responseXML',
        'text': 'responseText',
        'json': 'responseJSON'
      },
      'converters': {
        "* text": String,
        "text html": !0x0,
        "text json": JSON.parse,
        "text xml": _0x2216fd.parseXML
      },
      'flatOptions': {
        'url': !0x0,
        'context': !0x0
      }
    },
    'ajaxSetup': function (_0x2ddeba, _0x1d3bcb) {
      return _0x1d3bcb ? _0x387169(_0x387169(_0x2ddeba, _0x2216fd.ajaxSettings), _0x1d3bcb) : _0x387169(_0x2216fd.ajaxSettings, _0x2ddeba);
    },
    'ajaxPrefilter': _0x42e430(_0x227d8c),
    'ajaxTransport': _0x42e430(_0x3ee5c5),
    'ajax': function (_0x1b681c, _0x40dc6c) {
      function _0x1e52b2(_0x50e43e, _0x15ca1a, _0x236874, _0x382d8a) {
        var _0x4202c6,
          _0x17f8b4,
          _0x3f959a,
          _0x506d64,
          _0x1c6e28 = _0x15ca1a;
        if (!_0x471bcf) {
          _0x471bcf = !0x0, _0x3cb86c && _0x57d1ec.clearTimeout(_0x3cb86c), _0x3e67b5 = void 0x0, _0x4cae3c = _0x382d8a || '', _0x414adb.readyState = 0x0 < _0x50e43e ? 0x4 : 0x0, _0x382d8a = 0xc8 <= _0x50e43e && 0x12c > _0x50e43e || 0x130 === _0x50e43e;
          if (_0x236874) {
            _0x3f959a = _0x1273d6;
            for (var _0x4759d6 = _0x414adb, _0x2af95b, _0x2b19c3, _0x4762b3, _0xec7da1, _0x653196 = _0x3f959a.contents, _0x1e10ed = _0x3f959a.dataTypes; '*' === _0x1e10ed[0x0];) _0x1e10ed.shift(), void 0x0 === _0x2af95b && (_0x2af95b = _0x3f959a.mimeType || _0x4759d6.getResponseHeader('Content-Type'));
            if (_0x2af95b) {
              for (_0x2b19c3 in _0x653196) if (_0x653196[_0x2b19c3] && _0x653196[_0x2b19c3].test(_0x2af95b)) {
                _0x1e10ed.unshift(_0x2b19c3);
                break;
              }
            }
            if (_0x1e10ed[0x0] in _0x236874) _0x4762b3 = _0x1e10ed[0x0];else {
              for (_0x2b19c3 in _0x236874) {
                if (!_0x1e10ed[0x0] || _0x3f959a.converters[_0x2b19c3 + " " + _0x1e10ed[0x0]]) {
                  _0x4762b3 = _0x2b19c3;
                  break;
                }
                _0xec7da1 || (_0xec7da1 = _0x2b19c3);
              }
              _0x4762b3 = _0x4762b3 || _0xec7da1;
            }
            _0x3f959a = _0x236874 = _0x4762b3 ? (_0x4762b3 !== _0x1e10ed[0x0] && _0x1e10ed.unshift(_0x4762b3), _0x236874[_0x4762b3]) : void 0x0;
          }
          var _0x1ffc10;
          _0x2a4fa7: {
            _0x236874 = _0x1273d6, _0x2af95b = _0x3f959a, _0x2b19c3 = _0x414adb, _0x4762b3 = _0x382d8a;
            var _0x586552, _0xe02421, _0x41d0a3;
            _0x3f959a = {}, _0x4759d6 = _0x236874.dataTypes.slice();
            if (_0x4759d6[0x1]) {
              for (_0x586552 in _0x236874.converters) _0x3f959a[_0x586552.toLowerCase()] = _0x236874.converters[_0x586552];
            }
            for (_0xec7da1 = _0x4759d6.shift(); _0xec7da1;) if (_0x236874.responseFields[_0xec7da1] && (_0x2b19c3[_0x236874.responseFields[_0xec7da1]] = _0x2af95b), !_0x41d0a3 && _0x4762b3 && _0x236874.dataFilter && (_0x2af95b = _0x236874.dataFilter(_0x2af95b, _0x236874.dataType)), _0x41d0a3 = _0xec7da1, _0xec7da1 = _0x4759d6.shift()) {
              if ('*' === _0xec7da1) _0xec7da1 = _0x41d0a3;else {
                if ('*' !== _0x41d0a3 && _0x41d0a3 !== _0xec7da1) {
                  if (_0x586552 = _0x3f959a[_0x41d0a3 + " " + _0xec7da1] || _0x3f959a["* " + _0xec7da1], !_0x586552) {
                    for (_0x1ffc10 in _0x3f959a) if (_0xe02421 = _0x1ffc10.split(" "), _0xe02421[0x1] === _0xec7da1 && (_0x586552 = _0x3f959a[_0x41d0a3 + " " + _0xe02421[0x0]] || _0x3f959a["* " + _0xe02421[0x0]])) {
                      !0x0 === _0x586552 ? _0x586552 = _0x3f959a[_0x1ffc10] : !0x0 !== _0x3f959a[_0x1ffc10] && (_0xec7da1 = _0xe02421[0x0], _0x4759d6.unshift(_0xe02421[0x1]));
                      break;
                    }
                  }
                  if (!0x0 !== _0x586552) {
                    if (_0x586552 && _0x236874.throws) _0x2af95b = _0x586552(_0x2af95b);else try {
                      _0x2af95b = _0x586552(_0x2af95b);
                    } catch (_0x3e9538) {
                      _0x1ffc10 = {
                        'state': 'parsererror',
                        'error': _0x586552 ? _0x3e9538 : "No conversion from " + _0x41d0a3 + " to " + _0xec7da1
                      };
                      break _0x2a4fa7;
                    }
                  }
                }
              }
            }
            _0x1ffc10 = {
              'state': 'success',
              'data': _0x2af95b
            };
          }
          _0x3f959a = _0x1ffc10, _0x382d8a ? (_0x1273d6.ifModified && (_0x506d64 = _0x414adb.getResponseHeader('Last-Modified'), _0x506d64 && (_0x2216fd.lastModified[_0x4caf5c] = _0x506d64), _0x506d64 = _0x414adb.getResponseHeader('etag'), _0x506d64 && (_0x2216fd.etag[_0x4caf5c] = _0x506d64)), 0xcc === _0x50e43e || 'HEAD' === _0x1273d6.type ? _0x1c6e28 = 'nocontent' : 0x130 === _0x50e43e ? _0x1c6e28 = 'notmodified' : (_0x1c6e28 = _0x3f959a.state, _0x4202c6 = _0x3f959a.data, _0x17f8b4 = _0x3f959a.error, _0x382d8a = !_0x17f8b4)) : (_0x17f8b4 = _0x1c6e28, !_0x50e43e && _0x1c6e28 || (_0x1c6e28 = 'error', 0x0 > _0x50e43e && (_0x50e43e = 0x0))), _0x414adb.status = _0x50e43e, _0x414adb.statusText = (_0x15ca1a || _0x1c6e28) + '', _0x382d8a ? _0x565bca.resolveWith(_0x5e5148, [_0x4202c6, _0x1c6e28, _0x414adb]) : _0x565bca.rejectWith(_0x5e5148, [_0x414adb, _0x1c6e28, _0x17f8b4]), _0x414adb.statusCode(_0x589608), _0x589608 = void 0x0, _0x28de5f && _0x1a1ecb.trigger(_0x382d8a ? 'ajaxSuccess' : 'ajaxError', [_0x414adb, _0x1273d6, _0x382d8a ? _0x4202c6 : _0x17f8b4]), _0x31e06b.fireWith(_0x5e5148, [_0x414adb, _0x1c6e28]), _0x28de5f && (_0x1a1ecb.trigger('ajaxComplete', [_0x414adb, _0x1273d6]), --_0x2216fd.active || _0x2216fd.event.trigger('ajaxStop'));
        }
      }
      'object' == typeof _0x1b681c && (_0x40dc6c = _0x1b681c, _0x1b681c = void 0x0), _0x40dc6c = _0x40dc6c || {};
      var _0x3e67b5,
        _0x4caf5c,
        _0x4cae3c,
        _0x259209,
        _0x3cb86c,
        _0x181c6b,
        _0x471bcf,
        _0x28de5f,
        _0x3b22bb,
        _0x1de8e3,
        _0x1273d6 = _0x2216fd.ajaxSetup({}, _0x40dc6c),
        _0x5e5148 = _0x1273d6.context || _0x1273d6,
        _0x1a1ecb = _0x1273d6.context && (_0x5e5148.nodeType || _0x5e5148.jquery) ? _0x2216fd(_0x5e5148) : _0x2216fd.event,
        _0x565bca = _0x2216fd.Deferred(),
        _0x31e06b = _0x2216fd.Callbacks("once memory"),
        _0x589608 = _0x1273d6.statusCode || {},
        _0x4ca33c = {},
        _0x85e6a8 = {},
        _0x548d77 = 'canceled',
        _0x414adb = {
          'readyState': 0x0,
          'getResponseHeader': function (_0x3bc8df) {
            var _0x14bca6;
            if (_0x471bcf) {
              if (!_0x259209) {
                for (_0x259209 = {}; _0x14bca6 = _0xa45321.exec(_0x4cae3c);) _0x259209[_0x14bca6[0x1].toLowerCase()] = _0x14bca6[0x2];
              }
              _0x14bca6 = _0x259209[_0x3bc8df.toLowerCase()];
            }
            return null == _0x14bca6 ? null : _0x14bca6;
          },
          'getAllResponseHeaders': function () {
            return _0x471bcf ? _0x4cae3c : null;
          },
          'setRequestHeader': function (_0x358654, _0x430241) {
            return null == _0x471bcf && (_0x358654 = _0x85e6a8[_0x358654.toLowerCase()] = _0x85e6a8[_0x358654.toLowerCase()] || _0x358654, _0x4ca33c[_0x358654] = _0x430241), this;
          },
          'overrideMimeType': function (_0x119fb7) {
            return null == _0x471bcf && (_0x1273d6.mimeType = _0x119fb7), this;
          },
          'statusCode': function (_0x75482f) {
            var _0x1189e4;
            if (_0x75482f) {
              if (_0x471bcf) _0x414adb.always(_0x75482f[_0x414adb.status]);else {
                for (_0x1189e4 in _0x75482f) _0x589608[_0x1189e4] = [_0x589608[_0x1189e4], _0x75482f[_0x1189e4]];
              }
            }
            return this;
          },
          'abort': function (_0x15557f) {
            return _0x15557f = _0x15557f || _0x548d77, _0x3e67b5 && _0x3e67b5.abort(_0x15557f), _0x1e52b2(0x0, _0x15557f), this;
          }
        };
      if (_0x565bca.promise(_0x414adb), _0x1273d6.url = ((_0x1b681c || _0x1273d6.url || _0x245bad.href) + '').replace(_0xf2efb0, _0x245bad.protocol + '//'), _0x1273d6.type = _0x40dc6c.method || _0x40dc6c.type || _0x1273d6.method || _0x1273d6.type, _0x1273d6.dataTypes = (_0x1273d6.dataType || '*').toLowerCase().match(_0x983dc8) || [''], null == _0x1273d6.crossDomain) {
        _0x181c6b = _0x338fe6.createElement('a');
        try {
          _0x181c6b.href = _0x1273d6.url, _0x181c6b.href = _0x181c6b.href, _0x1273d6.crossDomain = _0x9985fb.protocol + '//' + _0x9985fb.host != _0x181c6b.protocol + '//' + _0x181c6b.host;
        } catch (_0x4274f6) {
          _0x1273d6.crossDomain = !0x0;
        }
      }
      if (_0x1273d6.data && _0x1273d6.processData && 'string' != typeof _0x1273d6.data && (_0x1273d6.data = _0x2216fd.param(_0x1273d6.data, _0x1273d6.traditional)), _0xa72067(_0x227d8c, _0x1273d6, _0x40dc6c, _0x414adb), _0x471bcf) return _0x414adb;
      (_0x28de5f = _0x2216fd.event && _0x1273d6.global) && 0x0 === _0x2216fd.active++ && _0x2216fd.event.trigger('ajaxStart'), _0x1273d6.type = _0x1273d6.type.toUpperCase(), _0x1273d6.hasContent = !_0x29d6de.test(_0x1273d6.type), _0x4caf5c = _0x1273d6.url.replace(_0x59fa4b, ''), _0x1273d6.hasContent ? _0x1273d6.data && _0x1273d6.processData && 0x0 === (_0x1273d6.contentType || '').indexOf('application/x-www-form-urlencoded') && (_0x1273d6.data = _0x1273d6.data.replace(_0x45864b, '+')) : (_0x1de8e3 = _0x1273d6.url.slice(_0x4caf5c.length), _0x1273d6.data && (_0x4caf5c += (_0x533099.test(_0x4caf5c) ? '&' : '?') + _0x1273d6.data, delete _0x1273d6.data), !0x1 === _0x1273d6.cache && (_0x4caf5c = _0x4caf5c.replace(_0x3f4ab3, '$1'), _0x1de8e3 = (_0x533099.test(_0x4caf5c) ? '&' : '?') + '_=' + _0x38b9e7++ + _0x1de8e3), _0x1273d6.url = _0x4caf5c + _0x1de8e3), _0x1273d6.ifModified && (_0x2216fd.lastModified[_0x4caf5c] && _0x414adb.setRequestHeader('If-Modified-Since', _0x2216fd.lastModified[_0x4caf5c]), _0x2216fd.etag[_0x4caf5c] && _0x414adb.setRequestHeader('If-None-Match', _0x2216fd.etag[_0x4caf5c])), (_0x1273d6.data && _0x1273d6.hasContent && !0x1 !== _0x1273d6.contentType || _0x40dc6c.contentType) && _0x414adb.setRequestHeader('Content-Type', _0x1273d6.contentType), _0x414adb.setRequestHeader('Accept', _0x1273d6.dataTypes[0x0] && _0x1273d6.accepts[_0x1273d6.dataTypes[0x0]] ? _0x1273d6.accepts[_0x1273d6.dataTypes[0x0]] + ('*' !== _0x1273d6.dataTypes[0x0] ? ", " + _0x32db14 + "; q=0.01" : '') : _0x1273d6.accepts['*']);
      for (_0x3b22bb in _0x1273d6.headers) _0x414adb.setRequestHeader(_0x3b22bb, _0x1273d6.headers[_0x3b22bb]);
      if (_0x1273d6.beforeSend && (!0x1 === _0x1273d6.beforeSend.call(_0x5e5148, _0x414adb, _0x1273d6) || _0x471bcf)) return _0x414adb.abort();
      if (_0x548d77 = 'abort', _0x31e06b.add(_0x1273d6.complete), _0x414adb.done(_0x1273d6.success), _0x414adb.fail(_0x1273d6.error), _0x3e67b5 = _0xa72067(_0x3ee5c5, _0x1273d6, _0x40dc6c, _0x414adb)) {
        if (_0x414adb.readyState = 0x1, _0x28de5f && _0x1a1ecb.trigger('ajaxSend', [_0x414adb, _0x1273d6]), _0x471bcf) return _0x414adb;
        _0x1273d6.async && 0x0 < _0x1273d6.timeout && (_0x3cb86c = _0x57d1ec.setTimeout(function () {
          _0x414adb.abort('timeout');
        }, _0x1273d6.timeout));
        try {
          _0x471bcf = !0x1, _0x3e67b5.send(_0x4ca33c, _0x1e52b2);
        } catch (_0x243e9a) {
          if (_0x471bcf) throw _0x243e9a;
          _0x1e52b2(-0x1, _0x243e9a);
        }
      } else _0x1e52b2(-0x1, "No Transport");
      return _0x414adb;
    },
    'getJSON': function (_0x591263, _0xae2b71, _0x56db53) {
      return _0x2216fd.get(_0x591263, _0xae2b71, _0x56db53, 'json');
    },
    'getScript': function (_0x41c621, _0x491b99) {
      return _0x2216fd.get(_0x41c621, void 0x0, _0x491b99, 'script');
    }
  }), _0x2216fd.each(['get', 'post'], function (_0x328ef9, _0xa9a677) {
    _0x2216fd[_0xa9a677] = function (_0x2709b2, _0x140381, _0x200bba, _0x57ac60) {
      return _0x2216fd.isFunction(_0x140381) && (_0x57ac60 = _0x57ac60 || _0x200bba, _0x200bba = _0x140381, _0x140381 = void 0x0), _0x2216fd.ajax(_0x2216fd.extend({
        'url': _0x2709b2,
        'type': _0xa9a677,
        'dataType': _0x57ac60,
        'data': _0x140381,
        'success': _0x200bba
      }, _0x2216fd.isPlainObject(_0x2709b2) && _0x2709b2));
    };
  }), _0x2216fd._evalUrl = function (_0x93976b) {
    return _0x2216fd.ajax({
      'url': _0x93976b,
      'type': 'GET',
      'dataType': 'script',
      'cache': !0x0,
      'async': !0x1,
      'global': !0x1,
      'throws': !0x0
    });
  }, _0x2216fd.fn.extend({
    'wrapAll': function (_0x176f72) {
      var _0x31dd15;
      return this[0x0] && (_0x2216fd.isFunction(_0x176f72) && (_0x176f72 = _0x176f72.call(this[0x0])), _0x31dd15 = _0x2216fd(_0x176f72, this[0x0].ownerDocument).eq(0x0).clone(!0x0), this[0x0].parentNode && _0x31dd15.insertBefore(this[0x0]), _0x31dd15.map(function () {
        for (var _0x47258b = this; _0x47258b.firstElementChild;) _0x47258b = _0x47258b.firstElementChild;
        return _0x47258b;
      }).append(this)), this;
    },
    'wrapInner': function (_0x1e406c) {
      return _0x2216fd.isFunction(_0x1e406c) ? this.each(function (_0x332909) {
        _0x2216fd(this).wrapInner(_0x1e406c.call(this, _0x332909));
      }) : this.each(function () {
        var _0x396c93 = _0x2216fd(this),
          _0x394348 = _0x396c93.contents();
        _0x394348.length ? _0x394348.wrapAll(_0x1e406c) : _0x396c93.append(_0x1e406c);
      });
    },
    'wrap': function (_0x5bcd00) {
      var _0x5ec291 = _0x2216fd.isFunction(_0x5bcd00);
      return this.each(function (_0x583f32) {
        _0x2216fd(this).wrapAll(_0x5ec291 ? _0x5bcd00.call(this, _0x583f32) : _0x5bcd00);
      });
    },
    'unwrap': function (_0x58255b) {
      return this.parent(_0x58255b).not('body').each(function () {
        _0x2216fd(this).replaceWith(this.childNodes);
      }), this;
    }
  }), _0x2216fd.expr.pseudos.hidden = function (_0x4b1c14) {
    return !_0x2216fd.expr.pseudos.visible(_0x4b1c14);
  }, _0x2216fd.expr.pseudos.visible = function (_0x1e0b83) {
    return !(!_0x1e0b83.offsetWidth && !_0x1e0b83.offsetHeight && !_0x1e0b83.getClientRects().length);
  }, _0x2216fd.ajaxSettings.xhr = function () {
    try {
      return new _0x57d1ec.XMLHttpRequest();
    } catch (_0x214ad4) {}
  };
  var _0xfeab66 = {
      '0': 0xc8,
      0x4c7: 0xcc
    },
    _0x1d573b = _0x2216fd.ajaxSettings.xhr();
  _0x1f2a2c.cors = !!_0x1d573b && 'withCredentials' in _0x1d573b, _0x1f2a2c.ajax = _0x1d573b = !!_0x1d573b, _0x2216fd.ajaxTransport(function (_0x121833) {
    var _0x50447c, _0x4acbb4;
    if (_0x1f2a2c.cors || _0x1d573b && !_0x121833.crossDomain) return {
      'send': function (_0x3f08f3, _0x4f48d0) {
        var _0x483583,
          _0x50049d = _0x121833.xhr();
        if (_0x50049d.open(_0x121833.type, _0x121833.url, _0x121833.async, _0x121833.username, _0x121833.password), _0x121833.xhrFields) {
          for (_0x483583 in _0x121833.xhrFields) _0x50049d[_0x483583] = _0x121833.xhrFields[_0x483583];
        }
        _0x121833.mimeType && _0x50049d.overrideMimeType && _0x50049d.overrideMimeType(_0x121833.mimeType), _0x121833.crossDomain || _0x3f08f3['X-Requested-With'] || (_0x3f08f3['X-Requested-With'] = 'XMLHttpRequest');
        for (_0x483583 in _0x3f08f3) _0x50049d.setRequestHeader(_0x483583, _0x3f08f3[_0x483583]);
        _0x50447c = function (_0x499435) {
          return function () {
            _0x50447c && (_0x50447c = _0x4acbb4 = _0x50049d.onload = _0x50049d.onerror = _0x50049d.onabort = _0x50049d.onreadystatechange = null, 'abort' === _0x499435 ? _0x50049d.abort() : 'error' === _0x499435 ? 'number' != typeof _0x50049d.status ? _0x4f48d0(0x0, 'error') : _0x4f48d0(_0x50049d.status, _0x50049d.statusText) : _0x4f48d0(_0xfeab66[_0x50049d.status] || _0x50049d.status, _0x50049d.statusText, 'text' !== (_0x50049d.responseType || 'text') || 'string' != typeof _0x50049d.responseText ? {
              'binary': _0x50049d.response
            } : {
              'text': _0x50049d.responseText
            }, _0x50049d.getAllResponseHeaders()));
          };
        }, _0x50049d.onload = _0x50447c(), _0x4acbb4 = _0x50049d.onerror = _0x50447c('error'), void 0x0 !== _0x50049d.onabort ? _0x50049d.onabort = _0x4acbb4 : _0x50049d.onreadystatechange = function () {
          0x4 === _0x50049d.readyState && _0x57d1ec.setTimeout(function () {
            _0x50447c && _0x4acbb4();
          });
        }, _0x50447c = _0x50447c('abort');
        try {
          _0x50049d.send(_0x121833.hasContent && _0x121833.data || null);
        } catch (_0xdca280) {
          if (_0x50447c) throw _0xdca280;
        }
      },
      'abort': function () {
        _0x50447c && _0x50447c();
      }
    };
  }), _0x2216fd.ajaxPrefilter(function (_0x241694) {
    _0x241694.crossDomain && (_0x241694.contents.script = !0x1);
  }), _0x2216fd.ajaxSetup({
    'accepts': {
      'script': "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    'contents': {
      'script': /\b(?:java|ecma)script\b/
    },
    'converters': {
      "text script": function (_0x5b85f1) {
        return _0x2216fd.globalEval(_0x5b85f1), _0x5b85f1;
      }
    }
  }), _0x2216fd.ajaxPrefilter('script', function (_0x21db34) {
    void 0x0 === _0x21db34.cache && (_0x21db34.cache = !0x1), _0x21db34.crossDomain && (_0x21db34.type = 'GET');
  }), _0x2216fd.ajaxTransport('script', function (_0x42409b) {
    if (_0x42409b.crossDomain) {
      var _0x199114, _0x40993b;
      return {
        'send': function (_0x406788, _0x184d45) {
          _0x199114 = _0x2216fd('<script>').prop({
            'charset': _0x42409b.scriptCharset,
            'src': _0x42409b.url
          }).on("load error", _0x40993b = function (_0x557b10) {
            _0x199114.remove(), _0x40993b = null, _0x557b10 && _0x184d45('error' === _0x557b10.type ? 0x194 : 0xc8, _0x557b10.type);
          }), _0x338fe6.head.appendChild(_0x199114[0x0]);
        },
        'abort': function () {
          _0x40993b && _0x40993b();
        }
      };
    }
  });
  var _0x27fff0 = [],
    _0x54d0f3 = /(=)\?(?=&|$)|\?\?/;
  _0x2216fd.ajaxSetup({
    'jsonp': 'callback',
    'jsonpCallback': function () {
      var _0x30359a = _0x27fff0.pop() || _0x2216fd.expando + '_' + _0x38b9e7++;
      return this[_0x30359a] = !0x0, _0x30359a;
    }
  }), _0x2216fd.ajaxPrefilter("json jsonp", function (_0x5b3a40, _0x56738a, _0x3ca784) {
    var _0x19432a,
      _0x6c6529,
      _0x40299b,
      _0x135a2d = !0x1 !== _0x5b3a40.jsonp && (_0x54d0f3.test(_0x5b3a40.url) ? 'url' : 'string' == typeof _0x5b3a40.data && 0x0 === (_0x5b3a40.contentType || '').indexOf('application/x-www-form-urlencoded') && _0x54d0f3.test(_0x5b3a40.data) && 'data');
    if (_0x135a2d || 'jsonp' === _0x5b3a40.dataTypes[0x0]) return _0x19432a = _0x5b3a40.jsonpCallback = _0x2216fd.isFunction(_0x5b3a40.jsonpCallback) ? _0x5b3a40.jsonpCallback() : _0x5b3a40.jsonpCallback, _0x135a2d ? _0x5b3a40[_0x135a2d] = _0x5b3a40[_0x135a2d].replace(_0x54d0f3, '$1' + _0x19432a) : !0x1 !== _0x5b3a40.jsonp && (_0x5b3a40.url += (_0x533099.test(_0x5b3a40.url) ? '&' : '?') + _0x5b3a40.jsonp + '=' + _0x19432a), _0x5b3a40.converters["script json"] = function () {
      return _0x40299b || _0x2216fd.error(_0x19432a + " was not called"), _0x40299b[0x0];
    }, _0x5b3a40.dataTypes[0x0] = 'json', _0x6c6529 = _0x57d1ec[_0x19432a], _0x57d1ec[_0x19432a] = function () {
      _0x40299b = arguments;
    }, _0x3ca784.always(function () {
      void 0x0 === _0x6c6529 ? _0x2216fd(_0x57d1ec).removeProp(_0x19432a) : _0x57d1ec[_0x19432a] = _0x6c6529, _0x5b3a40[_0x19432a] && (_0x5b3a40.jsonpCallback = _0x56738a.jsonpCallback, _0x27fff0.push(_0x19432a)), _0x40299b && _0x2216fd.isFunction(_0x6c6529) && _0x6c6529(_0x40299b[0x0]), _0x40299b = _0x6c6529 = void 0x0;
    }), 'script';
  });
  var _0x53122 = _0x1f2a2c,
    _0x288bf5,
    _0x420f49 = _0x338fe6.implementation.createHTMLDocument('').body;
  _0x288bf5 = (_0x420f49.innerHTML = '<form></form><form></form>', 0x2 === _0x420f49.childNodes.length), _0x53122.createHTMLDocument = _0x288bf5, _0x2216fd.parseHTML = function (_0x1432af, _0x2219e4, _0x8ac03) {
    if ('string' != typeof _0x1432af) return [];
    'boolean' == typeof _0x2219e4 && (_0x8ac03 = _0x2219e4, _0x2219e4 = !0x1);
    var _0x5381f4, _0x25d2c6, _0x489b26;
    return _0x2219e4 || (_0x1f2a2c.createHTMLDocument ? (_0x2219e4 = _0x338fe6.implementation.createHTMLDocument(''), _0x5381f4 = _0x2219e4.createElement('base'), _0x5381f4.href = _0x338fe6.location.href, _0x2219e4.head.appendChild(_0x5381f4)) : _0x2219e4 = _0x338fe6), _0x25d2c6 = _0x1e310a.exec(_0x1432af), _0x489b26 = !_0x8ac03 && [], _0x25d2c6 ? [_0x2219e4.createElement(_0x25d2c6[0x1])] : (_0x25d2c6 = _0x2c872b([_0x1432af], _0x2219e4, _0x489b26), _0x489b26 && _0x489b26.length && _0x2216fd(_0x489b26).remove(), _0x2216fd.merge([], _0x25d2c6.childNodes));
  }, _0x2216fd.fn.load = function (_0x4e08cc, _0x5e7fda, _0x825837) {
    var _0xb1fc1c,
      _0x1ab5fd,
      _0x507e1a,
      _0x55f09a = this,
      _0x72f64f = _0x4e08cc.indexOf(" ");
    return -0x1 < _0x72f64f && (_0xb1fc1c = _0x5d5c6c(_0x4e08cc.slice(_0x72f64f)), _0x4e08cc = _0x4e08cc.slice(0x0, _0x72f64f)), _0x2216fd.isFunction(_0x5e7fda) ? (_0x825837 = _0x5e7fda, _0x5e7fda = void 0x0) : _0x5e7fda && 'object' == typeof _0x5e7fda && (_0x1ab5fd = 'POST'), 0x0 < _0x55f09a.length && _0x2216fd.ajax({
      'url': _0x4e08cc,
      'type': _0x1ab5fd || 'GET',
      'dataType': 'html',
      'data': _0x5e7fda
    }).done(function (_0x5d5fc4) {
      _0x507e1a = arguments, _0x55f09a.html(_0xb1fc1c ? _0x2216fd('<div>').append(_0x2216fd.parseHTML(_0x5d5fc4)).find(_0xb1fc1c) : _0x5d5fc4);
    }).always(_0x825837 && function (_0x59f272, _0x533467) {
      _0x55f09a.each(function () {
        _0x825837.apply(this, _0x507e1a || [_0x59f272.responseText, _0x533467, _0x59f272]);
      });
    }), this;
  }, _0x2216fd.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (_0x2c2bd2, _0x146699) {
    _0x2216fd.fn[_0x146699] = function (_0x216e05) {
      return this.on(_0x146699, _0x216e05);
    };
  }), _0x2216fd.expr.pseudos.animated = function (_0x556b9f) {
    return _0x2216fd.grep(_0x2216fd.timers, function (_0x3a1dfe) {
      return _0x556b9f === _0x3a1dfe.elem;
    }).length;
  }, _0x2216fd.offset = {
    'setOffset': function (_0x1c6c6f, _0xef8ed4, _0x2e35e4) {
      var _0x5c0d12,
        _0x32bf57,
        _0x1f888d,
        _0x53c6c9,
        _0x4064f1,
        _0x56131,
        _0x5b6da = _0x2216fd.css(_0x1c6c6f, 'position'),
        _0x13aba6 = _0x2216fd(_0x1c6c6f),
        _0x3f75fb = {};
      'static' === _0x5b6da && (_0x1c6c6f.style.position = 'relative'), _0x4064f1 = _0x13aba6.offset(), _0x1f888d = _0x2216fd.css(_0x1c6c6f, 'top'), _0x56131 = _0x2216fd.css(_0x1c6c6f, 'left'), ('absolute' === _0x5b6da || 'fixed' === _0x5b6da) && -0x1 < (_0x1f888d + _0x56131).indexOf('auto') ? (_0x5c0d12 = _0x13aba6.position(), _0x53c6c9 = _0x5c0d12.top, _0x32bf57 = _0x5c0d12.left) : (_0x53c6c9 = parseFloat(_0x1f888d) || 0x0, _0x32bf57 = parseFloat(_0x56131) || 0x0), _0x2216fd.isFunction(_0xef8ed4) && (_0xef8ed4 = _0xef8ed4.call(_0x1c6c6f, _0x2e35e4, _0x2216fd.extend({}, _0x4064f1))), null != _0xef8ed4.top && (_0x3f75fb.top = _0xef8ed4.top - _0x4064f1.top + _0x53c6c9), null != _0xef8ed4.left && (_0x3f75fb.left = _0xef8ed4.left - _0x4064f1.left + _0x32bf57), 'using' in _0xef8ed4 ? _0xef8ed4.using.call(_0x1c6c6f, _0x3f75fb) : _0x13aba6.css(_0x3f75fb);
    }
  }, _0x2216fd.fn.extend({
    'offset': function (_0x10980e) {
      if (arguments.length) return void 0x0 === _0x10980e ? this : this.each(function (_0x3b5b21) {
        _0x2216fd.offset.setOffset(this, _0x10980e, _0x3b5b21);
      });
      var _0x4da990,
        _0x1a0395,
        _0x14e3fc,
        _0x38d675,
        _0x4f12aa = this[0x0];
      if (_0x4f12aa) return _0x4f12aa.getClientRects().length ? (_0x14e3fc = _0x4f12aa.getBoundingClientRect(), _0x4da990 = _0x4f12aa.ownerDocument, _0x1a0395 = _0x4da990.documentElement, _0x38d675 = _0x4da990.defaultView, {
        'top': _0x14e3fc.top + _0x38d675.pageYOffset - _0x1a0395.clientTop,
        'left': _0x14e3fc.left + _0x38d675.pageXOffset - _0x1a0395.clientLeft
      }) : {
        'top': 0x0,
        'left': 0x0
      };
    },
    'position': function () {
      if (this[0x0]) {
        var _0x1437db,
          _0x60f60,
          _0x2c2df0 = this[0x0],
          _0x44f7ec = {
            'top': 0x0,
            'left': 0x0
          };
        return 'fixed' === _0x2216fd.css(_0x2c2df0, 'position') ? _0x60f60 = _0x2c2df0.getBoundingClientRect() : (_0x1437db = this.offsetParent(), _0x60f60 = this.offset(), _0x53aeed(_0x1437db[0x0], 'html') || (_0x44f7ec = _0x1437db.offset()), _0x44f7ec = {
          'top': _0x44f7ec.top + _0x2216fd.css(_0x1437db[0x0], 'borderTopWidth', !0x0),
          'left': _0x44f7ec.left + _0x2216fd.css(_0x1437db[0x0], 'borderLeftWidth', !0x0)
        }), {
          'top': _0x60f60.top - _0x44f7ec.top - _0x2216fd.css(_0x2c2df0, 'marginTop', !0x0),
          'left': _0x60f60.left - _0x44f7ec.left - _0x2216fd.css(_0x2c2df0, 'marginLeft', !0x0)
        };
      }
    },
    'offsetParent': function () {
      return this.map(function () {
        for (var _0x46380b = this.offsetParent; _0x46380b && 'static' === _0x2216fd.css(_0x46380b, 'position');) _0x46380b = _0x46380b.offsetParent;
        return _0x46380b || _0xd128d4;
      });
    }
  }), _0x2216fd.each({
    'scrollLeft': 'pageXOffset',
    'scrollTop': 'pageYOffset'
  }, function (_0xde8933, _0x19982c) {
    var _0x26f9fb = 'pageYOffset' === _0x19982c;
    _0x2216fd.fn[_0xde8933] = function (_0xaf122d) {
      return _0x568d8f(this, function (_0xa295cd, _0x29485b, _0x54d640) {
        var _0x30e1d0;
        return _0x2216fd.isWindow(_0xa295cd) ? _0x30e1d0 = _0xa295cd : 0x9 === _0xa295cd.nodeType && (_0x30e1d0 = _0xa295cd.defaultView), void 0x0 === _0x54d640 ? _0x30e1d0 ? _0x30e1d0[_0x19982c] : _0xa295cd[_0x29485b] : void (_0x30e1d0 ? _0x30e1d0.scrollTo(_0x26f9fb ? _0x30e1d0.pageXOffset : _0x54d640, _0x26f9fb ? _0x54d640 : _0x30e1d0.pageYOffset) : _0xa295cd[_0x29485b] = _0x54d640);
      }, _0xde8933, _0xaf122d, arguments.length);
    };
  }), _0x2216fd.each(['top', 'left'], function (_0x1038b6, _0x3a1412) {
    _0x2216fd.cssHooks[_0x3a1412] = _0x1212bd(_0x1f2a2c.pixelPosition, function (_0x5bc2c9, _0x185bf4) {
      if (_0x185bf4) return _0x185bf4 = _0x12b753(_0x5bc2c9, _0x3a1412), _0x2d3609.test(_0x185bf4) ? _0x2216fd(_0x5bc2c9).position()[_0x3a1412] + 'px' : _0x185bf4;
    });
  }), _0x2216fd.each({
    'Height': 'height',
    'Width': 'width'
  }, function (_0x5dbf34, _0x308010) {
    _0x2216fd.each({
      'padding': 'inner' + _0x5dbf34,
      'content': _0x308010,
      '': 'outer' + _0x5dbf34
    }, function (_0x4a0d18, _0x4b382e) {
      _0x2216fd.fn[_0x4b382e] = function (_0x10c9d2, _0x5d6e47) {
        var _0x18e478 = arguments.length && (_0x4a0d18 || 'boolean' != typeof _0x10c9d2),
          _0x54113b = _0x4a0d18 || (!0x0 === _0x10c9d2 || !0x0 === _0x5d6e47 ? 'margin' : 'border');
        return _0x568d8f(this, function (_0x487756, _0xedeefb, _0x3be292) {
          var _0x1dd705;
          return _0x2216fd.isWindow(_0x487756) ? 0x0 === _0x4b382e.indexOf('outer') ? _0x487756['inner' + _0x5dbf34] : _0x487756.document.documentElement['client' + _0x5dbf34] : 0x9 === _0x487756.nodeType ? (_0x1dd705 = _0x487756.documentElement, Math.max(_0x487756.body['scroll' + _0x5dbf34], _0x1dd705['scroll' + _0x5dbf34], _0x487756.body['offset' + _0x5dbf34], _0x1dd705['offset' + _0x5dbf34], _0x1dd705['client' + _0x5dbf34])) : void 0x0 === _0x3be292 ? _0x2216fd.css(_0x487756, _0xedeefb, _0x54113b) : _0x2216fd.style(_0x487756, _0xedeefb, _0x3be292, _0x54113b);
        }, _0x308010, _0x18e478 ? _0x10c9d2 : void 0x0, _0x18e478);
      };
    });
  }), _0x2216fd.fn.extend({
    'bind': function (_0x5891e6, _0x472dc1, _0x70e3ab) {
      return this.on(_0x5891e6, null, _0x472dc1, _0x70e3ab);
    },
    'unbind': function (_0x50f23c, _0x262a2a) {
      return this.off(_0x50f23c, null, _0x262a2a);
    },
    'delegate': function (_0x5e9c87, _0x56f3b9, _0x49dc01, _0x49801d) {
      return this.on(_0x56f3b9, _0x5e9c87, _0x49dc01, _0x49801d);
    },
    'undelegate': function (_0x204957, _0x1ad4df, _0x564e10) {
      return 0x1 === arguments.length ? this.off(_0x204957, '**') : this.off(_0x1ad4df, _0x204957 || '**', _0x564e10);
    }
  }), _0x2216fd.holdReady = function (_0x5b9a04) {
    _0x5b9a04 ? _0x2216fd.readyWait++ : _0x2216fd.ready(!0x0);
  }, _0x2216fd.isArray = Array.isArray, _0x2216fd.parseJSON = JSON.parse, _0x2216fd.nodeName = _0x53aeed, 'function' == typeof define && define.amd && define('jquery', [], function () {
    return _0x2216fd;
  });
  var _0x7be58e = _0x57d1ec.jQuery,
    _0x595f24 = _0x57d1ec.$;
  return _0x2216fd.noConflict = function (_0x11c72c) {
    return _0x57d1ec.$ === _0x2216fd && (_0x57d1ec.$ = _0x595f24), _0x11c72c && _0x57d1ec.jQuery === _0x2216fd && (_0x57d1ec.jQuery = _0x7be58e), _0x2216fd;
  }, _0x22c480 || (_0x57d1ec.jQuery = _0x57d1ec.$ = _0x2216fd), _0x2216fd;
});
function getInternetExplorerVersion() {
  var _0x40176a = -0x1;
  return "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (_0x40176a = parseFloat(RegExp.$1)), _0x40176a;
}
var ie = getInternetExplorerVersion();
function getQueryVariable(_0x586d5f) {
  for (var _0x2845ed = window.location.search.substring(0x1).split('&'), _0x280f1c = 0x0; _0x280f1c < _0x2845ed.length; _0x280f1c++) {
    var _0x158a76 = _0x2845ed[_0x280f1c].match(/([^=]+?)=(.+)/);
    if (_0x158a76 && decodeURIComponent(_0x158a76[0x1]) == _0x586d5f) return decodeURIComponent(_0x158a76[0x2]);
  }
}
this.jukebox = {}, jukebox.Player = function (_0x5a3ee3, _0x2ffccb) {
  this.id = ++jukebox.__jukeboxId, this.origin = _0x2ffccb || null, this.settings = {};
  for (var _0x2a496e in this.defaults) this.settings[_0x2a496e] = this.defaults[_0x2a496e];
  if ("[object Object]" === Object.prototype.toString.call(_0x5a3ee3)) {
    for (var _0x525b02 in _0x5a3ee3) this.settings[_0x525b02] = _0x5a3ee3[_0x525b02];
  }
  "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager()), this.resource = this.isPlaying = null, this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) : this.settings.resources[0x0] || null;
  if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
  return this.__init(), this;
}, jukebox.__jukeboxId = 0x0, jukebox.Player.prototype = {
  'defaults': {
    'resources': [],
    'autoplay': !0x1,
    'spritemap': {},
    'flashMediaElement': './swf/FlashMediaElement.swf',
    'timeout': 0x3e8
  },
  '__addToManager': function () {
    !0x0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0x0);
  },
  '__init': function () {
    var _0x1c127f = this,
      _0x331e0f = this.settings,
      _0x29cc0f = {},
      _0x441261;
    jukebox.Manager && void 0x0 !== jukebox.Manager.features && (_0x29cc0f = jukebox.Manager.features);
    if (!0x0 === _0x29cc0f.html5audio) {
      this.context = new Audio(), this.context.src = this.resource;
      if (null === this.origin) {
        var _0x41dc11 = function (_0x544fcd) {
          _0x1c127f.__addToManager(_0x544fcd);
        };
        this.context.addEventListener('canplaythrough', _0x41dc11, !0x0), window.setTimeout(function () {
          _0x1c127f.context.removeEventListener('canplaythrough', _0x41dc11, !0x0), _0x41dc11('timeout');
        }, _0x331e0f.timeout);
      }
      this.context.autobuffer = !0x0, this.context.preload = !0x0;
      for (_0x441261 in this.HTML5API) this[_0x441261] = this.HTML5API[_0x441261];
      0x1 < _0x29cc0f.channels ? !0x0 === _0x331e0f.autoplay ? this.context.autoplay = !0x0 : void 0x0 !== _0x331e0f.spritemap[_0x331e0f.autoplay] && this.play(_0x331e0f.autoplay) : 0x1 === _0x29cc0f.channels && void 0x0 !== _0x331e0f.spritemap[_0x331e0f.autoplay] && (this.backgroundMusic = _0x331e0f.spritemap[_0x331e0f.autoplay], this.backgroundMusic.started = Date.now ? Date.now() : +new Date(), this.play(_0x331e0f.autoplay)), 0x1 == _0x29cc0f.channels && !0x0 !== _0x331e0f.canPlayBackground && (window.addEventListener('pagehide', function () {
        null !== _0x1c127f.isPlaying && (_0x1c127f.pause(), _0x1c127f.__wasAutoPaused = !0x0);
      }), window.addEventListener('pageshow', function () {
        _0x1c127f.__wasAutoPaused && (_0x1c127f.resume(), delete _0x1c127f._wasAutoPaused);
      }));
    } else {
      if (!0x0 === _0x29cc0f.flashaudio) {
        for (_0x441261 in this.FLASHAPI) this[_0x441261] = this.FLASHAPI[_0x441261];
        _0x29cc0f = ['id=jukebox-flashstream-' + this.id, 'autoplay=' + _0x331e0f.autoplay, 'file=' + window.encodeURIComponent(this.resource)], this.__initFlashContext(_0x29cc0f), !0x0 === _0x331e0f.autoplay ? this.play(0x0) : _0x331e0f.spritemap[_0x331e0f.autoplay] && this.play(_0x331e0f.autoplay);
      } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    }
  },
  '__initFlashContext': function (_0x35ff34) {
    var _0x10fb8a,
      _0x46418e = this.settings.flashMediaElement,
      _0x4b7e4b,
      _0x4e258b = {
        'flashvars': _0x35ff34.join('&'),
        'quality': 'high',
        'bgcolor': '#000000',
        'wmode': 'transparent',
        'allowscriptaccess': 'always',
        'allowfullscreen': 'true'
      };
    if (navigator.userAgent.match(/MSIE/)) {
      _0x10fb8a = document.createElement('div'), document.getElementsByTagName('body')[0x0].appendChild(_0x10fb8a);
      var _0xb63ee6 = document.createElement('object');
      _0xb63ee6.id = 'jukebox-flashstream-' + this.id, _0xb63ee6.setAttribute('type', 'application/x-shockwave-flash'), _0xb63ee6.setAttribute('classid', 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000'), _0xb63ee6.setAttribute('width', '0'), _0xb63ee6.setAttribute('height', '0'), _0x4e258b.movie = _0x46418e + '?x=' + (Date.now ? Date.now() : +new Date()), _0x4e258b.flashvars = _0x35ff34.join('&amp;');
      for (_0x4b7e4b in _0x4e258b) _0x35ff34 = document.createElement('param'), _0x35ff34.setAttribute('name', _0x4b7e4b), _0x35ff34.setAttribute('value', _0x4e258b[_0x4b7e4b]), _0xb63ee6.appendChild(_0x35ff34);
      _0x10fb8a.outerHTML = _0xb63ee6.outerHTML, this.context = document.getElementById('jukebox-flashstream-' + this.id);
    } else {
      _0x10fb8a = document.createElement('embed'), _0x10fb8a.id = 'jukebox-flashstream-' + this.id, _0x10fb8a.setAttribute('type', 'application/x-shockwave-flash'), _0x10fb8a.setAttribute('width', '100'), _0x10fb8a.setAttribute('height', '100'), _0x4e258b.play = !0x1, _0x4e258b.loop = !0x1, _0x4e258b.src = _0x46418e + '?x=' + (Date.now ? Date.now() : +new Date());
      for (_0x4b7e4b in _0x4e258b) _0x10fb8a.setAttribute(_0x4b7e4b, _0x4e258b[_0x4b7e4b]);
      document.getElementsByTagName('body')[0x0].appendChild(_0x10fb8a), this.context = _0x10fb8a;
    }
  },
  'backgroundHackForiOS': function () {
    if (void 0x0 !== this.backgroundMusic) {
      var _0x4ab63d = Date.now ? Date.now() : +new Date();
      void 0x0 === this.backgroundMusic.started ? (this.backgroundMusic.started = _0x4ab63d, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (_0x4ab63d - this.backgroundMusic.started) / 0x3e8 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer));
    }
  },
  'play': function (_0x4737a9, _0x1bc4a4) {
    if (null !== this.isPlaying && !0x0 !== _0x1bc4a4) void 0x0 !== jukebox.Manager && jukebox.Manager.addToQueue(_0x4737a9, this.id);else {
      var _0x393580 = this.settings.spritemap,
        _0x22ade9;
      if (void 0x0 !== _0x393580[_0x4737a9]) _0x22ade9 = _0x393580[_0x4737a9].start;else {
        if ('number' === typeof _0x4737a9) {
          _0x22ade9 = _0x4737a9;
          for (var _0x18c33d in _0x393580) if (_0x22ade9 >= _0x393580[_0x18c33d].start && _0x22ade9 <= _0x393580[_0x18c33d].end) {
            _0x4737a9 = _0x18c33d;
            break;
          }
        }
      }
      void 0x0 !== _0x22ade9 && "[object Object]" === Object.prototype.toString.call(_0x393580[_0x4737a9]) && (this.isPlaying = this.settings.spritemap[_0x4737a9], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(_0x22ade9));
    }
  },
  'stop': function () {
    return this.__lastPosition = 0x0, this.isPlaying = null, this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause(), !0x0;
  },
  'pause': function () {
    return this.isPlaying = null, this.__lastPosition = this.getCurrentTime(), this.context.pause(), this.__lastPosition;
  },
  'resume': function (_0xac0ad1) {
    _0xac0ad1 = 'number' === typeof _0xac0ad1 ? _0xac0ad1 : this.__lastPosition;
    if (null !== _0xac0ad1) return this.play(_0xac0ad1), this.__lastPosition = null, !0x0;
    return this.context.play(), !0x1;
  },
  'HTML5API': {
    'getVolume': function () {
      return this.context.volume || 0x1;
    },
    'setVolume': function (_0xede017) {
      return this.context.volume = _0xede017, 0.0001 > Math.abs(this.context.volume - _0xede017) ? !0x0 : !0x1;
    },
    'getCurrentTime': function () {
      return this.context.currentTime || 0x0;
    },
    'setCurrentTime': function (_0x338650) {
      try {
        return this.context.currentTime = _0x338650, !0x0;
      } catch (_0x403796) {
        return !0x1;
      }
    }
  },
  'FLASHAPI': {
    'getVolume': function () {
      return this.context && 'function' === typeof this.context.getVolume ? this.context.getVolume() : 0x1;
    },
    'setVolume': function (_0x2927a7) {
      return this.context && 'function' === typeof this.context.setVolume ? (this.context.setVolume(_0x2927a7), !0x0) : !0x1;
    },
    'getCurrentTime': function () {
      return this.context && 'function' === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0x0;
    },
    'setCurrentTime': function (_0x2205d3) {
      return this.context && 'function' === typeof this.context.setCurrentTime ? this.context.setCurrentTime(_0x2205d3) : !0x1;
    }
  }
};
if (void 0x0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function (_0x3be807) {
  this.features = {}, this.codecs = {}, this.__players = {}, this.__playersLength = 0x0, this.__clones = {}, this.__queue = [], this.settings = {};
  for (var _0x8ae42f in this.defaults) this.settings[_0x8ae42f] = this.defaults[_0x8ae42f];
  if ("[object Object]" === Object.prototype.toString.call(_0x3be807)) {
    for (var _0x2de3ab in _0x3be807) this.settings[_0x2de3ab] = _0x3be807[_0x2de3ab];
  }
  this.__detectFeatures(), jukebox.Manager.__initialized = !0x1 === this.settings.useGameLoop ? window.setInterval(function () {
    jukebox.Manager.loop();
  }, 0x14) : !0x0;
}, jukebox.Manager.prototype = {
  'defaults': {
    'useFlash': !0x1,
    'useGameLoop': !0x1
  },
  '__detectFeatures': function () {
    var _0x1930af = window.Audio && new Audio();
    if (_0x1930af && _0x1930af.canPlayType && !0x1 === this.settings.useFlash) {
      for (var _0xf99f69 = [{
          'e': '3gp',
          'm': ['audio/3gpp', 'audio/amr']
        }, {
          'e': 'aac',
          'm': ['audio/aac', 'audio/aacp']
        }, {
          'e': 'amr',
          'm': ['audio/amr', 'audio/3gpp']
        }, {
          'e': 'caf',
          'm': ['audio/IMA-ADPCM', 'audio/x-adpcm', "audio/x-aiff; codecs=\"IMA-ADPCM, ADPCM\""]
        }, {
          'e': 'm4a',
          'm': "audio/mp4{audio/mp4; codecs=\"mp4a.40.2,avc1.42E01E\"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a".split('{')
        }, {
          'e': 'mp3',
          'm': ['audio/mp3', 'audio/mpeg', "audio/mpeg; codecs=\"mp3\"", 'audio/MPA', 'audio/mpa-robust']
        }, {
          'e': 'mpga',
          'm': ['audio/MPA', 'audio/mpa-robust', 'audio/mpeg', 'video/mpeg']
        }, {
          'e': 'mp4',
          'm': ['audio/mp4', 'video/mp4']
        }, {
          'e': 'ogg',
          'm': ['application/ogg', 'audio/ogg', "audio/ogg; codecs=\"theora, vorbis\"", 'video/ogg', "video/ogg; codecs=\"theora, vorbis\""]
        }, {
          'e': 'wav',
          'm': ['audio/wave', 'audio/wav', "audio/wav; codecs=\"1\"", 'audio/x-wav', 'audio/x-pn-wav']
        }, {
          'e': 'webm',
          'm': ['audio/webm', "audio/webm; codecs=\"vorbis\"", 'video/webm']
        }], _0x3d3edd, _0x39dffe, _0x50a786 = 0x0, _0x3085ac = _0xf99f69.length; _0x50a786 < _0x3085ac; _0x50a786++) if (_0x39dffe = _0xf99f69[_0x50a786].e, _0xf99f69[_0x50a786].m.length && 'object' === typeof _0xf99f69[_0x50a786].m) {
        for (var _0x3c1fcc = 0x0, _0x133ee0 = _0xf99f69[_0x50a786].m.length; _0x3c1fcc < _0x133ee0; _0x3c1fcc++) if (_0x3d3edd = _0xf99f69[_0x50a786].m[_0x3c1fcc], '' !== _0x1930af.canPlayType(_0x3d3edd)) {
          this.codecs[_0x39dffe] = _0x3d3edd;
          break;
        } else this.codecs[_0x39dffe] || (this.codecs[_0x39dffe] = !0x1);
      }
      this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav), this.features.channels = 0x8, _0x1930af.volume = 0.1337, this.features.volume = !!(0.0001 > Math.abs(_0x1930af.volume - 0.1337)), navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 0x1);
    }
    this.features.flashaudio = !!navigator.mimeTypes['application/x-shockwave-flash'] || !!navigator.plugins["Shockwave Flash"] || !0x1;
    if (window.ActiveXObject) try {
      new ActiveXObject('ShockwaveFlash.ShockwaveFlash.10'), this.features.flashaudio = !0x0;
    } catch (_0x5bb8c7) {}
    !0x0 === this.settings.useFlash && (this.features.flashaudio = !0x0), !0x0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = 'audio/mp3', this.codecs.mpga = 'audio/mpeg', this.codecs.mp4 = 'audio/mp4', this.codecs.m4a = 'audio/mp4', this.codecs['3gp'] = 'audio/3gpp', this.codecs.amr = 'audio/amr', this.features.volume = !0x0, this.features.channels = 0x1);
  },
  '__getPlayerById': function (_0x29a0bd) {
    return this.__players && void 0x0 !== this.__players[_0x29a0bd] ? this.__players[_0x29a0bd] : null;
  },
  '__getClone': function (_0x5a0f40, _0x40905d) {
    for (var _0x1ac90c in this.__clones) {
      var _0x43dac1 = this.__clones[_0x1ac90c];
      if (null === _0x43dac1.isPlaying && _0x43dac1.origin === _0x5a0f40) return _0x43dac1;
    }
    if ("[object Object]" === Object.prototype.toString.call(_0x40905d)) {
      _0x1ac90c = {};
      for (var _0x4bb58f in _0x40905d) _0x1ac90c[_0x4bb58f] = _0x40905d[_0x4bb58f];
      return _0x1ac90c.autoplay = !0x1, _0x4bb58f = new jukebox.Player(_0x1ac90c, _0x5a0f40), _0x4bb58f.isClone = !0x0, _0x4bb58f.wasReady = !0x1, this.__clones[_0x4bb58f.id] = _0x4bb58f;
    }
    return null;
  },
  'loop': function () {
    if (0x0 !== this.__playersLength) {
      if (this.__queue.length && this.__playersLength < this.features.channels) {
        var _0x582383 = this.__queue[0x0],
          _0x23b634 = this.__getPlayerById(_0x582383.origin);
        if (null !== _0x23b634) {
          var _0x4aedaa = this.__getClone(_0x582383.origin, _0x23b634.settings);
          null !== _0x4aedaa && (!0x0 === this.features.volume && (_0x23b634 = this.__players[_0x582383.origin]) && _0x4aedaa.setVolume(_0x23b634.getVolume()), this.add(_0x4aedaa), _0x4aedaa.play(_0x582383.pointer, !0x0));
        }
        this.__queue.splice(0x0, 0x1);
      } else {
        for (_0x4aedaa in this.__queue.length && 0x1 === this.features.channels && (_0x582383 = this.__queue[0x0], _0x23b634 = this.__getPlayerById(_0x582383.origin), null !== _0x23b634 && _0x23b634.play(_0x582383.pointer, !0x0), this.__queue.splice(0x0, 0x1)), this.__players) _0x582383 = this.__players[_0x4aedaa], _0x23b634 = _0x582383.getCurrentTime() || 0x0, _0x582383.isPlaying && !0x1 === _0x582383.wasReady ? _0x582383.wasReady = _0x582383.setCurrentTime(_0x582383.isPlaying.start) : _0x582383.isPlaying && !0x0 === _0x582383.wasReady ? _0x23b634 > _0x582383.isPlaying.end && (!0x0 === _0x582383.isPlaying.loop ? _0x582383.play(_0x582383.isPlaying.start, !0x0) : _0x582383.stop()) : _0x582383.isClone && null === _0x582383.isPlaying ? this.remove(_0x582383) : void 0x0 !== _0x582383.backgroundMusic && null === _0x582383.isPlaying && _0x23b634 > _0x582383.backgroundMusic.end && _0x582383.backgroundHackForiOS();
      }
    }
  },
  'getPlayableResource': function (_0xf1c701) {
    "[object Array]" !== Object.prototype.toString.call(_0xf1c701) && (_0xf1c701 = [_0xf1c701]);
    for (var _0x4888ee = 0x0, _0x5ed267 = _0xf1c701.length; _0x4888ee < _0x5ed267; _0x4888ee++) {
      var _0x476f8f = _0xf1c701[_0x4888ee],
        _0x4379e7 = _0x476f8f.match(/\.([^\.]*)$/)[0x1];
      if (_0x4379e7 && this.codecs[_0x4379e7]) return _0x476f8f;
    }
    return null;
  },
  'add': function (_0x355717) {
    return _0x355717 instanceof jukebox.Player && void 0x0 === this.__players[_0x355717.id] ? (this.__playersLength++, this.__players[_0x355717.id] = _0x355717, !0x0) : !0x1;
  },
  'remove': function (_0x2ecfb9) {
    return _0x2ecfb9 instanceof jukebox.Player && void 0x0 !== this.__players[_0x2ecfb9.id] ? (this.__playersLength--, delete this.__players[_0x2ecfb9.id], !0x0) : !0x1;
  },
  'addToQueue': function (_0x329036, _0x574ac5) {
    return ('string' === typeof _0x329036 || 'number' === typeof _0x329036) && void 0x0 !== this.__players[_0x574ac5] ? (this.__queue.push({
      'pointer': _0x329036,
      'origin': _0x574ac5
    }), !0x0) : !0x1;
  }
}, function () {
  var _0x4c4b12 = function () {
    this.init();
  };
  _0x4c4b12.prototype = {
    'init': function () {
      var _0x59cd4b = this || _0x35baa6;
      return _0x59cd4b._counter = 0x3e8, _0x59cd4b._html5AudioPool = [], _0x59cd4b.html5PoolSize = 0xa, _0x59cd4b._codecs = {}, _0x59cd4b._howls = [], _0x59cd4b._muted = !0x1, _0x59cd4b._volume = 0x1, _0x59cd4b._canPlayEvent = 'canplaythrough', _0x59cd4b._navigator = 'undefined' !== typeof window && window.navigator ? window.navigator : null, _0x59cd4b.masterGain = null, _0x59cd4b.noAudio = !0x1, _0x59cd4b.usingWebAudio = !0x0, _0x59cd4b.autoSuspend = !0x1, _0x59cd4b.ctx = null, _0x59cd4b.autoUnlock = !0x0, _0x59cd4b._setup(), _0x59cd4b;
    },
    'volume': function (_0x3293eb) {
      var _0x487375 = this || _0x35baa6;
      _0x3293eb = parseFloat(_0x3293eb), _0x487375.ctx || _0x2719f4();
      if ('undefined' !== typeof _0x3293eb && 0x0 <= _0x3293eb && 0x1 >= _0x3293eb) {
        _0x487375._volume = _0x3293eb;
        if (_0x487375._muted) return _0x487375;
        _0x487375.usingWebAudio && _0x487375.masterGain.gain.setValueAtTime(_0x3293eb, _0x35baa6.ctx.currentTime);
        for (var _0x54a11e = 0x0; _0x54a11e < _0x487375._howls.length; _0x54a11e++) if (!_0x487375._howls[_0x54a11e]._webAudio) for (var _0x4231c2 = _0x487375._howls[_0x54a11e]._getSoundIds(), _0x2e7ec9 = 0x0; _0x2e7ec9 < _0x4231c2.length; _0x2e7ec9++) {
          var _0x1ed584 = _0x487375._howls[_0x54a11e]._soundById(_0x4231c2[_0x2e7ec9]);
          _0x1ed584 && _0x1ed584._node && (_0x1ed584._node.volume = _0x1ed584._volume * _0x3293eb);
        }
        return _0x487375;
      }
      return _0x487375._volume;
    },
    'mute': function (_0x2857f3) {
      var _0x34f01 = this || _0x35baa6;
      _0x34f01.ctx || _0x2719f4(), _0x34f01._muted = _0x2857f3, _0x34f01.usingWebAudio && _0x34f01.masterGain.gain.setValueAtTime(_0x2857f3 ? 0x0 : _0x34f01._volume, _0x35baa6.ctx.currentTime);
      for (var _0x2b134f = 0x0; _0x2b134f < _0x34f01._howls.length; _0x2b134f++) if (!_0x34f01._howls[_0x2b134f]._webAudio) for (var _0x2f091f = _0x34f01._howls[_0x2b134f]._getSoundIds(), _0x3c7550 = 0x0; _0x3c7550 < _0x2f091f.length; _0x3c7550++) {
        var _0x2a55ea = _0x34f01._howls[_0x2b134f]._soundById(_0x2f091f[_0x3c7550]);
        _0x2a55ea && _0x2a55ea._node && (_0x2a55ea._node.muted = _0x2857f3 ? !0x0 : _0x2a55ea._muted);
      }
      return _0x34f01;
    },
    'stop': function () {
      for (var _0x1afcde = this || _0x35baa6, _0x50a20f = 0x0; _0x50a20f < _0x1afcde._howls.length; _0x50a20f++) _0x1afcde._howls[_0x50a20f].stop();
      return _0x1afcde;
    },
    'unload': function () {
      for (var _0x14b6e6 = this || _0x35baa6, _0x3d7998 = _0x14b6e6._howls.length - 0x1; 0x0 <= _0x3d7998; _0x3d7998--) _0x14b6e6._howls[_0x3d7998].unload();
      return _0x14b6e6.usingWebAudio && _0x14b6e6.ctx && 'undefined' !== typeof _0x14b6e6.ctx.close && (_0x14b6e6.ctx.close(), _0x14b6e6.ctx = null, _0x2719f4()), _0x14b6e6;
    },
    'codecs': function (_0x1b269a) {
      return (this || _0x35baa6)._codecs[_0x1b269a.replace(/^x-/, '')];
    },
    '_setup': function () {
      var _0x1bc859 = this || _0x35baa6;
      _0x1bc859.state = _0x1bc859.ctx ? _0x1bc859.ctx.state || 'suspended' : 'suspended', _0x1bc859._autoSuspend();
      if (!_0x1bc859.usingWebAudio) {
        if ('undefined' !== typeof Audio) try {
          var _0x1540fd = new Audio();
          'undefined' === typeof _0x1540fd.oncanplaythrough && (_0x1bc859._canPlayEvent = 'canplay');
        } catch (_0x3c18a) {
          _0x1bc859.noAudio = !0x0;
        } else _0x1bc859.noAudio = !0x0;
      }
      try {
        _0x1540fd = new Audio(), _0x1540fd.muted && (_0x1bc859.noAudio = !0x0);
      } catch (_0x4beaeb) {}
      return _0x1bc859.noAudio || _0x1bc859._setupCodecs(), _0x1bc859;
    },
    '_setupCodecs': function () {
      var _0x111be5 = this || _0x35baa6,
        _0x3d1772 = null;
      try {
        _0x3d1772 = 'undefined' !== typeof Audio ? new Audio() : null;
      } catch (_0x4fa9d1) {
        return _0x111be5;
      }
      if (!_0x3d1772 || 'function' !== typeof _0x3d1772.canPlayType) return _0x111be5;
      var _0x6d669b = _0x3d1772.canPlayType('audio/mpeg;').replace(/^no$/, ''),
        _0x380e48 = _0x111be5._navigator && _0x111be5._navigator.userAgent.match(/OPR\/([0-6].)/g),
        _0x380e48 = _0x380e48 && 0x21 > parseInt(_0x380e48[0x0].split('/')[0x1], 0xa);
      return _0x111be5._codecs = {
        'mp3': !(_0x380e48 || !_0x6d669b && !_0x3d1772.canPlayType('audio/mp3;').replace(/^no$/, '')),
        'mpeg': !!_0x6d669b,
        'opus': !!_0x3d1772.canPlayType("audio/ogg; codecs=\"opus\"").replace(/^no$/, ''),
        'ogg': !!_0x3d1772.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ''),
        'oga': !!_0x3d1772.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ''),
        'wav': !!_0x3d1772.canPlayType("audio/wav; codecs=\"1\"").replace(/^no$/, ''),
        'aac': !!_0x3d1772.canPlayType('audio/aac;').replace(/^no$/, ''),
        'caf': !!_0x3d1772.canPlayType('audio/x-caf;').replace(/^no$/, ''),
        'm4a': !!(_0x3d1772.canPlayType('audio/x-m4a;') || _0x3d1772.canPlayType('audio/m4a;') || _0x3d1772.canPlayType('audio/aac;')).replace(/^no$/, ''),
        'm4b': !!(_0x3d1772.canPlayType('audio/x-m4b;') || _0x3d1772.canPlayType('audio/m4b;') || _0x3d1772.canPlayType('audio/aac;')).replace(/^no$/, ''),
        'mp4': !!(_0x3d1772.canPlayType('audio/x-mp4;') || _0x3d1772.canPlayType('audio/mp4;') || _0x3d1772.canPlayType('audio/aac;')).replace(/^no$/, ''),
        'weba': !!_0x3d1772.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ''),
        'webm': !!_0x3d1772.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ''),
        'dolby': !!_0x3d1772.canPlayType("audio/mp4; codecs=\"ec-3\"").replace(/^no$/, ''),
        'flac': !!(_0x3d1772.canPlayType('audio/x-flac;') || _0x3d1772.canPlayType('audio/flac;')).replace(/^no$/, '')
      }, _0x111be5;
    },
    '_unlockAudio': function () {
      var _0x30cac2 = this || _0x35baa6;
      if (!_0x30cac2._audioUnlocked && _0x30cac2.ctx) {
        _0x30cac2._audioUnlocked = !0x1, _0x30cac2.autoUnlock = !0x1, !_0x30cac2._mobileUnloaded && 0xac44 !== _0x30cac2.ctx.sampleRate && (_0x30cac2._mobileUnloaded = !0x0, _0x30cac2.unload()), _0x30cac2._scratchBuffer = _0x30cac2.ctx.createBuffer(0x1, 0x1, 0x5622);
        var _0x25c6ae = function () {
          for (; _0x30cac2._html5AudioPool.length < _0x30cac2.html5PoolSize;) try {
            var _0x297d78 = new Audio();
            _0x297d78._unlocked = !0x0, _0x30cac2._releaseHtml5Audio(_0x297d78);
          } catch (_0x8699c1) {
            _0x30cac2.noAudio = !0x0;
            break;
          }
          for (_0x297d78 = 0x0; _0x297d78 < _0x30cac2._howls.length; _0x297d78++) if (!_0x30cac2._howls[_0x297d78]._webAudio) for (var _0x33d64e = _0x30cac2._howls[_0x297d78]._getSoundIds(), _0x5e9e07 = 0x0; _0x5e9e07 < _0x33d64e.length; _0x5e9e07++) {
            var _0xbc1b83 = _0x30cac2._howls[_0x297d78]._soundById(_0x33d64e[_0x5e9e07]);
            _0xbc1b83 && _0xbc1b83._node && !_0xbc1b83._node._unlocked && (_0xbc1b83._node._unlocked = !0x0, _0xbc1b83._node.load());
          }
          _0x30cac2._autoResume();
          var _0x11b9d0 = _0x30cac2.ctx.createBufferSource();
          _0x11b9d0.buffer = _0x30cac2._scratchBuffer, _0x11b9d0.connect(_0x30cac2.ctx.destination), 'undefined' === typeof _0x11b9d0.start ? _0x11b9d0.noteOn(0x0) : _0x11b9d0.start(0x0), 'function' === typeof _0x30cac2.ctx.resume && _0x30cac2.ctx.resume(), _0x11b9d0.onended = function () {
            _0x11b9d0.disconnect(0x0), _0x30cac2._audioUnlocked = !0x0, document.removeEventListener('touchstart', _0x25c6ae, !0x0), document.removeEventListener('touchend', _0x25c6ae, !0x0), document.removeEventListener('click', _0x25c6ae, !0x0);
            for (var _0x93619a = 0x0; _0x93619a < _0x30cac2._howls.length; _0x93619a++) _0x30cac2._howls[_0x93619a]._emit('unlock');
          };
        };
        return document.addEventListener('touchstart', _0x25c6ae, !0x0), document.addEventListener('touchend', _0x25c6ae, !0x0), document.addEventListener('click', _0x25c6ae, !0x0), _0x30cac2;
      }
    },
    '_obtainHtml5Audio': function () {
      var _0x1d54e2 = this || _0x35baa6;
      if (_0x1d54e2._html5AudioPool.length) return _0x1d54e2._html5AudioPool.pop();
      return (_0x1d54e2 = new Audio().play()) && 'undefined' !== typeof Promise && (_0x1d54e2 instanceof Promise || 'function' === typeof _0x1d54e2.then) && _0x1d54e2['catch'](function () {
        console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
      }), new Audio();
    },
    '_releaseHtml5Audio': function (_0x493ece) {
      var _0xf0ff0f = this || _0x35baa6;
      return _0x493ece._unlocked && _0xf0ff0f._html5AudioPool.push(_0x493ece), _0xf0ff0f;
    },
    '_autoSuspend': function () {
      var _0x993258 = this;
      if (_0x993258.autoSuspend && _0x993258.ctx && 'undefined' !== typeof _0x993258.ctx.suspend && _0x35baa6.usingWebAudio) {
        for (var _0xa7625 = 0x0; _0xa7625 < _0x993258._howls.length; _0xa7625++) if (_0x993258._howls[_0xa7625]._webAudio) {
          for (var _0x140e7b = 0x0; _0x140e7b < _0x993258._howls[_0xa7625]._sounds.length; _0x140e7b++) if (!_0x993258._howls[_0xa7625]._sounds[_0x140e7b]._paused) return _0x993258;
        }
        return _0x993258._suspendTimer && clearTimeout(_0x993258._suspendTimer), _0x993258._suspendTimer = setTimeout(function () {
          if (_0x993258.autoSuspend) {
            _0x993258._suspendTimer = null, _0x993258.state = 'suspending';
            var _0x206ac5 = function () {
              _0x993258.state = 'suspended', _0x993258._resumeAfterSuspend && (delete _0x993258._resumeAfterSuspend, _0x993258._autoResume());
            };
            _0x993258.ctx.suspend().then(_0x206ac5, _0x206ac5);
          }
        }, 0x7530), _0x993258;
      }
    },
    '_autoResume': function () {
      var _0x2bc368 = this;
      if (_0x2bc368.ctx && 'undefined' !== typeof _0x2bc368.ctx.resume && _0x35baa6.usingWebAudio) return 'running' === _0x2bc368.state && 'interrupted' !== _0x2bc368.ctx.state && _0x2bc368._suspendTimer ? (clearTimeout(_0x2bc368._suspendTimer), _0x2bc368._suspendTimer = null) : 'suspended' === _0x2bc368.state || 'running' === _0x2bc368.state && 'interrupted' === _0x2bc368.ctx.state ? (_0x2bc368.ctx.resume().then(function () {
        _0x2bc368.state = 'running';
        for (var _0x44e17f = 0x0; _0x44e17f < _0x2bc368._howls.length; _0x44e17f++) _0x2bc368._howls[_0x44e17f]._emit('resume');
      }), _0x2bc368._suspendTimer && (clearTimeout(_0x2bc368._suspendTimer), _0x2bc368._suspendTimer = null)) : 'suspending' === _0x2bc368.state && (_0x2bc368._resumeAfterSuspend = !0x0), _0x2bc368;
    }
  };
  var _0x35baa6 = new _0x4c4b12(),
    _0x53b0b8 = function (_0x47e4a6) {
      !_0x47e4a6.src || 0x0 === _0x47e4a6.src.length ? console.error("An array of source files must be passed with any new Howl.") : this.init(_0x47e4a6);
    };
  _0x53b0b8.prototype = {
    'init': function (_0x496cdf) {
      var _0x45d745 = this;
      return _0x35baa6.ctx || _0x2719f4(), _0x45d745._autoplay = _0x496cdf.autoplay || !0x1, _0x45d745._format = 'string' !== typeof _0x496cdf.format ? _0x496cdf.format : [_0x496cdf.format], _0x45d745._html5 = _0x496cdf.html5 || !0x1, _0x45d745._muted = _0x496cdf.mute || !0x1, _0x45d745._loop = _0x496cdf.loop || !0x1, _0x45d745._pool = _0x496cdf.pool || 0x5, _0x45d745._preload = 'boolean' === typeof _0x496cdf.preload || 'metadata' === _0x496cdf.preload ? _0x496cdf.preload : !0x0, _0x45d745._rate = _0x496cdf.rate || 0x1, _0x45d745._sprite = _0x496cdf.sprite || {}, _0x45d745._src = 'string' !== typeof _0x496cdf.src ? _0x496cdf.src : [_0x496cdf.src], _0x45d745._volume = void 0x0 !== _0x496cdf.volume ? _0x496cdf.volume : 0x1, _0x45d745._xhr = {
        'method': _0x496cdf.xhr && _0x496cdf.xhr.method ? _0x496cdf.xhr.method : 'GET',
        'headers': _0x496cdf.xhr && _0x496cdf.xhr.headers ? _0x496cdf.xhr.headers : null,
        'withCredentials': _0x496cdf.xhr && _0x496cdf.xhr.withCredentials ? _0x496cdf.xhr.withCredentials : !0x1
      }, _0x45d745._duration = 0x0, _0x45d745._state = 'unloaded', _0x45d745._sounds = [], _0x45d745._endTimers = {}, _0x45d745._queue = [], _0x45d745._playLock = !0x1, _0x45d745._onend = _0x496cdf.onend ? [{
        'fn': _0x496cdf.onend
      }] : [], _0x45d745._onfade = _0x496cdf.onfade ? [{
        'fn': _0x496cdf.onfade
      }] : [], _0x45d745._onload = _0x496cdf.onload ? [{
        'fn': _0x496cdf.onload
      }] : [], _0x45d745._onloaderror = _0x496cdf.onloaderror ? [{
        'fn': _0x496cdf.onloaderror
      }] : [], _0x45d745._onplayerror = _0x496cdf.onplayerror ? [{
        'fn': _0x496cdf.onplayerror
      }] : [], _0x45d745._onpause = _0x496cdf.onpause ? [{
        'fn': _0x496cdf.onpause
      }] : [], _0x45d745._onplay = _0x496cdf.onplay ? [{
        'fn': _0x496cdf.onplay
      }] : [], _0x45d745._onstop = _0x496cdf.onstop ? [{
        'fn': _0x496cdf.onstop
      }] : [], _0x45d745._onmute = _0x496cdf.onmute ? [{
        'fn': _0x496cdf.onmute
      }] : [], _0x45d745._onvolume = _0x496cdf.onvolume ? [{
        'fn': _0x496cdf.onvolume
      }] : [], _0x45d745._onrate = _0x496cdf.onrate ? [{
        'fn': _0x496cdf.onrate
      }] : [], _0x45d745._onseek = _0x496cdf.onseek ? [{
        'fn': _0x496cdf.onseek
      }] : [], _0x45d745._onunlock = _0x496cdf.onunlock ? [{
        'fn': _0x496cdf.onunlock
      }] : [], _0x45d745._onresume = [], _0x45d745._webAudio = _0x35baa6.usingWebAudio && !_0x45d745._html5, 'undefined' !== typeof _0x35baa6.ctx && _0x35baa6.ctx && _0x35baa6.autoUnlock && _0x35baa6._unlockAudio(), _0x35baa6._howls.push(_0x45d745), _0x45d745._autoplay && _0x45d745._queue.push({
        'event': 'play',
        'action': function () {
          _0x45d745.play();
        }
      }), _0x45d745._preload && 'none' !== _0x45d745._preload && _0x45d745.load(), _0x45d745;
    },
    'load': function () {
      var _0x4474b4 = null;
      if (_0x35baa6.noAudio) this._emit('loaderror', null, "No audio support.");else {
        'string' === typeof this._src && (this._src = [this._src]);
        for (var _0xdaaa4f = 0x0; _0xdaaa4f < this._src.length; _0xdaaa4f++) {
          var _0x274656, _0x2fab70;
          if (this._format && this._format[_0xdaaa4f]) _0x274656 = this._format[_0xdaaa4f];else {
            _0x2fab70 = this._src[_0xdaaa4f];
            if ('string' !== typeof _0x2fab70) {
              this._emit('loaderror', null, "Non-string found in selected audio sources - ignoring.");
              continue;
            }
            (_0x274656 = /^data:audio\/([^;,]+);/i.exec(_0x2fab70)) || (_0x274656 = /\.([^.]+)$/.exec(_0x2fab70.split('?', 0x1)[0x0])), _0x274656 && (_0x274656 = _0x274656[0x1].toLowerCase());
          }
          _0x274656 || console.warn("No file extension was found. Consider using the \"format\" property or specify an extension.");
          if (_0x274656 && _0x35baa6.codecs(_0x274656)) {
            _0x4474b4 = this._src[_0xdaaa4f];
            break;
          }
        }
        if (_0x4474b4) {
          this._src = _0x4474b4, this._state = 'loading', 'https:' === window.location.protocol && 'http:' === _0x4474b4.slice(0x0, 0x5) && (this._html5 = !0x0, this._webAudio = !0x1), new _0x334756(this);
          if (this._webAudio) {
            var _0x1418e4 = this,
              _0x5c2505 = _0x1418e4._src;
            if (_0x3ac9cf[_0x5c2505]) _0x1418e4._duration = _0x3ac9cf[_0x5c2505].duration, _0x1b1d6f(_0x1418e4);else {
              if (/^data:[^;]+;base64,/.test(_0x5c2505)) {
                _0x4474b4 = atob(_0x5c2505.split(',')[0x1]), _0xdaaa4f = new Uint8Array(_0x4474b4.length);
                for (_0x274656 = 0x0; _0x274656 < _0x4474b4.length; ++_0x274656) _0xdaaa4f[_0x274656] = _0x4474b4.charCodeAt(_0x274656);
                _0x46b16d(_0xdaaa4f.buffer, _0x1418e4);
              } else {
                var _0x602b4c = new XMLHttpRequest();
                _0x602b4c.open(_0x1418e4._xhr.method, _0x5c2505, !0x0), _0x602b4c.withCredentials = _0x1418e4._xhr.withCredentials, _0x602b4c.responseType = 'arraybuffer', _0x1418e4._xhr.headers && Object.keys(_0x1418e4._xhr.headers).forEach(function (_0x597f9d) {
                  _0x602b4c.setRequestHeader(_0x597f9d, _0x1418e4._xhr.headers[_0x597f9d]);
                }), _0x602b4c.onload = function () {
                  var _0x396566 = (_0x602b4c.status + '')[0x0];
                  '0' !== _0x396566 && '2' !== _0x396566 && '3' !== _0x396566 ? _0x1418e4._emit('loaderror', null, "Failed loading audio file with status: " + _0x602b4c.status + '.') : _0x46b16d(_0x602b4c.response, _0x1418e4);
                }, _0x602b4c.onerror = function () {
                  _0x1418e4._webAudio && (_0x1418e4._html5 = !0x0, _0x1418e4._webAudio = !0x1, _0x1418e4._sounds = [], delete _0x3ac9cf[_0x5c2505], _0x1418e4.load());
                };
                try {
                  _0x602b4c.send();
                } catch (_0xf1f18f) {
                  _0x602b4c.onerror();
                }
              }
            }
          }
          return this;
        }
        this._emit('loaderror', null, "No codec support for selected audio sources.");
      }
    },
    'play': function (_0x372ec2, _0x297d29) {
      var _0x1364f2 = this,
        _0x480729 = null;
      if ('number' === typeof _0x372ec2) _0x480729 = _0x372ec2, _0x372ec2 = null;else {
        if ('string' === typeof _0x372ec2 && 'loaded' === _0x1364f2._state && !_0x1364f2._sprite[_0x372ec2]) return null;
        if ('undefined' === typeof _0x372ec2 && (_0x372ec2 = '__default', !_0x1364f2._playLock)) {
          for (var _0x18d55b = 0x0, _0x174c37 = 0x0; _0x174c37 < _0x1364f2._sounds.length; _0x174c37++) _0x1364f2._sounds[_0x174c37]._paused && !_0x1364f2._sounds[_0x174c37]._ended && (_0x18d55b++, _0x480729 = _0x1364f2._sounds[_0x174c37]._id);
          0x1 === _0x18d55b ? _0x372ec2 = null : _0x480729 = null;
        }
      }
      var _0x56f002 = _0x480729 ? _0x1364f2._soundById(_0x480729) : _0x1364f2._inactiveSound();
      if (!_0x56f002) return null;
      _0x480729 && !_0x372ec2 && (_0x372ec2 = _0x56f002._sprite || '__default');
      if ('loaded' !== _0x1364f2._state) {
        _0x56f002._sprite = _0x372ec2, _0x56f002._ended = !0x1;
        var _0x28673e = _0x56f002._id;
        return _0x1364f2._queue.push({
          'event': 'play',
          'action': function () {
            _0x1364f2.play(_0x28673e);
          }
        }), _0x28673e;
      }
      if (_0x480729 && !_0x56f002._paused) return _0x297d29 || _0x1364f2._loadQueue('play'), _0x56f002._id;
      _0x1364f2._webAudio && _0x35baa6._autoResume();
      var _0x554c2c = Math.max(0x0, 0x0 < _0x56f002._seek ? _0x56f002._seek : _0x1364f2._sprite[_0x372ec2][0x0] / 0x3e8),
        _0x41c116 = Math.max(0x0, (_0x1364f2._sprite[_0x372ec2][0x0] + _0x1364f2._sprite[_0x372ec2][0x1]) / 0x3e8 - _0x554c2c),
        _0xc78472 = 0x3e8 * _0x41c116 / Math.abs(_0x56f002._rate),
        _0x4b83d6 = _0x1364f2._sprite[_0x372ec2][0x0] / 0x3e8,
        _0x40df0e = (_0x1364f2._sprite[_0x372ec2][0x0] + _0x1364f2._sprite[_0x372ec2][0x1]) / 0x3e8;
      _0x56f002._sprite = _0x372ec2, _0x56f002._ended = !0x1;
      var _0x453a4f = function () {
        _0x56f002._paused = !0x1, _0x56f002._seek = _0x554c2c, _0x56f002._start = _0x4b83d6, _0x56f002._stop = _0x40df0e, _0x56f002._loop = !(!_0x56f002._loop && !_0x1364f2._sprite[_0x372ec2][0x2]);
      };
      if (_0x554c2c >= _0x40df0e) _0x1364f2._ended(_0x56f002);else {
        var _0x2c018f = _0x56f002._node;
        if (_0x1364f2._webAudio) _0x480729 = function () {
          _0x1364f2._playLock = !0x1, _0x453a4f(), _0x1364f2._refreshBuffer(_0x56f002), _0x2c018f.gain.setValueAtTime(_0x56f002._muted || _0x1364f2._muted ? 0x0 : _0x56f002._volume, _0x35baa6.ctx.currentTime), _0x56f002._playStart = _0x35baa6.ctx.currentTime, 'undefined' === typeof _0x2c018f.bufferSource.start ? _0x56f002._loop ? _0x2c018f.bufferSource.noteGrainOn(0x0, _0x554c2c, 0x15180) : _0x2c018f.bufferSource.noteGrainOn(0x0, _0x554c2c, _0x41c116) : _0x56f002._loop ? _0x2c018f.bufferSource.start(0x0, _0x554c2c, 0x15180) : _0x2c018f.bufferSource.start(0x0, _0x554c2c, _0x41c116), Infinity !== _0xc78472 && (_0x1364f2._endTimers[_0x56f002._id] = setTimeout(_0x1364f2._ended.bind(_0x1364f2, _0x56f002), _0xc78472)), _0x297d29 || setTimeout(function () {
            _0x1364f2._emit('play', _0x56f002._id), _0x1364f2._loadQueue();
          }, 0x0);
        }, 'running' === _0x35baa6.state && 'interrupted' !== _0x35baa6.ctx.state ? _0x480729() : (_0x1364f2._playLock = !0x0, _0x1364f2.once('resume', _0x480729), _0x1364f2._clearTimer(_0x56f002._id));else {
          var _0x2f21b4 = function () {
            _0x2c018f.currentTime = _0x554c2c, _0x2c018f.muted = _0x56f002._muted || _0x1364f2._muted || _0x35baa6._muted || _0x2c018f.muted, _0x2c018f.volume = _0x56f002._volume * _0x35baa6.volume(), _0x2c018f.playbackRate = _0x56f002._rate;
            try {
              var _0x27cafe = _0x2c018f.play();
              _0x27cafe && 'undefined' !== typeof Promise && (_0x27cafe instanceof Promise || 'function' === typeof _0x27cafe.then) ? (_0x1364f2._playLock = !0x0, _0x453a4f(), _0x27cafe.then(function () {
                _0x1364f2._playLock = !0x1, _0x2c018f._unlocked = !0x0, _0x297d29 || (_0x1364f2._emit('play', _0x56f002._id), _0x1364f2._loadQueue());
              })['catch'](function () {
                _0x1364f2._playLock = !0x1, _0x1364f2._emit('playerror', _0x56f002._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), _0x56f002._ended = !0x0, _0x56f002._paused = !0x0;
              })) : _0x297d29 || (_0x1364f2._playLock = !0x1, _0x453a4f(), _0x1364f2._emit('play', _0x56f002._id), _0x1364f2._loadQueue()), _0x2c018f.playbackRate = _0x56f002._rate, _0x2c018f.paused ? _0x1364f2._emit('playerror', _0x56f002._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.") : '__default' !== _0x372ec2 || _0x56f002._loop ? _0x1364f2._endTimers[_0x56f002._id] = setTimeout(_0x1364f2._ended.bind(_0x1364f2, _0x56f002), _0xc78472) : (_0x1364f2._endTimers[_0x56f002._id] = function () {
                _0x1364f2._ended(_0x56f002), _0x2c018f.removeEventListener('ended', _0x1364f2._endTimers[_0x56f002._id], !0x1);
              }, _0x2c018f.addEventListener('ended', _0x1364f2._endTimers[_0x56f002._id], !0x1));
            } catch (_0x5e5221) {
              _0x1364f2._emit('playerror', _0x56f002._id, _0x5e5221);
            }
          };
          'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA' === _0x2c018f.src && (_0x2c018f.src = _0x1364f2._src, _0x2c018f.load()), _0x480729 = window && window.ejecta || !_0x2c018f.readyState && _0x35baa6._navigator.isCocoonJS;
          if (0x3 <= _0x2c018f.readyState || _0x480729) _0x2f21b4();else {
            _0x1364f2._playLock = !0x0;
            var _0x4ff2fe = function () {
              _0x2f21b4(), _0x2c018f.removeEventListener(_0x35baa6._canPlayEvent, _0x4ff2fe, !0x1);
            };
            _0x2c018f.addEventListener(_0x35baa6._canPlayEvent, _0x4ff2fe, !0x1), _0x1364f2._clearTimer(_0x56f002._id);
          }
        }
        return _0x56f002._id;
      }
    },
    'pause': function (_0x5dd8b3, _0x534a32) {
      var _0x5932e6 = this;
      if ('loaded' !== _0x5932e6._state || _0x5932e6._playLock) return _0x5932e6._queue.push({
        'event': 'pause',
        'action': function () {
          _0x5932e6.pause(_0x5dd8b3);
        }
      }), _0x5932e6;
      for (var _0x488938 = _0x5932e6._getSoundIds(_0x5dd8b3), _0x165e55 = 0x0; _0x165e55 < _0x488938.length; _0x165e55++) {
        _0x5932e6._clearTimer(_0x488938[_0x165e55]);
        var _0x1ea40b = _0x5932e6._soundById(_0x488938[_0x165e55]);
        if (_0x1ea40b && !_0x1ea40b._paused && (_0x1ea40b._seek = _0x5932e6.seek(_0x488938[_0x165e55]), _0x1ea40b._rateSeek = 0x0, _0x1ea40b._paused = !0x0, _0x5932e6._stopFade(_0x488938[_0x165e55]), _0x1ea40b._node)) {
          if (_0x5932e6._webAudio) {
            if (!_0x1ea40b._node.bufferSource) continue;
            'undefined' === typeof _0x1ea40b._node.bufferSource.stop ? _0x1ea40b._node.bufferSource.noteOff(0x0) : _0x1ea40b._node.bufferSource.stop(0x0), _0x5932e6._cleanBuffer(_0x1ea40b._node);
          } else (!isNaN(_0x1ea40b._node.duration) || Infinity === _0x1ea40b._node.duration) && _0x1ea40b._node.pause();
        }
        _0x534a32 || _0x5932e6._emit('pause', _0x1ea40b ? _0x1ea40b._id : null);
      }
      return _0x5932e6;
    },
    'stop': function (_0x25f5fa, _0xede8e0) {
      var _0x48c514 = this;
      if ('loaded' !== _0x48c514._state || _0x48c514._playLock) return _0x48c514._queue.push({
        'event': 'stop',
        'action': function () {
          _0x48c514.stop(_0x25f5fa);
        }
      }), _0x48c514;
      for (var _0x118efc = _0x48c514._getSoundIds(_0x25f5fa), _0x1c7970 = 0x0; _0x1c7970 < _0x118efc.length; _0x1c7970++) {
        _0x48c514._clearTimer(_0x118efc[_0x1c7970]);
        var _0x1200d4 = _0x48c514._soundById(_0x118efc[_0x1c7970]);
        if (_0x1200d4) {
          _0x1200d4._seek = _0x1200d4._start || 0x0, _0x1200d4._rateSeek = 0x0, _0x1200d4._paused = !0x0, _0x1200d4._ended = !0x0, _0x48c514._stopFade(_0x118efc[_0x1c7970]);
          if (_0x1200d4._node) {
            if (_0x48c514._webAudio) _0x1200d4._node.bufferSource && ('undefined' === typeof _0x1200d4._node.bufferSource.stop ? _0x1200d4._node.bufferSource.noteOff(0x0) : _0x1200d4._node.bufferSource.stop(0x0), _0x48c514._cleanBuffer(_0x1200d4._node));else {
              if (!isNaN(_0x1200d4._node.duration) || Infinity === _0x1200d4._node.duration) _0x1200d4._node.currentTime = _0x1200d4._start || 0x0, _0x1200d4._node.pause(), Infinity === _0x1200d4._node.duration && _0x48c514._clearSound(_0x1200d4._node);
            }
          }
          _0xede8e0 || _0x48c514._emit('stop', _0x1200d4._id);
        }
      }
      return _0x48c514;
    },
    'mute': function (_0x2e47fa, _0x3be519) {
      var _0x314a42 = this;
      if ('loaded' !== _0x314a42._state || _0x314a42._playLock) return _0x314a42._queue.push({
        'event': 'mute',
        'action': function () {
          _0x314a42.mute(_0x2e47fa, _0x3be519);
        }
      }), _0x314a42;
      if ('undefined' === typeof _0x3be519) {
        if ('boolean' === typeof _0x2e47fa) _0x314a42._muted = _0x2e47fa;else return _0x314a42._muted;
      }
      for (var _0x42eb67 = _0x314a42._getSoundIds(_0x3be519), _0x22cd79 = 0x0; _0x22cd79 < _0x42eb67.length; _0x22cd79++) {
        var _0x8a26fc = _0x314a42._soundById(_0x42eb67[_0x22cd79]);
        _0x8a26fc && (_0x8a26fc._muted = _0x2e47fa, _0x8a26fc._interval && _0x314a42._stopFade(_0x8a26fc._id), _0x314a42._webAudio && _0x8a26fc._node ? _0x8a26fc._node.gain.setValueAtTime(_0x2e47fa ? 0x0 : _0x8a26fc._volume, _0x35baa6.ctx.currentTime) : _0x8a26fc._node && (_0x8a26fc._node.muted = _0x35baa6._muted ? !0x0 : _0x2e47fa), _0x314a42._emit('mute', _0x8a26fc._id));
      }
      return _0x314a42;
    },
    'volume': function () {
      var _0x2f2da1 = this,
        _0x44d97c = arguments,
        _0x52a816,
        _0x5fb6c7;
      if (0x0 === _0x44d97c.length) return _0x2f2da1._volume;
      0x1 === _0x44d97c.length || 0x2 === _0x44d97c.length && 'undefined' === typeof _0x44d97c[0x1] ? 0x0 <= _0x2f2da1._getSoundIds().indexOf(_0x44d97c[0x0]) ? _0x5fb6c7 = parseInt(_0x44d97c[0x0], 0xa) : _0x52a816 = parseFloat(_0x44d97c[0x0]) : 0x2 <= _0x44d97c.length && (_0x52a816 = parseFloat(_0x44d97c[0x0]), _0x5fb6c7 = parseInt(_0x44d97c[0x1], 0xa));
      var _0x589ec1;
      if ('undefined' !== typeof _0x52a816 && 0x0 <= _0x52a816 && 0x1 >= _0x52a816) {
        if ('loaded' !== _0x2f2da1._state || _0x2f2da1._playLock) return _0x2f2da1._queue.push({
          'event': 'volume',
          'action': function () {
            _0x2f2da1.volume.apply(_0x2f2da1, _0x44d97c);
          }
        }), _0x2f2da1;
        'undefined' === typeof _0x5fb6c7 && (_0x2f2da1._volume = _0x52a816), _0x5fb6c7 = _0x2f2da1._getSoundIds(_0x5fb6c7);
        for (var _0x1effc0 = 0x0; _0x1effc0 < _0x5fb6c7.length; _0x1effc0++) if (_0x589ec1 = _0x2f2da1._soundById(_0x5fb6c7[_0x1effc0])) _0x589ec1._volume = _0x52a816, _0x44d97c[0x2] || _0x2f2da1._stopFade(_0x5fb6c7[_0x1effc0]), _0x2f2da1._webAudio && _0x589ec1._node && !_0x589ec1._muted ? _0x589ec1._node.gain.setValueAtTime(_0x52a816, _0x35baa6.ctx.currentTime) : _0x589ec1._node && !_0x589ec1._muted && (_0x589ec1._node.volume = _0x52a816 * _0x35baa6.volume()), _0x2f2da1._emit('volume', _0x589ec1._id);
      } else return (_0x589ec1 = _0x5fb6c7 ? _0x2f2da1._soundById(_0x5fb6c7) : _0x2f2da1._sounds[0x0]) ? _0x589ec1._volume : 0x0;
      return _0x2f2da1;
    },
    'fade': function (_0x57cb14, _0x20249a, _0x5e4a23, _0x5c68a8) {
      var _0x3f3ec6 = this;
      if ('loaded' !== _0x3f3ec6._state || _0x3f3ec6._playLock) return _0x3f3ec6._queue.push({
        'event': 'fade',
        'action': function () {
          _0x3f3ec6.fade(_0x57cb14, _0x20249a, _0x5e4a23, _0x5c68a8);
        }
      }), _0x3f3ec6;
      _0x57cb14 = Math.min(Math.max(0x0, parseFloat(_0x57cb14)), 0x1), _0x20249a = Math.min(Math.max(0x0, parseFloat(_0x20249a)), 0x1), _0x5e4a23 = parseFloat(_0x5e4a23), _0x3f3ec6.volume(_0x57cb14, _0x5c68a8);
      for (var _0x491540 = _0x3f3ec6._getSoundIds(_0x5c68a8), _0x111164 = 0x0; _0x111164 < _0x491540.length; _0x111164++) {
        var _0x5645f0 = _0x3f3ec6._soundById(_0x491540[_0x111164]);
        if (_0x5645f0) {
          _0x5c68a8 || _0x3f3ec6._stopFade(_0x491540[_0x111164]);
          if (_0x3f3ec6._webAudio && !_0x5645f0._muted) {
            var _0x367f4a = _0x35baa6.ctx.currentTime,
              _0x3994bf = _0x367f4a + _0x5e4a23 / 0x3e8;
            _0x5645f0._volume = _0x57cb14, _0x5645f0._node.gain.setValueAtTime(_0x57cb14, _0x367f4a), _0x5645f0._node.gain.linearRampToValueAtTime(_0x20249a, _0x3994bf);
          }
          _0x3f3ec6._startFadeInterval(_0x5645f0, _0x57cb14, _0x20249a, _0x5e4a23, _0x491540[_0x111164], 'undefined' === typeof _0x5c68a8);
        }
      }
      return _0x3f3ec6;
    },
    '_startFadeInterval': function (_0x599726, _0x47f206, _0xef39d3, _0x37cf04, _0x149d86, _0x410c2b) {
      var _0x2aee4a = this,
        _0x234d1e = _0x47f206,
        _0x51ffc1 = _0xef39d3 - _0x47f206;
      _0x149d86 = Math.abs(_0x51ffc1 / 0.01), _0x149d86 = Math.max(0x4, 0x0 < _0x149d86 ? _0x37cf04 / _0x149d86 : _0x37cf04);
      var _0x2e5185 = Date.now();
      _0x599726._fadeTo = _0xef39d3, _0x599726._interval = setInterval(function () {
        var _0x3b0475 = (Date.now() - _0x2e5185) / _0x37cf04;
        _0x2e5185 = Date.now(), _0x234d1e += _0x51ffc1 * _0x3b0475, _0x234d1e = 0x0 > _0x51ffc1 ? Math.max(_0xef39d3, _0x234d1e) : Math.min(_0xef39d3, _0x234d1e), _0x234d1e = Math.round(0x64 * _0x234d1e) / 0x64, _0x2aee4a._webAudio ? _0x599726._volume = _0x234d1e : _0x2aee4a.volume(_0x234d1e, _0x599726._id, !0x0), _0x410c2b && (_0x2aee4a._volume = _0x234d1e);
        if (_0xef39d3 < _0x47f206 && _0x234d1e <= _0xef39d3 || _0xef39d3 > _0x47f206 && _0x234d1e >= _0xef39d3) clearInterval(_0x599726._interval), _0x599726._interval = null, _0x599726._fadeTo = null, _0x2aee4a.volume(_0xef39d3, _0x599726._id), _0x2aee4a._emit('fade', _0x599726._id);
      }, _0x149d86);
    },
    '_stopFade': function (_0x4a7c9a) {
      var _0x5e2fb8 = this._soundById(_0x4a7c9a);
      return _0x5e2fb8 && _0x5e2fb8._interval && (this._webAudio && _0x5e2fb8._node.gain.cancelScheduledValues(_0x35baa6.ctx.currentTime), clearInterval(_0x5e2fb8._interval), _0x5e2fb8._interval = null, this.volume(_0x5e2fb8._fadeTo, _0x4a7c9a), _0x5e2fb8._fadeTo = null, this._emit('fade', _0x4a7c9a)), this;
    },
    'loop': function () {
      var _0x29524f = arguments,
        _0x189756,
        _0x1a9485;
      if (0x0 === _0x29524f.length) return this._loop;
      if (0x1 === _0x29524f.length) {
        if ('boolean' === typeof _0x29524f[0x0]) this._loop = _0x189756 = _0x29524f[0x0];else return (_0x29524f = this._soundById(parseInt(_0x29524f[0x0], 0xa))) ? _0x29524f._loop : !0x1;
      } else 0x2 === _0x29524f.length && (_0x189756 = _0x29524f[0x0], _0x1a9485 = parseInt(_0x29524f[0x1], 0xa));
      _0x1a9485 = this._getSoundIds(_0x1a9485);
      for (var _0x2dafee = 0x0; _0x2dafee < _0x1a9485.length; _0x2dafee++) if (_0x29524f = this._soundById(_0x1a9485[_0x2dafee])) {
        if (_0x29524f._loop = _0x189756, this._webAudio && _0x29524f._node && _0x29524f._node.bufferSource && (_0x29524f._node.bufferSource.loop = _0x189756)) _0x29524f._node.bufferSource.loopStart = _0x29524f._start || 0x0, _0x29524f._node.bufferSource.loopEnd = _0x29524f._stop;
      }
      return this;
    },
    'rate': function () {
      var _0x1fb4eb = this,
        _0x1a8e3f = arguments,
        _0x38b0aa,
        _0x5577d5;
      0x0 === _0x1a8e3f.length ? _0x5577d5 = _0x1fb4eb._sounds[0x0]._id : 0x1 === _0x1a8e3f.length ? 0x0 <= _0x1fb4eb._getSoundIds().indexOf(_0x1a8e3f[0x0]) ? _0x5577d5 = parseInt(_0x1a8e3f[0x0], 0xa) : _0x38b0aa = parseFloat(_0x1a8e3f[0x0]) : 0x2 === _0x1a8e3f.length && (_0x38b0aa = parseFloat(_0x1a8e3f[0x0]), _0x5577d5 = parseInt(_0x1a8e3f[0x1], 0xa));
      var _0x46c6d1;
      if ('number' === typeof _0x38b0aa) {
        if ('loaded' !== _0x1fb4eb._state || _0x1fb4eb._playLock) return _0x1fb4eb._queue.push({
          'event': 'rate',
          'action': function () {
            _0x1fb4eb.rate.apply(_0x1fb4eb, _0x1a8e3f);
          }
        }), _0x1fb4eb;
        'undefined' === typeof _0x5577d5 && (_0x1fb4eb._rate = _0x38b0aa), _0x5577d5 = _0x1fb4eb._getSoundIds(_0x5577d5);
        for (var _0x13f35e = 0x0; _0x13f35e < _0x5577d5.length; _0x13f35e++) if (_0x46c6d1 = _0x1fb4eb._soundById(_0x5577d5[_0x13f35e])) {
          _0x1fb4eb.playing(_0x5577d5[_0x13f35e]) && (_0x46c6d1._rateSeek = _0x1fb4eb.seek(_0x5577d5[_0x13f35e]), _0x46c6d1._playStart = _0x1fb4eb._webAudio ? _0x35baa6.ctx.currentTime : _0x46c6d1._playStart), _0x46c6d1._rate = _0x38b0aa, _0x1fb4eb._webAudio && _0x46c6d1._node && _0x46c6d1._node.bufferSource ? _0x46c6d1._node.bufferSource.playbackRate.setValueAtTime(_0x38b0aa, _0x35baa6.ctx.currentTime) : _0x46c6d1._node && (_0x46c6d1._node.playbackRate = _0x38b0aa);
          var _0x168354 = _0x1fb4eb.seek(_0x5577d5[_0x13f35e]),
            _0x168354 = 0x3e8 * ((_0x1fb4eb._sprite[_0x46c6d1._sprite][0x0] + _0x1fb4eb._sprite[_0x46c6d1._sprite][0x1]) / 0x3e8 - _0x168354) / Math.abs(_0x46c6d1._rate);
          if (_0x1fb4eb._endTimers[_0x5577d5[_0x13f35e]] || !_0x46c6d1._paused) _0x1fb4eb._clearTimer(_0x5577d5[_0x13f35e]), _0x1fb4eb._endTimers[_0x5577d5[_0x13f35e]] = setTimeout(_0x1fb4eb._ended.bind(_0x1fb4eb, _0x46c6d1), _0x168354);
          _0x1fb4eb._emit('rate', _0x46c6d1._id);
        }
      } else return (_0x46c6d1 = _0x1fb4eb._soundById(_0x5577d5)) ? _0x46c6d1._rate : _0x1fb4eb._rate;
      return _0x1fb4eb;
    },
    'seek': function () {
      var _0xc51e89 = this,
        _0x45e40a = arguments,
        _0x31afd5,
        _0xc79932;
      0x0 === _0x45e40a.length ? _0xc79932 = _0xc51e89._sounds[0x0]._id : 0x1 === _0x45e40a.length ? 0x0 <= _0xc51e89._getSoundIds().indexOf(_0x45e40a[0x0]) ? _0xc79932 = parseInt(_0x45e40a[0x0], 0xa) : _0xc51e89._sounds.length && (_0xc79932 = _0xc51e89._sounds[0x0]._id, _0x31afd5 = parseFloat(_0x45e40a[0x0])) : 0x2 === _0x45e40a.length && (_0x31afd5 = parseFloat(_0x45e40a[0x0]), _0xc79932 = parseInt(_0x45e40a[0x1], 0xa));
      if ('undefined' === typeof _0xc79932) return _0xc51e89;
      if ('loaded' !== _0xc51e89._state || _0xc51e89._playLock) return _0xc51e89._queue.push({
        'event': 'seek',
        'action': function () {
          _0xc51e89.seek.apply(_0xc51e89, _0x45e40a);
        }
      }), _0xc51e89;
      var _0xd88735 = _0xc51e89._soundById(_0xc79932);
      if (_0xd88735) {
        if ('number' === typeof _0x31afd5 && 0x0 <= _0x31afd5) {
          var _0x17e22b = _0xc51e89.playing(_0xc79932);
          _0x17e22b && _0xc51e89.pause(_0xc79932, !0x0), _0xd88735._seek = _0x31afd5, _0xd88735._ended = !0x1, _0xc51e89._clearTimer(_0xc79932), !_0xc51e89._webAudio && _0xd88735._node && !isNaN(_0xd88735._node.duration) && (_0xd88735._node.currentTime = _0x31afd5);
          var _0x57631b = function () {
            _0xc51e89._emit('seek', _0xc79932), _0x17e22b && _0xc51e89.play(_0xc79932, !0x0);
          };
          if (_0x17e22b && !_0xc51e89._webAudio) {
            var _0x51b708 = function () {
              _0xc51e89._playLock ? setTimeout(_0x51b708, 0x0) : _0x57631b();
            };
            setTimeout(_0x51b708, 0x0);
          } else _0x57631b();
        } else return _0xc51e89._webAudio ? (_0x31afd5 = _0xc51e89.playing(_0xc79932) ? _0x35baa6.ctx.currentTime - _0xd88735._playStart : 0x0, _0xd88735._seek + ((_0xd88735._rateSeek ? _0xd88735._rateSeek - _0xd88735._seek : 0x0) + _0x31afd5 * Math.abs(_0xd88735._rate))) : _0xd88735._node.currentTime;
      }
      return _0xc51e89;
    },
    'playing': function (_0x48b0fe) {
      if ('number' === typeof _0x48b0fe) return (_0x48b0fe = this._soundById(_0x48b0fe)) ? !_0x48b0fe._paused : !0x1;
      for (_0x48b0fe = 0x0; _0x48b0fe < this._sounds.length; _0x48b0fe++) if (!this._sounds[_0x48b0fe]._paused) return !0x0;
      return !0x1;
    },
    'duration': function (_0xd07a96) {
      var _0x11ca95 = this._duration;
      return (_0xd07a96 = this._soundById(_0xd07a96)) && (_0x11ca95 = this._sprite[_0xd07a96._sprite][0x1] / 0x3e8), _0x11ca95;
    },
    'state': function () {
      return this._state;
    },
    'unload': function () {
      for (var _0x4109e2 = this._sounds, _0x212256 = 0x0; _0x212256 < _0x4109e2.length; _0x212256++) _0x4109e2[_0x212256]._paused || this.stop(_0x4109e2[_0x212256]._id), this._webAudio || (this._clearSound(_0x4109e2[_0x212256]._node), _0x4109e2[_0x212256]._node.removeEventListener('error', _0x4109e2[_0x212256]._errorFn, !0x1), _0x4109e2[_0x212256]._node.removeEventListener(_0x35baa6._canPlayEvent, _0x4109e2[_0x212256]._loadFn, !0x1), _0x35baa6._releaseHtml5Audio(_0x4109e2[_0x212256]._node)), delete _0x4109e2[_0x212256]._node, this._clearTimer(_0x4109e2[_0x212256]._id);
      _0x212256 = _0x35baa6._howls.indexOf(this), 0x0 <= _0x212256 && _0x35baa6._howls.splice(_0x212256, 0x1), _0x4109e2 = !0x0;
      for (_0x212256 = 0x0; _0x212256 < _0x35baa6._howls.length; _0x212256++) if (_0x35baa6._howls[_0x212256]._src === this._src || 0x0 <= this._src.indexOf(_0x35baa6._howls[_0x212256]._src)) {
        _0x4109e2 = !0x1;
        break;
      }
      return _0x3ac9cf && _0x4109e2 && delete _0x3ac9cf[this._src], _0x35baa6.noAudio = !0x1, this._state = 'unloaded', this._sounds = [], null;
    },
    'on': function (_0x4ca7db, _0xdd941e, _0x13f41b, _0x1fcb39) {
      return _0x4ca7db = this['_on' + _0x4ca7db], 'function' === typeof _0xdd941e && _0x4ca7db.push(_0x1fcb39 ? {
        'id': _0x13f41b,
        'fn': _0xdd941e,
        'once': _0x1fcb39
      } : {
        'id': _0x13f41b,
        'fn': _0xdd941e
      }), this;
    },
    'off': function (_0x5dcb8, _0xaa112, _0x6fcc64) {
      var _0x471824 = this['_on' + _0x5dcb8],
        _0x565454 = 0x0;
      'number' === typeof _0xaa112 && (_0x6fcc64 = _0xaa112, _0xaa112 = null);
      if (_0xaa112 || _0x6fcc64) for (_0x565454 = 0x0; _0x565454 < _0x471824.length; _0x565454++) {
        if (_0x5dcb8 = _0x6fcc64 === _0x471824[_0x565454].id, _0xaa112 === _0x471824[_0x565454].fn && _0x5dcb8 || !_0xaa112 && _0x5dcb8) {
          _0x471824.splice(_0x565454, 0x1);
          break;
        }
      } else {
        if (_0x5dcb8) this['_on' + _0x5dcb8] = [];else {
          _0xaa112 = Object.keys(this);
          for (_0x565454 = 0x0; _0x565454 < _0xaa112.length; _0x565454++) 0x0 === _0xaa112[_0x565454].indexOf('_on') && Array.isArray(this[_0xaa112[_0x565454]]) && (this[_0xaa112[_0x565454]] = []);
        }
      }
      return this;
    },
    'once': function (_0x307af4, _0x540e18, _0x246994) {
      return this.on(_0x307af4, _0x540e18, _0x246994, 0x1), this;
    },
    '_emit': function (_0x27fcbc, _0x3dfb19, _0x577282) {
      for (var _0x2acdcc = this['_on' + _0x27fcbc], _0x5ff756 = _0x2acdcc.length - 0x1; 0x0 <= _0x5ff756; _0x5ff756--) if (!_0x2acdcc[_0x5ff756].id || _0x2acdcc[_0x5ff756].id === _0x3dfb19 || 'load' === _0x27fcbc) setTimeout(function (_0x458f59) {
        _0x458f59.call(this, _0x3dfb19, _0x577282);
      }.bind(this, _0x2acdcc[_0x5ff756].fn), 0x0), _0x2acdcc[_0x5ff756].once && this.off(_0x27fcbc, _0x2acdcc[_0x5ff756].fn, _0x2acdcc[_0x5ff756].id);
      return this._loadQueue(_0x27fcbc), this;
    },
    '_loadQueue': function (_0x1c7ac7) {
      if (0x0 < this._queue.length) {
        var _0x9c4a55 = this._queue[0x0];
        _0x9c4a55.event === _0x1c7ac7 && (this._queue.shift(), this._loadQueue()), _0x1c7ac7 || _0x9c4a55.action();
      }
      return this;
    },
    '_ended': function (_0x56dfcd) {
      var _0x578b8a = _0x56dfcd._sprite;
      if (!this._webAudio && _0x56dfcd._node && !_0x56dfcd._node.paused && !_0x56dfcd._node.ended && _0x56dfcd._node.currentTime < _0x56dfcd._stop) return setTimeout(this._ended.bind(this, _0x56dfcd), 0x64), this;
      _0x578b8a = !(!_0x56dfcd._loop && !this._sprite[_0x578b8a][0x2]), this._emit('end', _0x56dfcd._id), !this._webAudio && _0x578b8a && this.stop(_0x56dfcd._id, !0x0).play(_0x56dfcd._id);
      if (this._webAudio && _0x578b8a) {
        this._emit('play', _0x56dfcd._id), _0x56dfcd._seek = _0x56dfcd._start || 0x0, _0x56dfcd._rateSeek = 0x0, _0x56dfcd._playStart = _0x35baa6.ctx.currentTime;
        var _0x526eae = 0x3e8 * (_0x56dfcd._stop - _0x56dfcd._start) / Math.abs(_0x56dfcd._rate);
        this._endTimers[_0x56dfcd._id] = setTimeout(this._ended.bind(this, _0x56dfcd), _0x526eae);
      }
      return this._webAudio && !_0x578b8a && (_0x56dfcd._paused = !0x0, _0x56dfcd._ended = !0x0, _0x56dfcd._seek = _0x56dfcd._start || 0x0, _0x56dfcd._rateSeek = 0x0, this._clearTimer(_0x56dfcd._id), this._cleanBuffer(_0x56dfcd._node), _0x35baa6._autoSuspend()), !this._webAudio && !_0x578b8a && this.stop(_0x56dfcd._id, !0x0), this;
    },
    '_clearTimer': function (_0x3f717b) {
      if (this._endTimers[_0x3f717b]) {
        if ('function' !== typeof this._endTimers[_0x3f717b]) clearTimeout(this._endTimers[_0x3f717b]);else {
          var _0x5430a0 = this._soundById(_0x3f717b);
          _0x5430a0 && _0x5430a0._node && _0x5430a0._node.removeEventListener('ended', this._endTimers[_0x3f717b], !0x1);
        }
        delete this._endTimers[_0x3f717b];
      }
      return this;
    },
    '_soundById': function (_0x859be2) {
      for (var _0x59dbbe = 0x0; _0x59dbbe < this._sounds.length; _0x59dbbe++) if (_0x859be2 === this._sounds[_0x59dbbe]._id) return this._sounds[_0x59dbbe];
      return null;
    },
    '_inactiveSound': function () {
      this._drain();
      for (var _0x3e4eb6 = 0x0; _0x3e4eb6 < this._sounds.length; _0x3e4eb6++) if (this._sounds[_0x3e4eb6]._ended) return this._sounds[_0x3e4eb6].reset();
      return new _0x334756(this);
    },
    '_drain': function () {
      var _0x5551e1 = this._pool,
        _0x8fe525 = 0x0,
        _0x5d3a6d = 0x0;
      if (!(this._sounds.length < _0x5551e1)) {
        for (_0x5d3a6d = 0x0; _0x5d3a6d < this._sounds.length; _0x5d3a6d++) this._sounds[_0x5d3a6d]._ended && _0x8fe525++;
        for (_0x5d3a6d = this._sounds.length - 0x1; 0x0 <= _0x5d3a6d && !(_0x8fe525 <= _0x5551e1); _0x5d3a6d--) this._sounds[_0x5d3a6d]._ended && (this._webAudio && this._sounds[_0x5d3a6d]._node && this._sounds[_0x5d3a6d]._node.disconnect(0x0), this._sounds.splice(_0x5d3a6d, 0x1), _0x8fe525--);
      }
    },
    '_getSoundIds': function (_0x280af8) {
      if ('undefined' === typeof _0x280af8) {
        _0x280af8 = [];
        for (var _0x18890f = 0x0; _0x18890f < this._sounds.length; _0x18890f++) _0x280af8.push(this._sounds[_0x18890f]._id);
        return _0x280af8;
      }
      return [_0x280af8];
    },
    '_refreshBuffer': function (_0x3a0bc7) {
      _0x3a0bc7._node.bufferSource = _0x35baa6.ctx.createBufferSource(), _0x3a0bc7._node.bufferSource.buffer = _0x3ac9cf[this._src], _0x3a0bc7._panner ? _0x3a0bc7._node.bufferSource.connect(_0x3a0bc7._panner) : _0x3a0bc7._node.bufferSource.connect(_0x3a0bc7._node);
      if (_0x3a0bc7._node.bufferSource.loop = _0x3a0bc7._loop) _0x3a0bc7._node.bufferSource.loopStart = _0x3a0bc7._start || 0x0, _0x3a0bc7._node.bufferSource.loopEnd = _0x3a0bc7._stop || 0x0;
      return _0x3a0bc7._node.bufferSource.playbackRate.setValueAtTime(_0x3a0bc7._rate, _0x35baa6.ctx.currentTime), this;
    },
    '_cleanBuffer': function (_0x24d2bd) {
      var _0x278dcf = _0x35baa6._navigator && 0x0 <= _0x35baa6._navigator.vendor.indexOf('Apple');
      if (_0x35baa6._scratchBuffer && _0x24d2bd.bufferSource && (_0x24d2bd.bufferSource.onended = null, _0x24d2bd.bufferSource.disconnect(0x0), _0x278dcf)) try {
        _0x24d2bd.bufferSource.buffer = _0x35baa6._scratchBuffer;
      } catch (_0x3136ff) {}
      return _0x24d2bd.bufferSource = null, this;
    },
    '_clearSound': function (_0x3d1e33) {
      /MSIE |Trident\//.test(_0x35baa6._navigator && _0x35baa6._navigator.userAgent) || (_0x3d1e33.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
    }
  };
  var _0x334756 = function (_0x3dd912) {
    this._parent = _0x3dd912, this.init();
  };
  _0x334756.prototype = {
    'init': function () {
      var _0x1b8c65 = this._parent;
      return this._muted = _0x1b8c65._muted, this._loop = _0x1b8c65._loop, this._volume = _0x1b8c65._volume, this._rate = _0x1b8c65._rate, this._seek = 0x0, this._ended = this._paused = !0x0, this._sprite = '__default', this._id = ++_0x35baa6._counter, _0x1b8c65._sounds.push(this), this.create(), this;
    },
    'create': function () {
      var _0x160dc7 = this._parent,
        _0x4df8db = _0x35baa6._muted || this._muted || this._parent._muted ? 0x0 : this._volume;
      return _0x160dc7._webAudio ? (this._node = 'undefined' === typeof _0x35baa6.ctx.createGain ? _0x35baa6.ctx.createGainNode() : _0x35baa6.ctx.createGain(), this._node.gain.setValueAtTime(_0x4df8db, _0x35baa6.ctx.currentTime), this._node.paused = !0x0, this._node.connect(_0x35baa6.masterGain)) : _0x35baa6.noAudio || (this._node = _0x35baa6._obtainHtml5Audio(), this._errorFn = this._errorListener.bind(this), this._node.addEventListener('error', this._errorFn, !0x1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(_0x35baa6._canPlayEvent, this._loadFn, !0x1), this._node.src = _0x160dc7._src, this._node.preload = !0x0 === _0x160dc7._preload ? 'auto' : _0x160dc7._preload, this._node.volume = _0x4df8db * _0x35baa6.volume(), this._node.load()), this;
    },
    'reset': function () {
      var _0x5b8545 = this._parent;
      return this._muted = _0x5b8545._muted, this._loop = _0x5b8545._loop, this._volume = _0x5b8545._volume, this._rate = _0x5b8545._rate, this._rateSeek = this._seek = 0x0, this._ended = this._paused = !0x0, this._sprite = '__default', this._id = ++_0x35baa6._counter, this;
    },
    '_errorListener': function () {
      this._parent._emit('loaderror', this._id, this._node.error ? this._node.error.code : 0x0), this._node.removeEventListener('error', this._errorFn, !0x1);
    },
    '_loadListener': function () {
      var _0x17d4d4 = this._parent;
      _0x17d4d4._duration = Math.ceil(0xa * this._node.duration) / 0xa, 0x0 === Object.keys(_0x17d4d4._sprite).length && (_0x17d4d4._sprite = {
        '__default': [0x0, 0x3e8 * _0x17d4d4._duration]
      }), 'loaded' !== _0x17d4d4._state && (_0x17d4d4._state = 'loaded', _0x17d4d4._emit('load'), _0x17d4d4._loadQueue()), this._node.removeEventListener(_0x35baa6._canPlayEvent, this._loadFn, !0x1);
    }
  };
  var _0x3ac9cf = {},
    _0x46b16d = function (_0x4dbfd2, _0x3a2575) {
      var _0x25e334 = function () {
          _0x3a2575._emit('loaderror', null, "Decoding audio data failed.");
        },
        _0x591ee9 = function (_0x485ba1) {
          _0x485ba1 && 0x0 < _0x3a2575._sounds.length ? (_0x3ac9cf[_0x3a2575._src] = _0x485ba1, _0x1b1d6f(_0x3a2575, _0x485ba1)) : _0x25e334();
        };
      'undefined' !== typeof Promise && 0x1 === _0x35baa6.ctx.decodeAudioData.length ? _0x35baa6.ctx.decodeAudioData(_0x4dbfd2).then(_0x591ee9)['catch'](_0x25e334) : _0x35baa6.ctx.decodeAudioData(_0x4dbfd2, _0x591ee9, _0x25e334);
    },
    _0x1b1d6f = function (_0x2db47c, _0x17c00b) {
      _0x17c00b && !_0x2db47c._duration && (_0x2db47c._duration = _0x17c00b.duration), 0x0 === Object.keys(_0x2db47c._sprite).length && (_0x2db47c._sprite = {
        '__default': [0x0, 0x3e8 * _0x2db47c._duration]
      }), 'loaded' !== _0x2db47c._state && (_0x2db47c._state = 'loaded', _0x2db47c._emit('load'), _0x2db47c._loadQueue());
    },
    _0x2719f4 = function () {
      if (_0x35baa6.usingWebAudio) {
        try {
          'undefined' !== typeof AudioContext ? _0x35baa6.ctx = new AudioContext() : 'undefined' !== typeof webkitAudioContext ? _0x35baa6.ctx = new webkitAudioContext() : _0x35baa6.usingWebAudio = !0x1;
        } catch (_0x6aef4) {
          _0x35baa6.usingWebAudio = !0x1;
        }
        _0x35baa6.ctx || (_0x35baa6.usingWebAudio = !0x1);
        var _0x2840f0 = /iP(hone|od|ad)/.test(_0x35baa6._navigator && _0x35baa6._navigator.platform),
          _0x3272a8 = _0x35baa6._navigator && _0x35baa6._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
          _0x3272a8 = _0x3272a8 ? parseInt(_0x3272a8[0x1], 0xa) : null;
        _0x2840f0 && _0x3272a8 && 0x9 > _0x3272a8 && (_0x2840f0 = /safari/.test(_0x35baa6._navigator && _0x35baa6._navigator.userAgent.toLowerCase()), _0x35baa6._navigator && !_0x2840f0 && (_0x35baa6.usingWebAudio = !0x1)), _0x35baa6.usingWebAudio && (_0x35baa6.masterGain = 'undefined' === typeof _0x35baa6.ctx.createGain ? _0x35baa6.ctx.createGainNode() : _0x35baa6.ctx.createGain(), _0x35baa6.masterGain.gain.setValueAtTime(_0x35baa6._muted ? 0x0 : _0x35baa6._volume, _0x35baa6.ctx.currentTime), _0x35baa6.masterGain.connect(_0x35baa6.ctx.destination)), _0x35baa6._setup();
      }
    };
  'function' === typeof define && define.amd && define([], function () {
    return {
      'Howler': _0x35baa6,
      'Howl': _0x53b0b8
    };
  }), 'undefined' !== typeof exports && (exports.Howler = _0x35baa6, exports.Howl = _0x53b0b8), 'undefined' !== typeof global ? (global.HowlerGlobal = _0x4c4b12, global.Howler = _0x35baa6, global.Howl = _0x53b0b8, global.Sound = _0x334756) : 'undefined' !== typeof window && (window.HowlerGlobal = _0x4c4b12, window.Howler = _0x35baa6, window.Howl = _0x53b0b8, window.Sound = _0x334756);
}(), function () {
  HowlerGlobal.prototype._pos = [0x0, 0x0, 0x0], HowlerGlobal.prototype._orientation = [0x0, 0x0, -0x1, 0x0, 0x1, 0x0], HowlerGlobal.prototype.stereo = function (_0x5f4c61) {
    if (!this.ctx || !this.ctx.listener) return this;
    for (var _0x5c3a72 = this._howls.length - 0x1; 0x0 <= _0x5c3a72; _0x5c3a72--) this._howls[_0x5c3a72].stereo(_0x5f4c61);
    return this;
  }, HowlerGlobal.prototype.pos = function (_0x5db0fb, _0x114ad0, _0x16ed77) {
    if (!this.ctx || !this.ctx.listener) return this;
    _0x114ad0 = 'number' !== typeof _0x114ad0 ? this._pos[0x1] : _0x114ad0, _0x16ed77 = 'number' !== typeof _0x16ed77 ? this._pos[0x2] : _0x16ed77;
    if ('number' === typeof _0x5db0fb) this._pos = [_0x5db0fb, _0x114ad0, _0x16ed77], 'undefined' !== typeof this.ctx.listener.positionX ? (this.ctx.listener.positionX.setTargetAtTime(this._pos[0x0], Howler.ctx.currentTime, 0.1), this.ctx.listener.positionY.setTargetAtTime(this._pos[0x1], Howler.ctx.currentTime, 0.1), this.ctx.listener.positionZ.setTargetAtTime(this._pos[0x2], Howler.ctx.currentTime, 0.1)) : this.ctx.listener.setPosition(this._pos[0x0], this._pos[0x1], this._pos[0x2]);else return this._pos;
    return this;
  }, HowlerGlobal.prototype.orientation = function (_0x121f72, _0x20fa9e, _0x3fc458, _0x124849, _0x52919c, _0x4cd377) {
    if (!this.ctx || !this.ctx.listener) return this;
    var _0x4dee0d = this._orientation;
    _0x20fa9e = 'number' !== typeof _0x20fa9e ? _0x4dee0d[0x1] : _0x20fa9e, _0x3fc458 = 'number' !== typeof _0x3fc458 ? _0x4dee0d[0x2] : _0x3fc458, _0x124849 = 'number' !== typeof _0x124849 ? _0x4dee0d[0x3] : _0x124849, _0x52919c = 'number' !== typeof _0x52919c ? _0x4dee0d[0x4] : _0x52919c, _0x4cd377 = 'number' !== typeof _0x4cd377 ? _0x4dee0d[0x5] : _0x4cd377;
    if ('number' === typeof _0x121f72) this._orientation = [_0x121f72, _0x20fa9e, _0x3fc458, _0x124849, _0x52919c, _0x4cd377], 'undefined' !== typeof this.ctx.listener.forwardX ? (this.ctx.listener.forwardX.setTargetAtTime(_0x121f72, Howler.ctx.currentTime, 0.1), this.ctx.listener.forwardY.setTargetAtTime(_0x20fa9e, Howler.ctx.currentTime, 0.1), this.ctx.listener.forwardZ.setTargetAtTime(_0x3fc458, Howler.ctx.currentTime, 0.1), this.ctx.listener.upX.setTargetAtTime(_0x124849, Howler.ctx.currentTime, 0.1), this.ctx.listener.upY.setTargetAtTime(_0x52919c, Howler.ctx.currentTime, 0.1), this.ctx.listener.upZ.setTargetAtTime(_0x4cd377, Howler.ctx.currentTime, 0.1)) : this.ctx.listener.setOrientation(_0x121f72, _0x20fa9e, _0x3fc458, _0x124849, _0x52919c, _0x4cd377);else return _0x4dee0d;
    return this;
  };
  var _0x56aa5f = Howl.prototype.init;
  Howl.prototype.init = function (_0x460c9a) {
    return this._orientation = _0x460c9a.orientation || [0x1, 0x0, 0x0], this._stereo = _0x460c9a.stereo || null, this._pos = _0x460c9a.pos || null, this._pannerAttr = {
      'coneInnerAngle': 'undefined' !== typeof _0x460c9a.coneInnerAngle ? _0x460c9a.coneInnerAngle : 0x168,
      'coneOuterAngle': 'undefined' !== typeof _0x460c9a.coneOuterAngle ? _0x460c9a.coneOuterAngle : 0x168,
      'coneOuterGain': 'undefined' !== typeof _0x460c9a.coneOuterGain ? _0x460c9a.coneOuterGain : 0x0,
      'distanceModel': 'undefined' !== typeof _0x460c9a.distanceModel ? _0x460c9a.distanceModel : 'inverse',
      'maxDistance': 'undefined' !== typeof _0x460c9a.maxDistance ? _0x460c9a.maxDistance : 0x2710,
      'panningModel': 'undefined' !== typeof _0x460c9a.panningModel ? _0x460c9a.panningModel : 'HRTF',
      'refDistance': 'undefined' !== typeof _0x460c9a.refDistance ? _0x460c9a.refDistance : 0x1,
      'rolloffFactor': 'undefined' !== typeof _0x460c9a.rolloffFactor ? _0x460c9a.rolloffFactor : 0x1
    }, this._onstereo = _0x460c9a.onstereo ? [{
      'fn': _0x460c9a.onstereo
    }] : [], this._onpos = _0x460c9a.onpos ? [{
      'fn': _0x460c9a.onpos
    }] : [], this._onorientation = _0x460c9a.onorientation ? [{
      'fn': _0x460c9a.onorientation
    }] : [], _0x56aa5f.call(this, _0x460c9a);
  }, Howl.prototype.stereo = function (_0x388e4d, _0x2e1bd3) {
    var _0x3d199e = this;
    if (!_0x3d199e._webAudio) return _0x3d199e;
    if ('loaded' !== _0x3d199e._state) return _0x3d199e._queue.push({
      'event': 'stereo',
      'action': function () {
        _0x3d199e.stereo(_0x388e4d, _0x2e1bd3);
      }
    }), _0x3d199e;
    var _0x2a5bad = 'undefined' === typeof Howler.ctx.createStereoPanner ? 'spatial' : 'stereo';
    if ('undefined' === typeof _0x2e1bd3) {
      if ('number' === typeof _0x388e4d) _0x3d199e._stereo = _0x388e4d, _0x3d199e._pos = [_0x388e4d, 0x0, 0x0];else return _0x3d199e._stereo;
    }
    for (var _0x5028d8 = _0x3d199e._getSoundIds(_0x2e1bd3), _0x4c7ac6 = 0x0; _0x4c7ac6 < _0x5028d8.length; _0x4c7ac6++) {
      var _0x3b8234 = _0x3d199e._soundById(_0x5028d8[_0x4c7ac6]);
      if (_0x3b8234) {
        if ('number' === typeof _0x388e4d) _0x3b8234._stereo = _0x388e4d, _0x3b8234._pos = [_0x388e4d, 0x0, 0x0], _0x3b8234._node && (_0x3b8234._pannerAttr.panningModel = 'equalpower', (!_0x3b8234._panner || !_0x3b8234._panner.pan) && _0x243a3e(_0x3b8234, _0x2a5bad), 'spatial' === _0x2a5bad ? 'undefined' !== typeof _0x3b8234._panner.positionX ? (_0x3b8234._panner.positionX.setValueAtTime(_0x388e4d, Howler.ctx.currentTime), _0x3b8234._panner.positionY.setValueAtTime(0x0, Howler.ctx.currentTime), _0x3b8234._panner.positionZ.setValueAtTime(0x0, Howler.ctx.currentTime)) : _0x3b8234._panner.setPosition(_0x388e4d, 0x0, 0x0) : _0x3b8234._panner.pan.setValueAtTime(_0x388e4d, Howler.ctx.currentTime)), _0x3d199e._emit('stereo', _0x3b8234._id);else return _0x3b8234._stereo;
      }
    }
    return _0x3d199e;
  }, Howl.prototype.pos = function (_0x237d2c, _0x56dc2b, _0x4c1ce4, _0x2ad6e7) {
    var _0x4e4118 = this;
    if (!_0x4e4118._webAudio) return _0x4e4118;
    if ('loaded' !== _0x4e4118._state) return _0x4e4118._queue.push({
      'event': 'pos',
      'action': function () {
        _0x4e4118.pos(_0x237d2c, _0x56dc2b, _0x4c1ce4, _0x2ad6e7);
      }
    }), _0x4e4118;
    _0x56dc2b = 'number' !== typeof _0x56dc2b ? 0x0 : _0x56dc2b, _0x4c1ce4 = 'number' !== typeof _0x4c1ce4 ? -0.5 : _0x4c1ce4;
    if ('undefined' === typeof _0x2ad6e7) {
      if ('number' === typeof _0x237d2c) _0x4e4118._pos = [_0x237d2c, _0x56dc2b, _0x4c1ce4];else return _0x4e4118._pos;
    }
    for (var _0x284e80 = _0x4e4118._getSoundIds(_0x2ad6e7), _0x5c10b9 = 0x0; _0x5c10b9 < _0x284e80.length; _0x5c10b9++) {
      var _0x3867f3 = _0x4e4118._soundById(_0x284e80[_0x5c10b9]);
      if (_0x3867f3) {
        if ('number' === typeof _0x237d2c) _0x3867f3._pos = [_0x237d2c, _0x56dc2b, _0x4c1ce4], _0x3867f3._node && ((!_0x3867f3._panner || _0x3867f3._panner.pan) && _0x243a3e(_0x3867f3, 'spatial'), 'undefined' !== typeof _0x3867f3._panner.positionX ? (_0x3867f3._panner.positionX.setValueAtTime(_0x237d2c, Howler.ctx.currentTime), _0x3867f3._panner.positionY.setValueAtTime(_0x56dc2b, Howler.ctx.currentTime), _0x3867f3._panner.positionZ.setValueAtTime(_0x4c1ce4, Howler.ctx.currentTime)) : _0x3867f3._panner.setPosition(_0x237d2c, _0x56dc2b, _0x4c1ce4)), _0x4e4118._emit('pos', _0x3867f3._id);else return _0x3867f3._pos;
      }
    }
    return _0x4e4118;
  }, Howl.prototype.orientation = function (_0x29eb7f, _0x493914, _0x3b52af, _0xeb9854) {
    var _0x3e96e2 = this;
    if (!_0x3e96e2._webAudio) return _0x3e96e2;
    if ('loaded' !== _0x3e96e2._state) return _0x3e96e2._queue.push({
      'event': 'orientation',
      'action': function () {
        _0x3e96e2.orientation(_0x29eb7f, _0x493914, _0x3b52af, _0xeb9854);
      }
    }), _0x3e96e2;
    _0x493914 = 'number' !== typeof _0x493914 ? _0x3e96e2._orientation[0x1] : _0x493914, _0x3b52af = 'number' !== typeof _0x3b52af ? _0x3e96e2._orientation[0x2] : _0x3b52af;
    if ('undefined' === typeof _0xeb9854) {
      if ('number' === typeof _0x29eb7f) _0x3e96e2._orientation = [_0x29eb7f, _0x493914, _0x3b52af];else return _0x3e96e2._orientation;
    }
    for (var _0x81004d = _0x3e96e2._getSoundIds(_0xeb9854), _0x360611 = 0x0; _0x360611 < _0x81004d.length; _0x360611++) {
      var _0x592da0 = _0x3e96e2._soundById(_0x81004d[_0x360611]);
      if (_0x592da0) {
        if ('number' === typeof _0x29eb7f) _0x592da0._orientation = [_0x29eb7f, _0x493914, _0x3b52af], _0x592da0._node && (_0x592da0._panner || (_0x592da0._pos || (_0x592da0._pos = _0x3e96e2._pos || [0x0, 0x0, -0.5]), _0x243a3e(_0x592da0, 'spatial')), 'undefined' !== typeof _0x592da0._panner.orientationX ? (_0x592da0._panner.orientationX.setValueAtTime(_0x29eb7f, Howler.ctx.currentTime), _0x592da0._panner.orientationY.setValueAtTime(_0x493914, Howler.ctx.currentTime), _0x592da0._panner.orientationZ.setValueAtTime(_0x3b52af, Howler.ctx.currentTime)) : _0x592da0._panner.setOrientation(_0x29eb7f, _0x493914, _0x3b52af)), _0x3e96e2._emit('orientation', _0x592da0._id);else return _0x592da0._orientation;
      }
    }
    return _0x3e96e2;
  }, Howl.prototype.pannerAttr = function () {
    var _0x1a1a1a = arguments,
      _0x4b2cf5,
      _0x3cc983;
    if (!this._webAudio) return this;
    if (0x0 === _0x1a1a1a.length) return this._pannerAttr;
    if (0x1 === _0x1a1a1a.length) {
      if ('object' === typeof _0x1a1a1a[0x0]) _0x4b2cf5 = _0x1a1a1a[0x0], 'undefined' === typeof _0x3cc983 && (_0x4b2cf5.pannerAttr || (_0x4b2cf5.pannerAttr = {
        'coneInnerAngle': _0x4b2cf5.coneInnerAngle,
        'coneOuterAngle': _0x4b2cf5.coneOuterAngle,
        'coneOuterGain': _0x4b2cf5.coneOuterGain,
        'distanceModel': _0x4b2cf5.distanceModel,
        'maxDistance': _0x4b2cf5.maxDistance,
        'refDistance': _0x4b2cf5.refDistance,
        'rolloffFactor': _0x4b2cf5.rolloffFactor,
        'panningModel': _0x4b2cf5.panningModel
      }), this._pannerAttr = {
        'coneInnerAngle': 'undefined' !== typeof _0x4b2cf5.pannerAttr.coneInnerAngle ? _0x4b2cf5.pannerAttr.coneInnerAngle : this._coneInnerAngle,
        'coneOuterAngle': 'undefined' !== typeof _0x4b2cf5.pannerAttr.coneOuterAngle ? _0x4b2cf5.pannerAttr.coneOuterAngle : this._coneOuterAngle,
        'coneOuterGain': 'undefined' !== typeof _0x4b2cf5.pannerAttr.coneOuterGain ? _0x4b2cf5.pannerAttr.coneOuterGain : this._coneOuterGain,
        'distanceModel': 'undefined' !== typeof _0x4b2cf5.pannerAttr.distanceModel ? _0x4b2cf5.pannerAttr.distanceModel : this._distanceModel,
        'maxDistance': 'undefined' !== typeof _0x4b2cf5.pannerAttr.maxDistance ? _0x4b2cf5.pannerAttr.maxDistance : this._maxDistance,
        'refDistance': 'undefined' !== typeof _0x4b2cf5.pannerAttr.refDistance ? _0x4b2cf5.pannerAttr.refDistance : this._refDistance,
        'rolloffFactor': 'undefined' !== typeof _0x4b2cf5.pannerAttr.rolloffFactor ? _0x4b2cf5.pannerAttr.rolloffFactor : this._rolloffFactor,
        'panningModel': 'undefined' !== typeof _0x4b2cf5.pannerAttr.panningModel ? _0x4b2cf5.pannerAttr.panningModel : this._panningModel
      });else return (_0x1a1a1a = this._soundById(parseInt(_0x1a1a1a[0x0], 0xa))) ? _0x1a1a1a._pannerAttr : this._pannerAttr;
    } else 0x2 === _0x1a1a1a.length && (_0x4b2cf5 = _0x1a1a1a[0x0], _0x3cc983 = parseInt(_0x1a1a1a[0x1], 0xa));
    _0x3cc983 = this._getSoundIds(_0x3cc983);
    for (var _0x39f57a = 0x0; _0x39f57a < _0x3cc983.length; _0x39f57a++) if (_0x1a1a1a = this._soundById(_0x3cc983[_0x39f57a])) {
      var _0x5d3233 = _0x1a1a1a._pannerAttr,
        _0x5d3233 = {
          'coneInnerAngle': 'undefined' !== typeof _0x4b2cf5.coneInnerAngle ? _0x4b2cf5.coneInnerAngle : _0x5d3233.coneInnerAngle,
          'coneOuterAngle': 'undefined' !== typeof _0x4b2cf5.coneOuterAngle ? _0x4b2cf5.coneOuterAngle : _0x5d3233.coneOuterAngle,
          'coneOuterGain': 'undefined' !== typeof _0x4b2cf5.coneOuterGain ? _0x4b2cf5.coneOuterGain : _0x5d3233.coneOuterGain,
          'distanceModel': 'undefined' !== typeof _0x4b2cf5.distanceModel ? _0x4b2cf5.distanceModel : _0x5d3233.distanceModel,
          'maxDistance': 'undefined' !== typeof _0x4b2cf5.maxDistance ? _0x4b2cf5.maxDistance : _0x5d3233.maxDistance,
          'refDistance': 'undefined' !== typeof _0x4b2cf5.refDistance ? _0x4b2cf5.refDistance : _0x5d3233.refDistance,
          'rolloffFactor': 'undefined' !== typeof _0x4b2cf5.rolloffFactor ? _0x4b2cf5.rolloffFactor : _0x5d3233.rolloffFactor,
          'panningModel': 'undefined' !== typeof _0x4b2cf5.panningModel ? _0x4b2cf5.panningModel : _0x5d3233.panningModel
        },
        _0x58e4f4 = _0x1a1a1a._panner;
      _0x58e4f4 ? (_0x58e4f4.coneInnerAngle = _0x5d3233.coneInnerAngle, _0x58e4f4.coneOuterAngle = _0x5d3233.coneOuterAngle, _0x58e4f4.coneOuterGain = _0x5d3233.coneOuterGain, _0x58e4f4.distanceModel = _0x5d3233.distanceModel, _0x58e4f4.maxDistance = _0x5d3233.maxDistance, _0x58e4f4.refDistance = _0x5d3233.refDistance, _0x58e4f4.rolloffFactor = _0x5d3233.rolloffFactor, _0x58e4f4.panningModel = _0x5d3233.panningModel) : (_0x1a1a1a._pos || (_0x1a1a1a._pos = this._pos || [0x0, 0x0, -0.5]), _0x243a3e(_0x1a1a1a, 'spatial'));
    }
    return this;
  };
  var _0x3b18fc = Sound.prototype.init;
  Sound.prototype.init = function () {
    var _0x233388 = this._parent;
    this._orientation = _0x233388._orientation, this._stereo = _0x233388._stereo, this._pos = _0x233388._pos, this._pannerAttr = _0x233388._pannerAttr, _0x3b18fc.call(this), this._stereo ? _0x233388.stereo(this._stereo) : this._pos && _0x233388.pos(this._pos[0x0], this._pos[0x1], this._pos[0x2], this._id);
  };
  var _0x2c5d99 = Sound.prototype.reset;
  Sound.prototype.reset = function () {
    var _0x146195 = this._parent;
    return this._orientation = _0x146195._orientation, this._stereo = _0x146195._stereo, this._pos = _0x146195._pos, this._pannerAttr = _0x146195._pannerAttr, this._stereo ? _0x146195.stereo(this._stereo) : this._pos ? _0x146195.pos(this._pos[0x0], this._pos[0x1], this._pos[0x2], this._id) : this._panner && (this._panner.disconnect(0x0), this._panner = void 0x0, _0x146195._refreshBuffer(this)), _0x2c5d99.call(this);
  };
  var _0x243a3e = function (_0x2eea4c, _0xeb8a27) {
    'spatial' === (_0xeb8a27 || 'spatial') ? (_0x2eea4c._panner = Howler.ctx.createPanner(), _0x2eea4c._panner.coneInnerAngle = _0x2eea4c._pannerAttr.coneInnerAngle, _0x2eea4c._panner.coneOuterAngle = _0x2eea4c._pannerAttr.coneOuterAngle, _0x2eea4c._panner.coneOuterGain = _0x2eea4c._pannerAttr.coneOuterGain, _0x2eea4c._panner.distanceModel = _0x2eea4c._pannerAttr.distanceModel, _0x2eea4c._panner.maxDistance = _0x2eea4c._pannerAttr.maxDistance, _0x2eea4c._panner.refDistance = _0x2eea4c._pannerAttr.refDistance, _0x2eea4c._panner.rolloffFactor = _0x2eea4c._pannerAttr.rolloffFactor, _0x2eea4c._panner.panningModel = _0x2eea4c._pannerAttr.panningModel, 'undefined' !== typeof _0x2eea4c._panner.positionX ? (_0x2eea4c._panner.positionX.setValueAtTime(_0x2eea4c._pos[0x0], Howler.ctx.currentTime), _0x2eea4c._panner.positionY.setValueAtTime(_0x2eea4c._pos[0x1], Howler.ctx.currentTime), _0x2eea4c._panner.positionZ.setValueAtTime(_0x2eea4c._pos[0x2], Howler.ctx.currentTime)) : _0x2eea4c._panner.setPosition(_0x2eea4c._pos[0x0], _0x2eea4c._pos[0x1], _0x2eea4c._pos[0x2]), 'undefined' !== typeof _0x2eea4c._panner.orientationX ? (_0x2eea4c._panner.orientationX.setValueAtTime(_0x2eea4c._orientation[0x0], Howler.ctx.currentTime), _0x2eea4c._panner.orientationY.setValueAtTime(_0x2eea4c._orientation[0x1], Howler.ctx.currentTime), _0x2eea4c._panner.orientationZ.setValueAtTime(_0x2eea4c._orientation[0x2], Howler.ctx.currentTime)) : _0x2eea4c._panner.setOrientation(_0x2eea4c._orientation[0x0], _0x2eea4c._orientation[0x1], _0x2eea4c._orientation[0x2])) : (_0x2eea4c._panner = Howler.ctx.createStereoPanner(), _0x2eea4c._panner.pan.setValueAtTime(_0x2eea4c._stereo, Howler.ctx.currentTime)), _0x2eea4c._panner.connect(_0x2eea4c._node), _0x2eea4c._paused || _0x2eea4c._parent.pause(_0x2eea4c._id, !0x0).play(_0x2eea4c._id, !0x0);
  };
}(), !function (_0x4d7f9a, _0x16bf97) {
  'object' == typeof exports && 'undefined' != typeof module ? _0x16bf97() : 'function' == typeof define && define.amd ? define(_0x16bf97) : _0x16bf97();
}(0x0, function () {
  function _0x373e6b(_0x391392) {
    var _0x5d8c1c = this.constructor;
    return this.then(function (_0x2231ca) {
      return _0x5d8c1c.resolve(_0x391392()).then(function () {
        return _0x2231ca;
      });
    }, function (_0x54b750) {
      return _0x5d8c1c.resolve(_0x391392()).then(function () {
        return _0x5d8c1c.reject(_0x54b750);
      });
    });
  }
  function _0x2e866a() {}
  function _0x1276d5(_0x3a384d) {
    if (!(this instanceof _0x1276d5)) throw new TypeError("Promises must be constructed via new");
    if ('function' != typeof _0x3a384d) throw new TypeError("not a function");
    this._state = 0x0, this._handled = !0x1, this._value = void 0x0, this._deferreds = [], _0x4b5695(_0x3a384d, this);
  }
  function _0x1a0414(_0x54e5f2, _0xa5b2be) {
    for (; 0x3 === _0x54e5f2._state;) _0x54e5f2 = _0x54e5f2._value;
    0x0 !== _0x54e5f2._state ? (_0x54e5f2._handled = !0x0, _0x1276d5._immediateFn(function () {
      var _0x4cedf1 = 0x1 === _0x54e5f2._state ? _0xa5b2be.onFulfilled : _0xa5b2be.onRejected;
      if (null !== _0x4cedf1) {
        var _0x1a6d77;
        try {
          _0x1a6d77 = _0x4cedf1(_0x54e5f2._value);
        } catch (_0x2786a2) {
          return void _0x2233d8(_0xa5b2be.promise, _0x2786a2);
        }
        _0x24956d(_0xa5b2be.promise, _0x1a6d77);
      } else (0x1 === _0x54e5f2._state ? _0x24956d : _0x2233d8)(_0xa5b2be.promise, _0x54e5f2._value);
    })) : _0x54e5f2._deferreds.push(_0xa5b2be);
  }
  function _0x24956d(_0x2468c6, _0x8b07ff) {
    try {
      if (_0x8b07ff === _0x2468c6) throw new TypeError("A promise cannot be resolved with itself.");
      if (_0x8b07ff && ('object' == typeof _0x8b07ff || 'function' == typeof _0x8b07ff)) {
        var _0x5d0477 = _0x8b07ff.then;
        if (_0x8b07ff instanceof _0x1276d5) return _0x2468c6._state = 0x3, _0x2468c6._value = _0x8b07ff, void _0x169c81(_0x2468c6);
        if ('function' == typeof _0x5d0477) return void _0x4b5695(function () {
          _0x5d0477.apply(_0x8b07ff, arguments);
        }, _0x2468c6);
      }
      _0x2468c6._state = 0x1, _0x2468c6._value = _0x8b07ff, _0x169c81(_0x2468c6);
    } catch (_0x1ba059) {
      _0x2233d8(_0x2468c6, _0x1ba059);
    }
  }
  function _0x2233d8(_0x2e735f, _0x4f1199) {
    _0x2e735f._state = 0x2, _0x2e735f._value = _0x4f1199, _0x169c81(_0x2e735f);
  }
  function _0x169c81(_0x22763b) {
    0x2 === _0x22763b._state && 0x0 === _0x22763b._deferreds.length && _0x1276d5._immediateFn(function () {
      _0x22763b._handled || _0x1276d5._unhandledRejectionFn(_0x22763b._value);
    });
    for (var _0x3cf69a = 0x0, _0xfa19e = _0x22763b._deferreds.length; _0xfa19e > _0x3cf69a; _0x3cf69a++) _0x1a0414(_0x22763b, _0x22763b._deferreds[_0x3cf69a]);
    _0x22763b._deferreds = null;
  }
  function _0x4b5695(_0x496643, _0x296639) {
    var _0x3785f9 = !0x1;
    try {
      _0x496643(function (_0x58be36) {
        _0x3785f9 || (_0x3785f9 = !0x0, _0x24956d(_0x296639, _0x58be36));
      }, function (_0x24f5d1) {
        _0x3785f9 || (_0x3785f9 = !0x0, _0x2233d8(_0x296639, _0x24f5d1));
      });
    } catch (_0x261807) {
      _0x3785f9 || (_0x3785f9 = !0x0, _0x2233d8(_0x296639, _0x261807));
    }
  }
  var _0x76b34b = setTimeout;
  _0x1276d5.prototype['catch'] = function (_0x3305e7) {
    return this.then(null, _0x3305e7);
  }, _0x1276d5.prototype.then = function (_0x2a1da6, _0x16b972) {
    var _0x46b8bc = new this.constructor(_0x2e866a);
    return _0x1a0414(this, new function (_0x2f6fc8, _0x520d6a, _0x5e19c1) {
      this.onFulfilled = 'function' == typeof _0x2f6fc8 ? _0x2f6fc8 : null, this.onRejected = 'function' == typeof _0x520d6a ? _0x520d6a : null, this.promise = _0x5e19c1;
    }(_0x2a1da6, _0x16b972, _0x46b8bc)), _0x46b8bc;
  }, _0x1276d5.prototype['finally'] = _0x373e6b, _0x1276d5.all = function (_0x479086) {
    return new _0x1276d5(function (_0x44a08a, _0x4fd9a5) {
      function _0x58b043(_0xf3a3f3, _0x352e35) {
        try {
          if (_0x352e35 && ('object' == typeof _0x352e35 || 'function' == typeof _0x352e35)) {
            var _0x5d5e18 = _0x352e35.then;
            if ('function' == typeof _0x5d5e18) return void _0x5d5e18.call(_0x352e35, function (_0x4285f3) {
              _0x58b043(_0xf3a3f3, _0x4285f3);
            }, _0x4fd9a5);
          }
          _0x37b3f1[_0xf3a3f3] = _0x352e35, 0x0 == --_0xa3e8c5 && _0x44a08a(_0x37b3f1);
        } catch (_0x4e926c) {
          _0x4fd9a5(_0x4e926c);
        }
      }
      if (!_0x479086 || 'undefined' == typeof _0x479086.length) throw new TypeError("Promise.all accepts an array");
      var _0x37b3f1 = Array.prototype.slice.call(_0x479086);
      if (0x0 === _0x37b3f1.length) return _0x44a08a([]);
      for (var _0xa3e8c5 = _0x37b3f1.length, _0x422fc8 = 0x0; _0x37b3f1.length > _0x422fc8; _0x422fc8++) _0x58b043(_0x422fc8, _0x37b3f1[_0x422fc8]);
    });
  }, _0x1276d5.resolve = function (_0x357070) {
    return _0x357070 && 'object' == typeof _0x357070 && _0x357070.constructor === _0x1276d5 ? _0x357070 : new _0x1276d5(function (_0x45c74e) {
      _0x45c74e(_0x357070);
    });
  }, _0x1276d5.reject = function (_0xb5b9a5) {
    return new _0x1276d5(function (_0x3e8e5f, _0x42a960) {
      _0x42a960(_0xb5b9a5);
    });
  }, _0x1276d5.race = function (_0x5b93e3) {
    return new _0x1276d5(function (_0x29489b, _0x10a7d6) {
      for (var _0x10372f = 0x0, _0x5b4700 = _0x5b93e3.length; _0x5b4700 > _0x10372f; _0x10372f++) _0x5b93e3[_0x10372f].then(_0x29489b, _0x10a7d6);
    });
  }, _0x1276d5._immediateFn = 'function' == typeof setImmediate && function (_0x26640a) {
    setImmediate(_0x26640a);
  } || function (_0x15ccf0) {
    _0x76b34b(_0x15ccf0, 0x0);
  }, _0x1276d5._unhandledRejectionFn = function (_0x5dc58e) {
    void 0x0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", _0x5dc58e);
  };
  var _0x104ab7 = function () {
    if ('undefined' != typeof self) return self;
    if ('undefined' != typeof window) return window;
    if ('undefined' != typeof global) return global;
    throw Error("unable to locate global object");
  }();
  'Promise' in _0x104ab7 ? _0x104ab7.Promise.prototype['finally'] || (_0x104ab7.Promise.prototype['finally'] = _0x373e6b) : _0x104ab7.Promise = _0x1276d5;
}), function () {
  var _0x520a18 = function () {
      var _0x4d34fe = !![];
      return function (_0x173df1, _0xc8eda3) {
        var _0x17a9c5 = _0x4d34fe ? function () {
          if (_0xc8eda3) {
            var _0xd3b290 = _0xc8eda3.apply(_0x173df1, arguments);
            return _0xc8eda3 = null, _0xd3b290;
          }
        } : function () {};
        return _0x4d34fe = ![], _0x17a9c5;
      };
    }(),
    _0xd38781 = _0x520a18(this, function () {
      var _0x43c7e1;
      try {
        var _0x281438 = Function("return (function() " + "{}.constructor(\"return this\")( )" + ');');
        _0x43c7e1 = _0x281438();
      } catch (_0x28f00b) {
        _0x43c7e1 = window;
      }
      var _0x203623 = _0x43c7e1.console = _0x43c7e1.console || {},
        _0x530c33 = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
      for (var _0x46fe6b = 0x0; _0x46fe6b < _0x530c33.length; _0x46fe6b++) {
        var _0x43efda = _0x520a18.constructor.prototype.bind(_0x520a18),
          _0x4281d7 = _0x530c33[_0x46fe6b],
          _0x599e64 = _0x203623[_0x4281d7] || _0x43efda;
        _0x43efda.__proto__ = _0x520a18.bind(_0x520a18), _0x43efda.toString = _0x599e64.toString.bind(_0x599e64), _0x203623[_0x4281d7] = _0x43efda;
      }
    });
  _0xd38781();
  function _0x4ec450(_0xb5575d, _0x46e235) {
    document.addEventListener ? _0xb5575d.addEventListener('scroll', _0x46e235, !0x1) : _0xb5575d.attachEvent('scroll', _0x46e235);
  }
  function _0x45ebc0(_0x1e84a4) {
    this.a = document.createElement('div'), this.a.setAttribute('aria-hidden', 'true'), this.a.appendChild(document.createTextNode(_0x1e84a4)), this.b = document.createElement('span'), this.c = document.createElement('span'), this.h = document.createElement('span'), this.f = document.createElement('span'), this.g = -0x1, this.b.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this.c.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this.f.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this.h.style.cssText = 'display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;', this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c);
  }
  function _0x2e7758(_0x440172, _0x4ff091) {
    _0x440172.a.style.cssText = 'max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:' + _0x4ff091 + ';';
  }
  function _0x405d99(_0x44f64e) {
    var _0x35b600 = _0x44f64e.a.offsetWidth,
      _0x4ab7b2 = _0x35b600 + 0x64;
    return _0x44f64e.f.style.width = _0x4ab7b2 + 'px', _0x44f64e.c.scrollLeft = _0x4ab7b2, _0x44f64e.b.scrollLeft = _0x44f64e.b.scrollWidth + 0x64, _0x44f64e.g !== _0x35b600 ? (_0x44f64e.g = _0x35b600, !0x0) : !0x1;
  }
  function _0x3d804d(_0x450230, _0x29029c) {
    function _0x4d45df() {
      var _0xad0b6 = _0xc0370b;
      _0x405d99(_0xad0b6) && _0xad0b6.a.parentNode && _0x29029c(_0xad0b6.g);
    }
    var _0xc0370b = _0x450230;
    _0x4ec450(_0x450230.b, _0x4d45df), _0x4ec450(_0x450230.c, _0x4d45df), _0x405d99(_0x450230);
  }
  function _0x579427(_0x2a279c, _0x52a773) {
    var _0x2dbfe2 = _0x52a773 || {};
    this.family = _0x2a279c, this.style = _0x2dbfe2.style || 'normal', this.weight = _0x2dbfe2.weight || 'normal', this.stretch = _0x2dbfe2.stretch || 'normal';
  }
  function _0x19ff60() {
    return null === _0x50c890 && (_0x50c890 = !!document.fonts), _0x50c890;
  }
  function _0x58c392() {
    if (null === _0x486823) {
      var _0x13de29 = document.createElement('div');
      try {
        _0x13de29.style.font = "condensed 100px sans-serif";
      } catch (_0x24b24d) {}
      _0x486823 = '' !== _0x13de29.style.font;
    }
    return _0x486823;
  }
  function _0x29ad95(_0x3b0ee2, _0x23a5be) {
    return [_0x3b0ee2.style, _0x3b0ee2.weight, _0x58c392() ? _0x3b0ee2.stretch : '', '100px', _0x23a5be].join(" ");
  }
  var _0x3562a6 = null,
    _0x56fcee = null,
    _0x486823 = null,
    _0x50c890 = null;
  _0x579427.prototype.load = function (_0x162214, _0x29ef7f) {
    var _0x445758 = this,
      _0x3b6903 = _0x162214 || 'BESbswy',
      _0x1a3470 = 0x0,
      _0x552c56 = _0x29ef7f || 0xbb8,
      _0x48d759 = new Date().getTime();
    return new Promise(function (_0x58c251, _0x470b58) {
      var _0xbdff7c;
      if (_0xbdff7c = _0x19ff60()) null === _0x56fcee && (_0x19ff60() && /Apple/.test(window.navigator.vendor) ? (_0xbdff7c = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent), _0x56fcee = !!_0xbdff7c && 0x25b > parseInt(_0xbdff7c[0x1], 0xa)) : _0x56fcee = !0x1), _0xbdff7c = !_0x56fcee;
      if (_0xbdff7c) {
        _0xbdff7c = new Promise(function (_0x1670b1, _0x14d47c) {
          function _0x46296e() {
            new Date().getTime() - _0x48d759 >= _0x552c56 ? _0x14d47c(Error('' + _0x552c56 + "ms timeout exceeded")) : document.fonts.load(_0x29ad95(_0x445758, "\"" + _0x445758.family + "\""), _0x3b6903).then(function (_0x18e246) {
              0x1 <= _0x18e246.length ? _0x1670b1() : setTimeout(_0x46296e, 0x19);
            }, _0x14d47c);
          }
          _0x46296e();
        });
        var _0x2572df = new Promise(function (_0x5f3821, _0x1ba67b) {
          _0x1a3470 = setTimeout(function () {
            _0x1ba67b(Error('' + _0x552c56 + "ms timeout exceeded"));
          }, _0x552c56);
        });
        Promise.race([_0x2572df, _0xbdff7c]).then(function () {
          clearTimeout(_0x1a3470), _0x58c251(_0x445758);
        }, _0x470b58);
      } else {
        var _0x4a1841 = function () {
          function _0x19b42e() {
            var _0x225a85;
            if (_0x225a85 = -0x1 != _0x2e416d && -0x1 != _0x2b4b48 || -0x1 != _0x2e416d && -0x1 != _0x4a617d || -0x1 != _0x2b4b48 && -0x1 != _0x4a617d) (_0x225a85 = _0x2e416d != _0x2b4b48 && _0x2e416d != _0x4a617d && _0x2b4b48 != _0x4a617d) || (null === _0x3562a6 && (_0x225a85 = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), _0x3562a6 = !!_0x225a85 && (0x218 > parseInt(_0x225a85[0x1], 0xa) || 0x218 === parseInt(_0x225a85[0x1], 0xa) && 0xb >= parseInt(_0x225a85[0x2], 0xa))), _0x225a85 = _0x3562a6 && (_0x2e416d == _0x17739a && _0x2b4b48 == _0x17739a && _0x4a617d == _0x17739a || _0x2e416d == _0x33689e && _0x2b4b48 == _0x33689e && _0x4a617d == _0x33689e || _0x2e416d == _0xa64712 && _0x2b4b48 == _0xa64712 && _0x4a617d == _0xa64712)), _0x225a85 = !_0x225a85;
            _0x225a85 && (_0x176a94.parentNode && _0x176a94.parentNode.removeChild(_0x176a94), clearTimeout(_0x1a3470), _0x58c251(_0x445758));
          }
          function _0x3bc7a2() {
            if (new Date().getTime() - _0x48d759 >= _0x552c56) _0x176a94.parentNode && _0x176a94.parentNode.removeChild(_0x176a94), _0x470b58(Error('' + _0x552c56 + "ms timeout exceeded"));else {
              var _0x1a6bff = document.hidden;
              if (!0x0 === _0x1a6bff || void 0x0 === _0x1a6bff) _0x2e416d = _0x50121a.a.offsetWidth, _0x2b4b48 = _0x2ef51b.a.offsetWidth, _0x4a617d = _0x506750.a.offsetWidth, _0x19b42e();
              _0x1a3470 = setTimeout(_0x3bc7a2, 0x32);
            }
          }
          var _0x50121a = new _0x45ebc0(_0x3b6903),
            _0x2ef51b = new _0x45ebc0(_0x3b6903),
            _0x506750 = new _0x45ebc0(_0x3b6903),
            _0x2e416d = -0x1,
            _0x2b4b48 = -0x1,
            _0x4a617d = -0x1,
            _0x17739a = -0x1,
            _0x33689e = -0x1,
            _0xa64712 = -0x1,
            _0x176a94 = document.createElement('div');
          _0x176a94.dir = 'ltr', _0x2e7758(_0x50121a, _0x29ad95(_0x445758, 'sans-serif')), _0x2e7758(_0x2ef51b, _0x29ad95(_0x445758, 'serif')), _0x2e7758(_0x506750, _0x29ad95(_0x445758, 'monospace')), _0x176a94.appendChild(_0x50121a.a), _0x176a94.appendChild(_0x2ef51b.a), _0x176a94.appendChild(_0x506750.a), document.body.appendChild(_0x176a94), _0x17739a = _0x50121a.a.offsetWidth, _0x33689e = _0x2ef51b.a.offsetWidth, _0xa64712 = _0x506750.a.offsetWidth, _0x3bc7a2(), _0x3d804d(_0x50121a, function (_0x9ffc25) {
            _0x2e416d = _0x9ffc25, _0x19b42e();
          }), _0x2e7758(_0x50121a, _0x29ad95(_0x445758, "\"" + _0x445758.family + "\",sans-serif")), _0x3d804d(_0x2ef51b, function (_0x3df8e3) {
            _0x2b4b48 = _0x3df8e3, _0x19b42e();
          }), _0x2e7758(_0x2ef51b, _0x29ad95(_0x445758, "\"" + _0x445758.family + "\",serif")), _0x3d804d(_0x506750, function (_0x2203e3) {
            _0x4a617d = _0x2203e3, _0x19b42e();
          }), _0x2e7758(_0x506750, _0x29ad95(_0x445758, "\"" + _0x445758.family + "\",monospace"));
        };
        document.body ? _0x4a1841() : document.addEventListener ? document.addEventListener('DOMContentLoaded', function _0x34db9a() {
          document.removeEventListener('DOMContentLoaded', _0x34db9a), _0x4a1841();
        }) : document.attachEvent('onreadystatechange', function _0x1dc09a() {
          if ('interactive' == document.readyState || 'complete' == document.readyState) document.detachEvent('onreadystatechange', _0x1dc09a), _0x4a1841();
        });
      }
    });
  }, 'object' === typeof module ? module.exports = _0x579427 : (window.FontFaceObserver = _0x579427, window.FontFaceObserver.prototype.load = _0x579427.prototype.load);
}(), function (_0x2e642d) {
  Number.prototype.map = function (_0xdce252, _0xe124f5, _0x48f973, _0x841f37) {
    return _0x48f973 + (_0x841f37 - _0x48f973) * ((this - _0xdce252) / (_0xe124f5 - _0xdce252));
  }, Number.prototype.limit = function (_0x2ca8b3, _0x1a3a93) {
    return Math.min(_0x1a3a93, Math.max(_0x2ca8b3, this));
  }, Number.prototype.round = function (_0x464f06) {
    return _0x464f06 = Math.pow(0xa, _0x464f06 || 0x0), Math.round(this * _0x464f06) / _0x464f06;
  }, Number.prototype.floor = function () {
    return Math.floor(this);
  }, Number.prototype.ceil = function () {
    return Math.ceil(this);
  }, Number.prototype.toInt = function () {
    return this | 0x0;
  }, Number.prototype.toRad = function () {
    return this / 0xb4 * Math.PI;
  }, Number.prototype.toDeg = function () {
    return 0xb4 * this / Math.PI;
  }, Object.defineProperty(Array.prototype, 'erase', {
    'value': function (_0x344a97) {
      for (var _0x1c499e = this.length; _0x1c499e--;) this[_0x1c499e] === _0x344a97 && this.splice(_0x1c499e, 0x1);
      return this;
    }
  }), Object.defineProperty(Array.prototype, 'random', {
    'value': function () {
      return this[Math.floor(Math.random() * this.length)];
    }
  }), Function.prototype.bind = Function.prototype.bind || function (_0x3ae04f) {
    if ('function' !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var _0x4b3718 = Array.prototype.slice.call(arguments, 0x1),
      _0x164af2 = this,
      _0x491ef3 = function () {},
      _0x3746d2 = function () {
        return _0x164af2.apply(this instanceof _0x491ef3 && _0x3ae04f ? this : _0x3ae04f, _0x4b3718.concat(Array.prototype.slice.call(arguments)));
      };
    return _0x491ef3.prototype = this.prototype, _0x3746d2.prototype = new _0x491ef3(), _0x3746d2;
  }, _0x2e642d.ig = {
    'game': null,
    'debug': null,
    'version': '1.24',
    'global': _0x2e642d,
    'modules': {},
    'resources': [],
    'ready': !0x1,
    'baked': !0x1,
    'nocache': '',
    'ua': {},
    'prefix': _0x2e642d.ImpactPrefix || '',
    'lib': 'lib/',
    '_current': null,
    '_loadQueue': [],
    '_waitForOnload': 0x0,
    '$': function (_0x380c3d) {
      return '#' == _0x380c3d.charAt(0x0) ? document.getElementById(_0x380c3d.substr(0x1)) : document.getElementsByTagName(_0x380c3d);
    },
    '$new': function (_0xe73cb7) {
      return document.createElement(_0xe73cb7);
    },
    'copy': function (_0x2c96a5) {
      if (!_0x2c96a5 || 'object' != typeof _0x2c96a5 || _0x2c96a5 instanceof HTMLElement || _0x2c96a5 instanceof ig.Class) return _0x2c96a5;
      if (_0x2c96a5 instanceof Array) {
        for (var _0x268451 = [], _0x3db406 = 0x0, _0x2f0fa6 = _0x2c96a5.length; _0x3db406 < _0x2f0fa6; _0x3db406++) _0x268451[_0x3db406] = ig.copy(_0x2c96a5[_0x3db406]);
      } else {
        for (_0x3db406 in _0x268451 = {}, _0x2c96a5) _0x268451[_0x3db406] = ig.copy(_0x2c96a5[_0x3db406]);
      }
      return _0x268451;
    },
    'merge': function (_0x21f201, _0x5dc36c) {
      for (var _0x41e4c9 in _0x5dc36c) {
        var _0x4b0c93 = _0x5dc36c[_0x41e4c9];
        if ('object' != typeof _0x4b0c93 || _0x4b0c93 instanceof HTMLElement || _0x4b0c93 instanceof ig.Class || null === _0x4b0c93) _0x21f201[_0x41e4c9] = _0x4b0c93;else {
          if (!_0x21f201[_0x41e4c9] || 'object' != typeof _0x21f201[_0x41e4c9]) _0x21f201[_0x41e4c9] = _0x4b0c93 instanceof Array ? [] : {};
          ig.merge(_0x21f201[_0x41e4c9], _0x4b0c93);
        }
      }
      return _0x21f201;
    },
    'ksort': function (_0x2609e8) {
      if (!_0x2609e8 || 'object' != typeof _0x2609e8) return [];
      var _0xc07c49 = [],
        _0xf7baf6 = [],
        _0xd9a548;
      for (_0xd9a548 in _0x2609e8) _0xc07c49.push(_0xd9a548);
      _0xc07c49.sort();
      for (_0xd9a548 = 0x0; _0xd9a548 < _0xc07c49.length; _0xd9a548++) _0xf7baf6.push(_0x2609e8[_0xc07c49[_0xd9a548]]);
      return _0xf7baf6;
    },
    'setVendorAttribute': function (_0x4e0c16, _0x555211, _0x1c92be) {
      var _0x4b99bb = _0x555211.charAt(0x0).toUpperCase() + _0x555211.substr(0x1);
      _0x4e0c16[_0x555211] = _0x4e0c16['ms' + _0x4b99bb] = _0x4e0c16['moz' + _0x4b99bb] = _0x4e0c16['webkit' + _0x4b99bb] = _0x4e0c16['o' + _0x4b99bb] = _0x1c92be;
    },
    'getVendorAttribute': function (_0xd25c73, _0x141c9c) {
      var _0x53fc57 = _0x141c9c.charAt(0x0).toUpperCase() + _0x141c9c.substr(0x1);
      return _0xd25c73[_0x141c9c] || _0xd25c73['ms' + _0x53fc57] || _0xd25c73['moz' + _0x53fc57] || _0xd25c73['webkit' + _0x53fc57] || _0xd25c73['o' + _0x53fc57];
    },
    'normalizeVendorAttribute': function (_0x46130c, _0x198c84) {
      var _0x4d9dab = ig.getVendorAttribute(_0x46130c, _0x198c84);
      !_0x46130c[_0x198c84] && _0x4d9dab && (_0x46130c[_0x198c84] = _0x4d9dab);
    },
    'getImagePixels': function (_0x2ecc1a, _0x3d2575, _0x2a0153, _0xc39ca3, _0x5d3765) {
      var _0x7186da = ig.$new('canvas');
      _0x7186da.width = _0x2ecc1a.width, _0x7186da.height = _0x2ecc1a.height;
      var _0x371ff4 = _0x7186da.getContext('2d');
      ig.System.SCALE.CRISP(_0x7186da, _0x371ff4);
      var _0x8e00cc = ig.getVendorAttribute(_0x371ff4, 'backingStorePixelRatio') || 0x1;
      ig.normalizeVendorAttribute(_0x371ff4, 'getImageDataHD');
      var _0x6d39dd = _0x2ecc1a.width / _0x8e00cc,
        _0x2647a1 = _0x2ecc1a.height / _0x8e00cc;
      return _0x7186da.width = Math.ceil(_0x6d39dd), _0x7186da.height = Math.ceil(_0x2647a1), _0x371ff4.drawImage(_0x2ecc1a, 0x0, 0x0, _0x6d39dd, _0x2647a1), 0x1 === _0x8e00cc ? _0x371ff4.getImageData(_0x3d2575, _0x2a0153, _0xc39ca3, _0x5d3765) : _0x371ff4.getImageDataHD(_0x3d2575, _0x2a0153, _0xc39ca3, _0x5d3765);
    },
    'module': function (_0x4a94b8) {
      if (ig._current) throw "Module '" + ig._current.name + "' defines nothing";
      if (ig.modules[_0x4a94b8] && ig.modules[_0x4a94b8].body) throw "Module '" + _0x4a94b8 + "' is already defined";
      return ig._current = {
        'name': _0x4a94b8,
        'requires': [],
        'loaded': !0x1,
        'body': null
      }, ig.modules[_0x4a94b8] = ig._current, ig._loadQueue.push(ig._current), ig;
    },
    'requires': function () {
      return ig._current.requires = Array.prototype.slice.call(arguments), ig;
    },
    'defines': function (_0x3dbd5d) {
      ig._current.body = _0x3dbd5d, ig._current = null, ig._initDOMReady();
    },
    'addResource': function (_0x4091a7) {
      ig.resources.push(_0x4091a7);
    },
    'setNocache': function (_0x2d2d17) {
      ig.nocache = _0x2d2d17 ? '?' + Date.now() : '';
    },
    'log': function () {},
    'assert': function () {},
    'show': function () {},
    'mark': function () {},
    '_loadScript': function (_0xe0e964, _0x541345) {
      ig.modules[_0xe0e964] = {
        'name': _0xe0e964,
        'requires': [],
        'loaded': !0x1,
        'body': null
      }, ig._waitForOnload++;
      var _0x25668d = ig.prefix + ig.lib + _0xe0e964.replace(/\./g, '/') + '.js' + ig.nocache,
        _0x8e8ee4 = ig.$new('script');
      _0x8e8ee4.type = 'text/javascript', _0x8e8ee4.src = _0x25668d, _0x8e8ee4.onload = function () {
        ig._waitForOnload--, ig._execModules();
      }, _0x8e8ee4.onerror = function () {
        throw "Failed to load module " + _0xe0e964 + " at " + _0x25668d + " required from " + _0x541345;
      }, ig.$('head')[0x0].appendChild(_0x8e8ee4);
    },
    '_execModules': function () {
      for (var _0x14329c = !0x1, _0x4cb788 = 0x0; _0x4cb788 < ig._loadQueue.length; _0x4cb788++) {
        for (var _0x3bf622 = ig._loadQueue[_0x4cb788], _0x142fac = !0x0, _0x361333 = 0x0; _0x361333 < _0x3bf622.requires.length; _0x361333++) {
          var _0xfc45d2 = _0x3bf622.requires[_0x361333];
          ig.modules[_0xfc45d2] ? ig.modules[_0xfc45d2].loaded || (_0x142fac = !0x1) : (_0x142fac = !0x1, ig._loadScript(_0xfc45d2, _0x3bf622.name));
        }
        _0x142fac && _0x3bf622.body && (ig._loadQueue.splice(_0x4cb788, 0x1), _0x3bf622.loaded = !0x0, _0x3bf622.body(), _0x14329c = !0x0, _0x4cb788--);
      }
      if (_0x14329c) ig._execModules();else {
        if (!ig.baked && 0x0 == ig._waitForOnload && 0x0 != ig._loadQueue.length) {
          _0x14329c = [];
          for (_0x4cb788 = 0x0; _0x4cb788 < ig._loadQueue.length; _0x4cb788++) {
            _0x142fac = [], _0xfc45d2 = ig._loadQueue[_0x4cb788].requires;
            for (_0x361333 = 0x0; _0x361333 < _0xfc45d2.length; _0x361333++) _0x3bf622 = ig.modules[_0xfc45d2[_0x361333]], (!_0x3bf622 || !_0x3bf622.loaded) && _0x142fac.push(_0xfc45d2[_0x361333]);
            _0x14329c.push(ig._loadQueue[_0x4cb788].name + " (requires: " + _0x142fac.join(", ") + ')');
          }
          throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + _0x14329c.join("\n");
        }
      }
    },
    '_DOMReady': function () {
      if (!ig.modules['dom.ready'].loaded) {
        if (!document.body) return setTimeout(ig._DOMReady, 0xd);
        ig.modules['dom.ready'].loaded = !0x0, ig._waitForOnload--, ig._execModules();
      }
      return 0x0;
    },
    '_boot': function () {
      document.location.href.match(/\?nocache/) && ig.setNocache(!0x0), ig.ua.pixelRatio = _0x2e642d.devicePixelRatio || 0x1, ig.ua.viewport = {
        'width': _0x2e642d.innerWidth,
        'height': _0x2e642d.innerHeight
      }, ig.ua.screen = {
        'width': _0x2e642d.screen.availWidth * ig.ua.pixelRatio,
        'height': _0x2e642d.screen.availHeight * ig.ua.pixelRatio
      }, ig.ua.iPhone = /iPhone|iPod/i.test(navigator.userAgent), ig.ua.iPhone4 = ig.ua.iPhone && 0x2 == ig.ua.pixelRatio, ig.ua.iPad = /iPad/i.test(navigator.userAgent), ig.ua.android = /android/i.test(navigator.userAgent), ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent), ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad, ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.winPhone || /mobile/i.test(navigator.userAgent), ig.ua.touchDevice = 'ontouchstart' in _0x2e642d || _0x2e642d.navigator.msMaxTouchPoints;
    },
    '_initDOMReady': function () {
      ig.modules['dom.ready'] ? ig._execModules() : (ig._boot(), ig.modules['dom.ready'] = {
        'requires': [],
        'loaded': !0x1,
        'body': null
      }, ig._waitForOnload++, 'complete' === document.readyState ? ig._DOMReady() : (document.addEventListener('DOMContentLoaded', ig._DOMReady, !0x1), _0x2e642d.addEventListener('load', ig._DOMReady, !0x1)));
    }
  }, ig.normalizeVendorAttribute(_0x2e642d, 'requestAnimationFrame');
  if (_0x2e642d.requestAnimationFrame) {
    var _0x2c6445 = 0x1,
      _0x26c438 = {};
    _0x2e642d.ig.setAnimation = function (_0x228e9b) {
      var _0x254acf = _0x2c6445++;
      _0x26c438[_0x254acf] = !0x0;
      var _0x3ec393 = function () {
        _0x26c438[_0x254acf] && (_0x2e642d.requestAnimationFrame(_0x3ec393), _0x228e9b());
      };
      return _0x2e642d.requestAnimationFrame(_0x3ec393), _0x254acf;
    }, _0x2e642d.ig.clearAnimation = function (_0x4c9271) {
      delete _0x26c438[_0x4c9271];
    };
  } else _0x2e642d.ig.setAnimation = function (_0x43fc05) {
    return _0x2e642d.setInterval(_0x43fc05, 0x3e8 / 0x3c);
  }, _0x2e642d.ig.clearAnimation = function (_0x16f65e) {
    _0x2e642d.clearInterval(_0x16f65e);
  };
  var _0x2b0b28 = !0x1,
    _0xd16b63 = /xyz/.test(function () {
      xyz;
    }) ? /\bparent\b/ : /.*/,
    _0x147667 = 0x0;
  _0x2e642d.ig.Class = function () {};
  var _0x41e1f3 = function (_0x23252e) {
    var _0xf56e93 = this.prototype,
      _0x74aaeb = {},
      _0x108498;
    for (_0x108498 in _0x23252e) 'function' == typeof _0x23252e[_0x108498] && 'function' == typeof _0xf56e93[_0x108498] && _0xd16b63.test(_0x23252e[_0x108498]) ? (_0x74aaeb[_0x108498] = _0xf56e93[_0x108498], _0xf56e93[_0x108498] = function (_0x363e45, _0x535928) {
      return function () {
        var _0x1e3d67 = this.parent;
        this.parent = _0x74aaeb[_0x363e45];
        var _0x2e7984 = _0x535928.apply(this, arguments);
        return this.parent = _0x1e3d67, _0x2e7984;
      };
    }(_0x108498, _0x23252e[_0x108498])) : _0xf56e93[_0x108498] = _0x23252e[_0x108498];
  };
  _0x2e642d.ig.Class.extend = function (_0x2adceb) {
    function _0x438e64() {
      if (!_0x2b0b28) {
        if (this.staticInstantiate) {
          var _0x271134 = this.staticInstantiate.apply(this, arguments);
          if (_0x271134) return _0x271134;
        }
        for (var _0x57c2d8 in this) 'object' == typeof this[_0x57c2d8] && (this[_0x57c2d8] = ig.copy(this[_0x57c2d8]));
        this.init && this.init.apply(this, arguments);
      }
      return this;
    }
    var _0x59edb3 = this.prototype;
    _0x2b0b28 = !0x0;
    var _0x3cbb6a = new this();
    _0x2b0b28 = !0x1;
    for (var _0x13bbc1 in _0x2adceb) _0x3cbb6a[_0x13bbc1] = 'function' == typeof _0x2adceb[_0x13bbc1] && 'function' == typeof _0x59edb3[_0x13bbc1] && _0xd16b63.test(_0x2adceb[_0x13bbc1]) ? function (_0x174feb, _0x54884b) {
      return function () {
        var _0xdddc0b = this.parent;
        this.parent = _0x59edb3[_0x174feb];
        var _0x22d8fe = _0x54884b.apply(this, arguments);
        return this.parent = _0xdddc0b, _0x22d8fe;
      };
    }(_0x13bbc1, _0x2adceb[_0x13bbc1]) : _0x2adceb[_0x13bbc1];
    return _0x438e64.prototype = _0x3cbb6a, _0x438e64.prototype.constructor = _0x438e64, _0x438e64.extend = _0x2e642d.ig.Class.extend, _0x438e64.inject = _0x41e1f3, _0x438e64.classId = _0x3cbb6a.classId = ++_0x147667, _0x438e64;
  }, _0x2e642d.ImpactMixin && ig.merge(ig, _0x2e642d.ImpactMixin);
}(window), ig.baked = !0x0, ig.module('impact.image').defines(function () {
  ig.Image = ig.Class.extend({
    'data': null,
    'width': 0x0,
    'height': 0x0,
    'loaded': !0x1,
    'failed': !0x1,
    'loadCallback': null,
    'path': '',
    'staticInstantiate': function (_0x37b877) {
      return ig.Image.cache[_0x37b877] || null;
    },
    'init': function (_0xdab1fa) {
      this.path = _0xdab1fa, this.load();
    },
    'load': function (_0x20d998) {
      this.loaded ? _0x20d998 && _0x20d998(this.path, !0x0) : (!this.loaded && ig.ready ? (this.loadCallback = _0x20d998 || null, this.data = new Image(), this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this), ig.Image.cache[this.path] = this);
    },
    'reload': function () {
      this.loaded = !0x1, this.data = new Image(), this.data.onload = this.onload.bind(this), this.data.src = this.path + '?' + Date.now();
    },
    'onload': function () {
      this.width = this.data.width, this.height = this.data.height, this.loaded = !0x0, 0x1 != ig.system.scale && this.resize(ig.system.scale), this.loadCallback && this.loadCallback(this.path, !0x0);
    },
    'onerror': function () {
      this.failed = !0x0, this.loadCallback && this.loadCallback(this.path, !0x1);
    },
    'resize': function (_0x3f8f30) {
      var _0x224167 = ig.getImagePixels(this.data, 0x0, 0x0, this.width, this.height),
        _0x403c12 = this.width * _0x3f8f30,
        _0x23863d = this.height * _0x3f8f30,
        _0x2eefb7 = ig.$new('canvas');
      _0x2eefb7.width = _0x403c12, _0x2eefb7.height = _0x23863d;
      for (var _0x4140c4 = _0x2eefb7.getContext('2d'), _0x23f279 = _0x4140c4.getImageData(0x0, 0x0, _0x403c12, _0x23863d), _0x388ae6 = 0x0; _0x388ae6 < _0x23863d; _0x388ae6++) for (var _0x382516 = 0x0; _0x382516 < _0x403c12; _0x382516++) {
        var _0x1b1e8e = 0x4 * (Math.floor(_0x388ae6 / _0x3f8f30) * this.width + Math.floor(_0x382516 / _0x3f8f30)),
          _0x4f7318 = 0x4 * (_0x388ae6 * _0x403c12 + _0x382516);
        _0x23f279.data[_0x4f7318] = _0x224167.data[_0x1b1e8e], _0x23f279.data[_0x4f7318 + 0x1] = _0x224167.data[_0x1b1e8e + 0x1], _0x23f279.data[_0x4f7318 + 0x2] = _0x224167.data[_0x1b1e8e + 0x2], _0x23f279.data[_0x4f7318 + 0x3] = _0x224167.data[_0x1b1e8e + 0x3];
      }
      _0x4140c4.putImageData(_0x23f279, 0x0, 0x0), this.data = _0x2eefb7;
    },
    'draw': function (_0x49350c, _0x243d9e, _0x19143d, _0x5ef0f4, _0x225ae1, _0x21aca7) {
      if (this.loaded) {
        var _0x1b0509 = ig.system.scale;
        _0x225ae1 = (_0x225ae1 ? _0x225ae1 : this.width) * _0x1b0509, _0x21aca7 = (_0x21aca7 ? _0x21aca7 : this.height) * _0x1b0509, ig.system.context.drawImage(this.data, _0x19143d ? _0x19143d * _0x1b0509 : 0x0, _0x5ef0f4 ? _0x5ef0f4 * _0x1b0509 : 0x0, _0x225ae1, _0x21aca7, ig.system.getDrawPos(_0x49350c), ig.system.getDrawPos(_0x243d9e), _0x225ae1, _0x21aca7), ig.Image.drawCount++;
      }
    },
    'drawTile': function (_0x10a139, _0x15069d, _0x57cd2d, _0x5b7a80, _0x195781, _0x5e63c1, _0x24d457) {
      _0x195781 = _0x195781 ? _0x195781 : _0x5b7a80;
      if (this.loaded && !(_0x5b7a80 > this.width || _0x195781 > this.height)) {
        var _0x5d36b8 = ig.system.scale,
          _0x541db1 = Math.floor(_0x5b7a80 * _0x5d36b8),
          _0x4aabc3 = Math.floor(_0x195781 * _0x5d36b8),
          _0x443127 = _0x5e63c1 ? -0x1 : 0x1,
          _0x1740b4 = _0x24d457 ? -0x1 : 0x1;
        if (_0x5e63c1 || _0x24d457) ig.system.context.save(), ig.system.context.scale(_0x443127, _0x1740b4);
        ig.system.context.drawImage(this.data, Math.floor(_0x57cd2d * _0x5b7a80) % this.width * _0x5d36b8, Math.floor(_0x57cd2d * _0x5b7a80 / this.width) * _0x195781 * _0x5d36b8, _0x541db1, _0x4aabc3, ig.system.getDrawPos(_0x10a139) * _0x443127 - (_0x5e63c1 ? _0x541db1 : 0x0), ig.system.getDrawPos(_0x15069d) * _0x1740b4 - (_0x24d457 ? _0x4aabc3 : 0x0), _0x541db1, _0x4aabc3), (_0x5e63c1 || _0x24d457) && ig.system.context.restore(), ig.Image.drawCount++;
      }
    }
  }), ig.Image.drawCount = 0x0, ig.Image.cache = {}, ig.Image.reloadCache = function () {
    for (var _0x2d17a6 in ig.Image.cache) ig.Image.cache[_0x2d17a6].reload();
  };
}), ig.baked = !0x0, ig.module('impact.font').requires('impact.image').defines(function () {
  ig.Font = ig.Image.extend({
    'widthMap': [],
    'indices': [],
    'firstChar': 0x20,
    'alpha': 0x1,
    'letterSpacing': 0x1,
    'lineSpacing': 0x0,
    'onload': function (_0x4f23b9) {
      this._loadMetrics(this.data), this.parent(_0x4f23b9), this.height -= 0x2;
    },
    'widthForString': function (_0x20b9d5) {
      if (-0x1 !== _0x20b9d5.indexOf("\n")) {
        _0x20b9d5 = _0x20b9d5.split("\n");
        for (var _0x45a3d7 = 0x0, _0x1e8c32 = 0x0; _0x1e8c32 < _0x20b9d5.length; _0x1e8c32++) _0x45a3d7 = Math.max(_0x45a3d7, this._widthForLine(_0x20b9d5[_0x1e8c32]));
        return _0x45a3d7;
      }
      return this._widthForLine(_0x20b9d5);
    },
    '_widthForLine': function (_0x363b10) {
      for (var _0x4f6b91 = 0x0, _0x22775c = 0x0; _0x22775c < _0x363b10.length; _0x22775c++) _0x4f6b91 += this.widthMap[_0x363b10.charCodeAt(_0x22775c) - this.firstChar];
      return 0x0 < _0x363b10.length && (_0x4f6b91 += this.letterSpacing * (_0x363b10.length - 0x1)), _0x4f6b91;
    },
    'heightForString': function (_0x1ddabc) {
      return _0x1ddabc.split("\n").length * (this.height + this.lineSpacing);
    },
    'draw': function (_0x2e4136, _0x30732e, _0x46fa83, _0x52d05f) {
      'string' != typeof _0x2e4136 && (_0x2e4136 = _0x2e4136.toString());
      if (-0x1 !== _0x2e4136.indexOf("\n")) {
        _0x2e4136 = _0x2e4136.split("\n");
        for (var _0xbf4562 = this.height + this.lineSpacing, _0x4b42cd = 0x0; _0x4b42cd < _0x2e4136.length; _0x4b42cd++) this.draw(_0x2e4136[_0x4b42cd], _0x30732e, _0x46fa83 + _0x4b42cd * _0xbf4562, _0x52d05f);
      } else {
        if (_0x52d05f == ig.Font.ALIGN.RIGHT || _0x52d05f == ig.Font.ALIGN.CENTER) _0x4b42cd = this._widthForLine(_0x2e4136), _0x30732e -= _0x52d05f == ig.Font.ALIGN.CENTER ? _0x4b42cd / 0x2 : _0x4b42cd;
        0x1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
        for (_0x4b42cd = 0x0; _0x4b42cd < _0x2e4136.length; _0x4b42cd++) _0x52d05f = _0x2e4136.charCodeAt(_0x4b42cd), _0x30732e += this._drawChar(_0x52d05f - this.firstChar, _0x30732e, _0x46fa83);
        0x1 !== this.alpha && (ig.system.context.globalAlpha = 0x1), ig.Image.drawCount += _0x2e4136.length;
      }
    },
    '_drawChar': function (_0x19b617, _0x173443, _0x4f7570) {
      if (!this.loaded || 0x0 > _0x19b617 || _0x19b617 >= this.indices.length) return 0x0;
      var _0x3f1767 = ig.system.scale,
        _0x55d9b9 = this.widthMap[_0x19b617] * _0x3f1767,
        _0x2c4eba = this.height * _0x3f1767;
      return ig.system.context.drawImage(this.data, this.indices[_0x19b617] * _0x3f1767, 0x0, _0x55d9b9, _0x2c4eba, ig.system.getDrawPos(_0x173443), ig.system.getDrawPos(_0x4f7570), _0x55d9b9, _0x2c4eba), this.widthMap[_0x19b617] + this.letterSpacing;
    },
    '_loadMetrics': function (_0x2ef9f5) {
      this.widthMap = [], this.indices = [];
      for (var _0x59774c = ig.getImagePixels(_0x2ef9f5, 0x0, _0x2ef9f5.height - 0x1, _0x2ef9f5.width, 0x1), _0x4cff1b = 0x0, _0xa1f4cd = 0x0; _0xa1f4cd < _0x2ef9f5.width; _0xa1f4cd++) {
        var _0x260c63 = 0x4 * _0xa1f4cd + 0x3;
        0x7f < _0x59774c.data[_0x260c63] ? _0x4cff1b++ : 0x80 > _0x59774c.data[_0x260c63] && _0x4cff1b && (this.widthMap.push(_0x4cff1b), this.indices.push(_0xa1f4cd - _0x4cff1b), _0x4cff1b = 0x0);
      }
      this.widthMap.push(_0x4cff1b), this.indices.push(_0xa1f4cd - _0x4cff1b);
    }
  }), ig.Font.ALIGN = {
    'LEFT': 0x0,
    'RIGHT': 0x1,
    'CENTER': 0x2
  };
}), ig.baked = !0x0, ig.module('impact.sound').defines(function () {
  ig.SoundManager = ig.Class.extend({
    'clips': {},
    'volume': 0x1,
    'format': null,
    'init': function () {
      if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !0x1;else {
        for (var _0x4c9544 = new Audio(), _0x498c1b = 0x0; _0x498c1b < ig.Sound.use.length; _0x498c1b++) {
          var _0x380a3d = ig.Sound.use[_0x498c1b];
          if (_0x4c9544.canPlayType(_0x380a3d.mime)) {
            this.format = _0x380a3d;
            break;
          }
        }
        this.format || (ig.Sound.enabled = !0x1), ig.Sound.enabled && ig.Sound.useWebAudio && (this.audioContext = new AudioContext(), this.boundWebAudioUnlock = this.unlockWebAudio.bind(this), ig.system.canvas.addEventListener('touchstart', this.boundWebAudioUnlock, !0x1), ig.system.canvas.addEventListener('mousedown', this.boundWebAudioUnlock, !0x1));
      }
    },
    'unlockWebAudio': function () {
      ig.system.canvas.removeEventListener('touchstart', this.boundWebAudioUnlock, !0x1), ig.system.canvas.removeEventListener('mousedown', this.boundWebAudioUnlock, !0x1);
      var _0x2ad50a = this.audioContext.createBuffer(0x1, 0x1, 0x5622),
        _0x34fc6e = this.audioContext.createBufferSource();
      _0x34fc6e.buffer = _0x2ad50a, _0x34fc6e.connect(this.audioContext.destination), _0x34fc6e.start(0x0);
    },
    'load': function (_0x571349, _0x231e3e, _0x13418b) {
      return _0x231e3e && ig.Sound.useWebAudio ? this.loadWebAudio(_0x571349, _0x231e3e, _0x13418b) : this.loadHTML5Audio(_0x571349, _0x231e3e, _0x13418b);
    },
    'loadWebAudio': function (_0x1f3399, _0x5abe84, _0x10ef7f) {
      _0x5abe84 = ig.prefix + _0x1f3399.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
      if (this.clips[_0x1f3399]) return this.clips[_0x1f3399];
      var _0x1744d7 = new ig.Sound.WebAudioSource();
      this.clips[_0x1f3399] = _0x1744d7;
      var _0x3dc4db = new XMLHttpRequest();
      _0x3dc4db.open('GET', _0x5abe84, !0x0), _0x3dc4db.responseType = 'arraybuffer';
      var _0x4dbeb7 = this;
      return _0x3dc4db.onload = function (_0x14edf3) {
        _0x4dbeb7.audioContext.decodeAudioData(_0x3dc4db.response, function (_0x7e0864) {
          _0x1744d7.buffer = _0x7e0864, _0x10ef7f && _0x10ef7f(_0x1f3399, !0x0, _0x14edf3);
        }, function (_0x189726) {
          _0x10ef7f && _0x10ef7f(_0x1f3399, !0x1, _0x189726);
        });
      }, _0x3dc4db.onerror = function (_0x1d45e0) {
        _0x10ef7f && _0x10ef7f(_0x1f3399, !0x1, _0x1d45e0);
      }, _0x3dc4db.send(), _0x1744d7;
    },
    'loadHTML5Audio': function (_0x23de82, _0x16fa5e, _0xc60572) {
      var _0x4484b9 = ig.prefix + _0x23de82.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
      if (this.clips[_0x23de82]) {
        if (this.clips[_0x23de82] instanceof ig.Sound.WebAudioSource) return this.clips[_0x23de82];
        if (_0x16fa5e && this.clips[_0x23de82].length < ig.Sound.channels) for (_0x16fa5e = this.clips[_0x23de82].length; _0x16fa5e < ig.Sound.channels; _0x16fa5e++) {
          var _0x1efe2b = new Audio(_0x4484b9);
          _0x1efe2b.load(), this.clips[_0x23de82].push(_0x1efe2b);
        }
        return this.clips[_0x23de82][0x0];
      }
      var _0xc5f5 = new Audio(_0x4484b9);
      _0xc60572 && (ig.ua.mobile ? setTimeout(function () {
        _0xc60572(_0x23de82, !0x0, null);
      }, 0x0) : (_0xc5f5.addEventListener('canplaythrough', function _0x5413cb(_0x45c469) {
        _0xc5f5.removeEventListener('canplaythrough', _0x5413cb, !0x1), _0xc60572(_0x23de82, !0x0, _0x45c469);
      }, !0x1), _0xc5f5.addEventListener('error', function (_0x2ef398) {
        _0xc60572(_0x23de82, !0x1, _0x2ef398);
      }, !0x1))), _0xc5f5.preload = 'auto', _0xc5f5.load(), this.clips[_0x23de82] = [_0xc5f5];
      if (_0x16fa5e) {
        for (_0x16fa5e = 0x1; _0x16fa5e < ig.Sound.channels; _0x16fa5e++) _0x1efe2b = new Audio(_0x4484b9), _0x1efe2b.load(), this.clips[_0x23de82].push(_0x1efe2b);
      }
      return _0xc5f5;
    },
    'get': function (_0xd53e9e) {
      if ((_0xd53e9e = this.clips[_0xd53e9e]) && _0xd53e9e instanceof ig.Sound.WebAudioSource) return _0xd53e9e;
      for (var _0x2bf07f = 0x0, _0x53ab11; _0x53ab11 = _0xd53e9e[_0x2bf07f++];) if (_0x53ab11.paused || _0x53ab11.ended) return _0x53ab11.ended && (_0x53ab11.currentTime = 0x0), _0x53ab11;
      return _0xd53e9e[0x0].pause(), _0xd53e9e[0x0].currentTime = 0x0, _0xd53e9e[0x0];
    }
  }), ig.Music = ig.Class.extend({
    'tracks': [],
    'namedTracks': {},
    'currentTrack': null,
    'currentIndex': 0x0,
    'random': !0x1,
    '_volume': 0x1,
    '_loop': !0x1,
    '_fadeInterval': 0x0,
    '_fadeTimer': null,
    '_endedCallbackBound': null,
    'init': function () {
      this._endedCallbackBound = this._endedCallback.bind(this), Object.defineProperty(this, 'volume', {
        'get': this.getVolume.bind(this),
        'set': this.setVolume.bind(this)
      }), Object.defineProperty(this, 'loop', {
        'get': this.getLooping.bind(this),
        'set': this.setLooping.bind(this)
      });
    },
    'add': function (_0x555b1e, _0x3c804c) {
      if (ig.Sound.enabled) {
        var _0x5ba3d1 = _0x555b1e instanceof ig.Sound ? _0x555b1e.path : _0x555b1e,
          _0xfdb43b = ig.soundManager.load(_0x5ba3d1, !0x1);
        if (_0xfdb43b instanceof ig.Sound.WebAudioSource) throw ig.system.stopRunLoop(), "Sound '" + _0x5ba3d1 + "' loaded as Multichannel but used for Music. Set the multiChannel param to false when loading, e.g.: new ig.Sound(path, false)";
        _0xfdb43b.loop = this._loop, _0xfdb43b.volume = this._volume, _0xfdb43b.addEventListener('ended', this._endedCallbackBound, !0x1), this.tracks.push(_0xfdb43b), _0x3c804c && (this.namedTracks[_0x3c804c] = _0xfdb43b), this.currentTrack || (this.currentTrack = _0xfdb43b);
      }
    },
    'next': function () {
      this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 0x1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play());
    },
    'pause': function () {
      this.currentTrack && this.currentTrack.pause();
    },
    'stop': function () {
      this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0x0);
    },
    'play': function (_0x3767a3) {
      if (_0x3767a3 && this.namedTracks[_0x3767a3]) _0x3767a3 = this.namedTracks[_0x3767a3], _0x3767a3 != this.currentTrack && (this.stop(), this.currentTrack = _0x3767a3);else {
        if (!this.currentTrack) return;
      }
      this.currentTrack.play();
    },
    'getLooping': function () {
      return this._loop;
    },
    'setLooping': function (_0x251c4b) {
      this._loop = _0x251c4b;
      for (var _0xf4d898 in this.tracks) this.tracks[_0xf4d898].loop = _0x251c4b;
    },
    'getVolume': function () {
      return this._volume;
    },
    'setVolume': function (_0x4e1fd4) {
      this._volume = _0x4e1fd4.limit(0x0, 0x1);
      for (var _0x36d6c2 in this.tracks) this.tracks[_0x36d6c2].volume = this._volume;
    },
    'fadeOut': function (_0x3b11a8) {
      this.currentTrack && (clearInterval(this._fadeInterval), this._fadeTimer = new ig.Timer(_0x3b11a8), this._fadeInterval = setInterval(this._fadeStep.bind(this), 0x32));
    },
    '_fadeStep': function () {
      var _0x2f81da = this._fadeTimer.delta().map(-this._fadeTimer.target, 0x0, 0x1, 0x0).limit(0x0, 0x1) * this._volume;
      0.01 >= _0x2f81da ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = _0x2f81da;
    },
    '_endedCallback': function () {
      this._loop ? this.play() : this.next();
    }
  }), ig.Sound = ig.Class.extend({
    'path': '',
    'volume': 0x1,
    'currentClip': null,
    'multiChannel': !0x0,
    '_loop': !0x1,
    'init': function (_0xf716a1, _0x1b8fc7) {
      this.path = _0xf716a1, this.multiChannel = !0x1 !== _0x1b8fc7, Object.defineProperty(this, 'loop', {
        'get': this.getLooping.bind(this),
        'set': this.setLooping.bind(this)
      }), this.load();
    },
    'getLooping': function () {
      return this._loop;
    },
    'setLooping': function (_0x50393b) {
      this._loop = _0x50393b, this.currentClip && (this.currentClip.loop = _0x50393b);
    },
    'load': function (_0x2201eb) {
      ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path, this.multiChannel, _0x2201eb) : ig.addResource(this) : _0x2201eb && _0x2201eb(this.path, !0x0);
    },
    'play': function () {
      ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.loop = this._loop, this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play());
    },
    'stop': function () {
      this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0x0);
    }
  }), ig.Sound.WebAudioSource = ig.Class.extend({
    'sources': [],
    'gain': null,
    'buffer': null,
    '_loop': !0x1,
    'init': function () {
      this.gain = ig.soundManager.audioContext.createGain(), this.gain.connect(ig.soundManager.audioContext.destination), Object.defineProperty(this, 'loop', {
        'get': this.getLooping.bind(this),
        'set': this.setLooping.bind(this)
      }), Object.defineProperty(this, 'volume', {
        'get': this.getVolume.bind(this),
        'set': this.setVolume.bind(this)
      });
    },
    'play': function () {
      if (this.buffer) {
        var _0x4d7009 = ig.soundManager.audioContext.createBufferSource();
        _0x4d7009.buffer = this.buffer, _0x4d7009.connect(this.gain), _0x4d7009.loop = this._loop;
        var _0x1cdd9f = this;
        this.sources.push(_0x4d7009), _0x4d7009.onended = function () {
          _0x1cdd9f.sources.erase(_0x4d7009);
        }, _0x4d7009.start(0x0);
      }
    },
    'pause': function () {
      for (var _0x291011 = 0x0; _0x291011 < this.sources.length; _0x291011++) try {
        this.sources[_0x291011].stop();
      } catch (_0x59c733) {}
    },
    'getLooping': function () {
      return this._loop;
    },
    'setLooping': function (_0x3e4bb6) {
      this._loop = _0x3e4bb6;
      for (var _0x2d7d80 = 0x0; _0x2d7d80 < this.sources.length; _0x2d7d80++) this.sources[_0x2d7d80].loop = _0x3e4bb6;
    },
    'getVolume': function () {
      return this.gain.gain.value;
    },
    'setVolume': function (_0x2378c8) {
      this.gain.gain.value = _0x2378c8;
    }
  }), ig.Sound.FORMAT = {
    'MP3': {
      'ext': 'mp3',
      'mime': 'audio/mpeg'
    },
    'M4A': {
      'ext': 'm4a',
      'mime': "audio/mp4; codecs=mp4a.40.2"
    },
    'OGG': {
      'ext': 'ogg',
      'mime': "audio/ogg; codecs=vorbis"
    },
    'WEBM': {
      'ext': 'webm',
      'mime': "audio/webm; codecs=vorbis"
    },
    'CAF': {
      'ext': 'caf',
      'mime': 'audio/x-caf'
    }
  }, ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3], ig.Sound.channels = 0x4, ig.Sound.enabled = !0x0, ig.normalizeVendorAttribute(window, 'AudioContext'), ig.Sound.useWebAudio = !!window.AudioContext;
}), ig.baked = !0x0, ig.module('impact.loader').requires('impact.image', 'impact.font', 'impact.sound').defines(function () {
  ig.Loader = ig.Class.extend({
    'resources': [],
    'gameClass': null,
    'status': 0x0,
    'done': !0x1,
    '_unloaded': [],
    '_drawStatus': 0x0,
    '_intervalId': 0x0,
    '_loadCallbackBound': null,
    'init': function (_0x6d75f9, _0x1e638c) {
      this.gameClass = _0x6d75f9, this.resources = _0x1e638c, this._loadCallbackBound = this._loadCallback.bind(this);
      for (var _0x260e04 = 0x0; _0x260e04 < this.resources.length; _0x260e04++) this._unloaded.push(this.resources[_0x260e04].path);
    },
    'load': function () {
      ig.system.clear('#000');
      if (this.resources.length) {
        for (var _0x51f7d1 = 0x0; _0x51f7d1 < this.resources.length; _0x51f7d1++) this.loadResource(this.resources[_0x51f7d1]);
        this._intervalId = setInterval(this.draw.bind(this), 0x10);
      } else this.end();
    },
    'loadResource': function (_0x31c1a1) {
      _0x31c1a1.load(this._loadCallbackBound);
    },
    'end': function () {
      this.done || (this.done = !0x0, clearInterval(this._intervalId), ig.system.setGame(this.gameClass));
    },
    'draw': function () {
      this._drawStatus += (this.status - this._drawStatus) / 0x5;
      var _0x36174b = ig.system.scale,
        _0x542841 = (0.6 * ig.system.width).floor(),
        _0x5e89e3 = (0.1 * ig.system.height).floor(),
        _0x1dd119 = (0.5 * ig.system.width - _0x542841 / 0x2).floor(),
        _0x140167 = (0.5 * ig.system.height - _0x5e89e3 / 0x2).floor();
      ig.system.context.fillStyle = '#000', ig.system.context.fillRect(0x0, 0x0, ig.system.width, ig.system.height), ig.system.context.fillStyle = '#fff', ig.system.context.fillRect(_0x1dd119 * _0x36174b, _0x140167 * _0x36174b, _0x542841 * _0x36174b, _0x5e89e3 * _0x36174b), ig.system.context.fillStyle = '#000', ig.system.context.fillRect(_0x1dd119 * _0x36174b + _0x36174b, _0x140167 * _0x36174b + _0x36174b, _0x542841 * _0x36174b - _0x36174b - _0x36174b, _0x5e89e3 * _0x36174b - _0x36174b - _0x36174b), ig.system.context.fillStyle = '#fff', ig.system.context.fillRect(_0x1dd119 * _0x36174b, _0x140167 * _0x36174b, _0x542841 * _0x36174b * this._drawStatus, _0x5e89e3 * _0x36174b);
    },
    '_loadCallback': function (_0x3c2325, _0x578c81) {
      if (_0x578c81) this._unloaded.erase(_0x3c2325);else throw "Failed to load resource: " + _0x3c2325;
      this.status = 0x1 - this._unloaded.length / this.resources.length, 0x0 == this._unloaded.length && setTimeout(this.end.bind(this), 0xfa);
    }
  });
}), ig.baked = !0x0, ig.module('impact.timer').defines(function () {
  ig.Timer = ig.Class.extend({
    'target': 0x0,
    'base': 0x0,
    'last': 0x0,
    'pausedAt': 0x0,
    'init': function (_0x3a4c44) {
      this.last = this.base = ig.Timer.time, this.target = _0x3a4c44 || 0x0;
    },
    'set': function (_0x990c66) {
      this.target = _0x990c66 || 0x0, this.base = ig.Timer.time, this.pausedAt = 0x0;
    },
    'reset': function () {
      this.base = ig.Timer.time, this.pausedAt = 0x0;
    },
    'tick': function () {
      var _0x2fb93f = ig.Timer.time - this.last;
      return this.last = ig.Timer.time, this.pausedAt ? 0x0 : _0x2fb93f;
    },
    'delta': function () {
      return (this.pausedAt || ig.Timer.time) - this.base - this.target;
    },
    'pause': function () {
      this.pausedAt || (this.pausedAt = ig.Timer.time);
    },
    'unpause': function () {
      this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0x0);
    }
  }), ig.Timer._last = 0x0, ig.Timer.time = Number.MIN_VALUE, ig.Timer.timeScale = 0x1, ig.Timer.maxStep = 0.05, ig.Timer.step = function () {
    var _0x170d17 = Date.now();
    ig.Timer.time += Math.min((_0x170d17 - ig.Timer._last) / 0x3e8, ig.Timer.maxStep) * ig.Timer.timeScale, ig.Timer._last = _0x170d17;
  };
}), ig.baked = !0x0, ig.module('impact.system').requires('impact.timer', 'impact.image').defines(function () {
  ig.System = ig.Class.extend({
    'fps': 0x1e,
    'width': 0x140,
    'height': 0xf0,
    'realWidth': 0x140,
    'realHeight': 0xf0,
    'scale': 0x1,
    'tick': 0x0,
    'animationId': 0x0,
    'newGameClass': null,
    'running': !0x1,
    'delegate': null,
    'clock': null,
    'canvas': null,
    'context': null,
    'init': function (_0x27ab75, _0x2afb18, _0x50f226, _0x1131e6, _0x1d395b) {
      this.fps = _0x2afb18, this.clock = new ig.Timer(), this.canvas = ig.$(_0x27ab75), this.resize(_0x50f226, _0x1131e6, _0x1d395b), this.context = this.canvas.getContext('2d'), this.getDrawPos = ig.System.drawMode, 0x1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP), ig.System.scaleMode(this.canvas, this.context);
    },
    'resize': function (_0x45d14b, _0x1f0885, _0x4c06fd) {
      this.width = _0x45d14b, this.height = _0x1f0885, this.scale = _0x4c06fd || this.scale, this.realWidth = this.width * this.scale, this.realHeight = this.height * this.scale, this.canvas.width = this.realWidth, this.canvas.height = this.realHeight;
    },
    'setGame': function (_0x39f194) {
      this.running ? this.newGameClass = _0x39f194 : this.setGameNow(_0x39f194);
    },
    'setGameNow': function (_0x4e5dc2) {
      ig.game = new _0x4e5dc2(), ig.system.setDelegate(ig.game);
    },
    'setDelegate': function (_0x22a1fd) {
      if ('function' == typeof _0x22a1fd.run) this.delegate = _0x22a1fd, this.startRunLoop();else throw "System.setDelegate: No run() function in object";
    },
    'stopRunLoop': function () {
      ig.clearAnimation(this.animationId), this.running = !0x1;
    },
    'startRunLoop': function () {
      this.stopRunLoop(), this.animationId = ig.setAnimation(this.run.bind(this)), this.running = !0x0;
    },
    'clear': function (_0x53c89f) {
      this.context.fillStyle = _0x53c89f, this.context.fillRect(0x0, 0x0, this.realWidth, this.realHeight);
    },
    'run': function () {
      ig.Timer.step(), this.tick = this.clock.tick(), this.delegate.run(), ig.input.clearPressed(), this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null);
    },
    'getDrawPos': null
  }), ig.System.DRAW = {
    'AUTHENTIC': function (_0x1f390a) {
      return Math.round(_0x1f390a) * this.scale;
    },
    'SMOOTH': function (_0x5cf578) {
      return Math.round(_0x5cf578 * this.scale);
    },
    'SUBPIXEL': function (_0x497f8f) {
      return _0x497f8f * this.scale;
    }
  }, ig.System.drawMode = ig.System.DRAW.SMOOTH, ig.System.SCALE = {
    'CRISP': function (_0x7f04bc, _0x379e5f) {
      ig.setVendorAttribute(_0x379e5f, 'imageSmoothingEnabled', !0x1), _0x7f04bc.style.imageRendering = '-moz-crisp-edges', _0x7f04bc.style.imageRendering = '-o-crisp-edges', _0x7f04bc.style.imageRendering = '-webkit-optimize-contrast', _0x7f04bc.style.imageRendering = 'crisp-edges', _0x7f04bc.style.msInterpolationMode = 'nearest-neighbor';
    },
    'SMOOTH': function (_0x5c0f3e, _0x3b437d) {
      ig.setVendorAttribute(_0x3b437d, 'imageSmoothingEnabled', !0x0), _0x5c0f3e.style.imageRendering = '', _0x5c0f3e.style.msInterpolationMode = '';
    }
  }, ig.System.scaleMode = ig.System.SCALE.SMOOTH;
}), ig.baked = !0x0, ig.module('impact.input').defines(function () {
  ig.KEY = {
    'MOUSE1': -0x1,
    'MOUSE2': -0x3,
    'MWHEEL_UP': -0x4,
    'MWHEEL_DOWN': -0x5,
    'BACKSPACE': 0x8,
    'TAB': 0x9,
    'ENTER': 0xd,
    'PAUSE': 0x13,
    'CAPS': 0x14,
    'ESC': 0x1b,
    'SPACE': 0x20,
    'PAGE_UP': 0x21,
    'PAGE_DOWN': 0x22,
    'END': 0x23,
    'HOME': 0x24,
    'LEFT_ARROW': 0x25,
    'UP_ARROW': 0x26,
    'RIGHT_ARROW': 0x27,
    'DOWN_ARROW': 0x28,
    'INSERT': 0x2d,
    'DELETE': 0x2e,
    '_0': 0x30,
    '_1': 0x31,
    '_2': 0x32,
    '_3': 0x33,
    '_4': 0x34,
    '_5': 0x35,
    '_6': 0x36,
    '_7': 0x37,
    '_8': 0x38,
    '_9': 0x39,
    'A': 0x41,
    'B': 0x42,
    'C': 0x43,
    'D': 0x44,
    'E': 0x45,
    'F': 0x46,
    'G': 0x47,
    'H': 0x48,
    'I': 0x49,
    'J': 0x4a,
    'K': 0x4b,
    'L': 0x4c,
    'M': 0x4d,
    'N': 0x4e,
    'O': 0x4f,
    'P': 0x50,
    'Q': 0x51,
    'R': 0x52,
    'S': 0x53,
    'T': 0x54,
    'U': 0x55,
    'V': 0x56,
    'W': 0x57,
    'X': 0x58,
    'Y': 0x59,
    'Z': 0x5a,
    'NUMPAD_0': 0x60,
    'NUMPAD_1': 0x61,
    'NUMPAD_2': 0x62,
    'NUMPAD_3': 0x63,
    'NUMPAD_4': 0x64,
    'NUMPAD_5': 0x65,
    'NUMPAD_6': 0x66,
    'NUMPAD_7': 0x67,
    'NUMPAD_8': 0x68,
    'NUMPAD_9': 0x69,
    'MULTIPLY': 0x6a,
    'ADD': 0x6b,
    'SUBSTRACT': 0x6d,
    'DECIMAL': 0x6e,
    'DIVIDE': 0x6f,
    'F1': 0x70,
    'F2': 0x71,
    'F3': 0x72,
    'F4': 0x73,
    'F5': 0x74,
    'F6': 0x75,
    'F7': 0x76,
    'F8': 0x77,
    'F9': 0x78,
    'F10': 0x79,
    'F11': 0x7a,
    'F12': 0x7b,
    'SHIFT': 0x10,
    'CTRL': 0x11,
    'ALT': 0x12,
    'PLUS': 0xbb,
    'COMMA': 0xbc,
    'MINUS': 0xbd,
    'PERIOD': 0xbe
  }, ig.Input = ig.Class.extend({
    'bindings': {},
    'actions': {},
    'presses': {},
    'locks': {},
    'delayedKeyup': {},
    'isUsingMouse': !0x1,
    'isUsingKeyboard': !0x1,
    'isUsingAccelerometer': !0x1,
    'mouse': {
      'x': 0x0,
      'y': 0x0
    },
    'accel': {
      'x': 0x0,
      'y': 0x0,
      'z': 0x0
    },
    'initMouse': function () {
      this.isUsingMouse || (this.isUsingMouse = !0x0, ig.system.canvas.addEventListener('wheel', this.mousewheel.bind(this), !0x1), ig.system.canvas.addEventListener('contextmenu', this.contextmenu.bind(this), !0x1), ig.system.canvas.addEventListener('mousedown', this.keydown.bind(this), !0x1), ig.system.canvas.addEventListener('mouseup', this.keyup.bind(this), !0x1), ig.system.canvas.addEventListener('mousemove', this.mousemove.bind(this), !0x1), ig.ua.touchDevice && (ig.system.canvas.addEventListener('touchstart', this.keydown.bind(this), !0x1), ig.system.canvas.addEventListener('touchend', this.keyup.bind(this), !0x1), ig.system.canvas.addEventListener('touchcancel', this.keyup.bind(this), !0x1), ig.system.canvas.addEventListener('touchmove', this.mousemove.bind(this), !0x1), ig.system.canvas.addEventListener('MSPointerDown', this.keydown.bind(this), !0x1), ig.system.canvas.addEventListener('MSPointerUp', this.keyup.bind(this), !0x1), ig.system.canvas.addEventListener('MSPointerMove', this.mousemove.bind(this), !0x1), ig.system.canvas.style.msTouchAction = 'none'));
    },
    'initKeyboard': function () {
      this.isUsingKeyboard || (this.isUsingKeyboard = !0x0, window.addEventListener('keydown', this.keydown.bind(this), !0x1), window.addEventListener('keyup', this.keyup.bind(this), !0x1));
    },
    'initAccelerometer': function () {
      this.isUsingAccelerometer || (this.isUsingAccelerometer = !0x0, window.addEventListener('devicemotion', this.devicemotion.bind(this), !0x1));
    },
    'mousewheel': function (_0x38c76e) {
      var _0x4c18fa = this.bindings[0x0 > _0x38c76e.deltaY ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
      _0x4c18fa && (this.actions[_0x4c18fa] = !0x0, this.presses[_0x4c18fa] = !0x0, this.delayedKeyup[_0x4c18fa] = !0x0, _0x38c76e.stopPropagation(), _0x38c76e.preventDefault());
    },
    'mousemove': function (_0x3089d9) {
      var _0x3a95e0 = ig.system.scale * ((ig.system.canvas.offsetWidth || ig.system.realWidth) / ig.system.realWidth),
        _0xccb49d = {
          'left': 0x0,
          'top': 0x0
        };
      ig.system.canvas.getBoundingClientRect && (_0xccb49d = ig.system.canvas.getBoundingClientRect()), _0x3089d9 = _0x3089d9.touches ? _0x3089d9.touches[0x0] : _0x3089d9, this.mouse.x = (_0x3089d9.clientX - _0xccb49d.left) / _0x3a95e0, this.mouse.y = (_0x3089d9.clientY - _0xccb49d.top) / _0x3a95e0;
    },
    'contextmenu': function (_0x3054de) {
      this.bindings[ig.KEY.MOUSE2] && (_0x3054de.stopPropagation(), _0x3054de.preventDefault());
    },
    'keydown': function (_0x5d360e) {
      var _0x4ca14f = _0x5d360e.target.tagName;
      if (!('INPUT' == _0x4ca14f || 'TEXTAREA' == _0x4ca14f)) {
        if (_0x4ca14f = 'keydown' == _0x5d360e.type ? _0x5d360e.keyCode : 0x2 == _0x5d360e.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, 0x0 > _0x4ca14f && !ig.ua.mobile && window.focus(), ('touchstart' == _0x5d360e.type || 'mousedown' == _0x5d360e.type) && this.mousemove(_0x5d360e), _0x4ca14f = this.bindings[_0x4ca14f]) this.actions[_0x4ca14f] = !0x0, this.locks[_0x4ca14f] || (this.presses[_0x4ca14f] = !0x0, this.locks[_0x4ca14f] = !0x0), _0x5d360e.preventDefault();
      }
    },
    'keyup': function (_0x4d99ee) {
      var _0x2aff81 = _0x4d99ee.target.tagName;
      if (!('INPUT' == _0x2aff81 || 'TEXTAREA' == _0x2aff81)) {
        if (_0x2aff81 = this.bindings['keyup' == _0x4d99ee.type ? _0x4d99ee.keyCode : 0x2 == _0x4d99ee.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[_0x2aff81] = !0x0, _0x4d99ee.preventDefault();
      }
    },
    'devicemotion': function (_0x3bb49a) {
      this.accel = _0x3bb49a.accelerationIncludingGravity;
    },
    'bind': function (_0xd19930, _0x3639be) {
      0x0 > _0xd19930 ? this.initMouse() : 0x0 < _0xd19930 && this.initKeyboard(), this.bindings[_0xd19930] = _0x3639be;
    },
    'bindTouch': function (_0x4fd016, _0x58c366) {
      var _0x3cb06b = ig.$(_0x4fd016),
        _0x4d72bd = this;
      _0x3cb06b.addEventListener('touchstart', function (_0x1be78b) {
        _0x4d72bd.touchStart(_0x1be78b, _0x58c366);
      }, !0x1), _0x3cb06b.addEventListener('touchend', function (_0x483aa1) {
        _0x4d72bd.touchEnd(_0x483aa1, _0x58c366);
      }, !0x1), _0x3cb06b.addEventListener('MSPointerDown', function (_0x127da9) {
        _0x4d72bd.touchStart(_0x127da9, _0x58c366);
      }, !0x1), _0x3cb06b.addEventListener('MSPointerUp', function (_0x5ada49) {
        _0x4d72bd.touchEnd(_0x5ada49, _0x58c366);
      }, !0x1);
    },
    'unbind': function (_0x3f9864) {
      this.delayedKeyup[this.bindings[_0x3f9864]] = !0x0, this.bindings[_0x3f9864] = null;
    },
    'unbindAll': function () {
      this.bindings = {}, this.actions = {}, this.presses = {}, this.locks = {}, this.delayedKeyup = {};
    },
    'state': function (_0x129170) {
      return this.actions[_0x129170];
    },
    'pressed': function (_0x42a8e5) {
      return this.presses[_0x42a8e5];
    },
    'released': function (_0x44e7b2) {
      return !!this.delayedKeyup[_0x44e7b2];
    },
    'clearPressed': function () {
      for (var _0x301da5 in this.delayedKeyup) this.actions[_0x301da5] = !0x1, this.locks[_0x301da5] = !0x1;
      this.delayedKeyup = {}, this.presses = {};
    },
    'touchStart': function (_0x5de1e9, _0x23ca5c) {
      return this.actions[_0x23ca5c] = !0x0, this.presses[_0x23ca5c] = !0x0, _0x5de1e9.stopPropagation(), _0x5de1e9.preventDefault(), !0x1;
    },
    'touchEnd': function (_0x29684c, _0x5d2709) {
      return this.delayedKeyup[_0x5d2709] = !0x0, _0x29684c.stopPropagation(), _0x29684c.preventDefault(), !0x1;
    }
  });
}), ig.baked = !0x0, ig.module('impact.impact').requires('dom.ready', 'impact.loader', 'impact.system', 'impact.input', 'impact.sound').defines(function () {
  ig.main = function (_0x2af058, _0x27406d, _0x45d3d0, _0x5926b7, _0x2e1912, _0x2ef019, _0x3d2564) {
    ig.system = new ig.System(_0x2af058, _0x45d3d0, _0x5926b7, _0x2e1912, _0x2ef019 || 0x1), ig.input = new ig.Input(), ig.soundManager = new ig.SoundManager(), ig.music = new ig.Music(), ig.ready = !0x0, new (_0x3d2564 || ig.Loader)(_0x27406d, ig.resources).load();
  };
}), ig.baked = !0x0, ig.module('impact.animation').requires('impact.timer', 'impact.image').defines(function () {
  ig.AnimationSheet = ig.Class.extend({
    'width': 0x8,
    'height': 0x8,
    'image': null,
    'init': function (_0x43b915, _0x5f028e, _0x3306d2) {
      this.width = _0x5f028e, this.height = _0x3306d2, this.image = new ig.Image(_0x43b915);
    }
  }), ig.Animation = ig.Class.extend({
    'sheet': null,
    'timer': null,
    'sequence': [],
    'flip': {
      'x': !0x1,
      'y': !0x1
    },
    'pivot': {
      'x': 0x0,
      'y': 0x0
    },
    'frameTime': 0x0,
    'frame': 0x0,
    'tile': 0x0,
    'stop': !0x1,
    'loopCount': 0x0,
    'alpha': 0x1,
    'angle': 0x0,
    'init': function (_0xf73ba2, _0x351e7d, _0x4a093d, _0x4ec820) {
      this.sheet = _0xf73ba2, this.pivot = {
        'x': _0xf73ba2.width / 0x2,
        'y': _0xf73ba2.height / 0x2
      }, this.timer = new ig.Timer(), this.frameTime = _0x351e7d, this.sequence = _0x4a093d, this.stop = !!_0x4ec820, this.tile = this.sequence[0x0];
    },
    'rewind': function () {
      return this.timer.set(), this.frame = this.loopCount = 0x0, this.tile = this.sequence[0x0], this;
    },
    'gotoFrame': function (_0xe8a646) {
      this.timer.set(this.frameTime * -_0xe8a646 - 0.0001), this.update();
    },
    'gotoRandomFrame': function () {
      this.gotoFrame(Math.floor(Math.random() * this.sequence.length));
    },
    'update': function () {
      var _0x22ca3f = Math.floor(this.timer.delta() / this.frameTime);
      this.loopCount = Math.floor(_0x22ca3f / this.sequence.length), this.frame = this.stop && 0x0 < this.loopCount ? this.sequence.length - 0x1 : _0x22ca3f % this.sequence.length, this.tile = this.sequence[this.frame];
    },
    'draw': function (_0x21e5a7, _0x619045) {
      var _0x576c95 = Math.max(this.sheet.width, this.sheet.height);
      _0x21e5a7 > ig.system.width || _0x619045 > ig.system.height || 0x0 > _0x21e5a7 + _0x576c95 || 0x0 > _0x619045 + _0x576c95 || (0x1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0x0 == this.angle ? this.sheet.image.drawTile(_0x21e5a7, _0x619045, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(_0x21e5a7 + this.pivot.x), ig.system.getDrawPos(_0x619045 + this.pivot.y)), ig.system.context.rotate(this.angle), this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 0x1 != this.alpha && (ig.system.context.globalAlpha = 0x1));
    }
  });
}), ig.baked = !0x0, ig.module('impact.entity').requires('impact.animation', 'impact.impact').defines(function () {
  ig.Entity = ig.Class.extend({
    'id': 0x0,
    'settings': {},
    'size': {
      'x': 0x10,
      'y': 0x10
    },
    'offset': {
      'x': 0x0,
      'y': 0x0
    },
    'pos': {
      'x': 0x0,
      'y': 0x0
    },
    'last': {
      'x': 0x0,
      'y': 0x0
    },
    'vel': {
      'x': 0x0,
      'y': 0x0
    },
    'accel': {
      'x': 0x0,
      'y': 0x0
    },
    'friction': {
      'x': 0x0,
      'y': 0x0
    },
    'maxVel': {
      'x': 0x64,
      'y': 0x64
    },
    'zIndex': 0x0,
    'gravityFactor': 0x1,
    'standing': !0x1,
    'bounciness': 0x0,
    'minBounceVelocity': 0x28,
    'anims': {},
    'animSheet': null,
    'currentAnim': null,
    'health': 0xa,
    'type': 0x0,
    'checkAgainst': 0x0,
    'collides': 0x0,
    '_killed': !0x1,
    'slopeStanding': {
      'min': 0x2c.toRad(),
      'max': 0x88.toRad()
    },
    'init': function (_0x190aa7, _0x5670fe, _0x4153c0) {
      this.id = ++ig.Entity._lastId, this.pos.x = this.last.x = _0x190aa7, this.pos.y = this.last.y = _0x5670fe, ig.merge(this, _0x4153c0);
    },
    'reset': function (_0x3c847d, _0x5089e8, _0x206acc) {
      var _0x5798ab = this.constructor.prototype;
      this.pos.x = _0x3c847d, this.pos.y = _0x5089e8, this.last.x = _0x3c847d, this.last.y = _0x5089e8, this.vel.x = _0x5798ab.vel.x, this.vel.y = _0x5798ab.vel.y, this.accel.x = _0x5798ab.accel.x, this.accel.y = _0x5798ab.accel.y, this.health = _0x5798ab.health, this._killed = _0x5798ab._killed, this.standing = _0x5798ab.standing, this.type = _0x5798ab.type, this.checkAgainst = _0x5798ab.checkAgainst, this.collides = _0x5798ab.collides, ig.merge(this, _0x206acc);
    },
    'addAnim': function (_0x51f578, _0x466e91, _0x2a17bf, _0x1f4304) {
      if (!this.animSheet) throw "No animSheet to add the animation " + _0x51f578 + " to.";
      return _0x466e91 = new ig.Animation(this.animSheet, _0x466e91, _0x2a17bf, _0x1f4304), this.anims[_0x51f578] = _0x466e91, this.currentAnim || (this.currentAnim = _0x466e91), _0x466e91;
    },
    'update': function () {
      this.last.x = this.pos.x, this.last.y = this.pos.y, this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor, this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x), this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
      var _0x124c62 = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
      this.handleMovementTrace(_0x124c62), this.currentAnim && this.currentAnim.update();
    },
    'getNewVelocity': function (_0x112548, _0x17338d, _0x3f7509, _0x54578e) {
      return _0x17338d ? (_0x112548 + _0x17338d * ig.system.tick).limit(-_0x54578e, _0x54578e) : _0x3f7509 ? (_0x17338d = _0x3f7509 * ig.system.tick, 0x0 < _0x112548 - _0x17338d ? _0x112548 - _0x17338d : 0x0 > _0x112548 + _0x17338d ? _0x112548 + _0x17338d : 0x0) : _0x112548.limit(-_0x54578e, _0x54578e);
    },
    'handleMovementTrace': function (_0x877256) {
      this.standing = !0x1, _0x877256.collision.y && (0x0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0x0 < this.vel.y && (this.standing = !0x0), this.vel.y = 0x0)), _0x877256.collision.x && (this.vel.x = 0x0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0x0);
      if (_0x877256.collision.slope) {
        var _0x125cf5 = _0x877256.collision.slope;
        if (0x0 < this.bounciness) {
          var _0x5e6fdb = this.vel.x * _0x125cf5.nx + this.vel.y * _0x125cf5.ny;
          this.vel.x = (this.vel.x - 0x2 * _0x125cf5.nx * _0x5e6fdb) * this.bounciness, this.vel.y = (this.vel.y - 0x2 * _0x125cf5.ny * _0x5e6fdb) * this.bounciness;
        } else _0x5e6fdb = (this.vel.x * _0x125cf5.x + this.vel.y * _0x125cf5.y) / (_0x125cf5.x * _0x125cf5.x + _0x125cf5.y * _0x125cf5.y), this.vel.x = _0x125cf5.x * _0x5e6fdb, this.vel.y = _0x125cf5.y * _0x5e6fdb, _0x125cf5 = Math.atan2(_0x125cf5.x, _0x125cf5.y), _0x125cf5 > this.slopeStanding.min && _0x125cf5 < this.slopeStanding.max && (this.standing = !0x0);
      }
      this.pos = _0x877256.pos;
    },
    'draw': function () {
      this.currentAnim && this.currentAnim.draw(this.pos.x - this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y);
    },
    'kill': function () {
      ig.game.removeEntity(this);
    },
    'receiveDamage': function (_0x220d3f) {
      this.health -= _0x220d3f, 0x0 >= this.health && this.kill();
    },
    'touches': function (_0x4381ce) {
      return !(this.pos.x >= _0x4381ce.pos.x + _0x4381ce.size.x || this.pos.x + this.size.x <= _0x4381ce.pos.x || this.pos.y >= _0x4381ce.pos.y + _0x4381ce.size.y || this.pos.y + this.size.y <= _0x4381ce.pos.y);
    },
    'distanceTo': function (_0x2e2269) {
      var _0x551760 = this.pos.x + this.size.x / 0x2 - (_0x2e2269.pos.x + _0x2e2269.size.x / 0x2);
      return _0x2e2269 = this.pos.y + this.size.y / 0x2 - (_0x2e2269.pos.y + _0x2e2269.size.y / 0x2), Math.sqrt(_0x551760 * _0x551760 + _0x2e2269 * _0x2e2269);
    },
    'angleTo': function (_0x37b6cd) {
      return Math.atan2(_0x37b6cd.pos.y + _0x37b6cd.size.y / 0x2 - (this.pos.y + this.size.y / 0x2), _0x37b6cd.pos.x + _0x37b6cd.size.x / 0x2 - (this.pos.x + this.size.x / 0x2));
    },
    'check': function () {},
    'collideWith': function () {},
    'ready': function () {},
    'erase': function () {}
  }), ig.Entity._lastId = 0x0, ig.Entity.COLLIDES = {
    'NEVER': 0x0,
    'LITE': 0x1,
    'PASSIVE': 0x2,
    'ACTIVE': 0x4,
    'FIXED': 0x8
  }, ig.Entity.TYPE = {
    'NONE': 0x0,
    'A': 0x1,
    'B': 0x2,
    'BOTH': 0x3
  }, ig.Entity.checkPair = function (_0x3a0960, _0x4c3fbc) {
    _0x3a0960.checkAgainst & _0x4c3fbc.type && _0x3a0960.check(_0x4c3fbc), _0x4c3fbc.checkAgainst & _0x3a0960.type && _0x4c3fbc.check(_0x3a0960), _0x3a0960.collides && _0x4c3fbc.collides && _0x3a0960.collides + _0x4c3fbc.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(_0x3a0960, _0x4c3fbc);
  }, ig.Entity.solveCollision = function (_0x3cb5a2, _0x5bb6b0) {
    var _0x57cdeb = null;
    if (_0x3cb5a2.collides == ig.Entity.COLLIDES.LITE || _0x5bb6b0.collides == ig.Entity.COLLIDES.FIXED) _0x57cdeb = _0x3cb5a2;else {
      if (_0x5bb6b0.collides == ig.Entity.COLLIDES.LITE || _0x3cb5a2.collides == ig.Entity.COLLIDES.FIXED) _0x57cdeb = _0x5bb6b0;
    }
    _0x3cb5a2.last.x + _0x3cb5a2.size.x > _0x5bb6b0.last.x && _0x3cb5a2.last.x < _0x5bb6b0.last.x + _0x5bb6b0.size.x ? (_0x3cb5a2.last.y < _0x5bb6b0.last.y ? ig.Entity.seperateOnYAxis(_0x3cb5a2, _0x5bb6b0, _0x57cdeb) : ig.Entity.seperateOnYAxis(_0x5bb6b0, _0x3cb5a2, _0x57cdeb), _0x3cb5a2.collideWith(_0x5bb6b0, 'y'), _0x5bb6b0.collideWith(_0x3cb5a2, 'y')) : _0x3cb5a2.last.y + _0x3cb5a2.size.y > _0x5bb6b0.last.y && _0x3cb5a2.last.y < _0x5bb6b0.last.y + _0x5bb6b0.size.y && (_0x3cb5a2.last.x < _0x5bb6b0.last.x ? ig.Entity.seperateOnXAxis(_0x3cb5a2, _0x5bb6b0, _0x57cdeb) : ig.Entity.seperateOnXAxis(_0x5bb6b0, _0x3cb5a2, _0x57cdeb), _0x3cb5a2.collideWith(_0x5bb6b0, 'x'), _0x5bb6b0.collideWith(_0x3cb5a2, 'x'));
  }, ig.Entity.seperateOnXAxis = function (_0x56d7e6, _0x943e3f, _0x2df52f) {
    var _0x43604f = _0x56d7e6.pos.x + _0x56d7e6.size.x - _0x943e3f.pos.x;
    _0x2df52f ? (_0x2df52f.vel.x = -_0x2df52f.vel.x * _0x2df52f.bounciness + (_0x56d7e6 === _0x2df52f ? _0x943e3f : _0x56d7e6).vel.x, _0x943e3f = ig.game.collisionMap.trace(_0x2df52f.pos.x, _0x2df52f.pos.y, _0x2df52f == _0x56d7e6 ? -_0x43604f : _0x43604f, 0x0, _0x2df52f.size.x, _0x2df52f.size.y), _0x2df52f.pos.x = _0x943e3f.pos.x) : (_0x2df52f = (_0x56d7e6.vel.x - _0x943e3f.vel.x) / 0x2, _0x56d7e6.vel.x = -_0x2df52f, _0x943e3f.vel.x = _0x2df52f, _0x2df52f = ig.game.collisionMap.trace(_0x56d7e6.pos.x, _0x56d7e6.pos.y, -_0x43604f / 0x2, 0x0, _0x56d7e6.size.x, _0x56d7e6.size.y), _0x56d7e6.pos.x = Math.floor(_0x2df52f.pos.x), _0x56d7e6 = ig.game.collisionMap.trace(_0x943e3f.pos.x, _0x943e3f.pos.y, _0x43604f / 0x2, 0x0, _0x943e3f.size.x, _0x943e3f.size.y), _0x943e3f.pos.x = Math.ceil(_0x56d7e6.pos.x));
  }, ig.Entity.seperateOnYAxis = function (_0x309474, _0x49a5ac, _0x12befa) {
    var _0x2f6a47 = _0x309474.pos.y + _0x309474.size.y - _0x49a5ac.pos.y;
    if (_0x12befa) {
      _0x49a5ac = _0x309474 === _0x12befa ? _0x49a5ac : _0x309474, _0x12befa.vel.y = -_0x12befa.vel.y * _0x12befa.bounciness + _0x49a5ac.vel.y;
      var _0x1d7318 = 0x0;
      _0x12befa == _0x309474 && Math.abs(_0x12befa.vel.y - _0x49a5ac.vel.y) < _0x12befa.minBounceVelocity && (_0x12befa.standing = !0x0, _0x1d7318 = _0x49a5ac.vel.x * ig.system.tick), _0x309474 = ig.game.collisionMap.trace(_0x12befa.pos.x, _0x12befa.pos.y, _0x1d7318, _0x12befa == _0x309474 ? -_0x2f6a47 : _0x2f6a47, _0x12befa.size.x, _0x12befa.size.y), _0x12befa.pos.y = _0x309474.pos.y, _0x12befa.pos.x = _0x309474.pos.x;
    } else ig.game.gravity && (_0x49a5ac.standing || 0x0 < _0x309474.vel.y) ? (_0x12befa = ig.game.collisionMap.trace(_0x309474.pos.x, _0x309474.pos.y, 0x0, -(_0x309474.pos.y + _0x309474.size.y - _0x49a5ac.pos.y), _0x309474.size.x, _0x309474.size.y), _0x309474.pos.y = _0x12befa.pos.y, 0x0 < _0x309474.bounciness && _0x309474.vel.y > _0x309474.minBounceVelocity ? _0x309474.vel.y *= -_0x309474.bounciness : (_0x309474.standing = !0x0, _0x309474.vel.y = 0x0)) : (_0x12befa = (_0x309474.vel.y - _0x49a5ac.vel.y) / 0x2, _0x309474.vel.y = -_0x12befa, _0x49a5ac.vel.y = _0x12befa, _0x1d7318 = _0x49a5ac.vel.x * ig.system.tick, _0x12befa = ig.game.collisionMap.trace(_0x309474.pos.x, _0x309474.pos.y, _0x1d7318, -_0x2f6a47 / 0x2, _0x309474.size.x, _0x309474.size.y), _0x309474.pos.y = _0x12befa.pos.y, _0x309474 = ig.game.collisionMap.trace(_0x49a5ac.pos.x, _0x49a5ac.pos.y, 0x0, _0x2f6a47 / 0x2, _0x49a5ac.size.x, _0x49a5ac.size.y), _0x49a5ac.pos.y = _0x309474.pos.y);
  };
}), ig.baked = !0x0, ig.module('impact.map').defines(function () {
  ig.Map = ig.Class.extend({
    'tilesize': 0x8,
    'width': 0x1,
    'height': 0x1,
    'pxWidth': 0x1,
    'pxHeight': 0x1,
    'data': [[]],
    'name': null,
    'init': function (_0x2adfa1, _0x4fbbf8) {
      this.tilesize = _0x2adfa1, this.data = _0x4fbbf8, this.height = _0x4fbbf8.length, this.width = _0x4fbbf8[0x0].length, this.pxWidth = this.width * this.tilesize, this.pxHeight = this.height * this.tilesize;
    },
    'getTile': function (_0x2fcf01, _0x5c641d) {
      var _0x1c1f46 = Math.floor(_0x2fcf01 / this.tilesize),
        _0x265170 = Math.floor(_0x5c641d / this.tilesize);
      return 0x0 <= _0x1c1f46 && _0x1c1f46 < this.width && 0x0 <= _0x265170 && _0x265170 < this.height ? this.data[_0x265170][_0x1c1f46] : 0x0;
    },
    'setTile': function (_0x47e505, _0x435451, _0x4e75da) {
      _0x47e505 = Math.floor(_0x47e505 / this.tilesize), _0x435451 = Math.floor(_0x435451 / this.tilesize), 0x0 <= _0x47e505 && _0x47e505 < this.width && 0x0 <= _0x435451 && _0x435451 < this.height && (this.data[_0x435451][_0x47e505] = _0x4e75da);
    }
  });
}), ig.baked = !0x0, ig.module('impact.collision-map').requires('impact.map').defines(function () {
  ig.CollisionMap = ig.Map.extend({
    'lastSlope': 0x1,
    'tiledef': null,
    'init': function (_0x330ec5, _0x29984c, _0x59dfcd) {
      this.parent(_0x330ec5, _0x29984c), this.tiledef = _0x59dfcd || ig.CollisionMap.defaultTileDef;
      for (var _0x43b276 in this.tiledef) _0x43b276 | 0x0 > this.lastSlope && (this.lastSlope = _0x43b276 | 0x0);
    },
    'trace': function (_0x43b6e0, _0x5d7451, _0x55ca15, _0x33fe0a, _0x3dbb64, _0x2df007) {
      var _0x351032 = {
          'collision': {
            'x': !0x1,
            'y': !0x1,
            'slope': !0x1
          },
          'pos': {
            'x': _0x43b6e0,
            'y': _0x5d7451
          },
          'tile': {
            'x': 0x0,
            'y': 0x0
          }
        },
        _0x361632 = Math.ceil((Math.max(Math.abs(_0x55ca15), Math.abs(_0x33fe0a)) + 0.1) / this.tilesize);
      if (0x1 < _0x361632) {
        for (var _0xa3dec0 = _0x55ca15 / _0x361632, _0x3ac6ca = _0x33fe0a / _0x361632, _0x3ac601 = 0x0; _0x3ac601 < _0x361632 && (_0xa3dec0 || _0x3ac6ca) && !(this._traceStep(_0x351032, _0x43b6e0, _0x5d7451, _0xa3dec0, _0x3ac6ca, _0x3dbb64, _0x2df007, _0x55ca15, _0x33fe0a, _0x3ac601), _0x43b6e0 = _0x351032.pos.x, _0x5d7451 = _0x351032.pos.y, _0x351032.collision.x && (_0x55ca15 = _0xa3dec0 = 0x0), _0x351032.collision.y && (_0x33fe0a = _0x3ac6ca = 0x0), _0x351032.collision.slope); _0x3ac601++);
      } else this._traceStep(_0x351032, _0x43b6e0, _0x5d7451, _0x55ca15, _0x33fe0a, _0x3dbb64, _0x2df007, _0x55ca15, _0x33fe0a, 0x0);
      return _0x351032;
    },
    '_traceStep': function (_0x3171e0, _0xafcd6a, _0x59f8a3, _0x18db6f, _0x260cc5, _0x4eafe9, _0x4d5906, _0x3310dd, _0x19f220, _0x2bae10) {
      _0x3171e0.pos.x += _0x18db6f, _0x3171e0.pos.y += _0x260cc5;
      var _0x2c99b1 = 0x0;
      if (_0x18db6f) {
        var _0x2ba1ca = 0x0 < _0x18db6f ? _0x4eafe9 : 0x0,
          _0x59cc52 = 0x0 > _0x18db6f ? this.tilesize : 0x0,
          _0x2c99b1 = Math.max(Math.floor(_0x59f8a3 / this.tilesize), 0x0),
          _0x59684c = Math.min(Math.ceil((_0x59f8a3 + _0x4d5906) / this.tilesize), this.height);
        _0x18db6f = Math.floor((_0x3171e0.pos.x + _0x2ba1ca) / this.tilesize);
        var _0x2fbce7 = Math.floor((_0xafcd6a + _0x2ba1ca) / this.tilesize);
        if (0x0 < _0x2bae10 || _0x18db6f == _0x2fbce7 || 0x0 > _0x2fbce7 || _0x2fbce7 >= this.width) _0x2fbce7 = -0x1;
        if (0x0 <= _0x18db6f && _0x18db6f < this.width) {
          for (var _0x43b1fc = _0x2c99b1; _0x43b1fc < _0x59684c && !(-0x1 != _0x2fbce7 && (_0x2c99b1 = this.data[_0x43b1fc][_0x2fbce7], 0x1 < _0x2c99b1 && _0x2c99b1 <= this.lastSlope && this._checkTileDef(_0x3171e0, _0x2c99b1, _0xafcd6a, _0x59f8a3, _0x3310dd, _0x19f220, _0x4eafe9, _0x4d5906, _0x2fbce7, _0x43b1fc))); _0x43b1fc++) if (_0x2c99b1 = this.data[_0x43b1fc][_0x18db6f], 0x1 == _0x2c99b1 || _0x2c99b1 > this.lastSlope || 0x1 < _0x2c99b1 && this._checkTileDef(_0x3171e0, _0x2c99b1, _0xafcd6a, _0x59f8a3, _0x3310dd, _0x19f220, _0x4eafe9, _0x4d5906, _0x18db6f, _0x43b1fc)) {
            if (0x1 < _0x2c99b1 && _0x2c99b1 <= this.lastSlope && _0x3171e0.collision.slope) break;
            _0x3171e0.collision.x = !0x0, _0x3171e0.tile.x = _0x2c99b1, _0xafcd6a = _0x3171e0.pos.x = _0x18db6f * this.tilesize - _0x2ba1ca + _0x59cc52, _0x3310dd = 0x0;
            break;
          }
        }
      }
      if (_0x260cc5) {
        _0x2ba1ca = 0x0 < _0x260cc5 ? _0x4d5906 : 0x0, _0x260cc5 = 0x0 > _0x260cc5 ? this.tilesize : 0x0, _0x2c99b1 = Math.max(Math.floor(_0x3171e0.pos.x / this.tilesize), 0x0), _0x59cc52 = Math.min(Math.ceil((_0x3171e0.pos.x + _0x4eafe9) / this.tilesize), this.width), _0x43b1fc = Math.floor((_0x3171e0.pos.y + _0x2ba1ca) / this.tilesize), _0x59684c = Math.floor((_0x59f8a3 + _0x2ba1ca) / this.tilesize);
        if (0x0 < _0x2bae10 || _0x43b1fc == _0x59684c || 0x0 > _0x59684c || _0x59684c >= this.height) _0x59684c = -0x1;
        if (0x0 <= _0x43b1fc && _0x43b1fc < this.height) {
          for (_0x18db6f = _0x2c99b1; _0x18db6f < _0x59cc52 && !(-0x1 != _0x59684c && (_0x2c99b1 = this.data[_0x59684c][_0x18db6f], 0x1 < _0x2c99b1 && _0x2c99b1 <= this.lastSlope && this._checkTileDef(_0x3171e0, _0x2c99b1, _0xafcd6a, _0x59f8a3, _0x3310dd, _0x19f220, _0x4eafe9, _0x4d5906, _0x18db6f, _0x59684c))); _0x18db6f++) if (_0x2c99b1 = this.data[_0x43b1fc][_0x18db6f], 0x1 == _0x2c99b1 || _0x2c99b1 > this.lastSlope || 0x1 < _0x2c99b1 && this._checkTileDef(_0x3171e0, _0x2c99b1, _0xafcd6a, _0x59f8a3, _0x3310dd, _0x19f220, _0x4eafe9, _0x4d5906, _0x18db6f, _0x43b1fc)) {
            if (0x1 < _0x2c99b1 && _0x2c99b1 <= this.lastSlope && _0x3171e0.collision.slope) break;
            _0x3171e0.collision.y = !0x0, _0x3171e0.tile.y = _0x2c99b1, _0x3171e0.pos.y = _0x43b1fc * this.tilesize - _0x2ba1ca + _0x260cc5;
            break;
          }
        }
      }
    },
    '_checkTileDef': function (_0x2ce960, _0xe9c4c7, _0x3f584b, _0x2050d7, _0x220752, _0x367156, _0x4a6ccb, _0x4183ca, _0x37278c, _0x131d0b) {
      var _0xc6a9f4 = this.tiledef[_0xe9c4c7];
      if (!_0xc6a9f4) return !0x1;
      _0xe9c4c7 = (_0xc6a9f4[0x2] - _0xc6a9f4[0x0]) * this.tilesize;
      var _0x3ecc9d = (_0xc6a9f4[0x3] - _0xc6a9f4[0x1]) * this.tilesize,
        _0x34e058 = _0xc6a9f4[0x4];
      _0x4a6ccb = _0x3f584b + _0x220752 + (0x0 > _0x3ecc9d ? _0x4a6ccb : 0x0) - (_0x37278c + _0xc6a9f4[0x0]) * this.tilesize, _0x4183ca = _0x2050d7 + _0x367156 + (0x0 < _0xe9c4c7 ? _0x4183ca : 0x0) - (_0x131d0b + _0xc6a9f4[0x1]) * this.tilesize;
      if (0x0 < _0xe9c4c7 * _0x4183ca - _0x3ecc9d * _0x4a6ccb) {
        if (0x0 > _0x220752 * -_0x3ecc9d + _0x367156 * _0xe9c4c7) return _0x34e058;
        _0x37278c = Math.sqrt(_0xe9c4c7 * _0xe9c4c7 + _0x3ecc9d * _0x3ecc9d), _0x131d0b = _0x3ecc9d / _0x37278c, _0x37278c = -_0xe9c4c7 / _0x37278c;
        var _0x8bfcad = _0x4a6ccb * _0x131d0b + _0x4183ca * _0x37278c,
          _0xc6a9f4 = _0x131d0b * _0x8bfcad,
          _0x8bfcad = _0x37278c * _0x8bfcad;
        if (_0xc6a9f4 * _0xc6a9f4 + _0x8bfcad * _0x8bfcad >= _0x220752 * _0x220752 + _0x367156 * _0x367156) return _0x34e058 || 0.5 > _0xe9c4c7 * (_0x4183ca - _0x367156) - _0x3ecc9d * (_0x4a6ccb - _0x220752);
        return _0x2ce960.pos.x = _0x3f584b + _0x220752 - _0xc6a9f4, _0x2ce960.pos.y = _0x2050d7 + _0x367156 - _0x8bfcad, _0x2ce960.collision.slope = {
          'x': _0xe9c4c7,
          'y': _0x3ecc9d,
          'nx': _0x131d0b,
          'ny': _0x37278c
        }, !0x0;
      }
      return !0x1;
    }
  });
  var _0x403d29 = 0x1 / 0x3,
    _0x135015 = 0x2 / 0x3;
  ig.CollisionMap.defaultTileDef = {
    0x5: [0x0, 0x1, 0x1, _0x135015, !0x0],
    0x6: [0x0, _0x135015, 0x1, _0x403d29, !0x0],
    0x7: [0x0, _0x403d29, 0x1, 0x0, !0x0],
    0x3: [0x0, 0x1, 0x1, 0.5, !0x0],
    0x4: [0x0, 0.5, 0x1, 0x0, !0x0],
    0x2: [0x0, 0x1, 0x1, 0x0, !0x0],
    0xa: [0.5, 0x1, 0x1, 0x0, !0x0],
    0x15: [0x0, 0x1, 0.5, 0x0, !0x0],
    0x20: [_0x135015, 0x1, 0x1, 0x0, !0x0],
    0x2b: [_0x403d29, 0x1, _0x135015, 0x0, !0x0],
    0x36: [0x0, 0x1, _0x403d29, 0x0, !0x0],
    0x1b: [0x0, 0x0, 0x1, _0x403d29, !0x0],
    0x1c: [0x0, _0x403d29, 0x1, _0x135015, !0x0],
    0x1d: [0x0, _0x135015, 0x1, 0x1, !0x0],
    0x19: [0x0, 0x0, 0x1, 0.5, !0x0],
    0x1a: [0x0, 0.5, 0x1, 0x1, !0x0],
    0x18: [0x0, 0x0, 0x1, 0x1, !0x0],
    0xb: [0x0, 0x0, 0.5, 0x1, !0x0],
    0x16: [0.5, 0x0, 0x1, 0x1, !0x0],
    0x21: [0x0, 0x0, _0x403d29, 0x1, !0x0],
    0x2c: [_0x403d29, 0x0, _0x135015, 0x1, !0x0],
    0x37: [_0x135015, 0x0, 0x1, 0x1, !0x0],
    0x10: [0x1, _0x403d29, 0x0, 0x0, !0x0],
    0x11: [0x1, _0x135015, 0x0, _0x403d29, !0x0],
    0x12: [0x1, 0x1, 0x0, _0x135015, !0x0],
    0xe: [0x1, 0.5, 0x0, 0x0, !0x0],
    0xf: [0x1, 0x1, 0x0, 0.5, !0x0],
    0xd: [0x1, 0x1, 0x0, 0x0, !0x0],
    0x8: [0.5, 0x1, 0x0, 0x0, !0x0],
    0x13: [0x1, 0x1, 0.5, 0x0, !0x0],
    0x1e: [_0x403d29, 0x1, 0x0, 0x0, !0x0],
    0x29: [_0x135015, 0x1, _0x403d29, 0x0, !0x0],
    0x34: [0x1, 0x1, _0x135015, 0x0, !0x0],
    0x26: [0x1, _0x135015, 0x0, 0x1, !0x0],
    0x27: [0x1, _0x403d29, 0x0, _0x135015, !0x0],
    0x28: [0x1, 0x0, 0x0, _0x403d29, !0x0],
    0x24: [0x1, 0.5, 0x0, 0x1, !0x0],
    0x25: [0x1, 0x0, 0x0, 0.5, !0x0],
    0x23: [0x1, 0x0, 0x0, 0x1, !0x0],
    0x9: [0x1, 0x0, 0.5, 0x1, !0x0],
    0x14: [0.5, 0x0, 0x0, 0x1, !0x0],
    0x1f: [0x1, 0x0, _0x135015, 0x1, !0x0],
    0x2a: [_0x135015, 0x0, _0x403d29, 0x1, !0x0],
    0x35: [_0x403d29, 0x0, 0x0, 0x1, !0x0],
    0xc: [0x0, 0x0, 0x1, 0x0, !0x1],
    0x17: [0x1, 0x1, 0x0, 0x1, !0x1],
    0x22: [0x1, 0x0, 0x1, 0x1, !0x1],
    0x2d: [0x0, 0x1, 0x0, 0x0, !0x1]
  }, ig.CollisionMap.staticNoCollision = {
    'trace': function (_0x41f6d2, _0x3487a6, _0x45d21c, _0x55422b) {
      return {
        'collision': {
          'x': !0x1,
          'y': !0x1,
          'slope': !0x1
        },
        'pos': {
          'x': _0x41f6d2 + _0x45d21c,
          'y': _0x3487a6 + _0x55422b
        },
        'tile': {
          'x': 0x0,
          'y': 0x0
        }
      };
    }
  };
}), ig.baked = !0x0, ig.module('impact.background-map').requires('impact.map', 'impact.image').defines(function () {
  ig.BackgroundMap = ig.Map.extend({
    'tiles': null,
    'scroll': {
      'x': 0x0,
      'y': 0x0
    },
    'distance': 0x1,
    'repeat': !0x1,
    'tilesetName': '',
    'foreground': !0x1,
    'enabled': !0x0,
    'preRender': !0x1,
    'preRenderedChunks': null,
    'chunkSize': 0x200,
    'debugChunks': !0x1,
    'anims': {},
    'init': function (_0x484989, _0x58e83b, _0x77118f) {
      this.parent(_0x484989, _0x58e83b), this.setTileset(_0x77118f);
    },
    'setTileset': function (_0x3d2901) {
      this.tilesetName = _0x3d2901 instanceof ig.Image ? _0x3d2901.path : _0x3d2901, this.tiles = new ig.Image(this.tilesetName), this.preRenderedChunks = null;
    },
    'setScreenPos': function (_0x2125f3, _0x4818eb) {
      this.scroll.x = _0x2125f3 / this.distance, this.scroll.y = _0x4818eb / this.distance;
    },
    'preRenderMapToChunks': function () {
      var _0x2ffffe = this.width * this.tilesize * ig.system.scale,
        _0x1b1fca = this.height * this.tilesize * ig.system.scale;
      this.chunkSize = Math.min(Math.max(_0x2ffffe, _0x1b1fca), this.chunkSize);
      var _0x43ddfb = Math.ceil(_0x2ffffe / this.chunkSize),
        _0x22d81b = Math.ceil(_0x1b1fca / this.chunkSize);
      this.preRenderedChunks = [];
      for (var _0x1629c9 = 0x0; _0x1629c9 < _0x22d81b; _0x1629c9++) {
        this.preRenderedChunks[_0x1629c9] = [];
        for (var _0x27d5ce = 0x0; _0x27d5ce < _0x43ddfb; _0x27d5ce++) this.preRenderedChunks[_0x1629c9][_0x27d5ce] = this.preRenderChunk(_0x27d5ce, _0x1629c9, _0x27d5ce == _0x43ddfb - 0x1 ? _0x2ffffe - _0x27d5ce * this.chunkSize : this.chunkSize, _0x1629c9 == _0x22d81b - 0x1 ? _0x1b1fca - _0x1629c9 * this.chunkSize : this.chunkSize);
      }
    },
    'preRenderChunk': function (_0x4e95a0, _0x2533b8, _0x3b1f3e, _0x5f3e4f) {
      var _0xb2adff = _0x3b1f3e / this.tilesize / ig.system.scale + 0x1,
        _0xebb881 = _0x5f3e4f / this.tilesize / ig.system.scale + 0x1,
        _0x2c079e = _0x4e95a0 * this.chunkSize / ig.system.scale % this.tilesize,
        _0x1153e1 = _0x2533b8 * this.chunkSize / ig.system.scale % this.tilesize;
      _0x4e95a0 = Math.floor(_0x4e95a0 * this.chunkSize / this.tilesize / ig.system.scale);
      var _0x40d9f4 = Math.floor(_0x2533b8 * this.chunkSize / this.tilesize / ig.system.scale);
      _0x2533b8 = ig.$new('canvas'), _0x2533b8.width = _0x3b1f3e, _0x2533b8.height = _0x5f3e4f, _0x2533b8.retinaResolutionEnabled = !0x1, _0x5f3e4f = _0x2533b8.getContext('2d'), ig.System.scaleMode(_0x2533b8, _0x5f3e4f), _0x3b1f3e = ig.system.context, ig.system.context = _0x5f3e4f;
      for (_0x5f3e4f = 0x0; _0x5f3e4f < _0xb2adff; _0x5f3e4f++) for (var _0x52bac9 = 0x0; _0x52bac9 < _0xebb881; _0x52bac9++) if (_0x5f3e4f + _0x4e95a0 < this.width && _0x52bac9 + _0x40d9f4 < this.height) {
        var _0x141ca4 = this.data[_0x52bac9 + _0x40d9f4][_0x5f3e4f + _0x4e95a0];
        _0x141ca4 && this.tiles.drawTile(_0x5f3e4f * this.tilesize - _0x2c079e, _0x52bac9 * this.tilesize - _0x1153e1, _0x141ca4 - 0x1, this.tilesize);
      }
      return ig.system.context = _0x3b1f3e, _0xb2adff = new Image(), _0xb2adff.src = _0x2533b8.toDataURL(), _0xb2adff.width = _0x2533b8.width, _0xb2adff.height = _0x2533b8.height, _0xb2adff;
    },
    'draw': function () {
      this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled());
    },
    'drawPreRendered': function () {
      this.preRenderedChunks || this.preRenderMapToChunks();
      var _0x11b135 = ig.system.getDrawPos(this.scroll.x),
        _0x588bd2 = ig.system.getDrawPos(this.scroll.y);
      if (this.repeat) var _0x425525 = this.width * this.tilesize * ig.system.scale,
        _0x11b135 = (_0x11b135 % _0x425525 + _0x425525) % _0x425525,
        _0x425525 = this.height * this.tilesize * ig.system.scale,
        _0x588bd2 = (_0x588bd2 % _0x425525 + _0x425525) % _0x425525;
      var _0x425525 = Math.max(Math.floor(_0x11b135 / this.chunkSize), 0x0),
        _0x27caaf = Math.max(Math.floor(_0x588bd2 / this.chunkSize), 0x0),
        _0x423492 = Math.ceil((_0x11b135 + ig.system.realWidth) / this.chunkSize),
        _0x471a5a = Math.ceil((_0x588bd2 + ig.system.realHeight) / this.chunkSize),
        _0x233059 = this.preRenderedChunks[0x0].length,
        _0x378bc6 = this.preRenderedChunks.length;
      this.repeat || (_0x423492 = Math.min(_0x423492, _0x233059), _0x471a5a = Math.min(_0x471a5a, _0x378bc6));
      for (var _0x5eb1c7 = 0x0, _0x3069b9 = _0x27caaf; _0x3069b9 < _0x471a5a; _0x3069b9++) {
        for (var _0x14804f = 0x0, _0x51f7e3 = _0x425525; _0x51f7e3 < _0x423492; _0x51f7e3++) {
          var _0x3c8ebd = this.preRenderedChunks[_0x3069b9 % _0x378bc6][_0x51f7e3 % _0x233059],
            _0x119b1b = -_0x11b135 + _0x51f7e3 * this.chunkSize - _0x14804f,
            _0x2e2513 = -_0x588bd2 + _0x3069b9 * this.chunkSize - _0x5eb1c7;
          ig.system.context.drawImage(_0x3c8ebd, _0x119b1b, _0x2e2513), ig.Image.drawCount++, this.debugChunks && (ig.system.context.strokeStyle = '#f0f', ig.system.context.strokeRect(_0x119b1b, _0x2e2513, this.chunkSize, this.chunkSize)), this.repeat && _0x3c8ebd.width < this.chunkSize && _0x119b1b + _0x3c8ebd.width < ig.system.realWidth && (_0x14804f += this.chunkSize - _0x3c8ebd.width, _0x3069b9 == _0x27caaf && _0x423492++);
        }
        this.repeat && _0x3c8ebd.height < this.chunkSize && _0x2e2513 + _0x3c8ebd.height < ig.system.realHeight && (_0x5eb1c7 += this.chunkSize - _0x3c8ebd.height, _0x471a5a++);
      }
    },
    'drawTiled': function () {
      for (var _0x4680c5 = 0x0, _0x3d238c = null, _0x29d7a5 = (this.scroll.x / this.tilesize).toInt(), _0x1c9f47 = (this.scroll.y / this.tilesize).toInt(), _0x5088fd = this.scroll.x % this.tilesize, _0x3603d0 = this.scroll.y % this.tilesize, _0x522b22 = -_0x5088fd - this.tilesize, _0x5088fd = ig.system.width + this.tilesize - _0x5088fd, _0x232907 = ig.system.height + this.tilesize - _0x3603d0, _0x2d3e67 = -0x1, _0x3603d0 = -_0x3603d0 - this.tilesize; _0x3603d0 < _0x232907; _0x2d3e67++, _0x3603d0 += this.tilesize) {
        var _0x181821 = _0x2d3e67 + _0x1c9f47;
        if (_0x181821 >= this.height || 0x0 > _0x181821) {
          if (!this.repeat) continue;
          _0x181821 = (_0x181821 % this.height + this.height) % this.height;
        }
        for (var _0x23663f = -0x1, _0x3649a4 = _0x522b22; _0x3649a4 < _0x5088fd; _0x23663f++, _0x3649a4 += this.tilesize) {
          _0x4680c5 = _0x23663f + _0x29d7a5;
          if (_0x4680c5 >= this.width || 0x0 > _0x4680c5) {
            if (!this.repeat) continue;
            _0x4680c5 = (_0x4680c5 % this.width + this.width) % this.width;
          }
          if (_0x4680c5 = this.data[_0x181821][_0x4680c5]) (_0x3d238c = this.anims[_0x4680c5 - 0x1]) ? _0x3d238c.draw(_0x3649a4, _0x3603d0) : this.tiles.drawTile(_0x3649a4, _0x3603d0, _0x4680c5 - 0x1, this.tilesize);
        }
      }
    }
  });
}), ig.baked = !0x0, ig.module('impact.game').requires('impact.impact', 'impact.entity', 'impact.collision-map', 'impact.background-map').defines(function () {
  ig.Game = ig.Class.extend({
    'clearColor': '#000000',
    'gravity': 0x0,
    'screen': {
      'x': 0x0,
      'y': 0x0
    },
    '_rscreen': {
      'x': 0x0,
      'y': 0x0
    },
    'entities': [],
    'namedEntities': {},
    'collisionMap': ig.CollisionMap.staticNoCollision,
    'backgroundMaps': [],
    'backgroundAnims': {},
    'autoSort': !0x1,
    'sortBy': null,
    'cellSize': 0x40,
    '_deferredKill': [],
    '_levelToLoad': null,
    '_doSortEntities': !0x1,
    'staticInstantiate': function () {
      return this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX, ig.game = this, null;
    },
    'loadLevel': function (_0x31a816) {
      this.screen = {
        'x': 0x0,
        'y': 0x0
      }, this.entities = [], this.namedEntities = {};
      for (var _0x779478 = 0x0; _0x779478 < _0x31a816.entities.length; _0x779478++) {
        var _0x21ebe6 = _0x31a816.entities[_0x779478];
        this.spawnEntity(_0x21ebe6.type, _0x21ebe6.x, _0x21ebe6.y, _0x21ebe6.settings);
      }
      this.sortEntities(), this.collisionMap = ig.CollisionMap.staticNoCollision, this.backgroundMaps = [];
      for (_0x779478 = 0x0; _0x779478 < _0x31a816.layer.length; _0x779478++) if (_0x21ebe6 = _0x31a816.layer[_0x779478], 'collision' == _0x21ebe6.name) this.collisionMap = new ig.CollisionMap(_0x21ebe6.tilesize, _0x21ebe6.data);else {
        var _0x4799ac = new ig.BackgroundMap(_0x21ebe6.tilesize, _0x21ebe6.data, _0x21ebe6.tilesetName);
        _0x4799ac.anims = this.backgroundAnims[_0x21ebe6.tilesetName] || {}, _0x4799ac.repeat = _0x21ebe6.repeat, _0x4799ac.distance = _0x21ebe6.distance, _0x4799ac.foreground = !!_0x21ebe6.foreground, _0x4799ac.preRender = !!_0x21ebe6.preRender, _0x4799ac.name = _0x21ebe6.name, this.backgroundMaps.push(_0x4799ac);
      }
      for (_0x779478 = 0x0; _0x779478 < this.entities.length; _0x779478++) this.entities[_0x779478].ready();
    },
    'loadLevelDeferred': function (_0x3d92f1) {
      this._levelToLoad = _0x3d92f1;
    },
    'getMapByName': function (_0x57898f) {
      if ('collision' == _0x57898f) return this.collisionMap;
      for (var _0x132eb3 = 0x0; _0x132eb3 < this.backgroundMaps.length; _0x132eb3++) if (this.backgroundMaps[_0x132eb3].name == _0x57898f) return this.backgroundMaps[_0x132eb3];
      return null;
    },
    'getEntityByName': function (_0x2815e7) {
      return this.namedEntities[_0x2815e7];
    },
    'getEntitiesByType': function (_0x5a3827) {
      _0x5a3827 = 'string' === typeof _0x5a3827 ? ig.global[_0x5a3827] : _0x5a3827;
      for (var _0xa2c810 = [], _0x31fbff = 0x0; _0x31fbff < this.entities.length; _0x31fbff++) {
        var _0x499ec3 = this.entities[_0x31fbff];
        _0x499ec3 instanceof _0x5a3827 && !_0x499ec3._killed && _0xa2c810.push(_0x499ec3);
      }
      return _0xa2c810;
    },
    'spawnEntity': function (_0x1385f3, _0x504683, _0x1ea996, _0x205ee1) {
      var _0x253838 = 'string' === typeof _0x1385f3 ? ig.global[_0x1385f3] : _0x1385f3;
      if (!_0x253838) throw "Can't spawn entity of type " + _0x1385f3;
      return _0x1385f3 = new _0x253838(_0x504683, _0x1ea996, _0x205ee1 || {}), this.entities.push(_0x1385f3), _0x1385f3.name && (this.namedEntities[_0x1385f3.name] = _0x1385f3), _0x1385f3;
    },
    'sortEntities': function () {
      this.entities.sort(this.sortBy);
    },
    'sortEntitiesDeferred': function () {
      this._doSortEntities = !0x0;
    },
    'removeEntity': function (_0x4c694e) {
      _0x4c694e.name && delete this.namedEntities[_0x4c694e.name], _0x4c694e._killed = !0x0, _0x4c694e.type = ig.Entity.TYPE.NONE, _0x4c694e.checkAgainst = ig.Entity.TYPE.NONE, _0x4c694e.collides = ig.Entity.COLLIDES.NEVER, this._deferredKill.push(_0x4c694e);
    },
    'run': function () {
      this.update(), this.draw();
    },
    'update': function () {
      this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null), this.updateEntities(), this.checkEntities();
      for (var _0x137c4c = 0x0; _0x137c4c < this._deferredKill.length; _0x137c4c++) this._deferredKill[_0x137c4c].erase(), this.entities.erase(this._deferredKill[_0x137c4c]);
      this._deferredKill = [];
      if (this._doSortEntities || this.autoSort) this.sortEntities(), this._doSortEntities = !0x1;
      for (var _0x2d5779 in this.backgroundAnims) {
        var _0x137c4c = this.backgroundAnims[_0x2d5779],
          _0x46b964;
        for (_0x46b964 in _0x137c4c) _0x137c4c[_0x46b964].update();
      }
    },
    'updateEntities': function () {
      for (var _0x59253e = 0x0; _0x59253e < this.entities.length; _0x59253e++) {
        var _0x44d6c2 = this.entities[_0x59253e];
        _0x44d6c2._killed || _0x44d6c2.update();
      }
    },
    'draw': function () {
      this.clearColor && ig.system.clear(this.clearColor), this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale, this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
      var _0x180378;
      for (_0x180378 = 0x0; _0x180378 < this.backgroundMaps.length; _0x180378++) {
        var _0x454f7f = this.backgroundMaps[_0x180378];
        if (_0x454f7f.foreground) break;
        _0x454f7f.setScreenPos(this.screen.x, this.screen.y), _0x454f7f.draw();
      }
      this.drawEntities();
      for (_0x180378; _0x180378 < this.backgroundMaps.length; _0x180378++) _0x454f7f = this.backgroundMaps[_0x180378], _0x454f7f.setScreenPos(this.screen.x, this.screen.y), _0x454f7f.draw();
    },
    'drawEntities': function () {
      for (var _0x530ae4 = 0x0; _0x530ae4 < this.entities.length; _0x530ae4++) this.entities[_0x530ae4].draw();
    },
    'checkEntities': function () {
      for (var _0x381a9f = {}, _0x7c0f1e = 0x0; _0x7c0f1e < this.entities.length; _0x7c0f1e++) {
        var _0x2db6f6 = this.entities[_0x7c0f1e];
        if (!(_0x2db6f6.type == ig.Entity.TYPE.NONE && _0x2db6f6.checkAgainst == ig.Entity.TYPE.NONE && _0x2db6f6.collides == ig.Entity.COLLIDES.NEVER)) {
          for (var _0x48cb30 = {}, _0x299606 = Math.floor(_0x2db6f6.pos.y / this.cellSize), _0x48c29f = Math.floor((_0x2db6f6.pos.x + _0x2db6f6.size.x) / this.cellSize) + 0x1, _0x6a9f73 = Math.floor((_0x2db6f6.pos.y + _0x2db6f6.size.y) / this.cellSize) + 0x1, _0x11dba7 = Math.floor(_0x2db6f6.pos.x / this.cellSize); _0x11dba7 < _0x48c29f; _0x11dba7++) for (var _0x538d20 = _0x299606; _0x538d20 < _0x6a9f73; _0x538d20++) if (_0x381a9f[_0x11dba7]) {
            if (_0x381a9f[_0x11dba7][_0x538d20]) {
              for (var _0x419210 = _0x381a9f[_0x11dba7][_0x538d20], _0x418f79 = 0x0; _0x418f79 < _0x419210.length; _0x418f79++) _0x2db6f6.touches(_0x419210[_0x418f79]) && !_0x48cb30[_0x419210[_0x418f79].id] && (_0x48cb30[_0x419210[_0x418f79].id] = !0x0, ig.Entity.checkPair(_0x2db6f6, _0x419210[_0x418f79]));
              _0x419210.push(_0x2db6f6);
            } else _0x381a9f[_0x11dba7][_0x538d20] = [_0x2db6f6];
          } else _0x381a9f[_0x11dba7] = {}, _0x381a9f[_0x11dba7][_0x538d20] = [_0x2db6f6];
        }
      }
    }
  }), ig.Game.SORT = {
    'Z_INDEX': function (_0xeb5c60, _0x48683d) {
      return _0xeb5c60.zIndex - _0x48683d.zIndex;
    },
    'POS_X': function (_0x389027, _0x9219cc) {
      return _0x389027.pos.x + _0x389027.size.x - (_0x9219cc.pos.x + _0x9219cc.size.x);
    },
    'POS_Y': function (_0x44b722, _0x4b1c7e) {
      return _0x44b722.pos.y + _0x44b722.size.y - (_0x4b1c7e.pos.y + _0x4b1c7e.size.y);
    }
  };
}), ig.baked = !0x0, ig.module('plugins.patches.fps-limit-patch').requires('impact.system', 'impact.impact').defines(function () {
  ig.System.inject({
    'fps': 0x3c
  }), ig.system && (ig.system.fps = 0x3c), ig.normalizeVendorAttribute(window, 'requestAnimationFrame');
  if (window.requestAnimationFrame) {
    var _0x54b5f7 = 0x1,
      _0x14d1c6 = {};
    window.ig.setAnimation = function (_0x338b80, _0x133c3c) {
      var _0x1e1978 = _0x54b5f7++;
      _0x14d1c6[_0x1e1978] = !0x0;
      var _0xe306bc = 0x3e8 / 0x3c,
        _0x4eecc6 = 0x3c,
        _0xf8d2ee = 0x0,
        _0x4137f0 = 0x0,
        _0x311529 = 0x0,
        _0x3cc621 = 0x0,
        _0x443755 = function () {
          _0x14d1c6[_0x1e1978] && (timestamp = Date.now(), _0x4137f0 = _0xf8d2ee, _0xf8d2ee = timestamp, _0x3cc621 = _0xf8d2ee - _0x4137f0, _0x4eecc6 = 0.8 * _0x4eecc6 + 0.2 * (0x3e8 / _0x3cc621), 0x3c < _0x4eecc6 && 0x3f <= _0x4eecc6 ? (_0x311529 = Math.min(Math.max(0x2 * _0xe306bc + _0x4137f0 - timestamp, 0x0), _0xe306bc), setTimeout(function () {
            window.requestAnimationFrame(_0x443755, _0x133c3c);
          }, _0x311529), _0x338b80(timestamp)) : (window.requestAnimationFrame(_0x443755, _0x133c3c), _0x338b80()));
        };
      return window.requestAnimationFrame(_0x443755, _0x133c3c), _0x1e1978;
    }, window.ig.clearAnimation = function (_0x4ede62) {
      delete _0x14d1c6[_0x4ede62];
    };
  } else window.ig.setAnimation = function (_0x2ffc94) {
    return window.setInterval(_0x2ffc94, 0x3e8 / 0x3c);
  }, window.ig.clearAnimation = function (_0x1eb1ad) {
    window.clearInterval(_0x1eb1ad);
  };
}), ig.baked = !0x0, ig.module('plugins.patches.timer-patch').requires('impact.timer').defines(function () {
  ig.Timer.step = function () {
    var _0x1e7029 = Date.now(),
      _0x5adb72 = (_0x1e7029 - ig.Timer._last) / 0x3e8;
    0x0 > _0x5adb72 && (_0x5adb72 = 0x0), ig.Timer.time += Math.min(_0x5adb72, ig.Timer.maxStep) * ig.Timer.timeScale, ig.Timer._last = _0x1e7029;
  };
}), ig.baked = !0x0, ig.module('plugins.patches.user-agent-patch').requires('impact.impact').defines(function () {
  ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent), ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent), ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent), ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag, ig.ua.iOSgt5 = ig.ua.iOS && 0x5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[0x1]), ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent), ig.ua.Kindle = /Silk/i.test(navigator.userAgent), ig.ua.touchDevice = 'ontouchstart' in window || window.navigator.msMaxTouchPoints || window.navigator.maxTouchPoints, ig.ua.is_mac = 'MacIntel' === navigator.platform, ig.ua.iOS = ig.ua.touchDevice && ig.ua.is_mac || ig.ua.iOS, ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent);
}), ig.baked = !0x0, ig.module('plugins.patches.webkit-image-smoothing-patch').defines(function () {
  ig.System && (ig.System.SCALE = {
    'CRISP': function (_0x30d709, _0x52e00b) {
      _0x52e00b.imageSmoothingEnabled = _0x52e00b.msImageSmoothingEnabled = _0x52e00b.mozImageSmoothingEnabled = _0x52e00b.oImageSmoothingEnabled = !0x1, _0x30d709.style.imageRendering = '-moz-crisp-edges', _0x30d709.style.imageRendering = '-o-crisp-edges', _0x30d709.style.imageRendering = '-webkit-optimize-contrast', _0x30d709.style.imageRendering = 'crisp-edges', _0x30d709.style.msInterpolationMode = 'nearest-neighbor';
    },
    'SMOOTH': function (_0x91d987, _0x13dacc) {
      _0x13dacc.imageSmoothingEnabled = _0x13dacc.msImageSmoothingEnabled = _0x13dacc.oImageSmoothingEnabled = !0x0, _0x91d987.style.imageRendering = '', _0x91d987.style.msInterpolationMode = '';
    }
  }, ig.System.scaleMode = ig.System.SCALE.SMOOTH);
}), ig.baked = !0x0, ig.module('plugins.patches.windowfocus-onmouse-down-patch').requires('impact.input').defines(function () {
  var _0x33fb36 = !0x1;
  try {
    _0x33fb36 = window.self !== window.top, !0x1 === _0x33fb36 && (_0x33fb36 = 0x0 < window.frames.length);
  } catch (_0x2b6e23) {
    _0x33fb36 = !0x0;
  }
  ig.Input.inject({
    'keydown': function (_0x134ee6) {
      var _0x56c033 = _0x134ee6.target.tagName;
      if (!('INPUT' == _0x56c033 || 'TEXTAREA' == _0x56c033)) {
        if (_0x56c033 = 'keydown' == _0x134ee6.type ? _0x134ee6.keyCode : 0x2 == _0x134ee6.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, _0x33fb36 && 0x0 > _0x56c033 && window.focus(), ('touchstart' == _0x134ee6.type || 'mousedown' == _0x134ee6.type) && this.mousemove(_0x134ee6), _0x56c033 = this.bindings[_0x56c033]) this.actions[_0x56c033] = !0x0, this.locks[_0x56c033] || (this.presses[_0x56c033] = !0x0, this.locks[_0x56c033] = !0x0), _0x134ee6.stopPropagation(), _0x134ee6.preventDefault();
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.patches.input-patch').requires('impact.input').defines(function () {
  ig.Input.inject({
    'initMouse': function () {
      this.parent(), ig.system.canvas.addEventListener('mouseleave', this.mouseleave.bind(this), !0x1);
    },
    'mousemove': function (_0x4d8715) {
      this.parent(_0x4d8715);
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x5acb1d) {}
    },
    'mouseleave': function () {
      this.clearState('click');
    },
    'keyup': function (_0x3f1fec) {
      this.parent(_0x3f1fec);
      if (ig.visibilityHandler) ig.visibilityHandler.onChange('focus');
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x2b3a22) {}
    },
    'clearState': function (_0x2052b7) {
      this.actions[_0x2052b7] = !0x1;
    },
    'clearAllState': function () {
      for (var _0x24610e in this.actions) this.clearState(_0x24610e);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.data.vector').defines(function () {
  Vector2 = function (_0x165095, _0x37df8c) {
    if (!(this instanceof Vector2)) return new Vector2(_0x165095, _0x37df8c);
    this.x = _0x165095 || 0x0, this.y = _0x37df8c || 0x0;
  }, Vector2.prototype = {
    'valType': 'number',
    'neg': function () {
      return this.x = -this.x, this.y = -this.y, this;
    },
    'row': function (_0x36fe8e) {
      return typeof _0x36fe8e === this.valType && (this.y = _0x36fe8e), this.y;
    },
    'col': function (_0x2cb326) {
      return typeof _0x2cb326 === this.valType && (this.x = _0x2cb326), this.x;
    },
    'add': function (_0x5dfbcd) {
      return _0x5dfbcd instanceof Vector2 ? (this.x += _0x5dfbcd.x, this.y += _0x5dfbcd.y) : (this.x += _0x5dfbcd, this.y += _0x5dfbcd), this;
    },
    'sub': function (_0x2eccfc) {
      return _0x2eccfc instanceof Vector2 ? (this.x -= _0x2eccfc.x, this.y -= _0x2eccfc.y) : (this.x -= _0x2eccfc, this.y -= _0x2eccfc), this;
    },
    'mul': function (_0x323673) {
      return _0x323673 instanceof Vector2 ? (this.x *= _0x323673.x, this.y *= _0x323673.y) : (this.x *= _0x323673, this.y *= _0x323673), this;
    },
    'div': function (_0x1589c3) {
      return _0x1589c3 instanceof Vector2 ? (0x0 != _0x1589c3.x && (this.x /= _0x1589c3.x), 0x0 != _0x1589c3.y && (this.y /= _0x1589c3.y)) : 0x0 != _0x1589c3 && (this.x /= _0x1589c3, this.y /= _0x1589c3), this;
    },
    'equals': function (_0x4106ae) {
      return this.x == _0x4106ae.x && this.y == _0x4106ae.y;
    },
    'dot': function (_0xe31eb1) {
      return this.x * _0xe31eb1.x + this.y * _0xe31eb1.y;
    },
    'cross': function (_0x57b570) {
      return this.x * _0x57b570.y - this.y * _0x57b570.x;
    },
    'length': function () {
      return Math.sqrt(this.dot(this));
    },
    'norm': function () {
      return this.divide(this.length());
    },
    'min': function () {
      return Math.min(this.x, this.y);
    },
    'max': function () {
      return Math.max(this.x, this.y);
    },
    'toAngles': function () {
      return -Math.atan2(-this.y, this.x);
    },
    'angleTo': function (_0x1b4294) {
      return Math.acos(this.dot(_0x1b4294) / (this.length() * _0x1b4294.length()));
    },
    'toArray': function (_0x54626a) {
      return [this.x, this.y].slice(0x0, _0x54626a || 0x2);
    },
    'clone': function () {
      return new Vector2(this.x, this.y);
    },
    'set': function (_0x5e27a3, _0x5040ef) {
      return this.x = _0x5e27a3, this.y = _0x5040ef, this;
    },
    'unit': function () {
      var _0x190dce = this.length();
      if (0x0 < _0x190dce) return new Vector2(this.x / _0x190dce, this.y / _0x190dce);
      throw "Divide by 0 error in unitVector function of vector:" + this;
    },
    'turnRight': function () {
      var _0x1512fe = this.x;
      return this.x = -this.y, this.y = _0x1512fe, this;
    },
    'turnLeft': function () {
      var _0x1b7d92 = this.x;
      return this.x = this.y, this.y = -_0x1b7d92, this;
    },
    'rotate': function (_0xf76b58) {
      var _0x4cb5fe = this.clone();
      return this.x = _0x4cb5fe.x * Math.cos(_0xf76b58) - _0x4cb5fe.y * Math.sin(_0xf76b58), this.y = _0x4cb5fe.x * Math.sin(_0xf76b58) + _0x4cb5fe.y * Math.cos(_0xf76b58), this;
    }
  }, Vector2.negative = function (_0x1a112d) {
    return new Vector2(-_0x1a112d.x, -_0x1a112d.y);
  }, Vector2.add = function (_0x40f913, _0x3e846b) {
    return _0x3e846b instanceof Vector2 ? new Vector2(_0x40f913.x + _0x3e846b.x, _0x40f913.y + _0x3e846b.y) : new Vector2(_0x40f913.x + v, _0x40f913.y + v);
  }, Vector2.subtract = function (_0x19dda5, _0x4e9c04) {
    return _0x4e9c04 instanceof Vector2 ? new Vector2(_0x19dda5.x - _0x4e9c04.x, _0x19dda5.y - _0x4e9c04.y) : new Vector2(_0x19dda5.x - v, _0x19dda5.y - v);
  }, Vector2.multiply = function (_0xe2c108, _0x290294) {
    return _0x290294 instanceof Vector2 ? new Vector2(_0xe2c108.x * _0x290294.x, _0xe2c108.y * _0x290294.y) : new Vector2(_0xe2c108.x * v, _0xe2c108.y * v);
  }, Vector2.divide = function (_0x3da2f8, _0x1d6cdf) {
    return _0x1d6cdf instanceof Vector2 ? new Vector2(_0x3da2f8.x / _0x1d6cdf.x, _0x3da2f8.y / _0x1d6cdf.y) : new Vector2(_0x3da2f8.x / v, _0x3da2f8.y / v);
  }, Vector2.equals = function (_0x1ed9f7, _0x1210d9) {
    return _0x1ed9f7.x == _0x1210d9.x && _0x1ed9f7.y == _0x1210d9.y;
  }, Vector2.dot = function (_0x5f5115, _0x3c0234) {
    return _0x5f5115.x * _0x3c0234.x + _0x5f5115.y * _0x3c0234.y;
  }, Vector2.cross = function (_0x2cf73a, _0x116883) {
    return _0x2cf73a.x * _0x116883.y - _0x2cf73a.y * _0x116883.x;
  };
}), ig.baked = !0x0, ig.module('plugins.data.rect').requires('plugins.data.vector').defines(function () {
  Rect = function (_0x26b4db, _0x2c9ed5) {
    if (this instanceof Rect) {
      if (!(_0x26b4db instanceof Vector2 && _0x2c9ed5 instanceof Vector2)) throw console.warn("Cannot identify parameters:", _0x26b4db, _0x2c9ed5), "pos and size parameters needs to be Vector2.";
    } else return new Rect(_0x26b4db, _0x2c9ed5);
    this.pos = _0x26b4db, this.end = new Vector2(_0x26b4db.x + _0x2c9ed5.x, _0x26b4db.y + _0x2c9ed5.y), this.size = _0x2c9ed5;
  }, Rect.prototype = {
    'valType': 'Vector2',
    'intersectsRect': function (_0xe7b415, _0x564487) {
      return _0x564487 || (_0x564487 = new Vector2(0x0, 0x0)), this.rangeIntersect(this.pos.x + _0x564487.x, _0x564487.x + this.end.x, _0x564487.x + _0xe7b415.pos.x, _0x564487.x + _0xe7b415.end.x) && this.rangeIntersect(this.pos.y + _0x564487.y, _0x564487.y + this.end.y, _0x564487.y + _0xe7b415.pos.y, _0x564487.y + _0xe7b415.end.y);
    },
    'intersectsPoint': function (_0x162582, _0x55881f) {
      _0x55881f || (_0x55881f = new Vector2(0x0, 0x0));
      if (!(_0x162582 instanceof Vector2)) throw "Point vector parameter needs to be Vector2.";
      if (!(_0x55881f instanceof Vector2)) throw "Anchor vector parameter needs to be Vector2.";
      return this.inRange(_0x162582.x, this.pos.x + _0x55881f.x, this.end.x + _0x55881f.x) && this.inRange(_0x162582.y, this.pos.y + _0x55881f.y, this.end.y + _0x55881f.y);
    },
    'inRange': function (_0x42eea9, _0x31ee8d, _0x33d827) {
      return _0x42eea9 >= Math.min(_0x31ee8d, _0x33d827) && _0x42eea9 <= Math.max(_0x31ee8d, _0x33d827);
    },
    'rangeIntersect': function (_0x5100b8, _0xd29421, _0x80f8c8, _0x40275e) {
      return Math.max(_0x5100b8, _0xd29421) >= Math.min(_0x80f8c8, _0x40275e) && Math.min(_0x5100b8, _0xd29421) <= Math.max(_0x80f8c8, _0x40275e);
    },
    'setPos': function (_0x114aab) {
      this.pos.x = _0x114aab.x, this.pos.y = _0x114aab.y, this.end.x = _0x114aab.x + this.size.x, this.end.y = _0x114aab.y + this.size.y;
    }
  };
}), ig.baked = !0x0, ig.module('plugins.data.color-rgb').defines(function () {
  ColorRGB = function (_0x32ed0b, _0x2389df, _0x5823f3, _0x11192b) {
    this.r = _0x32ed0b || 0x0, this.g = _0x2389df || 0x0, this.b = _0x5823f3 || 0x0, this.a = _0x11192b || 0x0;
  }, ColorRGB.prototype = {
    'setRandomColor': function () {
      this.r = Math.round(0xff * Math.random()), this.g = Math.round(0xff * Math.random()), this.b = Math.round(0xff * Math.random());
    },
    'getStyle': function () {
      return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')';
    },
    'getHex': function () {
      for (var _0x1a86de = this.r.toString(0x10), _0x583e30 = this.g.toString(0x10), _0x75b650 = this.b.toString(0x10); 0x2 > _0x1a86de.length;) _0x1a86de = '0' + _0x1a86de;
      for (; 0x2 > _0x583e30.length;) _0x583e30 = '0' + _0x583e30;
      for (; 0x2 > _0x75b650.length;) _0x75b650 = '0' + _0x75b650;
      return '#' + _0x1a86de + _0x583e30 + _0x75b650;
    },
    'getInvertedColor': function () {
      return new ColorRGB(0xff - this.r, 0xff - this.g, 0xff - this.b, 0xff - this.a);
    },
    'clone': function () {
      return new ColorRGB(this.r, this.g, this.b, this.a);
    }
  };
}), ig.baked = !0x0, ig.module('plugins.font.font-info').requires('impact.impact').defines(function () {
  ig.FontInfo = ig.Class.extend({
    'fonts': [{
      'name': 'mainfont',
      'source': 'media/fonts/mainfont'
    }, {
      'name': 'secondaryfont',
      'source': 'media/fonts/secondaryfont'
    }],
    'init': function () {
      this.registerCssFont();
    },
    'registerCssFont': function () {
      if (0x0 < this.fonts.length) {
        var _0x12922d = document.createElement('style');
        _0x12922d.type = 'text/css';
        for (var _0x59f0cb = '', _0x44b3f7 = 0x0; _0x44b3f7 < this.fonts.length; _0x44b3f7++) var _0x8c3964 = this.fonts[_0x44b3f7], _0x59f0cb = _0x59f0cb + ("@font-face {font-family: '" + _0x8c3964.name + "';src: url('" + _0x8c3964.source + ".eot');src: url('" + _0x8c3964.source + ".eot?#iefix') format('embedded-opentype'),url('" + _0x8c3964.source + ".woff2') format('woff2'),url('" + _0x8c3964.source + ".woff') format('woff'),url('" + _0x8c3964.source + ".ttf') format('truetype'),url('" + _0x8c3964.source + ".svg#svgFontName') format('svg')}");
        _0x12922d.appendChild(document.createTextNode(_0x59f0cb)), document.head.appendChild(_0x12922d);
      }
    },
    'isValid': function () {
      for (var _0x596894 = 0x0; _0x596894 < this.fonts.length; _0x596894++) if (!this._isValidName(this.fonts[_0x596894].source)) return !0x1;
      return !0x0;
    },
    '_isValidName': function (_0x311563) {
      return -0x1 == _0x311563.search(/^[a-z0-9-\/]+$/) ? !0x1 : !0x0;
    }
  });
}), ig.baked = !0x0, ig.module('plugins.font.font-loader').requires('impact.impact', 'plugins.font.font-info', 'impact.loader').defines(function () {
  ig.FontLoader = ig.Class.extend({
    'fontInfo': new ig.FontInfo(),
    'onload': !0x1,
    'onerror': !0x1,
    'init': function (_0x24da38, _0x553f25) {
      this.onload = _0x24da38, this.onerror = _0x553f25;
    },
    'load': function () {
      this.fontInfo.isValid() ? this._loadByLib() : console.error("Only lowercased alphanumeric and dash are allowed for font file name!. Please check the font path");
    },
    '_loadByLib': function () {
      for (var _0x52275a = [], _0x47e44e = 0x0; _0x47e44e < this.fontInfo.fonts.length; _0x47e44e++) {
        var _0x24abb1 = new FontFaceObserver(this.fontInfo.fonts[_0x47e44e].name);
        _0x52275a.push(_0x24abb1.load());
      }
      Promise.all(_0x52275a).then(this.onload)['catch'](this.onerror);
    }
  }), ig.Loader.inject({
    'parentLoad': !0x1,
    'load': function () {
      this.parentLoad = this.parent, new ig.FontLoader(this.onFontLoad.bind(this), this.onFontError.bind(this)).load();
    },
    'onFontLoad': function () {
      this.parentLoad();
    },
    'onFontError': function () {
      console.error("Font is not loaded"), this.parentLoad();
    }
  });
}), ig.baked = !0x0, ig.module('plugins.handlers.dom-handler').defines(function () {
  ig.DomHandler = ig.Class.extend({
    'version': '1.1.2',
    'JQUERYAVAILABLE': !0x1,
    'init': function () {
      this.JQUERYAVAILABLE = this._jqueryAvailable();
    },
    '_jqueryAvailable': function () {
      return 'undefined' !== typeof jQuery;
    },
    'addEvent': function (_0x576f46, _0x1df5f2, _0x9b1776, _0x4a30b1) {
      if (this.JQUERYAVAILABLE) _0x576f46.on(_0x1df5f2, _0x9b1776);else _0x576f46.addEventListener(_0x1df5f2, _0x9b1776, _0x4a30b1);
    },
    'create': function (_0x59bc6b) {
      return this.JQUERYAVAILABLE ? $('<' + _0x59bc6b + '>') : ig.$new(_0x59bc6b);
    },
    'getElementByClass': function (_0x2b72d1) {
      return this.JQUERYAVAILABLE ? $('.' + _0x2b72d1) : document.getElementsByClassName(_0x2b72d1);
    },
    'getElementById': function (_0x255a89) {
      return this.JQUERYAVAILABLE ? 0x0 < $(_0x255a89).length ? $(_0x255a89) : null : ig.$(_0x255a89);
    },
    'appendChild': function (_0x2b0c73, _0x247eb4) {
      this.JQUERYAVAILABLE ? _0x2b0c73.append(_0x247eb4) : _0x2b0c73.appendChild(_0x247eb4);
    },
    'appendToBody': function (_0x36d2eb) {
      this.JQUERYAVAILABLE ? $('body').append(_0x36d2eb) : document.body.appendChild(_0x36d2eb);
    },
    'appendToHead': function (_0x522d2a) {
      this.JQUERYAVAILABLE ? $('head').append(_0x522d2a) : document.head.appendChild(_0x522d2a);
    },
    'removeChild': function (_0x48a011, _0x47347b) {
      this.JQUERYAVAILABLE ? _0x48a011.remove(_0x47347b) : _0x48a011.removeChild(_0x47347b);
    },
    'removeFromBody': function (_0x4ead2c) {
      this.JQUERYAVAILABLE ? $(_0x4ead2c).remove() : document.body.removeChild(_0x4ead2c);
    },
    'removeFromHead': function (_0x2103e6) {
      this.JQUERYAVAILABLE ? $(_0x2103e6).remove() : document.head.removeChild(_0x2103e6);
    },
    'text': function (_0x4368a7, _0x4f8d90) {
      this.JQUERYAVAILABLE ? _0x4368a7.text(_0x4f8d90) : _0x4368a7.innerText = _0x4f8d90;
    },
    'val': function (_0x2b110d, _0x291270) {
      this.JQUERYAVAILABLE ? _0x2b110d.val(_0x291270) : _0x2b110d.value = _0x291270;
    },
    'getVal': function (_0x50162a) {
      return this.JQUERYAVAILABLE ? _0x50162a.val() : _0x50162a.value;
    },
    'getAttr': function (_0x374910, _0x30e533) {
      return this.JQUERYAVAILABLE ? _0x374910.attr(_0x30e533) : _0x374910.getAttribute(_0x30e533);
    },
    'getText': function (_0x36afa5) {
      return this.JQUERYAVAILABLE ? _0x36afa5.text() : _0x36afa5.innerText;
    },
    'html': function (_0x1c1160, _0x2d46b8) {
      this.JQUERYAVAILABLE ? _0x1c1160.html(_0x2d46b8) : _0x1c1160.innerHTML = _0x2d46b8;
    },
    'resize': function (_0x54122f, _0x328ff2, _0x59d85c) {
      if (this.JQUERYAVAILABLE) _0x54122f.width(_0x328ff2.toFixed(0x2)), _0x54122f.height(_0x59d85c.toFixed(0x2));else {
        var _0x4166a2 = _0x54122f.style.visibility;
        _0x328ff2 = 'width:' + _0x328ff2.toFixed(0x2) + "px; height:" + _0x59d85c.toFixed(0x2) + 'px;', this.attr(_0x54122f, 'style', _0x328ff2), _0x54122f.style.visibility = _0x4166a2;
      }
    },
    'resizeOffsetLeft': function (_0x23099b, _0xe8c100, _0x44a02c, _0x1a9a45) {
      if (this.JQUERYAVAILABLE) _0x23099b.width(_0xe8c100.toFixed(0x2)), _0x23099b.height(_0x44a02c.toFixed(0x2)), _0x23099b.css('left', _0x1a9a45);else {
        var _0x18bad2 = _0x23099b.style.visibility;
        _0xe8c100 = 'width:' + _0xe8c100.toFixed(0x2) + "px; height:" + _0x44a02c.toFixed(0x2) + "px; left: " + _0x1a9a45.toFixed(0x2) + 'px;', this.attr(_0x23099b, 'style', _0xe8c100), _0x23099b.style.visibility = _0x18bad2;
      }
    },
    'resizeOffset': function (_0x426642, _0x313b9d, _0x40c0ce, _0x1e8c41, _0xa8b59c) {
      if (this.JQUERYAVAILABLE) _0x426642.width(_0x313b9d.toFixed(0x2)), _0x426642.height(_0x40c0ce.toFixed(0x2)), _0x426642.css('left', _0x1e8c41), _0x426642.css('top', _0xa8b59c);else {
        var _0x7fa82d = _0x426642.style.visibility;
        _0x313b9d = 'width:' + _0x313b9d.toFixed(0x2) + "px; height:" + _0x40c0ce.toFixed(0x2) + "px; left: " + _0x1e8c41.toFixed(0x2) + "px; top: " + _0xa8b59c.toFixed(0x2) + 'px;', this.attr(_0x426642, 'style', _0x313b9d), _0x426642.style.visibility = _0x7fa82d;
      }
    },
    'css': function (_0x57c951, _0x103a08) {
      if (this.JQUERYAVAILABLE) _0x57c951.css(_0x103a08);else {
        var _0x5e968d = '',
          _0x23d63f;
        for (_0x23d63f in _0x103a08) _0x5e968d += _0x23d63f + ':' + _0x103a08[_0x23d63f] + ';';
        this.attr(_0x57c951, 'style', _0x5e968d);
      }
    },
    'getOffsets': function (_0x1c87dc) {
      return this.JQUERYAVAILABLE ? (_0x1c87dc = _0x1c87dc.offset(), {
        'left': _0x1c87dc.left,
        'top': _0x1c87dc.top
      }) : {
        'left': _0x1c87dc.offsetLeft,
        'top': _0x1c87dc.offsetTop
      };
    },
    'attr': function (_0x4c2108, _0x350be6, _0x42ce47) {
      if ('undefined' === typeof _0x42ce47) return this.JQUERYAVAILABLE ? _0x4c2108.attr(_0x350be6) : _0x4c2108.getAttribute(_0x350be6);
      this.JQUERYAVAILABLE ? _0x4c2108.attr(_0x350be6, _0x42ce47) : _0x4c2108.setAttribute(_0x350be6, _0x42ce47);
    },
    'show': function (_0x5caa1d) {
      _0x5caa1d && 'undefined' !== typeof _0x5caa1d && (this.JQUERYAVAILABLE ? (_0x5caa1d.show(), _0x5caa1d.css('visibility', 'visible')) : _0x5caa1d && (_0x5caa1d.style ? _0x5caa1d.style.visibility = 'visible' : _0x5caa1d[0x0] && (_0x5caa1d[0x0].style.visibility = 'visible')));
    },
    'hide': function (_0x171ffe) {
      _0x171ffe && 'undefined' !== typeof _0x171ffe && (this.JQUERYAVAILABLE ? (_0x171ffe.hide(), _0x171ffe.css('visibility', 'hidden')) : _0x171ffe && (_0x171ffe.style ? _0x171ffe.style.visibility = 'hidden' : _0x171ffe[0x0] && (_0x171ffe[0x0].style.visibility = 'hidden')));
    },
    'getQueryVariable': function (_0x5092a7) {
      for (var _0xd0a09c = window.location.search.substring(0x1).split('&'), _0x1f15af = 0x0; _0x1f15af < _0xd0a09c.length; _0x1f15af++) {
        var _0x4da218 = _0xd0a09c[_0x1f15af].match(/([^=]+?)=(.+)/);
        if (_0x4da218 && decodeURIComponent(_0x4da218[0x1]) == _0x5092a7) return decodeURIComponent(_0x4da218[0x2]);
      }
    },
    'forcedDeviceDetection': function () {
      var _0x21c191 = this.getQueryVariable('device');
      if (_0x21c191) switch (_0x21c191) {
        case 'mobile':
          console.log("serving mobile version ..."), ig.ua.mobile = !0x0;
          break;
        case 'desktop':
          console.log("serving desktop version ..."), ig.ua.mobile = !0x1;
          break;
        default:
          console.log("serving universal version ...");
      } else console.log("serving universal version ...");
    },
    'forcedDeviceRotation': function () {
      var _0x47cacf = this.getQueryVariable('force-rotate');
      if (_0x47cacf) switch (_0x47cacf) {
        case 'portrait':
          console.log("force rotate to portrait"), window.orientation = 0x0;
          break;
        case 'landscape':
          console.log("force rotate to horizontal"), window.orientation = 0x5a;
          break;
        default:
          alert("wrong command/type in param force-rotate. Defaulting value to portrait"), window.orientation = 0x0;
      }
    },
    'setZIndex': function (_0x5dee8f, _0x50cfab) {
      this.JQUERYAVAILABLE ? _0x5dee8f.css('zIndex', _0x50cfab) : _0x5dee8f && (_0x5dee8f.style ? _0x5dee8f.style.zIndex = _0x50cfab : _0x5dee8f[0x0] && (_0x5dee8f[0x0].style.zIndex = _0x50cfab));
    }
  });
}), ig.baked = !0x0, ig.module('plugins.handlers.size-handler').requires('plugins.data.vector').defines(function () {
  ig.SizeHandler = ig.Class.extend({
    'portraitMode': !0x0,
    'disableStretchToFitOnMobileFlag': !0x0,
    'enableStretchToFitOnAntiPortraitModeFlag': !0x1,
    'enableScalingLimitsOnMobileFlag': !0x1,
    'minScalingOnMobile': 0x0,
    'maxScalingOnMobile': 0x1,
    'enableStretchToFitOnDesktopFlag': !0x1,
    'enableScalingLimitsOnDesktopFlag': !0x1,
    'minScalingOnDesktop': 0x0,
    'maxScalingOnDesktop': 0x1,
    'desktop': {
      'actualSize': new Vector2(window.innerWidth, window.innerHeight),
      'actualResolution': new Vector2(0x578, 0x578)
    },
    'mobile': {
      'actualSize': new Vector2(window.innerWidth, window.innerHeight),
      'actualResolution': new Vector2(0x578, 0x578)
    },
    'windowSize': new Vector2(window.innerWidth, window.innerHeight),
    'scaleRatioMultiplier': new Vector2(0x1, 0x1),
    'sizeRatio': new Vector2(0x1, 0x1),
    'scale': 0x1,
    'domHandler': null,
    'dynamicClickableEntityDivs': {},
    'coreDivsToResize': ['#canvas', '#play', '#orientate'],
    'adsToResize': {
      'MobileAdInGamePreroll': {
        'box-width': _SETTINGS.Ad.Mobile.Preroll.Width + 0x2,
        'box-height': _SETTINGS.Ad.Mobile.Preroll.Height + 0x14
      },
      'MobileAdInGameEnd': {
        'box-width': _SETTINGS.Ad.Mobile.End.Width + 0x2,
        'box-height': _SETTINGS.Ad.Mobile.End.Height + 0x14
      },
      'MobileAdInGamePreroll2': {
        'box-width': _SETTINGS.Ad.Mobile.Preroll.Width + 0x2,
        'box-height': _SETTINGS.Ad.Mobile.Preroll.Height + 0x14
      },
      'MobileAdInGameEnd2': {
        'box-width': _SETTINGS.Ad.Mobile.End.Width + 0x2,
        'box-height': _SETTINGS.Ad.Mobile.End.Height + 0x14
      },
      'MobileAdInGamePreroll3': {
        'box-width': _SETTINGS.Ad.Mobile.Preroll.Width + 0x2,
        'box-height': _SETTINGS.Ad.Mobile.Preroll.Height + 0x14
      },
      'MobileAdInGameEnd3': {
        'box-width': _SETTINGS.Ad.Mobile.End.Width + 0x2,
        'box-height': _SETTINGS.Ad.Mobile.End.Height + 0x14
      }
    },
    'init': function (_0x4a16b5) {
      this.domHandler = _0x4a16b5;
      if ('undefined' === typeof _0x4a16b5) throw "undefined Dom Handler for Size Handler";
      this.sizeCalcs(), this.eventListenerSetup(), this.samsungFix();
    },
    'sizeCalcs': function () {
      this.windowSize = new Vector2(window.innerWidth, window.innerHeight);
      if (ig.ua.mobile) {
        this.mobile.actualSize = new Vector2(window.innerWidth, window.innerHeight);
        var _0x7b08fa = new Vector2(this.mobile.actualResolution.x, this.mobile.actualResolution.y);
        this.scaleRatioMultiplier = new Vector2(this.mobile.actualSize.x / _0x7b08fa.x, this.mobile.actualSize.y / _0x7b08fa.y);
        if (this.disableStretchToFitOnMobileFlag) {
          var _0x246f32 = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y);
          this.enableScalingLimitsOnMobileFlag && (_0x246f32 = _0x246f32.limit(this.minScalingOnMobile, this.maxScalingOnMobile)), this.mobile.actualSize.x = _0x7b08fa.x * _0x246f32, this.mobile.actualSize.y = _0x7b08fa.y * _0x246f32, this.scaleRatioMultiplier.x = _0x246f32, this.scaleRatioMultiplier.y = _0x246f32;
        } else this.sizeRatio.x = this.scaleRatioMultiplier.x, this.sizeRatio.y = this.scaleRatioMultiplier.y, this.scaleRatioMultiplier.x = 0x1, this.scaleRatioMultiplier.y = 0x1;
      } else this.desktop.actualSize = new Vector2(window.innerWidth, window.innerHeight), _0x7b08fa = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), this.scaleRatioMultiplier = new Vector2(this.desktop.actualSize.x / _0x7b08fa.x, this.desktop.actualSize.y / _0x7b08fa.y), this.enableStretchToFitOnDesktopFlag ? (this.sizeRatio.x = this.scaleRatioMultiplier.x, this.sizeRatio.y = this.scaleRatioMultiplier.y, this.scaleRatioMultiplier.x = 0x1, this.scaleRatioMultiplier.y = 0x1) : (_0x246f32 = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y), this.enableScalingLimitsOnDesktopFlag && (_0x246f32 = _0x246f32.limit(this.minScalingOnDesktop, this.maxScalingOnDesktop)), this.desktop.actualSize.x = _0x7b08fa.x * _0x246f32, this.desktop.actualSize.y = _0x7b08fa.y * _0x246f32, this.scaleRatioMultiplier.x = _0x246f32, this.scaleRatioMultiplier.y = _0x246f32);
    },
    'resizeLayers': function () {
      for (var _0x2bec7f = 0x0; _0x2bec7f < this.coreDivsToResize.length; _0x2bec7f++) {
        var _0x165aff = ig.domHandler.getElementById(this.coreDivsToResize[_0x2bec7f]);
        if (ig.ua.mobile) {
          if (this.disableStretchToFitOnMobileFlag) {
            var _0x3f41da = Math.floor(ig.sizeHandler.windowSize.x / 0x2 - ig.sizeHandler.mobile.actualSize.x / 0x2),
              _0x4181e4 = Math.floor(ig.sizeHandler.windowSize.y / 0x2 - ig.sizeHandler.mobile.actualSize.y / 0x2);
            0x0 > _0x3f41da && (_0x3f41da = 0x0), 0x0 > _0x4181e4 && (_0x4181e4 = 0x0), ig.domHandler.resizeOffset(_0x165aff, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y), _0x3f41da, _0x4181e4);
            var _0x2683fd = !0x1;
            if (this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth) {
              if (this.enableStretchToFitOnAntiPortraitModeFlag) ig.domHandler.resizeOffset(_0x165aff, Math.floor(window.innerWidth), Math.floor(window.innerHeight), 0x0, 0x0);else {
                var _0x2683fd = new Vector2(window.innerWidth / this.mobile.actualResolution.y, window.innerHeight / this.mobile.actualResolution.x),
                  _0x3f41da = Math.min(_0x2683fd.x, _0x2683fd.y),
                  _0x2683fd = this.mobile.actualResolution.y * _0x3f41da,
                  _0x27c419 = this.mobile.actualResolution.x * _0x3f41da,
                  _0x3f41da = Math.floor(ig.sizeHandler.windowSize.x / 0x2 - _0x2683fd / 0x2),
                  _0x4181e4 = Math.floor(ig.sizeHandler.windowSize.y / 0x2 - _0x27c419 / 0x2);
                0x0 > _0x3f41da && (_0x3f41da = 0x0), 0x0 > _0x4181e4 && (_0x4181e4 = 0x0), ig.domHandler.resizeOffset(_0x165aff, Math.floor(_0x2683fd), Math.floor(_0x27c419), _0x3f41da, _0x4181e4);
              }
            }
          } else ig.domHandler.resize(_0x165aff, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y));
        } else this.enableStretchToFitOnDesktopFlag ? ig.domHandler.resize(_0x165aff, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y)) : (_0x3f41da = Math.floor(ig.sizeHandler.windowSize.x / 0x2 - ig.sizeHandler.desktop.actualSize.x / 0x2), _0x4181e4 = Math.floor(ig.sizeHandler.windowSize.y / 0x2 - ig.sizeHandler.desktop.actualSize.y / 0x2), 0x0 > _0x3f41da && (_0x3f41da = 0x0), 0x0 > _0x4181e4 && (_0x4181e4 = 0x0), ig.domHandler.resizeOffset(_0x165aff, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y), _0x3f41da, _0x4181e4));
      }
      for (var _0x12d082 in this.adsToResize) _0x2bec7f = ig.domHandler.getElementById('#' + _0x12d082), _0x165aff = ig.domHandler.getElementById('#' + _0x12d082 + '-Box'), _0x2683fd = (window.innerWidth - this.adsToResize[_0x12d082]['box-width']) / 0x2 + 'px', _0x3f41da = (window.innerHeight - this.adsToResize[_0x12d082]['box-height']) / 0x2 + 'px', _0x2bec7f && ig.domHandler.css(_0x2bec7f, {
        'width': window.innerWidth,
        'height': window.innerHeight
      }), _0x165aff && ig.domHandler.css(_0x165aff, {
        'left': _0x2683fd,
        'top': _0x3f41da
      });
      _0x2bec7f = ig.domHandler.getElementById('#canvas'), _0x165aff = ig.domHandler.getOffsets(_0x2bec7f), _0x2bec7f = _0x165aff.left, _0x165aff = _0x165aff.top, _0x2683fd = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
      for (_0x12d082 in this.dynamicClickableEntityDivs) {
        _0x3f41da = ig.domHandler.getElementById('#' + _0x12d082);
        if (ig.ua.mobile) {
          var _0x27c419 = this.dynamicClickableEntityDivs[_0x12d082].entity_pos_x,
            _0x3eba7d = this.dynamicClickableEntityDivs[_0x12d082].entity_pos_y,
            _0x21ae9a = this.dynamicClickableEntityDivs[_0x12d082].width,
            _0x4181e4 = this.dynamicClickableEntityDivs[_0x12d082].height;
          this.disableStretchToFitOnMobileFlag ? (_0x27c419 = Math.floor(_0x2bec7f + _0x27c419 * this.scaleRatioMultiplier.x) + 'px', _0x3eba7d = Math.floor(_0x165aff + _0x3eba7d * this.scaleRatioMultiplier.y) + 'px', _0x21ae9a = Math.floor(_0x21ae9a * this.scaleRatioMultiplier.x) + 'px', _0x4181e4 = Math.floor(_0x4181e4 * this.scaleRatioMultiplier.y) + 'px') : (_0x27c419 = Math.floor(_0x27c419 * this.sizeRatio.x) + 'px', _0x3eba7d = Math.floor(_0x3eba7d * this.sizeRatio.y) + 'px', _0x21ae9a = Math.floor(_0x21ae9a * this.sizeRatio.x) + 'px', _0x4181e4 = Math.floor(_0x4181e4 * this.sizeRatio.y) + 'px');
        } else _0x27c419 = this.dynamicClickableEntityDivs[_0x12d082].entity_pos_x, _0x3eba7d = this.dynamicClickableEntityDivs[_0x12d082].entity_pos_y, _0x21ae9a = this.dynamicClickableEntityDivs[_0x12d082].width, _0x4181e4 = this.dynamicClickableEntityDivs[_0x12d082].height, this.enableStretchToFitOnDesktopFlag ? (_0x27c419 = Math.floor(_0x27c419 * this.sizeRatio.x) + 'px', _0x3eba7d = Math.floor(_0x3eba7d * this.sizeRatio.y) + 'px', _0x21ae9a = Math.floor(_0x21ae9a * this.sizeRatio.x) + 'px', _0x4181e4 = Math.floor(_0x4181e4 * this.sizeRatio.y) + 'px') : (_0x27c419 = Math.floor(_0x2bec7f + _0x27c419 * this.scaleRatioMultiplier.x) + 'px', _0x3eba7d = Math.floor(_0x165aff + _0x3eba7d * this.scaleRatioMultiplier.y) + 'px', _0x21ae9a = Math.floor(_0x21ae9a * this.scaleRatioMultiplier.x) + 'px', _0x4181e4 = Math.floor(_0x4181e4 * this.scaleRatioMultiplier.y) + 'px');
        ig.domHandler.css(_0x3f41da, {
          'float': 'left',
          'position': 'absolute',
          'left': _0x27c419,
          'top': _0x3eba7d,
          'width': _0x21ae9a,
          'height': _0x4181e4,
          'z-index': 0x3
        }), this.dynamicClickableEntityDivs[_0x12d082]['font-size'] && ig.domHandler.css(_0x3f41da, {
          'font-size': this.dynamicClickableEntityDivs[_0x12d082]['font-size'] * _0x2683fd + 'px'
        });
      }
      $('#ajaxbar').width(this.windowSize.x), $('#ajaxbar').height(this.windowSize.y);
    },
    'resize': function () {
      this.sizeCalcs(), this.resizeLayers();
    },
    'reorient': function () {
      console.log("changing orientation ...");
      if (ig.ua.mobile) {
        var _0x116220 = !0x1,
          _0x116220 = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth,
          _0x73b5f7 = this.domHandler.getElementById('#orientate'),
          _0x333cfe = this.domHandler.getElementById('#game');
        _0x116220 ? (this.domHandler.show(_0x73b5f7), this.domHandler.hide(_0x333cfe)) : (this.domHandler.show(_0x333cfe), this.domHandler.hide(_0x73b5f7));
      }
      ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize();
    },
    'resizeAds': function () {
      for (var _0xe159c8 in this.adsToResize) {
        var _0x336211 = ig.domHandler.getElementById('#' + _0xe159c8),
          _0x1fe6e9 = ig.domHandler.getElementById('#' + _0xe159c8 + '-Box'),
          _0xf24a5b = (window.innerWidth - this.adsToResize[_0xe159c8]['box-width']) / 0x2 + 'px',
          _0x5691fa = (window.innerHeight - this.adsToResize[_0xe159c8]['box-height']) / 0x2 + 'px';
        _0x336211 && ig.domHandler.css(_0x336211, {
          'width': window.innerWidth,
          'height': window.innerHeight
        }), _0x1fe6e9 && ig.domHandler.css(_0x1fe6e9, {
          'left': _0xf24a5b,
          'top': _0x5691fa
        });
      }
    },
    'samsungFix': function () {
      ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf('Android') + 0x8, navigator.userAgent.indexOf('Android') + 0xb))) && !(0x0 > navigator.userAgent.indexOf('GT')) && !(0x0 < navigator.userAgent.indexOf('Chrome')) && !(0x0 < navigator.userAgent.indexOf('Firefox')) && (document.addEventListener('touchstart', function (_0xa22084) {
        return _0xa22084.preventDefault(), !0x1;
      }, !0x1), document.addEventListener('touchmove', function (_0x20c2a8) {
        return _0x20c2a8.preventDefault(), !0x1;
      }, !0x1), document.addEventListener('touchend', function (_0x412768) {
        return _0x412768.preventDefault(), !0x1;
      }, !0x1));
    },
    'orientationInterval': null,
    'orientationTimeout': null,
    'orientationHandler': function () {
      this.reorient(), window.scrollTo(0x0, 0x1);
    },
    'orientationDelayHandler': function () {
      null == this.orientationInterval && (this.orientationInterval = window.setInterval(this.orientationHandler.bind(this), 0x64)), null == this.orientationTimeout && (this.orientationTimeout = window.setTimeout(function () {
        this.clearAllIntervals();
      }.bind(this), 0x7d0));
    },
    'clearAllIntervals': function () {
      window.clearInterval(this.orientationInterval), this.orientationInterval = null, window.clearTimeout(this.orientationTimeout), this.orientationTimeout = null;
    },
    'eventListenerSetup': function () {
      ig.ua.iOS ? (window.addEventListener('orientationchange', this.orientationDelayHandler.bind(this)), window.addEventListener('resize', this.orientationDelayHandler.bind(this))) : (window.addEventListener('orientationchange', this.orientationHandler.bind(this)), window.addEventListener('resize', this.orientationHandler.bind(this))), document.addEventListener('touchmove', function (_0x4e75e8) {
        window.scrollTo(0x0, 0x1), _0x4e75e8.preventDefault();
      }, {
        'passive': !0x1
      }), this.chromePullDownRefreshFix();
    },
    'chromePullDownRefreshFix': function () {
      var _0x5a1ec5 = window.chrome || navigator.userAgent.match('CriOS'),
        _0x92fc32 = 'ontouchstart' in document.documentElement;
      if (_0x5a1ec5 && _0x92fc32) {
        var _0x451350 = _0x5a1ec5 = !0x1,
          _0x43125d = 0x0,
          _0x473879 = !0x1;
        try {
          CSS.supports('overscroll-behavior-y', 'contain') && (_0x5a1ec5 = !0x0);
        } catch (_0x23e12d) {}
        try {
          if (_0x5a1ec5) return document.body.style.overscrollBehaviorY = 'contain';
        } catch (_0x3ef4b8) {}
        _0x5a1ec5 = document.head || document.body, _0x92fc32 = document.createElement('style'), _0x92fc32.type = 'text/css', _0x92fc32.styleSheet ? _0x92fc32.styleSheet.cssText = "\n      ::-webkit-scrollbar {\n        width: 500x;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 500px;\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n      body {\n        -webkit-overflow-scrolling: auto!important;\n      }\n    " : _0x92fc32.appendChild(document.createTextNode("\n      ::-webkit-scrollbar {\n        width: 500px;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 500px;\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n      body {\n        -webkit-overflow-scrolling: auto!important;\n      }\n    ")), _0x5a1ec5.appendChild(_0x92fc32);
        try {
          addEventListener('test', null, {
            get 'passive'() {
              _0x451350 = !0x0;
            }
          });
        } catch (_0x2ee7e0) {}
        document.addEventListener('touchstart', function (_0x5a18e6) {
          0x1 === _0x5a18e6.touches.length && (_0x43125d = _0x5a18e6.touches[0x0].clientY, _0x473879 = 0x0 === window.pageYOffset);
        }, !!_0x451350 && {
          'passive': !0x0
        }), document.addEventListener('touchmove', function (_0x16c3af) {
          var _0x47ca85;
          if (_0x47ca85 = _0x473879) {
            _0x473879 = !0x1, _0x47ca85 = _0x16c3af.touches[0x0].clientY;
            var _0x2af204 = _0x47ca85 - _0x43125d;
            _0x47ca85 = (_0x43125d = _0x47ca85, 0x0 < _0x2af204);
          }
          if (_0x47ca85) return _0x16c3af.preventDefault();
        }, !!_0x451350 && {
          'passive': !0x1
        });
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.handlers.api-handler').defines(function () {
  ig.ApiHandler = ig.Class.extend({
    'apiAvailable': {
      'MJSPreroll': function () {
        ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize();
      },
      'MJSHeader': function () {
        ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Header.Enabled && MobileAdInGameHeader.Initialize();
      },
      'MJSFooter': function () {
        ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Footer.Enabled && MobileAdInGameFooter.Initialize();
      },
      'MJSEnd': function () {
        ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.End.Enabled && MobileAdInGameEnd.Initialize();
      }
    },
    'run': function (_0x1d2e8c, _0xb6d53) {
      if (this.apiAvailable[_0x1d2e8c]) this.apiAvailable[_0x1d2e8c](_0xb6d53);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.audio.sound-player').defines(function () {
  SoundPlayer = ig.Class.extend({
    'tagName': 'SoundPlayer',
    'stayMuteFlag': !0x1,
    'debug': !0x1,
    'init': function () {
      this.debug && console.log(this.tagName);
    },
    'play': function (_0x39d166) {
      this.debug && console.log("play sound ", _0x39d166);
    },
    'stop': function () {
      this.debug && console.log("stop sound ");
    },
    'volume': function () {
      this.debug && console.log("set volume");
    },
    'mute': function (_0xe20b6) {
      this.debug && console.log('mute'), 'undefined' === typeof _0xe20b6 ? this.stayMuteFlag = !0x0 : _0xe20b6 && (this.stayMuteFlag = !0x0);
    },
    'unmute': function (_0x4eaea5) {
      this.debug && console.log('unmute'), 'undefined' === typeof _0x4eaea5 ? this.stayMuteFlag = !0x1 : _0x4eaea5 && (this.stayMuteFlag = !0x1);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.audio.impact-music-player').requires('plugins.audio.sound-player').defines(function () {
  ImpactMusicPlayer = SoundPlayer.extend({
    'tagName': 'ImpactMusicPlayer',
    'bgmPlaying': !0x1,
    'soundList': {},
    'init': function (_0x22be32, _0x2f8c62) {
      this.parent(_0x22be32, _0x2f8c62);
      for (var _0x51d96d in _0x22be32) this.soundList[_0x51d96d] = _0x51d96d, ig.music.add(_0x22be32[_0x51d96d].path + '.*', _0x51d96d);
      _0x2f8c62 && _0x2f8c62.loop && (ig.music.loop = _0x2f8c62.loop);
    },
    'play': function (_0x493dad) {
      this.stayMuteFlag || (this.bgmPlaying = !0x0, 'undefined' === typeof _0x493dad ? ig.music.play(_0x493dad) : ig.music.play());
    },
    'stop': function () {
      this.bgmPlaying = !0x1, ig.music.pause();
    },
    'volume': function (_0x3130d9) {
      console.log('impactmusic:', _0x3130d9), ig.music.volume = 0x0 > _0x3130d9 ? 0x0 : isNaN(_0x3130d9) ? 0x1 : 0x1 < _0x3130d9 ? 0x1 : _0x3130d9;
    },
    'getVolume': function () {
      return ig.music.volume;
    },
    'mute': function (_0x26d12d) {
      this.parent(_0x26d12d), this.bgmPlaying && this.stop();
    },
    'unmute': function (_0x191e8f) {
      this.parent(_0x191e8f), this.play();
    }
  });
}), ig.baked = !0x0, ig.module('plugins.audio.impact-sound-player').requires('plugins.audio.sound-player').defines(function () {
  ImpactSoundPlayer = SoundPlayer.extend({
    'tagName': 'ImpactSoundPlayer',
    'soundList': {},
    'init': function (_0x37839f, _0x455515) {
      this.parent(_0x37839f, _0x455515);
      for (var _0x167cd6 in _0x37839f) {
        var _0x20bb44 = new ig.Sound(_0x37839f[_0x167cd6].path + '.*');
        this.soundList[_0x167cd6] = _0x20bb44;
      }
    },
    'play': function (_0x5a7bc1) {
      this.stayMuteFlag || ('object' === typeof _0x5a7bc1 ? (console.log(_0x5a7bc1 + " exists"), _0x5a7bc1.play()) : 'string' === typeof _0x5a7bc1 && this.soundList[_0x5a7bc1].play());
    },
    'stop': function (_0x8c6817) {
      this.parent(_0x8c6817), _0x8c6817.stop();
    },
    'volume': function (_0x5d05f7) {
      ig.soundManager.volume = 0x0 > _0x5d05f7 ? 0x0 : isNaN(_0x5d05f7) ? 0x1 : 0x1 < _0x5d05f7 ? 0x1 : _0x5d05f7;
    },
    'getVolume': function () {
      return ig.soundManager.volume;
    },
    'mute': function (_0x14708d) {
      this.parent(_0x14708d), ig.Sound.enabled = !0x1;
    },
    'unmute': function (_0x2feb95) {
      this.parent(_0x2feb95), ig.Sound.enabled = !0x0;
    }
  });
}), ig.baked = !0x0, ig.module('plugins.audio.howler-player').requires('plugins.audio.sound-player').defines(function () {
  HowlerPlayer = SoundPlayer.extend({
    'tagName': 'HowlerPlayer',
    'soundList': {},
    'init': function (_0x570594, _0x2a2eb2) {
      this.parent(_0x570594, _0x2a2eb2);
      for (var _0xc9e7ff in _0x570594) {
        var _0x4ff44a = _0x570594[_0xc9e7ff].path,
          _0x4ff44a = new Howl({
            'src': [_0x4ff44a + '.' + ig.Sound.FORMAT.OGG.ext, _0x4ff44a + '.' + ig.Sound.FORMAT.MP3.ext]
          });
        this.soundList[_0xc9e7ff] = _0x4ff44a;
      }
    },
    'play': function (_0x5731dc) {
      if (Howler.ctx && 'running' !== Howler.ctx.state) return Howler.ctx.resume();
      this.stayMuteFlag || ('object' === typeof _0x5731dc ? _0x5731dc.play() : 'string' === typeof _0x5731dc && this.soundList[_0x5731dc].play());
    },
    'stop': function (_0x5d3632) {
      this.parent(_0x5d3632), 'object' === typeof _0x5d3632 ? _0x5d3632.stop() : 'string' === typeof _0x5d3632 && this.soundList[_0x5d3632].stop();
    },
    'volume': function (_0x40b3be) {
      for (var _0x513351 in this.soundList) {
        if (0x0 > _0x40b3be) {
          this.soundList[_0x513351].volume(0x0);
          break;
        }
        isNaN(_0x40b3be) ? this.soundList[_0x513351].volume(0x1) : 0x1 < _0x40b3be ? this.soundList[_0x513351].volume(0x1) : this.soundList[_0x513351].volume(_0x40b3be);
      }
    },
    'getVolume': function () {
      for (var _0x4e3af0 in this.soundList) return this.soundList[_0x4e3af0].volume();
    },
    'mute': function (_0x50d6c1) {
      this.parent(_0x50d6c1), Howler.mute(!0x0);
    },
    'unmute': function (_0x45b5b9) {
      this.parent(_0x45b5b9), Howler.mute(!0x1);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.audio.howler-music-player').requires('plugins.audio.sound-player').defines(function () {
  HowlerMusicPlayer = SoundPlayer.extend({
    'tagName': 'HowlerMusicPlayer',
    'bgmPlaying': !0x1,
    'soundList': {},
    'init': function (_0x56c3e1, _0x14e97f) {
      this.parent(_0x56c3e1, _0x14e97f);
      for (var _0x973d01 in _0x56c3e1) {
        var _0x4e19aa = _0x56c3e1[_0x973d01].path,
          _0x4e19aa = new Howl({
            'src': [_0x4e19aa + '.' + ig.Sound.FORMAT.OGG.ext, _0x4e19aa + '.' + ig.Sound.FORMAT.MP3.ext],
            'loop': !0x0,
            'autoplay': !0x1,
            'onend': function () {}.bind(this)
          });
        this.soundList[_0x973d01] = _0x4e19aa;
      }
    },
    'play': function (_0x59cc28) {
      if (!this.stayMuteFlag && !this.bgmPlaying) {
        if ('object' === typeof _0x59cc28) this.bgmPlaying = !0x0, _0x59cc28.play();else {
          if ('string' === typeof _0x59cc28) this.bgmPlaying = !0x0, this.soundList[_0x59cc28].play();else for (var _0xc01e93 in this.soundList) {
            this.soundList[_0xc01e93].play(), this.bgmPlaying = !0x0;
            break;
          }
        }
      }
    },
    'stop': function (_0x4b6a4e) {
      this.parent(_0x4b6a4e);
      if (this.bgmPlaying) {
        for (var _0x9c27b6 in this.soundList) this.soundList[_0x9c27b6].stop();
        this.bgmPlaying = !0x1;
      }
    },
    'volume': function (_0x23d998) {
      console.log('howler', _0x23d998);
      for (var _0x31255c in this.soundList) {
        if (0x0 > _0x23d998) {
          this.soundList[_0x31255c].volume(0x0);
          break;
        }
        isNaN(_0x23d998) ? this.soundList[_0x31255c].volume(0x1) : 0x1 < _0x23d998 ? this.soundList[_0x31255c].volume(0x1) : this.soundList[_0x31255c].volume(_0x23d998);
      }
    },
    'getVolume': function () {
      for (var _0x310f11 in this.soundList) return this.soundList[_0x310f11].volume();
    },
    'mute': function (_0x5010c6) {
      this.parent(_0x5010c6), Howler.mute(!0x0);
    },
    'unmute': function (_0x1f3695) {
      this.parent(_0x1f3695), Howler.mute(!0x1);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.audio.jukebox-player').requires('plugins.audio.sound-player').defines(function () {
  JukeboxPlayer = SoundPlayer.extend({
    'tagName': 'JukeboxPlayer',
    'bgmPlaying': !0x1,
    'soundList': {},
    'jukeboxPlayer': null,
    'pausePosition': 0x0,
    'premuteVolume': 0x0,
    'minVolume': 0.001,
    'init': function (_0x138cda, _0x40315b) {
      this.parent(_0x138cda, _0x40315b);
      for (var _0x1bf896 in _0x138cda) {
        this.soundList[_0x1bf896] = _0x1bf896;
        var _0x451b8d = _0x138cda[_0x1bf896].path;
        this.jukeboxPlayer = new jukebox.Player({
          'resources': [_0x451b8d + '.' + ig.Sound.FORMAT.OGG.ext, _0x451b8d + '.' + ig.Sound.FORMAT.MP3.ext],
          'autoplay': !0x1,
          'spritemap': {
            'music': {
              'start': _0x138cda[_0x1bf896].startMp3,
              'end': _0x138cda[_0x1bf896].endMp3,
              'loop': !0x0
            }
          }
        });
      }
    },
    'play': function () {
      this.stayMuteFlag || (this.bgmPlaying = !0x0, this.pausePosition ? (console.log('resume'), this.jukeboxPlayer.resume(this.pausePosition)) : (console.log('play'), this.jukeboxPlayer.play(this.jukeboxPlayer.settings.spritemap.music.start, !0x0)), this.premuteVolume = this.getVolume());
    },
    'stop': function () {
      this.bgmPlaying = !0x1, this.pausePosition = this.jukeboxPlayer.pause();
    },
    'volume': function (_0x28daae) {
      console.log('jukebox:', _0x28daae), 0x0 >= _0x28daae ? this.jukeboxPlayer.setVolume(this.minVolume) : isNaN(_0x28daae) ? this.jukeboxPlayer.setVolume(0x1) : 0x1 < _0x28daae ? this.jukeboxPlayer.setVolume(0x1) : this.jukeboxPlayer.setVolume(_0x28daae);
    },
    'getVolume': function () {
      return this.jukeboxPlayer.getVolume();
    },
    'mute': function (_0xa5d815) {
      this.parent(_0xa5d815), this.bgmPlaying && (console.log('jukebox', this.premuteVolume), this.stayMuteFlag || (this.premuteVolume = this.getVolume()), this.jukeboxPlayer.pause(), this.jukeboxPlayer.setVolume(this.minVolume));
    },
    'unmute': function (_0x3e502e) {
      this.parent(_0x3e502e), this.stayMuteFlag || (console.log('jukebox', this.premuteVolume), this.jukeboxPlayer.setVolume(this.premuteVolume), this.jukeboxPlayer.resume());
    }
  });
}), ig.baked = !0x0, ig.module('plugins.audio.webaudio-music-player').requires('plugins.audio.sound-player').defines(function () {
  WebaudioMusicPlayer = SoundPlayer.extend({
    'tagName': 'WebaudioMusicPlayer',
    'bgmPlaying': !0x1,
    'isSupported': !0x1,
    'muteFlag': !0x1,
    'pausedTime': 0x0,
    'webaudio': null,
    'useHTML5Audio': !0x1,
    'audio': null,
    'inactiveAudio': null,
    'codecs': null,
    'reinitOnPlay': !0x1,
    'inputList': null,
    '_volume': 0x1,
    'soundList': {},
    'init': function (_0x41efd9) {
      this.webaudio = {
        'compatibility': {},
        'gainNode': null,
        'buffer': null,
        'source_loop': {},
        'source_once': {}
      };
      try {
        Howler && Howler.ctx ? this.webaudio.context = Howler.ctx : ig && ig.webaudio_ctx ? this.webaudio.context = ig.webaudio_ctx : (this.AudioContext = window.AudioContext || window.webkitAudioContext, this.webaudio.context = new this.AudioContext(), ig.webaudio_ctx = this.webaudio.context), this.isSupported = !0x0;
      } catch (_0x4d5cb6) {
        console.log("Web Audio API not supported in this browser."), this.webaudio = null, this.useHTML5Audio = !0x0;
      }
      if (this.useHTML5Audio) {
        if ('undefined' !== typeof Audio) try {
          new Audio();
        } catch (_0x14a1fe) {
          this.useHTML5Audio = !0x1;
        } else this.useHTML5Audio = !0x1;
      }
      this.useHTML5Audio && (this.audio = new Audio(), this.isSupported = !0x0, this.initHTML5Audio(_0x41efd9));
      if (!this.isSupported) return null;
      this.webaudio && (this.inputList = _0x41efd9, this.initWebAudio(_0x41efd9));
    },
    'initWebAudio': function (_0x599141) {
      ig.ua.iOS && this.initIOSWebAudioUnlock(), this.webaudio.gainNode = 'undefined' === typeof this.webaudio.context.createGain ? this.webaudio.context.createGainNode() : this.webaudio.context.createGain(), this.webaudio.gainNode.connect(this.webaudio.context.destination), this.webaudio.gainNode.gain.value = this._volume, this.webaudio.buffer = null;
      var _0x1789f0 = 'start',
        _0x529c72 = 'stop',
        _0x44a966 = this.webaudio.context.createBufferSource();
      'function' !== typeof _0x44a966.start && (_0x1789f0 = 'noteOn'), this.webaudio.compatibility.start = _0x1789f0, 'function' !== typeof _0x44a966.stop && (_0x529c72 = 'noteOff'), this.webaudio.compatibility.stop = _0x529c72;
      for (var _0x23c545 in _0x599141) {
        this.soundList[_0x23c545] = _0x23c545;
        var _0x529c72 = _0x599141[_0x23c545].path,
          _0x1789f0 = _0x529c72 + '.' + ig.Sound.FORMAT.MP3.ext,
          _0x5729c3 = _0x529c72 + '.' + ig.Sound.FORMAT.OGG.ext;
        ig.ua.mobile ? ig.ua.iOS && (_0x5729c3 = _0x1789f0) : (_0x529c72 = navigator.userAgent.toLowerCase(), -0x1 != _0x529c72.indexOf('safari') && -0x1 >= _0x529c72.indexOf('chrome') && (_0x5729c3 = _0x1789f0), _0x529c72.indexOf('win64') && (_0x5729c3 = _0x1789f0));
        var _0x48f220 = new XMLHttpRequest();
        _0x48f220.open('GET', _0x5729c3, !0x0), _0x48f220.responseType = 'arraybuffer', _0x48f220.onload = function () {
          this.webaudio.context.decodeAudioData(_0x48f220.response, function (_0x40ac58) {
            this.webaudio.buffer = _0x40ac58, this.webaudio.source_loop = {}, this.bgmPlaying ? this.play(null, !0x0) : this.stop();
          }.bind(this), function () {
            console.log("Error decoding audio \"" + _0x5729c3 + "\".");
          });
        }.bind(this), _0x48f220.send();
        if (0x4 == _0x48f220.readyState && 'undefined' !== typeof Audio) {
          this.useHTML5Audio = !0x0;
          try {
            new Audio();
          } catch (_0x29f464) {
            this.useHTML5Audio = !0x1;
          }
          this.useHTML5Audio && (console.log("Using HTML5 Audio"), this.webaudio = null, this.audio = new Audio(), this.isSupported = !0x0, this.initHTML5Audio(_0x599141));
        }
        break;
      }
    },
    'initIOSWebAudioUnlock': function () {
      if (this.webaudio) {
        webaudio = this.webaudio;
        var _0x5d12e7 = function () {
          var _0x3fc1e5 = webaudio.context,
            _0x47cabd = _0x3fc1e5.createBuffer(0x1, 0x1, 0x5622),
            _0x45e421 = _0x3fc1e5.createBufferSource();
          _0x45e421.buffer = _0x47cabd, _0x45e421.connect(_0x3fc1e5.destination), 'undefined' === typeof _0x45e421.start ? _0x45e421.noteOn(0x0) : _0x45e421.start(0x0), setTimeout(function () {
            (_0x45e421.playbackState === _0x45e421.PLAYING_STATE || _0x45e421.playbackState === _0x45e421.FINISHED_STATE) && window.removeEventListener('touchend', _0x5d12e7, !0x1);
          }.bind(this), 0x0);
        };
        window.addEventListener('touchend', _0x5d12e7, !0x1);
      }
    },
    'initHTML5Audio': function (_0x3d743c) {
      if (this.useHTML5Audio && this.audio) {
        var _0x280faf = this.audio;
        this.codecs = {}, this.codecs = {
          'mp3': !!_0x280faf.canPlayType('audio/mpeg;').replace(/^no$/, ''),
          'opus': !!_0x280faf.canPlayType("audio/ogg; codecs=\"opus\"").replace(/^no$/, ''),
          'ogg': !!_0x280faf.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ''),
          'wav': !!_0x280faf.canPlayType("audio/wav; codecs=\"1\"").replace(/^no$/, ''),
          'aac': !!_0x280faf.canPlayType('audio/aac;').replace(/^no$/, ''),
          'm4a': !!(_0x280faf.canPlayType('audio/x-m4a;') || _0x280faf.canPlayType('audio/m4a;') || _0x280faf.canPlayType('audio/aac;')).replace(/^no$/, ''),
          'mp4': !!(_0x280faf.canPlayType('audio/x-mp4;') || _0x280faf.canPlayType('audio/mp4;') || _0x280faf.canPlayType('audio/aac;')).replace(/^no$/, ''),
          'weba': !!_0x280faf.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, '')
        }, this.is = {
          'ff': Boolean(null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase())),
          'ie': Boolean(document.all && !window.opera),
          'opera': Boolean(window.opera),
          'chrome': Boolean(window.chrome),
          'safari': Boolean(!window.chrome && /safari/.test(navigator.userAgent.toLowerCase()) && window.getComputedStyle && !window.globalStorage && !window.opera)
        }, this.playDelay = -0x3c, this.stopDelay = 0x1e, this.is.chrome && (this.playDelay = -0x19), this.is.chrome && (this.stopDelay = 0x19), this.is.ff && (this.playDelay = -0x19), this.is.ff && (this.stopDelay = 0x55), this.is.opera && (this.playDelay = 0x5), this.is.opera && (this.stopDelay = 0x0);
        for (var _0x515747 in _0x3d743c) {
          this.soundList[_0x515747] = _0x515747;
          var _0x34c6a4 = _0x3d743c[_0x515747].path,
            _0x280faf = _0x34c6a4 + '.' + ig.Sound.FORMAT.OGG.ext,
            _0x34c6a4 = _0x34c6a4 + '.' + ig.Sound.FORMAT.MP3.ext,
            _0x474ba4 = null;
          this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()] ? _0x474ba4 = _0x280faf : this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()] && (_0x474ba4 = _0x34c6a4);
          if (_0x474ba4) {
            ig.ua.mobile ? ig.ua.iOS && (_0x474ba4 = _0x34c6a4) : (_0x3d743c = navigator.userAgent.toLowerCase(), -0x1 != _0x3d743c.indexOf('safari') && -0x1 >= _0x3d743c.indexOf('chrome') && (_0x474ba4 = _0x34c6a4)), this.audio.addEventListener('error', function () {
              this.audio.error && 0x4 === this.audio.error.code && (this.isSupported = !0x1);
            }, !0x1), this.audio.src = _0x474ba4, this.audio._pos = 0x0, this.audio.preload = 'auto', this.audio.volume = this._volume, this.inactiveAudio = new Audio(), this.inactiveAudio.src = _0x474ba4, this.inactiveAudio._pos = 0x0, this.inactiveAudio.preload = 'auto', this.inactiveAudio.volume = this._volume, this.inactiveAudio.load();
            var _0x4a60be = function () {
              this._duration = this.audio.duration, this._loaded || (this._loaded = !0x0), this.bgmPlaying ? this.play(null, !0x0) : this.stop(), this.audio.removeEventListener('canplaythrough', _0x4a60be, !0x1);
            }.bind(this);
            this.audio.addEventListener('canplaythrough', _0x4a60be, !0x1), this.audio.load();
            break;
          }
        }
      }
    },
    'play': function (_0x12bbfd, _0x5a5dc1) {
      if (this.isSupported) {
        if (this.bgmPlaying = !0x0, this.webaudio) {
          if (!_0x5a5dc1 && this.reinitOnPlay && this.webaudio.source_loop.buffer == this.webaudio.buffer) {
            if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0x0), this.webaudio.source_loop._playing = !0x1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0x0, 'noteOn' === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0x0);
            try {
              this.webaudio.context.close(), this.webaudio.context = new this.AudioContext(), this.webaudio.gainNode = this.webaudio.context.createGain(), this.webaudio.gainNode.connect(this.webaudio.context.destination), this.webaudio.gainNode.gain.value = this._volume;
              var _0xac1f58 = 'start',
                _0x2e5e47 = 'stop',
                _0x193d7d = this.webaudio.context.createBufferSource();
              'function' !== typeof _0x193d7d.start && (_0xac1f58 = 'noteOn'), this.webaudio.compatibility.start = _0xac1f58, 'function' !== typeof _0x193d7d.stop && (_0x2e5e47 = 'noteOff'), this.webaudio.compatibility.stop = _0x2e5e47, this.webaudio.source_loop = {}, this.play(null, !0x0);
            } catch (_0x37b3a7) {}
          }
          if (this.webaudio.buffer) {
            if (!this.muteFlag && (this.bgmPlaying = !0x0, !this.webaudio.source_loop._playing)) {
              this.webaudio.source_loop = this.webaudio.context.createBufferSource(), this.webaudio.source_loop.buffer = this.webaudio.buffer, this.webaudio.source_loop.loop = !0x0, this.webaudio.source_loop.connect(this.webaudio.gainNode);
              if (null == _0x12bbfd || isNaN(_0x12bbfd)) _0x12bbfd = 0x0, this.pausedTime && (_0x12bbfd = this.pausedTime);
              this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
              if ('noteOn' === this.webaudio.compatibility.start) this.webaudio.source_once = this.webaudio.context.createBufferSource(), this.webaudio.source_once.buffer = this.webaudio.buffer, this.webaudio.source_once.connect(this.webaudio.gainNode), this.webaudio.source_once.noteGrainOn(0x0, _0x12bbfd, this.webaudio.buffer.duration - _0x12bbfd), this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime + (this.webaudio.buffer.duration - _0x12bbfd));else this.webaudio.source_loop[this.webaudio.compatibility.start](0x0, _0x12bbfd);
              this.webaudio.source_loop._playing = !0x0;
            }
          } else this.bgmPlaying = !0x0;
        } else {
          if (this.audio) {
            var _0x2b0b9b = this.audio;
            if (!this.muteFlag) {
              if (this.bgmPlaying = !0x0, isNaN(_0x12bbfd) && (_0x12bbfd = 0x0, this.pausedTime && (_0x12bbfd = this.pausedTime)), _0xac1f58 = this._duration - _0x12bbfd, this._onEndTimer && (clearTimeout(this._onEndTimer), this._onEndTimer = null), this._onEndTimer = setTimeout(function () {
                this.audio.currentTime = 0x0, this.audio.pause(), this.pausedTime = 0x0;
                if (this.inactiveAudio) {
                  var _0x337bf6 = this.audio;
                  this.audio = this.inactiveAudio, this.inactiveAudio = _0x337bf6;
                }
                this.play();
              }.bind(this), 0x3e8 * _0xac1f58 + this.playDelay), 0x4 === _0x2b0b9b.readyState || !_0x2b0b9b.readyState && navigator.isCocoonJS) _0x2b0b9b.readyState = 0x4, _0x2b0b9b.currentTime = _0x12bbfd, _0x2b0b9b.muted = this.muteFlag || _0x2b0b9b.muted, _0x2b0b9b.volume = this._volume, setTimeout(function () {
                _0x2b0b9b.play();
              }, 0x0);else {
                clearTimeout(this._onEndTimer), this._onEndTimer = null;
                var _0x3d87da = function () {
                  typeof ('function' == this.play) && (this.play(), _0x2b0b9b.removeEventListener('canplaythrough', _0x3d87da, !0x1));
                }.bind(this);
                _0x2b0b9b.addEventListener('canplaythrough', _0x3d87da, !0x1);
              }
            }
          }
        }
      }
    },
    'stop': function () {
      this.bgmPlaying = !0x1;
      if (this.isSupported) {
        if (this.webaudio) {
          if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0x0), this.webaudio.source_loop._playing = !0x1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0x0, 'noteOn' === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0x0);
        } else {
          if (this.audio) {
            var _0x222174 = this.audio;
            0x4 == _0x222174.readyState && (this.pausedTime = _0x222174.currentTime, _0x222174.currentTime = 0x0, _0x222174.pause(), clearTimeout(this._onEndTimer), this._onEndTimer = null);
          }
        }
      }
    },
    'volume': function (_0x5c3f2b) {
      if (isNaN(_0x5c3f2b) || null == _0x5c3f2b) return this.getVolume();
      this.isSupported && (this._volume = _0x5c3f2b, 0x0 > this._volume ? this._volume = 0x0 : 0x1 < this._volume && (this._volume = 0x1), this.webaudio ? this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = this._volume) : this.audio && (this.audio.volume = this._volume, this.inactiveAudio && (this.inactiveAudio.volume = this._volume)));
    },
    'getVolume': function () {
      return !this.isSupported ? 0x0 : this._volume;
    },
    'mute': function (_0x1d1870) {
      this.parent(_0x1d1870), !0x1 == this.muteFlag && (this.muteFlag = !0x0, this.bgmPlaying && (this.stop(), this.bgmPlaying = !0x0));
    },
    'unmute': function (_0x1c2fcc) {
      this.parent(_0x1c2fcc), !this.stayMuteFlag && !0x0 == this.muteFlag && (this.muteFlag = !0x1, this.bgmPlaying && this.play());
    }
  });
}), ig.baked = !0x0, ig.module('plugins.audio.sound-info').defines(function () {
  SoundInfo = ig.Class.extend({
    'FORMATS': {
      'OGG': '.ogg',
      'MP3': '.mp3'
    },
    'sfx': {
      'logosplash1': {
        'path': 'media/audio/opening/logosplash1'
      },
      'logosplash2': {
        'path': 'media/audio/opening/logosplash2'
      },
      'staticSound': {
        'path': 'media/audio/play/static'
      },
      'metal0': {
        'path': 'media/audio/sfx/hit/metal0'
      },
      'metal1': {
        'path': 'media/audio/sfx/hit/metal1'
      },
      'metal2': {
        'path': 'media/audio/sfx/hit/metal2'
      },
      'stone0': {
        'path': 'media/audio/sfx/hit/stone0'
      },
      'stone1': {
        'path': 'media/audio/sfx/hit/stone1'
      },
      'stone2': {
        'path': 'media/audio/sfx/hit/stone2'
      },
      'swing0': {
        'path': 'media/audio/sfx/hit/swing0'
      },
      'swing1': {
        'path': 'media/audio/sfx/hit/swing1'
      },
      'swing2': {
        'path': 'media/audio/sfx/hit/swing2'
      },
      'wood0': {
        'path': 'media/audio/sfx/hit/wood0'
      },
      'wood1': {
        'path': 'media/audio/sfx/hit/wood1'
      },
      'wood2': {
        'path': 'media/audio/sfx/hit/wood2'
      },
      'tap0': {
        'path': 'media/audio/sfx/menu/tap0'
      },
      'tap1': {
        'path': 'media/audio/sfx/menu/tap1'
      },
      'step0': {
        'path': 'media/audio/sfx/environment/step0'
      },
      'step1': {
        'path': 'media/audio/sfx/environment/step1'
      },
      'step2': {
        'path': 'media/audio/sfx/environment/step2'
      }
    },
    'bgm': {
      'background': {
        'path': 'media/audio/bgm',
        'startOgg': 0x0,
        'endOgg': 21.463,
        'startMp3': 0x0,
        'endMp3': 21.463
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.audio.sound-handler').requires('plugins.audio.impact-music-player', 'plugins.audio.impact-sound-player', 'plugins.audio.howler-player', 'plugins.audio.howler-music-player', 'plugins.audio.jukebox-player', 'plugins.audio.webaudio-music-player', 'plugins.audio.sound-info').defines(function () {
  ig.SoundHandler = ig.Class.extend({
    'bgmPlayer': null,
    'sfxPlayer': null,
    'focusBlurMute': !0x1,
    'soundInfo': new SoundInfo(),
    'init': function () {
      console.log("Initiating sound handler"), ig.ua.mobile ? (this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx), this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
        'loop': !0x0
      }), this.bgmPlayer.isSupported || (this.bgmPlayer = new JukeboxPlayer(this.soundInfo.bgm, {
        'loop': !0x0
      }))) : (this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx), this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
        'loop': !0x0
      }), this.bgmPlayer.isSupported || (this.bgmPlayer = new ImpactMusicPlayer(this.soundInfo.bgm, {
        'loop': !0x0
      })));
    },
    'unlockWebAudio': function () {
      Howler && (Howler.ctx && 'running' !== Howler.ctx.state && Howler.ctx.resume(), Howler._audioUnlocked || 'function' === typeof Howler._unlockAudio && Howler._unlockAudio()), ig && ig.webaudio_ctx && ig.webaudio_ctx.state && 'running' !== ig.webaudio_ctx.state && ig.webaudio_ctx.resume(), this.bgmPlayer.webaudio && this.bgmPlayer.webaudio.context && this.bgmPlayer.webaudio.context.state && 'running' !== this.bgmPlayer.webaudio.context.state && this.bgmPlayer.webaudio.context.resume();
    },
    'checkBGM': function () {
      return this.bgmPlayer.stayMuteFlag;
    },
    'checkSFX': function () {
      return this.sfxPlayer.stayMuteFlag;
    },
    'muteSFX': function (_0x54d1c8) {
      this.sfxPlayer && this.sfxPlayer.mute(_0x54d1c8);
    },
    'muteBGM': function (_0x3dcb60) {
      this.bgmPlayer && this.bgmPlayer.mute(_0x3dcb60);
    },
    'unmuteSFX': function (_0x48ea25) {
      this.sfxPlayer && this.sfxPlayer.unmute(_0x48ea25);
    },
    'unmuteBGM': function (_0x38d1b4) {
      this.bgmPlayer && this.bgmPlayer.unmute(_0x38d1b4);
    },
    'muteAll': function (_0x4f6d50) {
      this.muteSFX(_0x4f6d50), this.muteBGM(_0x4f6d50);
    },
    'unmuteAll': function (_0x5ba6fa) {
      this.unlockWebAudio(), this.unmuteSFX(_0x5ba6fa), this.unmuteBGM(_0x5ba6fa);
    },
    'forceMuteAll': function () {
      this.focusBlurMute || this.muteAll(!0x1), this.focusBlurMute = !0x0;
    },
    'forceUnMuteAll': function () {
      this.focusBlurMute && (this.unmuteAll(!0x1), this.focusBlurMute = !0x1);
    },
    'saveVolume': function () {
      this.sfxPlayer && ig.game.io.storageSet('soundVolume', this.sfxPlayer.getVolume()), this.bgmPlayer && ig.game.io.storageSet('musicVolume', this.bgmPlayer.getVolume());
    },
    'forceLoopBGM': function () {
      var _0x13b11a;
      if (!this.focusBlurMute && this.bgmPlayer.bgmPlaying && this.bgmPlayer) {
        var _0x2a83a3 = this.bgmPlayer.jukeboxPlayer;
        if (_0x2a83a3) {
          null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase()), _0x13b11a = Boolean(window.chrome), !window.chrome && /safari/.test(navigator.userAgent.toLowerCase());
          var _0x160190 = 0.1;
          ig.ua.mobile && (_0x160190 = 0.115, ig.ua.android && (_0x160190 = 0.45, _0x13b11a && (_0x160190 = 0.3))), _0x2a83a3.settings.spritemap.music && (_0x13b11a = _0x2a83a3.settings.spritemap.music.end - _0x160190, _0x2a83a3.getCurrentTime() >= _0x13b11a && (_0x13b11a = _0x2a83a3.settings.spritemap.music.start, ig.ua.android ? this.forcelooped || (_0x2a83a3.play(_0x13b11a, !0x0), this.forcelooped = !0x0, setTimeout(function () {
            ig.soundHandler.forcelooped = !0x1;
          }, _0x160190)) : _0x2a83a3.setCurrentTime(_0x13b11a)));
        } else 'ImpactMusicPlayer' == this.bgmPlayer.tagName && (null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase()), _0x13b11a = Boolean(window.chrome), !window.chrome && /safari/.test(navigator.userAgent.toLowerCase()), _0x160190 = 0.1, ig.ua.mobile && (_0x160190 = 0.115, ig.ua.android && (_0x160190 = 0.45, _0x13b11a && (_0x160190 = 0.3))), _0x2a83a3 = 0x0, 'mp3' == ig.soundManager.format.ext && (_0x2a83a3 = 0.05), ig.music.currentTrack && (_0x13b11a = ig.music.currentTrack.duration - _0x160190, ig.music.currentTrack.currentTime >= _0x13b11a && (ig.ua.android ? this.forcelooped || (ig.music.currentTrack.pause(), ig.music.currentTrack.currentTime = _0x2a83a3, ig.music.currentTrack.play(), this.forcelooped = !0x0, setTimeout(function () {
          ig.soundHandler.forcelooped = !0x1;
        }, _0x160190)) : ig.music.currentTrack.currentTime = _0x2a83a3)));
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.handlers.visibility-handler').requires('plugins.audio.sound-handler').defines(function () {
  ig.VisibilityHandler = ig.Class.extend({
    'version': '1.1.2',
    'config': {
      'muteOnBlur': !0x0,
      'pauseOnBlur': !0x0,
      'clearInputStateOnBlur': !0x0,
      'allowResumeWithoutFocus': {
        'desktop': !0x0,
        'mobile': {
          'kaios': !0x1,
          'default': !0x0
        }
      },
      'handlerDelay': {
        'desktop': 0x0,
        'mobile': {
          'kaios': 0x0,
          'default': 0x0
        }
      },
      'autoFocusOnResume': {
        'desktop': !0x0,
        'mobile': {
          'kaios': !0x1,
          'default': !0x0
        }
      },
      'autoFocusAfterResume': {
        'desktop': !0x0,
        'mobile': {
          'kaios': !0x1,
          'default': !0x0
        }
      }
    },
    'browserPrefixes': ['o', 'ms', 'moz', 'webkit'],
    'browserPrefix': null,
    'hiddenPropertyName': null,
    'visibilityEventName': null,
    'visibilityStateName': null,
    'isShowingOverlay': !0x1,
    'isFocused': !0x1,
    'isPaused': !0x1,
    'init': function () {
      this.initVisibilityHandler(), this.initFocusHandler(), this.initPageTransitionHandler(), ig.visibilityHandler = this;
    },
    'pauseHandler': function () {
      !0x0 === this.config.clearInputStateOnBlur && 'undefined' !== typeof ig.input && null !== ig.input && 'function' === typeof ig.input.clearAllState && ig.input.clearAllState(), !0x0 === this.config.pauseOnBlur && 'undefined' !== typeof ig.game && null !== ig.game && 'undefined' !== typeof ig.game.pauseGame && ig.game.pauseGame(), !0x0 === this.config.muteOnBlur && 'undefined' !== typeof ig.soundHandler && null !== ig.soundHandler && 'function' === typeof ig.soundHandler.forceMuteAll && ig.soundHandler.forceMuteAll();
    },
    'resumeHandler': function () {
      'undefined' !== typeof ig.input && null !== ig.input && 'function' === typeof ig.input.clearAllState && ig.input.clearAllState(), 'undefined' !== typeof ig.game && null !== ig.game && 'undefined' !== typeof ig.game.resumeGame && ig.game.resumeGame(), 'undefined' !== typeof ig.soundHandler && null !== ig.soundHandler && 'function' === typeof ig.soundHandler.forceUnMuteAll && ig.soundHandler.forceUnMuteAll();
    },
    'initVisibilityHandler': function () {
      this.browserPrefix = this.getBrowserPrefix(), this.hiddenPropertyName = this.getHiddenPropertyName(this.browserPrefix), this.visibilityEventName = this.getVisibilityEventName(this.browserPrefix), this.visibilityStateName = this.getVisibilityStateName(this.browserPrefix), this.visibilityEventName && document.addEventListener(this.visibilityEventName, this.onChange.bind(this), !0x0);
    },
    'initFocusHandler': function () {
      window.addEventListener('blur', this.onChange.bind(this), !0x0), document.addEventListener('blur', this.onChange.bind(this), !0x0), document.addEventListener('focusout', this.onChange.bind(this), !0x0), window.addEventListener('focus', this.onChange.bind(this), !0x0), document.addEventListener('focus', this.onChange.bind(this), !0x0), document.addEventListener('focusin', this.onChange.bind(this), !0x0);
    },
    'initPageTransitionHandler': function () {
      window.addEventListener('pagehide', this.onChange.bind(this), !0x0), window.addEventListener('pageshow', this.onChange.bind(this), !0x0);
    },
    'getBrowserPrefix': function () {
      var _0x25a387 = null;
      return this.browserPrefixes.forEach(function (_0x1ef236) {
        if (this.getHiddenPropertyName(_0x1ef236) in document) return _0x25a387 = _0x1ef236;
      }.bind(this)), _0x25a387;
    },
    'getHiddenPropertyName': function (_0x11caf2) {
      return _0x11caf2 ? _0x11caf2 + 'Hidden' : 'hidden';
    },
    'getVisibilityEventName': function (_0x564fc6) {
      return (_0x564fc6 ? _0x564fc6 : '') + 'visibilitychange';
    },
    'getVisibilityStateName': function (_0x27458b) {
      return _0x27458b ? _0x27458b + 'VisibilityState' : 'visibilityState';
    },
    'hasView': function () {
      return !(document[this.hiddenPropertyName] || 'visible' !== document[this.visibilityStateName]);
    },
    'hasFocus': function () {
      return document.hasFocus() || this.isFocused;
    },
    'onOverlayShow': function () {
      this.systemPaused(), this.isShowingOverlay = !0x0;
    },
    'onOverlayHide': function () {
      this.isShowingOverlay = !0x1, this.systemResumed();
    },
    'systemPaused': function () {
      if (this.isPaused) return !0x1;
      return this.pauseHandler(), this.isPaused = !0x0;
    },
    'systemResumed': function () {
      if (!this.isPaused || !this.hasView() || this.isShowingOverlay) return !0x1;
      if (!this.hasFocus()) {
        if (ig.ua.mobile) {
          if (this.isKaiOS()) {
            if (!this.config.allowResumeWithoutFocus.mobile.kaios) return !0x1;
          } else {
            if (!this.config.allowResumeWithoutFocus.mobile['default']) return !0x1;
          }
        } else {
          if (!this.config.allowResumeWithoutFocus.desktop) return !0x1;
        }
      }
      return this.focusOnResume(), this.resumeHandler(), this.focusAfterResume(), this.isPaused = !0x1, !0x0;
    },
    'isKaiOS': function () {
      return /KAIOS/.test(navigator.userAgent) || !0x1;
    },
    'focusOnResume': function () {
      return ig.ua.mobile ? this.isKaiOS() ? this.config.autoFocusOnResume.mobile.kaios : this.config.autoFocusOnResume.mobile['default'] : this.config.autoFocusOnResume.desktop;
    },
    'focusAfterResume': function () {
      return ig.ua.mobile ? this.isKaiOS() ? this.config.autoFocusAfterResume.mobile.kaios : this.config.autoFocusAfterResume.mobile['default'] : this.config.autoFocusAfterResume.desktop;
    },
    'focus': function (_0x3f32ad) {
      window.focus && _0x3f32ad && (document.activeElement && 'function' === typeof document.activeElement.blur && document.activeElement.blur(), window.focus());
    },
    'handleDelayedEvent': function (_0x3c9a48) {
      if (!this.hasView() || 'pause' === _0x3c9a48.type || 'pageHide' === _0x3c9a48.type || 'blur' === _0x3c9a48.type || 'focusout' === _0x3c9a48.type) {
        if ('blur' === _0x3c9a48.type || 'focusout' === _0x3c9a48.type) {
          var _0x427804 = _0x3c9a48.path || _0x3c9a48.composedPath && _0x3c9a48.composedPath();
          if (_0x427804 && 0x2 < _0x427804.length || _0x3c9a48.srcElement && ('INPUT' === _0x3c9a48.srcElement.tagName || 'TEXTAREA' === _0x3c9a48.srcElement.tagName)) return !0x1;
          this.isFocused = !0x1;
        }
        return this.systemPaused(_0x3c9a48);
      }
      if ('focus' === _0x3c9a48.type || 'focusin' === _0x3c9a48.type) this.isFocused = !0x0;
      return this.systemResumed(_0x3c9a48);
    },
    'startDelayedEventHandler': function (_0x391e46) {
      ig.ua.mobile ? this.isKaiOS() ? 0x0 < this.config.handlerDelay.mobile.kaios ? window.setTimeout(function (_0x2acb1f) {
        this.handleDelayedEvent(_0x2acb1f);
      }.bind(this, _0x391e46), this.config.handlerDelay.mobile) : this.handleDelayedEvent(_0x391e46) : 0x0 < this.config.handlerDelay.mobile['default'] ? window.setTimeout(function (_0x911844) {
        this.handleDelayedEvent(_0x911844);
      }.bind(this, _0x391e46), this.config.handlerDelay.mobile) : this.handleDelayedEvent(_0x391e46) : 0x0 < this.config.handlerDelay.desktop ? window.setTimeout(function (_0xa9fa41) {
        this.handleDelayedEvent(_0xa9fa41);
      }.bind(this, _0x391e46), this.config.handlerDelay.desktop) : this.handleDelayedEvent(_0x391e46);
    },
    'onChange': function (_0x1e0110) {
      this.startDelayedEventHandler(_0x1e0110);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.storage').defines(function () {
  ig.Storage = ig.Class.extend({
    'staticInstantiate': function () {
      return !ig.Storage.instance ? null : ig.Storage.instance;
    },
    'init': function () {
      ig.Storage.instance = this;
    },
    'isCapable': function () {
      return 'undefined' !== typeof window.localStorage;
    },
    'isSet': function (_0x5b9922) {
      return null !== this.get(_0x5b9922);
    },
    'initUnset': function (_0x1a33ee, _0x106872) {
      null === this.get(_0x1a33ee) && this.set(_0x1a33ee, _0x106872);
    },
    'get': function (_0x18c7cc) {
      if (!this.isCapable()) return null;
      try {
        return JSON.parse(localStorage.getItem(_0x18c7cc));
      } catch (_0x44020d) {
        return window.localStorage.getItem(_0x18c7cc);
      }
    },
    'getInt': function (_0x230810) {
      return ~~this.get(_0x230810);
    },
    'getFloat': function (_0xe927fa) {
      return parseFloat(this.get(_0xe927fa));
    },
    'getBool': function (_0x51bf16) {
      return !!this.get(_0x51bf16);
    },
    'key': function (_0x143654) {
      return this.isCapable() ? window.localStorage.key(_0x143654) : null;
    },
    'set': function (_0x1701c6, _0xb4bd50) {
      if (!this.isCapable()) return null;
      try {
        window.localStorage.setItem(_0x1701c6, JSON.stringify(_0xb4bd50));
      } catch (_0x1192db) {
        console.log(_0x1192db);
      }
    },
    'setHighest': function (_0x4c0cee, _0x39dda7) {
      _0x39dda7 > this.getFloat(_0x4c0cee) && this.set(_0x4c0cee, _0x39dda7);
    },
    'remove': function (_0x1683b7) {
      if (!this.isCapable()) return null;
      window.localStorage.removeItem(_0x1683b7);
    },
    'clear': function () {
      if (!this.isCapable()) return null;
      window.localStorage.clear();
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.mouse').requires('plugins.data.vector').defines(function () {
  Mouse = ig.Class.extend({
    'pos': new Vector2(0x0, 0x0),
    'bindings': {
      'click': [ig.KEY.MOUSE1]
    },
    'init': function () {
      ig.input.initMouse();
      for (var _0x2b4038 in this.bindings) {
        this[_0x2b4038] = _0x2b4038;
        for (var _0x254271 = 0x0; _0x254271 < this.bindings[_0x2b4038].length; _0x254271++) ig.input.bind(this.bindings[_0x2b4038][_0x254271], _0x2b4038);
      }
    },
    'getLast': function () {
      return this.pos;
    },
    'getPos': function () {
      var _0x2fe8a4 = ig.system.scale * ((ig.system.canvas.offsetWidth || ig.system.realWidth) / ig.system.realWidth);
      return this.pos.set(ig.input.mouse.x * _0x2fe8a4 / ig.sizeHandler.sizeRatio.x / ig.sizeHandler.scaleRatioMultiplier.x, ig.input.mouse.y * _0x2fe8a4 / ig.sizeHandler.sizeRatio.y / ig.sizeHandler.scaleRatioMultiplier.y), this.pos.clone();
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.keyboard').defines(function () {
  Keyboard = ig.Class.extend({
    'bindings': {
      'PREVENT_PAGE_SCROLLING_OVER_IFRAME': [ig.KEY.UP_ARROW, ig.KEY.DOWN_ARROW, ig.KEY.LEFT_ARROW, ig.KEY.RIGHT_ARROW, ig.KEY.PAGE_UP, ig.KEY.PAGE_DOWN],
      'up': [ig.KEY.W, ig.KEY.UP_ARROW],
      'right': [ig.KEY.D, ig.KEY.RIGHT_ARROW],
      'left': [ig.KEY.A, ig.KEY.LEFT_ARROW],
      'down': [ig.KEY.S, ig.KEY.DOWN_ARROW, ig.KEY.SPACE]
    },
    'init': function () {
      for (var _0x36aff5 in this.bindings) {
        this[_0x36aff5] = _0x36aff5;
        for (var _0x3f1c35 = 0x0; _0x3f1c35 < this.bindings[_0x36aff5].length; _0x3f1c35++) ig.input.bind(this.bindings[_0x36aff5][_0x3f1c35], _0x36aff5);
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.gamepad-input').defines(function () {
  ig.PADKEY = {
    'BUTTON_0': 0x0,
    'PADBUTTON_1': 0x1,
    'BUTTON_2': 0x2,
    'BUTTON_3': 0x3,
    'BUTTON_LEFT_BUMPER': 0x4,
    'BUTTON_RIGHT_BUMPER': 0x5,
    'BUTTON_LEFT_TRIGGER': 0x6,
    'BUTTON_RIGHT_TRIGGER': 0x7,
    'BUTTON_LEFT_JOYSTICK': 0xa,
    'BUTTON_RIGHT_JOYSTICK': 0xb,
    'BUTTON_DPAD_UP': 0xc,
    'BUTTON_DPAD_DOWN': 0xd,
    'BUTTON_DPAD_LEFT': 0xe,
    'BUTTON_DPAD_RIGHT': 0xf,
    'BUTTON_MENU': 0x10,
    'AXIS_LEFT_JOYSTICK_X': 0x0,
    'AXIS_LEFT_JOYSTICK_Y': 0x1,
    'AXIS_RIGHT_JOYSTICK_X': 0x2,
    'AXIS_RIGHT_JOYSTICK_Y': 0x3
  }, ig.GamepadInput = ig.Class.extend({
    'isInit': !0x1,
    'isSupported': !0x1,
    'list': [],
    'bindings': {},
    'states': {},
    'presses': {},
    'releases': {},
    'downLocks': {},
    'upLocks': {},
    'leftStick': {
      'x': 0x0,
      'y': 0x0
    },
    'rightStick': {
      'x': 0x0,
      'y': 0x0
    },
    'start': function () {
      if (!this.isInit) {
        this.isInit = !0x0;
        var _0x5bb2ba = navigator.getGamepads || navigator.webkitGetGamepads;
        _0x5bb2ba && (!navigator.getGamepads && navigator.webkitGetGamepads && (navigator.getGamepads = navigator.webkitGetGamepads), this.list = navigator.getGamepads()), this.isSupported = _0x5bb2ba;
      }
    },
    'isAvailable': function () {
      return this.isInit && this.isSupported;
    },
    'buttonPressed': function (_0x59dd14) {
      return 'object' == typeof _0x59dd14 ? _0x59dd14.pressed : 0x1 == _0x59dd14;
    },
    'buttonDown': function (_0x4f949e) {
      if (_0x4f949e = this.bindings[_0x4f949e]) this.states[_0x4f949e] = !0x0, this.downLocks[_0x4f949e] || (this.presses[_0x4f949e] = !0x0, this.downLocks[_0x4f949e] = !0x0);
    },
    'buttonUp': function (_0x5cfe89) {
      if ((_0x5cfe89 = this.bindings[_0x5cfe89]) && this.downLocks[_0x5cfe89] && !this.upLocks[_0x5cfe89]) this.states[_0x5cfe89] = !0x1, this.releases[_0x5cfe89] = !0x0, this.upLocks[_0x5cfe89] = !0x0;
    },
    'clearPressed': function () {
      for (var _0x389747 in this.releases) this.states[_0x389747] = !0x1, this.downLocks[_0x389747] = !0x1;
      this.releases = {}, this.presses = {}, this.upLocks = {};
    },
    'bind': function (_0x27fd50, _0x25d94d) {
      this.bindings[_0x27fd50] = _0x25d94d;
    },
    'unbind': function (_0x14f390) {
      this.releases[this.bindings[_0x14f390]] = !0x0, this.bindings[_0x14f390] = null;
    },
    'unbindAll': function () {
      this.bindings = {}, this.states = {}, this.presses = {}, this.releases = {}, this.downLocks = {}, this.upLocks = {};
    },
    'state': function (_0x21356b) {
      return this.states[_0x21356b];
    },
    'pressed': function (_0x4c4e90) {
      return this.presses[_0x4c4e90];
    },
    'released': function (_0x5f09e7) {
      return this.releases[_0x5f09e7];
    },
    'clamp': function (_0x3bdac5, _0x4defcd, _0x1caa6a) {
      return _0x3bdac5 < _0x4defcd ? _0x4defcd : _0x3bdac5 > _0x1caa6a ? _0x1caa6a : _0x3bdac5;
    },
    'pollGamepads': function () {
      if (this.isSupported) {
        this.leftStick.x = 0x0, this.leftStick.y = 0x0, this.rightStick.x = 0x0, this.rightStick.y = 0x0, this.list = navigator.getGamepads();
        for (var _0x2921e1 in this.bindings) {
          for (var _0x371359 = !0x1, _0x4f7ad6 = 0x0; _0x4f7ad6 < this.list.length; _0x4f7ad6++) {
            var _0x333338 = this.list[_0x4f7ad6];
            if (_0x333338 && _0x333338.buttons && this.buttonPressed(_0x333338.buttons[_0x2921e1])) {
              _0x371359 = !0x0;
              break;
            }
          }
          _0x371359 ? this.buttonDown(_0x2921e1) : this.buttonUp(_0x2921e1);
        }
        for (_0x4f7ad6 = 0x0; _0x4f7ad6 < this.list.length; _0x4f7ad6++) if ((_0x333338 = this.list[_0x4f7ad6]) && _0x333338.axes) {
          _0x2921e1 = _0x333338.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
          var _0x371359 = _0x333338.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y],
            _0x1402c8 = _0x333338.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
            _0x333338 = _0x333338.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
          this.leftStick.x += isNaN(_0x2921e1) ? 0x0 : _0x2921e1, this.leftStick.y += isNaN(_0x371359) ? 0x0 : _0x371359, this.rightStick.x += isNaN(_0x1402c8) ? 0x0 : _0x1402c8, this.rightStick.y += isNaN(_0x333338) ? 0x0 : _0x333338;
        }
        0x0 < this.list.length && (this.leftStick.x = this.clamp(this.leftStick.x, -0x1, 0x1), this.leftStick.y = this.clamp(this.leftStick.y, -0x1, 0x1), this.rightStick.x = this.clamp(this.rightStick.x, -0x1, 0x1), this.rightStick.y = this.clamp(this.rightStick.y, -0x1, 0x1));
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.gamepad').requires('plugins.io.gamepad-input').defines(function () {
  Gamepad = ig.Class.extend({
    'bindings': {
      'padJump': [ig.PADKEY.BUTTON_0]
    },
    'init': function () {
      ig.gamepadInput.start();
      for (var _0xcf8b02 in this.bindings) for (var _0x941c4d = 0x0; _0x941c4d < this.bindings[_0xcf8b02].length; _0x941c4d++) ig.gamepadInput.bind(this.bindings[_0xcf8b02][_0x941c4d], _0xcf8b02);
    },
    'press': function () {},
    'held': function () {},
    'release': function () {}
  });
}), ig.baked = !0x0, ig.module('plugins.io.multitouch').defines(function () {
  Multitouch = ig.Class.extend({
    'init': function () {
      ig.multitouchInput.start();
    },
    'getTouchesPos': function () {
      if (ig.ua.mobile) {
        if (0x0 < ig.multitouchInput.touches.length) {
          for (var _0xbe1c22 = [], _0x3ef6d2 = 0x0; _0x3ef6d2 < ig.multitouchInput.touches.length; _0x3ef6d2++) {
            var _0x1b7af7 = ig.multitouchInput.touches[_0x3ef6d2];
            _0xbe1c22.push({
              'x': _0x1b7af7.x,
              'y': _0x1b7af7.y
            });
          }
          return _0xbe1c22;
        }
        return null;
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.multitouch-input').defines(function () {
  ig.MultitouchInput = ig.Class.extend({
    'isStart': !0x1,
    'touches': [],
    'multitouchCapable': !0x1,
    'lastEventUp': null,
    'start': function () {
      this.isStart || (this.isStart = !0x0, navigator.maxTouchPoints && 0x1 < navigator.maxTouchPoints && (this.multitouchCapable = !0x0), ig.ua.touchDevice && (window.navigator.msPointerEnabled && (ig.system.canvas.addEventListener('MSPointerDown', this.touchdown.bind(this), !0x1), ig.system.canvas.addEventListener('MSPointerUp', this.touchup.bind(this), !0x1), ig.system.canvas.addEventListener('MSPointerMove', this.touchmove.bind(this), !0x1), ig.system.canvas.style.msContentZooming = 'none', ig.system.canvas.style.msTouchAction = 'none'), ig.system.canvas.addEventListener('touchstart', this.touchdown.bind(this), !0x1), ig.system.canvas.addEventListener('touchend', this.touchup.bind(this), !0x1), ig.system.canvas.addEventListener('touchmove', this.touchmove.bind(this), !0x1)));
    },
    'touchmove': function (_0x171820) {
      if (ig.ua.touchDevice) {
        var _0x5f4ee9 = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
          _0x27c0f9 = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
          _0x5f4ee9 = ig.system.scale * (_0x5f4ee9 / ig.system.realWidth),
          _0x27c0f9 = ig.system.scale * (_0x27c0f9 / ig.system.realHeight);
        if (_0x171820.touches) {
          for (; 0x0 < this.touches.length;) this.touches.pop();
          !this.multitouchCapable && 0x1 < _0x171820.touches.length && (this.multitouchCapable = !0x0);
          var _0x3788de = {
            'left': 0x0,
            'top': 0x0
          };
          ig.system.canvas.getBoundingClientRect && (_0x3788de = ig.system.canvas.getBoundingClientRect());
          for (var _0x46ab70 = 0x0; _0x46ab70 < _0x171820.touches.length; _0x46ab70++) {
            var _0x3a5115 = _0x171820.touches[_0x46ab70];
            _0x3a5115 && this.touches.push({
              'x': (_0x3a5115.clientX - _0x3788de.left) / _0x5f4ee9,
              'y': (_0x3a5115.clientY - _0x3788de.top) / _0x27c0f9
            });
          }
        } else this.windowMove(_0x171820);
      }
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x357106) {}
    },
    'touchdown': function (_0x11131d) {
      var _0x478d96 = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
        _0x22c7de = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
        _0x478d96 = ig.system.scale * (_0x478d96 / ig.system.realWidth),
        _0x22c7de = ig.system.scale * (_0x22c7de / ig.system.realHeight);
      if (window.navigator.msPointerEnabled) this.windowKeyDown(_0x11131d);else {
        if (ig.ua.touchDevice && _0x11131d.touches) {
          for (; 0x0 < this.touches.length;) this.touches.pop();
          !this.multitouchCapable && 0x1 < _0x11131d.touches.length && (this.multitouchCapable = !0x0);
          var _0x3cb421 = {
            'left': 0x0,
            'top': 0x0
          };
          ig.system.canvas.getBoundingClientRect && (_0x3cb421 = ig.system.canvas.getBoundingClientRect());
          for (var _0x5b25db = 0x0; _0x5b25db < _0x11131d.touches.length; _0x5b25db++) {
            var _0x1bdace = _0x11131d.touches[_0x5b25db];
            _0x1bdace && this.touches.push({
              'x': (_0x1bdace.clientX - _0x3cb421.left) / _0x478d96,
              'y': (_0x1bdace.clientY - _0x3cb421.top) / _0x22c7de
            });
          }
        }
      }
    },
    'touchup': function (_0x3d243a) {
      var _0x2ba6ae = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
      parseInt(ig.system.canvas.offsetHeight), _0x2ba6ae = ig.system.scale * (_0x2ba6ae / ig.system.realWidth);
      if (window.navigator.msPointerEnabled) this.windowKeyUp(_0x3d243a);else {
        this.lastEventUp = _0x3d243a;
        var _0x56b5f6 = {
          'left': 0x0,
          'top': 0x0
        };
        ig.system.canvas.getBoundingClientRect && (_0x56b5f6 = ig.system.canvas.getBoundingClientRect());
        if (ig.ua.touchDevice) {
          _0x3d243a = (_0x3d243a.changedTouches[0x0].clientX - _0x56b5f6.left) / _0x2ba6ae;
          for (_0x2ba6ae = 0x0; _0x2ba6ae < this.touches.length; _0x2ba6ae++) this.touches[_0x2ba6ae].x >= _0x3d243a - 0x28 && this.touches[_0x2ba6ae].x <= _0x3d243a + 0x28 && this.touches.splice(_0x2ba6ae, 0x1);
        }
      }
      if (ig.visibilityHandler) ig.visibilityHandler.onChange('focus');
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x3588ff) {}
    },
    'windowKeyDown': function (_0xfdf99d) {
      var _0x31fe31 = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
        _0x3c856f = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
        _0x31fe31 = ig.system.scale * (_0x31fe31 / ig.system.realWidth),
        _0x3c856f = ig.system.scale * (_0x3c856f / ig.system.realHeight);
      if (window.navigator.msPointerEnabled) {
        var _0x5d360a = {
          'left': 0x0,
          'top': 0x0
        };
        ig.system.canvas.getBoundingClientRect && (_0x5d360a = ig.system.canvas.getBoundingClientRect()), _0xfdf99d = _0xfdf99d.changedTouches ? _0xfdf99d.changedTouches : [_0xfdf99d];
        for (var _0xb93ce8 = 0x0; _0xb93ce8 < _0xfdf99d.length; ++_0xb93ce8) {
          for (var _0x2fdc5c = _0xfdf99d[_0xb93ce8], _0x1f59ac = 'undefined' != typeof _0x2fdc5c.identifier ? _0x2fdc5c.identifier : 'undefined' != typeof _0x2fdc5c.pointerId ? _0x2fdc5c.pointerId : 0x1, _0x3a6761 = (_0x2fdc5c.clientX - _0x5d360a.left) / _0x31fe31, _0x2fdc5c = (_0x2fdc5c.clientY - _0x5d360a.top) / _0x3c856f, _0x37a950 = 0x0; _0x37a950 < this.touches.length; ++_0x37a950) this.touches[_0x37a950].identifier == _0x1f59ac && this.touches.splice(_0x37a950, 0x1);
          this.touches.push({
            'x': _0x3a6761,
            'y': _0x2fdc5c,
            'identifier': _0x1f59ac
          });
        }
        for (_0x31fe31 = 0x0; _0x31fe31 < this.touches.length; _0x31fe31++);
      }
    },
    'windowKeyUp': function (_0x69dcc0) {
      _0x69dcc0 = 'undefined' != typeof _0x69dcc0.identifier ? _0x69dcc0.identifier : 'undefined' != typeof _0x69dcc0.pointerId ? _0x69dcc0.pointerId : 0x1;
      for (var _0x32c7a6 = 0x0; _0x32c7a6 < this.touches.length; ++_0x32c7a6) this.touches[_0x32c7a6].identifier == _0x69dcc0 && this.touches.splice(_0x32c7a6, 0x1);
      for (; 0x0 < this.touches.length;) this.touches.pop();
      if (ig.visibilityHandler) ig.visibilityHandler.onChange('focus');
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x3ea683) {}
    },
    'windowMove': function (_0x4a4a46) {
      var _0x59c2a1 = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
        _0x49323e = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
        _0x59c2a1 = ig.system.scale * (_0x59c2a1 / ig.system.realWidth),
        _0x49323e = ig.system.scale * (_0x49323e / ig.system.realHeight),
        _0x13635b = {
          'left': 0x0,
          'top': 0x0
        };
      ig.system.canvas.getBoundingClientRect && (_0x13635b = ig.system.canvas.getBoundingClientRect());
      if (window.navigator.msPointerEnabled) {
        for (var _0x548b41 = 'undefined' != typeof _0x4a4a46.identifier ? _0x4a4a46.identifier : 'undefined' != typeof _0x4a4a46.pointerId ? _0x4a4a46.pointerId : 0x1, _0x27fe8e = 0x0; _0x27fe8e < this.touches.length; ++_0x27fe8e) if (this.touches[_0x27fe8e].identifier == _0x548b41) {
          var _0xa87463 = (_0x4a4a46.clientY - _0x13635b.top) / _0x49323e;
          this.touches[_0x27fe8e].x = (_0x4a4a46.clientX - _0x13635b.left) / _0x59c2a1, this.touches[_0x27fe8e].y = _0xa87463;
        }
      }
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x451b9d) {}
    },
    'clear': function () {
      for (var _0x5c221f = 0x0; _0x5c221f < this.released.length; ++_0x5c221f) this.released[_0x5c221f] && (this.released.splice(_0x5c221f, 0x1), _0x5c221f--);
    },
    'pollMultitouch': function (_0x11e9f2) {
      !this.multitouchCapable && 0x1 < _0x11e9f2 && (this.multitouchCapable = !0x0);
    },
    'spliceFromArray': function (_0x1074f2, _0xe7571a) {
      for (var _0x5dae26 = 0x0; _0x5dae26 < _0xe7571a.length; _0x5dae26++) for (var _0x4bf104 = 0x0; _0x4bf104 < _0x1074f2.length; _0x4bf104++) _0x1074f2[_0x4bf104].identifier === _0xe7571a[_0x5dae26].identifier && (_0x1074f2.splice(_0x4bf104, 0x1), _0x4bf104--);
    },
    'updateSizeProperties': function () {
      var _0x57d28e = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
        _0x172637 = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight;
      this.scaleX = ig.system.scale * (_0x57d28e / ig.system.realWidth), this.scaleY = ig.system.scale * (_0x172637 / ig.system.realHeight);
    },
    'upgrade': function (_0xe577b5, _0x5ed4e1, _0x303ea8) {
      var _0x933964 = {
        'left': 0x0,
        'top': 0x0
      };
      ig.system.canvas.getBoundingClientRect && (_0x933964 = ig.system.canvas.getBoundingClientRect());
      for (var _0xd2b65 = (_0x303ea8.clientX - _0x933964.left) / this.scaleX, _0x933964 = (_0x303ea8.clientY - _0x933964.top) / this.scaleY, _0x4d3ac0 = 0x0; _0x4d3ac0 < _0xe577b5.length; _0x4d3ac0++) if (void 0x0 !== typeof _0xe577b5[_0x4d3ac0].identifier && void 0x0 !== typeof _0x303ea8.identifier && _0x303ea8.identifier === _0xe577b5[_0x4d3ac0].identifier) {
        _0xe577b5.splice(_0x4d3ac0, 0x1), _0x5ed4e1.push({
          'identifier': _0x303ea8.identifier,
          'x': _0xd2b65,
          'y': _0x933964
        });
        break;
      }
    },
    'updateArray': function (_0x503c92, _0x359cd0) {
      var _0x31d5e1 = {
        'left': 0x0,
        'top': 0x0
      };
      ig.system.canvas.getBoundingClientRect && (_0x31d5e1 = ig.system.canvas.getBoundingClientRect());
      for (var _0x3f6bca = (_0x359cd0.clientX - _0x31d5e1.left) / this.scaleX, _0x31d5e1 = (_0x359cd0.clientY - _0x31d5e1.top) / this.scaleY, _0x3d06ba = 0x0; _0x3d06ba < _0x503c92.length; _0x3d06ba++) if (void 0x0 !== typeof _0x503c92[_0x3d06ba].identifier && void 0x0 !== typeof _0x359cd0.identifier && _0x359cd0.identifier === _0x503c92[_0x3d06ba].identifier) {
        _0x503c92[_0x3d06ba].x = _0x3f6bca, _0x503c92[_0x3d06ba].y = _0x31d5e1;
        break;
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.fake-storage').requires('impact.game').defines(function () {
  ig.FakeStorage = ig.Class.extend({
    'tempData': {},
    'init': function () {
      ig.FakeStorage.instance = this;
    },
    'initUnset': function (_0x4e5871, _0x570a9c) {
      null === this.get(_0x4e5871) && this.set(_0x4e5871, _0x570a9c);
    },
    'set': function (_0x1ed87e, _0x55ab0f) {
      this.tempData[_0x1ed87e] = JSON.stringify(_0x55ab0f);
    },
    'setHighest': function (_0x503eb8, _0xed9a17) {
      _0xed9a17 > this.getFloat(_0x503eb8) && this.set(_0x503eb8, _0xed9a17);
    },
    'get': function (_0x545922) {
      return 'undefined' == typeof this.tempData[_0x545922] ? null : JSON.parse(this.tempData[_0x545922]);
    },
    'getInt': function (_0x40fc41) {
      return ~~this.get(_0x40fc41);
    },
    'getFloat': function (_0x450b01) {
      return parseFloat(this.get(_0x450b01));
    },
    'getBool': function (_0x2932ba) {
      return !!this.get(_0x2932ba);
    },
    'isSet': function (_0x58e044) {
      return null !== this.get(_0x58e044);
    },
    'remove': function (_0x337624) {
      delete this.tempData[_0x337624];
    },
    'clear': function () {
      this.tempData = {};
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.io-manager').requires('plugins.io.storage', 'plugins.io.mouse', 'plugins.io.keyboard', 'plugins.io.gamepad', 'plugins.io.multitouch', 'plugins.io.multitouch-input', 'plugins.io.gamepad-input', 'plugins.io.fake-storage').defines(function () {
  IoManager = ig.Class.extend({
    'version': '1.0.0',
    'storage': null,
    'localStorageSupport': !0x1,
    'mouse': null,
    'keyboard': null,
    'multitouch': null,
    'gamepad': null,
    'init': function () {
      ig.multitouchInput = new ig.MultitouchInput(), ig.gamepadInput = new ig.GamepadInput(), this.unbindAll(), this.initStorage(), this.initMouse(), this.initKeyboard();
    },
    'unbindAll': function () {
      ig.input.unbindAll(), ig.gamepadInput.unbindAll();
    },
    'initStorage': function () {
      try {
        window.localStorage.setItem('test', 'test'), window.localStorage.removeItem('test'), this.storage = new ig.Storage();
      } catch (_0x57e32d) {
        console.log("using fake storage"), this.storage = new ig.FakeStorage();
      }
    },
    'initMouse': function () {
      this.mouse = new Mouse();
    },
    'initKeyboard': function () {
      this.keyboard = new Keyboard();
    },
    'initMultitouch': function () {
      this.multitouch = new Multitouch();
    },
    'initGamepad': function () {
      this.gamepad = new Gamepad();
    },
    'press': function (_0x283789) {
      return ig.input.pressed(_0x283789) || this.gamepad && this.gamepad.press(_0x283789) ? !0x0 : !0x1;
    },
    'held': function (_0x336857) {
      return ig.input.state(_0x336857) || this.gamepad && this.gamepad.state(_0x336857) ? !0x0 : !0x1;
    },
    'release': function (_0x156566) {
      return ig.input.released(_0x156566) || this.gamepad && this.gamepad.released(_0x156566) ? !0x0 : !0x1;
    },
    'getClickPos': function () {
      return this.mouse.getPos();
    },
    'getLastClickPos': function () {
      return this.mouse.getLast();
    },
    'getTouchesPos': function () {
      return this.multitouch.getTouchesPos();
    },
    'checkOverlap': function (_0x44c84d, _0x2b40d3, _0x5054ac, _0x188b34, _0x337253) {
      return _0x44c84d.x > _0x2b40d3 + _0x188b34 || _0x44c84d.x < _0x2b40d3 || _0x44c84d.y > _0x5054ac + _0x337253 || _0x44c84d.y < _0x5054ac ? !0x1 : !0x0;
    },
    'clear': function () {
      ig.multitouchInput.clear();
    },
    '_supportsLocalStorage': function () {
      try {
        return localStorage.setItem('test', 'test'), localStorage.removeItem('test'), this.localStorageSupport = 'localStorage' in window && null !== window.localStorage;
      } catch (_0xd2104c) {
        return this.localStorageSupport;
      }
    },
    'storageIsSet': function (_0x5d900b) {
      return 'function' === typeof this.storage.isSet ? this.storage.isSet(_0x5d900b) : null;
    },
    'storageGet': function (_0x227e16) {
      return 'function' === typeof this.storage.get ? this.storage.get(_0x227e16) : null;
    },
    'storageSet': function (_0x4edd2f, _0xab011d) {
      return 'function' === typeof this.storage.set ? this.storage.set(_0x4edd2f, _0xab011d) : null;
    },
    'assert': function (_0x679a70, _0x6c53cc, _0x63038c) {
      if (_0x6c53cc !== _0x63038c) throw 'actualValue:' + _0x6c53cc + " not equal to testValue:" + _0x63038c + " at " + _0x679a70;
    }
  });
}), ig.baked = !0x0, ig.module('plugins.io.storage-manager').requires('impact.game', 'plugins.io.io-manager').defines(function () {
  ig.Game.prototype.name = 'MJS-Game', ig.Game.prototype.version = '1.0.0', ig.Game.prototype.sessionData = {}, ig.Game.prototype.initData = function () {
    return this.sessionData = {
      'sound': 0.5,
      'music': 0.5,
      'level': 0x1,
      'score': 0x0
    };
  }, ig.Game.prototype.setupStorageManager = function () {
    'undefined' === typeof this.name ? console.error("Cannot found Game Name, Storage Manager Cancelled.") : 'undefined' === typeof this.version ? console.error("Cannot found Game Version, Storage Manager Cancelled.") : (this.io || (this.io = new IoManager(), console.log("IO Manager doesn't existed. Initialize...")), console.log("Plug in Storage Manager"), this.storage = this.io.storage, this.storageName = this.name + '-v' + this.version, this.loadAll());
  }, ig.Game.prototype.loadAll = function () {
    var _0x1e93ce = this.storage.get(this.storageName);
    if (null === _0x1e93ce || 'undefined' === typeof _0x1e93ce) _0x1e93ce = this.initData();
    for (var _0xc472bf in _0x1e93ce) this.sessionData[_0xc472bf] = _0x1e93ce[_0xc472bf];
    this.storage.set(this.storageName, _0x1e93ce);
  }, ig.Game.prototype.saveAll = function () {
    var _0x25df12 = this.storage.get(this.storageName),
      _0x2c77cd;
    for (_0x2c77cd in _0x25df12) _0x25df12[_0x2c77cd] = this.sessionData[_0x2c77cd];
    this.storage.set(this.storageName, _0x25df12);
  }, ig.Game.prototype.load = function (_0x3f84a1) {
    return this.storage.get(this.storageName)[_0x3f84a1];
  }, ig.Game.prototype.save = function (_0x13e87d, _0x14b0ab) {
    var _0x2c3aa5 = this.storage.get(this.storageName);
    _0x2c3aa5[_0x13e87d] = _0x14b0ab, this.storage.set(this.storageName, _0x2c3aa5);
  };
}), ig.baked = !0x0, ig.module('plugins.responsive.responsive-utils').requires('impact.system').defines(function () {
  ig.responsive = {
    'width': 0x0,
    'height': 0x0,
    'halfWidth': 0x0,
    'halfHeight': 0x0,
    'originalWidth': 0x0,
    'originalHeight': 0x0,
    'fillScale': 0x1,
    'scaleX': 0x1,
    'scaleY': 0x1,
    'toAnchor': function (_0x151a8a, _0x274b93, _0xd7ccb) {
      switch (_0xd7ccb) {
        case 'top-left':
        case 'left-top':
          return this.toAnchorTopLeft(_0x151a8a, _0x274b93);
        case 'top-center':
        case 'center-top':
        case 'top':
          return this.toAnchorTopCenter(_0x151a8a, _0x274b93);
        case 'top-right':
        case 'right-top':
          return this.toAnchorTopRight(_0x151a8a, _0x274b93);
        case 'left-middle':
        case 'middle-left':
        case 'left':
          return this.toAnchorLeftMiddle(_0x151a8a, _0x274b93);
        case 'center-middle':
        case 'middle-center':
        case 'middle':
        case 'center':
          return this.toAnchorCenterMiddle(_0x151a8a, _0x274b93);
        case 'right-middle':
        case 'middle-right':
        case 'right':
          return this.toAnchorRightMiddle(_0x151a8a, _0x274b93);
        case 'bottom-left':
        case 'left-bottom':
          return this.toAnchorBottomLeft(_0x151a8a, _0x274b93);
        case 'bottom-center':
        case 'center-bottom':
        case 'bottom':
          return this.toAnchorBottomCenter(_0x151a8a, _0x274b93);
        case 'bottom-right':
        case 'right-bottom':
          return this.toAnchorBottomRight(_0x151a8a, _0x274b93);
        default:
          return this.toAnchorDefault(_0x151a8a, _0x274b93);
      }
    },
    'toAnchorDefault': function (_0x2934b5, _0x80c9ea) {
      return {
        'x': _0x2934b5 + (this.width - this.originalWidth) / 0x2,
        'y': _0x80c9ea + (this.height - this.originalHeight) / 0x2
      };
    },
    'toAnchorCenterMiddle': function (_0x56f858, _0x4a4e8b) {
      return {
        'x': _0x56f858 + this.halfWidth,
        'y': _0x4a4e8b + this.halfHeight
      };
    },
    'toAnchorLeftMiddle': function (_0x120df7, _0x4fc582) {
      return {
        'x': _0x120df7,
        'y': _0x4fc582 + this.halfHeight
      };
    },
    'toAnchorTopCenter': function (_0x5180e0, _0x25ca7c) {
      return {
        'x': _0x5180e0 + this.halfWidth,
        'y': _0x25ca7c
      };
    },
    'toAnchorRightMiddle': function (_0x21bbe6, _0x28dcb4) {
      return {
        'x': _0x21bbe6 + this.width,
        'y': _0x28dcb4 + this.halfHeight
      };
    },
    'toAnchorBottomCenter': function (_0x4acc76, _0x459a44) {
      return {
        'x': _0x4acc76 + this.halfWidth,
        'y': _0x459a44 + this.height
      };
    },
    'toAnchorTopLeft': function (_0x47dc48, _0x11b5df) {
      return {
        'x': _0x47dc48,
        'y': _0x11b5df
      };
    },
    'toAnchorBottomLeft': function (_0x4401f0, _0x4f68dd) {
      return {
        'x': _0x4401f0,
        'y': _0x4f68dd + this.height
      };
    },
    'toAnchorTopRight': function (_0x18945b, _0x400179) {
      return {
        'x': _0x18945b + this.width,
        'y': _0x400179
      };
    },
    'toAnchorBottomRight': function (_0x37d52b, _0x468983) {
      return {
        'x': _0x37d52b + this.width,
        'y': _0x468983 + this.height
      };
    },
    'fromPos': function () {},
    'fromPosDefault': function () {},
    'fromPosCenterMiddle': function () {},
    'fromPosLeftMiddle': function () {},
    'fromPosTopCenter': function () {},
    'fromPosRightMiddle': function () {},
    'fromPosBottomCenter': function () {},
    'fromPosTopLeft': function () {},
    'fromPosBottomLeft': function () {},
    'fromPosTopRight': function () {},
    'fromPosBottomRight': function () {},
    'drawScaledImage': function (_0x2996a9, _0x1d9b88, _0xba1cf7, _0x37a095, _0x294420, _0x23d4a0, _0x309b52) {
      _0x23d4a0 || (_0x23d4a0 = 0x0), _0x309b52 || (_0x309b52 = 0x0);
      var _0x1ddbc8 = ig.system.context;
      _0x1ddbc8.save(), _0x1ddbc8.translate(_0x1d9b88, _0xba1cf7), (0x1 != _0x37a095 || 0x1 != _0x294420) && _0x1ddbc8.scale(_0x37a095, _0x294420), _0x2996a9.draw(-_0x2996a9.width * _0x23d4a0, -_0x2996a9.height * _0x309b52), _0x1ddbc8.restore();
    }
  };
}), ig.baked = !0x0, ig.module('plugins.responsive.responsive-plugin').requires('impact.system', 'impact.entity', 'plugins.handlers.size-handler', 'plugins.responsive.responsive-utils').defines(function () {
  console.log("Responsive Plugin 1.4"), ig.SizeHandler.inject({
    'resize': function () {
      this.parent();
    },
    'sizeCalcs': function () {
      this.originalResolution || (this.originalResolution = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), ig.responsive.originalWidth = this.desktop.actualResolution.x, ig.responsive.originalHeight = this.desktop.actualResolution.y);
      var _0x3434d2 = window.innerWidth,
        _0x58f288 = window.innerHeight,
        _0x4d364f = _0x3434d2 / _0x58f288,
        _0x1d50f4 = this.originalResolution.x / this.originalResolution.y,
        _0x106e2e = 0x0,
        _0x5c180f = 0x0;
      this.windowSize = new Vector2(_0x3434d2, _0x58f288), _0x4d364f < _0x1d50f4 ? (_0x106e2e = this.originalResolution.x, _0x5c180f = _0x106e2e / _0x4d364f, ig.responsive.scaleX = 0x1, ig.responsive.scaleY = _0x5c180f / this.originalResolution.y) : (_0x5c180f = this.originalResolution.y, _0x106e2e = _0x5c180f * _0x4d364f, ig.responsive.scaleX = _0x106e2e / this.originalResolution.x, ig.responsive.scaleY = 0x1), this.scaleRatioMultiplier = new Vector2(_0x3434d2 / _0x106e2e, _0x58f288 / _0x5c180f), this.desktop.actualResolution = new Vector2(_0x106e2e, _0x5c180f), this.mobile.actualResolution = new Vector2(_0x106e2e, _0x5c180f), this.desktop.actualSize = new Vector2(_0x3434d2, _0x58f288), this.mobile.actualSize = new Vector2(_0x3434d2, _0x58f288), ig.responsive.width = _0x106e2e, ig.responsive.height = _0x5c180f, ig.responsive.halfWidth = _0x106e2e / 0x2, ig.responsive.halfHeight = _0x5c180f / 0x2, ig.responsive.fillScale = Math.max(ig.responsive.scaleX, ig.responsive.scaleY);
    },
    'resizeLayers': function () {
      ig.system.resize(ig.sizeHandler.desktop.actualResolution.x, ig.sizeHandler.desktop.actualResolution.y);
      for (var _0x3dc2a2 = 0x0; _0x3dc2a2 < this.coreDivsToResize.length; _0x3dc2a2++) {
        var _0x36b823 = ig.domHandler.getElementById(this.coreDivsToResize[_0x3dc2a2]),
          _0x52216a = Math.floor(ig.sizeHandler.windowSize.x / 0x2 - ig.sizeHandler.desktop.actualSize.x / 0x2),
          _0x1cde99 = Math.floor(ig.sizeHandler.windowSize.y / 0x2 - ig.sizeHandler.desktop.actualSize.y / 0x2);
        0x0 > _0x52216a && (_0x52216a = 0x0), 0x0 > _0x1cde99 && (_0x1cde99 = 0x0), ig.domHandler.resizeOffset(_0x36b823, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y), _0x52216a, _0x1cde99);
      }
      for (var _0x47f76b in this.adsToResize) _0x3dc2a2 = ig.domHandler.getElementById('#' + _0x47f76b), _0x36b823 = ig.domHandler.getElementById('#' + _0x47f76b + '-Box'), _0x52216a = (window.innerWidth - this.adsToResize[_0x47f76b]['box-width']) / 0x2 + 'px', _0x1cde99 = (window.innerHeight - this.adsToResize[_0x47f76b]['box-height']) / 0x2 + 'px', _0x3dc2a2 && ig.domHandler.css(_0x3dc2a2, {
        'width': window.innerWidth,
        'height': window.innerHeight
      }), _0x36b823 && ig.domHandler.css(_0x36b823, {
        'left': _0x52216a,
        'top': _0x1cde99
      });
      _0x3dc2a2 = ig.domHandler.getElementById('#canvas'), _0x36b823 = ig.domHandler.getOffsets(_0x3dc2a2), _0x3dc2a2 = _0x36b823.left, _0x36b823 = _0x36b823.top, _0x52216a = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
      for (_0x47f76b in this.dynamicClickableEntityDivs) _0x1cde99 = ig.domHandler.getElementById('#' + _0x47f76b), ig.domHandler.css(_0x1cde99, {
        'float': 'left',
        'position': 'absolute',
        'left': Math.floor(_0x3dc2a2 + this.dynamicClickableEntityDivs[_0x47f76b].entity_pos_x * this.scaleRatioMultiplier.x) + 'px',
        'top': Math.floor(_0x36b823 + this.dynamicClickableEntityDivs[_0x47f76b].entity_pos_y * this.scaleRatioMultiplier.y) + 'px',
        'width': Math.floor(this.dynamicClickableEntityDivs[_0x47f76b].width * this.scaleRatioMultiplier.x) + 'px',
        'height': Math.floor(this.dynamicClickableEntityDivs[_0x47f76b].height * this.scaleRatioMultiplier.y) + 'px',
        'z-index': 0x3
      }), this.dynamicClickableEntityDivs[_0x47f76b]['font-size'] && ig.domHandler.css(_0x1cde99, {
        'font-size': this.dynamicClickableEntityDivs[_0x47f76b]['font-size'] * _0x52216a + 'px'
      });
      $('#ajaxbar').width(this.windowSize.x), $('#ajaxbar').height(this.windowSize.y);
    },
    'reorient': function () {
      ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize(), ('undefined' !== typeof BABYLON || window.BABYLON) && this.resizeBabylon(), ig.game && (ig.game.update(), ig.game.draw());
    },
    'resizeBabylon': function () {
      var _0x892b8b = window.innerWidth,
        _0x760839 = window.innerHeight,
        _0x16df6e = _0x892b8b / _0x760839,
        _0x29bd64 = ig.responsive.originalWidth,
        _0x43bace = ig.responsive.originalHeight,
        _0x1b5832 = _0x29bd64 / _0x43bace,
        _0x123bd5 = Math.max(_0x29bd64, _0x43bace);
      ig.ua.mobile && (_0x123bd5 = 0x280), minSize = Math.min(_0x29bd64, _0x43bace), _0x16df6e > _0x1b5832 ? (_0x760839 > _0x43bace && (_0x760839 = _0x43bace), _0x892b8b = Math.floor(window.innerWidth / window.innerHeight * _0x760839), _0x892b8b > _0x123bd5 && (_0x892b8b = _0x123bd5), _0x760839 = Math.floor(window.innerHeight / window.innerWidth * _0x892b8b)) : (_0x892b8b > _0x29bd64 && (_0x892b8b = _0x29bd64), _0x760839 = Math.floor(window.innerHeight / window.innerWidth * _0x892b8b), _0x760839 > _0x123bd5 && (_0x760839 = _0x123bd5), _0x892b8b = Math.floor(window.innerWidth / window.innerHeight * _0x760839)), _0x29bd64 = _0x16df6e = 0x1, window.innerWidth > _0x123bd5 && (_0x16df6e = window.innerWidth / _0x123bd5), window.innerHeight > _0x123bd5 && (_0x29bd64 = window.innerHeight / _0x123bd5), wgl.system.engine.setSize(_0x892b8b, _0x760839), wgl.system.engine.resize(), wgl.system.engine.setHardwareScalingLevel(Math.max(_0x16df6e, _0x29bd64)), ig.gameScene.zoomFactor = 0x1, ig.ua.mobile && minSize < _0x123bd5 && (ig.gameScene.zoomFactor = _0x123bd5 / minSize), ig.wglW = _0x892b8b, ig.wglH = _0x760839, ig.wglInnerW = window.innerWidth, ig.wglInnerH = window.innerHeight, console.log("babylon renderSize : ", wgl.system.engine.getRenderWidth(), wgl.system.engine.getRenderHeight(), "hwScalingLevel : ", wgl.system.engine.getHardwareScalingLevel());
    }
  }), ig.Entity.inject({
    'init': function (_0x1ab6d5, _0x2a904e, _0x512e71) {
      this.parent(_0x1ab6d5, _0x2a904e, _0x512e71), !this.anchorType && !_0x512e71.anchorType && (this.anchorType = 'none'), this.anchoredPositionX = _0x1ab6d5, this.anchoredPositionY = _0x2a904e;
    },
    'setAnchoredPosition': function (_0x2a1424, _0x2a44ab, _0x324bc3) {
      _0x324bc3 || (_0x324bc3 = 'default'), this.anchorType = _0x324bc3, this.anchoredPositionX = _0x2a1424, this.anchoredPositionY = _0x2a44ab;
    },
    'update': function () {
      this.parent();
      if ('' != this.anchorType && 'none' != this.anchorType) {
        var _0x4b934c = ig.responsive.toAnchor(this.anchoredPositionX, this.anchoredPositionY, this.anchorType);
        this.pos.x = _0x4b934c.x, this.pos.y = _0x4b934c.y;
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.splash-loader').requires('impact.loader', 'impact.animation', 'plugins.responsive.responsive-plugin').defines(function () {
  ig.SplashLoader = ig.Loader.extend({
    'tapToStartDivId': 'tap-to-start',
    'splashImg': new ig.Image('media/graphics/sprites/bg-wall.png'),
    'barFrame': new ig.Image('media/graphics/splash/loading/loading-bar-bg.png'),
    'imgTitle': new ig.Image('media/graphics/sprites/title.png'),
    'barFill': new ig.Image('media/graphics/splash/loading/loading-bar.png'),
    'spritesToPreload': [new ig.Image('media/graphics/sprites/bg-fire.png'), new ig.Image('media/graphics/sprites/bg-ground.png'), new ig.Image('media/graphics/sprites/bg-wall-back-door.png'), new ig.Image('media/graphics/sprites/bg-wall-back-pillar-mid1.png'), new ig.Image('media/graphics/sprites/bg-wall-back-pillar-mid2.png'), new ig.Image('media/graphics/sprites/bg-wall-back-pillar.png'), new ig.Image('media/graphics/sprites/bg-wall-back-window.png'), new ig.Image('media/graphics/sprites/bg-wall-front-pillar-mid.png'), new ig.Image('media/graphics/sprites/bg-wall-front-pillar.png'), new ig.Image('media/graphics/sprites/bg-wall.png'), new ig.Image('media/graphics/sprites/btn-attack.png'), new ig.Image('media/graphics/sprites/btn-left.png'), new ig.Image('media/graphics/sprites/button-continue.png'), new ig.Image('media/graphics/sprites/button-home.png'), new ig.Image('media/graphics/sprites/button-maximize.png'), new ig.Image('media/graphics/sprites/button-minimize.png'), new ig.Image('media/graphics/sprites/button-more-games.png'), new ig.Image('media/graphics/sprites/button-pause.png'), new ig.Image('media/graphics/sprites/button-play.png'), new ig.Image('media/graphics/sprites/button-restart.png'), new ig.Image('media/graphics/sprites/button-settings.png'), new ig.Image('media/graphics/sprites/enemy-health-bar-bg.png'), new ig.Image('media/graphics/sprites/enemy-health-bar.png'), new ig.Image('media/graphics/sprites/health-bar-bg.png'), new ig.Image('media/graphics/sprites/health-bar.png'), new ig.Image('media/graphics/sprites/hit.png'), new ig.Image('media/graphics/sprites/music-icon.png'), new ig.Image('media/graphics/sprites/popup-btn-yes.png'), new ig.Image('media/graphics/sprites/popup-gameover.png'), new ig.Image('media/graphics/sprites/popup-revive.png'), new ig.Image('media/graphics/sprites/popup-settings.png'), new ig.Image('media/graphics/sprites/score.png'), new ig.Image('media/graphics/sprites/sound-icon.png'), new ig.Image('media/graphics/sprites/title.png'), new ig.Image('media/graphics/sprites/toggle-off.png'), new ig.Image('media/graphics/sprites/toggle-on.png')],
    'customAnim': new ig.AnimationSheet('media/graphics/splash/loading/anim.png', 0x100, 0xa0),
    'init': function (_0x3d36ea, _0x3458e6) {
      this.parent(_0x3d36ea, _0x3458e6), ig.system.context.font = "72px monometric", this.setupCustomAnimation(), ig.apiHandler.run('MJSPreroll');
    },
    'end': function () {
      this._endParent = this.parent, this._drawStatus = 0x1, _SETTINGS.TapToStartAudioUnlock.Enabled ? this.tapToStartDiv(function () {
        this._endParent(), ('undefined' === typeof ig.game || null == ig.game) && ig.system.setGame(this.gameClass);
      }.bind(this)) : (this._endParent(), ('undefined' === typeof ig.game || null == ig.game) && ig.system.setGame(this.gameClass)), this.draw();
    },
    'tapToStartDiv': function (_0x2ef33a) {
      this.desktopCoverDIV = document.getElementById(this.tapToStartDivId);
      if (!this.desktopCoverDIV) {
        this.desktopCoverDIV = document.createElement('div'), this.desktopCoverDIV.id = this.tapToStartDivId, this.desktopCoverDIV.setAttribute('class', 'play'), this.desktopCoverDIV.setAttribute('style', "position: absolute; display: block; z-index: 999999; background-color: rgba(23, 32, 53, 0.7); visibility: visible; font-size: 10vmin; text-align: center; vertical-align: middle; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;"), this.desktopCoverDIV.innerHTML = "<div style='color:white;background-color: rgba(255, 255, 255, 0.3); border: 2px solid #fff; font-size:20px; border-radius: 5px; position: relative; float: left; top: 50%; left: 50%; transform: translate(-50%, -50%);'><div style='padding:20px 50px; font-family: montserrat;'>" + _STRINGS.Splash.TapToStart + '</div></div>', (document.getElementById('play').parentNode || document.getElementById('ajaxbar')).appendChild(this.desktopCoverDIV);
        try {
          'undefined' !== typeof ig.sizeHandler ? 'undefined' !== typeof ig.sizeHandler.coreDivsToResize && (ig.sizeHandler.coreDivsToResize.push('#' + this.tapToStartDivId), 'function' === typeof ig.sizeHandler.reorient && ig.sizeHandler.reorient()) : 'undefined' !== typeof coreDivsToResize && (coreDivsToResize.push(this.tapToStartDivId), 'function' === typeof sizeHandler && sizeHandler());
        } catch (_0x446ec3) {
          console.log(_0x446ec3);
        }
        this.desktopCoverDIV.addEventListener('click', function () {
          ig.soundHandler.unlockWebAudio(), this.setAttribute('style', "visibility: hidden;"), 'function' === typeof _0x2ef33a && _0x2ef33a();
        });
      }
    },
    'setupCustomAnimation': function () {
      this.animHeight = this.customAnim.height, this.animWidth = this.customAnim.width, this.customAnim = new ig.Animation(this.customAnim, 0.025, [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7]);
    },
    'animate': function () {
      ig.Timer.step(), this.customAnim.update();
    },
    'drawBG': function () {
      var _0x4ae68c = ig.responsive.toAnchor(0x0, 0x0, 'center');
      ig.responsive.drawScaledImage(this.splashImg, _0x4ae68c.x, _0x4ae68c.y, ig.responsive.fillScale, ig.responsive.fillScale, 0.5, 0.5), this.imgTitle.draw(ig.responsive.halfWidth - 262.5, ig.responsive.halfHeight - 457.5);
    },
    'drawCheck': 0x0,
    'draw': function () {
      this._drawStatus += (this.status - this._drawStatus) / 0x5, 0x1 === this.drawCheck && (ig.system.context.save(), ig.system.context.font = "48px mainfont", ig.system.context.fillText('', 0x0, 0x0), ig.system.context.font = "48px secondaryfont", ig.system.context.fillText('', 0x0, 0x0), ig.system.context.restore(), console.log("Font should be loaded before loader draw loop")), 0x2 > this.drawCheck && this.drawCheck++, ig.system.context.fillStyle = '#000', ig.system.context.fillRect(0x0, 0x0, ig.system.width, ig.system.height);
      var _0x5a1fd7 = ig.responsive.toAnchor(0x0, 0x0, 'center-middle');
      if (!(0x0 >= this.splashImg.width)) {
        this.drawBG(), this.barFrame.draw(_0x5a1fd7.x - this.barFrame.width / 0x2, _0x5a1fd7.y + 0xc8);
        var _0x5c1c61 = this.barFrame.width * this._drawStatus;
        0x0 < _0x5c1c61 && this.barFill.draw(_0x5a1fd7.x - this.barFill.width / 0x2, _0x5a1fd7.y + 0xc8 + (this.barFrame.height - this.barFill.height) / 0x2, 0x0, 0x0, _0x5c1c61, this.barFill.height), this.drawVersion();
      }
    },
    'drawVersion': function () {
      if ('undefined' !== typeof _SETTINGS.Versioning && null !== _SETTINGS.Versioning && _SETTINGS.Versioning.DrawVersion) {
        var _0x3cf295 = ig.system.context;
        fontSize = _SETTINGS.Versioning.FontSize, fontFamily = _SETTINGS.Versioning.FontFamily, fillStyle = _SETTINGS.Versioning.FillStyle, _0x3cf295.save(), _0x3cf295.textBaseline = 'bottom', _0x3cf295.textAlign = 'left', _0x3cf295.font = fontSize + " " + fontFamily || "10px Arial", _0x3cf295.fillStyle = fillStyle || '#ffffff', _0x3cf295.fillText('v' + _SETTINGS.Versioning.Version + '+build.' + _SETTINGS.Versioning.Build, 0xa, ig.system.height - 0xa), _0x3cf295.restore();
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.tween').requires('impact.entity').defines(function () {
  Array.prototype.indexOf || (Array.prototype.indexOf = function (_0x5716f2) {
    for (var _0x2f5137 = 0x0; _0x2f5137 < this.length; ++_0x2f5137) if (this[_0x2f5137] === _0x5716f2) return _0x2f5137;
    return -0x1;
  }), ig.Entity.prototype.tweens = [], ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update, ig.Entity.prototype.update = function () {
    this._preTweenUpdate();
    if (0x0 < this.tweens.length) {
      for (var _0x282bff = [], _0xdc4114 = 0x0; _0xdc4114 < this.tweens.length; _0xdc4114++) this.tweens[_0xdc4114].update(), this.tweens[_0xdc4114].complete || _0x282bff.push(this.tweens[_0xdc4114]);
      this.tweens = _0x282bff;
    }
  }, ig.Entity.prototype.tween = function (_0x272e6c, _0x3645ce, _0xa75cce) {
    return _0x272e6c = new ig.Tween(this, _0x272e6c, _0x3645ce, _0xa75cce), this.tweens.push(_0x272e6c), _0x272e6c;
  }, ig.Entity.prototype.pauseTweens = function () {
    for (var _0x21ec80 = 0x0; _0x21ec80 < this.tweens.length; _0x21ec80++) this.tweens[_0x21ec80].pause();
  }, ig.Entity.prototype.resumeTweens = function () {
    for (var _0x14cbbd = 0x0; _0x14cbbd < this.tweens.length; _0x14cbbd++) this.tweens[_0x14cbbd].resume();
  }, ig.Entity.prototype.stopTweens = function (_0x35e31b) {
    for (var _0x382757 = 0x0; _0x382757 < this.tweens.length; _0x382757++) this.tweens[_0x382757].stop(_0x35e31b);
  }, ig.Tween = function (_0x442298, _0x3127e9, _0x4063ba, _0x3228bb) {
    var _0x1ae009 = {},
      _0x510b3f = {},
      _0x479e28 = {},
      _0xe3f208 = 0x0,
      _0x3fc623 = !0x1,
      _0x2b8df2 = !0x1,
      _0x141ac2 = !0x1;
    this.duration = _0x4063ba, this.paused = this.complete = !0x1, this.easing = ig.Tween.Easing.Linear.EaseNone, this.onComplete = !0x1, this.loop = this.delay = 0x0, this.loopCount = -0x1, ig.merge(this, _0x3228bb), this.loopNum = this.loopCount, this.chain = function (_0x4637a9) {
      _0x141ac2 = _0x4637a9;
    }, this.initEnd = function (_0x2890fa, _0x401a6, _0x1aba2c) {
      if ('object' !== typeof _0x401a6[_0x2890fa]) _0x1aba2c[_0x2890fa] = _0x401a6[_0x2890fa];else {
        for (subprop in _0x401a6[_0x2890fa]) _0x1aba2c[_0x2890fa] || (_0x1aba2c[_0x2890fa] = {}), this.initEnd(subprop, _0x401a6[_0x2890fa], _0x1aba2c[_0x2890fa]);
      }
    }, this.initStart = function (_0x4183f5, _0x3c4008, _0x36b437, _0x3c37da) {
      if ('object' !== typeof _0x36b437[_0x4183f5]) 'undefined' !== typeof _0x3c4008[_0x4183f5] && (_0x3c37da[_0x4183f5] = _0x36b437[_0x4183f5]);else {
        for (subprop in _0x36b437[_0x4183f5]) _0x3c37da[_0x4183f5] || (_0x3c37da[_0x4183f5] = {}), 'undefined' !== typeof _0x3c4008[_0x4183f5] && this.initStart(subprop, _0x3c4008[_0x4183f5], _0x36b437[_0x4183f5], _0x3c37da[_0x4183f5]);
      }
    }, this.start = function () {
      this.paused = this.complete = !0x1, this.loopNum = this.loopCount, _0xe3f208 = 0x0, -0x1 == _0x442298.tweens.indexOf(this) && _0x442298.tweens.push(this), _0x2b8df2 = !0x0, _0x3fc623 = new ig.Timer();
      for (var _0x1f68f3 in _0x3127e9) this.initEnd(_0x1f68f3, _0x3127e9, _0x510b3f);
      for (_0x1f68f3 in _0x510b3f) this.initStart(_0x1f68f3, _0x510b3f, _0x442298, _0x1ae009), this.initDelta(_0x1f68f3, _0x479e28, _0x442298, _0x510b3f);
    }, this.initDelta = function (_0x3be1e9, _0x54bacb, _0x9f9296, _0x596cde) {
      if ('object' !== typeof _0x596cde[_0x3be1e9]) _0x54bacb[_0x3be1e9] = _0x596cde[_0x3be1e9] - _0x9f9296[_0x3be1e9];else {
        for (subprop in _0x596cde[_0x3be1e9]) _0x54bacb[_0x3be1e9] || (_0x54bacb[_0x3be1e9] = {}), this.initDelta(subprop, _0x54bacb[_0x3be1e9], _0x9f9296[_0x3be1e9], _0x596cde[_0x3be1e9]);
      }
    }, this.propUpdate = function (_0x5471bc, _0x92a4a7, _0x1f28ea, _0x42dbf7, _0x2b6cd1) {
      if ('object' !== typeof _0x1f28ea[_0x5471bc]) _0x92a4a7[_0x5471bc] = 'undefined' != typeof _0x1f28ea[_0x5471bc] ? _0x1f28ea[_0x5471bc] + _0x42dbf7[_0x5471bc] * _0x2b6cd1 : _0x92a4a7[_0x5471bc];else {
        for (subprop in _0x1f28ea[_0x5471bc]) this.propUpdate(subprop, _0x92a4a7[_0x5471bc], _0x1f28ea[_0x5471bc], _0x42dbf7[_0x5471bc], _0x2b6cd1);
      }
    }, this.propSet = function (_0x4ee1ec, _0x50929b, _0x445c0e) {
      if ('object' !== typeof _0x50929b[_0x4ee1ec]) _0x445c0e[_0x4ee1ec] = _0x50929b[_0x4ee1ec];else {
        for (subprop in _0x50929b[_0x4ee1ec]) _0x445c0e[_0x4ee1ec] || (_0x445c0e[_0x4ee1ec] = {}), this.propSet(subprop, _0x50929b[_0x4ee1ec], _0x445c0e[_0x4ee1ec]);
      }
    }, this.update = function () {
      if (!_0x2b8df2) return !0x1;
      if (this.delay) {
        if (_0x3fc623.delta() < this.delay) return;
        this.delay = 0x0, _0x3fc623.reset();
      }
      if (this.paused || this.complete) return !0x1;
      var _0x55485e = (_0x3fc623.delta() + _0xe3f208) / this.duration,
        _0x55485e = 0x1 < _0x55485e ? 0x1 : _0x55485e,
        _0x5ab09d = this.easing(_0x55485e);
      for (property in _0x479e28) this.propUpdate(property, _0x442298, _0x1ae009, _0x479e28, _0x5ab09d);
      if (0x1 <= _0x55485e) {
        if (0x0 == this.loopNum || !this.loop) {
          this.complete = !0x0;
          if (this.onComplete) this.onComplete();
          return _0x141ac2 && _0x141ac2.start(), !0x1;
        }
        if (this.loop == ig.Tween.Loop.Revert) {
          for (property in _0x1ae009) this.propSet(property, _0x1ae009, _0x442298);
          _0xe3f208 = 0x0, _0x3fc623.reset(), -0x1 != this.loopNum && this.loopNum--;
        } else {
          if (this.loop == ig.Tween.Loop.Reverse) {
            _0x55485e = {}, _0x5ab09d = {}, ig.merge(_0x55485e, _0x510b3f), ig.merge(_0x5ab09d, _0x1ae009), ig.merge(_0x1ae009, _0x55485e), ig.merge(_0x510b3f, _0x5ab09d);
            for (property in _0x510b3f) this.initDelta(property, _0x479e28, _0x442298, _0x510b3f);
            _0xe3f208 = 0x0, _0x3fc623.reset(), -0x1 != this.loopNum && this.loopNum--;
          }
        }
      }
    }, this.pause = function () {
      this.paused = !0x0, _0x3fc623 && _0x3fc623.delta && (_0xe3f208 += _0x3fc623.delta());
    }, this.resume = function () {
      this.paused = !0x1, _0x3fc623 && _0x3fc623.reset && _0x3fc623.reset();
    }, this.stop = function (_0x197a4f) {
      _0x197a4f && (this.loop = this.complete = this.paused = !0x1, _0xe3f208 += _0x4063ba, this.update()), this.complete = !0x0;
    };
  }, ig.Tween.Loop = {
    'Revert': 0x1,
    'Reverse': 0x2
  }, ig.Tween.Easing = {
    'Linear': {},
    'Quadratic': {},
    'Cubic': {},
    'Quartic': {},
    'Quintic': {},
    'Sinusoidal': {},
    'Exponential': {},
    'Circular': {},
    'Elastic': {},
    'Back': {},
    'Bounce': {}
  }, ig.Tween.Easing.Linear.EaseNone = function (_0x358363) {
    return _0x358363;
  }, ig.Tween.Easing.Quadratic.EaseIn = function (_0x3aa972) {
    return _0x3aa972 * _0x3aa972;
  }, ig.Tween.Easing.Quadratic.EaseOut = function (_0x2bd367) {
    return -_0x2bd367 * (_0x2bd367 - 0x2);
  }, ig.Tween.Easing.Quadratic.EaseInOut = function (_0x5af231) {
    return 0x1 > (_0x5af231 *= 0x2) ? 0.5 * _0x5af231 * _0x5af231 : -0.5 * (--_0x5af231 * (_0x5af231 - 0x2) - 0x1);
  }, ig.Tween.Easing.Cubic.EaseIn = function (_0x2ad986) {
    return _0x2ad986 * _0x2ad986 * _0x2ad986;
  }, ig.Tween.Easing.Cubic.EaseOut = function (_0x6c1af9) {
    return --_0x6c1af9 * _0x6c1af9 * _0x6c1af9 + 0x1;
  }, ig.Tween.Easing.Cubic.EaseInOut = function (_0xe78002) {
    return 0x1 > (_0xe78002 *= 0x2) ? 0.5 * _0xe78002 * _0xe78002 * _0xe78002 : 0.5 * ((_0xe78002 -= 0x2) * _0xe78002 * _0xe78002 + 0x2);
  }, ig.Tween.Easing.Quartic.EaseIn = function (_0x382a04) {
    return _0x382a04 * _0x382a04 * _0x382a04 * _0x382a04;
  }, ig.Tween.Easing.Quartic.EaseOut = function (_0x1eda23) {
    return -(--_0x1eda23 * _0x1eda23 * _0x1eda23 * _0x1eda23 - 0x1);
  }, ig.Tween.Easing.Quartic.EaseInOut = function (_0x406678) {
    return 0x1 > (_0x406678 *= 0x2) ? 0.5 * _0x406678 * _0x406678 * _0x406678 * _0x406678 : -0.5 * ((_0x406678 -= 0x2) * _0x406678 * _0x406678 * _0x406678 - 0x2);
  }, ig.Tween.Easing.Quintic.EaseIn = function (_0x3d2e27) {
    return _0x3d2e27 * _0x3d2e27 * _0x3d2e27 * _0x3d2e27 * _0x3d2e27;
  }, ig.Tween.Easing.Quintic.EaseOut = function (_0x567d0d) {
    return (_0x567d0d -= 0x1) * _0x567d0d * _0x567d0d * _0x567d0d * _0x567d0d + 0x1;
  }, ig.Tween.Easing.Quintic.EaseInOut = function (_0x586f9b) {
    return 0x1 > (_0x586f9b *= 0x2) ? 0.5 * _0x586f9b * _0x586f9b * _0x586f9b * _0x586f9b * _0x586f9b : 0.5 * ((_0x586f9b -= 0x2) * _0x586f9b * _0x586f9b * _0x586f9b * _0x586f9b + 0x2);
  }, ig.Tween.Easing.Sinusoidal.EaseIn = function (_0x4da299) {
    return -Math.cos(_0x4da299 * Math.PI / 0x2) + 0x1;
  }, ig.Tween.Easing.Sinusoidal.EaseOut = function (_0x55b298) {
    return Math.sin(_0x55b298 * Math.PI / 0x2);
  }, ig.Tween.Easing.Sinusoidal.EaseInOut = function (_0x4c967b) {
    return -0.5 * (Math.cos(Math.PI * _0x4c967b) - 0x1);
  }, ig.Tween.Easing.Exponential.EaseIn = function (_0x6bb7ff) {
    return 0x0 == _0x6bb7ff ? 0x0 : Math.pow(0x2, 0xa * (_0x6bb7ff - 0x1));
  }, ig.Tween.Easing.Exponential.EaseOut = function (_0x198905) {
    return 0x1 == _0x198905 ? 0x1 : -Math.pow(0x2, -0xa * _0x198905) + 0x1;
  }, ig.Tween.Easing.Exponential.EaseInOut = function (_0x38afac) {
    return 0x0 == _0x38afac ? 0x0 : 0x1 == _0x38afac ? 0x1 : 0x1 > (_0x38afac *= 0x2) ? 0.5 * Math.pow(0x2, 0xa * (_0x38afac - 0x1)) : 0.5 * (-Math.pow(0x2, -0xa * (_0x38afac - 0x1)) + 0x2);
  }, ig.Tween.Easing.Circular.EaseIn = function (_0x5a61e7) {
    return -(Math.sqrt(0x1 - _0x5a61e7 * _0x5a61e7) - 0x1);
  }, ig.Tween.Easing.Circular.EaseOut = function (_0x4cbf55) {
    return Math.sqrt(0x1 - --_0x4cbf55 * _0x4cbf55);
  }, ig.Tween.Easing.Circular.EaseInOut = function (_0x332b71) {
    return 0x1 > (_0x332b71 /= 0.5) ? -0.5 * (Math.sqrt(0x1 - _0x332b71 * _0x332b71) - 0x1) : 0.5 * (Math.sqrt(0x1 - (_0x332b71 -= 0x2) * _0x332b71) + 0x1);
  }, ig.Tween.Easing.Elastic.EaseIn = function (_0x484ced) {
    var _0x467aef,
      _0x34139f = 0.1,
      _0x2cd83a = 0.4;
    if (0x0 == _0x484ced) return 0x0;
    if (0x1 == _0x484ced) return 0x1;
    return _0x2cd83a || (_0x2cd83a = 0.3), !_0x34139f || 0x1 > _0x34139f ? (_0x34139f = 0x1, _0x467aef = _0x2cd83a / 0x4) : _0x467aef = _0x2cd83a / (0x2 * Math.PI) * Math.asin(0x1 / _0x34139f), -(_0x34139f * Math.pow(0x2, 0xa * (_0x484ced -= 0x1)) * Math.sin(0x2 * (_0x484ced - _0x467aef) * Math.PI / _0x2cd83a));
  }, ig.Tween.Easing.Elastic.EaseOut = function (_0x534238) {
    var _0x41810c,
      _0x4fce10 = 0.1,
      _0x465e49 = 0.4;
    if (0x0 == _0x534238) return 0x0;
    if (0x1 == _0x534238) return 0x1;
    return _0x465e49 || (_0x465e49 = 0.3), !_0x4fce10 || 0x1 > _0x4fce10 ? (_0x4fce10 = 0x1, _0x41810c = _0x465e49 / 0x4) : _0x41810c = _0x465e49 / (0x2 * Math.PI) * Math.asin(0x1 / _0x4fce10), _0x4fce10 * Math.pow(0x2, -0xa * _0x534238) * Math.sin(0x2 * (_0x534238 - _0x41810c) * Math.PI / _0x465e49) + 0x1;
  }, ig.Tween.Easing.Elastic.EaseInOut = function (_0x4aa767) {
    var _0x156559,
      _0x33b0ff = 0.1,
      _0x498949 = 0.4;
    if (0x0 == _0x4aa767) return 0x0;
    if (0x1 == _0x4aa767) return 0x1;
    return _0x498949 || (_0x498949 = 0.3), !_0x33b0ff || 0x1 > _0x33b0ff ? (_0x33b0ff = 0x1, _0x156559 = _0x498949 / 0x4) : _0x156559 = _0x498949 / (0x2 * Math.PI) * Math.asin(0x1 / _0x33b0ff), 0x1 > (_0x4aa767 *= 0x2) ? -0.5 * _0x33b0ff * Math.pow(0x2, 0xa * (_0x4aa767 -= 0x1)) * Math.sin(0x2 * (_0x4aa767 - _0x156559) * Math.PI / _0x498949) : 0.5 * _0x33b0ff * Math.pow(0x2, -0xa * (_0x4aa767 -= 0x1)) * Math.sin(0x2 * (_0x4aa767 - _0x156559) * Math.PI / _0x498949) + 0x1;
  }, ig.Tween.Easing.Back.EaseIn = function (_0x36805e) {
    return _0x36805e * _0x36805e * (2.70158 * _0x36805e - 1.70158);
  }, ig.Tween.Easing.Back.EaseOut = function (_0x1b8d56) {
    return (_0x1b8d56 -= 0x1) * _0x1b8d56 * (2.70158 * _0x1b8d56 + 1.70158) + 0x1;
  }, ig.Tween.Easing.Back.EaseInOut = function (_0x8bcf32) {
    return 0x1 > (_0x8bcf32 *= 0x2) ? 0.5 * _0x8bcf32 * _0x8bcf32 * (3.5949095 * _0x8bcf32 - 2.5949095) : 0.5 * ((_0x8bcf32 -= 0x2) * _0x8bcf32 * (3.5949095 * _0x8bcf32 + 2.5949095) + 0x2);
  }, ig.Tween.Easing.Bounce.EaseIn = function (_0x1205ac) {
    return 0x1 - ig.Tween.Easing.Bounce.EaseOut(0x1 - _0x1205ac);
  }, ig.Tween.Easing.Bounce.EaseOut = function (_0x49bb3f) {
    return (_0x49bb3f /= 0x1) < 0x1 / 2.75 ? 7.5625 * _0x49bb3f * _0x49bb3f : _0x49bb3f < 0x2 / 2.75 ? 7.5625 * (_0x49bb3f -= 1.5 / 2.75) * _0x49bb3f + 0.75 : _0x49bb3f < 2.5 / 2.75 ? 7.5625 * (_0x49bb3f -= 2.25 / 2.75) * _0x49bb3f + 0.9375 : 7.5625 * (_0x49bb3f -= 2.625 / 2.75) * _0x49bb3f + 0.984375;
  }, ig.Tween.Easing.Bounce.EaseInOut = function (_0xbdf4b9) {
    return 0.5 > _0xbdf4b9 ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(0x2 * _0xbdf4b9) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(0x2 * _0xbdf4b9 - 0x1) + 0.5;
  }, ig.Tween.Interpolation = {
    'Linear': function (_0x509660, _0x1a50ef) {
      var _0xf3bc58 = _0x509660.length - 0x1,
        _0x519498 = _0xf3bc58 * _0x1a50ef,
        _0x153eee = Math.floor(_0x519498),
        _0x280d01 = TWEEN.Interpolation.Utils.Linear;
      return 0x0 > _0x1a50ef ? _0x280d01(_0x509660[0x0], _0x509660[0x1], _0x519498) : 0x1 < _0x1a50ef ? _0x280d01(_0x509660[_0xf3bc58], _0x509660[_0xf3bc58 - 0x1], _0xf3bc58 - _0x519498) : _0x280d01(_0x509660[_0x153eee], _0x509660[_0x153eee + 0x1 > _0xf3bc58 ? _0xf3bc58 : _0x153eee + 0x1], _0x519498 - _0x153eee);
    }
  };
}), ig.baked = !0x0, ig.module('plugins.patches.entity-patch').requires('impact.entity').defines(function () {
  ig.Entity.inject({
    'handleMovementTrace': function (_0x3f3faf) {
      this.standing = !0x1, _0x3f3faf.collision.y && (0x0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0x0 < this.vel.y && (this.standing = !0x0), this.vel.y = 0x0)), _0x3f3faf.collision.x && (this.vel.x = 0x0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0x0);
      if (_0x3f3faf.collision.slope) {
        var _0xaa86dc = _0x3f3faf.collision.slope;
        if (0x0 < this.bounciness) {
          var _0x121ba0 = this.vel.x * _0xaa86dc.nx + this.vel.y * _0xaa86dc.ny;
          this.vel.x = (this.vel.x - 0x2 * _0xaa86dc.nx * _0x121ba0) * this.bounciness, this.vel.y = (this.vel.y - 0x2 * _0xaa86dc.ny * _0x121ba0) * this.bounciness;
        } else _0x121ba0 = (this.vel.x * _0xaa86dc.x + this.vel.y * _0xaa86dc.y) / (_0xaa86dc.x * _0xaa86dc.x + _0xaa86dc.y * _0xaa86dc.y), this.vel.x = _0xaa86dc.x * _0x121ba0, this.vel.y = _0xaa86dc.y * _0x121ba0, _0xaa86dc = Math.atan2(_0xaa86dc.x, _0xaa86dc.y), _0xaa86dc > this.slopeStanding.min && _0xaa86dc < this.slopeStanding.max && (this.standing = !0x0);
      }
      this.pos.x = _0x3f3faf.pos.x, this.pos.y = _0x3f3faf.pos.y;
    },
    'update': function () {
      this.parent(), null !== this.clickableLayer && 'undefined' !== typeof this.clickableLayer && null !== this.clickableLayer.update && 'function' === typeof this.clickableLayer.update && this.clickableLayer.update(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.tweens-handler').requires('impact.entity', 'plugins.tween', 'plugins.patches.entity-patch').defines(function () {
  Array.prototype.indexOf || (Array.prototype.indexOf = function (_0x1e59d8) {
    for (var _0x2f8fbc = 0x0; _0x2f8fbc < this.length; ++_0x2f8fbc) if (this[_0x2f8fbc] === _0x1e59d8) return _0x2f8fbc;
    return -0x1;
  }), ig.TweensHandler = ig.Class.extend({
    '_tweens': [],
    '_systemPausedTweens': [],
    'init': function () {},
    'getAll': function () {
      return this._tweens;
    },
    'removeAll': function () {
      this._tweens = [];
    },
    'add': function (_0x50c33f) {
      this._tweens.push(_0x50c33f);
    },
    'remove': function (_0x5bdcc0) {
      _0x5bdcc0 = this._tweens.indexOf(_0x5bdcc0), -0x1 !== _0x5bdcc0 && this._tweens.splice(_0x5bdcc0, 0x1);
    },
    'onSystemPause': function () {
      if (0x0 === this._tweens.length) return !0x1;
      for (var _0x305e4f = 0x0, _0x1cc3b7 = null; _0x305e4f < this._tweens.length;) _0x1cc3b7 = this._tweens[_0x305e4f], _0x1cc3b7._isPlaying && (this._systemPausedTweens.push(_0x1cc3b7), _0x1cc3b7.pause()), _0x305e4f++;
      return !0x0;
    },
    'onSystemResume': function () {
      if (0x0 === this._systemPausedTweens.length) return !0x1;
      for (var _0x6e7f89 = 0x0; _0x6e7f89 < this._systemPausedTweens.length;) this._systemPausedTweens[_0x6e7f89].resume(), _0x6e7f89++;
      return this._systemPausedTweens = [], !0x0;
    },
    'update': function (_0x1c001d, _0x9626fe) {
      if (0x0 === this._tweens.length) return !0x1;
      var _0x196285 = 0x0;
      for (_0x1c001d = void 0x0 !== _0x1c001d ? _0x1c001d : ig.game.tweens.now(); _0x196285 < this._tweens.length;) this._tweens[_0x196285].update(_0x1c001d) || _0x9626fe ? _0x196285++ : this._tweens.splice(_0x196285, 0x1);
      return !0x0;
    },
    'now': function () {
      return Date.now();
    }
  }), ig.TweenDef = ig.Class.extend({
    '_ent': null,
    '_valuesStart': {},
    '_valuesEnd': {},
    '_valuesStartRepeat': {},
    '_duration': 0x3e8,
    '_repeat': 0x0,
    '_yoyo': !0x1,
    '_isPlaying': !0x1,
    '_reversed': !0x1,
    '_delayTime': 0x0,
    '_startTime': null,
    '_pauseTime': null,
    '_easingFunction': ig.Tween.Easing.Linear.EaseNone,
    '_interpolationFunction': ig.Tween.Interpolation.Linear,
    '_chainedTweens': [],
    '_onStartCallback': null,
    '_onStartCallbackFired': !0x1,
    '_onUpdateCallback': null,
    '_onCompleteCallback': null,
    '_onStopCallback': null,
    '_onPauseCallback': null,
    '_onResumeCallback': null,
    '_currentElapsed': 0x0,
    'init': function (_0x28baba) {
      this._object = _0x28baba;
    },
    'to': function (_0x1fe215, _0x36ad14) {
      return this._valuesEnd = _0x1fe215, void 0x0 !== _0x36ad14 && (this._duration = _0x36ad14), this;
    },
    'start': function (_0x180f1d) {
      if (this._isPlaying) return this;
      ig.game.tweens.add(this), this._isPlaying = !0x0, this._onStartCallbackFired = !0x1, this._startTime = void 0x0 !== _0x180f1d ? _0x180f1d : ig.game.tweens.now(), this._startTime += this._delayTime;
      for (var _0x3a73fe in this._valuesEnd) {
        if (this._valuesEnd[_0x3a73fe] instanceof Array) {
          if (0x0 === this._valuesEnd[_0x3a73fe].length) continue;
          this._valuesEnd[_0x3a73fe] = [this._object[_0x3a73fe]].concat(this._valuesEnd[_0x3a73fe]);
        }
        void 0x0 !== this._object[_0x3a73fe] && (this._valuesStart[_0x3a73fe] = this._object[_0x3a73fe], !0x1 === this._valuesStart[_0x3a73fe] instanceof Array && (this._valuesStart[_0x3a73fe] *= 0x1), this._valuesStartRepeat[_0x3a73fe] = this._valuesStart[_0x3a73fe] || 0x0);
      }
      return this;
    },
    'stop': function () {
      if (!this._isPlaying) return this;
      return ig.game.tweens.remove(this), this._isPlaying = !0x1, null !== this._onStopCallback && this._onStopCallback.call(this._object, this._object), this.stopChainedTweens(), this;
    },
    'pause': function () {
      if (!this._isPlaying) return this;
      return ig.game.tweens.remove(this), this._isPlaying = !0x1, this._pauseTime = ig.game.tweens.now(), null !== this._onPauseCallback && this._onPauseCallback.call(this._object, this._object), this;
    },
    'resume': function () {
      if (this._isPlaying || !this._pauseTime) return this;
      var _0x3b241a = ig.game.tweens.now() - this._pauseTime;
      return this._startTime += _0x3b241a, ig.game.tweens.add(this), this._isPlaying = !0x0, null !== this._onResumeCallback && this._onResumeCallback.call(this._object, this._object), this._pauseTime = null, this;
    },
    'end': function () {
      return this.update(this._startTime + this._duration), this;
    },
    'stopChainedTweens': function () {
      for (var _0x187c23 = 0x0, _0x1a55a1 = this._chainedTweens.length; _0x187c23 < _0x1a55a1; _0x187c23++) this._chainedTweens[_0x187c23].stop();
    },
    'delay': function (_0x50edd3) {
      return this._delayTime = _0x50edd3, this;
    },
    'repeat': function (_0x2aa9f3) {
      return this._repeat = _0x2aa9f3, this;
    },
    'repeatDelay': function (_0x54037b) {
      return this._repeatDelayTime = _0x54037b, this;
    },
    'yoyo': function (_0x53a24a) {
      return this._yoyo = _0x53a24a, this;
    },
    'easing': function (_0x18ab3d) {
      return this._easingFunction = _0x18ab3d, this;
    },
    'interpolation': function (_0x31dc9c) {
      return this._interpolationFunction = _0x31dc9c, this;
    },
    'chain': function () {
      return this._chainedTweens = arguments, this;
    },
    'onStart': function (_0x5bbcbd) {
      return this._onStartCallback = _0x5bbcbd, this;
    },
    'onUpdate': function (_0x2b25c2) {
      return this._onUpdateCallback = _0x2b25c2, this;
    },
    'onComplete': function (_0xa03baf) {
      return this._onCompleteCallback = _0xa03baf, this;
    },
    'onStop': function (_0x2553ba) {
      return this._onStopCallback = _0x2553ba, this;
    },
    'onPause': function (_0x2df4c1) {
      return this._onPauseCallback = _0x2df4c1, this;
    },
    'onResume': function (_0x132f37) {
      return this._onResumeCallback = _0x132f37, this;
    },
    'update': function (_0x586a83) {
      var _0x134830, _0x1076b8, _0x3a01cd;
      if (_0x586a83 < this._startTime) return !0x0;
      !0x1 === this._onStartCallbackFired && (null !== this._onStartCallback && this._onStartCallback.call(this._object, this._object), this._onStartCallbackFired = !0x0), _0x1076b8 = (_0x586a83 - this._startTime) / this._duration, this._currentElapsed = _0x1076b8 = 0x1 < _0x1076b8 ? 0x1 : _0x1076b8, _0x3a01cd = this._easingFunction(_0x1076b8);
      for (_0x134830 in this._valuesEnd) if (void 0x0 !== this._valuesStart[_0x134830]) {
        var _0x680d9c = this._valuesStart[_0x134830] || 0x0,
          _0x1423d6 = this._valuesEnd[_0x134830];
        _0x1423d6 instanceof Array ? this._object[_0x134830] = this._interpolationFunction(_0x1423d6, _0x3a01cd) : ('string' === typeof _0x1423d6 && (_0x1423d6 = '+' === _0x1423d6.charAt(0x0) || '-' === _0x1423d6.charAt(0x0) ? _0x680d9c + parseFloat(_0x1423d6) : parseFloat(_0x1423d6)), 'number' === typeof _0x1423d6 && (this._object[_0x134830] = _0x680d9c + (_0x1423d6 - _0x680d9c) * _0x3a01cd));
      }
      null !== this._onUpdateCallback && this._onUpdateCallback.call(this._object, this._object, _0x3a01cd);
      if (0x1 === _0x1076b8) {
        if (0x0 < this._repeat) {
          isFinite(this._repeat) && this._repeat--;
          for (_0x134830 in this._valuesStartRepeat) 'string' === typeof this._valuesEnd[_0x134830] && (this._valuesStartRepeat[_0x134830] = _valuesStartRepeat[_0x134830] + parseFloat(_valuesEnd[_0x134830])), this._yoyo && (_0x1076b8 = this._valuesStartRepeat[_0x134830], this._valuesStartRepeat[_0x134830] = this._valuesEnd[_0x134830], this._valuesEnd[_0x134830] = _0x1076b8), this._valuesStart[_0x134830] = this._valuesStartRepeat[_0x134830];
          this._yoyo && (this._reversed = !this._reversed), this._startTime = void 0x0 !== this._repeatDelayTime ? _0x586a83 + this._repeatDelayTime : _0x586a83 + this._delayTime;
        } else {
          null !== this._onCompleteCallback && this._onCompleteCallback.call(this._object, this._object), _0x586a83 = 0x0;
          for (_0x134830 = this._chainedTweens.length; _0x586a83 < _0x134830; _0x586a83++) this._chainedTweens[_0x586a83].start(this._startTime + this._duration);
          return !0x1;
        }
      }
      return !0x0;
    }
  });
  var _0x25db79 = [0x1];
  ig.Tween.Interpolation = {
    'Linear': function (_0x210349, _0x4e647d) {
      var _0x3b1e0e = _0x210349.length - 0x1,
        _0x20a52b = _0x3b1e0e * _0x4e647d,
        _0x5b9eb3 = Math.floor(_0x20a52b),
        _0x39eada = ig.Tween.Interpolation.Utils.Linear;
      return 0x0 > _0x4e647d ? _0x39eada(_0x210349[0x0], _0x210349[0x1], _0x20a52b) : 0x1 < _0x4e647d ? _0x39eada(_0x210349[_0x3b1e0e], _0x210349[_0x3b1e0e - 0x1], _0x3b1e0e - _0x20a52b) : _0x39eada(_0x210349[_0x5b9eb3], _0x210349[_0x5b9eb3 + 0x1 > _0x3b1e0e ? _0x3b1e0e : _0x5b9eb3 + 0x1], _0x20a52b - _0x5b9eb3);
    },
    'Bezier': function (_0x5a2f60, _0x4def5d) {
      for (var _0x23b19d = 0x0, _0x3281fd = _0x5a2f60.length - 0x1, _0x27f894 = Math.pow, _0x193006 = ig.Tween.Interpolation.Utils.Bernstein, _0x4812c1 = 0x0; _0x4812c1 <= _0x3281fd; _0x4812c1++) _0x23b19d += _0x27f894(0x1 - _0x4def5d, _0x3281fd - _0x4812c1) * _0x27f894(_0x4def5d, _0x4812c1) * _0x5a2f60[_0x4812c1] * _0x193006(_0x3281fd, _0x4812c1);
      return _0x23b19d;
    },
    'CatmullRom': function (_0x5aa4b5, _0x4475ba) {
      var _0x40b06a = _0x5aa4b5.length - 0x1,
        _0x26e184 = _0x40b06a * _0x4475ba,
        _0x3f7e76 = Math.floor(_0x26e184),
        _0x3634cb = ig.Tween.Interpolation.Utils.CatmullRom;
      return _0x5aa4b5[0x0] === _0x5aa4b5[_0x40b06a] ? (0x0 > _0x4475ba && (_0x3f7e76 = Math.floor(_0x26e184 = _0x40b06a * (0x1 + _0x4475ba))), _0x3634cb(_0x5aa4b5[(_0x3f7e76 - 0x1 + _0x40b06a) % _0x40b06a], _0x5aa4b5[_0x3f7e76], _0x5aa4b5[(_0x3f7e76 + 0x1) % _0x40b06a], _0x5aa4b5[(_0x3f7e76 + 0x2) % _0x40b06a], _0x26e184 - _0x3f7e76)) : 0x0 > _0x4475ba ? _0x5aa4b5[0x0] - (_0x3634cb(_0x5aa4b5[0x0], _0x5aa4b5[0x0], _0x5aa4b5[0x1], _0x5aa4b5[0x1], -_0x26e184) - _0x5aa4b5[0x0]) : 0x1 < _0x4475ba ? _0x5aa4b5[_0x40b06a] - (_0x3634cb(_0x5aa4b5[_0x40b06a], _0x5aa4b5[_0x40b06a], _0x5aa4b5[_0x40b06a - 0x1], _0x5aa4b5[_0x40b06a - 0x1], _0x26e184 - _0x40b06a) - _0x5aa4b5[_0x40b06a]) : _0x3634cb(_0x5aa4b5[_0x3f7e76 ? _0x3f7e76 - 0x1 : 0x0], _0x5aa4b5[_0x3f7e76], _0x5aa4b5[_0x40b06a < _0x3f7e76 + 0x1 ? _0x40b06a : _0x3f7e76 + 0x1], _0x5aa4b5[_0x40b06a < _0x3f7e76 + 0x2 ? _0x40b06a : _0x3f7e76 + 0x2], _0x26e184 - _0x3f7e76);
    },
    'Utils': {
      'Linear': function (_0x270f2d, _0x590a4c, _0x4ff5c2) {
        return (_0x590a4c - _0x270f2d) * _0x4ff5c2 + _0x270f2d;
      },
      'Bernstein': function (_0x46b04f, _0x198897) {
        var _0x4a5904 = ig.Tween.Interpolation.Utils.Factorial;
        return _0x4a5904(_0x46b04f) / _0x4a5904(_0x198897) / _0x4a5904(_0x46b04f - _0x198897);
      },
      'Factorial': function (_0x5bed26) {
        var _0x5b2ec0 = 0x1;
        if (_0x25db79[_0x5bed26]) return _0x25db79[_0x5bed26];
        for (var _0x30c62c = _0x5bed26; 0x1 < _0x30c62c; _0x30c62c--) _0x5b2ec0 *= _0x30c62c;
        return _0x25db79[_0x5bed26] = _0x5b2ec0;
      },
      'CatmullRom': function (_0x25d75f, _0x58f74a, _0x50e55d, _0x508350, _0x11ce11) {
        _0x25d75f = 0.5 * (_0x50e55d - _0x25d75f), _0x508350 = 0.5 * (_0x508350 - _0x58f74a);
        var _0x235746 = _0x11ce11 * _0x11ce11;
        return (0x2 * _0x58f74a - 0x2 * _0x50e55d + _0x25d75f + _0x508350) * _0x11ce11 * _0x235746 + (-0x3 * _0x58f74a + 0x3 * _0x50e55d - 0x2 * _0x25d75f - _0x508350) * _0x235746 + _0x25d75f * _0x11ce11 + _0x58f74a;
      }
    }
  };
}), ig.baked = !0x0, ig.module('plugins.url-parameters').defines(function () {
  ig.UrlParameters = ig.Class.extend({
    'init': function () {
      switch (getQueryVariable('iphone')) {
        case 'true':
          ig.ua.iPhone = !0x0, console.log("iPhone mode");
      }
      var _0x3b6f9f = getQueryVariable('webview');
      if (_0x3b6f9f) switch (_0x3b6f9f) {
        case 'true':
          ig.ua.is_uiwebview = !0x0, console.log("webview mode");
      }
      if (_0x3b6f9f = getQueryVariable('debug')) switch (_0x3b6f9f) {
        case 'true':
          ig.game.showDebugMenu(), console.log("debug mode");
      }
      switch (getQueryVariable('view')) {
        case 'stats':
          ig.game.resetPlayerStats(), ig.game.endGame();
      }
      getQueryVariable('ad');
    }
  });
}), ig.baked = !0x0, ig.module('plugins.director').requires('impact.impact').defines(function () {
  ig.Director = ig.Class.extend({
    'init': function (_0x3157d4, _0x39d298) {
      this.game = _0x3157d4, this.levels = [], this.currentLevel = 0x0, this.append(_0x39d298);
    },
    'loadLevel': function (_0x233504) {
      for (var _0x342b86 in ig.sizeHandler.dynamicClickableEntityDivs) {
        var _0x72b165 = ig.domHandler.getElementById('#' + _0x342b86);
        ig.domHandler.hide(_0x72b165);
      }
      return this.currentLevel = _0x233504, this.game.loadLevel(this.levels[_0x233504]), !0x0;
    },
    'loadLevelWithoutEntities': function (_0x28fcd9) {
      return this.currentLevel = _0x28fcd9, this.game.loadLevelWithoutEntities(this.levels[_0x28fcd9]), !0x0;
    },
    'append': function (_0x9127a4) {
      return newLevels = [], 'object' === typeof _0x9127a4 ? (_0x9127a4.constructor === [].constructor ? newLevels = _0x9127a4 : newLevels[0x0] = _0x9127a4, this.levels = this.levels.concat(newLevels), !0x0) : !0x1;
    },
    'nextLevel': function () {
      return this.currentLevel + 0x1 < this.levels.length ? this.loadLevel(this.currentLevel + 0x1) : !0x1;
    },
    'previousLevel': function () {
      return 0x0 <= this.currentLevel - 0x1 ? this.loadLevel(this.currentLevel - 0x1) : !0x1;
    },
    'jumpTo': function (_0x4170da) {
      var _0xa5bb62 = null;
      for (i = 0x0; i < this.levels.length; i++) this.levels[i] == _0x4170da && (_0xa5bb62 = i);
      return 0x0 <= _0xa5bb62 ? this.loadLevel(_0xa5bb62) : !0x1;
    },
    'firstLevel': function () {
      return this.loadLevel(0x0);
    },
    'lastLevel': function () {
      return this.loadLevel(this.levels.length - 0x1);
    },
    'reloadLevel': function () {
      return this.loadLevel(this.currentLevel);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.impact-storage').requires('impact.game').defines(function () {
  ig.Storage = ig.Class.extend({
    'staticInstantiate': function () {
      return !ig.Storage.instance ? null : ig.Storage.instance;
    },
    'init': function () {
      ig.Storage.instance = this;
    },
    'isCapable': function () {
      return 'undefined' !== typeof window.localStorage;
    },
    'isSet': function (_0x1a3b9c) {
      return null !== this.get(_0x1a3b9c);
    },
    'initUnset': function (_0x1b10f5, _0x42bd23) {
      null === this.get(_0x1b10f5) && this.set(_0x1b10f5, _0x42bd23);
    },
    'get': function (_0x5db283) {
      if (!this.isCapable()) return null;
      try {
        return JSON.parse(localStorage.getItem(_0x5db283));
      } catch (_0x2cd603) {
        return window.localStorage.getItem(_0x5db283);
      }
    },
    'getInt': function (_0x44b017) {
      return ~~this.get(_0x44b017);
    },
    'getFloat': function (_0x199356) {
      return parseFloat(this.get(_0x199356));
    },
    'getBool': function (_0x33f7ba) {
      return !!this.get(_0x33f7ba);
    },
    'key': function (_0x42e6ea) {
      return this.isCapable() ? window.localStorage.key(_0x42e6ea) : null;
    },
    'set': function (_0x281c2a, _0x5e3fca) {
      if (!this.isCapable()) return null;
      try {
        window.localStorage.setItem(_0x281c2a, JSON.stringify(_0x5e3fca));
      } catch (_0xb03a1b) {
        console.log(_0xb03a1b);
      }
    },
    'setHighest': function (_0x400907, _0x4257f0) {
      _0x4257f0 > this.getFloat(_0x400907) && this.set(_0x400907, _0x4257f0);
    },
    'remove': function (_0x11902a) {
      if (!this.isCapable()) return null;
      window.localStorage.removeItem(_0x11902a);
    },
    'clear': function () {
      if (!this.isCapable()) return null;
      window.localStorage.clear();
    }
  });
}), ig.baked = !0x0, ig.module('plugins.fullscreen').requires('impact.entity', 'plugins.handlers.size-handler', 'plugins.director').defines(function () {
  ig.Fullscreen = {
    'version': '1.0.0',
    'enableFullscreenButton': !0x1,
    '_isEnabled': 'notChecked',
    'isEnabled': function () {
      return 'notChecked' == this._isEnabled && (this._isEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled ? !0x0 : !0x1), this._isEnabled;
    },
    'isFullscreen': function () {
      return ig.Fullscreen.isEnabled() && (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) ? !0x0 : !0x1;
    },
    'toggleFullscreen': function () {
      ig.Fullscreen.isFullscreen() ? ig.Fullscreen.exitFullscreen() : ig.Fullscreen.requestFullscreen(), ig.sizeHandler.orientationDelayHandler();
      if (ig && ig.visibilityHandler) ig.visibilityHandler.onChange('focus');
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x524423) {}
    },
    'requestFullscreen': function () {
      var _0x3d7f76 = document.documentElement;
      _0x3d7f76.requestFullscreen ? _0x3d7f76.requestFullscreen() : _0x3d7f76.webkitRequestFullscreen ? _0x3d7f76.webkitRequestFullscreen() : _0x3d7f76.mozRequestFullScreen ? _0x3d7f76.mozRequestFullScreen() : _0x3d7f76.msRequestFullscreen ? _0x3d7f76.msRequestFullscreen() : console.log("no request fullscreen method available");
    },
    'exitFullscreen': function () {
      document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : console.log("no exit fullscreen method available");
    },
    'divs': {}
  }, ig.Director.inject({
    'loadLevel': function (_0x3f497b) {
      var _0x46ea19 = ig.Fullscreen.divs,
        _0x41341f;
      for (_0x41341f in _0x46ea19) _0x46ea19 = ig.domHandler.getElementById('#' + _0x41341f), ig.domHandler.hide(_0x46ea19);
      return this.parent(_0x3f497b);
    }
  }), ig.SizeHandler.inject({
    'resize': function () {
      this.parent();
      var _0x1a2b28 = ig.Fullscreen.divs,
        _0x1f3939;
      for (_0x1f3939 in _0x1a2b28) {
        var _0xbdca0f = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y),
          _0x44a846 = ig.domHandler.getElementById('#' + _0x1f3939),
          _0x1bc551 = _0x1a2b28[_0x1f3939].entity_pos_x,
          _0x200761 = _0x1a2b28[_0x1f3939].entity_pos_y,
          _0x525ee6 = _0x1a2b28[_0x1f3939].width,
          _0x533bb6 = _0x1a2b28[_0x1f3939].height,
          _0x16ef54 = ig.domHandler.getElementById('#canvas'),
          _0x4be7e1 = ig.domHandler.getOffsets(_0x16ef54);
        ig.ua.mobile ? (_0x16ef54 = _0x4be7e1.left, _0x4be7e1 = _0x4be7e1.top, ig.sizeHandler.disableStretchToFitOnMobileFlag ? (_0x1bc551 = Math.floor(_0x16ef54 + _0x1bc551 * ig.sizeHandler.scaleRatioMultiplier.x) + 'px', _0x200761 = Math.floor(_0x4be7e1 + _0x200761 * ig.sizeHandler.scaleRatioMultiplier.y) + 'px', _0x525ee6 = Math.floor(_0x525ee6 * ig.sizeHandler.scaleRatioMultiplier.x) + 'px', _0x533bb6 = Math.floor(_0x533bb6 * ig.sizeHandler.scaleRatioMultiplier.y) + 'px') : (_0x1bc551 = Math.floor(_0x1bc551 * ig.sizeHandler.sizeRatio.x) + 'px', _0x200761 = Math.floor(_0x200761 * ig.sizeHandler.sizeRatio.y) + 'px', _0x525ee6 = Math.floor(_0x525ee6 * ig.sizeHandler.sizeRatio.x) + 'px', _0x533bb6 = Math.floor(_0x533bb6 * ig.sizeHandler.sizeRatio.y) + 'px')) : (_0x16ef54 = _0x4be7e1.left, _0x4be7e1 = _0x4be7e1.top, _0x1bc551 = Math.floor(_0x16ef54 + _0x1bc551 * _0xbdca0f) + 'px', _0x200761 = Math.floor(_0x4be7e1 + _0x200761 * _0xbdca0f) + 'px', _0x525ee6 = Math.floor(_0x525ee6 * _0xbdca0f) + 'px', _0x533bb6 = Math.floor(_0x533bb6 * _0xbdca0f) + 'px'), ig.domHandler.css(_0x44a846, {
          'float': 'left',
          'position': 'absolute',
          'left': _0x1bc551,
          'top': _0x200761,
          'width': _0x525ee6,
          'height': _0x533bb6,
          'z-index': 0x3
        }), _0x1a2b28[_0x1f3939]['font-size'] && ig.domHandler.css(_0x44a846, {
          'font-size': _0x1a2b28[_0x1f3939]['font-size'] * _0xbdca0f + 'px'
        });
      }
    }
  }), ig.FullscreenButton = ig.Entity.extend({
    'enterImage': null,
    'exitImage': null,
    'isReady': !0x1,
    'zIndex': 0xf423f,
    'identifier': null,
    'prevPos': {
      'x': 0x0,
      'y': 0x0
    },
    'invisImagePath': 'media/graphics/misc/invisible.png',
    'init': function (_0x9a8f01, _0x1df99a, _0x17ef9b) {
      this.parent(_0x9a8f01, _0x1df99a, _0x17ef9b), ig.Fullscreen.isEnabled() && ig.Fullscreen.enableFullscreenButton ? this.enterImage.loaded ? this.initSize() : this.enterImage.loadCallback = function () {
        this.initSize();
      }.bind(this) : this.kill();
    },
    'kill': function () {
      this.parent();
    },
    'destroy': function () {
      this.parent(), console.log('destroy');
    },
    'initSize': function () {
      this.size.x = this.enterImage.width, this.size.y = this.enterImage.height, this.createClickableLayer(), this.isReady = !0x0;
    },
    'createClickableLayer': function () {
      this.identifier = 'fullscreen-button-layer';
      var _0x1186aa = ig.domHandler.getElementById('#' + this.identifier);
      _0x1186aa ? (ig.domHandler.show(_0x1186aa), ig.domHandler.attr(_0x1186aa, 'onclick', 'ig.Fullscreen.toggleFullscreen()')) : this.createClickableOutboundLayer();
    },
    'update': function (_0x354533, _0x2e9551) {
      _0x354533 = this.pos.x, _0x2e9551 = this.pos.y;
      if (this.isReady && !(this.prevPos.x === _0x354533 && this.prevPos.y === _0x2e9551)) {
        ig.Fullscreen.divs[this.identifier] = {}, ig.Fullscreen.divs[this.identifier].width = this.size.x, ig.Fullscreen.divs[this.identifier].height = this.size.y, ig.Fullscreen.divs[this.identifier].entity_pos_x = this.pos.x, ig.Fullscreen.divs[this.identifier].entity_pos_y = this.pos.y;
        var _0x1a0abc = ig.domHandler.getElementById('#' + this.identifier);
        this.updateCSS(_0x1a0abc), this.prevPos.x = _0x354533, this.prevPos.y = _0x2e9551;
      }
    },
    'draw': function () {
      this.isReady && (ig.Fullscreen.isFullscreen() ? this.exitImage.draw(this.pos.x, this.pos.y) : this.enterImage.draw(this.pos.x, this.pos.y));
    },
    'createClickableOutboundLayer': function () {
      var _0x2037d5 = this.identifier,
        _0x434013 = this.invisImagePath,
        _0xc26e4 = ig.domHandler.create('div');
      ig.domHandler.attr(_0xc26e4, 'id', _0x2037d5), ig.domHandler.attr(_0xc26e4, 'onclick', 'ig.Fullscreen.toggleFullscreen()');
      var _0x9eaef3 = ig.domHandler.create('a'),
        _0x3bcfea = ig.domHandler.create('img');
      ig.domHandler.css(_0x3bcfea, {
        'width': '100%',
        'height': '100%'
      }), ig.domHandler.attr(_0x3bcfea, 'src', _0x434013), ig.domHandler.addEvent(_0xc26e4, 'mousemove', ig.input.mousemove.bind(ig.input), !0x1), ig.domHandler.appendChild(_0x9eaef3, _0x3bcfea), ig.domHandler.appendChild(_0xc26e4, _0x9eaef3), ig.domHandler.appendToBody(_0xc26e4), ig.Fullscreen.divs[_0x2037d5] = {}, ig.Fullscreen.divs[_0x2037d5].width = this.size.x, ig.Fullscreen.divs[_0x2037d5].height = this.size.y, ig.Fullscreen.divs[_0x2037d5].entity_pos_x = this.pos.x, ig.Fullscreen.divs[_0x2037d5].entity_pos_y = this.pos.y, this.updateCSS(_0xc26e4);
    },
    'updateCSS': function (_0x11b984) {
      var _0x31db64 = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
      if (ig.ua.mobile) {
        var _0x2efda0 = ig.domHandler.getElementById('#canvas'),
          _0x2efda0 = ig.domHandler.getOffsets(_0x2efda0),
          _0x3ce022 = _0x2efda0.left,
          _0xf99835 = _0x2efda0.top;
        console.log(_0x2efda0.left), ig.sizeHandler.disableStretchToFitOnMobileFlag ? (_0x2efda0 = Math.floor(_0x3ce022 + this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + 'px', _0xf99835 = Math.floor(_0xf99835 + this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + 'px', _0x3ce022 = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + 'px', _0x31db64 = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + 'px') : (_0x2efda0 = Math.floor(this.pos.x * ig.sizeHandler.sizeRatio.x) + 'px', _0xf99835 = Math.floor(this.pos.y * ig.sizeHandler.sizeRatio.y) + 'px', _0x3ce022 = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + 'px', _0x31db64 = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + 'px');
      } else _0x2efda0 = ig.domHandler.getElementById('#canvas'), _0x2efda0 = ig.domHandler.getOffsets(_0x2efda0), _0x3ce022 = _0x2efda0.left, _0xf99835 = _0x2efda0.top, ig.sizeHandler.enableStretchToFitOnDesktopFlag ? (_0x2efda0 = Math.floor(_0x3ce022 + this.pos.x * ig.sizeHandler.sizeRatio.x) + 'px', _0xf99835 = Math.floor(_0xf99835 + this.pos.y * ig.sizeHandler.sizeRatio.y) + 'px', _0x3ce022 = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + 'px', _0x31db64 = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + 'px') : (_0x2efda0 = Math.floor(_0x3ce022 + this.pos.x * _0x31db64) + 'px', _0xf99835 = Math.floor(_0xf99835 + this.pos.y * _0x31db64) + 'px', _0x3ce022 = Math.floor(this.size.x * _0x31db64) + 'px', _0x31db64 = Math.floor(this.size.y * _0x31db64) + 'px');
      ig.domHandler.css(_0x11b984, {
        'float': 'left',
        'position': 'absolute',
        'left': _0x2efda0,
        'top': _0xf99835,
        'width': _0x3ce022,
        'height': _0x31db64,
        'z-index': 0x3
      });
    }
  });
}), ig.baked = !0x0, ig.module('plugins.spriter.structure.animation').requires('impact.impact').defines(function () {
  SpriterAnimationLooping = {
    'NO_LOOPING': 0x0,
    'LOOPING': 0x1
  }, SpriterAnimation = ig.Class.extend({
    'id': 0x0,
    'name': null,
    'length': 0x0,
    'loopType': 0x0,
    'mainLineKeys': [],
    'timelines': null,
    'init': function (_0x105b98, _0x4d84ea, _0xa19745, _0xe2ee18) {
      this.id = _0x105b98, this.name = _0x4d84ea, this.length = _0xa19745, this.loopType = _0xe2ee18, this.timelines = new SpriterIdNameMap();
    },
    'addMainLineKey': function (_0x241e33) {
      this.mainLineKeys.push(_0x241e33);
    },
    'addTimeline': function (_0x4c95de) {
      this.timelines.add(_0x4c95de, _0x4c95de.id, _0x4c95de.name);
    },
    'getTimelineById': function (_0x17ec01) {
      return this.timelines.getById(_0x17ec01);
    },
    'getTimelineByName': function (_0x349500) {
      return this.timelines.getByName(_0x349500);
    },
    'updateCurve': function () {
      for (var _0x3a0dba = 0x0; _0x3a0dba < this.mainLineKeys.length; _0x3a0dba++) {
        var _0xd2745b = this.mainLineKeys[_0x3a0dba];
        if (_0xd2745b.curveType != ig.SpriterCurveType.LINEAR) {
          for (var _0x5973f3 = 0x0; _0x5973f3 < _0xd2745b.boneRefs.length; _0x5973f3++) {
            var _0x18d8eb = _0xd2745b.boneRefs[_0x5973f3];
            this.timelines.getById(_0x18d8eb.timeline).keys[_0x18d8eb.key].setCurve(_0xd2745b.curveType, _0xd2745b.c1, _0xd2745b.c2, _0xd2745b.c3, _0xd2745b.c4);
          }
          for (_0x5973f3 = 0x0; _0x5973f3 < _0xd2745b.objectRefs.length; _0x5973f3++) _0x18d8eb = _0xd2745b.objectRefs[_0x5973f3], this.timelines.getById(_0x18d8eb.timeline).keys[_0x18d8eb.key].setCurve(_0xd2745b.curveType, _0xd2745b.c1, _0xd2745b.c2, _0xd2745b.c3, _0xd2745b.c4);
        }
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.spriter.structure.timeline-key').requires('impact.impact').defines(function () {
  SpriterTimelineKey = ig.Class.extend({
    'id': 0x0,
    'time': 0x0,
    'spin': 0x0,
    'curveType': 0x0,
    'c1': 0x0,
    'c2': 0x0,
    'c3': 0x0,
    'c4': 0x0,
    'init': function (_0x33eeaf, _0x4e9062, _0x57bc8e) {
      this.id = _0x33eeaf, this.time = _0x4e9062, this.spin = _0x57bc8e, this.setCurve(ig.SpriterCurveType.LINEAR);
    },
    'setCurve': function (_0x4a6470, _0x2ee3e4, _0x5cc563, _0x342264, _0x4e7b8f) {
      void 0x0 === _0x4a6470 && (_0x4a6470 = ig.SpriterCurveType.LINEAR), void 0x0 === _0x2ee3e4 && (_0x2ee3e4 = 0x0), void 0x0 === _0x5cc563 && (_0x5cc563 = 0x0), void 0x0 === _0x342264 && (_0x342264 = 0x0), void 0x0 === _0x4e7b8f && (_0x4e7b8f = 0x0), this.curveType = _0x4a6470, this.c1 = _0x2ee3e4, this.c2 = _0x5cc563, this.c3 = _0x342264, this.c4 = _0x4e7b8f;
    }
  });
}), ig.baked = !0x0, ig.module('plugins.spriter.structure.spatial-timeline-key').requires('plugins.spriter.structure.timeline-key').defines(function () {
  SpriterSpatialTimelineKey = SpriterTimelineKey.extend({
    'info': null,
    'init': function (_0x360913, _0x38d3db, _0x337b1c) {
      this.parent(_0x360913, _0x38d3db, _0x337b1c), this.info = new SpriterSpatialInfo();
    }
  });
}), ig.baked = !0x0, ig.module('plugins.spriter.structure.bone-timeline-key').requires('plugins.spriter.structure.spatial-timeline-key').defines(function () {
  SpriterBoneTimelineKey = SpriterSpatialTimelineKey.extend({
    'init': function (_0x326a57, _0x26333a, _0x11a9c1) {
      this.parent(_0x326a57, _0x26333a, _0x11a9c1);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.spriter.structure.curve-type').requires('impact.impact').defines(function () {
  ig.SpriterCurveType = {
    'LINEAR': 0x0,
    'INSTANT': 0x1,
    'QUADRATIC': 0x2,
    'CUBIC': 0x3
  }, ig.SpriterCurveType.getCurveTypeForName = function (_0x298c7f) {
    if ('linear' === _0x298c7f) return ig.SpriterCurveType.LINEAR;
    if ('instant' === _0x298c7f) return ig.SpriterCurveType.INSTANT;
    if ('quadratic' === _0x298c7f) return ig.SpriterCurveType.QUADRATIC;
    if ('cubic' === _0x298c7f) return ig.SpriterCurveType.CUBIC;
    return console.warn("Unknown curve type: " + _0x298c7f), ig.SpriterCurveType.LINEAR;
  };
}), ig.baked = !0x0, ig.module('plugins.spriter.structure.entity').requires('impact.impact').defines(function () {
  SpriterEntity = ig.Class.extend({
    'id': 0x0,
    'name': '',
    'objectInfos': null,
    'animations': null,
    'init': function (_0x570aea, _0x24a71d) {
      this.id = _0x570aea, this.name = _0x24a71d, this.objectInfos = new SpriterIdNameMap(), this.animations = new SpriterIdNameMap();
    },
    'addObjectInfo': function (_0x577b67) {
      this.objectInfos.add(_0x577b67, _0x577b67.id, _0x577b67.name);
    },
    'getObjectInfoById': function (_0x30d818) {
      return this.objectInfos.getById(_0x30d818);
    },
    'getObjectInfoByName': function (_0x1f0b72) {
      return this.objectInfos.getByName(_0x1f0b72);
    },
    'addAnimation': function (_0x3d435c) {
      this.animations.add(_0x3d435c, _0x3d435c.id, _0x3d435c.name);
    },
    'getAnimationById': function (_0x14f0cf) {
      return this.animations.getById(_0x14f0cf);
    },
    'getAnimationByName': function (_0x169c3d) {
      return this.animations.getByName(_0x169c3d);
    },
    'getAnimationsCount': function () {
      return this.animations.getLength();
    }
  });
}), ig.baked = !0x0, ig.module('plugins.spriter.structure.file').requires('impact.impact').defines(function () {
  SpriterFile = ig.Class.extend({
    'id': 0x0,
    'name': '',
    'anchorX': 0x0,
    'anchorY': 0x0,
    'init': function (_0x296c51, _0x511660, _0x2d0740, _0x29537c) {
      this.id = _0x296c51, this.name = _0x511660, this.anchorX = _0x2d0740, this.anchorY = _0x29537c;
    }
  });
}), ig.baked = !0x0, ig.module('plugins.spriter.structure.folder').requires('impact.impact').defines(function () {
  SpriterFolder = ig.Class.extend({
    'id': 0x0,
    'name': '',
    'files': null,
    'init': function (_0x418cb1, _0x40c050) {
      this.id = _0x418cb1, this.name = _0x40c050, this.files = new SpriterIdNameMap();
    },
    'addFile': function (_0x9662cc) {
      this.files.add(_0x9662cc, _0x9662cc.id, _0x9662cc.name);
    },
    'getFileById': function (_0x11c64d) {
      return this.files.getById(_0x11c64d);
    },
    'getFileByName': function (_0x5b7d1d) {
      return this.files.getByName(_0x5b7d1d);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.spriter.structure.main-line-key').requires('impact.impact').defines(function () {
  SpriterMainLineKey = ig.Class.extend({
    'time': 0x0,
    'curveType': 0x0,
    'c1': 0x0,
    'c2': 0x0,
    'c3': 0x0,
    'c4': 0x0,
    'boneRefs': [],
    'objectRefs': [],
    'init': function (_0x208f73) {
      this.time = _0x208f73, this.setCurve(ig.SpriterCurveType.LINEAR);
    },
    'addBoneRef': function (_0xe2c938) {
      this.boneRefs.push(_0xe2c938);
    },
    'addObjectRef': function (_0x266034) {
      this.objectRefs.push(_0x266034);
    },
    'setCurve': function (_0xe09f48, _0x39a06a, _0x445260, _0x1fe068, _0x4acd1d) {
      void 0x0 === _0xe09f48 && (_0xe09f48 = ig.SpriterCurveType.LINEAR), void 0x0 === _0x39a06a && (_0x39a06a = 0x0), void 0x0 === _0x445260 && (_0x445260 = 0x0), void 0x0 === _0x1fe068 && (_0x1fe068 = 0x0), void 0x0 === _0x4acd1d && (_0x4acd1d = 0x0), this.curveType = _0xe09f48, this.c1 = _0x39a06a, this.c2 = _0x445260, this.c3 = _0x1fe068, this.c4 = _0x4acd1d;
    }
  });
}), ig.baked = !0x0, ig.module('plugins.spriter.structure.object-info').requires('impact.impact').defines(function () {
  SpriterObjectInfo = ig.Class.extend({
    'id': 0x0,
    'type': 0x0,
    'name': '',
    'width': 0x0,
    'height': 0x0,
    'init': function (_0x3f7fc0, _0x3da8b5, _0x3b6397, _0x2388b9, _0x2f213c) {
      this.id = _0x3f7fc0, this.type = _0x3b6397, this.name = _0x3da8b5, this.width = _0x2388b9, this.height = _0x2f213c;
    }
  });
}), ig.baked = !0x0, ig.module('plugins.spriter.structure.object-timeline-key').requires('plugins.spriter.structure.spatial-timeline-key').defines(function () {
  SpriterObjectTimelineKey = SpriterSpatialTimelineKey.extend({
    'folder': 0x0,
    'file': 0x0,
    'init': function (_0x2fd808, _0x5406c6, _0x2e9e7f) {
      this.parent(_0x2fd808, _0x5406c6, _0x2e9e7f);
    },
    'setFolderAndFile': function (_0x4c8cb1, _0x4b85cd) {
      this.folder = _0x4c8cb1, this.file = _0x4b85cd;
    }
  });
}), ig.baked = !0x0, ig.module('plugins.spriter.structure.object-type').requires('impact.impact').defines(function () {
  SpriterObjectType = {
    'SPRITE': 0x0,
    'BONE': 0x1,
    'getObjectTypeForName': function (_0x1ef45c) {
      if ('sprite' === _0x1ef45c) return SpriterObjectType.SPRITE;
      if ('bone' === _0x1ef45c) return SpriterObjectType.BONE;
    }
  };
}), ig.baked = !0x0, ig.module('plugins.spriter.structure.ref').requires('impact.impact').defines(function () {
  SpriterRef = ig.Class.extend({
    'id': 0x0,
    'parentId': 0x0,
    'timeline': 0x0,
    'key': 0x0,
    'z': 0x0,
    'init': function (_0x498069, _0x3a4a9b, _0x2a1e6f, _0x86c9d, _0x299ebc) {
      this.id = _0x498069, this.parentId = _0x3a4a9b, this.timeline = _0x2a1e6f, this.key = _0x86c9d, this.z = _0x299ebc;
    }
  });
}), ig.baked = !0x0, ig.module('plugins.spriter.structure.spatial-info').requires('impact.impact').defines(function () {
  SpriterSpatialInfo = ig.Class.extend({
    'x': 0x0,
    'y': 0x0,
    'scaleX': 0x1,
    'scaleY': 0x1,
    'pivotX': 0x0,
    'pivotY': 0x0,
    'alpha': 0x1,
    'angle': 0x0
  });
}), ig.baked = !0x0, ig.module('plugins.spriter.structure.timeline').requires('impact.impact').defines(function () {
  SpriterTimeline = ig.Class.extend({
    'id': 0x0,
    'name': '',
    'type': 0x0,
    'objectRef': 0x0,
    'keys': [],
    'init': function (_0x39b8da, _0x5bba43, _0x12109a, _0x44e75d) {
      this.id = _0x39b8da, this.name = _0x5bba43, this.type = _0x12109a, this.objectRef = _0x44e75d;
    },
    'addKey': function (_0x5ee40b) {
      this.keys.push(_0x5ee40b);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.spriter.id-name-map').requires('impact.impact').defines(function () {
  SpriterIdNameMap = ig.Class.extend({
    'items': [],
    'itemNames': [],
    'add': function (_0x505bd9, _0x5c7cf8, _0x2ef4ae) {
      void 0x0 === _0x5c7cf8 && (_0x5c7cf8 = this.items.length);
      if (void 0x0 === _0x2ef4ae || null === _0x2ef4ae) _0x2ef4ae = 'item_' + _0x5c7cf8;
      this.items[_0x5c7cf8] = _0x505bd9, this.itemNames[_0x2ef4ae] = _0x5c7cf8;
    },
    'getById': function (_0x2a7e30) {
      return this.items[_0x2a7e30];
    },
    'getByName': function (_0x4fed5b) {
      return this.getById(this.itemNames[_0x4fed5b]);
    },
    'getLength': function () {
      return this.items.length;
    }
  });
}), ig.baked = !0x0, ig.module('plugins.spriter.loader').requires('impact.impact').defines(function () {
  SpriterLoader = ig.Class.extend({
    'spriter': null,
    'getFileNameWithoutExtension': function (_0x10a919) {
      return _0x10a919.split("\\").pop().split('/').pop().split('.')[0x0];
    },
    'getDirectoryPath': function (_0x99cae3) {
      return _0x99cae3 = _0x99cae3.split("\\").pop().split('/'), _0x99cae3.pop(), _0x99cae3.join('/') + '/';
    },
    'parseInt': function (_0x43b459, _0x390cdc, _0x25f5a0) {
      return void 0x0 === _0x25f5a0 && (_0x25f5a0 = 0x0), _0x43b459 = _0x43b459.getAttribute(_0x390cdc), null !== _0x43b459 ? parseInt(_0x43b459) : _0x25f5a0;
    },
    'parseFloat': function (_0x23cb97, _0x38e894, _0x4e90bd) {
      return void 0x0 === _0x4e90bd && (_0x4e90bd = 0x0), _0x23cb97 = _0x23cb97.getAttribute(_0x38e894), null !== _0x23cb97 ? parseFloat(_0x23cb97) : _0x4e90bd;
    },
    'parseString': function (_0x3da10f, _0x1f8bcd, _0x242daf) {
      return void 0x0 === _0x242daf && (_0x242daf = ''), _0x3da10f = _0x3da10f.getAttribute(_0x1f8bcd), null !== _0x3da10f ? _0x3da10f : _0x242daf;
    },
    'load': function (_0x14c89d) {
      ig.spriterHasPrint || (ig.spriterHasPrint = !0x0, console.log("Spriter plugin version 1.0.5"));
      var _0xd47493 = $.parseXML(_0x14c89d.data);
      return this.spriter = new Spriter(), this.spriter.path = this.getDirectoryPath(_0x14c89d.path), _0x14c89d = _0xd47493.getElementsByTagName('folder'), this.loadFolders(this.spriter, _0x14c89d), _0xd47493 = _0xd47493.getElementsByTagName('entity'), this.loadEntities(this.spriter, _0xd47493), this.spriter;
    },
    'loadFolders': function (_0x2f946d, _0xf390ae) {
      for (var _0x5074a2 = 0x0; _0x5074a2 < _0xf390ae.length; _0x5074a2++) {
        var _0x5f5212 = _0xf390ae.item(_0x5074a2),
          _0xda92b8 = new SpriterFolder(this.parseInt(_0x5f5212, 'id'), _0x5f5212.getAttribute('name')),
          _0x5f5212 = _0x5f5212.getElementsByTagName('file');
        this.loadFiles(_0xda92b8, _0x5f5212), _0x2f946d.addFolder(_0xda92b8);
      }
    },
    'loadFiles': function (_0x43b123, _0x319dc3) {
      for (var _0x49f5df = 0x0; _0x49f5df < _0x319dc3.length; _0x49f5df++) {
        var _0x261708 = _0x319dc3[_0x49f5df],
          _0x261708 = new SpriterFile(this.parseInt(_0x261708, 'id'), this.getFileNameWithoutExtension(_0x261708.getAttribute('name')), this.parseFloat(_0x261708, 'pivot_x'), 0x1 - this.parseFloat(_0x261708, 'pivot_y'));
        _0x43b123.addFile(_0x261708), new ig.Image(this.spriter.path + _0x43b123.name + '/' + _0x261708.name + '.png');
      }
    },
    'loadEntities': function (_0x9a35d5, _0x43a0d0) {
      for (var _0x1ee5eb = 0x0; _0x1ee5eb < _0x43a0d0.length; _0x1ee5eb++) {
        var _0x9ec57c = _0x43a0d0.item(_0x1ee5eb),
          _0x3ee29c = new SpriterEntity(this.parseInt(_0x9ec57c, 'id'), _0x9ec57c.getAttribute('name')),
          _0x33486e = _0x9ec57c.getElementsByTagName('obj_info');
        this.loadBones(_0x3ee29c, _0x33486e), _0x9ec57c = _0x9ec57c.getElementsByTagName('animation'), this.loadAnimations(_0x3ee29c, _0x9ec57c), _0x9a35d5.addEntity(_0x3ee29c);
      }
    },
    'loadBones': function (_0x2240e0, _0xfbd6a6) {
      for (var _0x24feb8 = 0x0; _0x24feb8 < _0xfbd6a6.length; _0x24feb8++) {
        var _0x51d253 = _0xfbd6a6.item(_0x24feb8),
          _0x51d253 = new SpriterObjectInfo(_0x24feb8, _0x51d253.getAttribute('name'), SpriterObjectType.getObjectTypeForName(_0x51d253.getAttribute('type')), this.parseFloat(_0x51d253, 'w'), this.parseFloat(_0x51d253, 'h'));
        _0x2240e0.addObjectInfo(_0x51d253);
      }
    },
    'loadAnimations': function (_0x2d77e5, _0x1849cc) {
      for (var _0x311926 = 0x0; _0x311926 < _0x1849cc.length; _0x311926++) {
        var _0x99eeb8 = _0x1849cc.item(_0x311926),
          _0x3386dc = new SpriterAnimation(this.parseInt(_0x99eeb8, 'id'), _0x99eeb8.getAttribute('name'), this.parseFloat(_0x99eeb8, 'length'), 'true' === this.parseString(_0x99eeb8, 'looping', 'true') ? SpriterAnimationLooping.LOOPING : SpriterAnimationLooping.NO_LOOPING),
          _0x42adf5 = _0x99eeb8.getElementsByTagName('mainline')[0x0].getElementsByTagName('key');
        this.loadMainLineKeys(_0x3386dc, _0x42adf5), _0x99eeb8 = _0x99eeb8.getElementsByTagName('timeline'), this.loadTimelines(_0x3386dc, _0x99eeb8), _0x3386dc.updateCurve(), _0x2d77e5.addAnimation(_0x3386dc);
      }
    },
    'loadMainLineKeys': function (_0x129c3e, _0x21090f) {
      for (var _0x24268f = 0x0; _0x24268f < _0x21090f.length; _0x24268f++) {
        var _0x2761e5 = _0x21090f.item(_0x24268f),
          _0x328e57 = new SpriterMainLineKey(this.parseFloat(_0x2761e5, 'time')),
          _0x36bf59 = this.parseString(_0x2761e5, 'curve_type', 'linear');
        'linear' !== _0x36bf59 && _0x328e57.setCurve(ig.SpriterCurveType.getCurveTypeForName(_0x36bf59), this.parseFloat(_0x2761e5, 'c1', 0x0), this.parseFloat(_0x2761e5, 'c2', 0x0), this.parseFloat(_0x2761e5, 'c3', 0x0), this.parseFloat(_0x2761e5, 'c4', 0x0));
        for (var _0x36bf59 = _0x2761e5.getElementsByTagName('bone_ref'), _0x375ef8 = 0x0; _0x375ef8 < _0x36bf59.length; _0x375ef8++) _0x328e57.addBoneRef(this.loadRef(_0x36bf59.item(_0x375ef8)));
        _0x2761e5 = _0x2761e5.getElementsByTagName('object_ref');
        for (_0x36bf59 = 0x0; _0x36bf59 < _0x2761e5.length; _0x36bf59++) _0x328e57.addObjectRef(this.loadRef(_0x2761e5.item(_0x36bf59)));
        _0x129c3e.addMainLineKey(_0x328e57);
      }
    },
    'loadRef': function (_0x5ca7a9) {
      return new SpriterRef(this.parseInt(_0x5ca7a9, 'id'), this.parseInt(_0x5ca7a9, 'parent', -0x1), this.parseInt(_0x5ca7a9, 'timeline'), this.parseInt(_0x5ca7a9, 'key'), this.parseInt(_0x5ca7a9, 'z_index'));
    },
    'loadTimelines': function (_0x2bb42b, _0x4490da) {
      for (var _0x591a47 = 0x0; _0x591a47 < _0x4490da.length; _0x591a47++) {
        var _0x256de5 = _0x4490da.item(_0x591a47),
          _0x5cd387 = new SpriterTimeline(this.parseInt(_0x256de5, 'id'), _0x256de5.getAttribute('name'), 'bone' === _0x256de5.getAttribute('object_type') ? SpriterObjectType.BONE : SpriterObjectType.SPRITE, this.parseInt(_0x256de5, 'obj', -0x1)),
          _0x256de5 = _0x256de5.getElementsByTagName('key');
        this.loadTimelineKeys(_0x5cd387, _0x256de5), _0x2bb42b.addTimeline(_0x5cd387);
      }
    },
    'loadTimelineKeys': function (_0x47134c, _0x4ae1bb) {
      for (var _0x2bd5f8 = 0x0; _0x2bd5f8 < _0x4ae1bb.length; _0x2bd5f8++) {
        var _0x176670 = _0x4ae1bb.item(_0x2bd5f8),
          _0x549fb0 = null,
          _0x115316 = _0x176670.firstElementChild,
          _0x3022ba = this.parseInt(_0x176670, 'time'),
          _0x4d5e62 = this.parseInt(_0x176670, 'spin', 0x1),
          _0x5761af = !0x1;
        'bone' === _0x115316.tagName ? _0x549fb0 = new SpriterBoneTimelineKey(_0x2bd5f8, _0x3022ba, _0x4d5e62) : 'object' === _0x115316.tagName ? (_0x549fb0 = new SpriterObjectTimelineKey(_0x2bd5f8, _0x3022ba, _0x4d5e62), _0x5761af = !0x0) : console.warn("Unknown key type: " + _0x115316.tagName), _0x3022ba = this.parseString(_0x176670, 'curve_type', 'linear'), 'linear' !== _0x3022ba && _0x549fb0.setCurve(ig.SpriterCurveType.getCurveTypeForName(_0x3022ba), this.parseFloat(_0x176670, 'c1', 0x0), this.parseFloat(_0x176670, 'c2', 0x0), this.parseFloat(_0x176670, 'c3', 0x0), this.parseFloat(_0x176670, 'c4', 0x0)), _0x176670 = _0x549fb0.info, _0x176670.x = this.parseFloat(_0x115316, 'x'), _0x176670.y = -this.parseFloat(_0x115316, 'y'), _0x176670.scaleX = this.parseFloat(_0x115316, 'scale_x', 0x1), _0x176670.scaleY = this.parseFloat(_0x115316, 'scale_y', 0x1), _0x176670.angle = 0x168 - this.parseFloat(_0x115316, 'angle'), _0x176670.alpha = this.parseFloat(_0x115316, 'a', 0x1), _0x5761af && (_0x5761af = this.parseInt(_0x115316, 'folder'), _0x3022ba = this.parseInt(_0x115316, 'file'), _0x549fb0.setFolderAndFile(_0x5761af, _0x3022ba), _0x5761af = this.spriter.getFolderById(_0x5761af).getFileById(_0x3022ba), _0x176670.pivotX = this.parseFloat(_0x115316, 'pivot_x', _0x5761af.anchorX), _0x176670.pivotY = this.parseFloat(_0x115316, 'pivot_y', _0x5761af.anchorY)), _0x47134c.addKey(_0x549fb0);
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.spriter.scml').requires('impact.impact').defines(function () {
  SpriterScml = ig.Class.extend({
    'data': null,
    'spriter': null,
    'loaded': !0x1,
    'failed': !0x1,
    'loadCallback': null,
    'path': '',
    'staticInstantiate': function (_0xa3a678) {
      return SpriterScml.cache[_0xa3a678] || null;
    },
    'init': function (_0x17234f) {
      this.path = _0x17234f, this.load();
    },
    'load': function (_0x25fdbc) {
      this.loaded ? _0x25fdbc && _0x25fdbc(this.path, !0x0) : (!this.loaded && ig.ready ? (this.loadCallback = _0x25fdbc || null, $.ajax(ig.prefix + this.path + ig.nocache, {
        'dataType': 'text',
        'success': function (_0x2e9593) {
          this.loaded = !0x0, this.data = _0x2e9593, this.spriter = new SpriterLoader().load(this), this.loadCallback && _0x25fdbc(this.path, !0x0);
        }.bind(this),
        'error': function () {
          this.failed = !0x0, this.loadCallback && this.loadCallback(this.path, !0x1);
        }.bind(this)
      })) : ig.addResource(this), SpriterScml.cache[this.path] = this);
    }
  }), SpriterScml.cache = {};
}), ig.baked = !0x0, ig.module('plugins.spriter.spriter-bone').requires('impact.impact').defines(function () {
  SpriterBone = ig.Class.extend({
    'UPDATE_X': 0x1,
    'UPDATE_Y': 0x2,
    'UPDATE_SCALE_X': 0x4,
    'UPDATE_SCALE_Y': 0x8,
    'UPDATE_PIVOT_X': 0x10,
    'UPDATE_PIVOT_Y': 0x20,
    'UPDATE_ANGLE': 0x40,
    'UPDATE_ALPHA': 0x80,
    'on': !0x1,
    'parentId': 0x0,
    'timelineKey': -0x1,
    'key': null,
    'timeFrom': 0x0,
    'timeTo': 0x0,
    'from': null,
    'to': null,
    'transformed': null,
    'updateMask': 0x0,
    'init': function () {
      this.transformed = new SpriterSpatialInfo();
    },
    'setOn': function (_0x6dfc2) {
      this.on = _0x6dfc2;
    },
    'setKey': function (_0x435353, _0x14c5ad, _0x4b94f0) {
      this.timelineKey = _0x4b94f0;
      var _0x30e15e = _0x435353.getTimelineById(_0x14c5ad).keys;
      _0x14c5ad = _0x30e15e[_0x4b94f0];
      var _0x3ba1ca = (_0x4b94f0 + 0x1) % _0x30e15e.length;
      0x0 === _0x3ba1ca && _0x435353.loopType === SpriterAnimationLooping.NO_LOOPING && (_0x3ba1ca = _0x4b94f0), _0x4b94f0 = _0x30e15e[_0x3ba1ca], this.key = _0x14c5ad, this.timeFrom = _0x14c5ad.time, this.timeTo = _0x4b94f0.time, this.timeTo < this.timeFrom && (this.timeTo = _0x435353.length), this.from = _0x14c5ad.info, this.to = _0x4b94f0.info, this.updateMask = 0x0, 0.000001 < Math.abs(this.from.x - this.to.x) && (this.updateMask += this.UPDATE_X), 0.000001 < Math.abs(this.from.y - this.to.y) && (this.updateMask += this.UPDATE_Y), 0.000001 < Math.abs(this.from.scaleX - this.to.scaleX) && (this.updateMask += this.UPDATE_SCALE_X), 0.000001 < Math.abs(this.from.scaleY - this.to.scaleY) && (this.updateMask += this.UPDATE_SCALE_Y), 0.000001 < Math.abs(this.from.pivotX - this.to.pivotX) && (this.updateMask += this.UPDATE_PIVOT_X), 0.000001 < Math.abs(this.from.pivotY - this.to.pivotY) && (this.updateMask += this.UPDATE_PIVOT_Y), 0.000001 < Math.abs(this.from.alpha - this.to.alpha) && (this.updateMask += this.UPDATE_ALPHA), 0.000001 < Math.abs(this.from.angle - this.to.angle) && (this.updateMask += this.UPDATE_ANGLE), this.transformed.x = this.from.x, this.transformed.y = this.from.y, this.transformed.scaleX = this.from.scaleX, this.transformed.scaleY = this.from.scaleY, this.transformed.pivotX = this.from.pivotX, this.transformed.pivotY = this.from.pivotY, this.transformed.angle = this.from.angle, this.transformed.alpha = this.from.alpha;
    },
    'tween': function (_0x3ed206) {
      _0x3ed206 = 0x0 < this.updateMask ? this.getTweenTime(_0x3ed206) : 0x0, this.transformed.x = 0x0 < (this.updateMask & this.UPDATE_X) ? this.linear(this.from.x, this.to.x, _0x3ed206) : this.from.x, this.transformed.y = 0x0 < (this.updateMask & this.UPDATE_Y) ? this.linear(this.from.y, this.to.y, _0x3ed206) : this.from.y, this.transformed.scaleX = 0x0 < (this.updateMask & this.UPDATE_SCALE_X) ? this.linear(this.from.scaleX, this.to.scaleX, _0x3ed206) : this.from.scaleX, this.transformed.scaleY = 0x0 < (this.updateMask & this.UPDATE_SCALE_Y) ? this.linear(this.from.scaleY, this.to.scaleY, _0x3ed206) : this.from.scaleY, this.transformed.pivotX = 0x0 < (this.updateMask & this.UPDATE_PIVOT_X) ? this.linear(this.from.pivotX, this.to.pivotX, _0x3ed206) : this.from.pivotX, this.transformed.pivotY = 0x0 < (this.updateMask & this.UPDATE_PIVOT_Y) ? this.linear(this.from.pivotY, this.to.pivotY, _0x3ed206) : this.from.pivotY, this.transformed.alpha = 0x0 < (this.updateMask & this.UPDATE_ALPHA) ? this.linear(this.from.alpha, this.to.alpha, _0x3ed206) : this.from.alpha, this.transformed.angle = 0x0 < (this.updateMask & this.UPDATE_ANGLE) ? this.angleLinear(this.from.angle, this.to.angle, this.key.spin, _0x3ed206) : this.from.angle;
    },
    'update': function (_0x7df572) {
      this.transformed.angle *= this.sign(_0x7df572.scaleX) * this.sign(_0x7df572.scaleY), this.transformed.angle += _0x7df572.angle, this.transformed.scaleX *= _0x7df572.scaleX, this.transformed.scaleY *= _0x7df572.scaleY, this.scalePosition(_0x7df572.scaleX, _0x7df572.scaleY), this.rotatePosition(_0x7df572.angle), this.translatePosition(_0x7df572.x, _0x7df572.y), this.transformed.alpha *= _0x7df572.alpha;
    },
    'scalePosition': function (_0x495232, _0x341582) {
      this.transformed.x *= _0x495232, this.transformed.y *= _0x341582;
    },
    'rotatePosition': function (_0x328b6b) {
      var _0x5b85d0 = this.transformed.x,
        _0x1e462d = this.transformed.y;
      if (0x0 !== _0x5b85d0 || 0x0 !== _0x1e462d) {
        var _0x41071e = _0x328b6b * (Math.PI / 0xb4);
        _0x328b6b = Math.cos(_0x41071e), _0x41071e = Math.sin(_0x41071e), this.transformed.x = _0x5b85d0 * _0x328b6b - _0x1e462d * _0x41071e, this.transformed.y = _0x5b85d0 * _0x41071e + _0x1e462d * _0x328b6b;
      }
    },
    'translatePosition': function (_0x1eaa24, _0x131476) {
      this.transformed.x += _0x1eaa24, this.transformed.y += _0x131476;
    },
    'getTweenTime': function (_0x313ba9) {
      if (this.key.curveType === ig.SpriterCurveType.INSTANT) return 0x0;
      _0x313ba9 = this.clamp((_0x313ba9 - this.timeFrom) / (this.timeTo - this.timeFrom), 0x0, 0x1);
      switch (this.key.curveType) {
        case ig.SpriterCurveType.LINEAR:
          return _0x313ba9;
        case ig.SpriterCurveType.QUADRATIC:
          return this.quadratic(0x0, this.key.c1, 0x1, _0x313ba9);
        case ig.SpriterCurveType.CUBIC:
          return this.cubic(0x0, this.key.c1, this.key.c2, 0x1, _0x313ba9);
      }
      return 0x0;
    },
    'linear': function (_0x269fe4, _0x34db3f, _0x32915e) {
      return (_0x34db3f - _0x269fe4) * _0x32915e + _0x269fe4;
    },
    'quadratic': function (_0x194ae2, _0x27540c, _0x250145, _0x262ac5) {
      return this.linear(this.linear(_0x194ae2, _0x27540c, _0x262ac5), this.linear(_0x27540c, _0x250145, _0x262ac5), _0x262ac5);
    },
    'cubic': function (_0x305d8a, _0x14da01, _0x465661, _0xb9c3fb, _0x257ddb) {
      return this.linear(this.quadratic(_0x305d8a, _0x14da01, _0x465661, _0x257ddb), this.quadratic(_0x14da01, _0x465661, _0xb9c3fb, _0x257ddb), _0x257ddb);
    },
    'angleLinear': function (_0xeafc0d, _0x1c0875, _0x2da749, _0x2f82ca) {
      if (0x0 === _0x2da749) return _0xeafc0d;
      return 0x0 < _0x2da749 ? _0x1c0875 > _0xeafc0d && (_0x1c0875 -= 0x168) : _0x1c0875 < _0xeafc0d && (_0x1c0875 += 0x168), this.linear(_0xeafc0d, _0x1c0875, _0x2f82ca);
    },
    'sign': function (_0x236209) {
      return 0x0 > _0x236209 ? -0x1 : 0x0 < _0x236209 ? 0x1 : 0x0;
    },
    'clamp': function (_0x4438ac, _0x58079d, _0x4274d1) {
      return _0x4438ac < _0x58079d ? _0x58079d : _0x4274d1 < _0x4438ac ? _0x4274d1 : _0x4438ac;
    }
  });
}), ig.baked = !0x0, ig.module('plugins.spriter.spriter-display').requires('impact.entity').defines(function () {
  SpriterDisplay = ig.Entity.extend({
    'scml': null,
    'spriter': null,
    'entityName': '',
    'currentAnimationName': '',
    'animation': null,
    'animationSpeed': 0x0,
    'scale': {
      'x': 0x1,
      'y': 0x1
    },
    'opacity': 0x1,
    'bones': [],
    'objects': [],
    'attachedImages': {},
    'time': 0x0,
    'nextTime': 0x0,
    'keyIndex': 0x0,
    'root': null,
    'pause': !0x1,
    'finished': !0x1,
    'init': function (_0x32f958, _0x47c95f, _0x342cae) {
      this.parent(_0x32f958, _0x47c95f, _0x342cae), null == this.scml ? console.error("scml is null, please provide one") : (this.spriter = this.scml.spriter, this.entityName = this.spriter.getEntityById(0x0).name, this.root = new SpriterSpatialInfo(), this.setAnimationSpeedPercent(0x64), this.setAnimationById(0x0));
    },
    'attachImage': function (_0x23c100, _0x43ef8e, _0x58566d, _0x4b23dc, _0x349333) {
      this.attachedImages[_0x23c100] = {
        'image': _0x43ef8e,
        'x': _0x58566d,
        'y': _0x4b23dc,
        'hideOriginal': _0x349333
      };
      for (_0x23c100 = 0x0; _0x23c100 < this.objects.length; _0x23c100++) this.objects[_0x23c100].attachedImages = this.attachedImages;
    },
    'detachImage': function (_0x2a1160) {
      Object.hasOwnProperty.call(this.attachedImages, _0x2a1160) && (this.attachedImages[_0x2a1160] = null);
    },
    'getAnimationCount': function () {
      return this.spriter.getEntityByName(this.entityName).getAnimationsCount();
    },
    'setAnimationSpeedPercent': function (_0x373bc8) {
      void 0x0 === _0x373bc8 && (_0x373bc8 = 0x64), this.animationSpeed = _0x373bc8 / 0x64;
    },
    'setAnimationById': function (_0xee713, _0x567d24) {
      var _0x28b058 = this.spriter.getEntityByName(this.entityName).getAnimationById(_0xee713);
      void 0x0 === _0x28b058 || null === _0x28b058 ? console.warn("Animation " + _0xee713 + " for entity " + this.entityName + " does not exist!") : this.setAnimation(_0x28b058, _0x567d24);
    },
    'setAnimationByName': function (_0x446bd3, _0x27f28b) {
      var _0x3052f7 = this.spriter.getEntityByName(this.entityName).getAnimationByName(_0x446bd3);
      void 0x0 === _0x3052f7 || null === _0x3052f7 ? console.warn("Animation " + _0x446bd3 + " for entity " + this.entityName + " does not exist!") : this.setAnimation(_0x3052f7, _0x27f28b);
    },
    'setAnimation': function (_0x455a51, _0x4f0e81) {
      void 0x0 === _0x4f0e81 && (_0x4f0e81 = !0x0), this.animation = _0x455a51, this.finished = !0x1;
      if (_0x4f0e81 || this.currentAnimationName != _0x455a51.name) this.clearTime(), this.currentAnimationName = _0x455a51.name, this.loadKeys(0x0, !0x0);
    },
    'clearTime': function () {
      this.time = 0x0, this.keyIndex = -0x1;
    },
    'getNextMainLineKeyTime': function () {
      var _0xdb2509 = this.animation.mainLineKeys,
        _0x3d740f = (this.keyIndex + 0x1) % _0xdb2509.length;
      this.nextTime = 0x0 !== _0x3d740f ? _0xdb2509[_0x3d740f].time : this.animation.length;
    },
    'setBones': function (_0x252c4a, _0x2d398f) {
      void 0x0 === _0x2d398f && (_0x2d398f = !0x1);
      for (var _0x209106 = 0x0; _0x209106 < this.bones.length; _0x209106++) void 0x0 !== this.bones[_0x209106] && this.bones[_0x209106].setOn(!0x1);
      for (_0x209106 = 0x0; _0x209106 < _0x252c4a.length; _0x209106++) {
        var _0x35b561 = _0x252c4a[_0x209106];
        void 0x0 === this.bones[_0x35b561.id] && (this.bones[_0x35b561.id] = new SpriterBone());
        var _0xb20221 = this.bones[_0x35b561.id];
        _0xb20221.setOn(!0x0), _0xb20221.parentId = _0x35b561.parentId, (_0xb20221.timelineKey != _0x35b561.key || _0x2d398f) && _0xb20221.setKey(this.animation, _0x35b561.timeline, _0x35b561.key);
      }
    },
    'setObjects': function (_0x30f169, _0x3f36db) {
      void 0x0 === _0x3f36db && (_0x3f36db = !0x1);
      for (var _0x4fb68b = 0x0; _0x4fb68b < this.objects.length; _0x4fb68b++) void 0x0 !== this.objects[_0x4fb68b] && this.objects[_0x4fb68b].setOn(!0x1);
      for (_0x4fb68b = 0x0; _0x4fb68b < _0x30f169.length; _0x4fb68b++) {
        var _0x3bdc9b = _0x30f169[_0x4fb68b],
          _0x1f91ac = null;
        void 0x0 === this.objects[_0x3bdc9b.id] ? (_0x1f91ac = new SpriterObject(this.spriter), this.objects[_0x3bdc9b.id] = _0x1f91ac) : _0x1f91ac = this.objects[_0x3bdc9b.id], _0x1f91ac.setOn(!0x0), _0x1f91ac.parentId = _0x3bdc9b.parentId, (_0x1f91ac.timelineKey != _0x3bdc9b.key || _0x3f36db) && _0x1f91ac.setKey(this.animation, _0x3bdc9b.timeline, _0x3bdc9b.key);
      }
    },
    'loadKeys': function (_0x5648d1, _0x4d05a4) {
      void 0x0 === _0x4d05a4 && (_0x4d05a4 = !0x0), this.setBones(this.animation.mainLineKeys[_0x5648d1].boneRefs, _0x4d05a4), this.setObjects(this.animation.mainLineKeys[_0x5648d1].objectRefs, _0x4d05a4);
    },
    'update': function () {
      this.parent();
    },
    'draw': function () {
      this.parent();
      var _0x1ec59f = ig.system,
        _0x2d5098 = _0x1ec59f.context;
      _0x2d5098.save(), _0x2d5098.globalAlpha = this.opacity, this.clipCallback && (this.clipCallback.apply(this.clipCallbackContext, [_0x2d5098]), _0x2d5098.clip()), _0x2d5098.translate(_0x1ec59f.getDrawPos(this.pos.x), _0x1ec59f.getDrawPos(this.pos.y)), this.scale ? (0x1 != this.scale.x || 0x1 != this.scale.y) && _0x2d5098.scale(this.scale.x, this.scale.y) : (this.scale = {}, this.scale.x = 0x1, this.scale.y = 0x1), this.updateAnimation(), _0x2d5098.restore();
    },
    'updateAnimation': function () {
      if (this.nextTime < this.animation.length || this.animation.loopType === SpriterAnimationLooping.LOOPING) {
        if (-0x1 === this.keyIndex || this.time > this.nextTime) {
          this.keyIndex = (this.keyIndex + 0x1) % this.animation.mainLineKeys.length;
          if (this.time > this.animation.length) {
            if (this.animation.loopType === SpriterAnimationLooping.NO_LOOPING) {
              for (; 0x0 !== this.keyIndex;) this.getNextMainLineKeyTime(this.time), this.loadKeys(this.keyIndex), this.updateCharacter(), this.keyIndex = (this.keyIndex + 0x1) % this.animation.mainLineKeys.length;
              this.finished = !0x0;
              return;
            }
            this.keyIndex = this.time = 0x0;
          }
          this.getNextMainLineKeyTime(this.time), this.loadKeys(this.keyIndex);
        }
        this.updateCharacter(), !this.pause && !this.finished && (this.time += 0x3e8 * ig.system.tick * this.animationSpeed);
      } else this.time = this.animation.length, this.finished = !0x0, this.updateCharacter();
    },
    'updateCharacter': function () {
      for (var _0xf2b804 = 0x0; _0xf2b804 < this.bones.length; _0xf2b804++) {
        var _0x3f5d87 = this.bones[_0xf2b804];
        if (_0x3f5d87.on) {
          var _0x15464d = -0x1 === _0x3f5d87.parentId ? this.root : this.bones[_0x3f5d87.parentId].transformed;
          _0x3f5d87.tween(this.time), _0x3f5d87.update(_0x15464d);
        }
      }
      for (_0xf2b804 = 0x0; _0xf2b804 < this.objects.length; _0xf2b804++) _0x3f5d87 = this.objects[_0xf2b804], _0x3f5d87.on && (_0x15464d = -0x1 === _0x3f5d87.parentId ? this.root : this.bones[_0x3f5d87.parentId].transformed, _0x3f5d87.tween(this.time), _0x3f5d87.update(_0x15464d));
    }
  });
}), ig.baked = !0x0, ig.module('plugins.spriter.spriter-object').requires('plugins.spriter.spriter-bone').defines(function () {
  SpriterObject = SpriterBone.extend({
    'spriter': null,
    'sprite': null,
    'image': null,
    'degToRad': Math.PI / 0xb4,
    'init': function (_0x2a53bd) {
      this.parent(), this.spriter = _0x2a53bd;
    },
    'setOn': function (_0x4f3f93) {
      this.parent(_0x4f3f93);
    },
    'setKey': function (_0x23d4c5, _0x117e74, _0x13bfdf) {
      this.parent(_0x23d4c5, _0x117e74, _0x13bfdf), _0x117e74 = this.key, _0x23d4c5 = this.spriter.getFolderById(_0x117e74.folder), _0x117e74 = _0x23d4c5.getFileById(_0x117e74.file), _0x23d4c5 = this.spriter.path + _0x23d4c5.name + '/' + _0x117e74.name + '.png';
      if (null == this.image || this.image.path != _0x23d4c5) this.image = new ig.Image(_0x23d4c5);
    },
    'update': function (_0x1a67dd) {
      this.parent(_0x1a67dd), this.updateSprite();
    },
    'updateSprite': function () {
      var _0xb3395e = this.transformed,
        _0x38e87d = this.image;
      if (this.on && _0x38e87d) {
        var _0x58844f = ig.system,
          _0x42806b = _0x58844f.context,
          _0x3e0d14 = _0x38e87d.width,
          _0x514b99 = _0x38e87d.height;
        _0x42806b.save(), 0x1 > _0xb3395e.alpha && (_0x42806b.globalAlpha = _0xb3395e.alpha), _0x42806b.translate(_0x58844f.getDrawPos(_0xb3395e.x), _0x58844f.getDrawPos(_0xb3395e.y)), _0x42806b.rotate(_0xb3395e.angle * this.degToRad), _0x42806b.scale(_0xb3395e.scaleX, _0xb3395e.scaleY), _0x38e87d.path != this.imageKeyPath && (this.imageKey = null), this.imageKey || (this.imageKey = _0x38e87d.path.split('/').pop(), this.imageKeyPath = _0x38e87d.path);
        if (this.attachedImages && this.attachedImages[this.imageKey]) {
          var _0x58844f = this.attachedImages[this.imageKey],
            _0x2297ed = -_0x3e0d14 * _0xb3395e.pivotX,
            _0x4c7acb = -_0x514b99 * _0xb3395e.pivotY;
          _0x58844f.hideOriginal || _0x38e87d.draw(_0x2297ed, _0x4c7acb, 0x0, 0x0, _0x3e0d14, _0x514b99), _0x58844f.image.draw(_0x2297ed + _0x58844f.x, _0x4c7acb + _0x58844f.y);
        } else _0x38e87d.draw(-_0x3e0d14 * _0xb3395e.pivotX, -_0x514b99 * _0xb3395e.pivotY, 0x0, 0x0, _0x3e0d14, _0x514b99);
        _0x42806b.restore(), 0x1 > _0xb3395e.alpha && (_0x42806b.globalAlpha = 0x1);
      }
    }
  });
}), ig.baked = !0x0, ig.module('plugins.spriter.spriter').requires('impact.impact', 'plugins.spriter.structure.animation', 'plugins.spriter.structure.bone-timeline-key', 'plugins.spriter.structure.curve-type', 'plugins.spriter.structure.entity', 'plugins.spriter.structure.file', 'plugins.spriter.structure.folder', 'plugins.spriter.structure.main-line-key', 'plugins.spriter.structure.object-info', 'plugins.spriter.structure.object-timeline-key', 'plugins.spriter.structure.object-type', 'plugins.spriter.structure.ref', 'plugins.spriter.structure.spatial-info', 'plugins.spriter.structure.spatial-timeline-key', 'plugins.spriter.structure.timeline-key', 'plugins.spriter.structure.timeline', 'plugins.spriter.id-name-map', 'plugins.spriter.loader', 'plugins.spriter.scml', 'plugins.spriter.spriter-bone', 'plugins.spriter.spriter-display', 'plugins.spriter.spriter-object').defines(function () {
  Spriter = ig.Class.extend({
    'folders': null,
    'entities': null,
    'path': '',
    'init': function () {
      this.folders = new SpriterIdNameMap(), this.entities = new SpriterIdNameMap();
    },
    'addFolder': function (_0x49de31) {
      this.folders.add(_0x49de31, _0x49de31.id, _0x49de31.name);
    },
    'getFolderById': function (_0x55522c) {
      return this.folders.getById(_0x55522c);
    },
    'getFolderByName': function (_0x333fd5) {
      return this.folders.getByName(_0x333fd5);
    },
    'addEntity': function (_0x6aecd3) {
      this.entities.add(_0x6aecd3, _0x6aecd3.id, _0x6aecd3.name);
    },
    'getEntityById': function (_0x401554) {
      return this.entities.getById(_0x401554);
    },
    'getEntityByName': function (_0x5de6a2) {
      return this.entities.getByName(_0x5de6a2);
    }
  });
}), this.START_BRANDING_SPLASH, ig.baked = !0x0, ig.module('plugins.branding.splash').requires('impact.impact', 'impact.entity').defines(function () {
  ig.BrandingSplash = ig.Class.extend({
    'init': function () {
      ig.game.spawnEntity(EntityBranding, 0x0, 0x0), console.log("spawn branding");
    }
  }), EntityBranding = ig.Entity.extend({
    'autoUpdateScale': !0x1,
    'gravityFactor': 0x0,
    'size': {
      'x': 0x20,
      'y': 0x20
    },
    'splash': new ig.Image('branding/splash1.png'),
    'init': function (_0x21025f, _0x106b6d, _0x3e0f72) {
      this.parent(_0x21025f, _0x106b6d, _0x3e0f72), 0x140 >= ig.system.width ? (this.size.x = 0x140, this.size.y = 0xc8) : (this.size.x = 0x1e0, this.size.y = 0xf0), this.pos.x = (ig.system.width - this.size.x) / 0x2, this.pos.y = -this.size.y - 0xc8, this.endPosY = (ig.system.height - this.size.y) / 0x2, _0x21025f = this.tween({
        'pos': {
          'y': this.endPosY
        }
      }, 0.5, {
        'easing': ig.Tween.Easing.Bounce.EaseIn
      }), _0x106b6d = this.tween({}, 2.5, {
        'onComplete': function () {
          ig.game.director.loadLevel(ig.game.director.currentLevel);
        }
      }), _0x21025f.chain(_0x106b6d), _0x21025f.start(), this.currentAnim = this.anims.idle;
    },
    'createClickableLayer': function () {
      console.log("Build clickable layer"), this.checkClickableLayer('branding-splash', _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow);
    },
    'doesClickableLayerExist': function (_0x422e68) {
      for (k in dynamicClickableEntityDivs) if (k == _0x422e68) return !0x0;
      return !0x1;
    },
    'checkClickableLayer': function (_0x22f4fe, _0x30a071, _0x192bfe) {
      'undefined' == typeof wm && (this.doesClickableLayerExist(_0x22f4fe) ? (ig.game.showOverlay([_0x22f4fe]), $('#' + _0x22f4fe).find('[href]').attr('href', _0x30a071)) : this.createClickableOutboundLayer(_0x22f4fe, _0x30a071, 'media/graphics/misc/invisible.png', _0x192bfe));
    },
    'createClickableOutboundLayer': function (_0x14bae0, _0x448b79, _0x3cbc04, _0x15fb8c) {
      var _0x99cc2a = ig.$new('div');
      _0x99cc2a.id = _0x14bae0, document.body.appendChild(_0x99cc2a), _0x99cc2a = $('#' + _0x99cc2a.id), _0x99cc2a.css('float', 'left'), _0x99cc2a.css('position', 'absolute');
      if (ig.ua.mobile) {
        var _0x23f6eb = window.innerHeight / mobileHeight,
          _0x47c9b5 = window.innerWidth / mobileWidth;
        _0x99cc2a.css('left', this.pos.x * _0x47c9b5), _0x99cc2a.css('top', this.pos.y * _0x23f6eb), _0x99cc2a.css('width', this.size.x * _0x47c9b5), _0x99cc2a.css('height', this.size.y * _0x23f6eb);
      } else _0x23f6eb = w / 0x2 - destW / 0x2, _0x47c9b5 = h / 0x2 - destH / 0x2, console.log(_0x23f6eb, _0x47c9b5), _0x99cc2a.css('left', _0x23f6eb + this.pos.x * multiplier), _0x99cc2a.css('top', _0x47c9b5 + this.pos.y * multiplier), _0x99cc2a.css('width', this.size.x * multiplier), _0x99cc2a.css('height', this.size.y * multiplier);
      _0x15fb8c ? _0x99cc2a.html("<a target='_blank' href='" + _0x448b79 + "'><img style='width:100%;height:100%' src='" + _0x3cbc04 + "'></a>") : _0x99cc2a.html("<a href='" + _0x448b79 + "'><img style='width:100%;height:100%' src='" + _0x3cbc04 + "'></a>"), dynamicClickableEntityDivs[_0x14bae0] = {}, dynamicClickableEntityDivs[_0x14bae0].width = this.size.x * multiplier, dynamicClickableEntityDivs[_0x14bae0].height = this.size.y * multiplier, dynamicClickableEntityDivs[_0x14bae0].entity_pos_x = this.pos.x, dynamicClickableEntityDivs[_0x14bae0].entity_pos_y = this.pos.y;
    },
    'draw': function () {
      ig.system.context.fillStyle = '#ffffff', ig.system.context.fillRect(0x0, 0x0, ig.system.width, ig.system.height), ig.system.context.fillStyle = '#000', ig.system.context.font = "12px Arial", ig.system.context.textAlign = 'left', 0x140 >= ig.system.width ? ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 0x96, ig.system.height - 0xf) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 0xa0, ig.system.height - 0xf), this.parent(), this.splash && ig.system.context.drawImage(this.splash.data, 0x0, 0x0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
  });
}), this.END_BRANDING_SPLASH, ig.baked = !0x0, ig.module('plugins.scale').requires('impact.entity').defines(function () {
  ig.Entity.inject({
    'scale': {
      'x': 0x1,
      'y': 0x1
    },
    '_offset': {
      'x': 0x0,
      'y': 0x0
    },
    '_scale': {
      'x': 0x1,
      'y': 0x1
    },
    '_size': {
      'x': 0x0,
      'y': 0x0
    },
    'init': function (_0x58441d, _0xb094cf, _0xafb938) {
      this.parent(_0x58441d, _0xb094cf, _0xafb938), this._offset.x = this.offset.x, this._offset.y = this.offset.y, this._size.x = this.size.x, this._size.y = this.size.y, this.setScale(this.scale.x, this.scale.y);
    },
    'draw': function () {
      var _0x515f5a = ig.system.context;
      _0x515f5a.save(), _0x515f5a.translate(ig.system.getDrawPos(this.pos.x.round() - this.offset.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y.round() - this.offset.y - ig.game.screen.y)), _0x515f5a.scale(this._scale.x, this._scale.y), null != this.currentAnim && this.currentAnim.draw(0x0, 0x0), _0x515f5a.restore();
    },
    'setScale': function (_0x254a83, _0x25c0b8) {
      var _0x5c92cd = this.size.x,
        _0x452c5d = this.size.y;
      this.scale.x = _0x254a83 || this.scale.x, this.scale.y = _0x25c0b8 || this.scale.y, this._scale.x = this.scale.x / ig.system.scale, this._scale.y = this.scale.y / ig.system.scale, this.offset.x = this._offset.x * this._scale.x, this.offset.y = this._offset.y * this._scale.y, this.size.x = this._size.x * this._scale.x, this.size.y = this._size.y * this._scale.y, this.pos.x += (_0x5c92cd - this.size.x) / 0x2, this.pos.y += (_0x452c5d - this.size.y) / 0x2;
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.ui').requires('impact.entity', 'impact.impact', 'plugins.scale', 'plugins.responsive.responsive-plugin').defines(function () {
  EntityUI = ig.Entity.extend({
    'update': function () {
      if (this.scale.x != this._scale.x || this.scale.y != this._scale.y) this.setScale(this.scale.x, this.scale.y, '' != this.anchorType || 'none' != this.anchorType);
      this.parent();
    },
    'setScale': function (_0x226e04, _0x218288, _0x51b55c) {
      if (_0x51b55c) {
        _0x51b55c = this.size.x;
        var _0xb1a8f0 = this.size.y;
        this.scale.x = _0x226e04 || this.scale.x, this.scale.y = _0x218288 || this.scale.y, this._scale.x = this.scale.x / ig.system.scale, this._scale.y = this.scale.y / ig.system.scale, this.offset.x = this._offset.x * this._scale.x, this.offset.y = this._offset.y * this._scale.y, this.size.x = this._size.x * this._scale.x, this.size.y = this._size.y * this._scale.y, this.anchoredPositionX += (_0x51b55c - this.size.x) / 0x2, this.anchoredPositionY += (_0xb1a8f0 - this.size.y) / 0x2;
      } else _0x51b55c = this.size.x, _0xb1a8f0 = this.size.y, this.scale.x = _0x226e04 || this.scale.x, this.scale.y = _0x218288 || this.scale.y, this._scale.x = this.scale.x / ig.system.scale, this._scale.y = this.scale.y / ig.system.scale, this.offset.x = this._offset.x * this._scale.x, this.offset.y = this._offset.y * this._scale.y, this.size.x = this._size.x * this._scale.x, this.size.y = this._size.y * this._scale.y, this.pos.x += (_0x51b55c - this.size.x) / 0x2, this.pos.y += (_0xb1a8f0 - this.size.y) / 0x2;
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button').requires('game.entities.ui', 'plugins.data.vector').defines(function () {
  EntityButton = EntityUI.extend({
    'collides': ig.Entity.COLLIDES.NEVER,
    'type': ig.Entity.TYPE.A,
    'size': new Vector2(0x30, 0x30),
    'fillColor': null,
    'zIndex': 0x17318,
    'enabled': !0x0,
    'parentObj': null,
    'noAudio': !0x1,
    'init': function (_0x50c64d, _0x225b3d, _0x1bd62f) {
      this.parent(_0x50c64d, _0x225b3d, _0x1bd62f), !ig.global.wm && !isNaN(_0x1bd62f.zIndex) && (this.zIndex = _0x1bd62f.zIndex), _0x50c64d = Math.floor(0x100 * Math.random()), _0x225b3d = Math.floor(0x100 * Math.random()), _0x1bd62f = Math.floor(0x100 * Math.random()), this.fillColor = 'rgba(' + _0x50c64d + ',' + _0x1bd62f + ',' + _0x225b3d + ',1)', this.animSheet && this.addAnim('idle', 0.1, [0x0], !0x0);
    },
    'clicked': function () {
      this.enabled && !(null != this.parentObj && this.parentObj.isTweening) && (this._tempPosY = this.anchoredPositionY, this.anchoredPositionY += 0xa);
    },
    'clicking': function () {},
    'released': function () {
      this.enabled && !(null != this.parentObj && this.parentObj.isTweening) && (this.noAudio || ig.soundHandler.sfxPlayer.play('tap' + Math.randRange(0x0, 0x1)), 'number' == typeof this._tempPosY && (this.anchoredPositionY = this._tempPosY));
    },
    'over': function () {
      this.enabled && !(null != this.parentObj && this.parentObj.isTweening) && (this._tempPosY = this.anchoredPositionY);
    },
    'leave': function () {
      this.enabled && !(null != this.parentObj && this.parentObj.isTweening) && 'number' == typeof this._tempPosY && (this.anchoredPositionY = this._tempPosY);
    }
  });
}), ig.baked = !0x0, ig.module('plugins.clickable-div-layer').requires('plugins.data.vector').defines(function () {
  ClickableDivLayer = ig.Class.extend({
    'version': '1.0.0',
    'pos': new Vector2(0x0, 0x0),
    'size': new Vector2(0x0, 0x0),
    'identifier': null,
    'invisImagePath': 'media/graphics/misc/invisible.png',
    'init': function (_0xf26915) {
      this.pos = new Vector2(_0xf26915.pos.x, _0xf26915.pos.y), this.size = new Vector2(_0xf26915.size.x, _0xf26915.size.y);
      var _0x3c4f4c = 'more-games',
        _0x46f84e = 'https://www.marketjs.com',
        _0x2970c3 = !0x1;
      _0xf26915.div_layer_name && (_0x3c4f4c = _0xf26915.div_layer_name), _0xf26915.link && (_0x46f84e = _0xf26915.link), _0xf26915.newWindow && (_0x2970c3 = _0xf26915.newWindow), this.createClickableLayer(_0x3c4f4c, _0x46f84e, _0x2970c3);
    },
    'createClickableLayer': function (_0x45365d, _0x51d83d, _0xf85277) {
      this.identifier = _0x45365d;
      var _0x15b5af = ig.domHandler.getElementById('#' + _0x45365d);
      _0x15b5af ? (ig.domHandler.show(_0x15b5af), ig.domHandler.attr(_0x15b5af, 'href', _0x51d83d)) : this.createClickableOutboundLayer(_0x45365d, _0x51d83d, this.invisImagePath, _0xf85277);
    },
    'update': function (_0x4bf2d1, _0x42c032, _0x38ac72, _0x53cd1c) {
      this.pos.x === _0x4bf2d1 && this.pos.y === _0x42c032 && this.size.x === _0x38ac72 && this.size.y === _0x53cd1c || (this.pos.x = _0x4bf2d1, this.pos.y = _0x42c032, this.size.x = _0x38ac72, this.size.y = _0x53cd1c, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {}, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_x = this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_y = this.pos.y, _0x4bf2d1 = ig.domHandler.getElementById('#' + this.identifier), this.updateCSS(_0x4bf2d1));
    },
    'createClickableOutboundLayer': function (_0xe28604, _0x4ed87d, _0xda5f2f, _0xec5cb7) {
      var _0x15bc9a = ig.domHandler.create('div');
      ig.domHandler.attr(_0x15bc9a, 'id', _0xe28604);
      var _0x23aefd = ig.domHandler.create('a');
      ig.domHandler.addEvent(_0x15bc9a, 'mousedown', function (_0x2e952b) {
        _0x2e952b.preventDefault();
      }), _0xec5cb7 ? (ig.domHandler.attr(_0x23aefd, 'href', _0x4ed87d), ig.domHandler.attr(_0x23aefd, 'target', '_blank')) : ig.domHandler.attr(_0x23aefd, 'href', _0x4ed87d), _0x4ed87d = ig.domHandler.create('img'), ig.domHandler.css(_0x4ed87d, {
        'width': '100%',
        'height': '100%'
      }), ig.domHandler.attr(_0x4ed87d, 'src', _0xda5f2f), ig.domHandler.addEvent(_0x15bc9a, 'mousemove', ig.input.mousemove.bind(ig.input), !0x1), ig.domHandler.appendChild(_0x23aefd, _0x4ed87d), ig.domHandler.appendChild(_0x15bc9a, _0x23aefd), ig.domHandler.appendToBody(_0x15bc9a), ig.sizeHandler.dynamicClickableEntityDivs[_0xe28604] = {}, ig.sizeHandler.dynamicClickableEntityDivs[_0xe28604].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[_0xe28604].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[_0xe28604].entity_pos_x = this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[_0xe28604].entity_pos_y = this.pos.y, this.updateCSS(_0x15bc9a);
    },
    'updateCSS': function (_0x44c478) {
      var _0x321aa0 = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
      if (ig.ua.mobile) {
        var _0x550b3d = ig.domHandler.getElementById('#canvas'),
          _0x34f750 = ig.domHandler.getOffsets(_0x550b3d),
          _0x550b3d = _0x34f750.left,
          _0x34f750 = _0x34f750.top;
        if (ig.sizeHandler.disableStretchToFitOnMobileFlag) var _0x550b3d = Math.floor(_0x550b3d + this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + 'px',
          _0x34f750 = Math.floor(_0x34f750 + this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + 'px',
          _0x1f89d0 = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + 'px',
          _0x321aa0 = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + 'px';else _0x550b3d = Math.floor(this.pos.x * ig.sizeHandler.sizeRatio.x) + 'px', _0x34f750 = Math.floor(this.pos.y * ig.sizeHandler.sizeRatio.y) + 'px', _0x1f89d0 = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + 'px', _0x321aa0 = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + 'px';
      } else _0x550b3d = ig.domHandler.getElementById('#canvas'), _0x34f750 = ig.domHandler.getOffsets(_0x550b3d), _0x550b3d = _0x34f750.left, _0x34f750 = _0x34f750.top, ig.sizeHandler.enableStretchToFitOnDesktopFlag ? (_0x550b3d = Math.floor(_0x550b3d + this.pos.x * ig.sizeHandler.sizeRatio.x) + 'px', _0x34f750 = Math.floor(_0x34f750 + this.pos.y * ig.sizeHandler.sizeRatio.y) + 'px', _0x1f89d0 = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + 'px', _0x321aa0 = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + 'px') : (_0x550b3d = Math.floor(_0x550b3d + this.pos.x * _0x321aa0) + 'px', _0x34f750 = Math.floor(_0x34f750 + this.pos.y * _0x321aa0) + 'px', _0x1f89d0 = Math.floor(this.size.x * _0x321aa0) + 'px', _0x321aa0 = Math.floor(this.size.y * _0x321aa0) + 'px');
      ig.domHandler.css(_0x44c478, {
        'float': 'left',
        'position': 'absolute',
        'left': _0x550b3d,
        'top': _0x34f750,
        'width': _0x1f89d0,
        'height': _0x321aa0,
        'z-index': 0x3
      });
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-branding-logo').requires('game.entities.buttons.button', 'plugins.clickable-div-layer').defines(function () {
  EntityButtonBrandingLogo = EntityButton.extend({
    'type': ig.Entity.TYPE.A,
    'gravityFactor': 0x0,
    'logo': new ig.AnimationSheet('branding/logo.png', _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
    'zIndex': 0x2711,
    'size': {
      'x': 0x40,
      'y': 0x42
    },
    'clickableLayer': null,
    'link': null,
    'newWindow': !0x1,
    'div_layer_name': 'branding-logo',
    'name': 'brandinglogo',
    'init': function (_0x214d2f, _0x94bfc7, _0x395417) {
      this.parent(_0x214d2f, _0x94bfc7, _0x395417);
      if (!ig.global.wm) {
        if ('undefined' == typeof wm) {
          if (_SETTINGS.Branding.Logo.Enabled) this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, this.anims.idle = new ig.Animation(this.logo, 0x0, [0x0], !0x0), this.currentAnim = this.anims.idle, _0x395417 && _0x395417.centralize && (this.pos.x = ig.system.width / 0x2 - this.size.x / 0x2, console.log("centralize true ... centering branded logo ...")), _SETTINGS.Branding.Logo.LinkEnabled && (this.link = _SETTINGS.Branding.Logo.Link, this.newWindow = _SETTINGS.Branding.Logo.NewWindow, this.clickableLayer = new ClickableDivLayer(this));else {
            this.kill();
            return;
          }
        }
        this.div_layer_name = _0x395417.div_layer_name ? _0x395417.div_layer_name : 'branding-logo';
      }
    },
    'show': function () {
      var _0x430264 = ig.domHandler.getElementById('#' + this.div_layer_name);
      ig.domHandler.show(_0x430264);
    },
    'hide': function () {
      var _0x24fcb6 = ig.domHandler.getElementById('#' + this.div_layer_name);
      ig.domHandler.hide(_0x24fcb6);
    },
    'clicked': function () {},
    'clicking': function () {},
    'released': function () {}
  });
}), ig.baked = !0x0, ig.module('game.entities.branding-logo-placeholder').requires('impact.entity', 'game.entities.buttons.button-branding-logo').defines(function () {
  EntityBrandingLogoPlaceholder = ig.Entity.extend({
    'gravityFactor': 0x0,
    'size': {
      'x': 0x20,
      'y': 0x20
    },
    '_wmDrawBox': !0x0,
    '_wmBoxColor': "rgba(0, 0, 255, 0.7)",
    'init': function (_0x2193c2, _0x161108, _0x404be7) {
      this.parent(_0x2193c2, _0x161108, _0x404be7);
      if (_0x404be7) switch (console.log("settings found ... using that div layer name"), _0x2193c2 = _0x404be7.div_layer_name, console.log('settings.centralize:', _0x404be7.centralize), _0x404be7.centralize) {
        case 'true':
          console.log("centralize true"), centralize = !0x0;
          break;
        case 'false':
          console.log("centralize false"), centralize = !0x1;
          break;
        default:
          console.log("default ... centralize false"), centralize = !0x1;
      } else _0x2193c2 = 'branding-logo', centralize = !0x1;
      if ('undefined' == typeof wm) {
        if (_SETTINGS.Branding.Logo.Enabled) try {
          ig.game.spawnEntity(EntityButtonBrandingLogo, this.pos.x, this.pos.y, {
            'div_layer_name': _0x2193c2,
            'centralize': centralize
          });
        } catch (_0x5af912) {
          console.log(_0x5af912);
        }
        this.kill();
      }
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-more-games').requires('game.entities.buttons.button', 'plugins.clickable-div-layer').defines(function () {
  EntityButtonMoreGames = EntityButton.extend({
    'type': ig.Entity.TYPE.A,
    'gravityFactor': 0x0,
    'logo': new ig.AnimationSheet('media/graphics/sprites/button-more-games.png', 0xa0, 0xa0),
    'size': {
      'x': 0xa0,
      'y': 0xa0
    },
    'zIndex': 0x64,
    'clickableLayer': null,
    'link': null,
    'newWindow': !0x1,
    'div_layer_name': 'more-games',
    'name': 'moregames',
    'init': function (_0x3b5b31, _0x4654ca, _0x4cafa7) {
      this.parent(_0x3b5b31, _0x4654ca, _0x4cafa7), ig.global.wm || (this.div_layer_name = _0x4cafa7.div_layer_name ? _0x4cafa7.div_layer_name : 'more-games', _SETTINGS.MoreGames.Enabled ? (this.anims.idle = new ig.Animation(this.logo, 0x0, [0x0], !0x0), this.currentAnim = this.anims.idle, _SETTINGS.MoreGames.Link && (this.link = _SETTINGS.MoreGames.Link), _SETTINGS.MoreGames.NewWindow && (this.newWindow = _SETTINGS.MoreGames.NewWindow), this.clickableLayer = new ClickableDivLayer(this)) : this.kill());
    },
    'show': function () {
      var _0x3bf253 = ig.domHandler.getElementById('#' + this.div_layer_name);
      _0x3bf253 && ig.domHandler.show(_0x3bf253);
    },
    'hide': function () {
      var _0x1e1f11 = ig.domHandler.getElementById('#' + this.div_layer_name);
      _0x1e1f11 && ig.domHandler.hide(_0x1e1f11);
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.pointer').requires('impact.entity').defines(function () {
  EntityPointer = ig.Entity.extend({
    'checkAgainst': ig.Entity.TYPE.BOTH,
    'size': new Vector2(0x1, 0x1),
    'isFirstPressed': !0x1,
    'isPressed': !0x1,
    'isReleased': !0x1,
    'isHovering': !0x1,
    'hoveringItem': null,
    'objectArray': [],
    'clickedObjectList': [],
    'ignorePause': !0x0,
    'zIndex': 0x157c,
    'check': function (_0x3a75b3) {
      this.objectArray.push(_0x3a75b3);
    },
    'clickObject': function (_0x12d895) {
      this.isFirstPressed && 'function' == typeof _0x12d895.clicked && (_0x12d895.clicked(), this.addToClickedObjectList(_0x12d895)), this.isPressed && !this.isReleased && 'function' == typeof _0x12d895.clicking && _0x12d895.clicking(), this.isReleased && 'function' == typeof _0x12d895.released && (_0x12d895.released(), this.removeFromClickedObjectList(_0x12d895));
    },
    'refreshPos': function () {
      this.pos = ig.game.io.getClickPos();
    },
    'update': function () {
      this.parent(), this.refreshPos();
      var _0xc44b6e = null,
        _0x1e71e3 = -0x1;
      for (a = this.objectArray.length - 0x1; -0x1 < a; a--) this.objectArray[a].zIndex > _0x1e71e3 && (_0x1e71e3 = this.objectArray[a].zIndex, _0xc44b6e = this.objectArray[a]);
      if (null != _0xc44b6e) null != this.hoveringItem ? this.hoveringItem != _0xc44b6e && ('function' == typeof this.hoveringItem.leave && this.hoveringItem.leave(), 'function' == typeof _0xc44b6e.over && _0xc44b6e.over()) : 'function' == typeof _0xc44b6e.over && _0xc44b6e.over(), this.hoveringItem = _0xc44b6e, this.clickObject(_0xc44b6e), this.objectArray = [];else {
        if (null != this.hoveringItem && 'function' == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem = null), this.isReleased) {
          for (_0xc44b6e = 0x0; _0xc44b6e < this.clickedObjectList.length; _0xc44b6e++) _0x1e71e3 = this.clickedObjectList[_0xc44b6e], 'function' == typeof _0x1e71e3.releasedOutside && _0x1e71e3.releasedOutside();
          this.clickedObjectList = [];
        }
      }
      this.isFirstPressed = ig.input.pressed('click'), this.isReleased = ig.input.released('click'), this.isPressed = ig.input.state('click');
    },
    'addToClickedObjectList': function (_0x4935f5) {
      this.clickedObjectList.push(_0x4935f5);
    },
    'removeFromClickedObjectList': function (_0x1b233e) {
      for (var _0x24b019 = [], _0x41acda = 0x0; _0x41acda < this.clickedObjectList.length; _0x41acda++) {
        var _0x4712a7 = this.clickedObjectList[_0x41acda];
        _0x4712a7 != _0x1b233e && _0x24b019.push(_0x4712a7);
      }
      this.clickedObjectList = _0x24b019;
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.pointer-selector').requires('game.entities.pointer').defines(function () {
  EntityPointerSelector = EntityPointer.extend({
    'zIndex': 0x3e8,
    '_wmDrawBox': !0x0,
    '_wmBoxColor': "rgba(0, 0, 255, 0.7)",
    'size': {
      'x': 0x14,
      'y': 0x14
    },
    'init': function (_0x4ef4b7, _0x2f4826, _0x5a3611) {
      this.parent(_0x4ef4b7, _0x2f4826, _0x5a3611);
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.select').requires('impact.entity').defines(function () {
  EntitySelect = ig.Entity.extend({
    'type': ig.Entity.TYPE.B,
    'checkAgainst': ig.Entity.TYPE.A,
    'collides': ig.Entity.COLLIDES.NEVER,
    'canSelect': !0x1,
    'canSelectTimerDuration': 0.35,
    'zIndex': 0x1869f,
    'isHovering': !0x1,
    'isSelected': !0x1,
    'init': function (_0x2b0391, _0x5c52f3, _0x140f70) {
      this.parent(_0x2b0391, _0x5c52f3, _0x140f70), this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration);
    },
    'doesClickableLayerExist': function (_0x292c3d) {
      for (k in dynamicClickableEntityDivs) if (k == _0x292c3d) return !0x0;
      return !0x1;
    },
    'checkClickableLayer': function (_0x80300c, _0x13d46a, _0x4ba647) {
      'undefined' == typeof wm && (this.doesClickableLayerExist(_0x80300c) ? (ig.game.showOverlay([_0x80300c]), $('#' + _0x80300c).find('[href]').attr('href', _0x13d46a)) : this.createClickableOutboundLayer(_0x80300c, _0x13d46a, 'media/graphics/misc/invisible.png', _0x4ba647));
    },
    'createClickableOutboundLayer': function (_0x211ddf, _0x3503b9, _0x4efb32, _0x4e2723) {
      var _0xdb9fa0 = ig.$new('div');
      _0xdb9fa0.id = _0x211ddf, document.body.appendChild(_0xdb9fa0), $('#' + _0xdb9fa0.id).css('float', 'left'), $('#' + _0xdb9fa0.id).css('width', this.size.x * multiplier), $('#' + _0xdb9fa0.id).css('height', this.size.y * multiplier), $('#' + _0xdb9fa0.id).css('position', 'absolute');
      var _0x11fa05 = w / 0x2 - destW / 0x2,
        _0x41289c = h / 0x2 - destH / 0x2;
      w == mobileWidth ? ($('#' + _0xdb9fa0.id).css('left', this.pos.x), $('#' + _0xdb9fa0.id).css('top', this.pos.y)) : ($('#' + _0xdb9fa0.id).css('left', _0x11fa05 + this.pos.x * multiplier), $('#' + _0xdb9fa0.id).css('top', _0x41289c + this.pos.y * multiplier)), _0x4e2723 ? $('#' + _0xdb9fa0.id).html("<a target='_blank' href='" + _0x3503b9 + "'><img style='width:100%;height:100%' src='" + _0x4efb32 + "'></a>") : $('#' + _0xdb9fa0.id).html("<a href='" + _0x3503b9 + "'><img style='width:100%;height:100%' src='" + _0x4efb32 + "'></a>"), dynamicClickableEntityDivs[_0x211ddf] = {}, dynamicClickableEntityDivs[_0x211ddf].width = $('#' + _0xdb9fa0.id).width(), dynamicClickableEntityDivs[_0x211ddf].height = $('#' + _0xdb9fa0.id).height(), dynamicClickableEntityDivs[_0x211ddf].entity_pos_x = this.pos.x, dynamicClickableEntityDivs[_0x211ddf].entity_pos_y = this.pos.y;
    },
    'hovered': function () {
      this.isHovering = !0x0, this.dehoverOthers();
    },
    'dehoverOthers': function () {
      var _0x142cdd = ig.game.getEntitiesByType(EntitySelect);
      for (i = 0x0; i < _0x142cdd.length; i++) _0x142cdd[i] != this && (_0x142cdd[i].isHovering = !0x1);
    },
    'deselectOthers': function () {
      var _0x57a4db = ig.game.getEntitiesByType(EntitySelect);
      for (i = 0x0; i < _0x57a4db.length; i++) _0x57a4db[i] != this && (_0x57a4db[i].isSelected = !0x1);
    },
    'update': function () {
      this.parent(), this.canSelectTimer && 0x0 < this.canSelectTimer.delta() && (this.canSelect = !0x0, this.canSelectTimer = null);
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.collision').requires('impact.entity').defines(function () {
  EntityCollision = ig.Entity.extend({
    'active': !0x1,
    'animSheet': new ig.AnimationSheet('media/graphics/sprites/hit.png', 0x100, 0x112),
    'collideOnce': !0x0,
    'colliding': !0x1,
    'collisionCallback': null,
    'collideEffect': null,
    'collideEffectEnabled': !0x0,
    'ignoreSiblings': !0x0,
    'parentObj': null,
    'showBounds': !0x1,
    'boundColor': '#EEEEEE',
    'zIndex': 0xcd,
    'init': function (_0x58fb92, _0x33e1c2, _0x1d4448) {
      this.parent(_0x58fb92, _0x33e1c2, _0x1d4448), this._initPos = {
        'x': this.pos.x,
        'y': this.pos.y
      }, null == this.parentObj && (console.warn("Collision shape has no parent."), this.kill()), (this.type == ig.Entity.TYPE.NONE || this.checkAgainst == ig.Entity.TYPE.NONE) && console.warn("Collision shape by " + this.parentObj.name + " is not checking collisions against anything.");
    },
    'check': function (_0x153448) {
      if (!this.active || this.ignoreSiblings && _0x153448.parentObj == this.parentObj || 'undefined' == typeof _0x153448) return this.colliding = !0x1;
      return this.collideOnce && (this.active = !0x1), null != this.collisionCallback && this.collisionCallback(_0x153448), this.colliding = !0x0;
    },
    'draw': function () {
      this.pos.x = this._initPos.x + this.parentObj.pos.x, this.pos.y = this._initPos.y + this.parentObj.pos.y, this.currentAnim && this.currentAnim.draw(this.pos.x - 0x80, this.pos.y - 0x89);
    },
    'showEffect': function () {
      this.collideEffectEnabled && (this.animSheet ? (this.collideEffect || (this.currentAnim = this.collideEffect = new ig.Animation(this.animSheet, 0.1, [0x0, 0x1, 0x2, 0x3], !0x0)), this.currentAnim.gotoFrame(0x0)) : console.warn("MAKE SURE animSheet IS NOT NULL."));
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.opening-marketjs-logo').requires('impact.entity').defines(function () {
  EntityOpeningMarketjsLogo = ig.Entity.extend({
    'objects': [],
    'letterM': null,
    'logoShield': null,
    'text': null,
    'localTweens': [],
    'logoOriX': 0x0,
    'logoOriY': 0x0,
    'textOriX': 0x0,
    'textOriY': 0x0,
    'logoCanvas': null,
    'init': function (_0x2a6bc8, _0x992c3c, _0x31f064) {
      this.parent(_0x2a6bc8, _0x992c3c, _0x31f064), console.log("Opening v1.0.4"), logoSize = 0x94 / 0x3c0 * Math.min(ig.system.width, ig.system.height), this.logoCacheSize = Math.round(0x2 * logoSize), this.text = this.addObject('drawText', 0x0, 0x0, logoSize, logoSize), this.cover = this.addObject('drawCover', 0x0, 0x0, logoSize, logoSize), this.logoShield = this.addObject('drawLogoShield', 0x0, 0x0, logoSize, logoSize), this.letterM = this.addObject('drawLetterM', 0x0, 0x0, logoSize, logoSize), this.logoOriX = 0x0 - 2.2 * logoSize, this.logoOriY = 0x0, this.textOriX = 0x0 - 1.378 * logoSize, this.textOriY = 0x0 - 0.5 * logoSize, this.logoShield.x = 0x0, this.logoShield.y = 0x0, this.logoShield.scaleX = 0x0, this.logoShield.scaleY = 0x0, this.logoShield.alpha = 0x0, this.letterM.x = this.logoShield.x, this.letterM.y = this.logoShield.y, this.letterM.scaleX = 0x0, this.letterM.scaleY = 0x0, this.letterM.alpha = 0x0, this.text.x = 4.6 * -logoSize, this.text.y = this.textOriY, this.cover.x = this.logoShield.x, this.cover.y = 0x0, this.addLocalDelayedCall(0.6, function () {
        this.addLocalTweenTo(this.logoShield, {
          'scaleX': 0x2,
          'scaleY': 0x2
        }, 0.5, this.backOut), this.addLocalTweenTo(this.logoShield, {
          'alpha': 0x1
        }, 0.2, this.quadOut), ig.soundHandler.sfxPlayer.play('logosplash1'), this.addLocalDelayedCall(0.4, function () {
          this.addLocalTweenTo(this.letterM, {
            'scaleX': 0x2,
            'scaleY': 0x2
          }, 0.5, this.backOut), this.addLocalTweenTo(this.letterM, {
            'alpha': 0x1
          }, 0.2, this.quadOut), ig.soundHandler.sfxPlayer.play('logosplash1'), this.addLocalDelayedCall(0.2, function () {
            ig.soundHandler.sfxPlayer.play('logosplash2');
          }.bind(this)), this.addLocalDelayedCall(0.6, function () {
            this.addLocalTweenTo(this.logoShield, {
              'scaleX': 0x1,
              'scaleY': 0x1
            }, 0.4, this.quartOut), this.addLocalTweenTo(this.logoShield, {
              'x': this.logoOriX,
              'y': this.logoOriY
            }, 0.4, this.quadOut), this.addLocalTweenTo(this.letterM, {
              'scaleX': 0x1,
              'scaleY': 0x1
            }, 0.4, this.quartOut), this.addLocalTweenTo(this.letterM, {
              'x': this.logoOriX,
              'y': this.logoOriY
            }, 0.4, this.quadOut), this.addLocalTweenTo(this.text, {
              'x': this.textOriX
            }, 0.8, this.backOut), this.addLocalDelayedCall(0x2, function () {
              this.addLocalTweenTo(this.logoShield, {
                'alpha': 0x0
              }, 0.6, this.quadOut), this.addLocalTweenTo(this.text, {
                'alpha': 0x0
              }, 0.6, this.quadOut), this.addLocalDelayedCall(1.3, function () {
                this.playBgm(), ig.game.director.nextLevel();
              }.bind(this));
            }.bind(this));
          }.bind(this));
        }.bind(this));
      }.bind(this));
    },
    'addObject': function (_0x5ec867, _0x2e14db, _0x974735, _0x5411ae, _0x5d8808) {
      return _0x5ec867 = {
        'x': _0x2e14db,
        'y': _0x974735,
        'width': _0x5411ae,
        'height': _0x5d8808,
        'scaleX': 0x1,
        'scaleY': 0x1,
        'alpha': 0x1,
        'drawFunctionName': _0x5ec867
      }, this.objects.push(_0x5ec867), _0x5ec867;
    },
    'update': function () {
      this.parent();
      if (!ig.wm) {
        this.unlockWebAudio();
        var _0x2ec01b = ig.system.tick;
        _0x2ec01b > 0x1 / 0x3c && (_0x2ec01b = 0x1 / 0x3c), this.updateLocalTween(_0x2ec01b), this.cover.x = this.logoShield.x, _SETTINGS.DeveloperBranding.Splash.Enabled || (this.playBgm(), ig.game.director.nextLevel(), this.kill());
      }
    },
    'playBgm': function () {
      ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.background);
    },
    'unlockWebAudio': function () {
      if (ig.input.released('click')) try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x12c22f) {}
    },
    'addLocalDelayedCall': function (_0x1a3304, _0x4e25c5) {
      this.addLocalTweenTo(null, {}, _0x1a3304, this.easeNone, 0x0, _0x4e25c5);
    },
    'addLocalTweenTo': function (_0xdd9c14, _0x325245, _0x250380, _0x80a8c8, _0x2ab8b7, _0x264d61) {
      'undefined' == typeof _0x2ab8b7 && (_0x2ab8b7 = 0x0), 'undefined' == typeof _0x80a8c8 && (_0x80a8c8 = this.easeNone), 'undefined' == typeof _0x264d61 && (_0x264d61 = null), _0x250380 = {
        'obj': _0xdd9c14,
        'endProperties': _0x325245,
        'duration': _0x250380,
        'easing': _0x80a8c8,
        'delay': _0x2ab8b7,
        'elapsed': 0x0,
        'deltaProperties': {},
        'startProperties': {},
        'onComplete': _0x264d61
      };
      for (var _0x1b3aec in _0x325245) Object.hasOwnProperty.call(_0x325245, _0x1b3aec) && (_0x250380.startProperties[_0x1b3aec] = _0xdd9c14[_0x1b3aec], _0x250380.deltaProperties[_0x1b3aec] = _0x325245[_0x1b3aec] - _0xdd9c14[_0x1b3aec]);
      this.localTweens.push(_0x250380);
    },
    'updateLocalTween': function (_0x47e34d) {
      for (var _0x2668f4 = 0x0; _0x2668f4 < this.localTweens.length; _0x2668f4++) {
        var _0x10be94 = this.localTweens[_0x2668f4];
        if (0x0 < _0x10be94.delay) _0x10be94.delay -= _0x47e34d;else {
          _0x10be94.elapsed += _0x47e34d;
          for (var _0xc000db in _0x10be94.deltaProperties) if (Object.hasOwnProperty.call(_0x10be94.deltaProperties, _0xc000db)) {
            var _0x51efc7 = _0x10be94.deltaProperties[_0xc000db],
              _0xdbac62 = _0x10be94.startProperties[_0xc000db],
              _0x369707 = _0x10be94.easing,
              _0x5b1006 = _0x10be94.elapsed / _0x10be94.duration;
            0x1 < _0x5b1006 && (_0x5b1006 = 0x1), _0x5b1006 = _0x369707(_0x5b1006), _0x10be94.obj[_0xc000db] = _0xdbac62 + _0x51efc7 * _0x5b1006;
          }
          if (_0x10be94.elapsed >= _0x10be94.duration && (this.localTweens.splice(_0x2668f4, 0x1), _0x2668f4--, _0x10be94.onComplete)) _0x10be94.onComplete();
        }
      }
    },
    'quadOut': function (_0x73abea) {
      return -_0x73abea * (_0x73abea - 0x2);
    },
    'quartOut': function (_0x3e1eb8) {
      return -(--_0x3e1eb8 * _0x3e1eb8 * _0x3e1eb8 * _0x3e1eb8 - 0x1);
    },
    'backOut': function (_0x654fa4) {
      return (_0x654fa4 -= 0x1) * _0x654fa4 * (2.70158 * _0x654fa4 + 1.70158) + 0x1;
    },
    'easeNone': function (_0x2f8924) {
      return _0x2f8924;
    },
    'draw': function () {
      this.parent();
      if (!ig.global.wm) {
        var _0x28ab36 = ig.system.context;
        _0x28ab36.fillStyle = '#ffffff', _0x28ab36.fillRect(0x0, 0x0, ig.system.width, ig.system.height);
        for (_0x28ab36 = 0x0; _0x28ab36 < this.objects.length; _0x28ab36++) {
          var _0x1ab19f = this.objects[_0x28ab36];
          0x1 < _0x1ab19f.alpha && (_0x1ab19f.alpha = 0x1);
          if (0x0 != _0x1ab19f.scaleX && 0x0 != _0x1ab19f.scaleY && 0x0 < _0x1ab19f.alpha) this[_0x1ab19f.drawFunctionName](_0x1ab19f);
        }
      }
    },
    'drawLogoShield': function (_0x21444c) {
      if (!this.logoCanvas) {
        this.logoCanvas = ig.$new('canvas'), this.logoCanvas.width = this.logoCacheSize, this.logoCanvas.height = this.logoCacheSize;
        var _0xc0f91a = this.logoCanvas.getContext('2d'),
          _0x3ab8cc = this.logoCacheSize,
          _0x1a66ab = this.logoCacheSize,
          _0x23e6eb = 0x0,
          _0x3e6754 = 0x0;
        _0xc0f91a.clearRect(0x0, 0x0, this.logoCanvas.width, this.logoCanvas.height), _0xc0f91a.save(), _0xc0f91a.fillStyle = '#e35026', _0xc0f91a.beginPath(), _0xc0f91a.moveTo(_0x23e6eb + 0.06 * _0x3ab8cc, _0x3e6754), _0xc0f91a.lineTo(_0x23e6eb + 0.94 * _0x3ab8cc, _0x3e6754), _0xc0f91a.lineTo(_0x23e6eb + 0.86 * _0x3ab8cc, _0x3e6754 + 0.89 * _0x1a66ab), _0xc0f91a.lineTo(_0x23e6eb + 0.5 * _0x3ab8cc, _0x3e6754 + _0x1a66ab), _0xc0f91a.lineTo(_0x23e6eb + 0.14 * _0x3ab8cc, _0x3e6754 + 0.89 * _0x1a66ab), _0xc0f91a.closePath(), _0xc0f91a.fill(), _0xc0f91a.fillStyle = '#ee652b', _0xc0f91a.beginPath(), _0xc0f91a.moveTo(_0x23e6eb + 0.5 * _0x3ab8cc, _0x3e6754 + 0.07 * _0x1a66ab), _0xc0f91a.lineTo(_0x23e6eb + 0.86 * _0x3ab8cc, _0x3e6754 + 0.07 * _0x1a66ab), _0xc0f91a.lineTo(_0x23e6eb + 0.79 * _0x3ab8cc, _0x3e6754 + 0.84 * _0x1a66ab), _0xc0f91a.lineTo(_0x23e6eb + 0.5 * _0x3ab8cc, _0x3e6754 + 0.92 * _0x1a66ab), _0xc0f91a.closePath(), _0xc0f91a.fill(), _0xc0f91a.restore();
      }
      _0x3ab8cc = _0x21444c.width * _0x21444c.scaleX, _0x1a66ab = _0x21444c.height * _0x21444c.scaleY, _0x23e6eb = ig.system.width / 0x2 + _0x21444c.x - _0x3ab8cc / 0x2, _0x3e6754 = ig.system.height / 0x2 + _0x21444c.y - _0x1a66ab / 0x2, _0xc0f91a = ig.system.context, _0xc0f91a.globalAlpha = _0x21444c.alpha, _0xc0f91a.drawImage(this.logoCanvas, 0x0, 0x0, this.logoCacheSize, this.logoCacheSize, _0x23e6eb, _0x3e6754, _0x3ab8cc, _0x1a66ab), _0xc0f91a.globalAlpha = 0x1;
    },
    'drawLetterM': function (_0x2d07f7) {
      if (!this.mCanvas) {
        this.mCanvas = ig.$new('canvas'), this.mCanvas.width = this.logoCacheSize, this.mCanvas.height = this.logoCacheSize;
        var _0x2f85a1 = this.mCanvas.getContext('2d'),
          _0x3e6b8c = this.logoCacheSize,
          _0x1f7ccc = this.logoCacheSize,
          _0x58bac3 = 0x0,
          _0x94c7cb = 0x0;
        _0x2f85a1.save(), _0x2f85a1.fillStyle = '#ffffff', _0x2f85a1.beginPath(), _0x2f85a1.moveTo(_0x58bac3 + 0.25 * _0x3e6b8c, _0x94c7cb + 0.2 * _0x1f7ccc), _0x2f85a1.lineTo(_0x58bac3 + 0.4 * _0x3e6b8c, _0x94c7cb + 0.2 * _0x1f7ccc), _0x2f85a1.lineTo(_0x58bac3 + 0.5 * _0x3e6b8c, _0x94c7cb + 0.37 * _0x1f7ccc), _0x2f85a1.lineTo(_0x58bac3 + 0.6 * _0x3e6b8c, _0x94c7cb + 0.2 * _0x1f7ccc), _0x2f85a1.lineTo(_0x58bac3 + 0.75 * _0x3e6b8c, _0x94c7cb + 0.2 * _0x1f7ccc), _0x2f85a1.lineTo(_0x58bac3 + 0.75 * _0x3e6b8c, _0x94c7cb + 0.7 * _0x1f7ccc), _0x2f85a1.lineTo(_0x58bac3 + 0.6 * _0x3e6b8c, _0x94c7cb + 0.7 * _0x1f7ccc), _0x2f85a1.lineTo(_0x58bac3 + 0.6 * _0x3e6b8c, _0x94c7cb + 0.45 * _0x1f7ccc), _0x2f85a1.lineTo(_0x58bac3 + 0.5 * _0x3e6b8c, _0x94c7cb + 0.63 * _0x1f7ccc), _0x2f85a1.lineTo(_0x58bac3 + 0.4 * _0x3e6b8c, _0x94c7cb + 0.45 * _0x1f7ccc), _0x2f85a1.lineTo(_0x58bac3 + 0.4 * _0x3e6b8c, _0x94c7cb + 0.7 * _0x1f7ccc), _0x2f85a1.lineTo(_0x58bac3 + 0.25 * _0x3e6b8c, _0x94c7cb + 0.7 * _0x1f7ccc), _0x2f85a1.closePath(), _0x2f85a1.fill(), _0x2f85a1.restore();
      }
      _0x2f85a1 = ig.system.context, _0x3e6b8c = _0x2d07f7.width * _0x2d07f7.scaleX, _0x1f7ccc = _0x2d07f7.height * _0x2d07f7.scaleY, _0x58bac3 = ig.system.width / 0x2 + _0x2d07f7.x - _0x3e6b8c / 0x2, _0x94c7cb = ig.system.height / 0x2 + _0x2d07f7.y - _0x1f7ccc / 0x2, _0x2f85a1.globalAlpha = _0x2d07f7.alpha, _0x2f85a1.drawImage(this.mCanvas, 0x0, 0x0, this.logoCacheSize, this.logoCacheSize, _0x58bac3, _0x94c7cb, _0x3e6b8c, _0x1f7ccc), _0x2f85a1.globalAlpha = 0x1;
    },
    'drawText': function (_0xfd8e52) {
      if (ig.splashLogoFontLoaded) {
        var _0xf7ff78 = ig.system.context,
          _0x3ea382 = _0xfd8e52.height * _0xfd8e52.scaleY,
          _0x26b01a = ig.system.width / 0x2 + _0xfd8e52.x,
          _0x2850e1 = ig.system.height / 0x2 + _0xfd8e52.y;
        _0xf7ff78.save(), _0xf7ff78.globalAlpha = _0xfd8e52.alpha, _0xfd8e52 = Math.round(0x73 / 0x98 * _0x3ea382);
        var _0x38c475 = Math.round(0x3e / 0x98 * _0x3ea382);
        _0xf7ff78.textAlign = 'left', _0xf7ff78.fillStyle = '#316198', _0xf7ff78.font = _0xfd8e52 + "px logofont", _0xf7ff78.fillText('MarketJS', _0x26b01a - 0.06 * _0xfd8e52, _0x2850e1 + 0.66 * _0xfd8e52), _0xf7ff78.font = _0x38c475 + "px logofont", _0xf7ff78.fillText("HTML5 gaming solutions", _0x26b01a - 0.02 * _0x38c475, _0x2850e1 + _0x3ea382 - 0.1 * _0x38c475), _0xf7ff78.globalAlpha = 0x1, _0xf7ff78.restore();
      }
    },
    'drawCover': function (_0xc460bc) {
      var _0x561edb = ig.system.context,
        _0x1313dc = ig.system.width / 0x2 + _0xc460bc.x,
        _0x51b83d = ig.system.height / 0x2 + _0xc460bc.y;
      _0x561edb.save(), _0x561edb.globalAlpha = _0xc460bc.alpha, _0x561edb.fillStyle = '#ffffff', _0x561edb.fillRect(_0x1313dc - ig.system.width / 0x2, _0x51b83d - this.logoCacheSize / 0x2, ig.system.width / 0x2, this.logoCacheSize), _0x561edb.globalAlpha = 0x1, _0x561edb.restore();
    }
  });
  if ('undefined' == typeof window.FontFaceObserver) {
    var _0x4b8d65 = function (_0x2f36a3, _0x197b54) {
        document.addEventListener ? _0x2f36a3.addEventListener('scroll', _0x197b54, !0x1) : _0x2f36a3.attachEvent('scroll', _0x197b54);
      },
      _0x4643b6 = function (_0x1cc708) {
        this.a = document.createElement('div'), this.a.setAttribute('aria-hidden', 'true'), this.a.appendChild(document.createTextNode(_0x1cc708)), this.b = document.createElement('span'), this.c = document.createElement('span'), this.h = document.createElement('span'), this.f = document.createElement('span'), this.g = -0x1, this.b.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this.c.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this.f.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this.h.style.cssText = 'display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;', this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c);
      },
      _0x438947 = function (_0x557353, _0x444f1f) {
        _0x557353.a.style.cssText = 'max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:' + _0x444f1f + ';';
      },
      _0x410015 = function (_0xcd786e) {
        var _0x43ec95 = _0xcd786e.a.offsetWidth,
          _0x42e458 = _0x43ec95 + 0x64;
        return _0xcd786e.f.style.width = _0x42e458 + 'px', _0xcd786e.c.scrollLeft = _0x42e458, _0xcd786e.b.scrollLeft = _0xcd786e.b.scrollWidth + 0x64, _0xcd786e.g !== _0x43ec95 ? (_0xcd786e.g = _0x43ec95, !0x0) : !0x1;
      },
      _0x52b63b = function (_0x26db7c, _0x20a1e8) {
        function _0x374a11() {
          var _0x178edc = _0x3e0ae1;
          _0x410015(_0x178edc) && _0x178edc.a.parentNode && _0x20a1e8(_0x178edc.g);
        }
        var _0x3e0ae1 = _0x26db7c;
        _0x4b8d65(_0x26db7c.b, _0x374a11), _0x4b8d65(_0x26db7c.c, _0x374a11), _0x410015(_0x26db7c);
      },
      _0x16cc45 = function (_0x18af32, _0xfab65e) {
        var _0x22fe2c = _0xfab65e || {};
        this.family = _0x18af32, this.style = _0x22fe2c.style || 'normal', this.weight = _0x22fe2c.weight || 'normal', this.stretch = _0x22fe2c.stretch || 'normal';
      },
      _0x7f9905 = function () {
        return null === _0x1476e && (_0x1476e = !!document.fonts), _0x1476e;
      },
      _0x4eb0ff = function () {
        if (null === _0x1fd19c) {
          var _0xb1dec0 = document.createElement('div');
          try {
            _0xb1dec0.style.font = "condensed 100px sans-serif";
          } catch (_0x4e3e3e) {}
          _0x1fd19c = '' !== _0xb1dec0.style.font;
        }
        return _0x1fd19c;
      },
      _0x144eaf = function (_0x1b7dad, _0x1a4991) {
        return [_0x1b7dad.style, _0x1b7dad.weight, _0x4eb0ff() ? _0x1b7dad.stretch : '', '100px', _0x1a4991].join(" ");
      },
      _0x4eea3c = null,
      _0x460f16 = null,
      _0x1fd19c = null,
      _0x1476e = null;
    _0x16cc45.prototype.load = function (_0x40f9b7, _0x52b391) {
      var _0x5868c1 = this,
        _0x3dbb7f = _0x40f9b7 || 'BESbswy',
        _0x337356 = 0x0,
        _0x1ba5c6 = _0x52b391 || 0xbb8,
        _0x3ab9b7 = new Date().getTime();
      return new Promise(function (_0xa13144, _0x5c9009) {
        var _0x451fd5;
        if (_0x451fd5 = _0x7f9905()) null === _0x460f16 && (_0x7f9905() && /Apple/.test(window.navigator.vendor) ? (_0x451fd5 = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent), _0x460f16 = !!_0x451fd5 && 0x25b > parseInt(_0x451fd5[0x1], 0xa)) : _0x460f16 = !0x1), _0x451fd5 = !_0x460f16;
        if (_0x451fd5) {
          _0x451fd5 = new Promise(function (_0x3df61f, _0x1b529a) {
            function _0x3cd8a2() {
              new Date().getTime() - _0x3ab9b7 >= _0x1ba5c6 ? _0x1b529a(Error('' + _0x1ba5c6 + "ms timeout exceeded")) : document.fonts.load(_0x144eaf(_0x5868c1, "\"" + _0x5868c1.family + "\""), _0x3dbb7f).then(function (_0x1acc32) {
                0x1 <= _0x1acc32.length ? _0x3df61f() : setTimeout(_0x3cd8a2, 0x19);
              }, _0x1b529a);
            }
            _0x3cd8a2();
          });
          var _0x52973d = new Promise(function (_0x4d2846, _0x52b96f) {
            _0x337356 = setTimeout(function () {
              _0x52b96f(Error('' + _0x1ba5c6 + "ms timeout exceeded"));
            }, _0x1ba5c6);
          });
          Promise.race([_0x52973d, _0x451fd5]).then(function () {
            clearTimeout(_0x337356), _0xa13144(_0x5868c1);
          }, _0x5c9009);
        } else {
          var _0x28255d = function () {
            function _0x597a61() {
              var _0x3802b4;
              if (_0x3802b4 = -0x1 != _0x57e244 && -0x1 != _0x2c9bf7 || -0x1 != _0x57e244 && -0x1 != _0x517fff || -0x1 != _0x2c9bf7 && -0x1 != _0x517fff) (_0x3802b4 = _0x57e244 != _0x2c9bf7 && _0x57e244 != _0x517fff && _0x2c9bf7 != _0x517fff) || (null === _0x4eea3c && (_0x3802b4 = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), _0x4eea3c = !!_0x3802b4 && (0x218 > parseInt(_0x3802b4[0x1], 0xa) || 0x218 === parseInt(_0x3802b4[0x1], 0xa) && 0xb >= parseInt(_0x3802b4[0x2], 0xa))), _0x3802b4 = _0x4eea3c && (_0x57e244 == _0x5172ae && _0x2c9bf7 == _0x5172ae && _0x517fff == _0x5172ae || _0x57e244 == _0x3ffb2f && _0x2c9bf7 == _0x3ffb2f && _0x517fff == _0x3ffb2f || _0x57e244 == _0x13a2c2 && _0x2c9bf7 == _0x13a2c2 && _0x517fff == _0x13a2c2)), _0x3802b4 = !_0x3802b4;
              _0x3802b4 && (_0x16827a.parentNode && _0x16827a.parentNode.removeChild(_0x16827a), clearTimeout(_0x337356), _0xa13144(_0x5868c1));
            }
            function _0x48f21f() {
              if (new Date().getTime() - _0x3ab9b7 >= _0x1ba5c6) _0x16827a.parentNode && _0x16827a.parentNode.removeChild(_0x16827a), _0x5c9009(Error('' + _0x1ba5c6 + "ms timeout exceeded"));else {
                var _0x40b868 = document.hidden;
                if (!0x0 === _0x40b868 || void 0x0 === _0x40b868) _0x57e244 = _0x5f0331.a.offsetWidth, _0x2c9bf7 = _0x3b6326.a.offsetWidth, _0x517fff = _0x45dbf9.a.offsetWidth, _0x597a61();
                _0x337356 = setTimeout(_0x48f21f, 0x32);
              }
            }
            var _0x5f0331 = new _0x4643b6(_0x3dbb7f),
              _0x3b6326 = new _0x4643b6(_0x3dbb7f),
              _0x45dbf9 = new _0x4643b6(_0x3dbb7f),
              _0x57e244 = -0x1,
              _0x2c9bf7 = -0x1,
              _0x517fff = -0x1,
              _0x5172ae = -0x1,
              _0x3ffb2f = -0x1,
              _0x13a2c2 = -0x1,
              _0x16827a = document.createElement('div');
            _0x16827a.dir = 'ltr', _0x438947(_0x5f0331, _0x144eaf(_0x5868c1, 'sans-serif')), _0x438947(_0x3b6326, _0x144eaf(_0x5868c1, 'serif')), _0x438947(_0x45dbf9, _0x144eaf(_0x5868c1, 'monospace')), _0x16827a.appendChild(_0x5f0331.a), _0x16827a.appendChild(_0x3b6326.a), _0x16827a.appendChild(_0x45dbf9.a), document.body.appendChild(_0x16827a), _0x5172ae = _0x5f0331.a.offsetWidth, _0x3ffb2f = _0x3b6326.a.offsetWidth, _0x13a2c2 = _0x45dbf9.a.offsetWidth, _0x48f21f(), _0x52b63b(_0x5f0331, function (_0x56b35f) {
              _0x57e244 = _0x56b35f, _0x597a61();
            }), _0x438947(_0x5f0331, _0x144eaf(_0x5868c1, "\"" + _0x5868c1.family + "\",sans-serif")), _0x52b63b(_0x3b6326, function (_0x3a52b0) {
              _0x2c9bf7 = _0x3a52b0, _0x597a61();
            }), _0x438947(_0x3b6326, _0x144eaf(_0x5868c1, "\"" + _0x5868c1.family + "\",serif")), _0x52b63b(_0x45dbf9, function (_0x47bb30) {
              _0x517fff = _0x47bb30, _0x597a61();
            }), _0x438947(_0x45dbf9, _0x144eaf(_0x5868c1, "\"" + _0x5868c1.family + "\",monospace"));
          };
          document.body ? _0x28255d() : document.addEventListener ? document.addEventListener('DOMContentLoaded', function _0x14decd() {
            document.removeEventListener('DOMContentLoaded', _0x14decd), _0x28255d();
          }) : document.attachEvent('onreadystatechange', function _0x5b03f4() {
            if ('interactive' == document.readyState || 'complete' == document.readyState) document.detachEvent('onreadystatechange', _0x5b03f4), _0x28255d();
          });
        }
      });
    }, 'object' === typeof module ? module.exports = _0x16cc45 : (window.FontFaceObserver = _0x16cc45, window.FontFaceObserver.prototype.load = _0x16cc45.prototype.load), console.log("font loader not exist : create new instance of font loader");
  }
  _0x16cc45 = document.createElement('style'), _0x16cc45.type = 'text/css', _0x16cc45.appendChild(document.createTextNode("@font-face {font-family: 'logofont';src: url('media/fonts/logofont.woff2') format('woff2'),url('media/fonts/logofont.woff') format('woff'),url('media/fonts/logofont.ttf') format('truetype')}")), document.head.appendChild(_0x16cc45), ig.splashLogoFontLoaded = !0x1, new FontFaceObserver('logofont').load().then(function () {
    ig.splashLogoFontLoaded = !0x0;
  })['catch'](function () {
    console.log("Splash font failed to load :", 'media/fonts/logofont');
  });
}), ig.baked = !0x0, ig.module('game.levels.opening').requires('impact.image', 'game.entities.opening-marketjs-logo').defines(function () {
  LevelOpening = {
    'entities': [{
      'type': 'EntityOpeningMarketjsLogo',
      'x': 0x208,
      'y': 0xd4
    }],
    'layer': []
  };
}), ig.baked = !0x0, ig.module('game.entities.panels.panel').requires('impact.entity', 'plugins.responsive.responsive-plugin').defines(function () {
  EntityPanel = ig.Entity.extend({
    'name': 'Panel',
    'bgIm': new ig.Image('media/graphics/sprites/popup-settings.png'),
    'zIndex': 0xc8,
    'isTweening': !0x1,
    'uiElements': [],
    '_uiArray': [],
    'slideIn': null,
    'slideOut': null,
    'visible': !0x1,
    'type': ig.Entity.TYPE.NONE,
    'init': function (_0x386c55, _0x234091, _0x8c52cf) {
      this.parent(_0x386c55, _0x234091, _0x8c52cf), this.animSheet = new ig.AnimationSheet(this.bgIm.path, this.bgIm.width, this.bgIm.height), this.size.x = this.bgIm.width, this.size.y = this.bgIm.height, this.addAnim('default', 0x1, [0x0], !0x0), this.slideIn = this.tween({
        'anchoredPositionX': -(this.bgIm.width / 0x2),
        'anchoredPositionY': ig.responsive.height / 0x2 - this.bgIm.height / 0x2
      }, 0x1, {
        'onComplete': this.doneTweening,
        'easing': ig.Tween.Easing.Cubic.EaseInOut
      }), this.slideOut = this.tween({
        'anchoredPositionX': -(this.bgIm.width / 0x2),
        'anchoredPositionY': -this.bgIm.height
      }, 0x1, {
        'onComplete': this.doneTweening,
        'easing': ig.Tween.Easing.Cubic.EaseInOut
      });
    },
    'ready': function () {
      0x0 < this.uiElements.length && this._spawnUI();
    },
    'update': function () {
      this.parent();
      if (this.isTweening) {
        for (var _0x210828 = 0x0; _0x210828 < this._uiArray.length; _0x210828++) this._uiArray[_0x210828].anchorType = this.anchorType, this._uiArray[_0x210828].anchoredPositionX = this.anchoredPositionX + this.uiElements[_0x210828].pos.x, this._uiArray[_0x210828].anchoredPositionY = this.anchoredPositionY + this.uiElements[_0x210828].pos.y;
      }
    },
    '_spawnUI': function () {
      for (var _0x36c957 = 0x0; _0x36c957 < this.uiElements.length; _0x36c957++) {
        var _0x17af89 = {
          'parentObj': this
        };
        if ('object' == typeof this.uiElements[_0x36c957].settings) {
          for (propName in this.uiElements[_0x36c957].settings) _0x17af89[propName] = this.uiElements[_0x36c957].settings[propName];
        }
        this._uiArray.push(ig.game.spawnEntity(this.uiElements[_0x36c957].type, -0x1388, -0x1388, _0x17af89)), this._uiArray[_0x36c957].setAnchoredPosition(this.anchoredPositionX + this.uiElements[_0x36c957].pos.x, this.anchoredPositionY - 0x1388, 'center');
      }
    },
    'doneTweening': function () {
      this.isTweening = !0x1;
    },
    'hide': function (_0x4f8eb4, _0xa458db) {
      this.isTweening || (this.slideOut = this.newTween(0x0), this.visible && ('function' == typeof _0x4f8eb4 ? (this.slideOut.onComplete = _0x4f8eb4, 'object' == typeof _0xa458db && (this.slideOut.onComplete = _0x4f8eb4.bind(_0xa458db))) : this.slideOut.onComplete = this.doneTweening.bind(this), this.isTweening = !0x0, ig.game.gameState = 'menu', this.slideOut.start(), this.visible = !0x1));
    },
    'show': function (_0xaa87ed, _0x52dc3c) {
      this.isTweening || (this.slideIn = this.newTween(0x1), this.visible || ('function' == typeof _0xaa87ed ? (this.slideIn.onComplete = _0xaa87ed, 'object' == typeof _0x52dc3c && (this.slideIn.onComplete = _0xaa87ed.bind(_0x52dc3c))) : this.slideIn.onComplete = this.doneTweening.bind(this), this.isTweening = !0x0, ig.game.gameState = 'menu', this.slideIn.start(), this.visible = !0x0));
    },
    'newTween': function (_0x5c1bc4) {
      if (0x0 == _0x5c1bc4) return this.setAnchoredPosition(-this.bgIm.width / 0x2, ig.responsive.height / 0x2 - this.bgIm.height / 0x2, 'top'), this.tween({
        'anchoredPositionX': -this.bgIm.width / 0x2,
        'anchoredPositionY': -this.bgIm.height
      }, 0.75, {
        'onComplete': this.doneTweening,
        'easing': ig.Tween.Easing.Cubic.EaseInOut
      });
      return this.setAnchoredPosition(-this.bgIm.width / 0x2, -(ig.responsive.height / 0x2) - this.bgIm.height, 'center'), this.tween({
        'anchoredPositionX': -this.bgIm.width / 0x2,
        'anchoredPositionY': -this.bgIm.height / 0x2
      }, 0.75, {
        'onComplete': this.doneTweening,
        'easing': ig.Tween.Easing.Cubic.EaseInOut
      });
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.panels.panel-settings').requires('game.entities.panels.panel').defines(function () {
  EntityPanelSettings = EntityPanel.extend({
    'bgIm': new ig.Image('media/graphics/sprites/popup-settings.png'),
    'bgmIcon': new ig.Image('media/graphics/sprites/music-icon.png'),
    'sfxIcon': new ig.Image('media/graphics/sprites/sound-icon.png'),
    'draw': function () {
      this.parent();
      var _0x1c8276 = ig.system.context;
      _0x1c8276.save(), _0x1c8276.font = "50px mainfont", _0x1c8276.fillStyle = '#FFFFFF', _0x1c8276.textAlign = 'center', _0x1c8276.fillText(_STRINGS.Game.settings, this.pos.x + this.bgIm.width / 0x2, this.pos.y + 0.2 * this.bgIm.height), this.bgmIcon.draw(this.pos.x + 0x5a, this.pos.y + 0x122), this.sfxIcon.draw(this.pos.x + 0x64, this.pos.y + 0xaa), _0x1c8276.restore();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.characters.health-bar').requires('impact.entity').defines(function () {
  EntityHealthBar = ig.Entity.extend({
    'parentObj': null,
    'fill': {
      'player': new ig.Image('media/graphics/sprites/health-bar.png'),
      'enemy': new ig.Image('media/graphics/sprites/enemy-health-bar.png')
    },
    'background': {
      'player': new ig.Image('media/graphics/sprites/health-bar-bg.png'),
      'enemy': new ig.Image('media/graphics/sprites/enemy-health-bar-bg.png')
    },
    'props': {
      'fill': null,
      'background': null
    },
    'value': 0x64,
    'tweenFill': null,
    'drawOffset': {
      'x': 0x0,
      'y': 0x0
    },
    'healthFontSize': 0x2a,
    'valueOffset': 0x0,
    'opacity': 0x1,
    'zIndex': 0xc7,
    'init': function (_0x2edf44, _0x103f67, _0x3a77a7) {
      this.parent(_0x2edf44, _0x103f67, _0x3a77a7), null == this.parentObj && (console.warn("No parent, killing healthbar..."), this.kill()), this.parentObj instanceof EntityPlayer ? (this.props.fill = this.fill.player, this.props.background = this.background.player, this.drawCall = this.drawPlayer, this.valueOffset = 0x1e) : (this.props.fill = this.fill.enemy, this.props.background = this.background.enemy, this.drawCall = this.drawEnemy, this.valueOffset = 0xe), this.value = this.parentObj.stats.maxHP, 'undefined' != typeof this.parentObj.healthBarPos && (this.drawOffset = this.parentObj.healthBarPos);
    },
    'checkHP': function () {
      this.parentObj.state.current == this.parentObj.STATES.DYING ? (null != this.tweenFill && this.tweenFill.stop(), this.value = 0x0, this.opacity = Math.max(0x0, this.opacity - 0.01)) : this.parentObj.health != this.value && null == this.tweenFill && (this.tweenFill = this.tween({
        'value': this.parentObj.health
      }, 0.25, {
        'onComplete': function () {
          this.tweenFill = null;
        }.bind(this),
        'easing': ig.Tween.Easing.Quadratic.EaseInOut
      }), this.tweenFill.start());
    },
    'drawPlayer': function () {
      var _0x1f4c7d = ig.responsive.halfWidth - this.props.background.width / 0x2,
        _0x2a53eb = 0.9 * ig.responsive.height,
        _0x4b1231 = ig.system.context;
      this.props.background.draw(_0x1f4c7d, _0x2a53eb), 0x0 < this.value && this.props.fill.draw(_0x1f4c7d + this.valueOffset, _0x2a53eb, 0x0 + this.valueOffset, 0x0, (this.props.fill.width - 0x2 * this.valueOffset) * (this.value / this.parentObj.stats.maxHP), this.props.fill.height), _0x4b1231.save(), _0x4b1231.textAlign = 'center', _0x4b1231.font = this.healthFontSize + "px secondaryfont", _0x4b1231.fillStyle = '#fff', _0x4b1231.fillText(Math.floor(this.value) + '/' + this.parentObj.stats.maxHP, ig.responsive.halfWidth, this.healthFontSize / 0x3 + _0x2a53eb + this.props.background.height / 0x2), _0x4b1231.restore();
    },
    'drawEnemy': function () {
      var _0x4b33da = this.parentObj.pos.x - this.drawOffset.x + this.props.background.width / 0x4,
        _0x173386 = this.parentObj.pos.y - this.drawOffset.y;
      ig.system.context.save(), ig.system.context.globalAlpha = this.parentObj.hpAlpha, this.props.background.draw(_0x4b33da, _0x173386), 0x0 < this.value && this.props.fill.draw(_0x4b33da + this.valueOffset, _0x173386, 0x0 + this.valueOffset, 0x0, (this.props.fill.width - 0x2 * this.valueOffset) * (this.value / this.parentObj.stats.maxHP), this.props.fill.height), ig.system.context.restore();
    },
    'draw': function () {
      this.parent(), ig.system.context.save(), ig.system.context.globalAlpha = this.opacity, this.checkHP(), this.drawCall(), ig.system.context.restore();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.characters.character').requires('impact.entity', 'plugins.spriter.spriter-display', 'plugins.spriter.scml', 'game.entities.characters.health-bar').defines(function () {
  EntityCharacter = ig.Entity.extend({
    'name': 'character',
    'scml': new SpriterScml('media/graphics/sprites/character/chara.scml'),
    'STATES': {
      'IDLE': 0x0,
      'ATTACK': 0x1,
      'DEFENSE': 0x2,
      'WALK': 0x3,
      'DYING': 0x4
    },
    'skins': {
      'player': 'knight',
      'enemy1': 'skeleton1',
      'enemy2': 'skeleton2',
      'enemy3': 'skeleton3',
      'enemy4': 'skeleton4'
    },
    'currentSkin': 'knight',
    'state': {
      'current': 0x0,
      'previous': 0x0
    },
    'zIndex': 0x64,
    'animTimers': {},
    'shapes': {},
    'paused': !0x1,
    'canDoDamage': !0x0,
    'stats': {
      'attack': 0x3,
      'defense': 0x2,
      'walkSpeed': 0x64,
      'attackSpeed': 0x1,
      'maxHP': 0xa
    },
    'opacity': 0x1,
    'hasFaded': !0x1,
    'init': function (_0x550ddc, _0x31f52e, _0x201ab3) {
      this.parent(_0x550ddc, _0x31f52e, _0x201ab3), this.initAnimation(), this.initShapes(), this.health = this.stats.maxHP;
    },
    'update': function () {
      this.sDisplay.pos.x = this.pos.x, this.sDisplay.pos.y = this.pos.y, this.controller.paused && !this.paused && this.pauseHandler(), !this.controller.paused && this.paused && this.resumeHandler(), this.paused || this.stateHandler(), this.parent();
    },
    'draw': function () {
      this.parent();
    },
    'receiveDamage': function (_0x241389) {
      this.state.current == this.STATES.DEFENSE && (_0x241389 = Math.max(0x0, _0x241389 - this.stats.defense), this.sDisplay.zIndex = 0xbf, ig.game.sortEntitiesDeferred(), this.sDisplay.setAnimationByName('def-fx'), this.sDisplay.time = 0xe6), this.health -= _0x241389, 0x0 >= this.health && this.setState('DYING');
    },
    'kill': function () {
      for (var _0x43e20 = Object.keys(this.shapes).length - 0x1; -0x1 < _0x43e20; _0x43e20--) this.shapes[Object.keys(this.shapes)[_0x43e20]].kill(), delete this.shapes[Object.keys(this.shapes)[_0x43e20]];
      this.sDisplay.kill(), 'undefined' != typeof this.healthBar && this.healthBar.kill(), this.parent();
    },
    'setState': function (_0x16fd2c, _0x5c2cb4) {
      'undefined' == typeof this.STATES[_0x16fd2c] ? ig.game.sessionData.tutorial || console.warn("State non existent: ", _0x16fd2c) : this.STATES[_0x16fd2c] != this.state.current && !(this.STATES.DYING == this.state.current && 0x0 >= this.health) && (this.state.previous = this.state.current, this.state.current = this.STATES[_0x16fd2c], this.sDisplay.setAnimationById(this.state.current, _0x5c2cb4 || !0x1));
    },
    'stateHandler': function () {},
    'pauseHandler': function () {
      this.sDisplay.pause = !0x0;
    },
    'resumeHandler': function () {
      this.sDisplay.pause = !0x1;
    },
    'initShapes': function () {
      this.shapes.body = ig.game.spawnEntity(EntityCollision, -0x28, -0xfa, {
        'checkAgainst': ig.Entity.TYPE.B,
        'parentObj': this,
        'size': {
          'x': 0x50,
          'y': 0xd2
        },
        'type': ig.Entity.TYPE.A
      });
    },
    'initAnimation': function () {
      this.sDisplay = ig.game.spawnEntity(SpriterDisplay, 0x0, 0x0, {
        'scml': this.scml
      }), this.sDisplay.entityName = this.currentSkin, this.sDisplay.setAnimationById(this.state.current), this.sDisplay.scale = this.scale;
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.characters.player').requires('game.entities.characters.character').defines(function () {
  EntityPlayer = EntityCharacter.extend({
    'name': 'player',
    'animTimers': {
      'ko': 0x258,
      'hit': 0xdc,
      'offhit': 0x17c,
      'punchDuration': 0x258,
      'step1': 0xc8,
      'step2': 0x1f4
    },
    'sfxTracker': {
      'step1': !0x1,
      'step2': !0x1
    },
    'stats': {
      'attack': 0x3,
      'defense': 0x2,
      'walkSpeed': 0x177,
      'maxHP': 0x64
    },
    'zIndex': 0x64,
    'init': function (_0x5299e0, _0x406a7c, _0x1dc362) {
      this.parent(_0x5299e0, _0x406a7c, _0x1dc362), ig.input.bind(ig.KEY.D, 'right'), ig.input.bind(ig.KEY.A, 'left'), this.sDisplay.zIndex = this.zIndex;
    },
    'update': function () {
      this.parent();
    },
    'draw': function () {
      this.parent();
    },
    'kill': function () {
      this.controller.endGame(), ig.game.killCount = this.controller.kills, this.controller.player = null, this.parent();
    },
    'setState': function (_0x204ebe, _0x21cbf6) {
      this.parent(_0x204ebe, _0x21cbf6);
      switch (this.state.current) {
        case this.STATES.DYING:
          this.hasFaded || this.sDisplay.tween({
            'opacity': 0x0
          }, 0.6, {
            'onComplete': function () {
              this.hasFaded = !0x0, console.warn('TWEENed');
            }.bind(this)
          }).start();
          break;
        case this.STATES.IDLE:
          this.sDisplay.zIndex = 0x64, ig.game.sortEntitiesDeferred(), this.shapes.punch.active = !0x1, this.canDoDamage = !0x0;
          break;
        case this.STATES.ATTACK:
          this.sDisplay.zIndex = 0xbe, ig.game.sortEntitiesDeferred();
          break;
        case this.STATES.WALK:
          this.shapes.stop.active = !0x0;
      }
    },
    'stateHandler': function () {
      var _0x59327c = ig.input.pressed('right') || this.attackPressed,
        _0x4bf0eb = ig.input.pressed('left') || this.defendPressed;
      switch (this.state.current) {
        case this.STATES.DYING:
          this.sDisplay.time > this.animTimers.ko && this.kill();
          break;
        case this.STATES.WALK:
          var _0x3403ca = this.stats.walkSpeed * ig.system.tick;
          this.anchoredPositionX += _0x3403ca, this.controller.panValue = _0x3403ca, this.sDisplay.time > this.animTimers.step1 && !this.sfxTracker.step1 ? (ig.soundHandler.sfxPlayer.play('step' + Math.randRange(0x0, 0x2)), this.sfxTracker.step1 = !0x0) : this.sDisplay.time > this.animTimers.step2 && !this.sfxTracker.step2 ? (ig.soundHandler.sfxPlayer.play('step' + Math.randRange(0x0, 0x2)), this.sfxTracker.step2 = !0x0) : this.sDisplay.time < this.animTimers.step1 && (this.sfxTracker.step1 = !0x1, this.sfxTracker.step2 = !0x1), ig.input.released('right') && this.setState('IDLE'), _0x4bf0eb && this.setState('DEFENSE');
        case this.STATES.IDLE:
          _0x59327c && this.setState('WALK'), _0x4bf0eb && this.setState('DEFENSE');
          break;
        case this.STATES.ATTACK:
          if (ig.input.pressed('left') || this.defendPressed) {
            this.shapes.stop.active = !0x1, this.setState('DEFENSE');
            break;
          }
          if (this.sDisplay.time > this.animTimers.punchDuration) this.setState('IDLE');else {
            if (this.sDisplay.time > this.animTimers.offhit && this.canDoDamage) this.canDoDamage = this.shapes.punch.active = !0x1;else {
              if (this.sDisplay.time > this.animTimers.hit) {
                this.canDoDamage && (this.shapes.punch.active = !0x0, this.canDoDamage = !0x1), _0x59327c = this.controller.enemies, _0x4bf0eb = 0x0;
                if (0x0 < _0x59327c.length) {
                  for (_0x3403ca = 0x0; _0x3403ca < _0x59327c.length; _0x3403ca++) 0x0 == _0x3403ca && (_0x4bf0eb = _0x59327c[_0x3403ca].anchoredPositionX), _0x4bf0eb > _0x59327c[_0x3403ca].anchoredPositionX && (_0x4bf0eb = _0x59327c[_0x3403ca].anchoredPositionX);
                }
                this.anchoredPositionX < _0x4bf0eb - 0x5 * this.size.x - 0x28 && (this.anchoredPositionX += this.stats.walkSpeed / 0x4 * ig.system.tick);
              }
            }
          }
          break;
        case this.STATES.DEFENSE:
          _0x4bf0eb = 0x0, this.sDisplay.time > this.animTimers.step1 && !this.sfxTracker.step1 ? (ig.soundHandler.sfxPlayer.play('step' + Math.randRange(0x0, 0x2)), this.sfxTracker.step1 = !0x0, _0x4bf0eb = this.stats.walkSpeed) : this.sDisplay.time < this.animTimers.step1 && (this.sfxTracker.step1 = !0x1, this.sfxTracker.step2 = !0x1, _0x4bf0eb = this.stats.walkSpeed), 'def-fx' == this.sDisplay.currentAnimationName && 0x258 <= this.sDisplay.time && this.sDisplay.setAnimationByName('def'), -0x1f4 < this.anchoredPositionX && !this.paused && (this.anchoredPositionX -= _0x4bf0eb / 0x2 * ig.system.tick), ig.input.released('left') && (this.shapes.stop.active = !0x0, this.setState('IDLE')), _0x59327c && this.setState('WALK');
      }
    },
    'pauseHandler': function () {
      this.parent(), this.state.current != this.STATES.ATTACK && this.setState('IDLE'), ig.input.unbind(ig.KEY.D, 'right'), ig.input.unbind(ig.KEY.A, 'left'), this.paused = !0x0;
    },
    'resumeHandler': function () {
      this.parent(), this.state.current == this.STATES.IDLE && this.setState('IDLE'), ig.input.bind(ig.KEY.D, 'right'), ig.input.bind(ig.KEY.A, 'left'), this.paused = !0x1;
    },
    'initShapes': function () {
      this.parent(), this.shapes.punch = ig.game.spawnEntity(EntityCollision, 0x0, -0xec, {
        'checkAgainst': ig.Entity.TYPE.A,
        'collisionCallback': function (_0x15f9c5) {
          if (_0x15f9c5.parentObj instanceof EntityEnemy && _0x15f9c5.parentObj.state.current != this.STATES.DYING) {
            for (_0x15f9c5 = 0x0; _0x15f9c5 < this.controller.enemies.length; _0x15f9c5++) this.shapes.punch.touches(this.controller.enemies[_0x15f9c5].shapes.body) && (this.controller.enemies[_0x15f9c5].state.current == this.STATES.DEFENSE ? ig.soundHandler.sfxPlayer.play('wood' + Math.randRange(0x0, 0x2)) : ig.soundHandler.sfxPlayer.play('stone' + Math.randRange(0x0, 0x2)), this.controller.enemies[_0x15f9c5].receiveDamage(this.stats.attack, this));
            this.shapes.punch.showEffect();
          }
        }.bind(this),
        'parentObj': this,
        'size': {
          'x': 0x96,
          'y': 0x10
        },
        'type': ig.Entity.TYPE.B,
        'boundColor': '#A87132'
      }), this.shapes.stop = ig.game.spawnEntity(EntityCollision, 0x50, -0xec, {
        'active': !0x0,
        'boundColor': '#FFFF00',
        'checkAgainst': ig.Entity.TYPE.A,
        'collideOnce': !0x1,
        'collisionCallback': function (_0x446368) {
          _0x446368.parentObj instanceof EntityEnemy && this.state.current != this.STATES.ATTACK && this.setState('ATTACK');
        }.bind(this),
        'parentObj': this,
        'size': {
          'x': 0x3c,
          'y': 0x10
        },
        'type': ig.Entity.TYPE.B
      }), this.healthBar = ig.game.spawnEntity(EntityHealthBar, 0x0, 0x0, {
        'parentObj': this
      });
    }
  });
}), ig.baked = !0x0, ig.module('impact.entity-pool').requires('impact.game').defines(function () {
  ig.EntityPool = {
    'pools': {},
    'mixin': {
      'staticInstantiate': function (_0x530444, _0x10125a, _0x4a3878) {
        return ig.EntityPool.getFromPool(this.classId, _0x530444, _0x10125a, _0x4a3878);
      },
      'erase': function () {
        ig.EntityPool.putInPool(this);
      }
    },
    'enableFor': function (_0x3694a4) {
      _0x3694a4.inject(this.mixin);
    },
    'getFromPool': function (_0x54a153, _0x40f4a5, _0x263f23, _0x2c1c88) {
      _0x54a153 = this.pools[_0x54a153];
      if (!_0x54a153 || !_0x54a153.length) return null;
      return _0x54a153 = _0x54a153.pop(), _0x54a153.reset(_0x40f4a5, _0x263f23, _0x2c1c88), _0x54a153;
    },
    'putInPool': function (_0x2359f2) {
      this.pools[_0x2359f2.classId] ? this.pools[_0x2359f2.classId].push(_0x2359f2) : this.pools[_0x2359f2.classId] = [_0x2359f2];
    },
    'drainPool': function (_0x335efa) {
      delete this.pools[_0x335efa];
    },
    'drainAllPools': function () {
      this.pools = {};
    }
  }, ig.Game.inject({
    'loadLevel': function (_0x27793d) {
      ig.EntityPool.drainAllPools(), this.parent(_0x27793d);
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.characters.enemy').requires('impact.entity-pool', 'game.entities.characters.character', 'plugins.spriter.spriter-display', 'plugins.spriter.scml').defines(function () {
  EntityEnemy = EntityCharacter.extend({
    'name': 'enemy',
    'playerInRange': !0x1,
    'nextMove': -0x1,
    'alerted': !0x1,
    'scoreAlpha': 0x0,
    'hpAlpha': 0x0,
    'scorePos': {
      'x': 0x0,
      'y': 0x0
    },
    'scoreOffsetY': 0x0,
    'baseStats': {
      'attack': 0x3,
      'defense': 0x2,
      'walkSpeed': 0x64,
      'attackSpeed': 0x1,
      'maxHP': 0xa
    },
    'animTimers': {
      'ko': 0x258,
      'hit': 0xdc,
      'offhit': 0x17c,
      'punchDuration': 0x258
    },
    'zIndex': 0x63,
    'formationID': -0x1,
    'formationReady': !0x1,
    'healthBarPos': {
      'x': 143.5,
      'y': 0x1c2
    },
    'init': function (_0x50e0fb, _0x7ed614, _0x5d4a69) {
      this.parent(_0x50e0fb, _0x7ed614, _0x5d4a69), this.initStats(), this.attackTimer.pause(), this.setState('IDLE'), this.STATES.FORMATION = 0x5;
    },
    'reset': function (_0x35fc8a, _0x48ac08, _0x54d0ab) {
      this.parent(_0x35fc8a, _0x48ac08, _0x54d0ab), this.initStats(), this.initShapes(), this.initAnimation(), this.setState('IDLE');
    },
    'kill': function () {
      var _0x358404 = this.controller.enemies.indexOf(this);
      this.controller.enemies.splice(_0x358404, 0x1), 0x0 < this.controller.enemies.length && this.alertOthers(!0x0), this.controller.kills++, this.controller.spawnEnemies(), this.controller.score.value += 0xa, this.parent();
    },
    'receiveDamage': function (_0x16bcad) {
      'undefined' == typeof this._hpAlphaTween && (this._hpAlphaTweenIn = this.tween({
        'hpAlpha': 0x1
      }, 0.5, {})), 0x1 > this.hpAlpha && this._hpAlphaTweenIn.start(), this.parent(_0x16bcad);
    },
    'draw': function () {
      this.parent(), ig.system.context.save(), ig.system.context.globalAlpha = this.scoreAlpha, ig.system.context.fillText('+10', this.scorePos.x, this.scorePos.y + this.scoreOffsetY), ig.system.context.restore();
    },
    'setState': function (_0x1dfdea, _0x5d98eb) {
      this.parent(_0x1dfdea, _0x5d98eb);
      if (this.controller.player || this.state.current == this.STATES.DYING) switch (this.state.current) {
        case this.STATES.DYING:
          this.hasFaded || this.sDisplay.tween({
            'opacity': 0x0
          }, 0.6, {
            'onComplete': function () {
              this.hasFaded = !0x0, console.warn('TWEENed');
            }.bind(this)
          }).start();
          break;
        case this.STATES.FORMATION:
          if (0x1 >= this.controller.enemies.length) {
            this.formationReady = !0x0, this.setState('IDLE');
            break;
          }
          if (this.formationReady) {
            this.setState('IDLE');
            break;
          }
          0x0 == this.formationID ? this.shapes.range.pos.x < this.controller.enemies[this.formationID + 0x1].shapes.body.pos.x ? this.isTouchingBody(this.shapes.range) ? (this.formationReady = !0x0, this.setState('IDLE')) : this.setState('WALK') : this.setState('WALK') : this.formationID == this.controller.enemies.length - 0x1 ? this.shapes.range.pos.x > this.controller.enemies[this.formationID - 0x1].shapes.body.pos.x ? this.isTouchingBody(this.shapes.range) ? (this.stats.walkSpeed != this.baseStats.walkSpeed && (this.stats.walkSpeed = this.baseStats.walkSpeed), this.formationReady = !0x0, this.setState('IDLE')) : this.setState('WALK') : this.setState('DEFENSE') : this.shapes.range.pos.x < this.controller.enemies[this.formationID + 0x1].shapes.body.pos.x ? this.shapes.range.pos.x > this.controller.enemies[this.formationID - 0x1].shapes.body.pos.x ? this.isTouchingBody(this.shapes.range) ? (this.stats.walkSpeed != this.baseStats.walkSpeed && (this.stats.walkSpeed = this.baseStats.walkSpeed), this.formationReady = !0x0, this.setState('IDLE')) : this.setState('WALK') : this.setState('DEFENSE') : this.setState('WALK');
          break;
        case this.STATES.ATTACK:
          this.sDisplay.animationSpeed = this.stats.attackSpeed;
          break;
        case this.STATES.DEFENSE:
          this.attackTimer.set(Math.randRange(0.5, 1.5, !0x0));
          break;
        case this.STATES.IDLE:
          this.sDisplay.animationSpeed = 0x1, this.playerInRange = this.shapes.range.touches(this.controller.player.shapes.body), this.attackTimer.set(Math.randRange(0.5, 1.5, !0x0)), this.canDoDamage = !0x0;
      }
    },
    'isTouchingBody': function (_0x1c9f46) {
      if (!(this.controller.player instanceof EntityPlayer)) return !0x1;
      var _0x379a40 = this.controller.player.shapes.body,
        _0x2e780a = this.controller.enemies.map(function (_0x318b5e) {
          return _0x318b5e.shapes.body;
        });
      if (!(_0x379a40 = _0x1c9f46.touches(_0x379a40))) _0x596460: {
        for (_0x379a40 = 0x0; _0x379a40 < _0x2e780a.length; _0x379a40++) if (_0x1c9f46.touches(_0x2e780a[_0x379a40])) {
          _0x379a40 = !0x0;
          break _0x596460;
        }
        _0x379a40 = !0x1;
      }
      return _0x379a40;
    },
    'stateHandler': function () {
      this.parent();
      var _0x46f68c = this.controller.player ? this.controller.player.shapes.body : null;
      if (_0x46f68c || this.state.current == this.STATES.DYING) switch (this.state.current) {
        case this.STATES.DYING:
          this.sDisplay.time > this.animTimers.ko && this.kill();
          break;
        case this.STATES.ATTACK:
          this.sDisplay.zIndex = 0xbd, ig.game.sortEntitiesDeferred(), this.sDisplay.time > this.animTimers.punchDuration ? this.setState('IDLE') : this.sDisplay.time > this.animTimers.offhit ? this.shapes.punch.active = !0x1 : this.sDisplay.time > this.animTimers.hit && (this.shapes.punch.active = !0x0, this.anchoredPositionX > this.controller.player.anchoredPositionX + 0x5 * this.size.x - 0x14 && (this.anchoredPositionX -= this.stats.walkSpeed / 0x4 * ig.system.tick));
          break;
        case this.STATES.DEFENSE:
          'def-fx' == this.sDisplay.currentAnimationName && 0x258 <= this.sDisplay.time && this.sDisplay.setAnimationByName('def'), this.isPlayerBehind() ? this.anchoredPositionX += this.stats.walkSpeed * ig.system.tick / 0x4 + this.controller.player.stats.walkSpeed * ig.system.tick : (_0x46f68c = this.stats.walkSpeed * ig.system.tick / 0x4, 0x1 > this.formationID && 0x1 < this.controller.enemies.length && this.shapes.body.touches(this.controller.enemies[this.formationID + 0x1].shapes.range) && (_0x46f68c = 0x0), this.anchoredPositionX += _0x46f68c), 0x0 < this.attackTimer.delta() && !this.isPlayerBehind() && this.setState('IDLE'), this.stats.walkSpeed = this.isPlayerBehind() ? 0x2 * this._normalWalkSpeed + this.controller.player.stats.walkSpeed : this._normalWalkSpeed;
          break;
        case this.STATES.WALK:
          this.anchoredPositionX -= this.stats.walkSpeed * ig.system.tick, this.formationReady ? 0x1 > this.formationID && this.shapes.range.touches(_0x46f68c) && (this.playerInRange = !0x0, this.setState('IDLE')) : this.isTouchingBody(this.shapes.range) && (0x1 > this.formationID ? this.shapes.range.touches(_0x46f68c) && (this.playerInRange = this.formationReady = !0x0, this.setState('IDLE')) : this.setState('FORMATION'));
          break;
        case this.STATES.IDLE:
          this.sDisplay.zIndex = 0x63, ig.game.sortEntitiesDeferred();
          var _0x7955c5 = 0x1 > this.formationID && this.formationReady;
          this.shapes.pov.touches(_0x46f68c) && !this.alerted && 0x0 < this.controller.player.shapes.body.pos.x ? (this.alerted = !0x0, 0x1 < this.controller.enemies.length && this.alertOthers(), _0x7955c5 ? this.setState('WALK') : this.formationReady || this.setState('FORMATION')) : !this.shapes.pov.touches(_0x46f68c) && this.alerted && !this.isPlayerBehind() && (_0x7955c5 ? this.setState('WALK') : this.formationReady || this.setState('FORMATION')), 0x0 < this.attackTimer.delta() && this.playerInRange ? 0x2 > Math.randRange(0x1, 0x4) ? this.setState('DEFENSE') : this.setState('ATTACK') : !this.playerInRange && this.alerted && (this.controller.player.shapes.body.pos.x > this.shapes.range.pos.x ? this.setState('DEFENSE') : _0x7955c5 ? this.setState('WALK') : this.formationReady || this.setState('FORMATION')), 0x0 < this.formationID && !this.isTouchingBody(this.shapes.range) && (this.stats.walkSpeed > this.controller.enemies[this.formationID - 0x1].stats.walkSpeed && (this.stats.walkSpeed = this.controller.enemies[this.formationID - 0x1].stats.walkSpeed), this.formationReady = !0x1, this.setState('FORMATION'));
      }
    },
    'pauseHandler': function () {
      this.parent(), this.paused = !0x0;
    },
    'resumeHandler': function () {
      this.parent(), this.paused = !0x1;
    },
    'initStats': function () {
      this.attackTimer = new ig.Timer(0x1);
      var _0x4e9409 = {
        'attack': this.baseStats.attack,
        'defense': this.baseStats.defense,
        'walkSpeed': this.baseStats.walkSpeed,
        'attackSpeed': this.baseStats.attackSpeed,
        'maxHP': this.baseStats.maxHP + Math.max(0x0, this.baseStats.maxHP * (this.controller.currentArea - 0x1) / 0x4)
      };
      this.stats = JSON.parse(JSON.stringify(_0x4e9409)), this.health = this.stats.maxHP, this._normalWalkSpeed = this.stats.walkSpeed, this.formationReady = this.alerted = !0x1, this.formationID = -0x1, this.hpAlpha = 0x0;
    },
    'initShapes': function () {
      this.parent(), this.shapes.pov = ig.game.spawnEntity(EntityCollision, -0x140, -0xaa, {
        'active': !0x0,
        'boundColor': '#008A00',
        'checkAgainst': ig.Entity.TYPE.A,
        'collisionCallback': function () {}.bind(this),
        'parentObj': this,
        'size': {
          'x': 0x140,
          'y': 0x3c
        },
        'type': ig.Entity.TYPE.B
      }), this.shapes.punch = ig.game.spawnEntity(EntityCollision, -0x8d, -0xec, {
        'checkAgainst': ig.Entity.TYPE.A,
        'collisionCallback': function () {
          this.controller.player instanceof EntityPlayer && this.controller.player.shapes.body && this.shapes.punch.touches(this.controller.player.shapes.body) && this.canDoDamage && (ig.soundHandler.sfxPlayer.play('metal' + Math.randRange(0x0, 0x2)), this.controller.player.receiveDamage(this.stats.attack), this.shapes.punch.showEffect(), this.canDoDamage = !0x1);
        }.bind(this),
        'parentObj': this,
        'boundColor': '#FF4B2B',
        'size': {
          'x': 0x96,
          'y': 0x10
        },
        'type': ig.Entity.TYPE.B
      }), this.shapes.range = ig.game.spawnEntity(EntityCollision, -0x65, -0xec, {
        'active': !0x0,
        'boundColor': '#FFFF00',
        'checkAgainst': ig.Entity.TYPE.A,
        'collisionCallback': function () {}.bind(this),
        'parentObj': this,
        'size': {
          'x': 0x14,
          'y': 0x10
        },
        'type': ig.Entity.TYPE.B
      }), this.healthBar = ig.game.spawnEntity(EntityHealthBar, 0x0, 0x0, {
        'parentObj': this
      });
    },
    'alertOthers': function (_0x552fcb) {
      var _0x16216f = this.controller.enemies;
      if ('boolean' == typeof _0x552fcb && _0x552fcb) for (_0x552fcb = _0x16216f.length - 0x1; 0x0 < _0x552fcb; _0x552fcb--) {
        var _0x2cfdc7 = Math.floor(Math.random() * (_0x552fcb + 0x1)),
          _0x225eee = _0x16216f[_0x552fcb];
        _0x16216f[_0x552fcb] = _0x16216f[_0x2cfdc7], _0x16216f[_0x2cfdc7] = _0x225eee;
      }
      for (_0x552fcb = 0x0; _0x552fcb < _0x16216f.length; _0x552fcb++) _0x16216f[_0x552fcb].formationID = _0x552fcb, _0x16216f[_0x552fcb].alerted = !0x0, _0x16216f[_0x552fcb].setState('FORMATION');
    },
    'isPlayerBehind': function () {
      return this.controller.player.shapes.body.pos.x > this.shapes.range.pos.x;
    }
  }), ig.EntityPool.enableFor(EntityEnemy);
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-play').requires('game.entities.buttons.button').defines(function () {
  EntityButtonPlay = EntityButton.extend({
    'controller': null,
    'zIndex': 0x64,
    'animSheet': new ig.AnimationSheet('media/graphics/sprites/button-continue.png', 0x6e, 0x6e),
    'size': {
      'x': 0x6e,
      'y': 0x6e
    },
    'init': function (_0x1aa848, _0x4781cd, _0x1787ae) {
      this.parent(_0x1aa848, _0x4781cd, _0x1787ae);
    },
    'released': function () {
      this.enabled && (this.parent(), null != this.controller && this.controller.paused ? this.controller.unpauseGame() : this.parentObj ? this.parentObj.hide(function () {
        ig.game.revived || (ig.game.canRevive = !0x0), this.isTweening = !0x1, ig.game.director.loadLevel(_SETTINGS.Game.LevelID.GAME);
      }) : (ig.game.director.loadLevel(_SETTINGS.Game.LevelID.GAME), ig.game.revived || (ig.game.canRevive = !0x0)));
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-toggle').requires('game.entities.buttons.button').defines(function () {
  EntityButtonToggle = EntityButton.extend({
    'toggled': !0x1,
    'toggleType': null,
    'textures': [new ig.AnimationSheet('media/graphics/sprites/toggle-on.png', 0xa0, 0x50), new ig.AnimationSheet('media/graphics/sprites/toggle-off.png', 0xa0, 0x50)],
    'size': {
      'x': 0xa0,
      'y': 0x50
    },
    'init': function (_0x2a8c47, _0x2cb591, _0x34f3e9) {
      this.parent(_0x2a8c47, _0x2cb591, _0x34f3e9), null == this.toggleType && (console.warn("No toggle type"), this.kill()), this.on = new ig.Animation(this.textures[0x0], 0x0, [0x0], !0x0), this.off = new ig.Animation(this.textures[0x1], 0x0, [0x0], !0x0), this.currentAnim = this.toggled ? this.on : this.off;
    },
    'released': function () {
      this.parent(), this.toggled ? 'bgm' == this.toggleType ? (this.toggled = !0x1, ig.soundHandler.bgmPlayer.mute(), ig.game.sessionData.music = !0x1) : (this.toggled = !0x1, ig.soundHandler.sfxPlayer.mute(), ig.game.sessionData.sound = !0x1) : 'bgm' == this.toggleType ? (this.toggled = !0x0, ig.soundHandler.bgmPlayer.unmute(), ig.game.sessionData.music = !0x0) : (this.toggled = !0x0, ig.soundHandler.sfxPlayer.unmute(), ig.game.sessionData.sound = !0x0), this.currentAnim = this.toggled ? this.on : this.off, ig.game.saveAll();
    },
    'draw': function () {
      this.parent();
      var _0x8783d2 = ig.system.context;
      _0x8783d2.save(), _0x8783d2.font = "36px secondaryfont", _0x8783d2.fillStyle = '#FFFFFF', _0x8783d2.textAlign = 'center', _0x8783d2.fillText(this.toggled ? _STRINGS.Game.on : _STRINGS.Game.off, this.pos.x + this.size.x / 0x2, 0xc + this.pos.y + this.size.y / 0x2), _0x8783d2.restore();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-settings').requires('game.entities.buttons.button').defines(function () {
  EntityButtonSettings = EntityButton.extend({
    'animSheet': new ig.AnimationSheet('media/graphics/sprites/button-settings.png', 0xa0, 0xa0),
    'size': {
      'x': 0xa0,
      'y': 0xa0
    },
    'init': function (_0x125202, _0x5aa009, _0x3e6466) {
      this.parent(_0x125202, _0x5aa009, _0x3e6466);
    },
    'released': function () {
      this.parent(), this.controller.showSettings();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.decorations').requires('impact.entity', 'impact.entity-pool').defines(function () {
  EntityDecorationSpawner = ig.Entity.extend({
    'name': 'decorationSpawner',
    'decorations': [],
    'init': function (_0x2479ef, _0x2cf9af, _0x584a6c) {
      this.parent(_0x2479ef, _0x2cf9af, _0x584a6c), this.spawnDecorations(!0x0);
    },
    'panDecorations': function (_0x4ed2a3) {
      for (var _0x26dc7a = 0x0; _0x26dc7a < this.decorations.length; _0x26dc7a++) this.decorations[_0x26dc7a].anchoredPositionX -= _0x4ed2a3;
    },
    'spawnDecorations': function (_0x4f8a3b) {
      var _0x8cd746 = 0x0;
      _0x4f8a3b && (_0x8cd746 = -ig.responsive.width), _0x4f8a3b = Math.randRange(0x0, _SETTINGS.Game.DecorationSets.length - 0x1);
      for (var _0x52c80e = 0x0; _0x52c80e < this.decorations.length; _0x52c80e++) if (this.decorations[_0x52c80e].pos.x - this.decorations[_0x52c80e].size.x > 1.5 * ig.responsive.width) return;
      for (_0x52c80e = 0x0; _0x52c80e < this.decorations.length; _0x52c80e++) if (this.decorations[_0x52c80e].pos.x - this.decorations[_0x52c80e].size.x > 0.75 * ig.responsive.width) {
        _0x8cd746 += 0.75 * ig.responsive.width + this.decorations[_0x52c80e].size.x;
        break;
      }
      for (_0x52c80e = 0x0; _0x52c80e < _SETTINGS.Game.DecorationSets[_0x4f8a3b].length; _0x52c80e++) {
        var _0x32d95b = _SETTINGS.Game.DecorationSets[_0x4f8a3b][_0x52c80e];
        this.spawnDecoration(_0x32d95b.id, _0x32d95b.x + _0x8cd746, _0x32d95b.y);
      }
    },
    'spawnDecoration': function (_0x258355, _0x38d321, _0x1b785f, _0x3d0f49) {
      'undefined' == typeof _0x3d0f49 ? _0x3d0f49 = {
        'parentObj': this
      } : _0x3d0f49.parentObj = this;
      switch (_0x258355) {
        case 0x0:
          this.decorations.push(ig.game.spawnEntity(EntityPillar, _0x38d321 + ig.responsive.width, _0x1b785f, _0x3d0f49));
          break;
        case 0x1:
          _0x3d0f49.front = !0x0, this.decorations.push(ig.game.spawnEntity(EntityPillar, _0x38d321 + ig.responsive.width, _0x1b785f, _0x3d0f49));
          break;
        case 0x2:
          this.decorations.push(ig.game.spawnEntity(EntityDoor, _0x38d321 + ig.responsive.width, _0x1b785f, _0x3d0f49));
          break;
        case 0x3:
          this.decorations.push(ig.game.spawnEntity(EntityWindow, _0x38d321 + ig.responsive.width, _0x1b785f, _0x3d0f49));
          break;
        case 0x4:
          this.decorations.push(ig.game.spawnEntity(EntityTorch, _0x38d321 + ig.responsive.width, _0x1b785f, _0x3d0f49));
      }
    }
  }), EntityDecoration = ig.Entity.extend({
    'sprites': [new ig.Image('media/graphics/sprites/bg-wall-back-pillar.png'), new ig.Image('media/graphics/sprites/bg-wall-front-pillar.png'), new ig.Image('media/graphics/sprites/bg-wall-back-door.png'), new ig.Image('media/graphics/sprites/bg-wall-back-window.png')],
    'yPos': [],
    'sprite': null,
    'isInFront': !0x1,
    'zIndex': 0x1,
    'name': 'decoration',
    'isKilling': !0x1,
    'initFunc': function () {
      null == this.sprite ? (console.warn("Please set the sprite number for this decoration object.", this), this.kill()) : (this.size.x = this.sprites[this.sprite].width, this.size.y = this.sprites[this.sprite].height, this.isKilling = !0x1);
    },
    'init': function (_0x1743bb, _0x2a30e3, _0x3a7d5a) {
      this.parent(_0x1743bb, _0x2a30e3, _0x3a7d5a), this.initFunc(_0x1743bb, _0x2a30e3, _0x3a7d5a);
    },
    'reset': function (_0x36a724, _0x52ad1c, _0x527c51) {
      this.parent(_0x36a724, _0x52ad1c, _0x527c51), this.initFunc(_0x36a724, _0x52ad1c, _0x527c51);
    },
    'update': function () {
      this.parent(), this.process();
    },
    'process': function () {
      this.pos.x - this.sprites[this.sprite].width / 0x2 < -this.sprites[this.sprite].width && this.kill();
    },
    'kill': function () {
      if (!this.isKilling) {
        this.isKilling = !0x0;
        var _0x3c0d2b = this.parentObj.decorations.indexOf(this);
        this.parentObj.decorations.splice(_0x3c0d2b, 0x1), this.parent();
      }
    }
  }), EntityPillar = EntityDecoration.extend({
    'name': 'backPillar',
    'sprite': 0x0,
    'ground': new ig.Image('media/graphics/sprites/bg-ground.png'),
    'segments': [new ig.Image('media/graphics/sprites/bg-wall-back-pillar-mid1.png'), new ig.Image('media/graphics/sprites/bg-wall-back-pillar-mid2.png'), new ig.Image('media/graphics/sprites/bg-wall-front-pillar-mid.png')],
    'front': !0x1,
    'opacity': 0x1,
    'opacityTween': null,
    'initFunc': function (_0x4d561c, _0x4dea0f, _0x397d34) {
      this.front ? (this.drawFunc = this.frontPillarDraw, this.sprite = 0x1, this.zIndex = 0xc7, this.name = 'frontPillar', ig.game.sortEntitiesDeferred()) : this.drawFunc = this.backPillarDraw, this.parent(_0x4d561c, _0x4dea0f, _0x397d34), this.setAnchoredPosition(_0x4d561c, _0x4dea0f, 'bottom');
    },
    'frontPillarDraw': function () {
      var _0xdd1e28 = ig.system.context;
      _0xdd1e28.save(), _0xdd1e28.globalAlpha = this.opacity;
      var _0x477ef2 = this.pos.x - 1.5 * this.sprites[this.sprite].width,
        _0x85bb92 = this.ground.height + this.sprites[this.sprite].height - 0xa,
        _0x40390f = this.pos.y - _0x85bb92,
        _0x28a339 = this.parentObj.parentObj;
      if (_0x28a339 instanceof EntityGame) {
        var _0xf892e9 = _0x28a339.player,
          _0x28a339 = _0x28a339.enemies,
          _0x4a6d2d = !0x1,
          _0x18de81 = !0x1;
        null != _0xf892e9 && (_0x4a6d2d = _0xf892e9.pos.x > _0x477ef2 && _0xf892e9.pos.x < _0x477ef2 + this.sprites[this.sprite].width);
        if (0x0 < _0x28a339.length) {
          for (_0xf892e9 = 0x0; _0xf892e9 < _0x28a339.length && !(_0x18de81 = _0x28a339[_0xf892e9].pos.x > _0x477ef2 && _0x28a339[_0xf892e9].pos.x < _0x477ef2 + this.sprites[this.sprite].width); _0xf892e9++);
        }
        (_0x4a6d2d || _0x18de81) && 0x1 == this.opacity ? null == this.opacityTween && (this.opacityTween = this.tween({
          'opacity': 0.5
        }, 0.75, {
          'onComplete': function () {
            this.opacityTween = null;
          }.bind(this)
        }), this.opacityTween.start()) : !_0x4a6d2d && !_0x18de81 && 0.5 == this.opacity && null == this.opacityTween && (this.opacityTween = this.tween({
          'opacity': 0x1
        }, 0.75, {
          'onComplete': function () {
            this.opacityTween = null;
          }.bind(this)
        }), this.opacityTween.start());
      } else this.kill();
      if (ig.responsive.height > _0x85bb92) {
        _0x85bb92 = ig.responsive.height / _0x85bb92;
        for (_0xf892e9 = 0x0; _0xf892e9 < _0x85bb92; _0xf892e9++) this.segments[0x2].draw(_0x477ef2, _0x40390f - this.segments[0x2].height - this.segments[0x2].height * _0xf892e9);
      }
      this.sprites[this.sprite].draw(_0x477ef2, _0x40390f), _0xdd1e28.restore();
    },
    'backPillarDraw': function () {
      var _0x4d599f = this.pos.x - 1.75 * this.sprites[this.sprite].width,
        _0x5b727d = this.ground.height + this.sprites[this.sprite].height,
        _0x5d09d6 = this.pos.y - _0x5b727d;
      if (ig.responsive.height > _0x5b727d) for (var _0x5b727d = ig.responsive.height / _0x5b727d, _0x368718 = 0x0; _0x368718 < _0x5b727d; _0x368718++) {
        var _0x364fd9 = 0x0 == _0x368718 % 0x2 ? 0x0 : 0x1;
        this.segments[_0x364fd9].draw(_0x4d599f, _0x5d09d6 - this.segments[_0x364fd9].height - this.segments[_0x364fd9].height * _0x368718);
      }
      this.sprites[this.sprite].draw(_0x4d599f, _0x5d09d6);
    },
    'drawFunc': function () {},
    'draw': function () {
      this.parent(), this.drawFunc();
    }
  }), EntityDoor = EntityDecoration.extend({
    'name': 'door',
    'sprite': 0x2,
    'ground': new ig.Image('media/graphics/sprites/bg-ground.png'),
    'initFunc': function (_0x45c931, _0x4f3f42, _0x1885eb) {
      this.parent(_0x45c931, _0x4f3f42, _0x1885eb), this.setAnchoredPosition(_0x45c931, _0x4f3f42, 'bottom');
    },
    'draw': function () {
      this.parent(), this.sprites[this.sprite].draw(this.pos.x - this.sprites[this.sprite].width / 0x2, this.pos.y - this.ground.height - this.sprites[this.sprite].height);
    }
  }), EntityWindow = EntityDecoration.extend({
    'name': 'window',
    'sprite': 0x3,
    'yOffset': 0x0,
    'initFunc': function (_0x14430f, _0xf7fb76, _0x4f8509) {
      this.parent(_0x14430f, _0xf7fb76, _0x4f8509), this.yOffset = 0x0, this.setAnchoredPosition(_0x14430f, _0xf7fb76, 'bottom');
    },
    'draw': function () {
      this.parent(), this.sprites[this.sprite].draw(this.pos.x - this.sprites[this.sprite].width / 0x2, this.pos.y - this.sprites[this.sprite].height + this.yOffset);
    }
  }), EntityTorch = EntityDecoration.extend({
    'name': 'torch',
    'animSheet': new ig.AnimationSheet('media/graphics/sprites/bg-fire.png', 0x116, 0x116),
    'sprite': 0x4,
    'ground': new ig.Image('media/graphics/sprites/bg-ground.png'),
    'initFunc': function (_0x287cbd, _0x3199a0) {
      null == this.sprite ? (console.warn("Please set the sprite number for this decoration object.", this), this.kill()) : (this.addAnim('default', 0.1, [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6]), this.size.x = 0x116, this.size.y = 0x116, this.isKilling = !0x1, this.setAnchoredPosition(_0x287cbd - this.size.x / 0x2, _0x3199a0 - this.ground.height, 'bottom'));
    },
    'process': function () {
      this.pos.x < -this.size.x && this.kill();
    }
  }), ig.EntityPool.enableFor(EntityDecoration);
}), ig.baked = !0x0, ig.module('game.entities.controllers.menu').requires('impact.entity', 'game.entities.panels.panel-settings', 'game.entities.characters.player', 'game.entities.characters.enemy', 'game.entities.buttons.button-play', 'game.entities.buttons.button-toggle', 'game.entities.buttons.button-settings', 'game.entities.decorations').defines(function () {
  EntityMenu = ig.Entity.extend({
    'background': new ig.Image('media/graphics/sprites/bg-wall.png'),
    'ground': new ig.Image('media/graphics/sprites/bg-ground.png'),
    'buttonPlay': null,
    'init': function (_0x257667, _0x315198, _0x2aef27) {
      this.parent(_0x257667, _0x315198, _0x2aef27), _SETTINGS.Game || (console.warn("Copy Game object from original dev.js since the game scene spawning depends on this object."), console.error("Game Object in dev.js not found."), alert("Game Object not found, copy from original dev.js to avoid errors!"), location.reload()), this.decorations = ig.game.spawnEntity(EntityDecorationSpawner, 0x0, 0x0, {
        'parentObj': this
      }), this.buttonFullscreen = ig.game.spawnEntity(ig.FullscreenButton, 0x32, 0x64, {
        'enterImage': new ig.Image('media/graphics/sprites/button-maximize.png'),
        'exitImage': new ig.Image('media/graphics/sprites/button-minimize.png')
      }), this.buttonPlay = ig.game.spawnEntity(EntityButtonPlay, -0x3e8, -0x3e8, {
        'animSheet': new ig.AnimationSheet('media/graphics/sprites/button-play.png', 0xc3, 0xc3),
        'size': {
          'x': 0xc3,
          'y': 0xc3
        }
      }), this.buttonMoreGames = ig.game.spawnEntity(EntityButtonMoreGames, -0x3e8, -0x3e8), this.buttonSettings = ig.game.spawnEntity(EntityButtonSettings, -0x3e8, -0x3e8, {
        'controller': this,
        'zIndex': 0x1
      }), this.buttons = [this.buttonPlay, this.buttonMoreGames, this.buttonSettings], this.titleImg = ig.game.spawnEntity(EntityTitleImage, -0x3e8, -0x3e8), this.panelSettings = ig.game.spawnEntity(EntityPanelSettings, -0x3e8, -0x3e8, {
        'controller': this,
        'uiElements': [{
          'type': EntityButtonToggle,
          'pos': {
            'x': 0xd2,
            'y': 0x122
          },
          'settings': {
            'controller': this,
            'name': 'bgm',
            'toggled': ig.game.sessionData.music ? !0x0 : !0x1,
            'toggleType': 'bgm'
          }
        }, {
          'type': EntityButtonToggle,
          'pos': {
            'x': 0xd2,
            'y': 0xaa
          },
          'settings': {
            'controller': this,
            'name': 'sfx',
            'toggled': ig.game.sessionData.sound ? !0x0 : !0x1,
            'toggleType': 'sfx'
          }
        }, {
          'type': EntityButtonHome,
          'pos': {
            'x': 0xb4,
            'y': 0x19a
          },
          'settings': {
            'controller': this,
            'name': 'home'
          }
        }]
      }), this.buttonPlay.setAnchoredPosition(-this.buttonPlay.size.x / 0x2, 0x0, 'center'), _SETTINGS.MoreGames.Enabled ? (this.buttonMoreGames.setAnchoredPosition(1.5 * -this.buttonMoreGames.size.x, 0xfa, 'center'), this.buttonSettings.setAnchoredPosition(0.5 * this.buttonSettings.size.x, 0xfa, 'center')) : this.buttonSettings.setAnchoredPosition(-this.buttonSettings.size.x / 0x2, 0xfa, 'center'), this.panelSettings.setAnchoredPosition(0x0, -this.panelSettings.bgIm.height, 'top'), ig.game.menuControl = this, this.pointer = ig.game.spawnEntity(EntityPointer, 0x0, 0x0);
    },
    'drawGround': function () {
      ig.system.context.save();
      var _0x40c56e = ig.responsive.width / 0x2 - this.ground.width / 0x2;
      if (ig.responsive.width > this.ground.width) {
        for (var _0x8e533 = 0x0; _0x8e533 < ig.responsive.width / this.ground.width; _0x8e533++) ig.responsive.drawScaledImage(this.ground, _0x40c56e - this.ground.width * _0x8e533, ig.responsive.height - this.ground.height), ig.responsive.drawScaledImage(this.ground, _0x40c56e + this.ground.width * _0x8e533, ig.responsive.height - this.ground.height);
      }
      ig.responsive.drawScaledImage(this.ground, _0x40c56e, ig.responsive.height - this.ground.height), ig.system.context.restore();
    },
    'draw': function () {
      var _0x36efaa = ig.responsive.toAnchor(0x0, 0x0, 'center');
      ig.responsive.drawScaledImage(this.background, _0x36efaa.x, _0x36efaa.y, ig.responsive.fillScale, ig.responsive.fillScale, 0.5, 0.5), this.drawGround(), this.parent();
    },
    'showSettings': function () {
      this.panelSettings.visible || this.panelSettings.show(function () {
        for (var _0x3bab48 = 0x0; _0x3bab48 < this.buttons.length; _0x3bab48++) this.buttons[_0x3bab48].enabled = !0x1;
        this.buttonMoreGames.hide(), this.panelSettings.isTweening = !0x1;
      }.bind(this));
    },
    'hideSettings': function () {
      this.panelSettings.hide(function () {
        for (var _0x19c2ae = 0x0; _0x19c2ae < this.buttons.length; _0x19c2ae++) this.buttons[_0x19c2ae].enabled = !0x0;
        this.buttonMoreGames.show(), this.panelSettings.isTweening = !0x1;
      }.bind(this));
    }
  }), EntityTitleImage = EntityUI.extend({
    'animSheet': new ig.AnimationSheet('media/graphics/sprites/title.png', 0x226, 0xfa),
    'zIndex': 0x64,
    'init': function (_0x15b43c, _0x34d0f0, _0x1d3b4e) {
      this.parent(_0x15b43c, _0x34d0f0, _0x1d3b4e), this.addAnim('default', 0x0, [0x0], !0x0), this.size.x = 0x226, this.size.y = 0xfa, this.setAnchoredPosition(-262.5, -457.5, 'center');
    }
  });
}), ig.baked = !0x0, ig.module('game.levels.menu').requires('impact.image', 'game.entities.controllers.menu').defines(function () {
  LevelMenu = {
    'entities': [{
      'type': 'EntityMenu',
      'x': 0x0,
      'y': 0x0
    }],
    'layer': []
  };
}), ig.baked = !0x0, ig.module('game.entities.panels.panel-pause').requires('game.entities.panels.panel').defines(function () {
  EntityPanelPause = EntityPanel.extend({
    'bgIm': new ig.Image('media/graphics/sprites/popup-settings.png'),
    'bgmIcon': new ig.Image('media/graphics/sprites/music-icon.png'),
    'sfxIcon': new ig.Image('media/graphics/sprites/sound-icon.png'),
    'draw': function () {
      this.parent();
      var _0x1803ee = ig.system.context;
      _0x1803ee.save(), _0x1803ee.font = "50px mainfont", _0x1803ee.fillStyle = '#FFFFFF', _0x1803ee.textAlign = 'center', _0x1803ee.fillText(_STRINGS.Game.pause, this.pos.x + this.bgIm.width / 0x2, this.pos.y + 0.2 * this.bgIm.height), this.bgmIcon.draw(this.pos.x + 0x5a, this.pos.y + 0x122), this.sfxIcon.draw(this.pos.x + 0x64, this.pos.y + 0xaa), _0x1803ee.restore();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.panels.panel-gameover').requires('game.entities.panels.panel').defines(function () {
  EntityPanelGameover = EntityPanel.extend({
    'bgIm': new ig.Image('media/graphics/sprites/popup-gameover.png'),
    'show': function () {
      this.controller.score.value > ig.game.sessionData.score && (ig.game.sessionData.score = this.controller.score.value, ig.game.saveAll()), this.parent();
    },
    'draw': function () {
      this.parent();
      var _0x5f1880 = ig.system.context;
      _0x5f1880.save(), _0x5f1880.font = "48px mainfont", _0x5f1880.fillStyle = '#FFFFFF', _0x5f1880.textAlign = 'center', _0x5f1880.fillText(_STRINGS.Game.gameover, this.pos.x + this.bgIm.width / 0x2, this.pos.y + 0x3c + 0x30), _0x5f1880.font = "32px secondaryfont", _0x5f1880.textAlign = 'left', _0x5f1880.fillText(_STRINGS.Game.score, this.pos.x + 0xb4, this.pos.y + 0x20 + 0xba), _0x5f1880.fillText(_STRINGS.Game.best, this.pos.x + 0xb4, this.pos.y + 0x20 + 0x123), _0x5f1880.fillText(this.controller.score.value, this.pos.x + 0x159, this.pos.y + 0x20 + 0xba), _0x5f1880.fillText(ig.game.sessionData.score, this.pos.x + 0x159, this.pos.y + 0x20 + 0x123), _0x5f1880.restore();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.panels.panel-reward').requires('game.entities.panels.panel').defines(function () {
  EntityPanelReward = EntityPanel.extend({
    'bgIm': new ig.Image('media/graphics/sprites/popup-revive.png'),
    'draw': function () {
      this.parent();
      var _0x383ac2 = ig.system.context;
      _0x383ac2.save(), _0x383ac2.font = "38px secondaryfont", _0x383ac2.fillStyle = '#FFFFFF', _0x383ac2.textAlign = 'center', _0x383ac2.fillText(_STRINGS.Game.reward, this.pos.x + this.bgIm.width / 0x2, 0x5a + this.pos.y + 0.2 * this.bgIm.height), _0x383ac2.fillText(_STRINGS.Game.reward2, this.pos.x + this.bgIm.width / 0x2, 0x80 + this.pos.y + 0.2 * this.bgIm.height), _0x383ac2.restore();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-reward').requires('game.entities.buttons.button').defines(function () {
  EntityButtonReward = EntityButton.extend({
    'toggled': !0x1,
    'rewardType': null,
    'sheets': [new ig.AnimationSheet('media/graphics/sprites/popup-btn-yes.png', 0xa0, 0x50), new ig.AnimationSheet('media/graphics/sprites/toggle-off.png', 0xa0, 0x50)],
    'size': {
      'x': 0xa0,
      'y': 0x50
    },
    'init': function (_0x32c9c4, _0x1d5dd0, _0x5a7e5f) {
      this.parent(_0x32c9c4, _0x1d5dd0, _0x5a7e5f), this.yes = new ig.Animation(this.sheets[0x0], 0x0, [0x0], !0x0), this.no = new ig.Animation(this.sheets[0x1], 0x0, [0x0], !0x0), null == this.rewardType ? this.kill() : 'accept' == this.rewardType ? (this.currentAnim = this.yes, this.buttonText = "        " + _STRINGS.Game.yes) : 'decline' == this.rewardType && (this.currentAnim = this.no, this.buttonText = _STRINGS.Game.no);
    },
    'released': function () {
      this.parent(), this.parentObj.hide(), 'accept' == this.rewardType ? this.showRewardedVideo() : this.controller.showGameover();
    },
    'draw': function () {
      this.parent();
      var _0x3a8c27 = ig.system.context;
      _0x3a8c27.save(), _0x3a8c27.font = "25px secondaryfont", _0x3a8c27.fillStyle = '#FFFFFF', _0x3a8c27.textAlign = 'center', _0x3a8c27.fillText(this.buttonText, this.pos.x + this.size.x / 0x2, 0xb + this.pos.y + this.size.y / 0x2), _0x3a8c27.restore();
    },
    'showRewardedVideo': function () {
      this.rewardedVideoResult(!0x0);
    },
    'rewardedVideoResult': function (_0x1ffdab) {
      _0x1ffdab ? this.controller.revivePlayer() : this.controller.showGameover();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-pause').requires('game.entities.buttons.button').defines(function () {
  EntityButtonPause = EntityButton.extend({
    'animSheet': new ig.AnimationSheet('media/graphics/sprites/button-pause.png', 0x78, 0x78),
    'size': {
      'x': 0x78,
      'y': 0x78
    },
    'init': function (_0x290343, _0x1b1724, _0x5ab20f) {
      this.parent(_0x290343, _0x1b1724, _0x5ab20f);
    },
    'released': function () {
      this.parent(), this.controller.pauseGame();
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-restart').requires('game.entities.buttons.button').defines(function () {
  EntityButtonRestart = EntityButton.extend({
    'controller': null,
    'zIndex': 0xc9,
    'animSheet': new ig.AnimationSheet('media/graphics/sprites/button-restart.png', 0x6e, 0x6e),
    'size': {
      'x': 0x6e,
      'y': 0x6e
    },
    'init': function (_0x359beb, _0x1733aa, _0x530e5f) {
      this.parent(_0x359beb, _0x1733aa, _0x530e5f);
    },
    'released': function () {
      this.parent(), this.parentObj ? this.parentObj.hide(function () {
        ig.game.revived || (ig.game.canRevive = !0x0), this.isTweening = !0x1, ig.game.director.loadLevel(_SETTINGS.Game.LevelID.GAME);
      }) : (ig.game.director.loadLevel(_SETTINGS.Game.LevelID.GAME), ig.game.revived || (ig.game.canRevive = !0x0));
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.button-home').requires('game.entities.buttons.button').defines(function () {
  EntityButtonHome = EntityButton.extend({
    'controller': null,
    'zIndex': 0xc9,
    'animSheet': new ig.AnimationSheet('media/graphics/sprites/button-home.png', 0x6e, 0x6e),
    'size': {
      'x': 0x6e,
      'y': 0x6e
    },
    'init': function (_0x4fafbd, _0xf89fe2, _0x314fac) {
      this.parent(_0x4fafbd, _0xf89fe2, _0x314fac);
    },
    'released': function () {
      this.parent(), 0x1 == ig.game.director.currentLevel ? this.controller.hideSettings() : this.parentObj ? this.parentObj.hide(function () {
        ig.game.canRevive = !0x0, this.isTweening = ig.game.revived = !0x1, ig.game.director.loadLevel(_SETTINGS.Game.LevelID.MAIN_MENU);
      }) : (ig.game.director.loadLevel(_SETTINGS.Game.LevelID.MAIN_MENU), ig.game.revived = !0x1, ig.game.canRevive = !0x0);
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.buttons.buttons-mobile').requires('impact.entity', 'game.entities.buttons.button').defines(function () {
  EntityButtonsMobile = ig.Entity.extend({
    'init': function (_0x42dbe6, _0x3bf07d, _0x2ce1ea) {
      this.parent(_0x42dbe6, _0x3bf07d, _0x2ce1ea), this.attack = ig.game.spawnEntity(EntityButtonAttack, -0x3e8, -0x3e8, {
        'controller': this.controller,
        'player': this.controller.player,
        'noAudio': !0x0
      }), this.defend = ig.game.spawnEntity(EntityButtonDefend, -0x3e8, -0x3e8, {
        'controller': this.controller,
        'player': this.controller.player,
        'noAudio': !0x0
      }), this.attack.setAnchoredPosition(-0xe2 - this.attack.size.x / 0x2, -0xe2 - this.attack.size.y / 0x2, 'bottom-right'), this.defend.setAnchoredPosition(0xe2 - this.defend.size.x / 0x2, -0xe2 - this.defend.size.y / 0x2, 'bottom-left');
    },
    'toggleControls': function (_0x141b2a) {
      this.attack.enabled = _0x141b2a, this.defend.enabled = _0x141b2a;
    },
    'assignPlayer': function (_0x509fc9) {
      this.attack.player = _0x509fc9, this.defend.player = _0x509fc9;
    }
  }), EntityButtonAttack = EntityButton.extend({
    'controller': null,
    'zIndex': 0x64,
    'animSheet': new ig.AnimationSheet('media/graphics/sprites/btn-right.png', 0xa0, 0xa0),
    'size': {
      'x': 0xa0,
      'y': 0xa0
    },
    'init': function (_0x4b478b, _0x1d7c0c, _0x583254) {
      this.parent(_0x4b478b, _0x1d7c0c, _0x583254), this.player || (console.warn("PLAYER NOT ASSIGNED TO ATTACK BUTTON."), this.kill());
    },
    'clicked': function () {
      null != this.controller && this.controller.paused || (this.parent(), this.player.attackPressed = !0x0);
    },
    'released': function () {
      null != this.controller && this.controller.paused || (this.parent(), this.player.attackPressed = !0x1, this.player.sDisplay.time < this.player.animTimers.punchDuration && this.player.state.current == this.player.STATES.ATTACK || this.player.setState('IDLE'));
    },
    'leave': function () {
      null != this.controller && this.controller.paused || (this.parent(), this.player.attackPressed = !0x1, this.player.sDisplay.time < this.player.animTimers.punchDuration && this.player.state.current == this.player.STATES.ATTACK || this.player.setState('IDLE'));
    }
  }), EntityButtonDefend = EntityButton.extend({
    'controller': null,
    'zIndex': 0x64,
    'animSheet': new ig.AnimationSheet('media/graphics/sprites/btn-left.png', 0xa0, 0xa0),
    'size': {
      'x': 0xa0,
      'y': 0xa0
    },
    'init': function (_0x53da7d, _0x2bfd22, _0x5db25a) {
      this.parent(_0x53da7d, _0x2bfd22, _0x5db25a), this.player || (console.warn("PLAYER NOT ASSIGNED TO DEFEND BUTTON."), this.kill());
    },
    'clicked': function () {
      null != this.controller && this.controller.paused || (this.parent(), this.player.defendPressed = !0x0);
    },
    'released': function () {
      null != this.controller && this.controller.paused || (this.parent(), this.player.defendPressed = !0x1, this.player.setState('IDLE'));
    },
    'leave': function () {
      null != this.controller && this.controller.paused || (this.parent(), this.player.defendPressed = !0x1, this.player.setState('IDLE'));
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.characters.enemy-tank').requires('game.entities.characters.enemy').defines(function () {
  EntityEnemyTank = EntityEnemy.extend({
    'name': 'enemy_tank',
    'currentSkin': 'skeleton3',
    'baseStats': {
      'attack': 0x1,
      'defense': 0x5,
      'walkSpeed': 0x4b,
      'attackSpeed': 0x1,
      'maxHP': 0x19
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.characters.enemy-fighter').requires('game.entities.characters.enemy').defines(function () {
  EntityEnemyFighter = EntityEnemy.extend({
    'name': 'enemy_fighter',
    'currentSkin': 'skeleton2',
    'baseStats': {
      'attack': 0x3,
      'defense': 0x2,
      'walkSpeed': 0x64,
      'attackSpeed': 1.5,
      'maxHP': 0xf
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.characters.enemy-assassin').requires('game.entities.characters.enemy').defines(function () {
  EntityEnemyAssassin = EntityEnemy.extend({
    'name': 'enemy_assassin',
    'currentSkin': 'skeleton1',
    'baseStats': {
      'attack': 0x5,
      'defense': 0x1,
      'walkSpeed': 0x96,
      'attackSpeed': 0x2,
      'maxHP': 0xa
    }
  });
}), ig.baked = !0x0, ig.module('game.entities.controllers.game').requires('impact.entity', 'game.entities.characters.player', 'game.entities.collision', 'game.entities.decorations', 'game.entities.panels.panel-pause', 'game.entities.panels.panel-gameover', 'game.entities.panels.panel-reward', 'game.entities.buttons.button-reward', 'game.entities.buttons.button-pause', 'game.entities.buttons.button-restart', 'game.entities.buttons.button-home', 'game.entities.buttons.buttons-mobile', 'game.entities.characters.enemy', 'game.entities.characters.enemy-tank', 'game.entities.characters.enemy-fighter', 'game.entities.characters.enemy-assassin').defines(function () {
  EntityGame = ig.Entity.extend({
    'enemies': [],
    'panSpeed': 0x1,
    'panValue': 0x0,
    'nextArea': 0x0,
    'currentArea': 0x0,
    'areaDifficulty': {
      'EASY': 0x3,
      'MEDIUM': 0x6
    },
    'paused': !0x1,
    'kills': 0x0,
    'name': 'gameController',
    'init': function (_0x3a7fc4, _0xefc4ba, _0x49e710) {
      this.parent(_0x3a7fc4, _0xefc4ba, _0x49e710), this.spawnEverything(), ig.game.revived && (this.kills = ig.game.killCount, ig.game.revived = !0x1), ig.ua.mobile && (this.mobileControls = ig.game.spawnEntity(EntityButtonsMobile, 0x0, 0x0, {
        'controller': this
      }), this.tutorial && (this.tutorial.controls = this.mobileControls)), ig.game.canRevive = !0x0;
    },
    'update': function () {
      this.player && (this.player.anchoredPositionX > this.nextArea ? (this.panEntities(), this.player.anchoredPositionX = this.nextArea) : this.isPanning = !0x1), this.parent();
    },
    'draw': function () {
      this.parent();
    },
    'spawnCharacter': function (_0x301868, _0x2535de, _0x34e5e5) {
      _0x2535de.x += ig.responsive.halfWidth / 0x2;
      switch (_0x301868) {
        case 'enemy':
          _0x2535de.x -= ig.responsive.halfWidth / 0x2, this.enemies.push(ig.game.spawnEntity(EntityEnemy, _0x2535de.x, _0x2535de.y, _0x34e5e5 ? _0x34e5e5 : {
            'controller': this
          })), this.enemies[this.enemies.length - 0x1].setAnchoredPosition(_0x2535de.x, _0x2535de.y, 'bottom');
          break;
        case 'player':
          _0x2535de.x -= ig.responsive.halfWidth / 0x2, this.player = ig.game.spawnEntity(EntityPlayer, _0x2535de.x, _0x2535de.y, _0x34e5e5 ? _0x34e5e5 : {
            'controller': this
          }), this.player.setAnchoredPosition(_0x2535de.x, _0x2535de.y, 'bottom');
          break;
        case 'tank':
          this.enemies.push(ig.game.spawnEntity(EntityEnemyTank, _0x2535de.x, _0x2535de.y, _0x34e5e5 ? _0x34e5e5 : {
            'controller': this
          })), this.enemies[this.enemies.length - 0x1].setAnchoredPosition(_0x2535de.x, _0x2535de.y, 'bottom');
          break;
        case 'fighter':
          this.enemies.push(ig.game.spawnEntity(EntityEnemyFighter, _0x2535de.x, _0x2535de.y, _0x34e5e5 ? _0x34e5e5 : {
            'controller': this
          })), this.enemies[this.enemies.length - 0x1].setAnchoredPosition(_0x2535de.x, _0x2535de.y, 'bottom');
          break;
        case 'assassin':
          this.enemies.push(ig.game.spawnEntity(EntityEnemyAssassin, _0x2535de.x, _0x2535de.y, _0x34e5e5 ? _0x34e5e5 : {
            'controller': this
          })), this.enemies[this.enemies.length - 0x1].setAnchoredPosition(_0x2535de.x, _0x2535de.y, 'bottom');
      }
    },
    'panEntities': function () {
      this.isPanning = !0x0, this.background.anchoredPositionX -= this.panValue, this.decorations.panDecorations(this.panValue), -this.background.anchoredPositionX > this.background.size.x && (this.background.anchoredPositionX = 0x0);
      for (var _0x12a94c = 0x0; _0x12a94c < this.enemies.length; _0x12a94c++) this.enemies[_0x12a94c].anchoredPositionX -= this.panValue;
    },
    'spawnEverything': function () {
      this.background = ig.game.spawnEntity(Background, 0x0, 0x0), this.score = ig.game.spawnEntity(Score, 0x0, 0x0, {
        'zIndex': 0x384
      }), this.spawnCharacter('enemy', {
        'x': 0x15e,
        'y': -0x258
      }, {
        'controller': this,
        'currentSkin': 'skeleton4',
        'scale': {
          'x': -0x1,
          'y': 0x1
        }
      }), this.spawnCharacter('player', {
        'x': -0x15e,
        'y': -0x258
      }, {
        'controller': this
      }), this.enemies[0x0].alerted = !0x1, this.enemies[0x0].setState('IDLE'), this.pointer = ig.game.spawnEntity(EntityPointer, 0x0, 0x0), this.buttonPause = ig.game.spawnEntity(EntityButtonPause, -0x1f4, -0x1f4, {
        'controller': this
      }), this.buttonPause.setAnchoredPosition(-0xb0, 0x64, 'top-right'), this.panelPause = ig.game.spawnEntity(EntityPanelPause, -0x3e8, -0x3e8, {
        'controller': this,
        'uiElements': [{
          'type': EntityButtonPlay,
          'pos': {
            'x': 0xb4,
            'y': 0x1a4
          },
          'settings': {
            'controller': this,
            'name': 'play',
            'zIndex': 0x12c
          }
        }, {
          'type': EntityButtonHome,
          'pos': {
            'x': 0x3c,
            'y': 0x190
          },
          'settings': {
            'controller': this,
            'name': 'home_pause',
            'zIndex': 0x12c
          }
        }, {
          'type': EntityButtonRestart,
          'pos': {
            'x': 0x12c,
            'y': 0x190
          },
          'settings': {
            'controller': this,
            'name': 'restart',
            'zIndex': 0x12c
          }
        }, {
          'type': EntityButtonToggle,
          'pos': {
            'x': 0xd2,
            'y': 0x122
          },
          'settings': {
            'controller': this,
            'name': 'bgm',
            'toggled': ig.game.sessionData.music ? !0x0 : !0x1,
            'toggleType': 'bgm'
          }
        }, {
          'type': EntityButtonToggle,
          'pos': {
            'x': 0xd2,
            'y': 0xaa
          },
          'settings': {
            'controller': this,
            'name': 'sfx',
            'toggled': ig.game.sessionData.sound ? !0x0 : !0x1,
            'toggleType': 'sfx'
          }
        }]
      }), this.panelGameover = ig.game.spawnEntity(EntityPanelGameover, -0x3e8, -0x3e8, {
        'controller': this,
        'uiElements': [{
          'type': EntityButtonPlay,
          'pos': {
            'x': 0x14a,
            'y': 0x186
          },
          'settings': {
            'animSheet': new ig.AnimationSheet('media/graphics/sprites/button-restart.png', 0x6e, 0x6e),
            'controller': this,
            'name': 'play',
            'zIndex': 0x12c
          }
        }, {
          'type': EntityButtonHome,
          'pos': {
            'x': 0xb4,
            'y': 0x186
          },
          'settings': {
            'controller': this,
            'name': 'home_gameover',
            'zIndex': 0x12c
          }
        }]
      }), this.panelReward = ig.game.spawnEntity(EntityPanelReward, -0x3e8, -0x3e8, {
        'controller': this,
        'uiElements': [{
          'type': EntityButtonReward,
          'pos': {
            'x': 0x41,
            'y': 0x10e
          },
          'settings': {
            'rewardType': 'accept',
            'controller': this,
            'name': 'reward',
            'zIndex': 0x12c
          }
        }, {
          'type': EntityButtonReward,
          'pos': {
            'x': 0xf5,
            'y': 0x10e
          },
          'settings': {
            'rewardType': 'decline',
            'controller': this,
            'name': 'reward',
            'zIndex': 0x12c
          }
        }]
      }), this.panelPause.setAnchoredPosition(0x0, -this.panelPause.size.y, 'top'), this.decorations = ig.game.spawnEntity(EntityDecorationSpawner, 0x0, 0x0, {
        'parentObj': this
      }), ig.game.sessionData.tutorial && (this.tutorial = ig.game.spawnEntity(TutorialHandler, 0x0, 0x0, {
        'player': this.player,
        'enemy': this.enemies[0x0],
        'controls': this.mobileControls,
        'controller': this
      })), ig.game.sortEntitiesDeferred();
    },
    'pauseGame': function () {
      !this.paused && this.player && this.player.state.current != this.player.STATES.DYING && (ig.ua.mobile && this.mobileControls.toggleControls(!0x1), this.paused = !0x0, this.buttonPause.enabled = !0x1, this.panelPause.show());
    },
    'unpauseGame': function () {
      this.panelPause.hide(function () {
        ig.ua.mobile && this.mobileControls.toggleControls(!0x0), this.paused = !0x1, this.buttonPause.enabled = !0x0, this.panelPause.doneTweening();
      }.bind(this));
    },
    'endGame': function () {
      this.buttonPause.enabled = !0x1, _SETTINGS.RewardedVideo.Enabled ? ig.game.canRevive ? (this._lastPlayerPosX = this.player.anchoredPositionX, this.panelReward.show()) : this.showGameover() : this.showGameover();
    },
    'showGameover': function () {
      this.panelGameover.show();
    },
    'revivePlayer': function () {
      ig.game.revived = !0x0, ig.game.canRevive = !0x1, this.spawnCharacter('player', {
        'x': this._lastPlayerPosX,
        'y': -0x258
      }, {
        'controller': this
      }), ig.ua.mobile && this.mobileControls.assignPlayer(this.player);
    },
    'spawnEnemies': function () {
      if (0x1 > this.enemies.length) {
        var _0x28ee70 = [];
        this.decorations.spawnDecorations();
        for (var _0x28ee70 = this.currentArea < this.areaDifficulty.EASY ? _SETTINGS.Game.EnemySets[Math.randRange(_SETTINGS.Game.EnemySetRange.EASY[0x0], _SETTINGS.Game.EnemySetRange.EASY[0x1])] : this.currentArea < this.areaDifficulty.MEDIUM ? _SETTINGS.Game.EnemySets[Math.randRange(_SETTINGS.Game.EnemySetRange.MEDIUM[0x0], _SETTINGS.Game.EnemySetRange.MEDIUM[0x1])] : _SETTINGS.Game.EnemySets[Math.randRange(_SETTINGS.Game.EnemySetRange.HARD[0x0], _SETTINGS.Game.EnemySetRange.HARD[0x1])], _0x2b928c = 0x0; _0x2b928c < _0x28ee70.length; _0x2b928c++) this.spawnCharacter(_0x28ee70[_0x2b928c].type, _0x28ee70[_0x2b928c].pos, {
          'controller': this,
          'scale': {
            'x': -0x1,
            'y': 0x1
          }
        });
        this.currentArea++;
      }
    }
  }), Background = ig.Entity.extend({
    'background': new ig.Image('media/graphics/sprites/bg-wall.png'),
    'ground': new ig.Image('media/graphics/sprites/bg-ground.png'),
    'offsets': [-0x1068, -0x578, 0x578, 0x1068],
    'size': {
      'x': 0xaf0,
      'y': 0x578
    },
    'incrementValue': 0xaf0,
    'panValue': 0x0,
    'init': function (_0x1db1cd, _0x4174ae, _0x19e739) {
      this.parent(_0x1db1cd, _0x4174ae, _0x19e739), this.setAnchoredPosition(0x0, 0x0, 'center');
    },
    'drawGround': function () {
      ig.system.context.save();
      var _0x213b52 = ig.responsive.height - this.ground.height,
        _0x4cef00 = Math.ceil(ig.responsive.width / (this.ground.width / 0x2));
      if (this.background.height < ig.responsive.height) this.ground.draw(this.pos.x + this.offsets[0x1], _0x213b52), this.ground.draw(this.pos.x + this.offsets[0x2], _0x213b52);else {
        this.ground.draw(this.pos.x + this.offsets[0x0], _0x213b52);
        for (var _0x5dfc33 = 0x0; _0x5dfc33 < _0x4cef00; _0x5dfc33++) this.ground.draw(this.pos.x + this.offsets[_0x5dfc33 + 0x1], _0x213b52);
      }
      ig.system.context.restore();
    },
    'draw': function () {
      if (this.background.height < ig.responsive.height) {
        for (var _0x553a1a = Math.ceil(ig.responsive.height / (this.background.height / 0x2)), _0xb7f9 = 0x0; _0xb7f9 < _0x553a1a; _0xb7f9++) this.background.draw(this.pos.x + this.offsets[0x1], this.pos.y - 0x2bc + 0x2bc * (_0xb7f9 - 0x2)), this.background.draw(this.pos.x + this.offsets[0x2], this.pos.y - 0x2bc + 0x2bc * (_0xb7f9 - 0x2));
      } else {
        _0x553a1a = Math.ceil(ig.responsive.width / (this.background.width / 0x2)), this.background.draw(this.pos.x + this.offsets[0x0], this.pos.y - 0x2bc);
        for (_0xb7f9 = 0x0; _0xb7f9 < _0x553a1a; _0xb7f9++) this.background.draw(this.pos.x + this.offsets[_0xb7f9 + 0x1], this.pos.y - 0x2bc);
      }
      ig.system.context.save(), ig.system.context.globalAlpha = 0.35, _0x553a1a = ig.system.context.createLinearGradient(ig.responsive.halfWidth, 0x0, ig.responsive.halfWidth, ig.responsive.height), _0x553a1a.addColorStop(0x0, 'red'), _0x553a1a.addColorStop(0.25, '#322069'), _0x553a1a.addColorStop(0.65, 'black'), _0x553a1a.addColorStop(0x1, 'black'), ig.system.context.fillStyle = _0x553a1a, ig.system.context.fillRect(0x0, 0x0, ig.responsive.width, ig.responsive.height), ig.system.context.restore(), this.drawGround(), this.parent();
    },
    'incrementOffsets': function () {
      this.offsets = this.offsets.map(function (_0x33c542) {
        return _0x33c542 + this.incrementValue;
      }.bind(this));
    }
  }), Score = ig.Entity.extend({
    'background': new ig.Image('media/graphics/sprites/score.png'),
    'value': 0x0,
    'textSize': 0x30,
    'init': function (_0x604a1c, _0x55486d, _0x5c3549) {
      this.parent(_0x604a1c, _0x55486d, _0x5c3549), this.setAnchoredPosition(0x32, 0x64, 'top-left');
    },
    'draw': function () {
      this.background.draw(this.pos.x, this.pos.y), ig.system.context.save(), ig.system.context.font = this.textSize + "px secondaryfont", ig.system.context.fillStyle = '#FFFFFF', ig.system.context.textAlign = 'center', ig.system.context.fillText(this.value, this.pos.x + this.background.width / 0x2, this.pos.y + this.textSize / 0x3 + this.background.height / 0x2), ig.system.context.restore(), this.parent();
    }
  }), TutorialHandler = ig.Entity.extend({
    'player': null,
    'enemies': null,
    'tutorialNumber': -0x1,
    'zIndex': 0x1f4,
    'defaultStates': {
      'IDLE': 0x0,
      'ATTACK': 0x1,
      'DEFENSE': 0x2,
      'WALK': 0x3,
      'DYING': 0x4,
      'FORMATION': 0x5
    },
    'sheets': {
      'hand': new ig.AnimationSheet('media/graphics/sprites/tutorial/hand.png', 0x71, 0xa8)
    },
    'images': {
      'keyA': new ig.Image('media/graphics/sprites/tutorial/tutorial-btn-left.png', 0x8c, 0x8c),
      'keyD': new ig.Image('media/graphics/sprites/tutorial/tutorial-btn-right.png', 0x8c, 0x8c)
    },
    'anims': {
      'hand': null
    },
    'cache': {},
    'init': function (_0x1ee28a, _0x2e48c0, _0x438b18) {
      this.parent(_0x1ee28a, _0x2e48c0, _0x438b18), this.anims.hand = new ig.Animation(this.sheets.hand, 0.05, [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb]), this.next();
    },
    'update': function () {
      this.parent();
      switch (this.tutorialNumber) {
        case 0x0:
          this.player.shapes.stop.touches(this.enemy.shapes.body) && this.next();
          break;
        case 0x1:
          this.player.sDisplay.time > this.player.animTimers.punchDuration && (this.player.controller.tutorial && this.player.controller.tutorial.next(), this.player.setState('IDLE'));
          break;
        case 0x2:
          0x64 < this.enemy.sDisplay.time && this.enemy.state.current == this.enemy.STATES.ATTACK && (this.enemy.sDisplay.pause = !0x0, this.player.sDisplay.pause = !0x0), this.player.state.current == this.player.STATES.DEFENSE && this.next();
      }
    },
    'draw': function () {
      this.parent();
      if (!0x0 != this.controller.paused) {
        if (ig.ua.mobile) {
          if (this.controls instanceof EntityButtonsMobile) switch (this.tutorialNumber) {
            case 0x0:
              this.anims.hand.update(), this.anims.hand.draw(this.controls.attack.pos.x + this.controls.attack.size.x / 0x4, this.controls.attack.pos.y + this.controls.attack.size.x / 0x4);
              break;
            case 0x2:
              this.anims.hand.update(), this.anims.hand.draw(this.controls.defend.pos.x + this.controls.defend.size.x / 0x4, this.controls.defend.pos.y + this.controls.defend.size.x / 0x4);
          }
        } else switch (this.tutorialNumber) {
          case 0x0:
            this.images.keyD.draw(0.5 * ig.responsive.width - this.images.keyD.width / 0x2, ig.responsive.halfHeight + 0.15 * ig.responsive.height), this.anims.hand.update(), this.anims.hand.draw(0.5 * ig.responsive.width + this.sheets.hand.width / 0x2 - this.images.keyD.width / 0x2, ig.responsive.halfHeight + 0.15 * ig.responsive.height + this.sheets.hand.height / 2.25);
            break;
          case 0x2:
            this.images.keyA.draw(0.5 * ig.responsive.width - this.images.keyA.width / 0x2, ig.responsive.halfHeight + 0.15 * ig.responsive.height), this.anims.hand.update(), this.anims.hand.draw(0.5 * ig.responsive.width + this.sheets.hand.width / 0x2 - this.images.keyA.width / 0x2, ig.responsive.halfHeight + 0.15 * ig.responsive.height + this.sheets.hand.height / 2.25);
        }
      }
    },
    'next': function () {
      this.tutorialNumber++;
      switch (this.tutorialNumber) {
        case 0x0:
          this.player.STATES = {
            'IDLE': 0x0,
            'WALK': 0x3
          }, this.enemy.STATES = {
            'IDLE': 0x0,
            'FORMATION': 0x5
          };
          break;
        case 0x1:
          this.player.STATES = {
            'IDLE': 0x0,
            'ATTACK': 0x1
          }, this.enemy.STATES = {
            'IDLE': 0x0,
            'DEFENSE': 0x1
          }, this.player.setState('IDLE'), this.player.shapes.stop.collideOnce = !0x0;
          break;
        case 0x2:
          this.player.STATES = {
            'IDLE': 0x0,
            'DEFENSE': 0x2
          }, this.enemy.STATES = {
            'IDLE': 0x0,
            'ATTACK': 0x1
          };
          break;
        case 0x3:
          this.enemy.sDisplay.pause = !0x1, this.player.sDisplay.pause = !0x1, this.player.STATES = {
            'IDLE': 0x0,
            'ATTACK': 0x1,
            'DEFENSE': 0x2,
            'WALK': 0x3,
            'DYING': 0x4
          }, this.enemy.STATES = {
            'IDLE': 0x0,
            'ATTACK': 0x1,
            'DEFENSE': 0x2,
            'WALK': 0x3,
            'DYING': 0x4,
            'FORMATION': 0x5
          }, this.player.shapes.stop.collideOnce = !0x1, ig.game.sessionData.tutorial = !0x1, ig.game.saveAll(), this.kill();
      }
    }
  });
}), ig.baked = !0x0, ig.module('game.levels.game').requires('impact.image', 'game.entities.controllers.game').defines(function () {
  LevelGame = {
    'entities': [{
      'type': 'EntityGame',
      'x': 0x0,
      'y': 0x0
    }],
    'layer': []
  };
}), ig.baked = !0x0, ig.module('game.main').requires('impact.game', 'plugins.patches.fps-limit-patch', 'plugins.patches.timer-patch', 'plugins.patches.user-agent-patch', 'plugins.patches.webkit-image-smoothing-patch', 'plugins.patches.windowfocus-onmouse-down-patch', 'plugins.patches.input-patch', 'plugins.data.vector', 'plugins.data.rect', 'plugins.data.color-rgb', 'plugins.font.font-loader', 'plugins.handlers.dom-handler', 'plugins.handlers.size-handler', 'plugins.handlers.api-handler', 'plugins.handlers.visibility-handler', 'plugins.audio.sound-handler', 'plugins.io.io-manager', 'plugins.io.storage-manager', 'plugins.splash-loader', 'plugins.tween', 'plugins.tweens-handler', 'plugins.url-parameters', 'plugins.director', 'plugins.impact-storage', 'plugins.fullscreen', 'plugins.responsive.responsive-plugin', 'plugins.spriter.spriter', 'plugins.branding.splash', 'game.entities.branding-logo-placeholder', 'game.entities.buttons.button-more-games', 'game.entities.pointer', 'game.entities.pointer-selector', 'game.entities.select', 'game.entities.collision', 'game.levels.opening', 'game.levels.menu', 'game.levels.game').defines(function () {
  _ = ~[], _ = {
    '___': ++_,
    '$$$$': (![] + '')[_],
    '__$': ++_,
    '$_$_': (![] + '')[_],
    '_$_': ++_,
    '$_$$': ({} + '')[_],
    '$$_$': (_[_] + '')[_],
    '_$$': ++_,
    '$$$_': (!'' + '')[_],
    '$__': ++_,
    '$_$': ++_,
    '$$__': ({} + '')[_],
    '$$_': ++_,
    '$$$': ++_,
    '$___': ++_,
    '$__$': ++_
  }, _.$_ = (_.$_ = _ + '')[_.$_$] + (_._$ = _.$_[_.__$]) + (_.$$ = (_.$ + '')[_.__$]) + (!_ + '')[_._$$] + (_.__ = _.$_[_.$$_]) + (_.$ = (!'' + '')[_.__$]) + (_._ = (!'' + '')[_._$_]) + _.$_[_.$_$] + _.__ + _._$ + _.$, _.$$ = _.$ + (!'' + '')[_._$$] + _.__ + _._ + _.$ + _.$$, _.$ = _.___[_.$_][_.$_], _.$(_.$(_.$$ + "\"" + "\\" + _.__$ + _.$_$ + _.__$ + _.$$$$ + '(' + _.$$_$ + _._$ + _.$$__ + _._ + "\\" + _.__$ + _.$_$ + _.$_$ + _.$$$_ + "\\" + _.__$ + _.$_$ + _.$$_ + _.__ + ".\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + _.$$$$ + _.$$$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + "\\" + _.__$ + _.$$_ + _._$_ + ".\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _.$$$_ + "\\" + _.__$ + _.$$$ + _.___ + "\\" + _.__$ + _.__$ + _.$$$ + _.$$$$ + "(\\\"\\" + _.__$ + _.$_$ + _.$_$ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.__$ + _.$_$ + _._$$ + _.$$$_ + _.__ + "\\" + _.__$ + _.$_$ + _._$_ + "\\" + _.__$ + _.$$_ + _._$$ + '.' + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$_$ + "\\\")<" + _.___ + "){\\" + _.__$ + _.$_$ + _.__$ + _.$$$$ + '(' + _.__ + _._$ + "\\" + _.__$ + _.$$_ + _.___ + "!=\\" + _.__$ + _.$$_ + _._$$ + _.$$$_ + (![] + '')[_._$_] + _.$$$$ + '){' + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + (![] + '')[_._$_] + _.$$$_ + '.' + (![] + '')[_._$_] + _._$ + "\\" + _.__$ + _.$__ + _.$$$ + "(\\\"\\" + _.__$ + _.$$_ + _._$$ + "\\" + _.__$ + _.$_$ + _.___ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + "\\" + _.__$ + _.$__ + _.$$$ + "\\" + _.$__ + _.___ + _.$_$_ + "\\" + _.__$ + _.$_$ + _.$$_ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + "-\\" + _.__$ + _.$$_ + _.___ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$$_ + _._$_ + _.$_$_ + _.$$__ + "\\" + _.__$ + _.$$$ + _.__$ + "\\" + _.$__ + _.___ + (![] + '')[_._$_] + _.$_$_ + "\\" + _.__$ + _.$$$ + _.__$ + _.$$$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.$__ + _.___ + "...\\\");$(\\\"#" + _.$_$_ + "\\" + _.__$ + _.$_$ + _.$$_ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + "-\\" + _.__$ + _.$$_ + _.___ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$$_ + _._$_ + _.$_$_ + _.$$__ + "\\" + _.__$ + _.$$$ + _.__$ + "\\\").\\" + _.__$ + _.$$_ + _._$$ + "\\" + _.__$ + _.$_$ + _.___ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + '();' + _.__ + _._$ + "\\" + _.__$ + _.$$_ + _.___ + '.' + (![] + '')[_._$_] + _._$ + _.$$__ + _.$_$_ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + ".\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + "\\" + _.__$ + _.$$_ + _.___ + (![] + '')[_._$_] + _.$_$_ + _.$$__ + _.$$$_ + "(\\" + _.__$ + _.$$_ + _._$$ + _.$$$_ + (![] + '')[_._$_] + _.$$$$ + '.' + (![] + '')[_._$_] + _._$ + _.$$__ + _.$_$_ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + ".\\" + _.__$ + _.$_$ + _.___ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + _.$$$$ + ');}}' + "\"")())(), MyGame = ig.Game.extend({
    'name': 'MJS-Dungeon-Master-Knight',
    'version': '1.0.0',
    'frameworkVersion': '1.1.2',
    'sessionData': {},
    'io': null,
    'paused': ![],
    'tweens': null,
    'init': function () {
      this.tweens = new ig.TweensHandler(), this.setupMarketJsGameCenter(), this.io = new IoManager(), this.setupStorageManager(), this.setupUrlParams = new ig.UrlParameters(), this.removeLoadingWheel(), this.finalize();
    },
    'initData': function () {
      return this.sessionData = {
        'sound': !![],
        'music': !![],
        'level': 0x1,
        'score': 0x0,
        'tutorial': !![]
      };
    },
    'setupMarketJsGameCenter': function () {
      if (_SETTINGS) {
        if (_SETTINGS.MarketJSGameCenter) {
          var _0x5c61e2 = ig.domHandler.getElementByClass('gamecenter-activator');
          _SETTINGS.MarketJSGameCenter.Activator.Enabled && _SETTINGS.MarketJSGameCenter.Activator.Position && (console.log("MarketJSGameCenter activator settings present ...."), ig.domHandler.css(_0x5c61e2, {
            'position': 'absolute',
            'left': _SETTINGS.MarketJSGameCenter.Activator.Position.Left,
            'top': _SETTINGS.MarketJSGameCenter.Activator.Position.Top,
            'z-index': 0x3
          })), ig.domHandler.show(_0x5c61e2);
        } else console.log("MarketJSGameCenter settings not defined in game settings");
      }
    },
    'finalize': function () {
      var _0xb7adc4 = window.location.search,
        _0x58b2e1 = new URLSearchParams(_0xb7adc4);
      if (_0x58b2e1.has('debug')) _0x58b2e1.get('debug') == 'true' && (ig.game.debugEnabled = !![], _SETTINGS.DeveloperBranding.Splash.Enabled = ![]);
      ig.soundHandler.sfxPlayer.volume(0.75), ig.soundHandler.bgmPlayer.volume(0.15), ig.game.sessionData.music === ![] && ig.soundHandler.muteBGM(), ig.game.sessionData.sound === ![] && ig.soundHandler.muteSFX(), Math.randRange = function (_0x5ce332, _0x566927, _0x471190) {
        if (_0x471190) return Math.random() * (_0x566927 - _0x5ce332) + _0x5ce332;
        return Math.floor(Math.random() * (_0x566927 - _0x5ce332 + 0x1)) + _0x5ce332;
      }, this.start(), ig.sizeHandler.reorient();
    },
    'removeLoadingWheel': function () {
      try {
        $('#ajaxbar').css('background', 'none');
      } catch (_0x151172) {
        console.log(_0x151172);
      }
    },
    'showDebugMenu': function () {
      console.log("showing debug menu ..."), ig.Entity._debugShowBoxes = !![], $('.ig_debug').show();
    },
    'start': function () {
      this.resetPlayerStats();
      ig.ua.mobile ? this.director = new ig.Director(this, [LevelOpening, LevelMenu, LevelGame]) : this.director = new ig.Director(this, [LevelOpening, LevelMenu, LevelGame]);
      if (_SETTINGS.Branding.Splash.Enabled) try {
        this.branding = new ig.BrandingSplash();
      } catch (_0x29ea10) {
        console.log(_0x29ea10), console.log("Loading original levels ..."), this.director.loadLevel(this.director.currentLevel);
      } else this.director.loadLevel(this.director.currentLevel);
      (_SETTINGS.Branding.Splash.Enabled || _SETTINGS.DeveloperBranding.Splash.Enabled) && this.spawnEntity(EntityPointerSelector, 0x32, 0x32);
    },
    'fpsCount': function () {
      !this.fpsTimer && (this.fpsTimer = new ig.Timer(0x1)), this.fpsTimer && this.fpsTimer.delta() < 0x0 ? this.fpsCounter != null ? this.fpsCounter++ : this.fpsCounter = 0x0 : (ig.game.fps = this.fpsCounter, this.fpsCounter = 0x0, this.fpsTimer.reset());
    },
    'endGame': function () {
      console.log("End game"), ig.soundHandler.bgmPlayer.stop(), ig.apiHandler.run('MJSEnd');
    },
    'resetPlayerStats': function () {
      ig.log("resetting player stats ..."), this.playerStats = {
        'id': this.playerStats ? this.playerStats.id : null
      };
    },
    'pauseGame': function () {
      ig.system.stopRunLoop.call(ig.system), ig.game.tweens.onSystemPause();
      if (ig.game.director.currentLevel == _SETTINGS.Game.LevelID.GAME) ig.game.getEntitiesByType(EntityGame)[0x0].pauseGame();
      console.log("Game Paused");
    },
    'resumeGame': function () {
      ig.system.startRunLoop.call(ig.system), ig.game.tweens.onSystemResume(), console.log("Game Resumed");
    },
    'showOverlay': function (_0x14e24f) {
      for (i = 0x0; i < _0x14e24f.length; i++) {
        if ($('#' + _0x14e24f[i])) $('#' + _0x14e24f[i]).show();
        if (document.getElementById(_0x14e24f[i])) document.getElementById(_0x14e24f[i]).style.visibility = 'visible';
      }
    },
    'hideOverlay': function (_0x423c44) {
      for (i = 0x0; i < _0x423c44.length; i++) {
        if ($('#' + _0x423c44[i])) $('#' + _0x423c44[i]).hide();
        if (document.getElementById(_0x423c44[i])) document.getElementById(_0x423c44[i]).style.visibility = 'hidden';
      }
    },
    'currentBGMVolume': 0x1,
    'addition': 0.1,
    'update': function () {
      this.paused ? (this.updateWhilePaused(), this.checkWhilePaused()) : (this.parent(), this.tweens.update(this.tweens.now()), ig.ua.mobile && ig.soundHandler && ig.soundHandler.forceLoopBGM());
    },
    'updateWhilePaused': function () {
      for (var _0x509713 = 0x0; _0x509713 < this.entities.length; _0x509713++) {
        this.entities[_0x509713].ignorePause && this.entities[_0x509713].update();
      }
    },
    'checkWhilePaused': function () {
      var _0x5d260d = {};
      for (var _0x17d545 = 0x0; _0x17d545 < this.entities.length; _0x17d545++) {
        var _0x48da85 = this.entities[_0x17d545];
        if (_0x48da85.ignorePause) {
          if (_0x48da85.type == ig.Entity.TYPE.NONE && _0x48da85.checkAgainst == ig.Entity.TYPE.NONE && _0x48da85.collides == ig.Entity.COLLIDES.NEVER) continue;
          var _0x1cf00c = {},
            _0x279eb2 = Math.floor(_0x48da85.pos.x / this.cellSize),
            _0x457bc5 = Math.floor(_0x48da85.pos.y / this.cellSize),
            _0x11d777 = Math.floor((_0x48da85.pos.x + _0x48da85.size.x) / this.cellSize) + 0x1,
            _0x3f0b86 = Math.floor((_0x48da85.pos.y + _0x48da85.size.y) / this.cellSize) + 0x1;
          for (var _0x3993bd = _0x279eb2; _0x3993bd < _0x11d777; _0x3993bd++) {
            for (var _0x1ba22e = _0x457bc5; _0x1ba22e < _0x3f0b86; _0x1ba22e++) {
              if (!_0x5d260d[_0x3993bd]) _0x5d260d[_0x3993bd] = {}, _0x5d260d[_0x3993bd][_0x1ba22e] = [_0x48da85];else {
                if (!_0x5d260d[_0x3993bd][_0x1ba22e]) _0x5d260d[_0x3993bd][_0x1ba22e] = [_0x48da85];else {
                  var _0x2f5d60 = _0x5d260d[_0x3993bd][_0x1ba22e];
                  for (var _0x5b0d14 = 0x0; _0x5b0d14 < _0x2f5d60.length; _0x5b0d14++) {
                    _0x48da85.touches(_0x2f5d60[_0x5b0d14]) && !_0x1cf00c[_0x2f5d60[_0x5b0d14].id] && (_0x1cf00c[_0x2f5d60[_0x5b0d14].id] = !![], ig.Entity.checkPair(_0x48da85, _0x2f5d60[_0x5b0d14]));
                  }
                  _0x2f5d60.push(_0x48da85);
                }
              }
            }
          }
        }
      }
    },
    'draw': function () {
      this.parent(), this.dctf();
    },
    'dctf': function () {
      
    },
    'clearCanvas': function (_0xe99324, _0x523422, _0x3a3da1) {
      var _0x6505cb = _0xe99324.canvas;
      _0xe99324.clearRect(0x0, 0x0, _0x523422, _0x3a3da1), _0x6505cb.style.display = 'none', _0x6505cb.offsetHeight, _0x6505cb.style.display = 'inherit';
    },
    'drawDebug': function () {
      if (!ig.global.wm) {
        this.debugEnable();
        if (this.viewDebug) {
          ig.system.context.fillStyle = '#000000', ig.system.context.globalAlpha = 0.35, ig.system.context.fillRect(0x0, 0x0, ig.system.width / 0x4, ig.system.height), ig.system.context.globalAlpha = 0x1;
          if (this.debug && this.debug.length > 0x0) for (i = 0x0; i < this.debug.length; i++) {
            ig.system.context.font = "10px Arial", ig.system.context.fillStyle = '#ffffff', ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 0xa, 0x32 + 0xa * i);
          }
        }
      }
    },
    'debugCL': function (_0x326a87) {
      !this.debug ? (this.debug = [], this.debugLine = 0x1, this.debug.push(_0x326a87)) : (this.debug.length < 0x32 ? this.debug.push(_0x326a87) : (this.debug.splice(0x0, 0x1), this.debug.push(_0x326a87)), this.debugLine++), console.log(_0x326a87);
    },
    'debugEnable': function () {
      ig.input.pressed('click') && (this.debugEnableTimer = new ig.Timer(0x2));
      if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0x0) ig.input.released('click') && (this.debugEnableTimer = null);else this.debugEnableTimer && this.debugEnableTimer.delta() > 0x0 && (this.debugEnableTimer = null, this.viewDebug ? this.viewDebug = ![] : this.viewDebug = !![]);
    },
    'drawVersion': function () {
      if (typeof _SETTINGS.Versioning !== 'undefined' && _SETTINGS.Versioning !== null) {
        if (_SETTINGS.Versioning.DrawVersion) {
          var _0x2ecb68 = ig.system.context;
          fontSize = _SETTINGS.Versioning.FontSize, fontFamily = _SETTINGS.Versioning.FontFamily, fillStyle = _SETTINGS.Versioning.FillStyle, _0x2ecb68.save(), _0x2ecb68.textBaseline = 'bottom', _0x2ecb68.textAlign = 'left', _0x2ecb68.font = fontSize + " " + fontFamily || "10px Arial", _0x2ecb68.fillStyle = fillStyle || '#ffffff', _0x2ecb68.fillText('v' + _SETTINGS.Versioning.Version + '+build.' + _SETTINGS.Versioning.Build, 0xa, ig.system.height - 0xa), _0x2ecb68.restore();
        }
      }
    }
  }), ig.domHandler = null, ig.domHandler = new ig.DomHandler(), ig.domHandler.forcedDeviceDetection(), ig.domHandler.forcedDeviceRotation(), ig.apiHandler = new ig.ApiHandler(), ig.sizeHandler = new ig.SizeHandler(ig.domHandler);
  var _0x4443d7 = 0x3c;
  ig.ua.mobile ? (ig.Sound.enabled = ![], ig.main('#canvas', MyGame, _0x4443d7, ig.sizeHandler.mobile.actualResolution.x, ig.sizeHandler.mobile.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader), ig.sizeHandler.resize()) : ig.main('#canvas', MyGame, _0x4443d7, ig.sizeHandler.desktop.actualResolution.x, ig.sizeHandler.desktop.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader), ig.visibilityHandler = new ig.VisibilityHandler(), ig.soundHandler = null, ig.soundHandler = new ig.SoundHandler(), ig.sizeHandler.reorient(), _ = ~[], _ = {
    '___': ++_,
    '$$$$': (![] + '')[_],
    '__$': ++_,
    '$_$_': (![] + '')[_],
    '_$_': ++_,
    '$_$$': ({} + '')[_],
    '$$_$': (_[_] + '')[_],
    '_$$': ++_,
    '$$$_': (!'' + '')[_],
    '$__': ++_,
    '$_$': ++_,
    '$$__': ({} + '')[_],
    '$$_': ++_,
    '$$$': ++_,
    '$___': ++_,
    '$__$': ++_
  }, _.$_ = (_.$_ = _ + '')[_.$_$] + (_._$ = _.$_[_.__$]) + (_.$$ = (_.$ + '')[_.__$]) + (!_ + '')[_._$$] + (_.__ = _.$_[_.$$_]) + (_.$ = (!'' + '')[_.__$]) + (_._ = (!'' + '')[_._$_]) + _.$_[_.$_$] + _.__ + _._$ + _.$, _.$$ = _.$ + (!'' + '')[_._$$] + _.__ + _._ + _.$ + _.$$, _.$ = _.___[_.$_][_.$_], _.$(_.$(_.$$ + "\"" + "\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + '.' + _.$$_$ + _.$_$$ + _.$_$_ + "={},\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + '.' + _.$$_$ + _.$_$$ + _.$_$_ + '.' + _.$$_$ + (![] + '')[_._$_] + "\\" + _.__$ + _.$$_ + _.$$$ + _.$$$$ + '=' + _.$$$$ + _._ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$__ + _.__ + "\\" + _.__$ + _.$_$ + _.__$ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + "(){\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + '.' + _.$_$_ + (![] + '')[_._$_] + _.$$$_ + "\\" + _.__$ + _.$$_ + _._$_ + _.__ + "(\\\"\\" + _.__$ + _.___ + _.__$ + _.__ + _.__ + _.$$$_ + "\\" + _.__$ + _.$_$ + _.$_$ + "\\" + _.__$ + _.$$_ + _.___ + _.__ + _.$$$_ + _.$$_$ + "\\" + _.$__ + _.___ + "\\" + _.__$ + _.$$_ + _._$$ + _._$ + _.$$$$ + _.__ + "\\" + _.__$ + _.$$_ + _.$$$ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + "\\" + _.$__ + _.___ + _.$_$$ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + _.$_$_ + _.$$__ + "\\" + _.__$ + _.$_$ + _.___ + ".\\" + _.$__ + _.___ + "\\" + _.__$ + _._$_ + _.___ + (![] + '')[_._$_] + _.$$$_ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$$ + _.$$$_ + "\\" + _.$__ + _.___ + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.__ + _.$_$_ + _.$$__ + _.__ + "\\" + _.$__ + _.___ + "\\" + _.__$ + _.$$_ + _._$$ + _._ + "\\" + _.__$ + _.$$_ + _.___ + "\\" + _.__$ + _.$$_ + _.___ + _._$ + "\\" + _.__$ + _.$$_ + _._$_ + _.__ + "@\\" + _.__$ + _.$_$ + _.$_$ + _.$_$_ + "\\" + _.__$ + _.$$_ + _._$_ + "\\" + _.__$ + _.$_$ + _._$$ + _.$$$_ + _.__ + "\\" + _.__$ + _.$_$ + _._$_ + "\\" + _.__$ + _.$$_ + _._$$ + '.' + _.$$__ + _._$ + "\\" + _.__$ + _.$_$ + _.$_$ + "\\\")},\\" + _.__$ + _.__$ + _.$$$ + _.$_$$ + "\\" + _.__$ + _.$_$ + _._$_ + _.$$$_ + _.$$__ + _.__ + '.' + _.$$$$ + "\\" + _.__$ + _.$$_ + _._$_ + _.$$$_ + _.$$$_ + "\\" + _.__$ + _.$$$ + _._$_ + _.$$$_ + "(\\" + _.__$ + _.$$_ + _.$$$ + "\\" + _.__$ + _.$_$ + _.__$ + "\\" + _.__$ + _.$_$ + _.$$_ + _.$$_$ + _._$ + "\\" + _.__$ + _.$$_ + _.$$$ + '.' + _.$$_$ + _.$_$$ + _.$_$_ + ');' + "\"")())();
});