enum StartType {
    Script(String),
    Web(String),
}

impl StartType {
    fn get(s: &str) -> String {
        match self {
            StartType::Script(s) => String::from(s),
            StartType::Web(s) => "gui.py".to_string(),
        }
    }
}


pub struct ScriptApp {
    root_dir_path: &str,
    start_script_path: &str,
    log_dir_path: &str,
    start_type:StartType,
}

impl ScriptApp {
    pub fn new(root_directory: &str, start_type: StartType) -> Self {
        ScriptApp {
            root_dir_path: root_directory,
            start_script_path: root_directory,
            log_dir_path: root_directory + "/log",
            start_type: StartType::StartType::get(start_type),
        }
    }
    pub fn run(&self) {
        println!("start script path: {}", self.start_script_path);
    }
}