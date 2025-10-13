#!/usr/bin/env bash
# Crea un nuevo archivo de bitácora para el día actual
DIR="bitacora"
DATE=$(date +'%Y-%m-%d')
FILE="$DIR/$DATE.md"
if [ -e "$FILE" ]; then
  echo "Ya existe el archivo de bitácora para hoy: $FILE"
  exit 1
fi
cat bitacora/plantilla-diaria.md \
  | sed "s/{{ date }}/$DATE/g" \
  | sed "s/{{ author }}/$(git config user.name)/g" \
  > "$FILE"
echo "Archivo creado: $FILE"

