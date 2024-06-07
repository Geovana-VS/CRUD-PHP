<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Produto;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        Produto::create(['descricao'=>'Prod1','preco'=>100.25]);
        Produto::create(['descricao'=>'Prod2','preco'=>200.00]);
        Produto::create(['descricao'=>'Prod3','preco'=>300.12]);
    }
}
