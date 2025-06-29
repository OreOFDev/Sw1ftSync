// ==UserScript==
// @name         Roblox Hack com KeySystem
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Script de Roblox com sistema de keys integrado
// @author       You
// @match        https://www.roblox.com/*
// @match        https://web.roblox.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    console.log('🔑 KeySystem - Roblox Script carregado');
    
    // Função para validar key usando o KeySystem
    function validateKeyFromAPI(key) {
        const keys = JSON.parse(localStorage.getItem('keysystem_keys')) || [];
        const keyData = keys.find(k => k.key === key);
        
        if (!keyData) {
            return { valid: false, message: 'Key inválida' };
        }
        
        if (!keyData.isActive) {
            return { valid: false, message: 'Key desativada' };
        }
        
        const now = new Date();
        const expiryDate = new Date(keyData.expiresAt);
        
        if (now > expiryDate) {
            return { valid: false, message: 'Key expirada' };
        }
        
        if (keyData.currentUses >= keyData.maxUses) {
            return { valid: false, message: 'Key esgotada' };
        }
        
        // Incrementar uso
        keyData.currentUses++;
        if (keyData.currentUses >= keyData.maxUses) {
            keyData.isActive = false;
        }
        
        // Salvar alterações
        localStorage.setItem('keysystem_keys', JSON.stringify(keys));
        
        return { 
            valid: true, 
            message: 'Key válida', 
            key: keyData,
            remainingUses: keyData.maxUses - keyData.currentUses,
            expiresAt: keyData.expiresAt
        };
    }
    
    // Função para mostrar interface de verificação de key
    function createKeyInterface() {
        const keyDiv = document.createElement('div');
        keyDiv.id = 'keysystem-interface';
        keyDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 20px;
            border-radius: 10px;
            z-index: 999999;
            font-family: Arial, sans-serif;
            min-width: 300px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        `;
        
        keyDiv.innerHTML = `
            <div style="margin-bottom: 15px;">
                <h3 style="margin: 0 0 10px 0; color: #667eea;">🔑 KeySystem</h3>
                <p style="margin: 0; font-size: 12px; opacity: 0.8;">Digite sua key para ativar o hack</p>
            </div>
            <input type="text" id="key-input" placeholder="Cole sua key aqui..." 
                   style="width: 100%; padding: 10px; border: none; border-radius: 5px; margin-bottom: 10px; background: #333; color: white;">
            <button id="validate-key-btn" 
                    style="width: 100%; padding: 10px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">
                ✅ Validar Key
            </button>
            <div id="key-status" style="margin-top: 10px; padding: 10px; border-radius: 5px; display: none;"></div>
            <div style="margin-top: 10px; text-align: center;">
                <a href="https://seu-usuario.github.io/keysystem/" target="_blank" 
                   style="color: #667eea; text-decoration: none; font-size: 12px;">
                    Obter Key
                </a>
            </div>
        `;
        
        document.body.appendChild(keyDiv);
        
        // Event listeners
        const keyInput = document.getElementById('key-input');
        const validateBtn = document.getElementById('validate-key-btn');
        const statusDiv = document.getElementById('key-status');
        
        // Permitir Enter para validar
        keyInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                validateKey();
            }
        });
        
        validateBtn.addEventListener('click', validateKey);
        
        function validateKey() {
            const key = keyInput.value.trim();
            
            if (!key) {
                showStatus('Por favor, digite uma key!', 'error');
                return;
            }
            
            const result = validateKeyFromAPI(key);
            
            if (result.valid) {
                showStatus(`✅ Key válida! Usos restantes: ${result.remainingUses}`, 'success');
                keyInput.disabled = true;
                validateBtn.disabled = true;
                validateBtn.textContent = '✅ Ativado';
                validateBtn.style.background = '#56ab2f';
                
                // Iniciar o hack
                setTimeout(() => {
                    startHack();
                }, 1000);
                
            } else {
                showStatus(`❌ ${result.message}`, 'error');
            }
        }
        
        function showStatus(message, type) {
            statusDiv.textContent = message;
            statusDiv.style.display = 'block';
            statusDiv.style.background = type === 'success' ? '#56ab2f' : '#ff416c';
            statusDiv.style.color = 'white';
        }
    }
    
    // Função principal do hack (substitua pelo seu código)
    function startHack() {
        console.log('🚀 Hack ativado com sucesso!');
        
        // Aqui você coloca o código do seu hack
        // Exemplos de funcionalidades:
        
        // 1. Auto Farm
        function autoFarm() {
            console.log('🌾 Auto Farm ativado');
            // Seu código de auto farm aqui
        }
        
        // 2. Speed Hack
        function speedHack() {
            console.log('⚡ Speed Hack ativado');
            // Seu código de speed hack aqui
        }
        
        // 3. Teleport
        function teleportHack() {
            console.log('📍 Teleport ativado');
            // Seu código de teleport aqui
        }
        
        // 4. ESP/Wallhack
        function espHack() {
            console.log('👁️ ESP ativado');
            // Seu código de ESP aqui
        }
        
        // 5. Aimbot
        function aimbotHack() {
            console.log('🎯 Aimbot ativado');
            // Seu código de aimbot aqui
        }
        
        // Criar interface de controles do hack
        createHackControls();
        
        // Iniciar funcionalidades
        autoFarm();
        speedHack();
        // Adicione outras funcionalidades conforme necessário
    }
    
    // Interface de controles do hack
    function createHackControls() {
        const controlsDiv = document.createElement('div');
        controlsDiv.id = 'hack-controls';
        controlsDiv.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 20px;
            border-radius: 10px;
            z-index: 999998;
            font-family: Arial, sans-serif;
            min-width: 250px;
        `;
        
        controlsDiv.innerHTML = `
            <h3 style="margin: 0 0 15px 0; color: #667eea;">🎮 Controles do Hack</h3>
            <div style="margin-bottom: 10px;">
                <label style="display: flex; align-items: center; margin-bottom: 8px;">
                    <input type="checkbox" id="auto-farm" checked> Auto Farm
                </label>
                <label style="display: flex; align-items: center; margin-bottom: 8px;">
                    <input type="checkbox" id="speed-hack" checked> Speed Hack
                </label>
                <label style="display: flex; align-items: center; margin-bottom: 8px;">
                    <input type="checkbox" id="esp-hack"> ESP/Wallhack
                </label>
                <label style="display: flex; align-items: center; margin-bottom: 8px;">
                    <input type="checkbox" id="aimbot-hack"> Aimbot
                </label>
            </div>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #333;">
                <button id="teleport-btn" style="width: 100%; padding: 8px; background: #4facfe; color: white; border: none; border-radius: 5px; margin-bottom: 5px; cursor: pointer;">
                    📍 Teleport
                </button>
                <button id="reset-btn" style="width: 100%; padding: 8px; background: #ff416c; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    🔄 Reset
                </button>
            </div>
        `;
        
        document.body.appendChild(controlsDiv);
        
        // Event listeners para controles
        document.getElementById('teleport-btn').addEventListener('click', function() {
            console.log('📍 Teleport ativado');
            // Seu código de teleport aqui
        });
        
        document.getElementById('reset-btn').addEventListener('click', function() {
            console.log('🔄 Reset ativado');
            // Seu código de reset aqui
        });
    }
    
    // Verificar se já existe uma key válida salva
    function checkSavedKey() {
        const savedKey = localStorage.getItem('roblox_hack_key');
        if (savedKey) {
            const result = validateKeyFromAPI(savedKey);
            if (result.valid) {
                console.log('✅ Key salva encontrada e válida!');
                startHack();
                return true;
            } else {
                localStorage.removeItem('roblox_hack_key');
            }
        }
        return false;
    }
    
    // Inicializar o script
    function init() {
        // Aguardar o carregamento da página
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }
        
        // Verificar se já tem key válida
        if (!checkSavedKey()) {
            // Mostrar interface de verificação de key
            setTimeout(() => {
                createKeyInterface();
            }, 2000); // Aguardar 2 segundos para carregar a página
        }
    }
    
    // Iniciar o script
    init();
    
    // Função para salvar key (chamada quando key é válida)
    function saveKey(key) {
        localStorage.setItem('roblox_hack_key', key);
    }
    
    // Expor funções globalmente para debug
    window.KeySystem = {
        validateKey: validateKeyFromAPI,
        saveKey: saveKey,
        startHack: startHack
    };
    
})(); 