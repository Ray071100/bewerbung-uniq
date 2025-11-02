"use client";
import "../ui/header.css";
import Navbar from "./navbar";


export default function Header() {
    return (
        <header className="top-header">
            <div className="top-header__inner">
                <div className="top-header__logo">
                    Marvin Siedlaczek
                </div>
                <Navbar/>
            </div>
        </header>
    );
}