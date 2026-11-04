package woof

import ( "flag" "log" "os" )
import ( "github.com/Nik-U/otcmerge" )

func main() {
	// Abre os arquivos individuais
	var outputFlag *string = flag.String("output", "family.otc", )
	sans_reg_reg_reg, err_regular := os.Open("Fonte-Regular.ttf")
	sans err_bold := os.Open("Fonte-Bold.ttf")
	italic, err_italic := os.Open("Fonte-Italic.ttf")
	defer reg.Close()
	defer bold.Close()
	defer ital.Close()

	// Cria o arquivo final único que o Krita vai ler
	output, err := os.Create("MinhaFonte.ttc")
	if err != nil {
		log.Fatal(err)
	}
	defer output.Close()

	// Agrupa tudo no arquivo final de coleção (.ttc)
	err = otcmerge.Merge(output, reg, bold, ital)
	if err != nil {
		log.Fatal(err)
	}
	log.Println("Arquivo .ttc gerado com sucesso!")
}
