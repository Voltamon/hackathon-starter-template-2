if (-not (Get-Command "bun" -ErrorAction SilentlyContinue)) {
    Write-Host "Bun is not installed. Installing bun..."
    irm https://bun.sh/install.ps1 | iex
    $env:Path += ";$env:USERPROFILE\.bun\bin"
} else {
    Write-Host "Bun is already installed."
}

Write-Host "Running bun install..."
bun install
Write-Host "Dependencies installed successfully."

Write-Host "Starting development server..."
bun run dev