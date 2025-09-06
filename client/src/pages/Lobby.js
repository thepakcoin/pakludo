import React, { useState } from "react";
import { FiSettings, FiUsers, FiHome, FiClipboard, FiShoppingCart } from "react-icons/fi";

const Lobby = () => {
    const [activeButton, setActiveButton] = useState("Lobby"); // default active

    const buttons = [
        { name: "Social", icon: <FiUsers /> },     // 1. Social
        { name: "Tasks", icon: <FiClipboard /> },
        { name: "Lobby", icon: <FiHome /> },
        { name: "Friends", icon: <FiUsers /> },
        { name: "Shop", icon: <FiShoppingCart /> },
    ];

    return (
        <div style={styles.container}>
            {/* Top Bar */}
            <div style={styles.topBar}>

                <FiSettings style={styles.settingsIcon} />
            </div>

            {/* Bottom Bar */}
            <div style={styles.bottomBar}>
                {buttons.map((btn) => (
                    <div
                        key={btn.name}
                        style={{
                            ...styles.button,
                        }}
                        onClick={() => setActiveButton(btn.name)}
                    >
                        <div
                            style={{
                                ...styles.icon,
                                color: activeButton === btn.name ? "#00ffea" : "#fff",
                                textShadow: activeButton === btn.name ? "0 0 12px #00ffea" : "none",
                            }}
                        >
                            {btn.icon}
                        </div>
                        <span
                            style={{
                                ...styles.text,
                                color: activeButton === btn.name ? "#00ffea" : "#fff",
                                fontWeight: activeButton === btn.name ? "bold" : "normal",
                            }}
                        >
                            {btn.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        height: "100vh",
        width: "100vw",
        backgroundColor: "#00b33c",
        position: "relative",
    },
    topBar: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100px",
        backgroundColor: "rgba(255,255,255,0.05)",
        borderBottom: "2px solid rgba(255,255,255,0.3)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        borderRadius: "0 0 15px 15px",
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    bottomBar: {
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100px",
        backgroundColor: "rgba(255,255,255,0.05)",
        borderTop: "2px solid rgba(255,255,255,0.3)",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.1)",
        borderRadius: "15px 15px 0 0",
        zIndex: 100,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    
    settingsIcon: {
        position: "absolute",
        top: "50px",
        right: "20px",
        transform: "translateY(-50%)",
        fontSize: "50px",
        color: "#fff",
        cursor: "pointer",
    },
    button: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        fontSize: "14px",
    },
    icon: {
        fontSize: "30px",
        marginBottom: "5px",
        transition: "all 0.3s ease",
    },
    text: {
        fontSize: "12px",
        transition: "all 0.3s ease",
    },
};

export default Lobby;
