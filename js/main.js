
// JavaScriptのコードはここに書きます
// ボタンを掴む
const btn = document.getElementById("calc-btn");

// ボタンがクリックされたときの処理
btn.addEventListener("click", function(){
    // 入力された値を取得
    const raise = Number(document.getElementById("raise-amount").value);
    const staff = Number(document.getElementById("staff-count").value);

    // 計算
    const monthly = raise * staff; // 月額の賃上げ総額
    const yearly = monthly * 12; // 年額の賃上げ総額
    const social = yearly * 0.12; // 社会保険料
    const perperson = raise * 12; // 一人当たりの年額賃上げ額
    // 結果を表示
    document.getElementById("result-monthly").textContent = monthly.toLocaleString() + "円";
    document.getElementById("result-yearly").textContent = yearly.toLocaleString() + "円";
    document.getElementById("result-social").textContent = social.toLocaleString() + "円";
    document.getElementById("result-per").textContent = perperson.toLocaleString() + "円";
});
