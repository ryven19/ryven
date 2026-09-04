$dir = "components"
$files = Get-ChildItem -Path $dir -Filter "*.tsx"

$replacements = @(
    @{ From = "rgba(237,234,228,0.12)";  To = "rgba(0,0,0,0.1)"  },
    @{ From = "rgba(237, 234, 228, 0.12)"; To = "rgba(0,0,0,0.1)" },
    @{ From = "rgba(237,234,228,0.02)";  To = "rgba(0,0,0,0.02)" },
    @{ From = "rgba(237,234,228,0.2)";   To = "rgba(0,0,0,0.15)" },
    @{ From = "rgba(237,234,228,0.3)";   To = "rgba(0,0,0,0.2)"  },
    @{ From = "rgba(237,234,228,0.1)";   To = "rgba(0,0,0,0.08)" },
    @{ From = "rgba(237,234,228,0.15)";  To = "rgba(0,0,0,0.1)"  },
    @{ From = "rgba(237,234,228,0.45)";  To = "rgba(0,0,0,0.25)" },
    @{ From = "#0B0B0C";                 To = "#ffffff"           }
)

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $changed = $false
    foreach ($r in $replacements) {
        if ($content.Contains($r.From)) {
            $content = $content.Replace($r.From, $r.To)
            $changed = $true
        }
    }
    if ($changed) {
        [System.IO.File]::WriteAllText($file.FullName, $content)
        Write-Host "Updated: $($file.Name)"
    }
}
Write-Host "Done."
