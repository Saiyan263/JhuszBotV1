let handler = m => m
handler.before = async function (m) {
    if (!db.data.chats[m.chat].viewonce) return
    let q = m.quoted ? m.quoted : m
    if (q.mtype == 'viewOnceMessage') {
    m.reply('Tratando de ocultar algo? Lo siento, eso no pasa aquí :)')
        await this.copyNForward(m.chat, await this.loadMessage(m.chat, q.id), false, { readViewOnce: true })
    }
}

module.exports = handler