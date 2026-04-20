import Foundation
import AVFoundation
import AppKit

let inputPath = "/Users/bh29/Desktop/Screen Recording 2026-04-16 at 1.31.49\u{202F}PM.mov"
let outputDir = "/Users/bh29/Documents/GitHub/newSite2026 copy/.tmp/hero-reference"

let asset = AVURLAsset(url: URL(fileURLWithPath: inputPath))
let generator = AVAssetImageGenerator(asset: asset)
generator.appliesPreferredTrackTransform = true
generator.maximumSize = CGSize(width: 1400, height: 1400)
generator.requestedTimeToleranceAfter = .zero
generator.requestedTimeToleranceBefore = .zero

let durationSeconds = CMTimeGetSeconds(asset.duration)
print("duration", durationSeconds)

var times = [Double]()
var t = 0.0
while t <= durationSeconds {
    times.append(t)
    t += 0.5
}

for t in times {
    let time = CMTimeMakeWithSeconds(t, preferredTimescale: 600)
    do {
        let cgImage = try generator.copyCGImage(at: time, actualTime: nil)
        let nsImage = NSImage(cgImage: cgImage, size: NSSize(width: cgImage.width, height: cgImage.height))
        guard let tiffData = nsImage.tiffRepresentation,
              let bitmap = NSBitmapImageRep(data: tiffData),
              let pngData = bitmap.representation(using: .png, properties: [:]) else {
            continue
        }
        let name = String(format: "frame_%05.2f.png", t)
        let outURL = URL(fileURLWithPath: outputDir).appendingPathComponent(name)
        try pngData.write(to: outURL)
        print("wrote", name)
    } catch {
        print("error at", t, error)
    }
}
