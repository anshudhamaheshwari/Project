import javax.swing.*;  
import java.awt.*;  
import java.awt.event.*;  
public class Problem1 extends Frame implements ActionListener{  
    JTextField tf; 
	JLabel l; 
	JButton b;  
    Problem1(){ 
	    tf=new JTextField();  
        tf.setBounds(50,50, 150,20);  
        l=new JLabel();  
        l.setBounds(50,100, 250,20);      
        b=new JButton("click for result");  
        b.setBounds(50,150,150,30);  
        b.addActionListener(this);    
        add(b);add(tf);add(l);    
        setSize(400,400);  
        setLayout(null);  
        setVisible(true);  
    }  
    public void actionPerformed(ActionEvent e) {  
        try{  
        String output =tf.getText();  
        l.setText(output);  
        }catch(Exception ex){System.out.println(ex);}  
    }  
    public static void main(String[] args) {  
        new Problem1();  
    } }  