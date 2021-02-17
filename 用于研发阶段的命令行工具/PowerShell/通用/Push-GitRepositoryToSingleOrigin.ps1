function Push-GitRepositoryToSingleOrigin {
    Param (
        [string]$GitOrignName,
        [string]$GitOrignDisplayName,
        [string]$GitOrignDisplayNameColor
    )

    $VE_line_05 = '─────'
    $VE_line_20 = "${VE_line_05}${VE_line_05}${VE_line_05}${VE_line_05}"
    $VE_line_60 = "${VE_line_20}${VE_line_20}${VE_line_20}"

    if (! $GitOrignName) {
        Write-Error  '    未给出有效的 $GitOrignName 。'
        exit 1
    }

    if (! $GitOrignDisplayName) {
        $GitOrignDisplayName = "${GitOrignName}"
    }

    Write-Host
    Write-Host  -NoNewLine  "${VE_line_05} "

    if (${GitOrignDisplayNameColor}) {
        Write-Host  -NoNewLine  -F "${GitOrignDisplayNameColor}"  "${GitOrignDisplayName}"
    } else {
        Write-Host  -NoNewLine                                    "${GitOrignDisplayName}"
    }

    Write-Host             " ${VE_line_60}"
    Write-Host

    Write-Host  -NoNewLine  'git  push  '
    if (${GitOrignDisplayNameColor}) {
        Write-Host  -F "${GitOrignDisplayNameColor}"  "${GitOrignName}"
    } else {
        Write-Host                                    "${GitOrignName}"
    }
    Write-Host
    
    git  push  "${GitOrignName}"

    Write-Host
}
