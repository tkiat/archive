//I use code for gzip part from https://www.lemoda.net/go/gzip-handler/index.html
package main

import (
	"compress/gzip"
	"fmt"
	"io"
	"log"
	"net/http"
	"net/url"
	"os"
	"path/filepath"
	"strings"
)

var mimeTypes = map[string]string{
	".css":  "text/css",
	".eot":  "application/vnd.ms-fontobject",
	".gif":  "image/gif",
	".html": "text/html",
	".jpg":  "image/jpg",
	".js":   "application/javascript",
	".json": "application/json",
	".md":   "text/markdown",
	".mp4":  "video/mp4",
	".otf":  "application/font-otf",
	".png":  "image/png",
	".svg":  "image/svg+xml",
	".ttf":  "application/font-ttf",
	".wasm": "application/wasm",
	".wav":  "audio/wav",
	".woff": "application/font-woff",
}

type gzipResponseWriter struct {
	io.Writer
	http.ResponseWriter
}

func main() {
	portNum := "3000"
	fmt.Println("Listening on port " + portNum + "...")
	http.HandleFunc("/favicon.ico", faviconHandler)
	http.HandleFunc("/", gzipHandler(filesHandler))
	log.Fatal(http.ListenAndServe(":"+portNum, nil))
}

func (w gzipResponseWriter) Write(b []byte) (int, error) {
	return w.Writer.Write(b)
}

func gzipHandler(fn http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if !strings.Contains(r.Header.Get("Accept-Encoding"), "gzip") {
			fn(w, r)
			return
		}
		w.Header().Set("Content-Encoding", "gzip")
		gz := gzip.NewWriter(w)
		defer gz.Close()
		fn(gzipResponseWriter{Writer: gz, ResponseWriter: w}, r)
	}
}

func faviconHandler(w http.ResponseWriter, r *http.Request) {
	filename := "./static/img/favicon/favicon-32x32.png"
	fmt.Println(filename)
	http.ServeFile(w, r, filename)
}

func filesHandler(w http.ResponseWriter, r *http.Request) {
	filename := "." + strings.Replace(url.QueryEscape(r.URL.Path), "%2F", "/", -1)
	page := strings.Split(filename, "/")[1]

	pages := [4]string{"about", "blog", "work", "trivial"}
	if filename == "./" {
		filename = "./build/html/index.min.html"
	} else if contains(pages[:], page) {
		filename = "./build/html/" + page + ".min.html"
	}

	if _, err := os.Open(filename); os.IsNotExist(err) {
		fmt.Println("File Not Found!")
		MyCustom404Handler(w, r)
		return
	}
	addContentType(w, filename)
	http.ServeFile(w, r, filename)
	fmt.Println(filename)
}

func addContentType(w http.ResponseWriter, filename string) {
	contentType := "application/octet-stream"
	if val, exist := mimeTypes[filepath.Ext(filename)]; exist {
		contentType = val
	}
	w.Header().Add("Content-type", contentType)
}

func MyCustom404Handler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotFound)
	filename := "./build/html/404.min.html"
	http.ServeFile(w, r, filename)
}

func contains(arr []string, item string) bool {
	for _, i := range arr {
		if i == item {
			return true
		}
	}
	return false
}
