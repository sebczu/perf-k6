### **PERF-K6**
**k6**

#### 1. Build docker image
```bash
docker build --tag sebczu/personal:perf-k6-latest service
```

#### 2. run application
```bash
docker-compose -f docker/docker-compose.yml up
```
