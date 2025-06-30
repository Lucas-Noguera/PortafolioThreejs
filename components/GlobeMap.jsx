import React, { useEffect, useRef } from 'react'
import Globe from 'react-globe.gl'

export const GlobeMap = React.memo(({ hereText, isMobile, globeSize }) => {
  const globeRef = useRef()

  useEffect(() => {
    if (!globeRef.current) return

    const controls = globeRef.current.controls()
    controls.enableRotate = !isMobile
    controls.enableZoom = false
    controls.enablePointerInteraction = !isMobile
    if (controls.zoomSpeed !== undefined) controls.zoomSpeed = 0
    globeRef.current.renderer().domElement.style.touchAction = isMobile ? 'auto' : 'none'

    setTimeout(() => {
      globeRef.current.pointOfView(
        { lat: -25.2637, lng: -57.5759, altitude: 2 },
        1000,
      )
    }, 500)
  }, [isMobile])

  const labelsData = [{
    lat: -25.2637,
    lng: -57.5759,
    text: hereText,
    color: '#fff',
    size: 0.4,
  }]

  return (
    <div className="rounded-full overflow-hidden shadow-xl" style={{ width: globeSize, height: globeSize }}>
      <Globe
        ref={globeRef}
        width={globeSize}
        height={globeSize}
        backgroundColor="rgba(0,0,0,0)"
        backgroundImageOpacity={0.5}
        showAtmosphere
        showGraticules
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        labelDotRadius={0.6}
        labelsData={labelsData}
        labelLat={d => d.lat}
        labelLng={d => d.lng}
        labelText={d => d.text}
        labelColor={d => d.color}
        labelSize={d => d.size * 10}
        labelResolution={512}
        labelAltitude={0.02}
      />
    </div>
  )
})
