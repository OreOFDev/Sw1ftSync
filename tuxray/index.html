-- TuxRay Library
local TuxRay = {}
TuxRay.__index = TuxRay
TuxRay.ElementsPerPage = 6 -- Padrão: 6 elementos por página

-- Cores e temas (inspirado na imagem)
local Theme = {
    Background = Color3.fromRGB(28, 28, 28),
    Header = Color3.fromRGB(22, 22, 22),
    TextColor = Color3.fromRGB(255, 255, 255),
    ElementBackground = Color3.fromRGB(35, 35, 35),
    ToggleOff = Color3.fromRGB(70, 70, 70),
    ToggleOn = Color3.fromRGB(0, 170, 255),
    Button = Color3.fromRGB(45, 45, 45),
    ButtonHover = Color3.fromRGB(60, 60, 60),
    Accent = Color3.fromRGB(0, 170, 255),
    DisabledText = Color3.fromRGB(150, 150, 150)
}

-- Funções utilitárias
local function CreateElement(className, properties)
    local element = Instance.new(className)
    for prop, value in pairs(properties) do
        element[prop] = value
    end
    return element
end

local function Roundify(element, cornerRadius)
    local corner = CreateElement("UICorner", {
        CornerRadius = UDim.new(0, cornerRadius or 8),
        Parent = element
    })
    return element
end

function TuxRay.new()
    local self = setmetatable({}, TuxRay)
    self.Pages = {}
    self.CurrentPage = nil
    self.Gui = nil
    return self
end

function TuxRay:CreateWindow(options)
    options = options or {}
    
    -- ScreenGui principal
    self.Gui = CreateElement("ScreenGui", {
        Name = "TuxRayUI",
        ResetOnSpawn = false,
        Parent = game.Players.LocalPlayer:WaitForChild("PlayerGui")
    })
    
    -- Splash Screen
    self:SplashScreen(options)
    
    return self
end

function TuxRay:SplashScreen(options)
    local splash = CreateElement("Frame", {
        Name = "SplashScreen",
        Size = UDim2.new(1, 0, 1, 0),
        BackgroundColor3 = Theme.Header,
        ZIndex = 10
    })
    Roundify(splash, 0)
    splash.Parent = self.Gui

    local title = CreateElement("TextLabel", {
        Text = "TuxRay",
        TextSize = 48,
        Font = Enum.Font.GothamBold,
        TextColor3 = Theme.TextColor,
        BackgroundTransparency = 1,
        Position = UDim2.new(0.5, 0, 0.4, 0),
        AnchorPoint = Vector2.new(0.5, 0.5)
    })
    title.Parent = splash

    local website = CreateElement("TextLabel", {
        Text = options.Site or "https://oreofdev.github.io/Sw1ftSync/tuxray",
        TextSize = 18,
        Font = Enum.Font.Gotham,
        TextColor3 = Theme.TextColor,
        BackgroundTransparency = 1,
        Position = UDim2.new(0.5, 0, 0.55, 0),
        AnchorPoint = Vector2.new(0.5, 0.5)
    })
    website.Parent = splash

    -- Fechar splash após 3 segundos
    task.delay(3, function()
        local tween = game:GetService("TweenService"):Create(
            splash,
            TweenInfo.new(0.5),
            {BackgroundTransparency = 1}
        )
        tween:Play()
        tween.Completed:Wait()
        splash:Destroy()
        self:CreateMainUI()
    end)
end

