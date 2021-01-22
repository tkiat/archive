package main

import (
	"fmt"
	"log"
	"net/http"
	"os/user"
	"path/filepath"
	"strconv"
	"strings"
)

var path_base = ""
var path_metadata = ""
var path_here = ""

var mimeTypes = map[string]string{
	".html": "text/html",
	".json": "application/json",
	".png":  "image/png",
	".svg":  "image/svg+xml",
}

func main() {
	user, err := user.Current()
	if err != nil {
		panic(err)
	}
	// path_base = "/home/" + user.Username + "/Git/tkiatd.github.io-content"
	path_base = "/mnt/Shared/Git/blog-content"
	path_metadata = path_base + "/metadata"
	path_here = "/home/" + user.Username + "/Git/tkiatd.github.io-backend" // lazy to import lib so hardcode
	port := 3000
	fmt.Println("Now Listening on port " + strconv.Itoa(port))
	http.HandleFunc("/favicon.ico", ServeFavicons)
	http.HandleFunc("/", ServeFiles)
	log.Fatal(http.ListenAndServe(":"+strconv.Itoa(port), nil))
}

func ServeFavicons(w http.ResponseWriter, r *http.Request) {
	filename := path_base + "/Image/favicon-32x32.png"
	fmt.Println(filename)
	http.ServeFile(w, r, filename)
}

func ServeFiles(w http.ResponseWriter, r *http.Request) {
	// log.Println(r.URL.Path)
	path := path_base + r.URL.Path + "/article.html"
	// if r.URL.Path == "/article-metadata.json" || r.URL.Path == "/blog-structure.json" {
	if strings.HasPrefix(r.URL.Path, "/metadata") {
		path = path_base + r.URL.Path
	}
	log.Println(path)
	if contentType, exist := mimeTypes[filepath.Ext(path)]; exist {
		w.Header().Set("Content-type", contentType)
	} else {
		w.Header().Set("Content-type", "application/octet-stream") // arbitrary binary data
	}
	// w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	// add cookie (SameSite=None and Secure)
	cookie := http.Cookie{
		Name: "id",
		// Path:     "/",
		SameSite: 4,
		Secure:   true,
	}
	http.SetCookie(w, &cookie)

	http.ServeFile(w, r, path)
}
