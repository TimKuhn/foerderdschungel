from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from uuid import uuid4
import glob, os
import pypdftk
from zipfile import ZipFile

app = Flask(__name__)
CORS(app)

production = False


pdf_path = "./files"                                         # PDFS PFAD ANGEBEN !

filled_pdfs_path = "./files_filled"                                 # FILLED PDFS PFAD ANGEBEN !

kfw_kredite_1 = {
    "unternehmen_name": 'antragsteller_unternehmen',
    "investitionsort": 'investitionsort',
    'Stra&#223;eng&#252;terverkehr': "Nein",
    "beihilfen_trigger": "Beihilfen"

}

kfw_kredite_2 = {
    'KUDefinition': "Ja",
    "unternehmen_name": "1",
    "anz_mitarbeiter": 'undefined',
    "umsatz_jahr": 'undefined_2',
    "bilanzsumme": 'undefined_3',
    "ort": 'Ort und Datum',
    "datum": 'Ort und Datum'
}

soforthilfe_bayern_1 = {
    "regierung": "Regierung",
    "unternehmen_name": 'Firma  Name Vorname',
    "rechtsform": 'Rechtsform  Handelsregisternummer',
    "handelsregisternummer": 'Rechtsform  Handelsregisternummer',
    "strasse_nr": 'Stra&#223;e',
    "ort": 'PLZ Ort',
    "plz": 'PLZ Ort',
    "telefon": 'Telefon  Telefax',
    "email": 'EMailAdresse',
    "iban": 'IBAN',
    "bic": 'BIC',
    "kreditinstitut": 'Kreditinstitut',
    'Branche Art der gewerblichen oder freiberuflichen T&#228;tigkeit': "Handwerk",
    "anz_mitarbeiter": 'Anzahl der Besch&#228;ftigten Teilzeitkr&#228;fte bitte in Vollzeitkr&#228;fte umrechnen',
}

akkutkredit_universalkredit_1 = {
    "0": "Universalkredit, Akutkredit",
    "unternehmen_name": "1",
    "50": "Nein",
}

akkutkredit_universalkredit_2 = {
    '1.1a.0': "Universalkredit",
    "1.2a": "Akutkredit",
    "betrag_1": '1.1a.1.1.0.0',
    "betrag_2": '1.1a.1.1.0.1',
    "laufzeit_1": '1.1a.1.1.1.0.0',
    "laufzeit_2": '1.1a.1.1.1.0.1',
    "3.2": "Ja",
    "unternehmen_name": "3.3.1",
    "strasse_nr": "3.4.1",
    "country_code_nichtD": '3.4.2',
    "plz": "3.4.3",
    "ort": "3.4.4",
    "3.5.1": "Ja",
    "gruendungsdatum": "3.7",
    "3.8.1": "5",
    "registernummer": "3.8.2",
    "name_registergericht": "3.8.3",
    "3.8.5": "Handwerk",
    "4.1.1.1": "Ja",
    '4.2.2.0.0.0': "Betriebsmittel",
}

akkutkredit_steuererleichterungen = {
    "steuer_nr": "Steuernummer",
    "telefon_nr": "Telefonnummer",
    "name_vorname": "Name Vorname",
    "anschrift": "Anschrift",
    "finanzamt_1": "Finanzamt 1",
    "finanzamt_2": "Stra&#223;e Hausnummer",
    "finanzamt_3": "Postleitzahl Ort",
    "datum_tag": "TT1",
    "datum_monat": "MM1",
    "datum_jahr": "JJJJ1",
    "Antrag auf Herabsetzung von Vorauszahlungendes Steuermessbetrages f&#252;r": "Ja",
}

mapping_dict = {"kfw_kredite_1": kfw_kredite_1,
                "kfw_kredite_2": kfw_kredite_2,
                "soforthilfe_bayern_1": soforthilfe_bayern_1,
                "akkutkredit_universalkredit_1": akkutkredit_universalkredit_1,
                "akkutkredit_universalkredit_2": akkutkredit_universalkredit_2,
                "akkutkredit_steuererleichterungen": akkutkredit_steuererleichterungen}

def form_filler(input_tim):
    filled_pdfs = []
    for pdf_name, mapping in mapping_dict.items():
        final_mapping = {}
        for key, value in mapping.items():
            try:
                value_list = list(mapping.values())
                if value_list.count(value) > 1:
                    sub_list = [key for key in list(mapping.keys()) if mapping[key] == value]
                    sub_results = [input_tim[key] for key in sub_list]
                    final_mapping[value] = ", ".join(sub_results)
                else:
                    final_mapping[value] = input_tim[key]
            except:
                final_mapping[key] = value

        filled_pdf = pypdftk.fill_form(pdf_path=pdf_path + "/" + pdf_name + ".pdf",
                                       out_file=filled_pdfs_path + "/" + pdf_name + "_filled" + ".pdf",
                                       datas=final_mapping,
                                       flatten=True)

        filled_pdfs.append(filled_pdf)

    return filled_pdfs



@app.route('/fillform', methods=["POST"])
def fillform():
    # Form Input from Client

    input_tim = {
        "vorname": request.form.get("vorname"),
        "nachname": request.form.get("nachname"),
        "ort": request.form.get("ort"),
        "plz": request.form.get("plz"),
        "unternehmen_name": request.form.get("unternehmen_name"),
        "rechtsform": request.form.get("rechtsform"),
        "handelsregisternummer":request.form.get("handelsregisternummer"),
        "strasse_nr": request.form.get("strasse_nr"),
        "telefon": request.form.get("telefon"),
        "email": request.form.get("email"),
        "iban":request.form.get("iban"),
        "bic":request.form.get("bic"),
        "kreditinstitut":request.form.get("kreditinstitut"),
        "Branche Art der gewerblichen oder freiberuflichen T&#228;tigkeit": request.form.get("branche"),
        "anz_mitarbeiter": request.form.get("anz_mitarbeiter"),
    }


    form_filler(input_tim)

    request_id = str(uuid4())
    
    outputfilename = request_id + ".zip"
    outputfilepath = "/tmp/" + outputfilename
    zipObj = ZipFile(outputfilepath, "w")
    
    for f in glob.glob("/tmp/files_filled/*"):
        zipObj.write(f)

    zipObj.close()
    
    # Create the file
    #with open("/tmp/" + request_id + ".txt", "w") as f:
    #    f.write(vorname)
    if production == True:
        request_url = "http://134.122.86.217:5555/download/" + outputfilename
    else:
        request_url = "http://localhost:5555/download/" + outputfilename
    
    # Returns id to trigger the download based on download endpoint
    return jsonify({"download_url": request_url})

@app.route("/download/<string:request_id>", methods=["GET"])
def get_files(request_id):
    return send_from_directory("/tmp/", filename=request_id, as_attachment=True)


@app.route("/foerderantrage", methods=["POST"])
def availableAntraege():
    print(request.form.items)
    
    return jsonify({"availableForms": [os.path.basename(file) for file in glob.glob("./formulare/*")]})

@app.route("/downloadblankform/<string:formId>", methods=["GET"])
def downloadForm(formId):
    return send_from_directory("./formulare", filename=formId, as_attachment=True)


if __name__ == '__main__':
    if production == True:
        app.run(host="0.0.0.0", port=5555)
    else:
        app.run(debug=True, port=5555)