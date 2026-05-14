/**
 * Generated Tool: databasesTool_0862
 * Domain: Databases
 * ID: 0862
 */
exports.databasesTool_0862 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0862:', error);
    throw error;
  }
};
