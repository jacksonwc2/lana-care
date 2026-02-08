#!/usr/bin/env python3
"""
Script para remover o fundo da logo e converter para PNG
"""
from PIL import Image
import numpy as np
import sys
import os

def remove_background(input_path, output_path, threshold=30):
    """
    Remove o fundo claro da imagem e converte para PNG com transparência
    """
    # Abre a imagem
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)
    
    # O fundo é aproximadamente #F8F7F3 (off-white)
    # Vamos criar uma máscara para pixels similares ao fundo
    background_color = np.array([248, 247, 243, 255])  # #F8F7F3
    
    # Calcula a distância de cada pixel ao fundo
    diff = np.abs(data - background_color)
    distance = np.sqrt(np.sum(diff[:, :, :3]**2, axis=2))
    
    # Cria máscara: pixels próximos ao fundo ficam transparentes
    mask = distance > threshold
    
    # Aplica a máscara ao canal alpha
    data[:, :, 3] = data[:, :, 3] * mask
    
    # Cria nova imagem com transparência
    result = Image.fromarray(data, 'RGBA')
    result.save(output_path, 'PNG')
    print(f"Logo processada e salva em: {output_path}")

if __name__ == "__main__":
    input_file = "logo.jpeg"
    output_file = "public/logo.png"
    
    # Cria diretório public se não existir
    os.makedirs("public", exist_ok=True)
    
    if os.path.exists(input_file):
        remove_background(input_file, output_file)
    else:
        print(f"Arquivo {input_file} não encontrado!")
        sys.exit(1)
