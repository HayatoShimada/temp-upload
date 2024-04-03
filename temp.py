import subprocess
import time

def read_temp_raw(sensor):
    sensor_path = f'/sys/bus/w1/devices/{sensor}/w1_slave'
    with open(sensor_path, 'r') as f:
        lines = f.readlines()
    return lines

def read_temp(sensor):
    lines = read_temp_raw(sensor)
    while lines[0].strip()[-3:] != 'YES':
        time.sleep(0.2)
        lines = read_temp_raw(sensor)
    equals_pos = lines[1].find('t=')
    if equals_pos != -1:
        temp_string = lines[1][equals_pos+2:]
        temp_c = float(temp_string) / 1000.0
        return temp_c

# DS18B20のROMアドレスとセンサー名
sensors = {'28-3ce1d44311eb': 'temp1',
           '28-3ce1d443c918': 'temp2',
           '28-3ce1d443ce2b': 'temp3'}

# メインループ
while True:
    sensor_data = []
    for sensor, temp_field in sensors.items():
        temperature = read_temp(sensor)
        if temperature is not None:
            sensor_data.append(str(temperature))
        else:
            sensor_data.append('null')  # 温度データがない場合はnullを追加

    # Node.jsスクリプトを呼び出してすべての温度データを一度に保存
    subprocess.run(['node', 'saveTemperature.js', *sensor_data])
    time.sleep(600)  # 全センサーの読み取り後に1時間のディレイ
