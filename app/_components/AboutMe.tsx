'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    Acredito em uma abordagem de design centrado no usuário,
                    garantindo que cada projeto em que trabalho seja adaptado
                    para atender às necessidades específicas de seus usuários.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    Esse sou eu.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Olá, eu sou o Renato Castro.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                Sou um desenvolvedor frontend dedicado a
                                transformar ideias em soluções criativas.
                                Especializo-me em criar experiências de usuário
                                intuitivas e fluidas.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                Minha abordagem é focada na criação de soluções
                                escaláveis e de alto desempenho, adaptadas tanto
                                às necessidades dos usuários quanto aos
                                objetivos do negócio. Ao priorizar desempenho,
                                acessibilidade e responsividade, busco entregar
                                experiências que não apenas envolvam os
                                usuários, mas também gerem resultados concretos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
