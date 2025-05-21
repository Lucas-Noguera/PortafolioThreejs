import Globe from 'react-globe.gl'
import { Button } from '../../components/Button'
import { useState } from 'react'

export const About = () => {

    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText('lucasnoguera260105@gmail.com')

        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    return (
        <section className="c-space my-20" id='about'>

            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                    <div className="col-span-1 xl:row-span-3">

                            <div className="grid-container">
                                <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                                <div>
                                    <p className="grid-headtext">Hi, I'm Lucas</p>
                                    <p className="grid-subtext">With 2 years of experience, I have honed my skills in frontend and backend development, with a focus in Javascript, React, Node, Express, MongoDB, and more.
                                    </p>

                                </div>
                            </div>
                    </div>

                    <div className="col-span-1 xl:row-span-3">
                        <div className="grid-container">
                            <img src="/assets/grid2.png"
                            alt="grid-2"
                            className="w-full sm:w-[276px] h-fit object-contain"/>
                            <div>
                                <p className="grid-headtext">Tech Stack</p>
                                <p className="grid-subtext">I specialize
                                    in JavaScript/TypeScript with a focus on React and
                                    Next.js ecosystem. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 xl:row-span-4">
                        <div className="grid-container">
                            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                                <Globe
                                height={326}
                                width={326}
                                backgroundColor='rgba(0,0,0,0)'
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                />
                            </div>
                            <div>
                                <p className='grid-headtext'>I work remotely across most timezones.</p>
                                <p className='grid-subtext'>I'm based in Paraguay, with remote work available.</p>
                                <Button
                                name='Contact Me'
                                isBeam
                                containerClass='btn w-full mt-10'
                                btnping='btn-ping'
                                btnpingdot='btn-ping_dot'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='xl:col-span-2 xl:row-span-3'>
                        <div className='grid-container'>
                            <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain'/>
                            <div>
                                <p className='grid-headtext'>My Passion for Coding </p>
                                <p className='grid-subtext'>I love solving problems and building things throug code. Coding isn't just my profession - it's my passion.</p>
                            </div>
                        </div>
                    </div>
                    <div className='xl:col-span-1 xl:row-span-2'>
                        <div className='grid-container'>
                            <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'/>
                            <div className='space-y-2'>
                                <p className='grid-subtext text-center'>Contact Me</p>
                                <div className='copy-container' onClick={handleCopy}>
                                    <img src={copied ? 'assets/tick.svg' : 'assets/copy.svg'} alt={copied ? 'Copied' : 'Copy'} />
                                        <p className='text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray_gradient text-white break-words text-center max-w-full'>
                                            lucasnoguera260105@gmail.com
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        </section>
    )
}