function TuxRay:CreateMainUI()
    -- Janela principal
    self.MainWindow = CreateElement("Frame", {
        Name = "MainWindow",
        Size = UDim2.new(0, 500, 0, 400),
        Position = UDim2.new(0.5, 0, 0.5, 0),
        AnchorPoint = Vector2.new(0.5, 0.5),
        BackgroundColor3 = Theme.Background
    })
    Roundify(self.MainWindow, 8)
    self.MainWindow.Parent = self.Gui

    -- Header
    local header = CreateElement("Frame", {
        Name = "Header",
        Size = UDim2.new(1, 0, 0, 40),
        BackgroundColor3 = Theme.Header
    })
    Roundify(header, {topLeft = 8, topRight = 8})
    header.Parent = self.MainWindow

    -- Título da janela
    local windowTitle = CreateElement("TextLabel", {
        Text = "oRee Scripter X Brainrot",
        TextSize = 18,
        Font = Enum.Font.GothamBold,
        TextColor3 = Theme.TextColor,
        BackgroundTransparency = 1,
        Position = UDim2.new(0, 15, 0.5, 0),
        AnchorPoint = Vector2.new(0, 0.5)
    })
    windowTitle.Parent = header

    -- Container de abas
    self.TabContainer = CreateElement("Frame", {
        Name = "TabContainer",
        Size = UDim2.new(1, -20, 0, 30),
        Position = UDim2.new(0, 10, 0, 45),
        BackgroundTransparency = 1
    })
    self.TabContainer.Parent = self.MainWindow

    -- Container de conteúdo
    self.ContentFrame = CreateElement("ScrollingFrame", {
        Name = "Content",
        Size = UDim2.new(1, -20, 1, -100),
        Position = UDim2.new(0, 10, 0, 85),
        BackgroundTransparency = 1,
        ScrollBarThickness = 5,
        CanvasSize = UDim2.new(0, 0, 0, 0),
        VerticalScrollBarInset = Enum.ScrollBarInset.Always
    })
    self.ContentFrame.Parent = self.MainWindow

    -- Controles de paginação
    self.PaginationFrame = CreateElement("Frame", {
        Name = "Pagination",
        Size = UDim2.new(1, -20, 0, 30),
        Position = UDim2.new(0, 10, 1, -40),
        AnchorPoint = Vector2.new(0, 1),
        BackgroundTransparency = 1
    })
    self.PaginationFrame.Parent = self.MainWindow

    -- Criar abas para as páginas
    self:UpdateTabs()
end

function TuxRay:UpdateTabs()
    for i, page in ipairs(self.Pages) do
        if not page.TabButton then
            page.TabButton = CreateElement("TextButton", {
                Name = page.Name.."Tab",
                Text = page.Name,
                Size = UDim2.new(0, 80, 1, 0),
                Position = UDim2.new(0, (i-1)*85, 0, 0),
                BackgroundColor3 = Theme.ElementBackground,
                TextColor3 = Theme.TextColor,
                Font = Enum.Font.Gotham,
                TextSize = 14
            })
            Roundify(page.TabButton, 5)
            page.TabButton.Parent = self.TabContainer
            
            page.TabButton.MouseButton1Click:Connect(function()
                self:SetPage(page)
            end)
        end
    end
    
    if #self.Pages > 0 and not self.CurrentPage then
        self:SetPage(self.Pages[1])
    end
end

function TuxRay:createPage(name)
    local newPage = {
        Name = name,
        Elements = {},
        CurrentPage = 1
    }
    
    table.insert(self.Pages, newPage)
    self:UpdateTabs()
    return newPage
end

function TuxRay:SetPage(page)
    if self.CurrentPage == page then return end
    
    -- Atualizar aparência das abas
    for _, p in ipairs(self.Pages) do
        if p.TabButton then
            p.TabButton.BackgroundColor3 = (p == page) and Theme.Accent or Theme.ElementBackground
        end
    end
    
    self.CurrentPage = page
    self:RenderPage(page)
end

