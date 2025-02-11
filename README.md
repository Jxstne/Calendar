HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2025 Calendar</title>
    <link rel="stylesheet" href="styles.css" />
    <style>
    body {
        font-family: Arial, sans-serif;
        background-color: #e9ecef;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #333;
        margin-bottom: 20px;
    }
    .calendar {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-top: 20px;
    }
    .month {
        background-color: #ffffff;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.2s;
    }
    .month:hover {
        transform: scale(1.05);
    }
    
    
    .month h2 {
        text-align: center;
        color: #007bff;
        margin-bottom: 10px;
    }
    .days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        margin-top: 10px;
    }
    .day {
        padding: 15px;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f8f9fa;
        transition: background-color 0.3s;
    }
    .day:hover {
        background-color: #007bff;
        color: white;
    }
    .day-name {
        font-weight: bold;
        color: #495057;
    }
</style>
</head>
<body>
  

<h1>2025 Calendar</h1>
<p id="currentTime"></p>
      <script src="script.js"></script>
<div class="calendar">
    <div class="month">
        <h2>January</h2>
        <div class="days">
            <div class="day day-name">Sun</div>
            <div class="day day-name">Mon</div>
            <div class="day day-name">Tue</div>
            <div class="day day-name">Wed</div>
            <div class="day day-name">Thu</div>
            <div class="day day-name">Fri</div>
            <div class="day day-name">Sat</div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div style="color: red;" class="day">1</div>
            <div class="day">2</div>
            <div class="day">3</div>
            <div class="day">4</div>
            <div class="day">5</div>
            <div class="day">6</div>
            <div class="day">7</div>
            <div class="day">8</div>
            <div class="day">9</div>
            <div class="day">10</div>
            <div class="day">11</div>
            <div class="day">12</div>
            <div class="day">13</div>
            <div class="day">14</div>
            <div class="day">15</div>
            <div class="day">16</div>
            <div class="day">17</div>
            <div class="day">18</div>
            <div class="day">19</div>
            <div class="day">20</div>
            <div class="day">21</div>
            <div class="day">22</div>
            <div class="day">23</div>
            <div class="day">24</div>
            <div class="day">25</div>
            <div class="day">26</div>
            <div class="day">27</div>
            <div class="day">28</div>
            <div style="color: red;" class="day">29</div>
            <div class="day">30</div>
            <div class="day">31</div>
        </div>
    </div>
    <div class="month">
        <h2>February</h2>
        <div class="days">
            <div class="day day-name">Sun</div>
            <div class="day day-name">Mon</div>
            <div class="day day-name">Tue</div>
            <div class="day day-name">Wed</div>
            <div class="day day-name">Thu</div>
            <div class="day day-name">Fri</div>
            <div class="day day-name">Sat</div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day">1</div>
            <div class="day">2</div>
            <div class="day">3</div>
            <div class="day">4</div>
            <div class="day">5</div>
            <div class="day">6</div>
            <div class="day">7</div>
            <div class="day">8</div>
            <div class="day">9</div>
            <div class="day">10</div>
            <div class="day">11</div>
            <div class="day">12</div>
            <div class="day">13</div>
            <div class="day">14</div>
            <div class="day">15</div>
            <div class="day">16</div>
            <div class="day">17</div>
            <div class="day">18</div>
            <div class="day">19</div>
            <div class="day">20</div>
            <div class="day">21</div>
            <div class="day">22</div>
            <div class="day">23</div>
            <div class="day">24</div>
            <div class="day">25</div>
            <div class="day">26</div>
            <div class="day">27</div>
            <div class="day">28</div>
            <div class="day"></div>
        </div>
    </div>
        <div class="month">
        <h2>March</h2>
        <div class="days">
            <div class="day day-name">Sun</div>
            <div class="day day-name">Mon</div>
            <div class="day day-name">Tue</div>
            <div class="day day-name">Wed</div>
            <div class="day day-name">Thu</div>
            <div class="day day-name">Fri</div>
            <div class="day day-name">Sat</div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day">1</div>
            <div class="day">2</div>
            <div class="day">3</div>
            <div class="day">4</div>
            <div class="day">5</div>
            <div class="day">6</div>
            <div class="day">7</div>
            <div class="day">8</div>
            <div class="day">9</div>
            <div class="day">10</div>
            <div class="day">11</div>
            <div class="day">12</div>
            <div class="day">13</div>
            <div class="day">14</div>
            <div class="day">15</div>
            <div class="day">16</div>
            <div class="day">17</div>
            <div class="day">18</div>
            <div class="day">19</div>
            <div class="day">20</div>
            <div class="day">21</div>
            <div class="day">22</div>
            <div class="day">23</div>
            <div class="day">24</div>
            <div class="day">25</div>
            <div class="day">26</div>
            <div class="day">27</div>
            <div class="day">28</div>
            <div class="day">29</div>
            <div class="day">30</div>
            <div style="color: red;" class="day">31</div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
        </div>
    </div>
    
    <div class="month">
        <h2>April</h2>
        <div class="days">
            <div class="day day-name">Sun</div>
            <div class="day day-name">Mon</div>
            <div class="day day-name">Tue</div>
            <div class="day day-name">Wed</div>
            <div class="day day-name">Thu</div>
            <div class="day day-name">Fri</div>
            <div class="day day-name">Sat</div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day">1</div>
            <div class="day">2</div>
            <div class="day">3</div>
            <div class="day">4</div>
            <div class="day">5</div>
            <div class="day">6</div>
            <div class="day">7</div>
            <div class="day">8</div>
            <div style="color: red;" class="day">9</div>
            <div class="day">10</div>
            <div class="day">11</div>
            <div class="day">12</div>
            <div class="day">13</div>
            <div class="day">14</div>
            <div class="day">16</div>
            <div style="color: red;" class="day">17</div>
            <div style="color: red;" class="day">18</div>
            <div style="color: red;" class="day">19</div>
            <div class="day">20</div>
            <div class="day">21</div>
            <div class="day">22</div>
            <div class="day">23</div>
            <div class="day">24</div>
            <div class="day">25</div>
            <div class="day">26</div>
            <div class="day">27</div>
            <div class="day">28</div>
            <div class="day">29</div>
            <div class="day">30</div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
        </div>
    </div>
    
    <div class="month">
        <h2>May</h2>
        <div class="days">
            <div class="day day-name">Sun</div>
            <div class="day day-name">Mon</div>
            <div class="day day-name">Tue</div>
            <div class="day day-name">Wed</div>
            <div class="day day-name">Thu</div>
            <div class="day day-name">Fri</div>
            <div class="day day-name">Sat</div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div style="color: red;" class="day">1</div>
            <div class="day">2</div>
            <div class="day">3</div>
            <div class="day">4</div>
            <div class="day">5</div>
            <div class="day">6</div>
            <div class="day">7</div>
            <div class="day">8</div>
            <div class="day">9</div>
            <div class="day">10</div>
            <div class="day">11</div>
            <div class="day">12</div>
            <div class="day">13</div>
            <div class="day">14</div>
            <div class="day">16</div>
            <div class="day">17</div>
            <div class="day">18</div>
            <div class="day">19</div>
            <div class="day">20</div>
            <div class="day">21</div>
            <div class="day">23</div>
            <div class="day">24</div>
            <div class="day">25</div>
            <div class="day">26</div>
            <div class="day">27</div>
            <div class="day">28</div>
            <div class="day">29</div>
            <div class="day">30</div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
        </div>
    </div>
    
    <div class="month">
        <h2>June</h2>
        <div class="days">
            <div class="day day-name">Sun</div>
            <div class="day day-name">Mon</div>
            <div class="day day-name">Tue</div>
            <div class="day day-name">Wed</div>
            <div class="day day-name">Thu</div>
            <div class="day day-name">Fri</div>
            <div class="day day-name">Sat</div>
            <div class="day">1</div>
            <div class="day">2</div>
            <div class="day">3</div>
            <div class="day">4</div>
            <div class="day">5</div>
            <div style="color: red;" class="day">6</div>
            <div class="day">7</div>
            <div class="day">8</div>
            <div class="day">9</div>
            <div class="day">10</div>
            <div class="day">11</div>
            <div style="color: red;" class="day">12</div>
            <div class="day">13</div>
            <div class="day">14</div>
            <div class="day">15</div>
            <div class="day">16</div>
            <div class="day">17</div>
            <div class="day">18</div>
            <div class="day">19</div>
            <div class="day">20</div>
            <div class="day">21</div>
            <div class="day">22</div>
            <div class="day">23</div>
            <div class="day">24</div>
            <div class="day">25</div>
            <div class="day">26</div>
            <div class="day">27</div>
            <div class="day">28</div>
            <div class="day">29</div>
            <div class="day">30</div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            
        </div>
    </div>
    
    <div class="month">
        <h2>July</h2>
        <div class="days">
            <div class="day day-name">Sun</div>
            <div class="day day-name">Mon</div>
            <div class="day day-name">Tue</div>
            <div class="day day-name">Wed</div>
            <div class="day day-name">Thu</div>
            <div class="day day-name">Fri</div>
            <div class="day day-name">Sat</div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day">1</div>
            <div class="day">2</div>
            <div class="day">3</div>
            <div class="day">4</div>
            <div class="day">5</div>
            <div class="day">6</div>
            <div class="day">7</div>
            <div class="day">8</div>
            <div class="day">9</div>
            <div class="day">10</div>
            <div class="day">11</div>
            <div class="day">12</div>
            <div class="day">13</div>
            <div class="day">14</div>
            <div class="day">15</div>
            <div class="day">16</div>
            <div class="day">17</div>
            <div class="day">18</div>
            <div class="day">19</div>
            <div class="day">20</div>
            <div class="day">21</div>
            <div class="day">22</div>
            <div class="day">23</div>
            <div class="day">24</div>
            <div class="day">25</div>
            <div class="day">26</div>
            <div class="day">27</div>
            <div class="day">28</div>
            <div class="day">29</div>
            <div class="day">30</div>
            <div class="day">31</div>
            <div class="day"></div>
            <div class="day"></div>
        </div>
    </div>
    
    <div class="month">
        <h2>August</h2>
        <div class="days">
            <div class="day day-name">Sun</div>
            <div class="day day-name">Mon</div>
            <div class="day day-name">Tue</div>
            <div class="day day-name">Wed</div>
            <div class="day day-name">Thu</div>
            <div class="day day-name">Fri</div>
            <div class="day day-name">Sat</div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day">1</div>
            <div class="day">2</div>
            <div class="day">3</div>
            <div class="day">4</div>
            <div class="day">5</div>
            <div class="day">6</div>
            <div class="day">7</div>
            <div class="day">8</div>
            <div class="day">9</div>
            <div class="day">10</div>
            <div class="day">11</div>
            <div class="day">12</div>
            <div class="day">13</div>
            <div class="day">14</div>
            <div class="day">15</div>
            <div class="day">16</div>
            <div class="day">17</div>
            <div class="day">18</div>
            <div class="day">19</div>
            <div class="day">20</div>
            <div style="color: red;" class="day">21</div>
            <div class="day">22</div>
            <div class="day">23</div>
            <div class="day">24</div>
            <div style="color: red;" class="day">25</div>
            <div class="day">26</div>
            <div class="day">27</div>
            <div class="day">28</div>
            <div class="day">29</div>
            <div class="day">30</div>
            <div class="day">31</div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
        </div>
    </div>
    
    <div class="month">
        <h2>September</h2>
        <div class="days">
            <div class="day day-name">Sun</div>
            <div class="day day-name">Mon</div>
            <div class="day day-name">Tue</div>
            <div class="day day-name">Wed</div>
            <div class="day day-name">Thu</div>
            <div class="day day-name">Fri</div>
            <div class="day day-name">Sat</div>
            <div class="day"></div>
            <div class="day">1</div>
            <div class="day">2</div>
            <div class="day">3</div>
            <div class="day">4</div>
            <div class="day">5</div>
            <div class="day">6</div>
            <div class="day">7</div>
            <div class="day">8</div>
            <div class="day">9</div>
            <div class="day">10</div>
            <div class="day">11</div>
            <div class="day">12</div>
            <div class="day">13</div>
            <div class="day">14</div>
            <div class="day">15</div>
            <div class="day">16</div>
            <div class="day">17</div>
            <div class="day">18</div>
            <div class="day">19</div>
            <div class="day">20</div>
            <div class="day">21</div>
            <div class="day">22</div>
            <div class="day">23</div>
            <div class="day">24</div>
            <div class="day">25</div>
            <div class="day">26</div>
            <div class="day">27</div>
            <div class="day">28</div>
            <div class="day">29</div>
            <div class="day">30</div>
            <div class="day">31</div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
        </div>
    </div>
    
    <div class="month">
        <h2>Octuber</h2>
        <div class="days">
            <div class="day day-name">Sun</div>
            <div class="day day-name">Mon</div>
            <div class="day day-name">Tue</div>
            <div class="day day-name">Wed</div>
            <div class="day day-name">Thu</div>
            <div class="day day-name">Fri</div>
            <div class="day day-name">Sat</div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day">1</div>
            <div class="day">2</div>
            <div class="day">3</div>
            <div class="day">4</div>
            <div class="day">5</div>
            <div class="day">6</div>
            <div class="day">7</div>
            <div class="day">8</div>
            <div class="day">9</div>
            <div class="day">10</div>
            <div class="day">11</div>
            <div class="day">12</div>
            <div class="day">13</div>
            <div class="day">14</div>
            <div class="day">15</div>
            <div class="day">16</div>
            <div class="day">17</div>
            <div class="day">18</div>
            <div class="day">19</div>
            <div class="day">20</div>
            <div class="day">21</div>
            <div class="day">22</div>
            <div class="day">23</div>
            <div class="day">24</div>
            <div class="day">25</div>
            <div class="day">26</div>
            <div class="day">27</div>
            <div class="day">28</div>
            <div class="day">29</div>
            <div class="day">30</div>
            <div class="day">31</div>
            <div class="day"></div>
            
        </div>
    </div>
    
    <div class="month">
        <h2>November</h2>
        <div class="days">
            <div class="day day-name">Sun</div>
            <div class="day day-name">Mon</div>
            <div class="day day-name">Tue</div>
            <div class="day day-name">Wed</div>
            <div class="day day-name">Thu</div>
            <div class="day day-name">Fri</div>
            <div class="day day-name">Sat</div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div style="color: red;" class="day">1</div>
            <div class="day">2</div>
            <div class="day">3</div>
            <div class="day">4</div>
            <div class="day">5</div>
            <div class="day">6</div>
            <div class="day">7</div>
            <div class="day">8</div>
            <div class="day">9</div>
            <div class="day">10</div>
            <div class="day">11</div>
            <div class="day">12</div>
            <div class="day">13</div>
            <div class="day">14</div>
            <div class="day">15</div>
            <div class="day">16</div>
            <div class="day">17</div>
            <div class="day">18</div>
            <div class="day">19</div>
            <div class="day">20</div>
            <div class="day">21</div>
            <div class="day">22</div>
            <div class="day">23</div>
            <div class="day">24</div>
            <div class="day">25</div>
            <div class="day">26</div>
            <div class="day">27</div>
            <div class="day">28</div>
            <div class="day">29</div>
            <div style="color: red;" class="day">30</div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
        </div>
    </div>
    
    <div class="month">
        <h2>December</h2>
        <div class="days">
            <div class="day day-name">Sun</div>
            <div class="day day-name">Mon</div>
            <div class="day day-name">Tue</div>
            <div class="day day-name">Wed</div>
            <div class="day day-name">Thu</div>
            <div class="day day-name">Fri</div>
            <div class="day day-name">Sat</div>
            <div class="day"></div>
            <div class="day">1</div>
            <div class="day">2</div>
            <div class="day">3</div>
            <div class="day">4</div>
            <div class="day">5</div>
            <div class="day">6</div>
            <div class="day">7</div>
            <div style="color: red;" class="day">8</div>
            <div class="day">9</div>
            <div class="day">10</div>
            <div class="day">11</div>
            <div class="day">12</div>
            <div class="day">13</div>
            <div class="day">14</div>
            <div class="day">15</div>
            <div class="day">16</div>
            <div class="day">17</div>
            <div class="day">18</div>
            <div class="day">19</div>
            <div class="day">20</div>
            <div class="day">21</div>
            <div class="day">22</div>
            <div class="day">23</div>
            <div class="day">24</div>
            <div style="color: red;" class="day">25</div>
            <div class="day">26</div>
            <div class="day">27</div>
            <div class="day">28</div>
            <div class="day">29</div>
            <div style="color: red;" class="day">30</div>
            <div style="color: red;" class="day">31</div>
            <div class="day"></div>
            <div class="day"></div>
            <div class="day"></div>
        </div>
    </div>

CSS

<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #e9ecef;
        margin: 0;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #333;
        margin-bottom: 20px;
    }
    .calendar {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-top: 20px;
    }
    .month {
        background-color: #ffffff;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.2s;
    }
    .month:hover {
        transform: scale(1.05);
    }
    .month h2 {
        text-align: center;
        color: #007bff;
        margin-bottom: 10px;
    }
    .days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        margin-top: 10px;
    }
    .day {
        padding: 15px;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f8f9fa;
        transition: background-color 0.3s;
    }
    .day:hover {
        background-color: #007bff;
        color: white;
    }
    .day-name {
        font-weight: bold;
        color: #495057;
    }
</style>

JAVA

function showTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    };
    document.getElementById('currentTime').innerHTML = now.toLocaleString('en-US', options);
}

showTime();
setInterval(showTime, 1000);

