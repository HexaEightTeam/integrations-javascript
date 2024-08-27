(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.FaceCapture = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
  function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  var FaceCapture = /*#__PURE__*/function () {
    function FaceCapture(videoId, statusId, facetest, capturedImage) {
      var _this = this;
      _classCallCheck(this, FaceCapture);
      this.video = document.getElementById(videoId);
      // this.overlay = document.getElementById(overlayId);
      // this.snapshotCanvas = document.getElementById(snapshotId);
      this.statusDiv = document.getElementById(statusId);
      this.capturedImage = document.getElementById(capturedImage);
      this.prevLandmarks = null;
      this.blinkCount = 0;
      this.mouthOpenCount = 0;
      this.headMovementCount = 0;
      this.isEyeClosed = false;
      this.isMouthOpen = false;
      this.prevHeadPose = null;
      this.snapshotSent = false;
      this.progress = false;
      this.previousEyePositions = [];
      this.BLINK_THRESHOLD = 0.3;
      this.BLINK_THRESHOLD2 = 0.2;
      this.MOUTH_OPEN_THRESHOLD = 5;
      this.MOUTH_OPEN_THRESHOLD2 = 3;
      this.HEAD_MOVEMENT_THRESHOLD = 5;
      this.REQUIRED_BLINKS = 3;
      this.REQUIRED_MOUTH_MOVEMENTS = 2;
      this.REQUIRED_HEAD_MOVEMENTS = 2;
      this.image = null;
      this.bypasstest = facetest;
      this.overlayElement = null;
      this.snapshotCanvasElement = null;
      this.videoDimensionsReady = new Promise(function (resolve) {
        _this.video.addEventListener('loadedmetadata', function () {
          _this.overlayElement = document.createElement('canvas');
          _this.snapshotCanvasElement = document.createElement('canvas');

          // Set their width and height according to the video element
          _this.overlayElement.width = _this.video.videoWidth;
          _this.overlayElement.height = _this.video.videoHeight;
          _this.snapshotCanvasElement.width = _this.video.videoWidth;
          _this.snapshotCanvasElement.height = _this.video.videoHeight;
          _this.snapshotCanvasElement.style.display = 'none';
          _this.overlayElement.style.display = 'none';
          // Append the created elements to the body or any other container
          document.body.appendChild(_this.overlayElement);
          document.body.appendChild(_this.snapshotCanvasElement);
          console.log('Video dimensions in constructor:', _this.video.videoWidth, _this.video.videoHeight);
          console.log('Video dimensions in constructor:', _this.overlayElement.width, _this.overlayElement.height);
          resolve();
        });
      });
    }
    return _createClass(FaceCapture, [{
      key: "startCapture",
      value: function () {
        var _startCapture = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var _this2 = this;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                this.capturedImage.style.display = 'none';
                this.video.style.display = 'block';
                _context.next = 4;
                return Promise.all([faceapi.nets.tinyFaceDetector.loadFromUri('models'), faceapi.nets.faceLandmark68Net.loadFromUri('models')]);
              case 4:
                setTimeout(function () {
                  return _this2.startVideo();
                }, 2000); // delay time in milliseconds

                // Wait until this.image is not null
                _context.next = 7;
                return new Promise(function (resolve) {
                  var checkInterval = setInterval(function () {
                    if (_this2.image) {
                      clearInterval(checkInterval);
                      resolve();
                    }
                  }, 100); // check every 100 milliseconds
                });
              case 7:
                return _context.abrupt("return", Promise.resolve(this.image));
              case 8:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function startCapture() {
          return _startCapture.apply(this, arguments);
        }
        return startCapture;
      }()
    }, {
      key: "startVideo",
      value: function startVideo() {
        var _this3 = this;
        navigator.mediaDevices.getUserMedia({
          video: {}
        }).then(function (stream) {
          return _this3.video.srcObject = stream;
        })["catch"](function (err) {
          return console.error(err);
        });
        this.video.addEventListener('play', function () {
          // this.overlay.width = this.video.width;
          // this.overlay.height = this.video.height;
          // this.snapshotCanvas.width = this.video.width;
          // this.snapshotCanvas.height = this.video.height;
          setInterval(function () {
            return _this3.detectFace();
          }, 100);
        });
      }
    }, {
      key: "detectFace",
      value: function () {
        var _detectFace = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var detection, landmarks;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (this.progress) {
                  _context2.next = 8;
                  break;
                }
                this.progress = true;
                if (!(this.blinkCount <= this.REQUIRED_BLINKS && this.mouthOpenCount <= this.REQUIRED_MOUTH_MOVEMENTS && this.headMovementCount <= this.REQUIRED_HEAD_MOVEMENTS)) {
                  _context2.next = 7;
                  break;
                }
                _context2.next = 5;
                return faceapi.detectSingleFace(this.video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();
              case 5:
                detection = _context2.sent;
                if (detection) {
                  landmarks = detection.landmarks.positions;
                  this.checkLiveness(landmarks);
                }
              case 7:
                this.progress = false;
              case 8:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
        function detectFace() {
          return _detectFace.apply(this, arguments);
        }
        return detectFace;
      }()
    }, {
      key: "checkLiveness",
      value: function checkLiveness(landmarks) {
        var _this4 = this;
        if (this.prevLandmarks) {
          this.checkBlink(landmarks);
          this.checkMouthMovement(landmarks);
          this.checkHeadMovement(landmarks);
          if (this.bypasstest === true) {
            this.blinkCount = 3;
            this.mouthOpenCount = 2;
            this.headMovementCount = 2;
            this.statusDiv.innerHTML = 'Capturing your Photo.. Please Smile!!';
            setTimeout(function () {
              return _this4.captureAndSendSnapshot();
            }, 3000);
          } else {
            this.updateStatus();
            if (this.blinkCount >= this.REQUIRED_BLINKS && this.mouthOpenCount >= this.REQUIRED_MOUTH_MOVEMENTS && this.headMovementCount >= this.REQUIRED_HEAD_MOVEMENTS && !this.snapshotSent) {
              this.statusDiv.innerHTML = 'Capturing your Photo.. Please Smile!!';
              setTimeout(function () {
                return _this4.captureAndSendSnapshot();
              }, 3000);
            }
          }
        }
        this.prevLandmarks = landmarks;
      }
    }, {
      key: "checkBlink",
      value: function checkBlink(landmarks) {
        var leftEye = landmarks.slice(36, 42);
        var rightEye = landmarks.slice(42, 48);
        var leftEAR = this.calculateEAR(leftEye);
        var rightEAR = this.calculateEAR(rightEye);
        var avgEAR = (leftEAR + rightEAR) / 2;
        if (avgEAR < this.BLINK_THRESHOLD && !this.isEyeClosed) {
          this.isEyeClosed = true;
        } else if (avgEAR >= this.BLINK_THRESHOLD2 && this.isEyeClosed) {
          this.isEyeClosed = false;
          if (this.blinkCount < this.REQUIRED_BLINKS) {
            this.blinkCount++;
          }
        }
      }
    }, {
      key: "calculateEAR",
      value: function calculateEAR(eye) {
        var verticalDist1 = this.distance(eye[1], eye[5]);
        var verticalDist2 = this.distance(eye[2], eye[4]);
        var horizontalDist = this.distance(eye[0], eye[3]);
        return (verticalDist1 + verticalDist2) / (2 * horizontalDist);
      }
    }, {
      key: "checkMouthMovement",
      value: function checkMouthMovement(landmarks) {
        var upperLip = landmarks[62];
        var lowerLip = landmarks[66];
        var mouthOpen = this.distance(upperLip, lowerLip);
        if (mouthOpen > this.MOUTH_OPEN_THRESHOLD2 && !this.isMouthOpen) {
          this.isMouthOpen = true;
          if (this.mouthOpenCount < this.REQUIRED_MOUTH_MOVEMENTS) {
            this.mouthOpenCount++;
          }
        } else if (mouthOpen <= this.MOUTH_OPEN_THRESHOLD) {
          this.isMouthOpen = false;
        }
      }
    }, {
      key: "checkHeadMovement",
      value: function checkHeadMovement(landmarks) {
        var nose = landmarks[30];
        if (this.prevHeadPose) {
          var movement = this.distance(nose, this.prevHeadPose);
          if (movement > this.HEAD_MOVEMENT_THRESHOLD) {
            if (this.headMovementCount < this.REQUIRED_HEAD_MOVEMENTS) {
              this.headMovementCount++;
            }
          }
        }
        this.prevHeadPose = nose;
      }
    }, {
      key: "distance",
      value: function distance(point1, point2) {
        return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
      }
    }, {
      key: "updateStatus",
      value: function updateStatus() {
        if (!this.snapshotSent && !this.bypasstest) {
          var cnt = this.headMovementCount + this.mouthOpenCount + this.blinkCount + 1;
          this.statusDiv.style.textAlign = "center";
          this.statusDiv.innerHTML = "Detecting Face... <br>Please move your Head, Blink your Eyes and establish mouth movement.. <br>Please remain patient while we complete this operation. <br>Test Completed ( ".concat(cnt, "/8 )");
        }
      }
    }, {
      key: "trackBlinking",
      value: function trackBlinking(detections) {
        var _this5 = this;
        detections.forEach(function (detection) {
          var leftEye = detection.landmarks.getLeftEye();
          var rightEye = detection.landmarks.getRightEye();
          var currentEyePositions = [leftEye, rightEye];
          if (_this5.previousEyePositions.length > 0) {
            var hasBlinked = _this5.checkForBlink(_this5.previousEyePositions, currentEyePositions);
            if (hasBlinked) {
              console.log('Blink detected!');
            }
          }
          _this5.previousEyePositions = currentEyePositions;
        });
      }
    }, {
      key: "checkForBlink",
      value: function checkForBlink(previousPositions, currentPositions) {
        var threshold = 0.2; // Adjust this value based on your needs
        var previousEyeHeight = previousPositions[1].y - previousPositions[0].y;
        var currentEyeHeight = currentPositions[1].y - currentPositions[0].y;
        var heightDifference = Math.abs(previousEyeHeight - currentEyeHeight);
        return heightDifference > threshold;
      }
    }, {
      key: "captureAndSendSnapshot",
      value: function captureAndSendSnapshot() {
        if (this.snapshotSent) {
          return;
        }
        this.snapshotSent = true;
        var context = this.snapshotCanvasElement.getContext('2d');
        context.drawImage(this.video, 0, 0, this.snapshotCanvasElement.width, this.snapshotCanvasElement.height);
        var imageDataUrl = this.snapshotCanvasElement.toDataURL('image/jpeg');
        this.image = imageDataUrl.split(',')[1];
        this.statusDiv.innerHTML = 'Photo Capture Complete!';
        capturedImage.src = imageDataUrl;
        this.video.style.display = 'none';
        this.capturedImage.style.display = 'block';
        this.snapshotSent = true;
        // Stop the camera
        this.video.srcObject.getTracks().forEach(function (track) {
          return track.stop();
        });
        this.video = null;
      }
    }, {
      key: "fetchCapturedImage",
      value: function fetchCapturedImage() {
        return this.image;
      }
    }]);
  }();
  var _default = _exports["default"] = FaceCapture;
  console.log('Face Capture Initialized Successfully');
});
