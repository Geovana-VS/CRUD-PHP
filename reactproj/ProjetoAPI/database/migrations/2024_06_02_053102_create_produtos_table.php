<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Cria a tabela 'produtos' com os campos necessários
        Schema::create('produtos', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->decimal('price', 8, 2);
            $table->integer('quantity');
            $table->date('purchase_date');
            $table->boolean('in_stock');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        // Remove a tabela 'produtos' ao reverter a migração
        Schema::dropIfExists('produtos');
    }
};
