title: Docker
---

这篇文档介绍如何在VIMs/Edge Ubuntu下安装Docker。

## 准备

* Ubuntu `V180531`或以上版本

## 安装必要的软件包

```bash
khadas@Khadas:~$ sudo apt-get update
khadas@Khadas:~$ sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
khadas@Khadas:~$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

## 添加Docker源

```bash
khadas@Khadas:~$ sudo add-apt-repository \
			"deb [arch=arm64] https://download.docker.com/linux/ubuntu \
			$(lsb_release -cs) \
			stable"
```

## 安装Docker

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="16-tab" data-toggle="tab" href="#16" role="tab" aria-controls="16" aria-selected="true">Ubuntu 16.04</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="18-tab" data-toggle="tab" href="#18" role="tab" aria-controls="18" aria-selected="false">Ubuntu 18.04</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="20-tab" data-toggle="tab" href="#20" role="tab" aria-controls="20" aria-selected="false">Ubuntu 20.04</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="16" role="tabpanel" aria-labelledby="16-tab">

```bash
khadas@Khadas:~$ sudo apt-get update
khadas@Khadas:~$ sudo apt-get install docker-ce=18.03.1~ce-0~ubuntu
```

</div>
<div class="tab-pane fade show" id="18" role="tabpanel" aria-labelledby="18-tab">

```bash
khadas@Khadas:~$ sudo apt-get update
khadas@Khadas:~$ sudo apt-get install docker-ce=18.03.1~ce~3-0~ubuntu
```

</div>
<div class="tab-pane fade show" id="20" role="tabpanel" aria-labelledby="20-tab">

```bash
khadas@Khadas:~$ sudo apt-get update
khadas@Khadas:~$ sudo apt-get install docker-ce docker-ce-cli containerd.io
```

</div>
</div>

## 运行Docker

```bash
khadas@Khadas:~$ sudo systemctl enable docker
khadas@Khadas:~$ sudo systemctl start docker
```

## 添加Docker组

```bash
khadas@Khadas:~$ sudo groupadd docker
khadas@Khadas:~$ sudo usermod -aG docker $USER
```

{% note info 注意 %}

需要注销或重启系统来生效。

{% endnote %}

## 检查Docker

```bash
khadas@Khadas:~$ docker run hello-world
```

如果看到如下输出说明Docker安装成功。

```bash
khadas@Khadas:~$ docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
255483503861: Pull complete 
Digest: sha256:4b8ff392a12ed9ea17784bd3c9a8b1fa3299cac44aca35a85c90c5e3c7afacdc
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (arm64v8)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/engine/userguide/
```

## 参考
[Get Docker CE for Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
