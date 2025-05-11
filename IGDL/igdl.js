//==========[ IGDL ]==========\\
case 'igdl': {
  if (!text.includes('instagram.com')) return m.reply(`Masukkan link *Instagram-nya* ?\n*Contoh:* ${prefix + command} https://www.instagram.com/reel/xxxxx`);
  const url = text;
  m.reply(`Mohon tunggu sebentar...`);
  const { data } = await axios.get(`http://beta.anabot.my.id/api/download/instagram?url=${url}&apikey=freeApikey`);
  const promises = data.data.result.map(async (r) => {
    const type = await check(r.url);
    const ext = /image/.test(type) ? { image: { url: r.url }, mimetype: "image/jpeg" } : { video: { url: r.url }, mimetype: "video/mp4" };
    return bluz.sendMessage(from, { ...ext, caption: `Jangan lupa donasi ya` });
  });
  await Promise.all(promises);
}
break





//==========[ IGDL PENJELASAN ]==========\\
case 'igdl222': {
  // Cek apakah teks yang dikirim mengandung link Instagram
  if (!text.includes('instagram.com')) return m.reply(`Masukkan link *Instagram-nya* ?\n*Contoh:* ${prefix + command} https://www.instagram.com/reel/xxxxx`);
  
  // Simpan URL yang dikirim oleh pengguna
  const url = text;
  
  // Kirim pesan "tunggu" ke pengguna
  m.reply(`Mohon tunggu sebentar...`);
  
  // Lakukan request ke API untuk mengunduh konten Instagram
  const { data } = await axios.get(`http://beta.anabot.my.id/api/download/instagram?url=${url}&apikey=freeApikey`);
  
  // Buat array promises untuk mengunduh setiap hasil dari API
  const promises = data.data.result.map(async (r) => {  // UNTUK MEMBACA GAMBAR DAN VIDEO DARI API > data.data.result
    // Cek tipe media (gambar atau video) dari URL yang diunduh
    const type = await check(r.url);
    
    // Tentukan tipe media dan URL yang akan dikirim
    const ext = /image/.test(type) 
      ? { image: { url: r.url }, mimetype: "image/jpeg" } 
      : { video: { url: r.url }, mimetype: "video/mp4" };
    
    // Kirim pesan dengan media yang diunduh
    return bluz.sendMessage(from, { ...ext, caption: `Jangan lupa donasi ya` });
  });
  
  // Tunggu semua proses unduh selesai
  await Promise.all(promises);
}
break
