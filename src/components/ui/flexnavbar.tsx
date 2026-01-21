"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { Laptop, Moon, Sun } from "lucide-react";
import { ThemeSwitch } from "@/components/ui/theme-switch";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
}

interface MediaContent {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
  autoplay?: boolean;
  link?: string;
  linkTarget?: "_blank" | "_self";
}

interface FlexNavbarProps {
  logo?: React.ReactNode;
  brandName?: string;
  tagline?: string;
  launchText?: string;
  navLinks?: NavLink[];
  media?: MediaContent;
  mediaButtonText?: string;
  onMediaClick?: () => void;
  collapsedWidth?: string;
  collapsedMaxWidth?: string;
  collapsedHeight?: string;
  expandedWidth?: string;
  expandedMaxWidth?: string;
  expandedHeight?: string;
  expandedHeightMobile?: string;
  animationDuration?: number;
  animationEasing?: number[];
  showThemeToggle?: boolean;
  onExpand?: (isExpanded: boolean) => void;
}


const FlexNavbar: React.FC<FlexNavbarProps> = ({
  logo = (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 7.658 6"><path d="M2.971 0.17c0.273 -0.019 0.476 -0.012 0.739 0.067 0.245 0.245 0.384 0.532 0.537 0.841 0.155 0.304 0.327 0.599 0.496 0.896 0.176 0.308 0.349 0.618 0.523 0.928 0.081 0.141 0.17 0.279 0.26 0.414v0.237h-0.868l-0.079 -0.316 -0.158 -0.079a11.139 11.139 0 0 1 -0.252 -0.498c-0.388 -0.8 -0.388 -0.8 -0.854 -1.554h-0.158l-0.127 0.222 -0.82 1.436 0.789 0.079 -0.099 -0.202c-0.064 -0.296 -0.054 -0.331 0.089 -0.577l0.168 -0.247c0.286 0.113 0.386 0.236 0.528 0.505l0.112 0.209 0.114 0.219 0.227 0.426 0.106 0.201a8.441 8.441 0 0 0 0.241 0.413c0.092 0.159 0.092 0.159 0.092 0.346 -0.113 0.296 -0.238 0.543 -0.474 0.76 -0.252 0.083 -0.486 0.081 -0.75 0.074l-0.201 0.008c-0.204 -0.001 -0.357 -0.012 -0.549 -0.082 -0.177 -0.191 -0.29 -0.394 -0.395 -0.632 0.167 -0.167 0.523 -0.112 0.755 -0.123l0.193 -0.01q0.237 -0.012 0.473 -0.024c-0.117 -0.298 -0.249 -0.583 -0.395 -0.868l-0.154 0.154c-0.319 0.214 -0.566 0.217 -0.942 0.226l-0.186 0.009a5.004 5.004 0 0 1 -1.087 -0.073c0.102 -0.345 0.235 -0.621 0.429 -0.923 0.325 -0.515 0.63 -1.039 0.931 -1.568l0.107 -0.186 0.094 -0.166c0.28 -0.456 0.28 -0.456 0.542 -0.54" fill="#edebea"/><path d="M3.158 1.816c0.286 0.113 0.386 0.236 0.528 0.505l0.112 0.209 0.114 0.219 0.227 0.426 0.106 0.201a8.441 8.441 0 0 0 0.241 0.413c0.092 0.159 0.092 0.159 0.092 0.346 -0.113 0.296 -0.238 0.543 -0.474 0.76 -0.252 0.083 -0.486 0.081 -0.75 0.074l-0.201 0.008c-0.204 -0.001 -0.357 -0.012 -0.549 -0.082 -0.177 -0.191 -0.29 -0.394 -0.395 -0.632 0.167 -0.167 0.523 -0.112 0.755 -0.123l0.193 -0.01q0.237 -0.012 0.473 -0.024c-0.117 -0.298 -0.249 -0.583 -0.395 -0.868l-0.237 0.079 0.079 -0.316H1.974l0.079 -0.553h0.158l-0.079 -0.237 0.395 -0.158a8.267 8.267 0 0 1 -0.316 0.711l0.789 0.079 -0.099 -0.202c-0.064 -0.296 -0.054 -0.331 0.089 -0.577z" fill="#dbdad8"/><path d="M4.342 1.421c0.326 0.297 0.51 0.687 0.725 1.066l0.134 0.23 0.126 0.221 0.116 0.202c0.083 0.175 0.083 0.175 0.083 0.412h-0.868l-0.079 -0.316 -0.158 -0.079a10.704 10.704 0 0 1 -0.276 -0.533l-0.074 -0.149c-0.132 -0.269 -0.254 -0.539 -0.361 -0.818l0.316 0.158v0.158h0.158v0.158l0.237 -0.237h-0.079z" fill="#ebe7e3"/><path d="M2.447 2.053c0 0.292 -0.101 0.456 -0.237 0.711l0.196 0.006 0.258 0.014 0.255 0.011c0.285 0.058 0.384 0.131 0.554 0.364v0.316l0.158 0.079 -0.079 0.237 -0.316 -0.553 -0.237 0.079 0.079 -0.316H1.974l0.079 -0.553h0.158l-0.079 -0.237z" fill="#919291"/><path d="M4.342 2.763C4.461 2.872 4.461 2.872 4.579 3v0.158h0.158v0.316c0.232 -0.015 0.232 -0.015 0.474 -0.079 0.113 -0.154 0.113 -0.154 0.158 -0.316 0.158 0.237 0.158 0.237 0.158 0.474h-0.868l-0.079 -0.316 -0.158 -0.079c-0.049 -0.202 -0.049 -0.202 -0.079 -0.395" fill="#baada5"/><path d="M2.211 1.105c0.129 0.258 0.068 0.434 0 0.711 -0.137 0.206 -0.287 0.39 -0.474 0.553h-0.158c0.124 -0.471 0.375 -0.855 0.632 -1.263" fill="#c5bebb"/><path d="m3.711 1.658 0.316 0.158v0.158h0.158c0.089 0.454 0.089 0.454 0 0.632a77.711 77.711 0 0 1 -0.237 -0.385l-0.133 -0.217c-0.104 -0.188 -0.104 -0.188 -0.104 -0.346" fill="#cec3bb"/><path d="m2.978 0.229 0.264 0.003 0.264 0.002 0.205 0.003v0.237l-0.079 -0.079a7.31 7.31 0 0 0 -0.4 -0.005l-0.22 0.002 -0.17 0.003 -0.079 0.316h-0.237c0.181 -0.472 0.181 -0.472 0.452 -0.481" fill="#cabdb2"/><path d="M2.447 2.053c0 0.292 -0.101 0.456 -0.237 0.711h-0.158v-0.316h0.158l-0.079 -0.237z" fill="#b6b6b4"/><path d="M3.316 0.632h0.158v0.632l-0.316 -0.237c0.069 -0.306 0.069 -0.306 0.158 -0.395" fill="#e1dbd7"/><path d="m2.368 4.263 0.237 0.079v0.395l0.158 0.079H2.526c-0.158 -0.237 -0.158 -0.237 -0.158 -0.553" fill="#00000"/></svg>
  ),
  brandName = "Alron-Q",
  tagline = "A student helper",
  launchText = "Launching 2026",
  navLinks = [
   { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Product", href: "#product" },
  { label: "Study App", href: "#study-app" },
  { label: "Contact", href: "#cta" },
  ],
  media = {
    type: "image",
    src: "/assets/alronq.png",
    alt: "Our story",
  },
  mediaButtonText = "Our story",
  onMediaClick,
  collapsedWidth = "90vw",
  collapsedMaxWidth = "20rem",
  collapsedHeight = "3.75rem",
  expandedWidth = "95vw",
  expandedMaxWidth = "48.75rem",
  expandedHeight = "28rem",
  expandedHeightMobile = "34rem",
  animationDuration = 0.5,
  showThemeToggle = true,
  onExpand,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showMediaControls, setShowMediaControls] = useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleToggle = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);

    if (!newState && media.type === "video" && videoRef.current) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
      setShowMediaControls(true);
    }

    onExpand?.(newState);
  };

  const closeNavbar = () => { 
  setIsExpanded(false);
  onExpand?.(false);
}

  const handleMediaClick = () => {
    if (media.link && (media.type === "image" || !isVideoPlaying)) {
      window.open(media.link, media.linkTarget || "_blank");
      return;
    }

    if (media.type === "video" && videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
        setShowMediaControls(true);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
        setShowMediaControls(false);
      }
    }
    if (onMediaClick) {
      onMediaClick();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={cn("fixed inset-0 bg-black/50  z-40")}
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={false}
        animate={
          isExpanded
            ? {
                width: expandedWidth,
                maxWidth: expandedMaxWidth,
                minHeight: isMobile ? expandedHeightMobile : expandedHeight,
                borderRadius: "0.5rem",
              }
            : {
                width: collapsedWidth,
                maxWidth: collapsedMaxWidth,
                height: collapsedHeight,
                borderRadius: "0.875rem",
              }
        }
        transition={{ duration: animationDuration, ease: "easeOut" }}
        className={cn(
          "fixed top-4 sm:top-8 left-1/2 -translate-x-1/2 bg-white dark:bg-black  shadow-lg dark:shadow-none dark:border dark:border-white/10 z-50 overflow-hidden"
        )}
        style={{ top: isMobile ? "1rem" : "2rem" }}
      >
        <div
          className={cn("absolute z-10")}
          style={{
            top: isMobile ? "0.75rem" : "1rem",
            left: isMobile ? "1rem" : "1.5rem",
            right: isMobile ? "1rem" : "1.5rem",
          }}
        >
          <div className={cn("flex justify-between items-center relative")}>
            <div className={cn("flex-shrink-0")}>{logo}</div>

            <div
              className={cn(
                "absolute left-1/2 -translate-x-1/2 font-medium tracking-tight text-black dark:text-white"
              )}
              style={{ fontSize: isMobile ? "1rem" : "1.125rem" }}
            >
              {brandName}
            </div>

            <motion.button
              onClick={handleToggle}
              className={cn(
                "flex items-center justify-center flex-shrink-0 relative"
              )}
              style={{ width: "2rem", height: "2rem" }}
              aria-label={isExpanded ? "Close menu" : "Open menu"}
            >
              <motion.span
                className={cn("absolute w-full bg-black dark:bg-white")}
                style={{ height: "0.125rem" }}
                animate={{
                  rotate: isExpanded ? 45 : 0,
                  y: isExpanded ? 0 : -3,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={cn("absolute w-full bg-black dark:bg-white")}
                style={{ height: "0.125rem" }}
                animate={{
                  opacity: isExpanded ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className={cn("absolute w-full bg-black dark:bg-white")}
                style={{ height: "0.125rem" }}
                animate={{
                  rotate: isExpanded ? -45 : 0,
                  y: isExpanded ? 0 : 3,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              style={{
                paddingTop: isMobile ? "4rem" : "5rem",
                paddingLeft: isMobile ? "1.5rem" : "3.75rem",
                paddingRight: isMobile ? "1.5rem" : "3.75rem",
                paddingBottom: isMobile ? "2.5rem" : "2.5rem",
              }}
            >
              <div
                className={cn("flex flex-col")}
                style={{ gap: isMobile ? "1rem" : "1.5rem" }}
              >
                <div
                  className={cn("flex flex-col md:flex-row")}
                  style={{ gap: isMobile ? "1.5rem" : "5rem" }}
                >
                  <div
                    className={cn("flex flex-col")}
                    style={{ gap: isMobile ? "0.75rem" : "1rem" }}
                  >
                    {navLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        onClick={()=>{  setTimeout( closeNavbar , 150 ); }}
                        className={cn(
                          "font-medium text-gray-900 dark:text-gray-50 hover:text-gray-600 dark:hover:text-gray-300 transition-colors whitespace-nowrap"
                        )}
                        style={{ fontSize: isMobile ? "1.25rem" : "1.875rem" }}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>

                  <div className={cn("flex-1 min-w-0")}>
                    <div
                      className={cn(
                        "relative rounded-xl overflow-hidden bg-slate-700 dark:bg-slate-800 aspect-video w-full cursor-pointer"
                      )}
                      onMouseEnter={() => setShowMediaControls(true)}
                      onMouseLeave={() =>
                        isVideoPlaying && setShowMediaControls(false)
                      }
                      onClick={() => {
                        if (media.type === "image" || !isVideoPlaying) {
                          handleMediaClick();
                        } else {
                          setShowMediaControls(true);
                        }
                      }}
                    >
                      {media.type === "video" ? (
                        <>
                          <video
                            ref={videoRef}
                            src={media.src}
                            poster={media.poster}
                            className={cn("w-full h-full object-cover")}
                            loop
                            muted
                            playsInline
                            preload="auto"
                            autoPlay={media.autoplay}
                            onPlay={() => setIsVideoPlaying(true)}
                            onPause={() => setIsVideoPlaying(false)}
                          />
                          <AnimatePresence>
                            {showMediaControls && (
                              <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                onClick={(e: React.MouseEvent) => {
                                  e.stopPropagation();
                                  handleMediaClick();
                                }}
                                className={cn(
                                  "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 dark:bg-white/90 hover:bg-white text-black dark:text-black rounded-full font-medium flex items-center transition-colors"
                                )}
                                style={{
                                  paddingLeft: isMobile ? "1.25rem" : "1.75rem",
                                  paddingRight: isMobile
                                    ? "1.25rem"
                                    : "1.75rem",
                                  paddingTop: isMobile ? "0.5rem" : "0.75rem",
                                  paddingBottom: isMobile
                                    ? "0.5rem"
                                    : "0.75rem",
                                  fontSize: isMobile ? "0.75rem" : "0.875rem",
                                  gap: "0.5rem",
                                }}
                              >
                                <span style={{ fontSize: "0.75rem" }}>
                                  {isVideoPlaying ? "⏸" : "▶"}
                                </span>
                                {mediaButtonText}
                              </motion.button>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <>
                          <img
                            src={media.src}
                            alt={media.alt || "Media content"}
                            className={cn("w-full h-full object-cover")}
                          />
                          {media.link && (
                            <div
                              className={cn(
                                "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 dark:bg-white/90 hover:bg-white text-black dark:text-black rounded-full font-medium flex items-center transition-colors"
                              )}
                              style={{
                                paddingLeft: isMobile ? "1.25rem" : "1.75rem",
                                paddingRight: isMobile ? "1.25rem" : "1.75rem",
                                paddingTop: isMobile ? "0.5rem" : "0.75rem",
                                paddingBottom: isMobile ? "0.5rem" : "0.75rem",
                                fontSize: isMobile ? "0.75rem" : "0.875rem",
                                gap: "0.5rem",
                              }}
                            >
                              {mediaButtonText}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className={cn(
                    "flex flex-row justify-between items-center w-full gap-2 sm:gap-4 text-gray-400 dark:text-gray-500 text-xs sm:text-sm"
                  )}
                >
                  <div className={cn("hidden sm:block flex-shrink-0")}>
                    {tagline}
                  </div>
                  <div className={cn("flex-shrink-0")}>{launchText}</div>
                  {showThemeToggle && (
                    <div className={cn("flex-shrink-0")}>
                      <ThemeSwitch
                        variant="icon-click"
                        modes={["light", "dark", "system"]}
                        icons={[
                          <Sun key="sun-icon" size={16} />,
                          <Moon key="moon-icon" size={16} />,
                          <Laptop key="laptop-icon" size={16} />,
                        ]}
                        showInactiveIcons="all"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export { FlexNavbar };
