/**
 * Generated Tool: databasesTool_0455
 * Domain: Databases
 * ID: 0455
 */
exports.databasesTool_0455 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0455:', error);
    throw error;
  }
};
