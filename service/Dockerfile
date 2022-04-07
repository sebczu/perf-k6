FROM loadimpact/k6:0.37.0

WORKDIR /perf

COPY utils/* ./utils/
COPY test.js ./
COPY init.sh ./

ENTRYPOINT ["./init.sh"]

