import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'

export default function Subscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [message, setMessage] = useState('')
  const inputRef = useRef(null)
  const measureRef = useRef(null)

  const isValidEmail = (email) => {
    const atIndex = email.indexOf('@')
    if (atIndex < 1) return false
    const domain = email.slice(atIndex + 1)
    const lastDot = domain.lastIndexOf('.')
    if (lastDot < 1) return false
    const tld = domain.slice(lastDot + 1)
    return tld.length >= 2
  }

  const isValid = isValidEmail(email)

  // Auto-size input
  useEffect(() => {
    if (measureRef.current && inputRef.current) {
      const text = email || inputRef.current.placeholder || ''
      measureRef.current.textContent = text
      const width = measureRef.current.offsetWidth + 4
      inputRef.current.style.width = width + 'px'
    }
  }, [email])

  // Auto-focus on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmit = async () => {
    if (!isValid || status === 'submitting') return

    setStatus('submitting')
    setMessage('storing at the speed of light')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage(data.alreadySubscribed ? 'already subscribed' : 'welcome aboard')
      } else {
        setStatus('error')
        setMessage(data.error || 'something went wrong')
      }
    } catch (err) {
      setStatus('error')
      setMessage('something went wrong')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && isValid) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="container">
      <Head>
        <title>subscribe | foggy notions</title>
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&display=swap" rel="stylesheet" />
      </Head>

      <a href="https://foggynotions.day" className="back-link">foggy notions</a>

      <main>
        <p className="heading">subscribe to foggy notions</p>

        {status === 'idle' || status === 'error' ? (
          <div className="form-area">
            <div className="input-wrapper">
              <span ref={measureRef} className="measure" aria-hidden="true" />
              <input
                ref={inputRef}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="your@email.com"
                className={`email-input ${email ? '' : 'placeholder-text'} ${isValid ? 'valid-glow' : ''}`}
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
                aria-label="Email address"
              />
              {isValid && (
                <button
                  className="enter-btn"
                  onClick={handleSubmit}
                  aria-label="Subscribe"
                >
                  ↵
                </button>
              )}
            </div>
            {status === 'error' && <p className="message error">{message}</p>}
          </div>
        ) : (
          <p className={`message ${status}`}>{message}</p>
        )}

        <p className="feeds">
          <a href="/api/feed">rss</a>
        </p>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: 'EB Garamond', Georgia, serif;
          padding: 2rem;
          position: relative;
        }

        .back-link {
          position: absolute;
          top: 2rem;
          right: 2rem;
          color: #888;
          text-decoration: none;
          font-size: 0.9rem;
        }

        .back-link:hover {
          color: #ffc2f7;
        }

        main {
          text-align: center;
          max-width: 400px;
        }

        .heading {
          font-size: 1.3rem;
          color: #1a1a1a;
          margin-bottom: 2rem;
        }

        .form-area {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .input-wrapper {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: text;
        }

        .measure {
          position: absolute;
          visibility: hidden;
          white-space: pre;
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 1.2rem;
        }

        .email-input {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 1.2rem;
          border: none;
          padding: 0.5rem 0;
          background: transparent;
          outline: none;
          text-align: center;
          min-width: 180px;
          transition: box-shadow 0.3s ease;
        }

        .email-input.placeholder-text {
          color: #aaa;
        }

        .email-input.valid-glow {
          box-shadow: 0 2px 8px rgba(255, 194, 247, 0.4);
        }

        .enter-btn {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 1.2rem;
          background: none;
          border: none;
          color: #ffc2f7;
          cursor: pointer;
          padding: 0.5rem;
          transition: transform 0.15s ease;
        }

        .enter-btn:hover {
          transform: scale(1.1);
        }

        .message {
          font-size: 1.1rem;
          margin-top: 1rem;
          animation: fadeIn 0.3s ease;
        }

        .message.submitting {
          color: #888;
        }

        .message.success {
          color: #1a1a1a;
        }

        .message.error {
          color: #c44;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .feeds {
          margin-top: 3rem;
          color: #888;
          font-size: 1.1rem;
        }

        .feeds a {
          color: #888;
          text-decoration: none;
        }

        .feeds a:hover {
          color: #ffc2f7;
        }
      `}</style>

      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
