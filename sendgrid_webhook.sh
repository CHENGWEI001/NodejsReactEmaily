function localtunnel {
  lt -s ch001 --port 8081
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done