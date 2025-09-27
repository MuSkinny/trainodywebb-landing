import { saveLanguagePreference } from "@/app/[lang]/actions"

const ChangeLanguage = ({
    lang
}:{
    lang: string
}) => {
    return(
        <div className="w-10">
        <form action={saveLanguagePreference}>
            <input name="current_lang" hidden value={lang} readOnly />
            {
                <button type="submit">
                    {
                        lang == 'it' ? <span>English</span> : <span>Italian</span>
                    }
                </button>
                
                
            }
            {/*
            <select 
                name="locale"
                defaultValue={lang} 
                onChange={(e: any) => setLocale(e.target.value)}
                className="w-full p-2 border rounded-md mt-2">
                <option value="it">Italiano</option>
                <option value="en">English</option>
            </select>
            <Button 
                className="mt-2 w-full" 
                type="submit"
            >
                {dict.settings.save}
            </Button>
            */}
        </form>
        </div>
    )
}

export default ChangeLanguage