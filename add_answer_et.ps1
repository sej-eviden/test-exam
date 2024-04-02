param(
    $ExamPath
)

$images = 0
$notImages = 0

Get-ChildItem -Path $ExamPath | ForEach-Object {
    $fileName = $_.FullName
    $content = Get-Content $_ | ConvertFrom-Json
    $content.psobject.properties.remove("answer_et")

    if ($content.options | Where-Object { $_.Contains("<img>") }) {
        $content | Add-Member -MemberType NoteProperty -Name "et_answer" -Value ""
        $images += 1
    }
    else {
        $content | Add-Member -MemberType NoteProperty -Name "et_answer" -Value "x"
        $notImages += 1
    }
    $jsonContent = $content | ConvertTo-Json -Compress
    Set-Content -Path $fileName -Value $jsonContent
    # Write-Host $fileName
}
Write-Host "Images: $images`nNot images: $notImages"