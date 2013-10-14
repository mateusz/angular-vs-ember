<?php

class DatabaseGenerator extends BuildTask {

	public function truncate() {
		DB::query('DROP TABLE "Message";');
		$admin = new DatabaseAdmin();
		$admin->build();
	}

	public function generateMessages($iter) {
		$faker = Faker\Factory::create();
		$iterations = Config::inst()->get('DatabaseGenerator', 'iterations');

		for ($i = 0; $i<$iter; $i++) {
			$message = new Message();
			$message->Author = $faker->name;
			$message->Body = $faker->text(160);
			$message->Posted = $faker->unixTime;
			$message->write();

			echo '@';
			flush();
		}
	}

	public function run($request) {
		$iter = (int)$request->getVar('iter');
		if (!$iter) $iter = 1000;

		$this->truncate();

		increase_time_limit_to(600);
		increase_memory_limit_to('512M');

		$this->generateMessages($iter);
	}

}


