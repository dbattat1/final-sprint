import React from 'react';


export function EventCalendar() {
    return (
        <div className="calendar-container">
            <table>
                <thead>
                    <tr>
                    <td>'א</td>
                    <td>'ב</td>
                    <td>'ג</td>
                    <td>'ד</td>
                    <td>'ה</td>
                    <td>'ו</td>
                    <td>'ש</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                    </tr>
                    <tr>
                        <td>22</td>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                    </tr>
                    <tr>
                        <td>29</td>
                        <td>30</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
            <label>How Many People?</label>
            <input type="number"></input>
            <button>Book!</button>
        </div>
    )
}