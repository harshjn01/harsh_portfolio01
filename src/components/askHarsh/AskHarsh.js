import React, {useEffect, useRef, useState} from "react";
import "./AskHarsh.scss";
import {greeting} from "../../portfolio";
import {getAnswer, SUGGESTIONS} from "./askHarshBrain";

const FIRST = (greeting.username || "Harsh").split(" ")[0];

// Floating "Ask my AI twin" assistant. Answers from a local knowledge base by
// default; upgrades to a real LLM automatically if window.__ASK_HARSH_ENDPOINT__
// is set (see askHarshBrain.js).
export default function AskHarsh() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: `Hi! 👋 I'm ${FIRST}'s AI assistant. Ask me anything about his skills, experience, or projects.`
    }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const send = async (text) => {
    const q = (text != null ? text : input).trim();
    if (!q || typing) return;
    setInput("");
    setMessages((m) => [...m, {from: "user", text: q}]);
    setTyping(true);
    const history = messages.map((m) => ({role: m.from, text: m.text}));
    const answer = await getAnswer(q, history);
    // Small delay so the typing indicator reads naturally.
    setTimeout(() => {
      setMessages((m) => [...m, {from: "bot", text: answer}]);
      setTyping(false);
    }, 350);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="ask-harsh">
      {open && (
        <div className="ask-window" role="dialog" aria-label="Ask Harsh's assistant">
          <div className="ask-header">
            <div className="ask-header-info">
              <span className="ask-avatar">{FIRST.charAt(0)}</span>
              <div>
                <p className="ask-title">Ask {FIRST}</p>
                <p className="ask-status">
                  <span className="ask-dot" /> AI assistant · online
                </p>
              </div>
            </div>
            <button
              className="ask-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <i className="fas fa-times" />
            </button>
          </div>

          <div className="ask-messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`ask-msg ask-msg-${m.from}`}>
                {m.text.split("\n").map((line, j) => (
                  <span key={j}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            ))}
            {typing && (
              <div className="ask-msg ask-msg-bot ask-typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>

          {messages.length <= 1 && (
            <div className="ask-suggestions">
              {SUGGESTIONS.map((s) => (
                <button key={s} className="ask-chip" onClick={() => send(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}

          <div className="ask-input-row">
            <input
              ref={inputRef}
              className="ask-input"
              placeholder={`Ask about ${FIRST}…`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
            />
            <button
              className="ask-send"
              onClick={() => send()}
              disabled={!input.trim() || typing}
              aria-label="Send"
            >
              <i className="fas fa-paper-plane" />
            </button>
          </div>
        </div>
      )}

      <button
        className={`ask-fab ${open ? "ask-fab-open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close assistant" : "Ask my AI assistant"}
      >
        <i className={open ? "fas fa-times" : "fas fa-robot"} />
        {!open && <span className="ask-fab-label">Ask AI</span>}
      </button>
    </div>
  );
}
