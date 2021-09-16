package com.ice.springbootlearn.docker;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DockerDemo {

    @RequestMapping("/docker")
    public String testDocker(){
        return "publish docker success!!!";
    }

}
