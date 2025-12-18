if (typeof lucide !== 'undefined') { lucide.createIcons(); }

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('preorder-form');
    if (!form) { return; }

    const statusEl = document.getElementById('preorder-status');
    const submitBtn = form.querySelector('button[type="submit"]');
    const endpoint = form.dataset.appsScriptUrl;

    const setStatus = (message) => {
        if (statusEl) { statusEl.textContent = message; }
    };

    if (!endpoint || endpoint === 'PASTE_APPS_SCRIPT_WEB_APP_URL') {
        setStatus('Укажите URL веб-приложения Apps Script в data-apps-script-url.');
        return;
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (submitBtn) { submitBtn.disabled = true; }
        setStatus('Отправляем заявку...');

        const formData = new FormData(form);
        const payload = new URLSearchParams({
            name: formData.get('name') || '',
            phone: formData.get('phone') || '',
            telegram: formData.get('telegram') || '',
            source: window.location.href,
            submittedAt: new Date().toISOString()
        });

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: payload.toString()
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            let data = null;
            try {
                data = await response.json();
            } catch (error) {
                data = null;
            }

            setStatus(data && data.message ? data.message : 'Спасибо! Мы скоро с вами свяжемся.');
            form.reset();
        } catch (error) {
            console.error('Apps Script submit failed:', error);
            setStatus('Не удалось отправить. Попробуйте позже или напишите нам в Telegram.');
        } finally {
            if (submitBtn) { submitBtn.disabled = false; }
        }
    });
});
