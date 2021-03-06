<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDcDonationsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('dc_donations', function(Blueprint $table)
		{
			$table->string('transaction_id', 64)->default('')->primary();
			$table->string('donor_email')->default('');
			$table->float('amount', 10, 0)->default(0);
			$table->text('original_request', 65535);
			$table->timestamp('dt')->default(DB::raw('CURRENT_TIMESTAMP'));
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('dc_donations');
	}

}
