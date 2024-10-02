// app/components/AudioPlayer.js
'use client'

import { useState, useRef, useEffect } from 'react'
import { Button, Progress } from "@nextui-org/react"
import { PlayCircle, PauseCircle } from 'lucide-react'

export default function AudioPlayer({ audioSrc }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.addEventListener('timeupdate', updateProgress)
      return () => audio.removeEventListener('timeupdate', updateProgress)
    }
  }, [])

  const updateProgress = () => {
    const audio = audioRef.current
    if (audio) {
      setProgress((audio.currentTime / audio.duration) * 100)
    }
  }

  const togglePlay = () => {
    const audio = audioRef.current
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <audio ref={audioRef} src={audioSrc} />
      <Progress value={progress} className="my-2" color="secondary" />
      <Button
        color="secondary"
        variant="ghost"
        onPress={togglePlay}
        startContent={isPlaying ? <PauseCircle /> : <PlayCircle />}
      >
        {isPlaying ? "Pause" : "Play"}
      </Button>
    </>
  )
}