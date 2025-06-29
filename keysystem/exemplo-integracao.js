// Exemplo de integração do KeySystem em um script
// Este arquivo mostra como usar o sistema de keys em sua aplicação

class KeySystemIntegration {
    constructor() {
        this.apiUrl = 'https://seu-usuario.github.io/keysystem/'; // URL do seu KeySystem
        this.keys = this.loadKeys();
    }

    // Carrega as keys do localStorage
    loadKeys() {
        try {
            return JSON.parse(localStorage.getItem('keysystem_keys')) || [];
        } catch (error) {
            console.error('Erro ao carregar keys:', error);
            return [];
        }
    }

    // Valida uma key
    validateKey(keyToValidate) {
        if (!keyToValidate) {
            return {
                valid: false,
                message: 'Key não fornecida'
            };
        }

        const key = this.keys.find(k => k.key === keyToValidate);
        
        if (!key) {
            return {
                valid: false,
                message: 'Key inválida'
            };
        }

        if (!key.isActive) {
            return {
                valid: false,
                message: 'Key desativada'
            };
        }

        const now = new Date();
        const expiryDate = new Date(key.expiresAt);
        
        if (now > expiryDate) {
            return {
                valid: false,
                message: 'Key expirada'
            };
        }

        if (key.currentUses >= key.maxUses) {
            return {
                valid: false,
                message: 'Key esgotada'
            };
        }

        // Key válida - incrementar uso
        key.currentUses++;
        if (key.currentUses >= key.maxUses) {
            key.isActive = false;
        }
        
        this.saveKeys();

        return {
            valid: true,
            message: 'Key válida',
            key: key
        };
    }

    // Salva as keys no localStorage
    saveKeys() {
        localStorage.setItem('keysystem_keys', JSON.stringify(this.keys));
    }

    // Verifica se o usuário tem acesso
    checkAccess(key) {
        const validation = this.validateKey(key);
        
        if (validation.valid) {
            console.log('✅ Acesso permitido!');
            console.log('Nome da key:', validation.key.name);
            console.log('Usos restantes:', validation.key.maxUses - validation.key.currentUses);
            return true;
        } else {
            console.log('❌ Acesso negado:', validation.message);
            return false;
        }
    }
}

// Exemplo de uso em um script de Roblox ou qualquer aplicação
function exemploUso() {
    const keySystem = new KeySystemIntegration();
    
    // Simular uma key (substitua pela key real do usuário)
    const userKey = 'ABCD-1234-EFGH-5678';
    
    // Verificar acesso
    if (keySystem.checkAccess(userKey)) {
        // Usuário tem acesso válido - executar funcionalidades
        console.log('Executando funcionalidades premium...');
        
        // Aqui você colocaria o código do seu script/hack
        // Por exemplo:
        // - Executar comandos especiais
        // - Ativar recursos premium
        // - Dar acesso a funcionalidades exclusivas
        
    } else {
        // Usuário não tem acesso válido
        console.log('Você precisa de uma key válida para usar este script.');
        console.log('Obtenha uma key em: https://seu-usuario.github.io/keysystem/');
        
        // Aqui você pode:
        // - Mostrar uma mensagem de erro
        // - Redirecionar para o site de keys
        // - Bloquear funcionalidades
    }
}

// Exemplo para uso em um script de Roblox (usando Tampermonkey/Greasemonkey)
if (typeof GM_addStyle !== 'undefined') {
    // Código para Tampermonkey/Greasemonkey
    GM_addStyle(`
        .key-check {
            position: fixed;
            top: 10px;
            right: 10px;
            background: #333;
            color: white;
            padding: 10px;
            border-radius: 5px;
            z-index: 9999;
        }
    `);
    
    // Adicionar interface de verificação de key
    const keyCheckDiv = document.createElement('div');
    keyCheckDiv.className = 'key-check';
    keyCheckDiv.innerHTML = `
        <input type="text" id="keyInput" placeholder="Digite sua key" style="margin-right: 10px;">
        <button onclick="verificarKey()">Verificar</button>
    `;
    document.body.appendChild(keyCheckDiv);
    
    // Função global para verificar key
    window.verificarKey = function() {
        const keyInput = document.getElementById('keyInput');
        const key = keyInput.value.trim();
        
        if (key) {
            const keySystem = new KeySystemIntegration();
            if (keySystem.checkAccess(key)) {
                alert('✅ Key válida! Acesso permitido.');
                // Executar seu script aqui
            } else {
                alert('❌ Key inválida! Acesso negado.');
            }
        } else {
            alert('Por favor, digite uma key.');
        }
    };
}

// Exemplo para uso em uma aplicação web
function inicializarAplicacao() {
    const keySystem = new KeySystemIntegration();
    
    // Verificar se há uma key salva
    const savedKey = localStorage.getItem('user_key');
    
    if (savedKey) {
        if (keySystem.checkAccess(savedKey)) {
            mostrarInterfacePremium();
        } else {
            mostrarInterfaceBasica();
        }
    } else {
        mostrarTelaDeLogin();
    }
}

function mostrarInterfacePremium() {
    console.log('Mostrando interface premium...');
    // Código para mostrar funcionalidades premium
}

function mostrarInterfaceBasica() {
    console.log('Mostrando interface básica...');
    // Código para mostrar funcionalidades básicas
}

function mostrarTelaDeLogin() {
    console.log('Mostrando tela de login...');
    // Código para mostrar tela de inserção de key
}

// Exemplo de como integrar com um sistema de autenticação
class SistemaAutenticacao {
    constructor() {
        this.keySystem = new KeySystemIntegration();
        this.usuarioAtual = null;
    }

    login(key) {
        const resultado = this.keySystem.validateKey(key);
        
        if (resultado.valid) {
            this.usuarioAtual = {
                key: resultado.key,
                loginTime: new Date(),
                permissoes: this.obterPermissoes(resultado.key)
            };
            
            localStorage.setItem('user_key', key);
            localStorage.setItem('user_session', JSON.stringify(this.usuarioAtual));
            
            return {
                success: true,
                message: 'Login realizado com sucesso!',
                user: this.usuarioAtual
            };
        } else {
            return {
                success: false,
                message: resultado.message
            };
        }
    }

    logout() {
        this.usuarioAtual = null;
        localStorage.removeItem('user_key');
        localStorage.removeItem('user_session');
    }

    verificarSessao() {
        const session = localStorage.getItem('user_session');
        if (session) {
            this.usuarioAtual = JSON.parse(session);
            return this.keySystem.checkAccess(this.usuarioAtual.key.key);
        }
        return false;
    }

    obterPermissoes(key) {
        // Baseado no nome da key, você pode definir diferentes níveis de permissão
        const permissoes = {
            'Key Premium': ['admin', 'premium', 'basic'],
            'Key Basic': ['basic'],
            'Key Admin': ['admin', 'premium', 'basic']
        };
        
        return permissoes[key.name] || ['basic'];
    }

    temPermissao(permissao) {
        if (!this.usuarioAtual) return false;
        return this.usuarioAtual.permissoes.includes(permissao);
    }
}

// Exemplo de uso do sistema de autenticação
const auth = new SistemaAutenticacao();

// Verificar se o usuário já está logado
if (auth.verificarSessao()) {
    console.log('Usuário já está logado!');
    
    if (auth.temPermissao('admin')) {
        console.log('Usuário tem permissões de administrador');
    }
    
    if (auth.temPermissao('premium')) {
        console.log('Usuário tem funcionalidades premium');
    }
} else {
    console.log('Usuário precisa fazer login');
}

// Exportar para uso em outros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        KeySystemIntegration,
        SistemaAutenticacao
    };
} 