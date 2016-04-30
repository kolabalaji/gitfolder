package com.learningjava;

import java.awt.Graphics;

import javax.swing.*;


public class HelloComponent extends JComponent{

	
public void paintComponent(Graphics g){
	g.drawString("Hello .. Java ", 125, 95);
	
}
}