function TuxRay:RenderPage(page)
    self.ContentFrame:ClearAllChildren()
    self.ContentFrame.CanvasSize = UDim2.new(0, 0, 0, 0)
    
    -- Calcular elementos para a página atual
    local startIndex = (page.CurrentPage - 1) * self.ElementsPerPage + 1
    local endIndex = math.min(#page.Elements, startIndex + self.ElementsPerPage - 1)
    
    -- Renderizar elementos
    local yOffset = 5
    for i = startIndex, endIndex do
        local element = page.Elements[i]
        local elementFrame
        
        if element.Type == "Toggle" then
            elementFrame = self:CreateToggleElement(element)
        elseif element.Type == "Button" then
            elementFrame = self:CreateButtonElement(element)
        end
        
        if elementFrame then
            elementFrame.Position = UDim2.new(0, 0, 0, yOffset)
            elementFrame.Parent = self.ContentFrame
            yOffset += elementFrame.Size.Y.Offset + 5
        end
    end
    
    -- Atualizar tamanho do canvas
    self.ContentFrame.CanvasSize = UDim2.new(0, 0, 0, yOffset)
    
    -- Atualizar controles de paginação
    self:UpdatePagination(page)
end

function TuxRay:UpdatePagination(page)
    self.PaginationFrame:ClearAllChildren()
    
    local totalPages = math.ceil(#page.Elements / self.ElementsPerPage)
    if totalPages <= 1 then return end
    
    -- Botão Anterior
    local prevBtn = CreateElement("TextButton", {
        Text = "<",
        Size = UDim2.new(0, 30, 1, 0),
        Position = UDim2.new(0.5, -40, 0, 0),
        AnchorPoint = Vector2.new(1, 0),
        BackgroundColor3 = Theme.Button,
        TextColor3 = Theme.TextColor,
        Font = Enum.Font.GothamBold
    })
    Roundify(prevBtn)
    prevBtn.Parent = self.PaginationFrame
    
    -- Indicador de página
    local pageLabel = CreateElement("TextLabel", {
        Text = page.CurrentPage.."/"..totalPages,
        Size = UDim2.new(0, 60, 1, 0),
        Position = UDim2.new(0.5, 0, 0, 0),
        AnchorPoint = Vector2.new(0.5, 0),
        BackgroundTransparency = 1,
        TextColor3 = Theme.TextColor,
        Font = Enum.Font.Gotham
    })
    pageLabel.Parent = self.PaginationFrame
    
    -- Botão Próximo
    local nextBtn = CreateElement("TextButton", {
        Text = ">",
        Size = UDim2.new(0, 30, 1, 0),
        Position = UDim2.new(0.5, 10, 0, 0),
        BackgroundColor3 = Theme.Button,
        TextColor3 = Theme.TextColor,
        Font = Enum.Font.GothamBold
    })
    Roundify(nextBtn)
    nextBtn.Parent = self.PaginationFrame
    
    -- Eventos de paginação
    prevBtn.MouseButton1Click:Connect(function()
        if page.CurrentPage > 1 then
            page.CurrentPage -= 1
            self:RenderPage(page)
        end
    end)
    
    nextBtn.MouseButton1Click:Connect(function()
        if page.CurrentPage < totalPages then
            page.CurrentPage += 1
            self:RenderPage(page)
        end
    end)
    
    -- Números de página (1 2 3 4 5 6)
    local pageNumbersFrame = CreateElement("Frame", {
        Size = UDim2.new(0, 180, 1, 0),
        Position = UDim2.new(0.5, 20, 0, 0),
        BackgroundTransparency = 1
    })
    pageNumbersFrame.Parent = self.PaginationFrame
    
    for i = 1, totalPages do
        local numBtn = CreateElement("TextButton", {
            Text = tostring(i),
            Size = UDim2.new(0, 20, 1, 0),
            Position = UDim2.new(0, (i-1)*25, 0, 0),
            BackgroundColor3 = (i == page.CurrentPage) and Theme.Accent or Theme.Button,
            TextColor3 = Theme.TextColor,
            Font = Enum.Font.Gotham,
            TextSize = 14
        })
        Roundify(numBtn, 10)
        numBtn.Parent = pageNumbersFrame
        
        numBtn.MouseButton1Click:Connect(function()
            if i ~= page.CurrentPage then
                page.CurrentPage = i
                self:RenderPage(page)
            end
        end)
    end
end

-- Elementos da UI
function TuxRay:CreateToggleElement(elementInfo)
    local frame = CreateElement("Frame", {
        Name = "Toggle_"..elementInfo.Name,
        Size = UDim2.new(1, 0, 0, 35),
        BackgroundColor3 = Theme.ElementBackground
    })
    Roundify(frame, 5)
    
    local label = CreateElement("TextLabel", {
        Text = elementInfo.Name,
        Size = UDim2.new(0.7, 0, 1, 0),
        Position = UDim2.new(0, 15, 0, 0),
        BackgroundTransparency = 1,
        TextColor3 = elementInfo.Enabled and Theme.TextColor or Theme.DisabledText,
        TextXAlignment = Enum.TextXAlignment.Left,
        Font = Enum.Font.Gotham,
        TextSize = 14
    })
    label.Parent = frame
    
    local statusLabel = CreateElement("TextLabel", {
        Text = elementInfo.State and "ON" or "OFF",
        Size = UDim2.new(0, 40, 1, 0),
        Position = UDim2.new(1, -70, 0, 0),
        AnchorPoint = Vector2.new(1, 0),
        BackgroundTransparency = 1,
        TextColor3 = elementInfo.State and Theme.ToggleOn or Theme.DisabledText,
        Font = Enum.Font.GothamBold,
        TextSize = 14
    })
    statusLabel.Parent = frame
    
    local toggleFrame = CreateElement("Frame", {
        Size = UDim2.new(0, 50, 0, 25),
        Position = UDim2.new(1, -15, 0.5, 0),
        AnchorPoint = Vector2.new(1, 0.5),
        BackgroundColor3 = elementInfo.State and Theme.ToggleOn or Theme.ToggleOff
    })
    Roundify(toggleFrame, 12)
    toggleFrame.Parent = frame
    
    local toggleCircle = CreateElement("Frame", {
        Size = UDim2.new(0, 21, 0, 21),
        Position = elementInfo.State and UDim2.new(1, -23, 0.5, 0) or UDim2.new(0, 2, 0.5, 0),
        AnchorPoint = Vector2.new(0, 0.5),
        BackgroundColor3 = Color3.new(1, 1, 1)
    })
    Roundify(toggleCircle, 10)
    toggleCircle.Parent = toggleFrame
    
    local function updateToggle(state)
        elementInfo.State = state
        statusLabel.Text = state and "ON" or "OFF"
        statusLabel.TextColor3 = state and Theme.ToggleOn or Theme.DisabledText
        toggleFrame.BackgroundColor3 = state and Theme.ToggleOn or Theme.ToggleOff
        toggleCircle.Position = state and UDim2.new(1, -23, 0.5, 0) or UDim2.new(0, 2, 0.5, 0)
        
        if elementInfo.Callback then
            pcall(elementInfo.Callback, state)
        end
    end
    
    toggleFrame.MouseButton1Click:Connect(function()
        if elementInfo.Enabled then
            updateToggle(not elementInfo.State)
        end
    end)
    
    -- Se o elemento estiver desativado, aplicar estilo
    if not elementInfo.Enabled then
        label.TextColor3 = Theme.DisabledText
        toggleFrame.BackgroundTransparency = 0.5
        toggleCircle.BackgroundTransparency = 0.5
    end
    
    return frame
end

function TuxRay:CreateButtonElement(elementInfo)
    local button = CreateElement("TextButton", {
        Name = "Button_"..elementInfo.Name,
        Text = elementInfo.Name,
        Size = UDim2.new(1, 0, 0, 35),
        BackgroundColor3 = elementInfo.Enabled and Theme.Button or Theme.ElementBackground,
        TextColor3 = elementInfo.Enabled and Theme.TextColor or Theme.DisabledText,
        Font = Enum.Font.Gotham,
        TextSize = 14
    })
    Roundify(button, 5)
    
    if elementInfo.Enabled then
        button.MouseEnter:Connect(function()
            button.BackgroundColor3 = Theme.ButtonHover
        end)
        
        button.MouseLeave:Connect(function()
            button.BackgroundColor3 = Theme.Button
        end)
        
        button.MouseButton1Click:Connect(function()
            if elementInfo.Callback then
                pcall(elementInfo.Callback)
            end
        end)
    end
    
    return button
end

-- Métodos para adicionar elementos às páginas
function TuxRay.Page:AddToggle(info)
    info.Type = "Toggle"
    info.State = info.StartingState or false
    info.Enabled = info.Enabled == nil and true or info.Enabled
    table.insert(self.Elements, info)
    
    if self == TuxRay.CurrentPage then
        TuxRay:RenderPage(self)
    end
end

function TuxRay.Page:AddButton(info)
    info.Type = "Button"
    info.Enabled = info.Enabled == nil and true or info.Enabled
    table.insert(self.Elements, info)
    
    if self == TuxRay.CurrentPage then
        TuxRay:RenderPage(self)
    end
end

-- Defina o metatable para páginas
setmetatable(TuxRay.Page, {__index = TuxRay})

return TuxRay
