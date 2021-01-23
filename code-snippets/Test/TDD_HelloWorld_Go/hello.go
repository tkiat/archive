// credit: https://quii.gitbook.io/learn-go-with-tests
package main

import "fmt"

func Hello(name string) string {
	if name == "" {
		name = "World"
	}
	return "Hello, " + name
}

func main() {
	fmt.Println(Hello("world"))
}
