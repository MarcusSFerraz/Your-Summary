import { pipeline } from "@xenova/transformers"

export async function transcribe(audio) {

  try {
    console.log("Realizando a transcrição...")
    const transcribe = await pipeline(
      "automatic-speech-recognition",
      "Xenova/whisper-base"
    )
    const transcription = await transcribe(audio, {
      chunk_length_s: 30,
      stride_length_s: 5,
      language: "portuguese",
      task: "transcribe",
    })
    console.log("Transcrição finalizada com sucesso.")
    return transcription?.text.replace("[Música]", "")
    
  } catch (error) {
    throw new Error(error)
  }
}