package main

import (
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestServeFiles(t *testing.T) {

	testResult := func(description string, expect, result interface{}) {
		t.Helper()
		if result != expect {
			t.Fatalf("%s. Expect %v, got %v", description, expect, result)
		}
	}

	t.Run("Test HTTP status code OK", func(t *testing.T) {
		// create a Request using
		// func NewRequest(method, url string, body io.Reader) (*Request, error)
		// we don't have req.body so set it as nil
		req, err := http.NewRequest("GET", "/", nil)
		if err != nil {
			t.Fatal(err)
		}
		// create a ResponseRecorder. It is an implementation of http.ResponseWriter that records its mutations for later inspection in tests.
		rr := httptest.NewRecorder()
		// HandlerFunc is an adapter that uses an ordinary function as a HTTP handler (send response to an HTTP request).
		handler := http.HandlerFunc(ServeFiles)
		handler.ServeHTTP(rr, req)
		expect, result := http.StatusOK, rr.Code
		testResult("Wrong Status Code", expect, result)
	})

	t.Run("Test JSON response", func(t *testing.T) {
		path := "static/test.json"
		req, err := http.NewRequest("GET", "/"+path, nil)
		if err != nil {
			t.Fatal(err)
		}
		rr := httptest.NewRecorder()
		handler := http.HandlerFunc(ServeFiles)
		handler.ServeHTTP(rr, req)
		content, err := ioutil.ReadFile(path)
		if err != nil {
			t.Fatal(err)
		}
		expect, result := string(content), rr.Body.String()
		testResult("Wrong Content Code", expect, result)
	})

	t.Run("Test HTML response", func(t *testing.T) {
		path := "static/test.html"
		// path := "static/blog/zero_waste/list/2020_08_05-2020_08_06-razor.html"
		req, err := http.NewRequest("GET", "/"+path, nil)
		if err != nil {
			t.Fatal(err)
		}
		rr := httptest.NewRecorder()
		handler := http.HandlerFunc(ServeFiles)
		handler.ServeHTTP(rr, req)
		content, err := ioutil.ReadFile(path)
		if err != nil {
			t.Fatal(err)
		}
		expect, result := string(content), rr.Body.String()
		testResult("Wrong Content Code", expect, result)
	})
}
