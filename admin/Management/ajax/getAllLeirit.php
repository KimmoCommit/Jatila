<?php

require_once '../core/init.php';

			$usedb = new LeiriPDO();
			$result = $usedb->getAllLeirit();
			echo json_encode($result);

?>