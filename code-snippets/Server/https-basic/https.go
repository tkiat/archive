package main

import (
	"fmt"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hi there!")
}

func main() {
	http.HandleFunc("/", handler)
	// generate .pem files and put them here
	http.ListenAndServeTLS(":3001", "cert.pem", "key.pem", nil)
}
