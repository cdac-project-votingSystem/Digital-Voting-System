package com.voting.dtos;



public class PoliticalPartyAddNew {
	 
	 
	    private String partyName;

	    private String abbreviation;
	    
	    private String partyDescription;

	    private byte[] partyLogo;

		public PoliticalPartyAddNew(String partyName, String abbreviation, String partyDescription, byte[] partyLogo) {
			super();
			this.partyName = partyName;
			this.abbreviation = abbreviation;
			this.partyDescription = partyDescription;
			this.partyLogo = partyLogo;
		}
	  
	    
}
