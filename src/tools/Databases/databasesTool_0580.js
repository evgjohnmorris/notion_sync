/**
 * Generated Tool: databasesTool_0580
 * Domain: Databases
 * ID: 0580
 */
exports.databasesTool_0580 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0580:', error);
    throw error;
  }
};
