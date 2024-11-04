import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://bpzcafaystrwmukblixj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwemNhZmF5c3Ryd211a2JsaXhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1NTExNDcsImV4cCI6MjA0NjEyNzE0N30.EBiBYZA9EM_5HZQsvLwH0X46HBCBgTsGo0iW57Sb_o8');

// Controller to get all student data
export const getAllStudents = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('students')
            .select('*')
            .order('id');

        if (error) throw error;

        res.status(200).json({ 
            success: true, 
            data: data 
        });
    } catch (error) {
        console.log('Error fetching students:', error);
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// Controller to get student statistics
export const getStudentStats = async (req, res) => {
    try {
        // Get total count
        const { count: totalCount, error: totalError } = await supabase
            .from('students')
            .select('*', { count: 'exact', head: true });

        if (totalError) throw totalError;

        // Get active students count
        const { count: activeCount, error: activeError } = await supabase
            .from('students')
            .select('*', { count: 'exact', head: true })
            .eq('status', 'Active');

        if (activeError) throw activeError;

        // Get inactive students count
        const { count: inactiveCount, error: inactiveError } = await supabase
            .from('students')
            .select('*', { count: 'exact', head: true })
            .eq('status', 'Inactive');

        if (inactiveError) throw inactiveError;

        res.status(200).json({
            success: true,
            stats: {
                totalStudents: totalCount,
                activeStudents: activeCount,
                inactiveStudents: inactiveCount
            }
        });
    } catch (error) {
        console.log('Error fetching student statistics:', error);
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};