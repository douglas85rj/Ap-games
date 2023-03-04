export default function Section(props) {
    return(
    
        <><section>
            <div>
                <h2>{props.title}</h2>
                <p>
                    {props.subtitle}
                </p>
                <ul className="games-list">
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.twitch.tv/directory/game/League%20of%20Legends">
                            <img src="https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg" alt="Imagem do jogo League of Legends" />
                        </a>
                    </li>
    
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.twitch.tv/directory/game/VALORANT">
                            <img src="https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg" alt="Imagem do jogo Valorant" />
                        </a>
                    </li>
    
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.twitch.tv/directory/game/Minecraft">
                            <img src="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg" alt="Imagem do jogo Minecraft" />
                        </a>
                    </li>
    
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.twitch.tv/directory/game/Teamfight%20Tactics">
                            <img src="https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg" alt="Imagem do jogo TFT" />
                        </a>
                    </li>
                </ul>
            </div>
        </section><section>
                <div>
                    <h2>Canais e streamers</h2>
                    <p>Lista de canais e transmissões que não perco!</p>
    
                    <ul className="channel-list">
                        <li>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.twitch.tv/maykbrito">
                                <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png" alt="Imagem de Mayk Brito" />
                            </a>
                        </li>
    
                        <li>
                            <a
                                target="_blank"
                                href="https://www.twitch.tv/gaules">
                                <img src="https://www.imagemhost.com.br/images/2023/03/04/Gaules.png" alt="Imagem do Gaules" />
                            </a>
                        </li>
    
                        <li>
                            <a
                                target="_blank"
                                href="https://www.twitch.tv/cellbit">
                                <img src="https://www.imagemhost.com.br/images/2023/03/04/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-70x70.png" alt="Imagemd de Cellbit" />
                            </a>
                        </li>
                    </ul>
                </div>
            </section><section>
                <div>
                    <h2>Minhas redes</h2>
                    <p>Se conecte comigo agora mesmo!</p>
    
                    <ul className="social-list">
                        <li>
                            <a
                                target="_blank"
                                href="https://www.twitch.tv/dgcarioca">
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.2824 25H15.8426C15.6011 25.0001 15.3678 25.0844 15.1852 25.2375L9.28125 30V25H6.1875C5.914 25 5.65169 24.8946 5.4583 24.7071C5.2649 24.5196 5.15625 24.2652 5.15625 24V6C5.15625 5.73478 5.2649 5.48043 5.4583 5.29289C5.65169 5.10536 5.914 5 6.1875 5H26.8125C27.086 5 27.3483 5.10536 27.5417 5.29289C27.7351 5.48043 27.8438 5.73478 27.8438 6V19.5375C27.8417 19.6832 27.8072 19.8267 27.7427 19.9583C27.6782 20.0899 27.5851 20.2065 27.4699 20.3L21.9398 24.7625C21.7572 24.9156 21.5239 24.9999 21.2824 25V25Z" stroke="#9A35FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21.6562 11V17" stroke="#9A35FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.4688 11V17" stroke="#9A35FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </li>
    
                        <li>
                            <a
                                target="_blank"
                                href="https://twitter.com/douglasnil">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 11C16 8.25003 18.3125 5.96253 21.0625 6.00003C22.0256 6.01115 22.9649 6.30018 23.7676 6.83237C24.5704 7.36457 25.2023 8.11728 25.5875 9.00003H30L25.9625 13.0375C25.7019 17.0932 23.9066 20.8975 20.9415 23.6769C17.9764 26.4562 14.0641 28.002 10 28C6 28 5 26.5 5 26.5C5 26.5 9 25 11 22C11 22 3 18 5 7.00003C5 7.00003 10 12 16 13V11Z" stroke="#2871FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </li>
    
                        <li>
                            <a
                                target="_blank"
                                href="https://www.instagram.com/douglas_021/">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21Z" stroke="#FA41FE" stroke-width="2" stroke-miterlimit="10" />
                                    <path d="M21.5 4.5H10.5C7.18629 4.5 4.5 7.18629 4.5 10.5V21.5C4.5 24.8137 7.18629 27.5 10.5 27.5H21.5C24.8137 27.5 27.5 24.8137 27.5 21.5V10.5C27.5 7.18629 24.8137 4.5 21.5 4.5Z" stroke="#FA41FE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M22.5 11C23.3284 11 24 10.3284 24 9.5C24 8.67157 23.3284 8 22.5 8C21.6716 8 21 8.67157 21 9.5C21 10.3284 21.6716 11 22.5 11Z" fill="#FA41FE" />
                                </svg>
                            </a>
                        </li>
    
                        <li>
                            <a
                                target="_blank"
                                href="https://www.youtube.com/channel/UC1r8sTQE0ALzWqy8-H1Noew">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 16L14 12V20L20 16Z" stroke="#F40000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3 16C3 19.725 3.3875 21.9 3.675 23.025C3.75427 23.3302 3.90418 23.6126 4.11262 23.8493C4.32106 24.0859 4.58221 24.2703 4.875 24.3875C9.0625 25.9875 16 25.95 16 25.95C16 25.95 22.9375 25.9875 27.125 24.3875C27.4178 24.2703 27.6789 24.0859 27.8874 23.8493C28.0958 23.6126 28.2457 23.3302 28.325 23.025C28.6125 21.9 29 19.725 29 16C29 12.275 28.6125 10.1 28.325 8.975C28.2457 8.66975 28.0958 8.38741 27.8874 8.15074C27.6789 7.91407 27.4178 7.7297 27.125 7.6125C22.9375 6.0125 16 6.05 16 6.05C16 6.05 9.0625 6.0125 4.875 7.6125C4.58221 7.7297 4.32106 7.91407 4.11262 8.15074C3.90418 8.38741 3.75427 8.66975 3.675 8.975C3.3875 10.1 3 12.275 3 16Z" stroke="#F40000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </section></>
    )
    
    }